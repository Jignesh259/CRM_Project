"""
Auth router — register, login, refresh, logout, OTP, password reset.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Request
from sqlalchemy.orm import Session
from app.core.dependencies import get_db, get_current_active_user
from app.schemas.auth_schema import RegisterRequest, LoginRequest
from app.schemas.token_schema import RefreshTokenRequest
from app.schemas.otp_schema import SendOTPRequest, VerifyOTPRequest, ResendOTPRequest
from app.schemas.password_schema import ForgotPasswordRequest, ResetPasswordRequest
from app.services.auth_service import AuthService
from app.services.otp_service import OTPService
from app.services.password_service import PasswordService
from app.services.email_service import email_service
from app.services.rbac_service import RBACService
from app.services.audit_service import AuditService
from app.repositories.auth_repository import AuthRepository
from app.repositories.user_repository import UserRepository
from app.models.otp_model import OTPPurpose
from app.utils.response_utils import success_response, error_response
from app.utils.password_utils import validate_password_strength
from app.core.rate_limit import limiter
from loguru import logger
import uuid

router = APIRouter(prefix="/api/auth", tags=["Authentication"])


# ── POST /api/auth/register ──────────────────────────────────

@router.post("/register", status_code=status.HTTP_201_CREATED)
@limiter.limit("5/minute")
async def register(request: Request, body: RegisterRequest, db: Session = Depends(get_db)):
    """
    Register a new user.
    - Creates user in DB with is_verified=False and a unique company_id (tenant key)
    - Sends a 6-digit OTP email for verification
    - User cannot login until they verify their email
    """
    validate_password_strength(body.password)
    auth_service = AuthService(db)
    result = await auth_service.register(
        email=body.email,
        password=body.password,
        full_name=body.full_name,
        phone=body.phone,
        company_name=body.company_name,
    )
    AuditService.log(
        db=db,
        action="user.register",
        user_id=uuid.UUID(result["user_id"]),
        resource="users",
        details={"email": body.email, "company_name": body.company_name},
        ip_address=request.client.host if request.client else None
    )
    return success_response(
        data=result,
        message="Registration successful. Check your email for the OTP code.",
        status_code=201,
    )



# ── POST /api/auth/login ─────────────────────────────────────

@router.post("/login")
@limiter.limit("10/minute")
def login(request: Request, body: LoginRequest, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    try:
        result = auth_service.login(email=body.email, password=body.password)
        user_id = uuid.UUID(result["user"].get("id")) if result["user"].get("id") else None
        AuditService.log(
            db=db,
            action="user.login.success",
            user_id=user_id,
            resource="users",
            details={"email": body.email},
            ip_address=request.client.host if request.client else None
        )
        return success_response(data=result, message="Login successful")
    except HTTPException as e:
        user_repo = UserRepository(db)
        user = user_repo.get_by_email(body.email)
        AuditService.log(
            db=db,
            action="user.login.failure",
            user_id=user.id if user else None,
            resource="users",
            details={"email": body.email, "reason": e.detail},
            ip_address=request.client.host if request.client else None
        )
        raise e


# ── POST /api/auth/refresh-token ─────────────────────────────

@router.post("/refresh-token")
def refresh_token(body: RefreshTokenRequest, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    result = auth_service.refresh(body.refresh_token)
    return success_response(data=result, message="Token refreshed")


# ── POST /api/auth/logout ────────────────────────────────────

@router.post("/logout")
def logout(request: Request, body: RefreshTokenRequest, db: Session = Depends(get_db)):
    auth_service = AuthService(db)
    user_id = None
    try:
        from app.services.jwt_service import verify_refresh_token
        payload = verify_refresh_token(body.refresh_token)
        user_id = uuid.UUID(payload.get("sub"))
    except Exception:
        pass
        
    result = auth_service.logout(body.refresh_token)
    AuditService.log(
        db=db,
        action="user.logout",
        user_id=user_id,
        resource="users",
        details={},
        ip_address=request.client.host if request.client else None
    )
    return success_response(data=result, message="Logged out")


# ── GET /api/auth/me ──────────────────────────────────────────

@router.get("/me")
def get_me(current_user=Depends(get_current_active_user)):
    result = AuthService.get_profile(current_user)
    return success_response(data=result)


# ── POST /api/auth/send-otp ──────────────────────────────────

@router.post("/send-otp")
@limiter.limit("5/minute")
async def send_otp(request: Request, body: SendOTPRequest, db: Session = Depends(get_db)):
    """Manually trigger sending an email verification OTP."""
    otp_service = OTPService(db)
    await otp_service.generate_and_send(body.email, OTPPurpose.EMAIL_VERIFICATION)
    return success_response(message="OTP sent to your email")


# ── POST /api/auth/resend-otp ────────────────────────────────

@router.post("/resend-otp")
@limiter.limit("5/minute")
async def resend_otp(request: Request, body: ResendOTPRequest, db: Session = Depends(get_db)):
    """
    Resend OTP — invalidates the old code and generates a new one.
    Rate limited: max 3 sends per email per 10 minutes.
    """
    otp_service = OTPService(db)
    await otp_service.resend_otp(body.email, body.purpose)
    return success_response(message="A new OTP has been sent to your email")


# ── POST /api/auth/verify-otp ────────────────────────────────

@router.post("/verify-otp")
@limiter.limit("5/minute")
async def verify_otp(request: Request, body: VerifyOTPRequest, db: Session = Depends(get_db)):
    """
    Verify OTP for two purposes:

    1. email_verification:
       - Activates user account (sets is_verified=True in DB)
       - Assigns default 'user' role
       - Sends welcome email
       - Returns: { verified: true, user: {...} }

    2. password_reset:
       - Returns a short-lived reset_token (stored in Redis, NOT in URL)
       - Returns: { reset_token: '...' }
    """
    otp_service = OTPService(db)
    purpose = body.purpose or OTPPurpose.EMAIL_VERIFICATION

    is_valid = otp_service.verify(body.email, body.otp, purpose)
    if not is_valid:
        user_repo = UserRepository(db)
        user = user_repo.get_by_email(body.email)
        AuditService.log(
            db=db,
            action="user.otp_verify.failure",
            user_id=user.id if user else None,
            resource="users",
            details={"email": body.email, "purpose": purpose.value},
            ip_address=request.client.host if request.client else None
        )
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired OTP. Please request a new code.",
        )

    # ────────────────────────────────────────────────────────
    # 1. EMAIL VERIFICATION — Activate account & store in DB
    # ────────────────────────────────────────────────────────
    if purpose == OTPPurpose.EMAIL_VERIFICATION:
        auth_repo = AuthRepository(db)
        user = auth_repo.activate_user(body.email)

        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        # ── Assign default 'user' role (if not already assigned) ─
        try:
            rbac = RBACService(db)
            rbac.assign_role(user.id, "user")
            logger.info(f"Default 'user' role assigned to {body.email}")
        except Exception as e:
            logger.warning(f"Could not assign default role to {body.email}: {e}")

        # ── Send welcome email (non-blocking — failure is OK) ─────
        try:
            await email_service.send_welcome_email(body.email, user.full_name)
        except Exception as e:
            logger.warning(f"Welcome email failed for {body.email}: {e}")

        # ── Return full user profile so frontend can show success ─
        user_data = {
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "phone": user.phone,
            "is_active": user.is_active,
            "is_verified": user.is_verified,
            "roles": [r.name for r in user.roles],
            "created_at": user.created_at.isoformat(),
        }

        logger.info(f"Account activated and stored in DB for {body.email}")

        AuditService.log(
            db=db,
            action="user.email_verified",
            user_id=user.id,
            resource="users",
            details={"email": body.email},
            ip_address=request.client.host if request.client else None
        )

        return success_response(
            message="Email verified successfully! Your account is now active.",
            data={
                "verified": True,
                "email": body.email,
                "user": user_data,
            },
        )

    # ────────────────────────────────────────────────────────
    # 2. PASSWORD RESET — Issue secure reset token
    # ────────────────────────────────────────────────────────
    if purpose == OTPPurpose.PASSWORD_RESET:
        user_repo = UserRepository(db)
        user = user_repo.get_by_email(body.email)
        if user is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="User not found",
            )

        # Issue reset token — stored in Redis only, never in URL
        pwd_service = PasswordService(db)
        reset_token = pwd_service.issue_reset_token(body.email)

        logger.info(f"Password reset token issued for {body.email}")

        AuditService.log(
            db=db,
            action="user.otp_verify_password_reset.success",
            user_id=user.id,
            resource="users",
            details={"email": body.email},
            ip_address=request.client.host if request.client else None
        )

        return success_response(
            message="OTP verified. You can now set a new password.",
            data={"reset_token": reset_token},
        )


# ── POST /api/auth/forgot-password ──────────────────────────

@router.post("/forgot-password")
@limiter.limit("5/minute")
async def forgot_password(request: Request, body: ForgotPasswordRequest, db: Session = Depends(get_db)):
    """
    Send a password-reset OTP to the given email.
    Always returns success to prevent user enumeration attacks.
    """
    pwd_service = PasswordService(db)
    result = await pwd_service.forgot_password(body.email)
    user_repo = UserRepository(db)
    user = user_repo.get_by_email(body.email)
    AuditService.log(
        db=db,
        action="user.forgot_password_request",
        user_id=user.id if user else None,
        resource="users",
        details={"email": body.email},
        ip_address=request.client.host if request.client else None
    )
    return success_response(data=result)


# ── POST /api/auth/reset-password ───────────────────────────

@router.post("/reset-password")
@limiter.limit("5/minute")
def reset_password(request: Request, body: ResetPasswordRequest, db: Session = Depends(get_db)):
    """
    Reset password using the reset_token from /verify-otp.
    Token is stored in Redis — never shared as a URL link.
    """
    validate_password_strength(body.new_password)
    
    from app.services.redis_service import redis_service
    email_bytes = redis_service.get_reset_email(body.token)
    email = None
    if email_bytes:
        email = email_bytes.decode() if isinstance(email_bytes, bytes) else email_bytes

    pwd_service = PasswordService(db)
    result = pwd_service.reset_password(body.token, body.new_password)
    
    user_id = None
    if email:
        user_repo = UserRepository(db)
        user = user_repo.get_by_email(email)
        user_id = user.id if user else None

    AuditService.log(
        db=db,
        action="user.password_reset",
        user_id=user_id,
        resource="users",
        details={"email": email},
        ip_address=request.client.host if request.client else None
    )
    return success_response(data=result)
