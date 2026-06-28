"""
Sales, Logistics, and Procurement repositories.

MULTI-TENANCY GUARANTEE:
  Every method scopes queries to company_id.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.sales_model import Quotation, SalesOrder, Shipment, PurchaseOrder
from typing import Optional, List
from uuid import UUID
from datetime import datetime


# ── Quotation Repository ──────────────────────────────────────────

class QuotationRepository:
    def __init__(self, db: Session):
        self.db = db

    def _q(self, company_id: UUID):
        return self.db.query(Quotation).filter(Quotation.company_id == company_id)

    def get_all(self, company_id: UUID, search: Optional[str] = None, status: Optional[str] = None) -> List[Quotation]:
        q = self._q(company_id)
        if status:
            q = q.filter(Quotation.status == status)
        if search:
            q = q.filter(or_(Quotation.customer_name.ilike(f"%{search}%"), Quotation.id.ilike(f"%{search}%")))
        return q.order_by(Quotation.created_at.desc()).all()

    def get_by_id(self, quote_id: str, company_id: UUID) -> Optional[Quotation]:
        return self._q(company_id).filter(Quotation.id == quote_id).first()

    def create(self, quote: Quotation) -> Quotation:
        self.db.add(quote)
        self.db.commit()
        self.db.refresh(quote)
        return quote

    def update(self, quote: Quotation, updates: dict) -> Quotation:
        for k, v in updates.items():
            if v is not None:
                setattr(quote, k, v)
        self.db.commit()
        self.db.refresh(quote)
        return quote

    def delete(self, quote: Quotation) -> None:
        self.db.delete(quote)
        self.db.commit()


# ── SalesOrder Repository ─────────────────────────────────────────

class SalesOrderRepository:
    def __init__(self, db: Session):
        self.db = db

    def _q(self, company_id: UUID):
        return self.db.query(SalesOrder).filter(SalesOrder.company_id == company_id)

    def get_all(self, company_id: UUID, search: Optional[str] = None, status: Optional[str] = None) -> List[SalesOrder]:
        q = self._q(company_id)
        if status:
            q = q.filter(SalesOrder.status == status)
        if search:
            q = q.filter(or_(SalesOrder.customer_name.ilike(f"%{search}%"), SalesOrder.id.ilike(f"%{search}%")))
        return q.order_by(SalesOrder.created_at.desc()).all()

    def get_by_id(self, order_id: str, company_id: UUID) -> Optional[SalesOrder]:
        return self._q(company_id).filter(SalesOrder.id == order_id).first()

    def create(self, order: SalesOrder) -> SalesOrder:
        self.db.add(order)
        self.db.commit()
        self.db.refresh(order)
        return order

    def update(self, order: SalesOrder, updates: dict) -> SalesOrder:
        for k, v in updates.items():
            if v is not None:
                setattr(order, k, v)
        self.db.commit()
        self.db.refresh(order)
        return order

    def delete(self, order: SalesOrder) -> None:
        self.db.delete(order)
        self.db.commit()


# ── Shipment Repository ───────────────────────────────────────────

class ShipmentRepository:
    def __init__(self, db: Session):
        self.db = db

    def _q(self, company_id: UUID):
        return self.db.query(Shipment).filter(Shipment.company_id == company_id)

    def get_all(self, company_id: UUID, status: Optional[str] = None) -> List[Shipment]:
        q = self._q(company_id)
        if status:
            q = q.filter(Shipment.status == status)
        return q.order_by(Shipment.created_at.desc()).all()

    def get_by_id(self, shipment_id: str, company_id: UUID) -> Optional[Shipment]:
        return self._q(company_id).filter(Shipment.id == shipment_id).first()

    def create(self, shipment: Shipment) -> Shipment:
        self.db.add(shipment)
        self.db.commit()
        self.db.refresh(shipment)
        return shipment

    def update(self, shipment: Shipment, updates: dict) -> Shipment:
        for k, v in updates.items():
            if v is not None:
                setattr(shipment, k, v)
        self.db.commit()
        self.db.refresh(shipment)
        return shipment


# ── PurchaseOrder Repository ──────────────────────────────────────

class PurchaseOrderRepository:
    def __init__(self, db: Session):
        self.db = db

    def _q(self, company_id: UUID):
        return self.db.query(PurchaseOrder).filter(PurchaseOrder.company_id == company_id)

    def get_all(self, company_id: UUID, search: Optional[str] = None, status: Optional[str] = None) -> List[PurchaseOrder]:
        q = self._q(company_id)
        if status:
            q = q.filter(PurchaseOrder.status == status)
        if search:
            q = q.filter(or_(PurchaseOrder.vendor_name.ilike(f"%{search}%"), PurchaseOrder.id.ilike(f"%{search}%")))
        return q.order_by(PurchaseOrder.created_at.desc()).all()

    def get_by_id(self, po_id: str, company_id: UUID) -> Optional[PurchaseOrder]:
        return self._q(company_id).filter(PurchaseOrder.id == po_id).first()

    def create(self, po: PurchaseOrder) -> PurchaseOrder:
        self.db.add(po)
        self.db.commit()
        self.db.refresh(po)
        return po

    def update(self, po: PurchaseOrder, updates: dict) -> PurchaseOrder:
        for k, v in updates.items():
            if v is not None:
                setattr(po, k, v)
        self.db.commit()
        self.db.refresh(po)
        return po

    def delete(self, po: PurchaseOrder) -> None:
        self.db.delete(po)
        self.db.commit()
