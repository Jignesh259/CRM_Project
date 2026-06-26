"""
RBAC service — role and permission management.
"""

from sqlalchemy.orm import Session
from app.models.user_model import User
from app.models.role_model import Role
from app.models.permission_model import Permission
from typing import Optional
from uuid import UUID
from loguru import logger


class RBACService:
    def __init__(self, db: Session):
        self.db = db

    # ── Role management ──────────────────────────────────────

    def create_role(self, name: str, description: str | None = None) -> Role:
        """Create a new role."""
        existing = self.db.query(Role).filter(Role.name == name).first()
        if existing:
            return existing
        role = Role(name=name, description=description)
        self.db.add(role)
        self.db.commit()
        self.db.refresh(role)
        logger.info(f"Role created: {name}")
        return role

    def get_role(self, name: str) -> Optional[Role]:
        return self.db.query(Role).filter(Role.name == name).first()

    def list_roles(self) -> list[Role]:
        return self.db.query(Role).all()

    # ── Permission management ────────────────────────────────

    def create_permission(
        self, name: str, description: str | None = None
    ) -> Permission:
        existing = (
            self.db.query(Permission).filter(Permission.name == name).first()
        )
        if existing:
            return existing
        perm = Permission(name=name, description=description)
        self.db.add(perm)
        self.db.commit()
        self.db.refresh(perm)
        return perm

    def assign_permission_to_role(
        self, role_name: str, permission_name: str
    ) -> bool:
        role = self.get_role(role_name)
        perm = (
            self.db.query(Permission)
            .filter(Permission.name == permission_name)
            .first()
        )
        if role and perm and perm not in role.permissions:
            role.permissions.append(perm)
            self.db.commit()
            return True
        return False

    # ── User-role assignment ─────────────────────────────────

    def assign_role(self, user_id: UUID, role_name: str) -> bool:
        """Assign a role to a user."""
        user = self.db.query(User).filter(User.id == user_id).first()
        role = self.get_role(role_name)
        if user and role and role not in user.roles:
            user.roles.append(role)
            self.db.commit()
            logger.info(f"Role '{role_name}' assigned to user {user_id}")
            return True
        return False

    def remove_role(self, user_id: UUID, role_name: str) -> bool:
        """Remove a role from a user."""
        user = self.db.query(User).filter(User.id == user_id).first()
        role = self.get_role(role_name)
        if user and role and role in user.roles:
            user.roles.remove(role)
            self.db.commit()
            logger.info(f"Role '{role_name}' removed from user {user_id}")
            return True
        return False

    # ── Permission checks ────────────────────────────────────

    def get_user_permissions(self, user_id: UUID) -> set[str]:
        """Get all permission names for a user (across all roles)."""
        user = self.db.query(User).filter(User.id == user_id).first()
        if not user:
            return set()
        permissions: set[str] = set()
        for role in user.roles:
            for perm in role.permissions:
                permissions.add(perm.name)
        return permissions

    def has_permission(self, user_id: UUID, permission: str) -> bool:
        """Check if a user has a specific permission."""
        return permission in self.get_user_permissions(user_id)
