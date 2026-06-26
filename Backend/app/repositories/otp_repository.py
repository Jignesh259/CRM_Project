"""
OTP repository — DB backup for OTP records.
"""

from sqlalchemy.orm import Session
from app.models.otp_model import OTP, OTPPurpose
from typing import Optional
from datetime import datetime, timezone


class OTPRepository:
    def __init__(self, db: Session):
        self.db = db

    def save_otp(
        self,
        email: str,
        otp_code: str,
        purpose: OTPPurpose,
        expires_at: datetime,
    ) -> OTP:
        otp = OTP(
            email=email,
            otp_code=otp_code,
            purpose=purpose,
            expires_at=expires_at,
        )
        self.db.add(otp)
        self.db.commit()
        self.db.refresh(otp)
        return otp

    def get_valid_otp(
        self, email: str, otp_code: str, purpose: OTPPurpose
    ) -> Optional[OTP]:
        return (
            self.db.query(OTP)
            .filter(
                OTP.email == email,
                OTP.otp_code == otp_code,
                OTP.purpose == purpose,
                OTP.is_used == False,  # noqa: E712
                OTP.expires_at > datetime.now(timezone.utc),
            )
            .order_by(OTP.created_at.desc())
            .first()
        )

    def mark_used(self, otp: OTP) -> None:
        otp.is_used = True
        self.db.commit()
