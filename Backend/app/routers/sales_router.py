"""
Sales router — Quotations, Sales Orders, Shipments, and Purchase Orders.

All endpoints are multi-tenant scoped by company_id from the JWT.
"""

from fastapi import APIRouter, Depends, HTTPException, status, Query, Request
from sqlalchemy.orm import Session
from typing import Optional
import time
from datetime import datetime, timezone

from app.core.dependencies import get_db, get_current_active_user
from app.middleware.role_middleware import require_permission
from app.services.audit_service import AuditService
from app.repositories.sales_repository import (
    QuotationRepository,
    SalesOrderRepository,
    ShipmentRepository,
    PurchaseOrderRepository,
)
from app.models.sales_model import Quotation, SalesOrder, Shipment, PurchaseOrder
from app.schemas.sales_schema import (
    QuotationCreate, QuotationUpdate,
    SalesOrderCreate, SalesOrderUpdate,
    ShipmentCreate, ShipmentStatusUpdate,
    PurchaseOrderCreate, PurchaseOrderUpdate,
)
from app.utils.response_utils import success_response

router = APIRouter(tags=["Sales & Logistics"])


# ══════════════════════════════════════════════════════════════════
# SERIALIZERS
# ══════════════════════════════════════════════════════════════════

def _ser_quote(q: Quotation) -> dict:
    return {
        "id": q.id,
        "customerId": q.customer_id,
        "customerName": q.customer_name,
        "total": q.total,
        "date": q.created_at.isoformat() if q.created_at else None,
        "validUntil": q.valid_until.isoformat() if q.valid_until else None,
        "status": q.status,
        "items": q.items or [],
        "notes": q.notes,
    }

def _ser_order(o: SalesOrder) -> dict:
    return {
        "id": o.id,
        "customerId": o.customer_id,
        "customerName": o.customer_name,
        "shippingAddress": o.shipping_address,
        "billingAddress": o.billing_address,
        "status": o.status,
        "total": o.total,
        "items": o.items or [],
        "shipmentId": o.shipment_id,
        "notes": o.notes,
        "date": o.created_at.isoformat() if o.created_at else None,
    }

def _ser_shipment(s: Shipment) -> dict:
    return {
        "id": s.id,
        "orderId": s.order_id,
        "customerName": s.customer_name,
        "carrier": s.carrier,
        "trackingCode": s.tracking_code,
        "source": s.source,
        "destination": s.destination,
        "status": s.status,
        "estDelivery": s.est_delivery.isoformat() if s.est_delivery else None,
        "history": s.history or [],
        "date": s.created_at.isoformat() if s.created_at else None,
    }

def _ser_po(p: PurchaseOrder) -> dict:
    return {
        "id": p.id,
        "vendorId": p.vendor_id,
        "vendorName": p.vendor_name,
        "total": p.total,
        "expectedDelivery": p.expected_delivery.isoformat() if p.expected_delivery else None,
        "status": p.status,
        "items": p.items or [],
        "notes": p.notes,
        "comments": p.comments or [],
        "date": p.created_at.isoformat() if p.created_at else None,
    }


# ══════════════════════════════════════════════════════════════════
# QUOTATIONS   /api/quotations
# ══════════════════════════════════════════════════════════════════

@router.get("/api/quotations", dependencies=[Depends(require_permission("inventory.read"))])
def list_quotes(
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = QuotationRepository(db)
    quotes = repo.get_all(current_user.company_id, search=search, status=status)
    return success_response(data=[_ser_quote(q) for q in quotes])


@router.post("/api/quotations", status_code=201, dependencies=[Depends(require_permission("inventory.create"))])
def create_quote(
    request: Request,
    body: QuotationCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    data = body.model_dump()
    qid = data.pop("id", None) or f"QT-{int(time.time()*1000) % 100000}"
    quote = Quotation(id=qid, company_id=current_user.company_id, created_by_id=current_user.id, **data)
    repo = QuotationRepository(db)
    created = repo.create(quote)
    AuditService.log(db=db, action="quotation.create", user_id=current_user.id, resource="quotations",
                     details={"id": created.id}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_quote(created), message="Quotation created", status_code=201)


@router.get("/api/quotations/{quote_id}", dependencies=[Depends(require_permission("inventory.read"))])
def get_quote(quote_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_active_user)):
    repo = QuotationRepository(db)
    q = repo.get_by_id(quote_id, current_user.company_id)
    if not q:
        raise HTTPException(status_code=404, detail="Quotation not found")
    return success_response(data=_ser_quote(q))


@router.put("/api/quotations/{quote_id}", dependencies=[Depends(require_permission("inventory.update"))])
def update_quote(
    request: Request,
    quote_id: str,
    body: QuotationUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = QuotationRepository(db)
    q = repo.get_by_id(quote_id, current_user.company_id)
    if not q:
        raise HTTPException(status_code=404, detail="Quotation not found")
    updated = repo.update(q, body.model_dump(exclude_unset=True))
    AuditService.log(db=db, action="quotation.update", user_id=current_user.id, resource="quotations",
                     details={"id": quote_id}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_quote(updated))


# ══════════════════════════════════════════════════════════════════
# SALES ORDERS   /api/sales-orders
# ══════════════════════════════════════════════════════════════════

@router.get("/api/sales-orders", dependencies=[Depends(require_permission("inventory.read"))])
def list_sales_orders(
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = SalesOrderRepository(db)
    orders = repo.get_all(current_user.company_id, search=search, status=status)
    return success_response(data=[_ser_order(o) for o in orders])


@router.post("/api/sales-orders", status_code=201, dependencies=[Depends(require_permission("inventory.create"))])
def create_sales_order(
    request: Request,
    body: SalesOrderCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    data = body.model_dump()
    oid = data.pop("id", None) or f"SO-{int(time.time()*1000) % 100000}"
    order = SalesOrder(id=oid, company_id=current_user.company_id, created_by_id=current_user.id, **data)
    repo = SalesOrderRepository(db)
    created = repo.create(order)
    AuditService.log(db=db, action="sales_order.create", user_id=current_user.id, resource="sales_orders",
                     details={"id": created.id}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_order(created), message="Sales order created", status_code=201)


@router.get("/api/sales-orders/{order_id}", dependencies=[Depends(require_permission("inventory.read"))])
def get_sales_order(order_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_active_user)):
    repo = SalesOrderRepository(db)
    o = repo.get_by_id(order_id, current_user.company_id)
    if not o:
        raise HTTPException(status_code=404, detail="Sales order not found")
    return success_response(data=_ser_order(o))


@router.put("/api/sales-orders/{order_id}", dependencies=[Depends(require_permission("inventory.update"))])
def update_sales_order(
    request: Request,
    order_id: str,
    body: SalesOrderUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = SalesOrderRepository(db)
    o = repo.get_by_id(order_id, current_user.company_id)
    if not o:
        raise HTTPException(status_code=404, detail="Sales order not found")
    updated = repo.update(o, body.model_dump(exclude_unset=True))
    AuditService.log(db=db, action="sales_order.update", user_id=current_user.id, resource="sales_orders",
                     details={"id": order_id}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_order(updated))


# ══════════════════════════════════════════════════════════════════
# SHIPMENTS   /api/shipments
# ══════════════════════════════════════════════════════════════════

@router.get("/api/shipments", dependencies=[Depends(require_permission("inventory.read"))])
def list_shipments(
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = ShipmentRepository(db)
    shipments = repo.get_all(current_user.company_id, status=status)
    return success_response(data=[_ser_shipment(s) for s in shipments])


@router.post("/api/shipments", status_code=201, dependencies=[Depends(require_permission("inventory.create"))])
def create_shipment(
    request: Request,
    body: ShipmentCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    data = body.model_dump()
    sid = data.pop("id", None) or f"SHIP-{int(time.time()*1000) % 100000}"
    # Seed initial history entry
    if not data.get("history"):
        data["history"] = [{"timestamp": datetime.now(timezone.utc).isoformat(), "activity": "Shipment created and order confirmed"}]
    shipment = Shipment(id=sid, company_id=current_user.company_id, created_by_id=current_user.id, **data)
    repo = ShipmentRepository(db)
    created = repo.create(shipment)
    return success_response(data=_ser_shipment(created), message="Shipment created", status_code=201)


@router.get("/api/shipments/{shipment_id}", dependencies=[Depends(require_permission("inventory.read"))])
def get_shipment(shipment_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_active_user)):
    repo = ShipmentRepository(db)
    s = repo.get_by_id(shipment_id, current_user.company_id)
    if not s:
        raise HTTPException(status_code=404, detail="Shipment not found")
    return success_response(data=_ser_shipment(s))


@router.put("/api/shipments/{shipment_id}/status", dependencies=[Depends(require_permission("inventory.update"))])
def update_shipment_status(
    request: Request,
    shipment_id: str,
    body: ShipmentStatusUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = ShipmentRepository(db)
    s = repo.get_by_id(shipment_id, current_user.company_id)
    if not s:
        raise HTTPException(status_code=404, detail="Shipment not found")

    history = list(s.history or [])
    history.append({"timestamp": datetime.now(timezone.utc).isoformat(), "activity": body.activity})

    updated = repo.update(s, {"status": body.status, "history": history})
    AuditService.log(db=db, action="shipment.status_update", user_id=current_user.id, resource="shipments",
                     details={"id": shipment_id, "status": body.status}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_shipment(updated))


# ══════════════════════════════════════════════════════════════════
# PURCHASE ORDERS   /api/purchase-orders
# ══════════════════════════════════════════════════════════════════

@router.get("/api/purchase-orders", dependencies=[Depends(require_permission("inventory.read"))])
def list_purchase_orders(
    search: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = PurchaseOrderRepository(db)
    pos = repo.get_all(current_user.company_id, search=search, status=status)
    return success_response(data=[_ser_po(p) for p in pos])


@router.post("/api/purchase-orders", status_code=201, dependencies=[Depends(require_permission("inventory.create"))])
def create_purchase_order(
    request: Request,
    body: PurchaseOrderCreate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    data = body.model_dump()
    pid = data.pop("id", None) or f"PO-{int(time.time()*1000) % 100000}"
    if not data.get("comments"):
        data["comments"] = [{"id": "1", "author": "System", "text": "Purchase Order generated and sent.", "timestamp": datetime.now(timezone.utc).isoformat()}]
    po = PurchaseOrder(id=pid, company_id=current_user.company_id, created_by_id=current_user.id, **data)
    repo = PurchaseOrderRepository(db)
    created = repo.create(po)
    AuditService.log(db=db, action="purchase_order.create", user_id=current_user.id, resource="purchase_orders",
                     details={"id": created.id, "vendor": created.vendor_name}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_po(created), message="Purchase order created", status_code=201)


@router.get("/api/purchase-orders/{po_id}", dependencies=[Depends(require_permission("inventory.read"))])
def get_purchase_order(po_id: str, db: Session = Depends(get_db), current_user=Depends(get_current_active_user)):
    repo = PurchaseOrderRepository(db)
    p = repo.get_by_id(po_id, current_user.company_id)
    if not p:
        raise HTTPException(status_code=404, detail="Purchase order not found")
    return success_response(data=_ser_po(p))


@router.put("/api/purchase-orders/{po_id}", dependencies=[Depends(require_permission("inventory.update"))])
def update_purchase_order(
    request: Request,
    po_id: str,
    body: PurchaseOrderUpdate,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_active_user),
):
    repo = PurchaseOrderRepository(db)
    p = repo.get_by_id(po_id, current_user.company_id)
    if not p:
        raise HTTPException(status_code=404, detail="Purchase order not found")
    updated = repo.update(p, body.model_dump(exclude_unset=True))
    AuditService.log(db=db, action="purchase_order.update", user_id=current_user.id, resource="purchase_orders",
                     details={"id": po_id}, ip_address=request.client.host if request.client else None)
    return success_response(data=_ser_po(updated))
