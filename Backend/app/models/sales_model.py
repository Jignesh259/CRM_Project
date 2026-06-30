"""
Sales, Logistics, and Procurement database models.

Multi-tenancy: Every row carries a `company_id` matching the User's company.
"""

import uuid
from sqlalchemy import Column, String, DateTime, ForeignKey, Float, Integer, Text, Boolean, UUID, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class Quotation(Base):
    __tablename__ = "quotations"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    customer_id = Column(String(50), nullable=True)
    customer_name = Column(String(255), nullable=False)
    total = Column(Float, nullable=False, default=0.0)
    valid_until = Column(DateTime(timezone=True), nullable=True)
    status = Column(String(50), nullable=False, default="Sent")   # Sent, Accepted, Invoiced, Expired
    items = Column(JSON, nullable=True)                           # [{productId, name, qty, retail, total}]
    notes = Column(Text, nullable=True)

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])


class SalesOrder(Base):
    __tablename__ = "sales_orders"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    customer_id = Column(String(50), nullable=True)
    customer_name = Column(String(255), nullable=False)
    shipping_address = Column(Text, nullable=True)
    billing_address = Column(Text, nullable=True)
    status = Column(String(50), nullable=False, default="Processing")   # Processing, Shipped, Delivered, Cancelled
    total = Column(Float, nullable=False, default=0.0)
    items = Column(JSON, nullable=True)                                 # [{productId, name, qty, retail, total}]
    shipment_id = Column(String(50), nullable=True)
    notes = Column(Text, nullable=True)

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])


class Shipment(Base):
    __tablename__ = "shipments"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    order_id = Column(String(50), nullable=True)
    customer_name = Column(String(255), nullable=True)
    carrier = Column(String(100), nullable=True)
    tracking_code = Column(String(100), nullable=True)
    source = Column(String(255), nullable=True)
    destination = Column(String(255), nullable=True)
    status = Column(String(50), nullable=False, default="Ordered")  # Ordered, Picked, In Transit, Out for Delivery, Delivered
    est_delivery = Column(DateTime(timezone=True), nullable=True)
    history = Column(JSON, nullable=True)  # [{timestamp, activity}]

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])


class PurchaseOrder(Base):
    __tablename__ = "purchase_orders"

    id = Column(String(50), primary_key=True)
    company_id = Column(UUID(as_uuid=True), nullable=False, index=True)

    vendor_id = Column(String(50), nullable=True)
    vendor_name = Column(String(255), nullable=False)
    total = Column(Float, nullable=False, default=0.0)
    expected_delivery = Column(DateTime(timezone=True), nullable=True)
    status = Column(String(50), nullable=False, default="Sent")  # Sent, Approved, Received, Cancelled
    items = Column(JSON, nullable=True)    # [{productId, name, qty, cost, total}]
    notes = Column(Text, nullable=True)
    comments = Column(JSON, nullable=True) # [{id, author, text, timestamp}]

    created_by_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    created_by = relationship("User", foreign_keys=[created_by_id])
