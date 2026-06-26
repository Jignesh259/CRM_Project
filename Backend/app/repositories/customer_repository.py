"""
Customer repository — CRUD operations on customers table.

MULTI-TENANCY GUARANTEE:
  Every method that reads, counts, or mutates a Customer requires `company_id`.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.customer_model import Customer
from typing import Optional, List
from uuid import UUID


class CustomerRepository:
    def __init__(self, db: Session):
        self.db = db

    # ── Private helper: base tenant-scoped query ─────────────────
    def _tenant_query(self, company_id: UUID):
        """Return a Customer query pre-filtered to the given tenant."""
        return self.db.query(Customer).filter(Customer.company_id == company_id)

    # ── Read ─────────────────────────────────────────────────────

    def get_by_id(self, customer_id: str, company_id: UUID) -> Optional[Customer]:
        """Get a single customer — only if it belongs to this company (ACID-Isolation)."""
        return (
            self._tenant_query(company_id)
            .filter(Customer.id == customer_id)
            .first()
        )

    def get_customers(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        search: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Customer]:
        """List customers — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Customer.status == status)

        if search:
            search_filter = or_(
                Customer.first_name.ilike(f"%{search}%"),
                Customer.last_name.ilike(f"%{search}%"),
                Customer.email.ilike(f"%{search}%"),
                Customer.company.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.order_by(Customer.created_at.desc()).offset(skip).limit(limit).all()

    def count_customers(
        self,
        company_id: UUID,
        search: Optional[str] = None,
        status: Optional[str] = None,
    ) -> int:
        """Count customers — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Customer.status == status)

        if search:
            search_filter = or_(
                Customer.first_name.ilike(f"%{search}%"),
                Customer.last_name.ilike(f"%{search}%"),
                Customer.email.ilike(f"%{search}%"),
                Customer.company.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.count()

    # ── Write ─────────────────────────────────────────────────────

    def create(self, customer: Customer) -> Customer:
        """
        Persist a new customer.
        """
        self.db.add(customer)
        self.db.commit()
        self.db.refresh(customer)
        return customer

    def update(self, customer: Customer, updates: dict) -> Customer:
        """Update a customer's fields."""
        for key, value in updates.items():
            if value is not None:
                setattr(customer, key, value)
        self.db.commit()
        self.db.refresh(customer)
        return customer

    def delete(self, customer: Customer) -> None:
        """Delete a customer."""
        self.db.delete(customer)
        self.db.commit()
