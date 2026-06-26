"""
User router — CRUD operations (admin-protected).
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from uuid import UUID
from app.core.dependencies import get_db, get_current_active_user
from app.repositories.user_repository import UserRepository
from app.schemas.user_schema import UserUpdate
from app.middleware.role_middleware import require_role, require_permission
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/users", tags=["Users"])


# ── GET /api/users ───────────────────────────────────────────

@router.get("")
def list_users(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin", "manager")),
):
    repo = UserRepository(db)
    skip = (page - 1) * per_page
    users = repo.get_all(skip=skip, limit=per_page)
    total = repo.count()

    user_list = [
        {
            "id": str(u.id),
            "email": u.email,
            "full_name": u.full_name,
            "phone": u.phone,
            "is_active": u.is_active,
            "is_verified": u.is_verified,
            "roles": [r.name for r in u.roles],
            "created_at": u.created_at.isoformat(),
        }
        for u in users
    ]

    return success_response(
        data={"users": user_list, "total": total, "page": page, "per_page": per_page}
    )


# ── GET /api/users/{id} ─────────────────────────────────────

@router.get("/{user_id}")
def get_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = UserRepository(db)
    user = repo.get_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    return success_response(
        data={
            "id": str(user.id),
            "email": user.email,
            "full_name": user.full_name,
            "phone": user.phone,
            "is_active": user.is_active,
            "is_verified": user.is_verified,
            "roles": [r.name for r in user.roles],
            "created_at": user.created_at.isoformat(),
            "updated_at": user.updated_at.isoformat() if user.updated_at else None,
        }
    )


# ── PUT /api/users/{id} ─────────────────────────────────────

@router.put("/{user_id}")
def update_user(
    user_id: UUID,
    body: UserUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = UserRepository(db)
    user = repo.get_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    # Only allow self-edit or admin
    is_admin = any(r.name == "admin" for r in current_user.roles)
    if str(current_user.id) != str(user_id) and not is_admin:
        raise HTTPException(status_code=403, detail="Not authorized to update this user")

    updates = body.model_dump(exclude_unset=True)
    updated = repo.update(user, updates)

    return success_response(
        data={"id": str(updated.id), "email": updated.email, "full_name": updated.full_name},
        message="User updated",
    )


# ── DELETE /api/users/{id} ──────────────────────────────────

@router.delete("/{user_id}", status_code=status.HTTP_200_OK)
def delete_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    repo = UserRepository(db)
    user = repo.get_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    repo.delete(user)
    return success_response(message="User deleted")
