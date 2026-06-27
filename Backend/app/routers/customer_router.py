"""
Customer router — Customer CRUD endpoints.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from uuid import UUID
from typing import Optional
import time
from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_permission
from app.services.audit_service import AuditService
from app.repositories.customer_repository import CustomerRepository
from app.models.customer_model import Customer
from app.schemas.customer_schema import CustomerCreate, CustomerUpdate
from app.utils.response_utils import success_response

router = APIRouter(prefix="/api/customers", tags=["Customers"])


def serialize_customer(customer: Customer) -> dict:
    return {
        "id": customer.id,
        "company_id": str(customer.company_id) if customer.company_id else None,
        "first_name": customer.first_name,
        "last_name": customer.last_name,
        "email": customer.email,
        "phone": customer.phone,
        "company": customer.company,
        "industry": customer.industry,
        "website": customer.website,
        "plan_type": customer.plan_type,
        "assigned_manager": customer.assigned_manager,
        "mrr": customer.mrr,
        "ltv": customer.ltv,
        "health": customer.health,
        "status": customer.status,
        "last_order": customer.last_order,
        "notes": customer.notes,
        "tags": customer.tags if customer.tags else [],
        "created_by_id": str(customer.created_by_id) if customer.created_by_id else None,
        "created_at": customer.created_at.isoformat() if customer.created_at else None,
        "updated_at": customer.updated_at.isoformat() if customer.updated_at else None,
    }


# ── GET /api/customers ───────────────────────────────────────────

@router.get("", dependencies=[Depends(require_permission("customer.read"))])
def list_customers(
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=1000),
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Your account has no company assigned.",
        )

    repo = CustomerRepository(db)
    skip = (page - 1) * per_page
    customers = repo.get_customers(
        company_id=company_id,
        skip=skip,
        limit=per_page,
        search=search,
        status=status,
    )
    total = repo.count_customers(company_id=company_id, search=search, status=status)

    return success_response(
        data={
            "customers": [serialize_customer(c) for c in customers],
            "total": total,
            "page": page,
            "per_page": per_page,
        }
    )


# ── POST /api/customers ──────────────────────────────────────────

@router.post("", status_code=status.HTTP_201_CREATED, dependencies=[Depends(require_permission("customer.create"))])
def create_customer(
    request: Request,
    body: CustomerCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = CustomerRepository(db)
    customer_data = body.model_dump()
    
    # Use client-provided ID or generate one
    cust_id = customer_data.pop("id", None)
    if not cust_id:
        cust_id = f"cust_{int(time.time()*1000)}"

    customer = Customer(
        id=cust_id,
        **customer_data,
        company_id=company_id,
        created_by_id=current_user.id,
    )
    created = repo.create(customer)

    AuditService.log(
        db=db,
        action="customer.create",
        user_id=current_user.id,
        resource="customers",
        details={"customer_id": created.id, "email": created.email, "company": created.company},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data=serialize_customer(created),
        message="Customer created successfully",
        status_code=201,
    )


# ── GET /api/customers/{customer_id} ─────────────────────────────────

@router.get("/{customer_id}", dependencies=[Depends(require_permission("customer.read"))])
def get_customer(
    customer_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    return success_response(data=serialize_customer(customer))


# ── PUT /api/customers/{customer_id} ─────────────────────────────────

@router.put("/{customer_id}", dependencies=[Depends(require_permission("customer.update"))])
def update_customer(
    request: Request,
    customer_id: str,
    body: CustomerUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    updates = body.model_dump(exclude_unset=True)
    updated = repo.update(customer, updates)

    AuditService.log(
        db=db,
        action="customer.update",
        user_id=current_user.id,
        resource="customers",
        details={"customer_id": customer_id, "updates": list(updates.keys())},
        ip_address=request.client.host if request.client else None
    )

    return success_response(
        data=serialize_customer(updated),
        message="Customer updated successfully",
    )


# ── DELETE /api/customers/{customer_id} ──────────────────────────────

@router.delete("/{customer_id}", dependencies=[Depends(require_permission("customer.delete"))])
def delete_customer(
    request: Request,
    customer_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")

    repo.delete(customer)

    AuditService.log(
        db=db,
        action="customer.delete",
        user_id=current_user.id,
        resource="customers",
        details={"customer_id": customer_id, "email": customer.email},
        ip_address=request.client.host if request.client else None
    )

    return success_response(message="Customer deleted successfully")


# ── Mocked Details Endpoints (Orders, Invoices, Payments) ────────────

@router.get("/{customer_id}/orders", dependencies=[Depends(require_permission("customer.read"))])
def get_customer_orders(
    customer_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
        
    orders = [
        { "id": 'ORD-2023-8842', "date": 'Oct 24, 2023', "items": '24 Units', "amount": 12450.00, "status": 'Delivered', "icon": 'check_circle', "bgClass": 'bg-primary-fixed text-on-primary-fixed' },
        { "id": 'ORD-2023-8901', "date": 'Nov 02, 2023', "items": '5 Units', "amount": 3200.00, "status": 'Processing', "icon": 'autorenew', "bgClass": 'bg-tertiary-container text-on-tertiary-container' },
        { "id": 'ORD-2023-8875', "date": 'Oct 28, 2023', "items": '12 Units', "amount": 8100.50, "status": 'Shipped', "icon": 'local_shipping', "bgClass": 'bg-surface-variant text-on-surface-variant' },
        { "id": 'ORD-2023-8750', "date": 'Sep 15, 2023', "items": '100 Units', "amount": 45000.00, "status": 'Delivered', "icon": 'check_circle', "bgClass": 'bg-primary-fixed text-on-primary-fixed' }
    ]
    return success_response(data=orders)

@router.get("/{customer_id}/invoices", dependencies=[Depends(require_permission("customer.read"))])
def get_customer_invoices(
    customer_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
        
    invoices = [
        { "id": 'INV-2023-084', "issue_date": 'Oct 12, 2023', "due_date": 'Nov 11, 2023', "amount": 12500.00, "status": 'Paid', "bgClass": 'bg-primary-container/20 text-primary-container border-primary-container/30' },
        { "id": 'INV-2023-091', "issue_date": 'Sep 01, 2023', "due_date": 'Oct 01, 2023', "amount": 4200.00, "status": 'Overdue', "bgClass": 'bg-error-container text-on-error-container border-error/20' },
        { "id": 'INV-2023-098', "issue_date": 'Oct 20, 2023', "due_date": 'Nov 19, 2023', "amount": 8000.00, "remaining": 3000.00, "status": 'Partial', "bgClass": 'bg-tertiary-fixed text-on-tertiary-fixed-variant border-tertiary/20' },
        { "id": 'INV-2023-072', "issue_date": 'Aug 15, 2023', "due_date": 'Sep 14, 2023', "amount": 1550.00, "status": 'Paid', "bgClass": 'bg-primary-container/20 text-primary-container border-primary-container/30' }
    ]
    return success_response(data=invoices)

@router.get("/{customer_id}/payments", dependencies=[Depends(require_permission("customer.read"))])
def get_customer_payments(
    customer_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    repo = CustomerRepository(db)
    customer = repo.get_by_id(customer_id, company_id=company_id)
    if not customer:
        raise HTTPException(status_code=404, detail="Customer not found")
        
    payments = [
        { "id": 'TXN-8472', "date": 'Oct 24, 2023', "time": '14:32 EST', "amount": 4500.00, "method": 'Visa •••• 4242', "status": 'Success', "icon": 'credit_card', "bgClass": 'bg-[#d4ebd8] text-[#1c5f2c]' },
        { "id": 'TXN-8471', "date": 'Oct 24, 2023', "time": '11:15 EST', "amount": 1250.00, "method": 'Bank Transfer', "status": 'Failed', "icon": 'account_balance', "bgClass": 'bg-error-container text-on-error-container' },
        { "id": 'TXN-8470', "date": 'Oct 23, 2023', "time": '09:45 EST', "amount": 8900.50, "method": 'Mastercard •••• 8812', "status": 'Success', "icon": 'credit_card', "bgClass": 'bg-[#d4ebd8] text-[#1c5f2c]' },
        { "id": 'TXN-8469', "date": 'Oct 23, 2023', "time": '08:00 EST', "amount": 350.00, "method": 'ACH Debit', "status": 'Pending', "icon": 'payments', "bgClass": 'bg-surface-variant text-on-surface-variant' }
    ]
    return success_response(data=payments)
