"""
Audit log router — exposes security logs to workspace administrators.
"""

from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_role
from app.models.audit_log_model import AuditLog
from app.models.user_model import User
from app.utils.response_utils import success_response
from typing import Optional

router = APIRouter(prefix="/api/audit-logs", tags=["Audit Logs"])


@router.get("")
def list_audit_logs(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    action: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    # Scope query by joining user table to verify company_id matches caller's company_id
    query = (
        db.query(AuditLog)
        .join(User, AuditLog.user_id == User.id)
        .filter(User.company_id == company_id)
    )

    if action:
        query = query.filter(AuditLog.action == action)

    total = query.count()
    skip = (page - 1) * per_page
    logs = query.order_by(AuditLog.created_at.desc()).offset(skip).limit(per_page).all()

    serialized_logs = [
        {
            "id": str(log.id),
            "userId": str(log.user_id) if log.user_id else None,
            "userName": log.user.full_name if log.user else "System",
            "action": log.action,
            "resource": log.resource,
            "details": log.details,
            "ipAddress": log.ip_address,
            "status": "Success",
            "module": log.resource.capitalize() if log.resource else "General",
            "timestamp": log.created_at.isoformat(),
        }
        for log in logs
    ]

    return success_response(
        data={
            "logs": serialized_logs,
            "total": total,
            "page": page,
            "per_page": per_page,
        }
    )
