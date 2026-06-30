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

    DB_TYPE: str = "mssql"
    DB_HOST: str = "localhost"
    DB_PORT: int = 1433
    DB_NAME: str = "crm_db"
    DB_USER: str = "sa"
    DB_PASSWORD: str = "password"
    DB_TRUSTED_CONNECTION: bool = False  # True = Windows Auth (no user/pass)
    DB_POOL_SIZE: int = 10          # Persistent connections per worker
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
    PORT: int = 19022

    # ── Production ───────────────────────────────────────────
    WORKERS: int = 4                # Uvicorn/Gunicorn worker count
    ENVIRONMENT: str = "development"  # development | staging | production
    ALLOWED_ORIGINS: str = ""       # Comma-separated allowed origins (empty = use FRONTEND_URL)

    @property
    def DATABASE_URL(self) -> str:
        import urllib.parse
        encoded_password = urllib.parse.quote_plus(self.DB_PASSWORD)
        if self.DB_TYPE.lower() == "postgresql":
            return (
                f"postgresql://{self.DB_USER}:{encoded_password}"
                f"@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"
            )
        else:
            # Use pyodbc (supports Shared Memory — SQL Express default)
            import urllib.parse
            params = {
                "driver": "ODBC Driver 17 for SQL Server",
                "server": self.DB_HOST + ("\\" + "SQLEXPRESS" if "\\" not in self.DB_HOST else ""),
                "database": self.DB_NAME,
                "TrustServerCertificate": "yes",
            }
            if self.DB_TRUSTED_CONNECTION:
                params["Trusted_Connection"] = "yes"
                conn_str = ";".join(f"{k}={v}" for k, v in params.items())
                return f"mssql+pyodbc:///?odbc_connect={urllib.parse.quote_plus(conn_str)}"
            else:
                params["UID"] = self.DB_USER
                params["PWD"] = self.DB_PASSWORD
                conn_str = ";".join(f"{k}={v}" for k, v in params.items())
                return f"mssql+pyodbc:///?odbc_connect={urllib.parse.quote_plus(conn_str)}"

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
