"""
Rate limiting configuration using SlowAPI.
Automatically checks Redis availability and falls back to in-memory storage.
"""

from slowapi import Limiter
from slowapi.util import get_remote_address
from app.core.config import get_settings
from loguru import logger
import redis

settings = get_settings()

def get_storage_uri() -> str:
    """Check Redis availability and return storage URI."""
    try:
        r = redis.Redis(
            host=settings.REDIS_HOST,
            port=settings.REDIS_PORT,
            socket_timeout=1.0,
        )
        r.ping()
        logger.info(f"Redis is available. Using Redis for rate limiting: {settings.REDIS_URL}")
        return settings.REDIS_URL
    except Exception as e:
        logger.warning(f"Redis not available for rate limiting ({e}). Falling back to memory://")
        return "memory://"

limiter = Limiter(
    key_func=get_remote_address,
    storage_uri=get_storage_uri(),
)
