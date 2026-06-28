"""
Password service — forgot password (OTP-based) and reset password flows.

Flow:
  1. User submits email → generate OTP → store in Redis (5 min) → send email
  2. User verifies OTP via /verify-otp (purpose=password_reset)
  3. /verify-otp returns a short-lived reset_token
  4. User submits new password with reset_token → password updated
"""

import secrets
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.repositories.user_repository import UserRepository
from app.services.redis_service import redis_service
from app.services.otp_service import OTPService
from app.models.otp_model import OTPPurpose
from app.core.security import hash_password
from loguru import logger

RESET_TOKEN_TTL = 900  # 15 minutes in seconds


class PasswordService:
    def __init__(self, db: Session):
        self.db = db
        self.user_repo = UserRepository(db)
        self.otp_service = OTPService(db)

    async def forgot_password(self, email: str) -> dict:
        """
        Send a password-reset OTP to the given email.
        Always returns the same message to avoid user enumeration.
        """
        user = self.user_repo.get_by_email(email)
        if user is None:
            # Security: don't reveal whether the email exists
            logger.info(f"Forgot-password requested for non-existent email: {email}")
            return {"message": "If the email exists, an OTP has been sent."}

        # Generate and send OTP (purpose=PASSWORD_RESET)
        await self.otp_service.generate_and_send(email, OTPPurpose.PASSWORD_RESET)

        logger.info(f"Password reset OTP sent to {email}")
        return {"message": "If the email exists, an OTP has been sent."}

    def issue_reset_token(self, email: str) -> str:
        """
        After OTP is verified, issue a short-lived reset token.
        Stored in Redis as  reset:{token} → email  with 15-min TTL.
        """
        reset_token = secrets.token_urlsafe(32)
        redis_service.set_reset_token(email, reset_token, ttl=RESET_TOKEN_TTL)
        logger.info(f"Reset token issued for {email}")
        return reset_token

    def reset_password(self, token: str, new_password: str) -> dict:
        """Verify the reset token and update the user's password."""
        # Retrieve email stored against this token
        raw = redis_service.get_reset_email(token)
        if raw is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid or expired reset token",
            )

        # Redis may return bytes
        email = raw.decode() if isinstance(raw, bytes) else raw

        user = self.user_repo.get_by_email(email)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        # Update password
        hashed = hash_password(new_password)
        self.user_repo.update(user, {"hashed_password": hashed})

        # Invalidate the reset token (one-time use)
        redis_service.delete_reset_token(token)

        logger.info(f"Password successfully reset for {email}")
        return {"message": "Password reset successfully"}
