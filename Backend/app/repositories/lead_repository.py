"""
Lead repository — CRUD operations on leads and lead_activities tables.

MULTI-TENANCY GUARANTEE:
  Every method that reads, counts, or mutates a Lead requires `company_id`
  (the tenant key coming from `current_user.company_id`).
  No lead row can be seen or changed by a user from a different company.

ACID properties upheld:
  - Atomicity   : each write is committed in a single transaction
  - Consistency : company_id is always set on INSERT (never None after migration)
  - Isolation   : WHERE company_id = ? on every SELECT prevents cross-tenant reads
  - Durability  : SQLAlchemy + PostgreSQL commit guarantees persistence
"""

from sqlalchemy.orm import Session
from sqlalchemy import or_
from app.models.lead_model import Lead, LeadActivity
from typing import Optional, List
from uuid import UUID


class LeadRepository:
    def __init__(self, db: Session):
        self.db = db

    # ── Private helper: base tenant-scoped query ─────────────────
    def _tenant_query(self, company_id: UUID):
        """Return a Lead query pre-filtered to the given tenant."""
        return self.db.query(Lead).filter(Lead.company_id == company_id)

    # ── Read ─────────────────────────────────────────────────────

    def get_by_id(self, lead_id: UUID, company_id: UUID) -> Optional[Lead]:
        """Get a single lead — only if it belongs to this company (ACID-Isolation)."""
        return (
            self._tenant_query(company_id)
            .filter(Lead.id == lead_id)
            .first()
        )

    def get_leads(
        self,
        company_id: UUID,
        skip: int = 0,
        limit: int = 100,
        search: Optional[str] = None,
        status: Optional[str] = None,
    ) -> List[Lead]:
        """List leads — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Lead.status == status)

        if search:
            search_filter = or_(
                Lead.first_name.ilike(f"%{search}%"),
                Lead.last_name.ilike(f"%{search}%"),
                Lead.email.ilike(f"%{search}%"),
                Lead.company.ilike(f"%{search}%"),
                Lead.job_title.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.order_by(Lead.created_at.desc()).offset(skip).limit(limit).all()

    def count_leads(
        self,
        company_id: UUID,
        search: Optional[str] = None,
        status: Optional[str] = None,
    ) -> int:
        """Count leads — scoped to this company only."""
        query = self._tenant_query(company_id)

        if status:
            query = query.filter(Lead.status == status)

        if search:
            search_filter = or_(
                Lead.first_name.ilike(f"%{search}%"),
                Lead.last_name.ilike(f"%{search}%"),
                Lead.email.ilike(f"%{search}%"),
                Lead.company.ilike(f"%{search}%"),
                Lead.job_title.ilike(f"%{search}%"),
            )
            query = query.filter(search_filter)

        return query.count()

    # ── Write ─────────────────────────────────────────────────────

    def create(self, lead: Lead) -> Lead:
        """
        Persist a new lead.
        Caller (router) must set lead.company_id before calling this method.
        ACID-Atomicity: single commit, no partial state.
        """
        self.db.add(lead)
        self.db.commit()
        self.db.refresh(lead)
        return lead

    def update(self, lead: Lead, updates: dict) -> Lead:
        """Update a lead's fields. lead must have been fetched via get_by_id() (tenant-scoped)."""
        for key, value in updates.items():
            if value is not None:
                setattr(lead, key, value)
        self.db.commit()
        self.db.refresh(lead)
        return lead

    def delete(self, lead: Lead) -> None:
        """Delete a lead. lead must have been fetched via get_by_id() (tenant-scoped)."""
        self.db.delete(lead)
        self.db.commit()

    # ── Activities ────────────────────────────────────────────────

    def create_activity(self, activity: LeadActivity) -> LeadActivity:
        self.db.add(activity)
        self.db.commit()
        self.db.refresh(activity)
        return activity

    def get_activities(self, lead_id: UUID) -> List[LeadActivity]:
        return (
            self.db.query(LeadActivity)
            .filter(LeadActivity.lead_id == lead_id)
            .order_by(LeadActivity.created_at.desc())
            .all()
        )

