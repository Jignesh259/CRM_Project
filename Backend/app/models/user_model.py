"""
User model with many-to-many relationship to roles.

Multi-tenancy is implemented via `company_id`:
  - Every user belongs to exactly one company (tenant).
  - All users who register under the same company share the same `company_id`.
  - `company_id` is auto-generated as a UUID at registration time for new companies.
"""

import uuid
from sqlalchemy import Column, String, Boolean, DateTime, Table, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


# ── Association table: users ↔ roles (M2M) ──────────────────
user_roles = Table(
    "user_roles",
    Base.metadata,
    Column(
        "user_id",
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="CASCADE"),
        primary_key=True,
    ),
    Column(
        "role_id",
        UUID(as_uuid=True),
        ForeignKey("roles.id", ondelete="CASCADE"),
        primary_key=True,
    ),
)


class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255), nullable=False)
    phone = Column(String(20), nullable=True)
    is_active = Column(Boolean, default=True)
    is_verified = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    # ── Multi-Tenancy: Tenant isolation key ─────────────────
    # Every user belongs to exactly one company (tenant).
    # All users registering under the same company share the same company_id.
    # This UUID is auto-generated during registration and stored in every lead row.
    company_id = Column(
        UUID(as_uuid=True),
        nullable=False,
        index=True,
    )
    company_name = Column(String(255), nullable=False)
    department = Column(String(255), nullable=True, default="General")

    # ── Relationships ────────────────────────────────────────
    roles = relationship(
        "Role", secondary=user_roles, back_populates="users", lazy="joined"
    )
    refresh_tokens = relationship(
        "RefreshToken", back_populates="user", cascade="all, delete-orphan"
    )
    audit_logs = relationship(
        "AuditLog", back_populates="user", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<User {self.email} company={self.company_name}>"

