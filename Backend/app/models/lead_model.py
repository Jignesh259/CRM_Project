"""
Lead and LeadActivity database models.

Multi-tenancy: Every lead row carries a `company_id` (UUID) that matches
the `company_id` of the User who created it.  All repository queries filter
on this column so a user can NEVER read or mutate another tenant's leads.
"""

import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Lead(Base):
    __tablename__ = "leads"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)

    # ── Tenant isolation key (ACID-Consistency: NOT NULL enforced) ──
    # Must be set on every INSERT — the repository always receives it
    # from current_user.company_id so it is never guessable or forgeable.
    company_id = Column(
        UUID(as_uuid=True),
        nullable=False,
        index=True,
    )

    first_name = Column(String(100), nullable=False)
    last_name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    phone = Column(String(30), nullable=True)
    company = Column(String(255), nullable=False)
    job_title = Column(String(100), nullable=True)
    website = Column(String(255), nullable=True)
    status = Column(String(50), nullable=False, default="New")
    temp = Column(String(50), nullable=False, default="warm")  # hot, warm, cold
    source = Column(String(50), nullable=False, default="Organic Search")
    estimated_value = Column(Float, nullable=True)
    notes = Column(Text, nullable=True)
    owner_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
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
    owner = relationship("User", foreign_keys=[owner_id])
    created_by = relationship("User", foreign_keys=[created_by_id])
    activities = relationship(
        "LeadActivity",
        back_populates="lead",
        cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<Lead {self.first_name} {self.last_name} company_id={self.company_id}>"



class LeadActivity(Base):
    __tablename__ = "lead_activities"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    lead_id = Column(
        UUID(as_uuid=True),
        ForeignKey("leads.id", ondelete="CASCADE"),
        nullable=False,
    )
    activity_type = Column(String(50), nullable=False)  # call, email, note, meet, task
    subject = Column(String(255), nullable=False)
    notes = Column(Text, nullable=True)
    activity_date = Column(String(50), nullable=True)
    activity_time = Column(String(50), nullable=True)
    assigned_to_id = Column(
        UUID(as_uuid=True),
        ForeignKey("users.id", ondelete="SET NULL"),
        nullable=True,
    )
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    # Relationships
    lead = relationship("Lead", back_populates="activities")
    assigned_to = relationship("User", foreign_keys=[assigned_to_id])

    def __repr__(self) -> str:
        return f"<LeadActivity {self.activity_type} - {self.subject}>"
