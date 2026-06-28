"""
Pydantic schemas for Finance, Invoices, Payments, and Expense modules.
"""

from pydantic import BaseModel, Field
from typing import Optional, List, Any
from datetime import datetime


# ── Invoice ───────────────────────────────────────────────────────

class InvoiceCreate(BaseModel):
    id: Optional[str] = None
    customer_id: Optional[str] = None
    customer_name: str = Field(..., min_length=1, max_length=255)
    date: Optional[datetime] = None
    due_date: Optional[datetime] = None
    items: Optional[List[Any]] = None
    subtotal: float = Field(0.0, ge=0)
    tax: float = Field(0.0, ge=0)
    total: float = Field(0.0, ge=0)
    status: str = Field("Unpaid", max_length=50)
    history: Optional[List[Any]] = None


class InvoiceUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    history: Optional[List[Any]] = None
    due_date: Optional[datetime] = None


# ── Customer Payment ──────────────────────────────────────────────

class CustomerPaymentCreate(BaseModel):
    id: Optional[str] = None
    invoice_id: Optional[str] = None
    customer_id: Optional[str] = None
    customer_name: str = Field(..., min_length=1, max_length=255)
    amount: float = Field(..., ge=0)
    method: Optional[str] = Field(None, max_length=100)
    status: str = Field("Pending", max_length=50)
    date: Optional[datetime] = None
    transaction_fee: float = Field(0.0, ge=0)
    settlement_date: Optional[datetime] = None


class CustomerPaymentUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    settlement_date: Optional[datetime] = None


# ── Expense ───────────────────────────────────────────────────────

class ExpenseCreate(BaseModel):
    id: Optional[str] = None
    amount: float = Field(..., ge=0)
    category: str = Field(..., min_length=1, max_length=100)
    merchant: Optional[str] = Field(None, max_length=255)
    date: Optional[datetime] = None
    status: str = Field("Pending", max_length=50)
    description: Optional[str] = None
    approved_by: Optional[str] = Field(None, max_length=255)


class ExpenseUpdate(BaseModel):
    status: Optional[str] = Field(None, max_length=50)
    approved_by: Optional[str] = Field(None, max_length=255)
    category: Optional[str] = Field(None, max_length=100)
    amount: Optional[float] = Field(None, ge=0)
    merchant: Optional[str] = Field(None, max_length=255)
    description: Optional[str] = None
