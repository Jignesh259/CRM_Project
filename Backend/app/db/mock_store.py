from __future__ import annotations

from dataclasses import dataclass, field

from app.core.security import hash_password
from app.models.entities import UserRecord


@dataclass
class MockStore:
    users: dict[str, UserRecord] = field(default_factory=dict)
    dashboard_metrics: list[dict[str, str]] = field(default_factory=list)
    revenue_points: list[dict[str, int | str]] = field(default_factory=list)
    pipeline_stages: list[dict[str, int | str]] = field(default_factory=list)
    activities: list[dict[str, int | str]] = field(default_factory=list)
    analytics_snapshot: dict[str, object] = field(default_factory=dict)
    module_summaries: dict[str, dict[str, object]] = field(default_factory=dict)


def create_mock_store() -> MockStore:
    return MockStore(
        users={
            "admin@commsync.io": UserRecord(
                name="Demo Admin",
                email="admin@commsync.io",
                company="CommSync",
                password_hash=hash_password("demo1234"),
            )
        },
        dashboard_metrics=[
            {"label": "Pipeline revenue", "value": "$1.84M", "change": "+12.5% vs last month", "trend": "up"},
            {"label": "Open leads", "value": "248", "change": "+18 net new", "trend": "up"},
            {"label": "Invoices pending", "value": "37", "change": "-4 overdue", "trend": "down"},
            {"label": "Fulfillment SLA", "value": "97.2%", "change": "Stable this week", "trend": "flat"},
        ],
        revenue_points=[
            {"month": "Jan", "revenue": 118000, "target": 120000},
            {"month": "Feb", "revenue": 126500, "target": 125000},
            {"month": "Mar", "revenue": 142000, "target": 130000},
            {"month": "Apr", "revenue": 151250, "target": 145000},
            {"month": "May", "revenue": 166200, "target": 155000},
            {"month": "Jun", "revenue": 173400, "target": 165000},
        ],
        pipeline_stages=[
            {"stage": "Qualified", "count": 42},
            {"stage": "Proposal", "count": 27},
            {"stage": "Negotiation", "count": 15},
            {"stage": "Closing", "count": 9},
        ],
        activities=[
            {
                "id": 1,
                "title": "Enterprise renewal moved to legal review",
                "description": "The Northwind renewal advanced after commercial approval and awaits final signatures.",
                "time": "10 minutes ago",
                "type": "lead",
            },
            {
                "id": 2,
                "title": "Invoice INV-2048 marked as paid",
                "description": "Finance recorded a completed ACH payment for the May services package.",
                "time": "45 minutes ago",
                "type": "invoice",
            },
            {
                "id": 3,
                "title": "Warehouse transfer assigned to operations",
                "description": "Stock rebalancing between Bangalore and Delhi was scheduled for tonight.",
                "time": "1 hour ago",
                "type": "task",
            },
            {
                "id": 4,
                "title": "Role permissions updated for support managers",
                "description": "Settings now grant export access to regional support leads.",
                "time": "3 hours ago",
                "type": "system",
            },
        ],
        analytics_snapshot={
            "winRate": 34.8,
            "customerGrowth": 18.2,
            "recurringRevenue": 482000,
            "regionPerformance": [
                {"region": "North", "revenue": 184000, "customers": 48},
                {"region": "West", "revenue": 136000, "customers": 37},
                {"region": "South", "revenue": 121000, "customers": 33},
                {"region": "East", "revenue": 91000, "customers": 24},
            ],
            "topProducts": [
                {"name": "Pro Support Suite", "sales": 124, "margin": 38},
                {"name": "CommSync Analytics", "sales": 98, "margin": 42},
                {"name": "Inventory Automation", "sales": 76, "margin": 35},
            ],
        },
        module_summaries={
            "crm": {
                "module": "crm",
                "title": "CRM workspace",
                "summary": "Customer relationships, lead quality, and account health in one operating view.",
                "stats": [
                    {"label": "Accounts managed", "value": "312"},
                    {"label": "Leads this week", "value": "84"},
                    {"label": "Meetings booked", "value": "29"},
                ],
                "actions": ["Create lead", "Schedule follow-up", "Review account notes"],
            },
            "sales": {
                "module": "sales",
                "title": "Sales command center",
                "summary": "Opportunities, quotes, and order conversion with cleaner daily execution.",
                "stats": [
                    {"label": "Open opportunities", "value": "57"},
                    {"label": "Quotes pending", "value": "16"},
                    {"label": "Orders won", "value": "22"},
                ],
                "actions": ["Build quote", "Approve discount", "Move deal to close"],
            },
            "inventory": {
                "module": "inventory",
                "title": "Inventory operations",
                "summary": "Keep stock levels, transfers, and warehouse actions aligned to demand.",
                "stats": [
                    {"label": "Active SKUs", "value": "1,248"},
                    {"label": "Low stock alerts", "value": "18"},
                    {"label": "Transfers today", "value": "7"},
                ],
                "actions": ["Receive stock", "Trigger replenishment", "Review warehouse balance"],
            },
            "finance": {
                "module": "finance",
                "title": "Finance hub",
                "summary": "Track invoices, collection risk, and cash performance without leaving the CRM stack.",
                "stats": [
                    {"label": "Open invoices", "value": "37"},
                    {"label": "Collected this month", "value": "$412K"},
                    {"label": "Past due", "value": "5"},
                ],
                "actions": ["Review ledger", "Send reminder", "Approve settlement"],
            },
            "settings": {
                "module": "settings",
                "title": "Workspace settings",
                "summary": "Configure branding, communication defaults, and role-based access controls.",
                "stats": [
                    {"label": "Active roles", "value": "9"},
                    {"label": "Integrations", "value": "4"},
                    {"label": "Pending audits", "value": "2"},
                ],
                "actions": ["Edit branding", "Update permissions", "Review integrations"],
            },
        },
    )


mock_store = create_mock_store()
