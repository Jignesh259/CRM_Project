"""
Pydantic schemas for Lead and LeadActivity CRUD.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime
from uuid import UUID


# ── Lead Activity Schemas ─────────────────────────────────────

class LeadActivityBase(BaseModel):
    activity_type: str = Field(..., description="call, email, note, meet, task")
    subject: str = Field(..., min_length=1, max_length=255)
    notes: Optional[str] = None
    activity_date: Optional[str] = None
    activity_time: Optional[str] = None
    assigned_to_id: Optional[UUID] = None


class LeadActivityCreate(LeadActivityBase):
    pass


class LeadActivityResponse(LeadActivityBase):
    id: UUID
    lead_id: UUID
    created_at: datetime

    class Config:
        from_attributes = True


# ── Lead Schemas ──────────────────────────────────────────────

class LeadBase(BaseModel):
    first_name: str = Field(..., min_length=1, max_length=100)
    last_name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=30)
    company: str = Field(..., min_length=1, max_length=255)
    job_title: Optional[str] = Field(None, max_length=100)
    website: Optional[str] = Field(None, max_length=255)
    status: str = Field("New", max_length=50)
    temp: str = Field("warm", max_length=50)
    source: str = Field("Organic Search", max_length=50)
    estimated_value: Optional[float] = Field(None, ge=0)
    notes: Optional[str] = None
    owner_id: Optional[UUID] = None


class LeadCreate(LeadBase):
    pass


class LeadUpdate(BaseModel):
    first_name: Optional[str] = Field(None, min_length=1, max_length=100)
    last_name: Optional[str] = Field(None, min_length=1, max_length=100)
    email: Optional[EmailStr] = None
    phone: Optional[str] = Field(None, max_length=30)
    company: Optional[str] = Field(None, min_length=1, max_length=255)
    job_title: Optional[str] = Field(None, max_length=100)
    website: Optional[str] = Field(None, max_length=255)
    status: Optional[str] = Field(None, max_length=50)
    temp: Optional[str] = Field(None, max_length=50)
    source: Optional[str] = Field(None, max_length=50)
    estimated_value: Optional[float] = Field(None, ge=0)
    notes: Optional[str] = None
    owner_id: Optional[UUID] = None


class LeadResponse(LeadBase):
    id: UUID
    created_by_id: Optional[UUID] = None
    created_at: datetime
    updated_at: datetime
    activities: List[LeadActivityResponse] = []

    class Config:
        from_attributes = True


class LeadListResponse(BaseModel):
    leads: List[LeadResponse]
    total: int
    page: int
    per_page: int
