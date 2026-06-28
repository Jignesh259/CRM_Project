"""
Finance router — Invoices, payments, and expenses CRUD endpoints.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from typing import Optional, List, Any
import time
from datetime import datetime

from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_permission
from app.services.audit_service import AuditService
from app.repositories.finance_repository import FinanceRepository
from app.models.finance_model import Invoice, CustomerPayment, Expense
from app.schemas.finance_schema import (
    InvoiceCreate, InvoiceUpdate,
    CustomerPaymentCreate, CustomerPaymentUpdate,
    ExpenseCreate, ExpenseUpdate
)
from app.utils.response_utils import success_response

router = APIRouter(prefix="", tags=["Finance"])


# ── Serializers ───────────────────────────────────────────────────

def serialize_invoice(invoice: Invoice) -> dict:
    return {
        "id": invoice.id,
        "company_id": str(invoice.company_id) if invoice.company_id else None,
        "customerId": invoice.customer_id,
        "customerName": invoice.customer_name,
        "date": invoice.date.isoformat() if invoice.date else None,
        "dueDate": invoice.due_date.isoformat() if invoice.due_date else None,
        "items": invoice.items or [],
        "subtotal": invoice.subtotal,
        "tax": invoice.tax,
        "total": invoice.total,
        "status": invoice.status,
        "history": invoice.history or [],
        "created_at": invoice.created_at.isoformat() if invoice.created_at else None,
        "updated_at": invoice.updated_at.isoformat() if invoice.updated_at else None,
    }


def serialize_payment(payment: CustomerPayment) -> dict:
    return {
        "id": payment.id,
        "company_id": str(payment.company_id) if payment.company_id else None,
        "invoiceId": payment.invoice_id,
        "customerId": payment.customer_id,
        "customerName": payment.customer_name,
        "amount": payment.amount,
        "method": payment.method,
        "status": payment.status,
        "date": payment.date.isoformat() if payment.date else None,
        "transactionFee": payment.transaction_fee,
        "settlementDate": payment.settlement_date.isoformat() if payment.settlement_date else None,
        "created_at": payment.created_at.isoformat() if payment.created_at else None,
        "updated_at": payment.updated_at.isoformat() if payment.updated_at else None,
    }


def serialize_expense(expense: Expense) -> dict:
    return {
        "id": expense.id,
        "company_id": str(expense.company_id) if expense.company_id else None,
        "amount": expense.amount,
        "category": expense.category,
        "merchant": expense.merchant,
        "date": expense.date.isoformat() if expense.date else None,
        "status": expense.status,
        "description": expense.description,
        "approvedBy": expense.approved_by,
        "created_at": expense.created_at.isoformat() if expense.created_at else None,
        "updated_at": expense.updated_at.isoformat() if expense.updated_at else None,
    }


# ── Invoices Endpoints ────────────────────────────────────────────

@router.get("/api/invoices", dependencies=[Depends(require_permission("finance.read"))])
def list_invoices(
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    invoices = repo.get_invoices(company_id=company_id, search=search, status=status)
    return success_response(data=[serialize_invoice(inv) for inv in invoices])


@router.get("/api/invoices/{invoice_id}", dependencies=[Depends(require_permission("finance.read"))])
def get_invoice(
    invoice_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    invoice = repo.get_invoice_by_id(invoice_id, company_id=company_id)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")

    return success_response(data=serialize_invoice(invoice))


@router.post("/api/invoices", status_code=201, dependencies=[Depends(require_permission("finance.create"))])
def create_invoice(
    request: Request,
    body: InvoiceCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    raw = body.model_dump()
    inv_id = raw.pop("id", None) or f"INV-2026-{int(time.time()*1000) % 100000}"

    history = raw.pop("history", None) or [
        {
            "date": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
            "action": "Invoice Created",
            "user": current_user.full_name or "System"
        }
    ]

    invoice = Invoice(
        id=inv_id,
        company_id=company_id,
        created_by_id=current_user.id,
        history=history,
        **raw
    )
    created = repo.create_invoice(invoice)

    AuditService.log(
        db=db,
        action="invoice.create",
        user_id=current_user.id,
        resource="invoices",
        details={"invoice_id": created.id, "total": created.total},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(
        data=serialize_invoice(created),
        message="Invoice created successfully",
        status_code=201
    )


@router.put("/api/invoices/{invoice_id}", dependencies=[Depends(require_permission("finance.update"))])
def update_invoice(
    request: Request,
    invoice_id: str,
    body: InvoiceUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    invoice = repo.get_invoice_by_id(invoice_id, company_id=company_id)
    if not invoice:
        raise HTTPException(status_code=404, detail="Invoice not found")

    raw = body.model_dump(exclude_unset=True)
    
    # Automatically add history entry if status is updated
    if "status" in raw and raw["status"] != invoice.status:
        history = list(invoice.history or [])
        history.append({
            "date": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
            "action": f"Invoice Updated / Status changed to {raw['status']}",
            "user": current_user.full_name or "System"
        })
        raw["history"] = history

    updated = repo.update_invoice(invoice, raw)

    AuditService.log(
        db=db,
        action="invoice.update",
        user_id=current_user.id,
        resource="invoices",
        details={"invoice_id": invoice_id, "updates": list(raw.keys())},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(data=serialize_invoice(updated), message="Invoice updated successfully")


# ── Customer Payments Endpoints ───────────────────────────────────

@router.get("/api/payments", dependencies=[Depends(require_permission("finance.read"))])
def list_payments(
    invoice_id: Optional[str] = Query(None),
    customer_id: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    payments = repo.get_payments(company_id=company_id, invoice_id=invoice_id, customer_id=customer_id)
    return success_response(data=[serialize_payment(p) for p in payments])


@router.get("/api/payments/{payment_id}", dependencies=[Depends(require_permission("finance.read"))])
def get_payment(
    payment_id: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    payment = repo.get_payment_by_id(payment_id, company_id=company_id)
    if not payment:
        raise HTTPException(status_code=404, detail="Payment transaction not found")

    return success_response(data=serialize_payment(payment))


@router.post("/api/payments", status_code=201, dependencies=[Depends(require_permission("finance.create"))])
def create_payment(
    request: Request,
    body: CustomerPaymentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    raw = body.model_dump()
    pay_id = raw.pop("id", None) or f"PAY-{int(time.time()*1000) % 100000}"

    payment = CustomerPayment(
        id=pay_id,
        company_id=company_id,
        created_by_id=current_user.id,
        **raw
    )
    created = repo.create_payment(payment)

    # Optional auto-update invoice status if paid
    if created.invoice_id and created.status == "Completed":
        invoice = repo.get_invoice_by_id(created.invoice_id, company_id=company_id)
        if invoice:
            history = list(invoice.history or [])
            history.append({
                "date": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
                "action": "Payment received & marked as Paid",
                "user": current_user.full_name or "System"
            })
            repo.update_invoice(invoice, {"status": "Paid", "history": history})

    AuditService.log(
        db=db,
        action="payment.create",
        user_id=current_user.id,
        resource="payments",
        details={"payment_id": created.id, "amount": created.amount},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(
        data=serialize_payment(created),
        message="Payment logged successfully",
        status_code=201
    )


# ── Expenses Endpoints ────────────────────────────────────────────

@router.get("/api/expenses", dependencies=[Depends(require_permission("finance.read"))])
def list_expenses(
    category: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    expenses = repo.get_expenses(company_id=company_id, category=category, status=status)
    return success_response(data=[serialize_expense(exp) for exp in expenses])


@router.post("/api/expenses", status_code=201, dependencies=[Depends(require_permission("finance.create"))])
def create_expense(
    request: Request,
    body: ExpenseCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    raw = body.model_dump()
    exp_id = raw.pop("id", None) or f"EXP-{int(time.time()*1000) % 100000}"

    expense = Expense(
        id=exp_id,
        company_id=company_id,
        created_by_id=current_user.id,
        **raw
    )
    created = repo.create_expense(expense)

    AuditService.log(
        db=db,
        action="expense.create",
        user_id=current_user.id,
        resource="expenses",
        details={"expense_id": created.id, "amount": created.amount},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(
        data=serialize_expense(created),
        message="Expense logged successfully",
        status_code=201
    )


@router.put("/api/expenses/{expense_id}", dependencies=[Depends(require_permission("finance.update"))])
def update_expense(
    request: Request,
    expense_id: str,
    body: ExpenseUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    company_id = current_user.company_id
    if not company_id:
        raise HTTPException(status_code=403, detail="No company assigned.")

    repo = FinanceRepository(db)
    expense = repo.get_expense_by_id(expense_id, company_id=company_id)
    if not expense:
        raise HTTPException(status_code=404, detail="Expense not found")

    raw = body.model_dump(exclude_unset=True)
    updated = repo.update_expense(expense, raw)

    AuditService.log(
        db=db,
        action="expense.update",
        user_id=current_user.id,
        resource="expenses",
        details={"expense_id": expense_id, "updates": list(raw.keys())},
        ip_address=request.client.host if request.client else None,
    )

    return success_response(data=serialize_expense(updated), message="Expense updated successfully")
