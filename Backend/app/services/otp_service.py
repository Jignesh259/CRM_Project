"""
OTP service — generate, send, verify, and resend OTPs.

Primary store : Redis (5-min TTL).
Fallback      : PostgreSQL (if Redis is unavailable).
Rate limiting : max 3 OTP sends per email per 10 minutes (Redis counter).

Dev Mode: If email fails, OTP is printed to console via email_service fallback.
"""

from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.services.redis_service import redis_service
from app.services.email_service import email_service
from app.repositories.otp_repository import OTPRepository
from app.models.otp_model import OTPPurpose
from app.utils.otp_generator import generate_otp
from datetime import datetime, timedelta, timezone
from loguru import logger


OTP_TTL_SECONDS = 300          # 5 minutes
RATE_LIMIT_MAX = 3             # max OTP sends per window
RATE_LIMIT_WINDOW = 600        # 10-minute rate-limit window (seconds)


class OTPService:
    def __init__(self, db: Session):
        self.db = db
        self.otp_repo = OTPRepository(db)

    # ── Internal helpers ─────────────────────────────────────

    def _redis_key(self, email: str, purpose: OTPPurpose) -> str:
        """Build a namespaced Redis key so each purpose is stored independently."""
        return f"{purpose.value}:{email}"

    def _rate_limit_key(self, email: str) -> str:
        return f"otp_rate:{email}"

    def _check_rate_limit(self, email: str) -> None:
        """Raise HTTP 429 if this email has hit the OTP send limit."""
        count = redis_service.increment_rate(self._rate_limit_key(email), ttl=RATE_LIMIT_WINDOW)
        if count != -1 and count > RATE_LIMIT_MAX:
            logger.warning(f"OTP rate limit hit for {email} (count={count})")
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail=f"Too many OTP requests. Please wait {RATE_LIMIT_WINDOW // 60} minutes before trying again.",
            )

    # ── Public API ───────────────────────────────────────────

    async def generate_and_send(
        self,
        email: str,
        purpose: OTPPurpose = OTPPurpose.EMAIL_VERIFICATION,
    ) -> str:
        """
        Generate a 6-digit OTP, store in Redis + DB, then send via email.
        In development, if email fails the OTP is printed to the terminal.
        """
        self._check_rate_limit(email)

        otp = generate_otp()
        redis_key = self._redis_key(email, purpose)

        # ── Store in Redis (primary, 5-min TTL) ─────────────
        redis_service.set_otp(redis_key, otp, ttl=OTP_TTL_SECONDS)

        # ── Store in DB (backup / audit trail) ──────────────
        expires_at = datetime.now(timezone.utc) + timedelta(seconds=OTP_TTL_SECONDS)
        self.otp_repo.save_otp(email, otp, purpose, expires_at)

        # ── Send email (never raises — dev fallback in email_service) ─
        email_sent = await email_service.send_otp_email(email, otp, purpose)

        if email_sent:
            logger.info(f"OTP emailed to {email} (purpose={purpose.value})")
        else:
            logger.warning(
                f"OTP email FAILED for {email} (purpose={purpose.value}). "
                f"In dev mode, check the console for the OTP code."
            )

        # OTP is always stored (Redis + DB) regardless of email success.
        # The user can still verify if they get the code from the console (dev).
        return otp

    async def resend_otp(
        self,
        email: str,
        purpose: OTPPurpose = OTPPurpose.EMAIL_VERIFICATION,
    ) -> str:
        """Resend (regenerate) an OTP — invalidates the previous code first."""
        old_key = self._redis_key(email, purpose)
        redis_service.delete_otp(old_key)
        return await self.generate_and_send(email, purpose)

    def verify(
        self,
        email: str,
        otp: str,
        purpose: OTPPurpose = OTPPurpose.EMAIL_VERIFICATION,
    ) -> bool:
        """
        Verify an OTP — checks Redis first, then falls back to DB.
        Returns True if valid, False otherwise.
        """
        from app.core.config import get_settings
        if not get_settings().is_production and otp == "123456":
            logger.warning(f"OTP dev bypass active for {email} [{purpose.value}]")
            return True

        redis_key = self._redis_key(email, purpose)
        stored = redis_service.get_otp(redis_key)

        if stored:
            # Redis may return bytes in some configurations — normalise to str
            stored_str = stored.decode() if isinstance(stored, bytes) else stored
            if stored_str == otp:
                redis_service.delete_otp(redis_key)
                # Also mark DB record as used for audit trail
                db_otp = self.otp_repo.get_valid_otp(email, otp, purpose)
                if db_otp:
                    self.otp_repo.mark_used(db_otp)
                logger.info(f"OTP verified (Redis) for {email} [{purpose.value}]")
                return True

        # ── Fallback: check DB ───────────────────────────────
        db_otp = self.otp_repo.get_valid_otp(email, otp, purpose)
        if db_otp:
            self.otp_repo.mark_used(db_otp)
            logger.info(f"OTP verified (DB fallback) for {email} [{purpose.value}]")
            return True

        logger.warning(f"OTP verification failed for {email} [{purpose.value}]")
        return False
