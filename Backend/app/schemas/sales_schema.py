"""
Pydantic schemas for Sales, Logistics, and Procurement modules.
"""

from pydantic import BaseModel, Field
from typing import Optional, List, Any
from datetime import datetime


# ── Quotation ─────────────────────────────────────────────────────

class QuotationCreate(BaseModel):
    id: Optional[str] = None
    customer_id: Optional[str] = None
    customer_name: str = Field(..., min_length=1, max_length=255)
    total: float = Field(0.0, ge=0)
    valid_until: Optional[datetime] = None
    status: str = Field("Sent", max_length=50)
    items: Optional[List[Any]] = None
    notes: Optional[str] = None


class QuotationUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    notes: Optional[str] = None


# ── Sales Order ───────────────────────────────────────────────────

class SalesOrderCreate(BaseModel):
    id: Optional[str] = None
    customer_id: Optional[str] = None
    customer_name: str = Field(..., min_length=1, max_length=255)
    shipping_address: Optional[str] = None
    billing_address: Optional[str] = None
    status: str = Field("Processing", max_length=50)
    total: float = Field(0.0, ge=0)
    items: Optional[List[Any]] = None
    shipment_id: Optional[str] = None
    notes: Optional[str] = None


class SalesOrderUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    shipment_id: Optional[str] = None
    notes: Optional[str] = None


# ── Shipment ──────────────────────────────────────────────────────

class ShipmentCreate(BaseModel):
    id: Optional[str] = None
    order_id: Optional[str] = None
    customer_name: Optional[str] = Field(None, max_length=255)
    carrier: Optional[str] = Field(None, max_length=100)
    tracking_code: Optional[str] = Field(None, max_length=100)
    source: Optional[str] = None
    destination: Optional[str] = None
    status: str = Field("Ordered", max_length=50)
    est_delivery: Optional[datetime] = None
    history: Optional[List[Any]] = None


class ShipmentStatusUpdate(BaseModel):
    status: str = Field(..., max_length=50)
    activity: str = Field(..., min_length=1)


# ── Purchase Order ────────────────────────────────────────────────

class PurchaseOrderCreate(BaseModel):
    id: Optional[str] = None
    vendor_id: Optional[str] = None
    vendor_name: str = Field(..., min_length=1, max_length=255)
    total: float = Field(0.0, ge=0)
    expected_delivery: Optional[datetime] = None
    status: str = Field("Sent", max_length=50)
    items: Optional[List[Any]] = None
    notes: Optional[str] = None
    comments: Optional[List[Any]] = None


class PurchaseOrderUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    notes: Optional[str] = None
    comments: Optional[List[Any]] = None
