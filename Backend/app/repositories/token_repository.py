"""
Token repository — persist and manage refresh tokens in the DB.
"""

from sqlalchemy.orm import Session
from app.models.refresh_token_model import RefreshToken
from typing import Optional
from uuid import UUID
from datetime import datetime, timezone


class TokenRepository:
    def __init__(self, db: Session):
        self.db = db

    def save_refresh_token(
        self, token: str, user_id: UUID, expires_at: datetime
    ) -> RefreshToken:
        refresh_token = RefreshToken(
            token=token,
            user_id=user_id,
            expires_at=expires_at,
        )
        self.db.add(refresh_token)
        self.db.commit()
        self.db.refresh(refresh_token)
        return refresh_token

    def get_refresh_token(self, token: str) -> Optional[RefreshToken]:
        return (
            self.db.query(RefreshToken)
            .filter(
                RefreshToken.token == token,
                RefreshToken.is_revoked == False,  # noqa: E712
                RefreshToken.expires_at > datetime.now(timezone.utc),
            )
            .first()
        )

    def revoke_token(self, token: str) -> None:
        rt = (
            self.db.query(RefreshToken)
            .filter(RefreshToken.token == token)
            .first()
        )
        if rt:
            rt.is_revoked = True
            self.db.commit()

    def revoke_all_user_tokens(self, user_id: UUID) -> None:
        self.db.query(RefreshToken).filter(
            RefreshToken.user_id == user_id,
            RefreshToken.is_revoked == False,  # noqa: E712
        ).update({"is_revoked": True})
        self.db.commit()
