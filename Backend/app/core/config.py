"""
Application configuration using Pydantic Settings.
Loads all environment variables from .env file.

Includes production-level settings for connection pooling,
worker count, rate limiting, and CORS.
"""

from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    """Central configuration loaded from environment variables."""

    # ── Database ──────────────────────────────────────────────
    DB_HOST: str = "localhost" or os.getenv("DB_HOST")
    DB_PORT: int = 2509 or os.getenv("DB_PORT")
    DB_NAME: str = "crm_db" or os.getenv("DB_NAME")
    DB_USER: str = "postgres" or os.getenv("DB_USER")
    DB_PASSWORD: str = "password" or os.getenv("DB_PASSWORD")
    DB_POOL_SIZE: int = 10 or os.getenv("DB_POOL_SIZE")          # Persistent connections per worker
    DB_MAX_OVERFLOW: int = 20       # Extra connections under burst load

    # ── JWT ───────────────────────────────────────────────────
    SECRET_KEY: str = "supersecretkey" or os.getenv("SECRET_KEY")
    ALGORITHM: str = "HS256" or os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30 or os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES")
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7 or os.getenv("REFRESH_TOKEN_EXPIRE_DAYS")

    # ── Redis ─────────────────────────────────────────────────
    REDIS_HOST: str = "localhost" or os.getenv("REDIS_HOST")
    REDIS_PORT: int = 6379 or os.getenv("REDIS_PORT")
    REDIS_MAX_CONNECTIONS: int = 20 or os.getenv("REDIS_MAX_CONNECTIONS")  # Max concurrent Redis connections per worker

    # ── SMTP / Email ─────────────────────────────────────────
    SMTP_SERVER: str = "smtp.gmail.com" or os.getenv("SMTP_SERVER")
    SMTP_PORT: int = 587 or os.getenv("SMTP_PORT")
    SMTP_EMAIL: str = ""
    SMTP_PASSWORD: str = ""

    # ── Application ──────────────────────────────────────────
    APP_NAME: str = "CRM API"
    APP_VERSION: str = "1.0.0"
    FRONTEND_URL: str = "http://localhost:3000"
    OTP_EXPIRE_MINUTES: int = 5

    # ── Production ───────────────────────────────────────────
    WORKERS: int = 4                # Uvicorn/Gunicorn worker count
    ENVIRONMENT: str = "development"  # development | staging | production
    ALLOWED_ORIGINS: str = ""       # Comma-separated allowed origins (empty = use FRONTEND_URL)

    @property
    def DATABASE_URL(self) -> str:
        import urllib.parse
        encoded_password = urllib.parse.quote_plus(self.DB_PASSWORD)
        return (
            f"postgresql://{self.DB_USER}:{encoded_password}"
            f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
        )

    @property
    def REDIS_URL(self) -> str:
        return f"redis://{self.REDIS_HOST}:{self.REDIS_PORT}/0"

    @property
    def cors_origins(self) -> list[str]:
        """Return list of allowed CORS origins for the current environment."""
        if self.ENVIRONMENT == "development":
            return ["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:3000", "http://127.0.0.1:5173"]
        if self.ALLOWED_ORIGINS:
            return [o.strip() for o in self.ALLOWED_ORIGINS.split(",")]
        return [self.FRONTEND_URL]

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"

    class Config:
        env_file = ".env"
        case_sensitive = True


@lru_cache()
def get_settings() -> Settings:
    """Cached settings instance — created once per process."""
    return Settings()
