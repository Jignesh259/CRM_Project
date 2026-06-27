"""
Lead router — Lead and LeadActivity CRUD endpoints.

MULTI-TENANCY ENFORCEMENT:
  Every endpoint extracts `current_user.company_id` (the tenant key stored
  in the User row) and passes it to the repository.  The repository applies
  `WHERE company_id = ?` on every query — so no user can ever see or change
  another company's leads, even with a valid JWT.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from uuid import UUID
from typing import Optional
from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_permission
from app.services.audit_service import AuditService
from app.repositories.lead_repository import LeadRepository
from app.models.lead_model import Lead, LeadActivity
from app.schemas.lead_schema import LeadCreate, LeadUpdate, LeadActivityCreate
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/leads", tags=["Leads"])


def serialize_lead(lead: Lead) -> dict:
    return {
        "id": str(lead.id),
        "company_id": str(lead.company_id) if lead.company_id else None,
        "first_name": lead.first_name,
        "last_name": lead.last_name,
        "email": lead.email,
        "phone": lead.phone,
        "company": lead.company,
        "job_title": lead.job_title,
        "website": lead.website,
        "status": lead.status,
        "temp": lead.temp,
        "source": lead.source,
        "estimated_value": lead.estimated_value,
        "notes": lead.notes,
        "owner_id": str(lead.owner_id) if lead.owner_id else None,
        "created_by_id": str(lead.created_by_id) if lead.created_by_id else None,
        "created_at": lead.created_at.isoformat() if lead.created_at else None,
        "updated_at": lead.updated_at.isoformat() if lead.updated_at else None,
        "activities": [
            {
                "id": str(act.id),
                "lead_id": str(act.lead_id),
                "activity_type": act.activity_type,
                "subject": act.subject,
                "notes": act.notes,
                "activity_date": act.activity_date,
                "activity_time": act.activity_time,
                "assigned_to_id": str(act.assigned_to_id) if act.assigned_to_id else None,
                "created_at": act.created_at.isoformat() if act.created_at else None,
            }
            for act in lead.activities
        ]
    }


# ── GET /api/leads ───────────────────────────────────────────

@router.get("", dependencies=[Depends(require_permission("lead.read"))])
def list_leads(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=1000),
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    # ── TENANT ISOLATION: only this company's leads ──────────
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Your account has no company assigned. Please contact support.",
        )

    repo = LeadRepository(db)
    skip = (page - 1) * per_page
    leads = repo.get_leads(
        company_id=company_id,
        skip=skip,
        limit=per_page,
        search=search,
        status=status,
    )
    total = repo.count_leads(company_id=company_id, search=search, status=status)

    leads_serialized = [serialize_lead(lead) for lead in leads]

    return success_response(
        data={
            "leads": leads_serialized,
            "total": total,
            "page": page,
            "per_page": per_page,
        }
    )


# ── POST /api/leads ──────────────────────────────────────────

@router.post("", status_code=status.HTTP_201_CREATED, dependencies=[Depends(require_permission("lead.create"))])
def create_lead(
    request: Request,
    body: LeadCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    # ── TENANT ISOLATION: stamp lead with this user's company_id ──
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Your account has no company assigned. Please contact support.",
        )

    repo = LeadRepository(db)
    lead_data = body.model_dump()

    # Auto assign owner_id to current_user if not specified
    if not lead_data.get("owner_id"):
        lead_data["owner_id"] = current_user.id

    lead = Lead(
        **lead_data,
        company_id=company_id,          # <-- ACID-Consistency: always set
        created_by_id=current_user.id,
    )
    created = repo.create(lead)

    AuditService.log(
        db=db,
        action="lead.create",
        user_id=current_user.id,
        resource="leads",
        details={"lead_id": str(created.id), "email": created.email, "company": created.company},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data=serialize_lead(created),
        message="Lead created successfully",
        status_code=201,
    )


# ── GET /api/leads/{lead_id} ─────────────────────────────────

@router.get("/{lead_id}", dependencies=[Depends(require_permission("lead.read"))])
def get_lead(
    lead_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = LeadRepository(db)
    # get_by_id now filters by company_id — returns None if lead belongs to another tenant
    lead = repo.get_by_id(lead_id, company_id=company_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    return success_response(data=serialize_lead(lead))


# ── PUT /api/leads/{lead_id} ─────────────────────────────────

@router.put("/{lead_id}", dependencies=[Depends(require_permission("lead.update"))])
def update_lead(
    request: Request,
    lead_id: UUID,
    body: LeadUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = LeadRepository(db)
    lead = repo.get_by_id(lead_id, company_id=company_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    updates = body.model_dump(exclude_unset=True)
    updated = repo.update(lead, updates)

    AuditService.log(
        db=db,
        action="lead.update",
        user_id=current_user.id,
        resource="leads",
        details={"lead_id": str(lead_id), "updates": list(updates.keys())},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data=serialize_lead(updated),
        message="Lead updated successfully",
    )


# ── DELETE /api/leads/{lead_id} ──────────────────────────────

@router.delete("/{lead_id}", dependencies=[Depends(require_permission("lead.delete"))])
def delete_lead(
    request: Request,
    lead_id: UUID,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = LeadRepository(db)
    lead = repo.get_by_id(lead_id, company_id=company_id)
    if not lead:
        # Returns 404 even if lead exists but belongs to another tenant
        # — prevents information leakage about other companies' data
        raise HTTPException(status_code=404, detail="Lead not found")

    repo.delete(lead)

    AuditService.log(
        db=db,
        action="lead.delete",
        user_id=current_user.id,
        resource="leads",
        details={"lead_id": str(lead_id), "email": lead.email},
        ip_address=request.client.host if request.client else None
    )

    return success_response(message="Lead deleted successfully")


# ── POST /api/leads/{lead_id}/activities ─────────────────────

@router.post("/{lead_id}/activities", status_code=status.HTTP_201_CREATED, dependencies=[Depends(require_permission("lead.update"))])
def create_lead_activity(
    request: Request,
    lead_id: UUID,
    body: LeadActivityCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = LeadRepository(db)
    # Also tenant-scoped: can only add activity to own company's lead
    lead = repo.get_by_id(lead_id, company_id=company_id)
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")

    activity_data = body.model_dump()

    # Auto assign to current user if not specified
    if not activity_data.get("assigned_to_id"):
        activity_data["assigned_to_id"] = current_user.id

    activity = LeadActivity(
        lead_id=lead_id,
        **activity_data,
    )
    created = repo.create_activity(activity)

    AuditService.log(
        db=db,
        action="lead.activity.create",
        user_id=current_user.id,
        resource="leads",
        details={"lead_id": str(lead_id), "activity_id": str(created.id), "activity_type": created.activity_type},
        ip_address=request.client.host if request.client else None
    )

    act_resp = {
        "id": str(created.id),
        "lead_id": str(created.lead_id),
        "activity_type": created.activity_type,
        "subject": created.subject,
        "notes": created.notes,
        "activity_date": created.activity_date,
        "activity_time": created.activity_time,
        "assigned_to_id": str(created.assigned_to_id) if created.assigned_to_id else None,
        "created_at": created.created_at.isoformat() if created.created_at else None,
    }

    return success_response(
        data=act_resp,
        message="Activity logged successfully",
        status_code=201,
    )

