"""
Vendor router — Vendor CRUD endpoints.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from typing import Optional
import time
from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_permission
from app.services.audit_service import AuditService
from app.repositories.vendor_repository import VendorRepository
from app.models.vendor_model import Vendor
from app.schemas.vendor_schema import VendorCreate, VendorUpdate
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/vendors", tags=["Vendors"])


def serialize_vendor(vendor: Vendor) -> dict:
    return {
        "id": vendor.id,
        "company_id": str(vendor.company_id) if vendor.company_id else None,
        "name": vendor.name,
        "category": vendor.category,
        "contactPerson": vendor.contact_person,
        "email": vendor.email,
        "phone": vendor.phone,
        "address": vendor.address,
        "description": vendor.description,
        "paymentTerms": vendor.payment_terms,
        "minOrderQty": vendor.min_order_qty,
        "leadTime": vendor.lead_time,
        "status": vendor.status,
        "performanceScore": vendor.performance_score,
        "rating": vendor.rating,
        "ytdSpend": vendor.ytd_spend,
        "activePOs": vendor.active_pos,
        "pendingDeliveries": vendor.pending_deliveries,
        "created_at": vendor.created_at.isoformat() if vendor.created_at else None,
        "updated_at": vendor.updated_at.isoformat() if vendor.updated_at else None,
    }


# ── GET /api/vendors ──────────────────────────────────────────────

@router.get("", dependencies=[Depends(require_permission("inventory.read"))])
def list_vendors(
    page: int = Query(1, ge=1),
    per_page: int = Query(50, ge=1, le=500),
    search: Optional[str] = Query(None),
    category: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="Your account has no company assigned.")

    repo = VendorRepository(db)
    skip = (page - 1) * per_page
    vendors = repo.get_vendors(
        company_id=company_id,
        skip=skip,
        limit=per_page,
        search=search,
        category=category,
        status=status,
    )
    total = repo.count_vendors(company_id=company_id, search=search, category=category, status=status)

    return success_response(
        data={
            "vendors": [serialize_vendor(v) for v in vendors],
            "total": total,
            "page": page,
            "per_page": per_page,
        }
    )


# ── GET /api/vendors/categories ───────────────────────────────────

@router.get("/categories", dependencies=[Depends(require_permission("inventory.read"))])
def list_vendor_categories(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = VendorRepository(db)
    categories = repo.get_categories(company_id=company_id)
    return success_response(data=categories)


# ── POST /api/vendors ─────────────────────────────────────────────

@router.post("", status_code=status.HTTP_201_CREATED, dependencies=[Depends(require_permission("inventory.create"))])
def create_vendor(
    request: Request,
    body: VendorCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = VendorRepository(db)
    data = body.model_dump()
    vendor_id = data.pop("id", None) or f"vend_{int(time.time()*1000)}"

    vendor = Vendor(
        id=vendor_id,
        company_id=company_id,
        created_by_id=current_user.id,
        **data,
    )
    created = repo.create(vendor)

    AuditService.log(
        db=db,
        action="vendor.create",
        user_id=current_user.id,
        resource="vendors",
        details={"vendor_id": created.id, "name": created.name},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(
        data=serialize_vendor(created),
        message="Vendor created successfully",
        status_code=201,
    )


# ── GET /api/vendors/{vendor_id} ──────────────────────────────────

@router.get("/{vendor_id}", dependencies=[Depends(require_permission("inventory.read"))])
def get_vendor(
    vendor_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = VendorRepository(db)
    vendor = repo.get_by_id(vendor_id, company_id=company_id)
    if not vendor:
        raise HTTPException(status_code=404, detail="Vendor not found")

    return success_response(data=serialize_vendor(vendor))


# ── PUT /api/vendors/{vendor_id} ──────────────────────────────────

@router.put("/{vendor_id}", dependencies=[Depends(require_permission("inventory.update"))])
def update_vendor(
    request: Request,
    vendor_id: str,
    body: VendorUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = VendorRepository(db)
    vendor = repo.get_by_id(vendor_id, company_id=company_id)
    if not vendor:
        raise HTTPException(status_code=404, detail="Vendor not found")

    # Map camelCase frontend fields back to snake_case model fields
    raw = body.model_dump(exclude_unset=True)
    updates = {}
    field_map = {
        "contact_person": "contact_person",
        "payment_terms": "payment_terms",
        "min_order_qty": "min_order_qty",
        "lead_time": "lead_time",
        "performance_score": "performance_score",
        "ytd_spend": "ytd_spend",
        "active_pos": "active_pos",
        "pending_deliveries": "pending_deliveries",
    }
    for k, v in raw.items():
        updates[field_map.get(k, k)] = v

    updated = repo.update(vendor, updates)

    AuditService.log(
        db=db,
        action="vendor.update",
        user_id=current_user.id,
        resource="vendors",
        details={"vendor_id": vendor_id, "updates": list(updates.keys())},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(data=serialize_vendor(updated), message="Vendor updated successfully")


# ── DELETE /api/vendors/{vendor_id} ───────────────────────────────

@router.delete("/{vendor_id}", dependencies=[Depends(require_permission("inventory.delete"))])
def delete_vendor(
    request: Request,
    vendor_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = VendorRepository(db)
    vendor = repo.get_by_id(vendor_id, company_id=company_id)
    if not vendor:
        raise HTTPException(status_code=404, detail="Vendor not found")

    repo.delete(vendor)

    AuditService.log(
        db=db,
        action="vendor.delete",
        user_id=current_user.id,
        resource="vendors",
        details={"vendor_id": vendor_id, "name": vendor.name},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(message="Vendor deleted successfully")
