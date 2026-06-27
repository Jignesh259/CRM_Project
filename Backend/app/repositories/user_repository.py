"""
User repository — CRUD operations on the users table.
"""

from sqlalchemy.orm import Session
from app.models.user_model import User
from typing import Optional
from uuid import UUID


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_id(self, user_id: UUID) -> Optional[User]:
        return self.db.query(User).filter(User.id == user_id).first()

    def get_by_id_tenant(self, user_id: UUID, company_id: UUID) -> Optional[User]:
        return self.db.query(User).filter(User.id == user_id, User.company_id == company_id).first()

    def get_by_email(self, email: str) -> Optional[User]:
        return self.db.query(User).filter(User.email == email).first()

    def get_all(self, skip: int = 0, limit: int = 100) -> list[User]:
        return self.db.query(User).offset(skip).limit(limit).all()

    def get_all_tenant(self, company_id: UUID, skip: int = 0, limit: int = 100) -> list[User]:
        return (
            self.db.query(User)
            .filter(User.company_id == company_id)
            .order_by(User.created_at.desc())
            .offset(skip)
            .limit(limit)
            .all()
        )

    def count(self) -> int:
        return self.db.query(User).count()

    def count_tenant(self, company_id: UUID) -> int:
        return self.db.query(User).filter(User.company_id == company_id).count()

    def create(self, user: User) -> User:
        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)
        return user

    def update(self, user: User, updates: dict) -> User:
        for key, value in updates.items():
            if value is not None:
                setattr(user, key, value)
        self.db.commit()
        self.db.refresh(user)
        return user

    def delete(self, user: User) -> None:
        self.db.delete(user)
        self.db.commit()
