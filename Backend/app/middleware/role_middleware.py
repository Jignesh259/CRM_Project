"""
Role & Permission middleware — decorators for route-level RBAC.
"""

from functools import wraps
from fastapi import HTTPException, status, Depends
from sqlalchemy.orm import Session
from app.core.dependencies import get_current_active_user, get_db
from app.services.rbac_service import RBACService


def require_role(*role_names: str):
    """
    Dependency that checks the current user has at least one of the
    specified roles.

    Usage:
        @router.delete("/users/{id}", dependencies=[Depends(require_role("admin"))])
        async def delete_user(...): ...
    """

    async def _check(
        current_user=Depends(get_current_active_user),
    ):
        user_roles = {role.name for role in current_user.roles}
        if not user_roles.intersection(role_names):
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Required role(s): {', '.join(role_names)}",
            )
        return current_user

    return _check


def require_permission(*permission_names: str):
    """
    Dependency that checks the current user has ALL of the specified
    permissions (via their roles).

    Usage:
        @router.delete(
            "/users/{id}",
            dependencies=[Depends(require_permission("user.delete"))]
        )
        async def delete_user(...): ...
    """

    async def _check(
        current_user=Depends(get_current_active_user),
        db: Session = Depends(get_db),
    ):
        rbac = RBACService(db)
        user_perms = rbac.get_user_permissions(current_user.id)
        missing = set(permission_names) - user_perms
        if missing:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Missing permission(s): {', '.join(missing)}",
            )
        return current_user

    return _check
