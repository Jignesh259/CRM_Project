from pydantic import BaseModel, EmailStr, Field


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=4)


class RegisterRequest(BaseModel):
    name: str = Field(min_length=2)
    email: EmailStr
    company: str = Field(min_length=2)
    password: str = Field(min_length=8)


class ForgotPasswordRequest(BaseModel):
    email: EmailStr


class VerifyOtpRequest(BaseModel):
    email: EmailStr
    otp: str = Field(min_length=6, max_length=6)


class ResetPasswordRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)
    confirmPassword: str = Field(min_length=8)


class AuthResponse(BaseModel):
    success: bool
    message: str
    nextPath: str | None = None
    token: str | None = None
