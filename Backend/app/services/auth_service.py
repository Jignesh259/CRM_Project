from fastapi import HTTPException

from app.core.config import settings
from app.core.security import create_demo_token, hash_password, verify_password
from app.models.entities import UserRecord
from app.repositories.auth_repository import AuthRepository
from app.schemas.auth import (
    AuthResponse,
    ForgotPasswordRequest,
    LoginRequest,
    RegisterRequest,
    ResetPasswordRequest,
    VerifyOtpRequest,
)


class AuthService:
    def __init__(self, repository: AuthRepository) -> None:
        self.repository = repository

    def login(self, payload: LoginRequest) -> AuthResponse:
        user = self.repository.get_user_by_email(str(payload.email))
        if user is None or not verify_password(payload.password, user.password_hash):
            raise HTTPException(status_code=401, detail="Invalid email or password.")

        return AuthResponse(
            success=True,
            message=f"Welcome back, {user.name}.",
            nextPath="/dashboard",
            token=create_demo_token(user.email),
        )

    def register(self, payload: RegisterRequest) -> AuthResponse:
        email = str(payload.email)
        if self.repository.get_user_by_email(email) is not None:
            raise HTTPException(status_code=409, detail="A user with that email already exists.")

        user = UserRecord(
            name=payload.name,
            email=email,
            company=payload.company,
            password_hash=hash_password(payload.password),
        )
        self.repository.create_user(user)

        return AuthResponse(
            success=True,
            message="Workspace created. Verify the demo OTP to continue.",
            nextPath="/verify-otp",
        )

    def forgot_password(self, payload: ForgotPasswordRequest) -> AuthResponse:
        if self.repository.get_user_by_email(str(payload.email)) is None:
            raise HTTPException(status_code=404, detail="No account found for that email.")

        return AuthResponse(
            success=True,
            message=f"Verification code sent. Use {settings.demo_otp} for the local demo.",
            nextPath="/verify-otp",
        )

    def verify_otp(self, payload: VerifyOtpRequest) -> AuthResponse:
        if self.repository.get_user_by_email(str(payload.email)) is None:
            raise HTTPException(status_code=404, detail="No account found for that email.")
        if payload.otp != settings.demo_otp:
            raise HTTPException(status_code=400, detail="Invalid OTP.")

        return AuthResponse(success=True, message="Verification successful.", nextPath="/reset-password")

    def reset_password(self, payload: ResetPasswordRequest) -> AuthResponse:
        user = self.repository.get_user_by_email(str(payload.email))
        if user is None:
            raise HTTPException(status_code=404, detail="No account found for that email.")
        if payload.password != payload.confirmPassword:
            raise HTTPException(status_code=400, detail="Passwords do not match.")

        user.password_hash = hash_password(payload.password)
        self.repository.update_user(user)
        return AuthResponse(success=True, message="Password updated successfully.", nextPath="/login")
