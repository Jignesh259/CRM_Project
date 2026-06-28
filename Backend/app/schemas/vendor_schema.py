"""
Pydantic schemas for Vendor CRUD.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from uuid import UUID


class VendorBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=200)
    category: Optional[str] = Field(None, max_length=100)
    contact_person: Optional[str] = Field(None, max_length=150)
    email: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    address: Optional[str] = None
    description: Optional[str] = None
    payment_terms: Optional[str] = Field(None, max_length=100)
    min_order_qty: Optional[str] = Field(None, max_length=100)
    lead_time: Optional[str] = Field(None, max_length=100)
    status: str = Field("Active", max_length=50)


class VendorCreate(VendorBase):
    id: Optional[str] = None  # Allow client to provide a custom ID


class VendorUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=200)
    category: Optional[str] = Field(None, max_length=100)
    contact_person: Optional[str] = Field(None, max_length=150)
    email: Optional[str] = Field(None, max_length=255)
    phone: Optional[str] = Field(None, max_length=50)
    address: Optional[str] = None
    description: Optional[str] = None
    payment_terms: Optional[str] = Field(None, max_length=100)
    min_order_qty: Optional[str] = Field(None, max_length=100)
    lead_time: Optional[str] = Field(None, max_length=100)
    status: Optional[str] = Field(None, max_length=50)
    performance_score: Optional[float] = Field(None, ge=0, le=100)
    rating: Optional[float] = Field(None, ge=0, le=5)
    ytd_spend: Optional[float] = Field(None, ge=0)
    active_pos: Optional[int] = Field(None, ge=0)
    pending_deliveries: Optional[int] = Field(None, ge=0)
