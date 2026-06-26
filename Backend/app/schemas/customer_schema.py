"""
Pydantic schemas for Customer CRUD.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Any
from datetime import datetime
from uuid import UUID


class CustomerBase(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=30)
    company: str = Field(..., min_length=1, max_length=255)
    industry: Optional[str] = Field(None, max_length=100)
    website: Optional[str] = Field(None, max_length=255)
    
    plan_type: str = Field("starter", max_length=50)
    assigned_manager: Optional[str] = Field(None, max_length=100)
    
    mrr: float = Field(0.0, ge=0)
    ltv: float = Field(0.0, ge=0)
    health: float = Field(100.0, ge=0, le=100)
    status: str = Field("Active", max_length=50)
    last_order: Optional[str] = None
    notes: Optional[str] = None
    
    tags: Optional[List[str]] = Field(default_factory=list)


class CustomerCreate(CustomerBase):
    id: Optional[str] = None # Allow client to provide custom ID like 'cust_123'


class CustomerUpdate(BaseModel):
    first_name: Optional[str] = Field(None, min_length=1, max_length=100)
    last_name: Optional[str] = Field(None, min_length=1, max_length=100)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=30)
    company: Optional[str] = Field(None, min_length=1, max_length=255)
    industry: Optional[str] = Field(None, max_length=100)
    website: Optional[str] = Field(None, max_length=255)
    plan_type: Optional[str] = Field(None, max_length=50)
    assigned_manager: Optional[str] = Field(None, max_length=100)
    mrr: Optional[float] = Field(None, ge=0)
    ltv: Optional[float] = Field(None, ge=0)
    health: Optional[float] = Field(None, ge=0, le=100)
    status: Optional[str] = Field(None, max_length=50)
    last_order: Optional[str] = None
    notes: Optional[str] = None
    tags: Optional[List[str]] = None


class CustomerResponse(CustomerBase):
    id: str
    created_by_id: Optional[UUID] = None
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class CustomerListResponse(BaseModel):
    customers: List[CustomerResponse]
    total: int
    page: int
    per_page: int
