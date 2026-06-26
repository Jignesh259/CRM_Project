"""
Role router — manage roles and assignments (admin only).
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from uuid import UUID
from pydantic import BaseModel
from typing import Optional
from app.core.dependencies import get_db
from app.services.rbac_service import RBACService
from app.middleware.role_middleware import require_role
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/roles", tags=["Roles"])


# ── Schemas ──────────────────────────────────────────────────

class CreateRoleRequest(BaseModel):
    name: str
    description: Optional[str] = None


class AssignRoleRequest(BaseModel):
    user_id: UUID
    role_name: str


# ── GET /api/roles ───────────────────────────────────────────

@router.get("")
def list_roles(
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    rbac = RBACService(db)
    roles = rbac.list_roles()
    return success_response(
        data=[
            {
                "id": str(r.id),
                "name": r.name,
                "description": r.description,
                "permissions": [p.name for p in r.permissions],
            }
            for r in roles
        ]
    )


# ── POST /api/roles ─────────────────────────────────────────

@router.post("", status_code=status.HTTP_201_CREATED)
def create_role(
    body: CreateRoleRequest,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    rbac = RBACService(db)
    role = rbac.create_role(body.name, body.description)
    return success_response(
        data={"id": str(role.id), "name": role.name},
        message="Role created",
        status_code=201,
    )


# ── POST /api/roles/assign ──────────────────────────────────

@router.post("/assign")
def assign_role(
    body: AssignRoleRequest,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    rbac = RBACService(db)
    success = rbac.assign_role(body.user_id, body.role_name)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not assign role (user/role not found or already assigned)",
        )
    return success_response(message=f"Role '{body.role_name}' assigned")


# ── POST /api/roles/remove ──────────────────────────────────

@router.post("/remove")
def remove_role(
    body: AssignRoleRequest,
    db: Session = Depends(get_db),
    current_user=Depends(require_role("admin")),
):
    rbac = RBACService(db)
    success = rbac.remove_role(body.user_id, body.role_name)
    if not success:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Could not remove role",
        )
    return success_response(message=f"Role '{body.role_name}' removed")
