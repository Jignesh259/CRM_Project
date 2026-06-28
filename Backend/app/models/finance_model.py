"""
Finance, Invoices, Payments, and Expense database models.
Multi-tenancy: Every row carries a `company_id` matching the User's company.
"""

from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Invoice(Base):
    __tablename__ = "invoices"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    customer_id = Column(String(50), nullable=True)
    customer_name = Column(String(255), nullable=False)
    date = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    due_date = Column(DateTime(timezone=True), nullable=True)
    items = Column(JSONB, nullable=True)                           # [{productId, name, qty, retail, total}]
    subtotal = Column(Float, nullable=False, default=0.0)
    tax = Column(Float, nullable=False, default=0.0)
    total = Column(Float, nullable=False, default=0.0)
    status = Column(String(50), nullable=False, default="Unpaid")  # Paid, Unpaid, Overdue
    history = Column(JSONB, nullable=True)                         # [{date, action, user}]

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])


class CustomerPayment(Base):
    __tablename__ = "customer_payments"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    invoice_id = Column(String(50), nullable=True)
    customer_id = Column(String(50), nullable=True)
    customer_name = Column(String(255), nullable=False)
    amount = Column(Float, nullable=False, default=0.0)
    method = Column(String(100), nullable=True)                    # Stripe, Bank Transfer, etc.
    status = Column(String(50), nullable=False, default="Pending") # Completed, Pending, Failed
    date = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    transaction_fee = Column(Float, nullable=False, default=0.0)
    settlement_date = Column(DateTime(timezone=True), nullable=True)

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])


class Expense(Base):
    __tablename__ = "expenses"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    amount = Column(Float, nullable=False, default=0.0)
    category = Column(String(100), nullable=False)                 # Rent, Software, salaries, marketing, etc.
    merchant = Column(String(255), nullable=True)
    date = Column(DateTime(timezone=True), nullable=False, server_default=func.now())
    status = Column(String(50), nullable=False, default="Pending") # Approved, Pending, Cleared, Rejected
    description = Column(Text, nullable=True)
    approved_by = Column(String(255), nullable=True)

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])
