from app.db.mock_store import MockStore


class DashboardRepository:
    def __init__(self, store: MockStore) -> None:
        self.store = store

    def get_dashboard_metrics(self) -> list[dict[str, str]]:
        return self.store.dashboard_metrics

    def get_revenue_points(self) -> list[dict[str, int | str]]:
        return self.store.revenue_points

    def get_pipeline_stages(self) -> list[dict[str, int | str]]:
        return self.store.pipeline_stages

    def get_analytics_snapshot(self) -> dict[str, object]:
        return self.store.analytics_snapshot
