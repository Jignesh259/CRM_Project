"""
Vendor database model.

Multi-tenancy: Every vendor row carries a `company_id` (UUID) that matches
the `company_id` of the User who created it.
"""

import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Integer, Text, UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Vendor(Base):
    __tablename__ = "vendors"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    name = Column(String(200), nullable=False)
    category = Column(String(100), nullable=True, default="General")
    contact_person = Column(String(150), nullable=True)
    email = Column(String(255), nullable=True)
    phone = Column(String(50), nullable=True)
    address = Column(Text, nullable=True)
    description = Column(Text, nullable=True)

    payment_terms = Column(String(100), nullable=True, default="Net 30")
    min_order_qty = Column(String(100), nullable=True)
    lead_time = Column(String(100), nullable=True)

    status = Column(String(50), nullable=False, default="Active")
    performance_score = Column(Float, nullable=False, default=100.0)
    rating = Column(Float, nullable=False, default=5.0)
    ytd_spend = Column(Float, nullable=False, default=0.0)
    active_pos = Column(Integer, nullable=False, default=0)
    pending_deliveries = Column(Integer, nullable=False, default=0)

    created_by_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )

    created_by = relationship("User", foreign_keys=[created_by_id])

    def __repr__(self) -> str:
        return f"<Vendor {self.name} company_id={self.company_id}>"
