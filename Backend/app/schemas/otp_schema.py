"""
OTP request / response schemas.
"""

from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from app.models.otp_model import OTPPurpose


class SendOTPRequest(BaseModel):
    email: EmailStr


class VerifyOTPRequest(BaseModel):
    email: EmailStr
    otp: str = Field(..., min_length=6, max_length=6)
    purpose: Optional[OTPPurpose] = OTPPurpose.EMAIL_VERIFICATION


class ResendOTPRequest(BaseModel):
    email: EmailStr
    purpose: Optional[OTPPurpose] = OTPPurpose.EMAIL_VERIFICATION


class OTPResponse(BaseModel):
    success: bool
    message: str
