"""
Auth repository — user creation and credential verification.
"""

from sqlalchemy.orm import Session
from app.models.user_model import User
from app.core.security import verify_password
from typing import Optional
from uuid import UUID


class AuthRepository:
    def __init__(self, db: Session):
        self.db = db

    def create_user(
        self,
        email: str,
        hashed_password: str,
        full_name: str,
        company_id: UUID,
        company_name: str,
        phone: str | None = None,
    ) -> User:
        """
        Create a new user.  company_id is the tenant isolation key — it is
        generated once per company at registration time (see AuthService.register).
        ACID-Atomicity: user row is committed in a single transaction so it is
        never half-written.
        """
        user = User(
            email=email,
            hashed_password=hashed_password,
            full_name=full_name,
            phone=phone,
            company_id=company_id,
            company_name=company_name,
            is_active=True,
            is_verified=False,
        )
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user


    def authenticate(self, email: str, password: str) -> Optional[User]:
        user = self.db.query(User).filter(User.email == email).first()
        if user is None:
            return None
        if not verify_password(password, user.hashed_password):
            return None
        return user

    def activate_user(self, email: str) -> Optional[User]:
        user = self.db.query(User).filter(User.email == email).first()
        if user:
            user.is_verified = True
            self.db.commit()
            self.db.refresh(user)
        return user
