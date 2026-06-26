"""
Customer database models.

Multi-tenancy: Every customer row carries a `company_id` (UUID) that matches
the `company_id` of the User who created it.
"""

import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Customer(Base):
    __tablename__ = "customers"

    id = Column(String(50), primary_key=True) # E.g., 'cust_123456789' or UUID string

    # Tenant isolation key
    company_id = Column(
        UUID(as_uuid=True),
        nullable=True,
        index=True,
    )

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(30), nullable=True)
    company = Column(String(255), nullable=False)
    industry = Column(String(100), nullable=True)
    website = Column(String(255), nullable=True)
    
    plan_type = Column(String(50), nullable=False, default="starter") # starter, professional, enterprise
    assigned_manager = Column(String(100), nullable=True) # Simple string or user ID mapping

    mrr = Column(Float, nullable=False, default=0.0)
    ltv = Column(Float, nullable=False, default=0.0)
    health = Column(Float, nullable=False, default=100.0)
    status = Column(String(50), nullable=False, default="Active") # Active, Pending, Inactive
    last_order = Column(String(50), nullable=True)
    notes = Column(Text, nullable=True)
    
    tags = Column(JSONB, nullable=True) # Array of strings

    created_by_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    # Relationships
    created_by = relationship("User", foreign_keys=[created_by_id])

    def __repr__(self) -> str:
        return f"<Customer {self.first_name} {self.last_name} company_id={self.company_id}>"
