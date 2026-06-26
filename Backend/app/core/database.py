"""
SQLAlchemy engine, session factory, and declarative Base.

Production configuration with connection pool recycling,
timeout management, and optimistic locking support.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import get_settings

settings = get_settings()

engine = create_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,            # Detect stale connections before use
    pool_size=settings.DB_POOL_SIZE,           # Persistent connections per worker
    max_overflow=settings.DB_MAX_OVERFLOW,      # Extra connections under burst load
    pool_recycle=1800,             # Recycle connections every 30 min (prevents PG timeout kills)
    pool_timeout=30,               # Max 30s wait for a free connection from pool
    echo=False,
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
