"""
Redis connection client — production-grade with connection pooling.

Uses a ConnectionPool for thread-safe, concurrent Redis operations.
Each request gets its own connection from the pool automatically.
"""

import redis
from app.core.config import get_settings
from loguru import logger

settings = get_settings()

# ── Connection Pool (thread-safe, shared across all requests) ──
_pool: redis.ConnectionPool | None = None
redis_client: redis.Redis | None = None


def get_redis() -> redis.Redis:
    """
    Return the global Redis client backed by a connection pool.

    The pool manages up to `REDIS_MAX_CONNECTIONS` concurrent connections.
    Each request borrows a connection, uses it, and returns it automatically.
    This eliminates race conditions and connection exhaustion under load.
    """
    global _pool, redis_client
    if redis_client is None:
        _pool = redis.ConnectionPool(
            host=settings.REDIS_HOST,
            port=settings.REDIS_PORT,
            db=0,
            decode_responses=True,
            max_connections=settings.REDIS_MAX_CONNECTIONS,
            retry_on_timeout=True,
            health_check_interval=30,  # Detect dead connections every 30s
            socket_connect_timeout=5,  # Fail fast if Redis is unreachable
            socket_timeout=5,          # Fail fast on stuck operations
        )
        redis_client = redis.Redis(connection_pool=_pool)
        logger.info(
            f"Redis pool created: {settings.REDIS_HOST}:{settings.REDIS_PORT} "
            f"(max_connections={settings.REDIS_MAX_CONNECTIONS})"
        )
    return redis_client


def close_redis() -> None:
    """Close the Redis connection pool (called on app shutdown)."""
    global _pool, redis_client
    if redis_client is not None:
        redis_client.close()
        redis_client = None
    if _pool is not None:
        _pool.disconnect()
        _pool = None
        logger.info("Redis connection pool closed")
