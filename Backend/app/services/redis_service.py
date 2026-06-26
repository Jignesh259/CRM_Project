"""
Redis service — thin wrapper for OTP storage and token blacklisting.

Production-grade with:
- Graceful failure handling (returns None/False instead of crashing)
- Connection pool backed (via redis_client.py)
- All operations are atomic and thread-safe
"""

from app.core.redis_client import get_redis
from typing import Optional
from loguru import logger
import redis


class RedisService:
    """Convenience methods around the Redis client."""

    @property
    def _redis(self) -> Optional[redis.Redis]:
        """Get Redis client, returns None if Redis is unavailable."""
        try:
            return get_redis()
        except Exception as e:
            logger.warning(f"Redis unavailable: {e}")
            return None

    def _safe_execute(self, operation: str, func, *args, **kwargs):
        """
        Execute a Redis operation with graceful failure handling.

        In production, Redis going down should NOT crash the entire API.
        Operations fall back to DB (OTP) or skip (caching).
        """
        client = self._redis
        if client is None:
            logger.warning(f"Redis: skipping {operation} (not connected)")
            return None
        try:
            return func(client, *args, **kwargs)
        except redis.ConnectionError as e:
            logger.error(f"Redis connection error in {operation}: {e}")
            return None
        except redis.TimeoutError as e:
            logger.error(f"Redis timeout in {operation}: {e}")
            return None
        except Exception as e:
            logger.error(f"Redis error in {operation}: {e}")
            return None

    # ── OTP operations ───────────────────────────────────────

    def set_otp(self, email: str, otp: str, ttl: int = 300) -> None:
        """Store an OTP with TTL (default 5 minutes)."""
        self._safe_execute(
            "set_otp",
            lambda r, e, o, t: r.setex(f"otp:{e}", t, o),
            email, otp, ttl,
        )
        logger.debug(f"OTP stored in Redis for {email} (TTL={ttl}s)")

    def get_otp(self, email: str) -> Optional[str]:
        """Retrieve a stored OTP."""
        return self._safe_execute(
            "get_otp",
            lambda r, e: r.get(f"otp:{e}"),
            email,
        )

    def delete_otp(self, email: str) -> None:
        """Delete a stored OTP."""
        self._safe_execute(
            "delete_otp",
            lambda r, e: r.delete(f"otp:{e}"),
            email,
        )

    # ── Token blacklist ──────────────────────────────────────

    def blacklist_token(self, jti: str, ttl: int) -> None:
        """Blacklist a JWT by its ID."""
        self._safe_execute(
            "blacklist_token",
            lambda r, j, t: r.setex(f"blacklist:{j}", t, "1"),
            jti, ttl,
        )

    def is_token_blacklisted(self, jti: str) -> bool:
        """Check if a token is blacklisted."""
        result = self._safe_execute(
            "is_token_blacklisted",
            lambda r, j: r.exists(f"blacklist:{j}") > 0,
            jti,
        )
        return result if result is not None else False

    # ── Password reset tokens ───────────────────────────────

    def set_reset_token(self, email: str, token: str, ttl: int = 900) -> None:
        """Store a password reset token (default 15 minutes)."""
        self._safe_execute(
            "set_reset_token",
            lambda r, tok, e, t: r.setex(f"reset:{tok}", t, e),
            token, email, ttl,
        )

    def get_reset_email(self, token: str) -> Optional[str]:
        """Get the email associated with a reset token."""
        return self._safe_execute(
            "get_reset_email",
            lambda r, tok: r.get(f"reset:{tok}"),
            token,
        )

    def delete_reset_token(self, token: str) -> None:
        """Delete a password reset token."""
        self._safe_execute(
            "delete_reset_token",
            lambda r, tok: r.delete(f"reset:{tok}"),
            token,
        )

    # ── Rate Limiting (used by slowapi or custom limiters) ──

    def increment_rate(self, key: str, ttl: int = 60) -> int:
        """
        Increment a rate counter. Used for custom rate limiting.
        Returns the current count, or -1 if Redis is unavailable.
        """
        result = self._safe_execute(
            "increment_rate",
            lambda r, k, t: r.pipeline().incr(f"rate:{k}").expire(f"rate:{k}", t).execute()[0],
            key, ttl,
        )
        return result if result is not None else -1


redis_service = RedisService()
