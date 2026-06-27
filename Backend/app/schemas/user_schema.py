"""
User CRUD schemas.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from uuid import UUID


class UserResponse(BaseModel):
    id: UUID
    email: EmailStr
    full_name: str
    phone: Optional[str] = None
    is_active: bool
    is_verified: bool
    roles: list[str] = []
    department: Optional[str] = "General"
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=255)
    email: EmailStr
    phone: Optional[str] = Field(None, max_length=20)
    role: str
    department: str
    permissions: Optional[dict] = None


class UserUpdate(BaseModel):
    full_name: Optional[str] = Field(None, min_length=2, max_length=255)
    phone: Optional[str] = Field(None, max_length=20)
    is_active: Optional[bool] = None
    department: Optional[str] = None
    role: Optional[str] = None


class UserListResponse(BaseModel):
    users: list[UserResponse]
    total: int
    page: int
    per_page: int
