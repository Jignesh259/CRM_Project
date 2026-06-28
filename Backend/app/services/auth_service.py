"""
Auth service — register, login, refresh, logout, profile.
"""

import uuid
from sqlalchemy.orm import Session
from fastapi import HTTPException, status
from app.repositories.auth_repository import AuthRepository
from app.repositories.token_repository import TokenRepository
from app.repositories.user_repository import UserRepository
from app.services.jwt_service import (
    create_access_token,
    create_refresh_token,
    verify_refresh_token,
)
from app.services.otp_service import OTPService
from app.core.security import hash_password
from app.models.user_model import User
from app.models.otp_model import OTPPurpose
from loguru import logger


class AuthService:
    def __init__(self, db: Session):
        self.db = db
        self.auth_repo = AuthRepository(db)
        self.token_repo = TokenRepository(db)
        self.user_repo = UserRepository(db)
        self.otp_service = OTPService(db)

    # ── Register ─────────────────────────────────────────────

    async def register(
        self,
        email: str,
        password: str,
        full_name: str,
        company_name: str,
        phone: str | None = None,
    ) -> dict:
        """
        Register a new user.

        ACID guarantee:
        - Atomicity   : user row + company_id committed in one transaction.
        - Consistency : company_id is a non-null UUID; subsequent leads carry
                        this same UUID so isolation is always enforced.
        - Isolation   : company_id is generated fresh per company — collisions
                        are astronomically unlikely (UUID4 has 2^122 space).
        - Durability  : PostgreSQL commit before OTP is sent.
        """
        existing = self.user_repo.get_by_email(email)
        if existing:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail="Email already registered",
            )

        # Generate a unique tenant UUID for this company.
        # Every user who registers with the SAME company name gets a NEW tenant
        # (they must be invited / added by an admin to share a tenant — future feature).
        company_id = uuid.uuid4()

        hashed = hash_password(password)
        user = self.auth_repo.create_user(
            email=email,
            hashed_password=hashed,
            full_name=full_name,
            phone=phone,
            company_id=company_id,
            company_name=company_name,
        )

        # Send verification OTP
        await self.otp_service.generate_and_send(
            email, OTPPurpose.EMAIL_VERIFICATION
        )

        logger.info(f"User registered: {email} | tenant: {company_id} ({company_name})")
        return {
            "user_id": str(user.id),
            "email": user.email,
            "company_id": str(company_id),
            "company_name": company_name,
            "message": "Registration successful. Please verify your email with the OTP sent.",
        }

    # ── Login ────────────────────────────────────────────────

    def login(self, email: str, password: str) -> dict:
        """Authenticate user and return access + refresh tokens."""
        user = self.auth_repo.authenticate(email, password)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid email or password",
            )

        if not user.is_verified:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Email not verified. Please verify your email first.",
            )

        if not user.is_active:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="Account is deactivated",
            )

        # Build token payload
        roles = [role.name for role in user.roles]
        token_data = {"sub": str(user.id), "roles": roles}

        access_token = create_access_token(token_data)
        refresh_token, expires_at = create_refresh_token(token_data)

        # Persist refresh token in DB
        self.token_repo.save_refresh_token(refresh_token, user.id, expires_at)

        logger.info(f"User logged in: {email} | tenant: {user.company_id}")
        return {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "token_type": "bearer",
            "user": {
                "id": str(user.id),
                "email": user.email,
                "full_name": user.full_name,
                "roles": roles,
                "company_id": str(user.company_id) if user.company_id else None,
                "company_name": user.company_name,
            },
        }

    # ── Refresh Token ────────────────────────────────────────

    def refresh(self, refresh_token_str: str) -> dict:
        """Verify refresh token and issue a new access token."""
        payload = verify_refresh_token(refresh_token_str)
        if payload is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or expired refresh token",
            )

        # Check DB record
        db_token = self.token_repo.get_refresh_token(refresh_token_str)
        if db_token is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Refresh token revoked or expired",
            )

        # Issue new access token
        token_data = {
            "sub": payload["sub"],
            "roles": payload.get("roles", []),
        }
        new_access = create_access_token(token_data)

        return {
            "access_token": new_access,
            "token_type": "bearer",
        }

    # ── Logout ───────────────────────────────────────────────

    def logout(self, refresh_token_str: str) -> dict:
        """Revoke the given refresh token."""
        self.token_repo.revoke_token(refresh_token_str)
        logger.info("User logged out, refresh token revoked")
        return {"message": "Logged out successfully"}

    # ── Get Current User Profile ─────────────────────────────

    @staticmethod
    def get_profile(user: User) -> dict:
        """Return the user's profile data."""
        return {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "phone": user.phone,
            "is_active": user.is_active,
            "is_verified": user.is_verified,
            "roles": [r.name for r in user.roles],
            "company_id": str(user.company_id) if user.company_id else None,
            "company_name": user.company_name,
            "department": user.department,
            "created_at": user.created_at.isoformat(),
            "updated_at": user.updated_at.isoformat() if user.updated_at else None,
        }
