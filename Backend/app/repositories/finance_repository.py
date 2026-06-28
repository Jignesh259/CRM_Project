"""
Finance repository - database operations on invoices, payments, and expenses.

MULTI-TENANCY GUARANTEE:
  Every method that reads or mutates data requires `company_id`.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.finance_model import Invoice, CustomerPayment, Expense
from typing import Optional, List
from uuid import UUID


class FinanceRepository:
    def __init__(self, db: Session):
        self.db = db

    # ── Invoices ──────────────────────────────────────────────────

    def _invoice_tenant_query(self, company_id: UUID):
        return self.db.query(Invoice).filter(Invoice.company_id == company_id)

    def get_invoice_by_id(self, invoice_id: str, company_id: UUID) -> Optional[Invoice]:
        return self._invoice_tenant_query(company_id).filter(Invoice.id == invoice_id).first()

    def get_invoices(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        search: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Invoice]:
        query = self._invoice_tenant_query(company_id)
        if status:
            query = query.filter(Invoice.status == status)
        if search:
            query = query.filter(
                or_(
                    Invoice.id.ilike(f"%{search}%"),
                    Invoice.customer_name.ilike(f"%{search}%")
                )
            )
        return query.order_by(Invoice.created_at.desc()).offset(skip).limit(limit).all()

    def create_invoice(self, invoice: Invoice) -> Invoice:
        self.db.add(invoice)
        self.db.commit()
        self.db.refresh(invoice)
        return invoice

    def update_invoice(self, invoice: Invoice, updates: dict) -> Invoice:
        for key, value in updates.items():
            if value is not None:
                setattr(invoice, key, value)
        self.db.commit()
        self.db.refresh(invoice)
        return invoice

    # ── Payments ──────────────────────────────────────────────────

    def _payment_tenant_query(self, company_id: UUID):
        return self.db.query(CustomerPayment).filter(CustomerPayment.company_id == company_id)

    def get_payment_by_id(self, payment_id: str, company_id: UUID) -> Optional[CustomerPayment]:
        return self._payment_tenant_query(company_id).filter(CustomerPayment.id == payment_id).first()

    def get_payments(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        invoice_id: Optional[str] = None,
        customer_id: Optional[str] = None,
    ) -> List[CustomerPayment]:
        query = self._payment_tenant_query(company_id)
        if invoice_id:
            query = query.filter(CustomerPayment.invoice_id == invoice_id)
        if customer_id:
            query = query.filter(CustomerPayment.customer_id == customer_id)
        return query.order_by(CustomerPayment.created_at.desc()).offset(skip).limit(limit).all()

    def create_payment(self, payment: CustomerPayment) -> CustomerPayment:
        self.db.add(payment)
        self.db.commit()
        self.db.refresh(payment)
        return payment

    def update_payment(self, payment: CustomerPayment, updates: dict) -> CustomerPayment:
        for key, value in updates.items():
            if value is not None:
                setattr(payment, key, value)
        self.db.commit()
        self.db.refresh(payment)
        return payment

    # ── Expenses ──────────────────────────────────────────────────

    def _expense_tenant_query(self, company_id: UUID):
        return self.db.query(Expense).filter(Expense.company_id == company_id)

    def get_expense_by_id(self, expense_id: str, company_id: UUID) -> Optional[Expense]:
        return self._expense_tenant_query(company_id).filter(Expense.id == expense_id).first()

    def get_expenses(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        category: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Expense]:
        query = self._expense_tenant_query(company_id)
        if category:
            query = query.filter(Expense.category == category)
        if status:
            query = query.filter(Expense.status == status)
        return query.order_by(Expense.date.desc()).offset(skip).limit(limit).all()

    def create_expense(self, expense: Expense) -> Expense:
        self.db.add(expense)
        self.db.commit()
        self.db.refresh(expense)
        return expense

    def update_expense(self, expense: Expense, updates: dict) -> Expense:
        for key, value in updates.items():
            if value is not None:
                setattr(expense, key, value)
        self.db.commit()
        self.db.refresh(expense)
        return expense
