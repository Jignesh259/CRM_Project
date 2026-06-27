"""
User router — CRUD operations (admin/manager scoped and tenant-isolated).
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from uuid import UUID
from app.core.dependencies import get_db, get_current_active_user
from app.repositories.user_repository import UserRepository
from app.schemas.user_schema import UserCreate, UserUpdate
from app.middleware.role_middleware import require_role, require_permission
from app.utils.response_utils import success_response
from app.services.password_service import PasswordService
from app.services.rbac_service import RBACService
from app.services.audit_service import AuditService

router = APIRouter(prefix="/api/users", tags=["Users"])


# ── GET /api/users ───────────────────────────────────────────

@router.get("")
def list_users(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin", "manager")),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = UserRepository(db)
    skip = (page - 1) * per_page
    users = repo.get_all_tenant(company_id=company_id, skip=skip, limit=per_page)
    total = repo.count_tenant(company_id=company_id)

    user_list = [
        {
            "id": str(u.id),
            "email": u.email,
            "full_name": u.full_name,
            "phone": u.phone,
            "is_active": u.is_active,
            "is_verified": u.is_verified,
            "department": u.department,
            "roles": [r.name for r in u.roles],
            "created_at": u.created_at.isoformat(),
        }
        for u in users
    ]

    return success_response(
        data={"users": user_list, "total": total, "page": page, "per_page": per_page}
    )


# ── POST /api/users (Onboard User) ───────────────────────────

@router.post("", status_code=status.HTTP_201_CREATED)
def onboard_user(
    request: Request,
    body: UserCreate,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    company_id = current_user.company_id
    company_name = current_user.company_name
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = UserRepository(db)
    existing = repo.get_by_email(body.email)
    if existing:
        raise HTTPException(status_code=400, detail="User with this email already exists.")

    from app.models.user_model import User
    # Default initial password is set to 'Password123!'
    hashed_pwd = PasswordService.hash_password("Password123!")

    new_user = User(
        email=body.email,
        hashed_password=hashed_pwd,
        full_name=body.name,
        phone=body.phone,
        is_active=True,
        is_verified=True,
        company_id=company_id,
        company_name=company_name,
        department=body.department,
    )

    created_user = repo.create(new_user)

    # Assign requested role
    rbac = RBACService(db)
    rbac.assign_role(created_user.id, body.role)

    # Log audit event
    AuditService.log(
        db=db,
        action="user.onboard",
        user_id=current_user.id,
        resource="users",
        details={"onboarded_user_id": str(created_user.id), "email": created_user.email, "role": body.role},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data={
            "id": str(created_user.id),
            "email": created_user.email,
            "full_name": created_user.full_name,
            "phone": created_user.phone,
            "is_active": created_user.is_active,
            "is_verified": created_user.is_verified,
            "department": created_user.department,
            "roles": [r.name for r in created_user.roles],
            "created_at": created_user.created_at.isoformat(),
        },
        message="User onboarded successfully",
        status_code=201
    )


# ── GET /api/users/{id} ─────────────────────────────────────

@router.get("/{user_id}")
def get_user(
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = UserRepository(db)
    user = repo.get_by_id_tenant(user_id, company_id=company_id)
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
            "department": user.department,
            "roles": [r.name for r in user.roles],
            "created_at": user.created_at.isoformat(),
            "updated_at": user.updated_at.isoformat() if user.updated_at else None,
        }
    )


# ── PUT /api/users/{id} ─────────────────────────────────────

@router.put("/{user_id}")
def update_user(
    request: Request,
    user_id: UUID,
    body: UserUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = UserRepository(db)
    user = repo.get_by_id_tenant(user_id, company_id=company_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    is_admin = any(r.name == "admin" for r in current_user.roles)
    if str(current_user.id) != str(user_id) and not is_admin:
        raise HTTPException(status_code=403, detail="Not authorized to update this user")

    updates = body.model_dump(exclude_unset=True)
    role_to_assign = updates.pop("role", None)

    # Rename full_name input keys if sent as name
    if "name" in updates:
        updates["full_name"] = updates.pop("name")

    updated = repo.update(user, updates)

    # Handle role change
    if role_to_assign and is_admin:
        rbac = RBACService(db)
        # Clear existing roles
        for r in list(updated.roles):
            rbac.remove_role(updated.id, r.name)
        # Assign new role
        rbac.assign_role(updated.id, role_to_assign)

    # Log audit event
    AuditService.log(
        db=db,
        action="user.update",
        user_id=current_user.id,
        resource="users",
        details={"updated_user_id": str(updated.id), "updates": list(updates.keys())},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data={
            "id": str(updated.id),
            "email": updated.email,
            "full_name": updated.full_name,
            "phone": updated.phone,
            "is_active": updated.is_active,
            "department": updated.department,
            "roles": [r.name for r in updated.roles]
        },
        message="User updated",
    )


# ── DELETE /api/users/{id} ──────────────────────────────────

@router.delete("/{user_id}", status_code=status.HTTP_200_OK)
def delete_user(
    request: Request,
    user_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = UserRepository(db)
    user = repo.get_by_id_tenant(user_id, company_id=company_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")

    repo.delete(user)

    # Log audit event
    AuditService.log(
        db=db,
        action="user.delete",
        user_id=current_user.id,
        resource="users",
        details={"deleted_user_id": str(user_id), "email": user.email},
        ip_address=request.client.host if request.client else None
    )

    return success_response(message="User deleted")
