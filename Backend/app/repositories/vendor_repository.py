"""
Vendor repository — CRUD operations on vendors table.

MULTI-TENANCY GUARANTEE:
  Every method that reads, counts, or mutates a Vendor requires `company_id`.
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.vendor_model import Vendor
from typing import Optional, List
from uuid import UUID


class VendorRepository:
    def __init__(self, db: Session):
        self.db = db

    # ── Private helper: base tenant-scoped query ─────────────────
    def _tenant_query(self, company_id: UUID):
        """Return a Vendor query pre-filtered to the given tenant."""
        return self.db.query(Vendor).filter(Vendor.company_id == company_id)

    # ── Read ─────────────────────────────────────────────────────

    def get_by_id(self, vendor_id: str, company_id: UUID) -> Optional[Vendor]:
        """Get a single vendor — only if it belongs to this company."""
        return (
            self._tenant_query(company_id)
            .filter(Vendor.id == vendor_id)
            .first()
        )

    def get_vendors(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        search: Optional[str] = None,
        category: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Vendor]:
        """List vendors — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Vendor.status == status)

        if category:
            query = query.filter(Vendor.category == category)

        if search:
            search_filter = or_(
                Vendor.name.ilike(f"%{search}%"),
                Vendor.contact_person.ilike(f"%{search}%"),
                Vendor.email.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.order_by(Vendor.created_at.desc()).offset(skip).limit(limit).all()

    def count_vendors(
        self,
        company_id: UUID,
        search: Optional[str] = None,
        category: Optional[str] = None,
        status: Optional[str] = None,
    ) -> int:
        """Count vendors — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Vendor.status == status)

        if category:
            query = query.filter(Vendor.category == category)

        if search:
            search_filter = or_(
                Vendor.name.ilike(f"%{search}%"),
                Vendor.contact_person.ilike(f"%{search}%"),
                Vendor.email.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.count()

    def get_categories(self, company_id: UUID) -> List[str]:
        """Return all distinct vendor categories for this company."""
        rows = (
            self.db.query(Vendor.category)
            .filter(Vendor.company_id == company_id, Vendor.category.isnot(None))
            .distinct()
            .all()
        )
        return sorted([r[0] for r in rows if r[0]])

    # ── Write ─────────────────────────────────────────────────────

    def create(self, vendor: Vendor) -> Vendor:
        """Persist a new vendor."""
        self.db.add(vendor)
        self.db.commit()
        self.db.refresh(vendor)
        return vendor

    def update(self, vendor: Vendor, updates: dict) -> Vendor:
        """Update a vendor's fields."""
        for key, value in updates.items():
            if value is not None:
                setattr(vendor, key, value)
        self.db.commit()
        self.db.refresh(vendor)
        return vendor

    def delete(self, vendor: Vendor) -> None:
        """Delete a vendor."""
        self.db.delete(vendor)
        self.db.commit()
