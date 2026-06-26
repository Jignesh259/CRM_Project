"""
Authentication request / response schemas.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional


class RegisterRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=8, max_length=128)
    full_name: str = Field(..., min_length=2, max_length=255)
    phone: Optional[str] = Field(None, max_length=20)
    # Multi-tenancy: every registration must declare a company.
    # The backend auto-generates a unique company_id UUID for this tenant.
    company_name: str = Field(..., min_length=2, max_length=255, description="Your company or organization name")


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class AuthResponse(BaseModel):
    success: bool
    message: str
    data: Optional[dict] = None

    class Config:
        from_attributes = True

