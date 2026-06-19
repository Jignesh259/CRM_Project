from app.repositories.activity_repository import ActivityRepository
from app.repositories.dashboard_repository import DashboardRepository
from app.schemas.activity import ActivityItem
from app.schemas.dashboard import AnalyticsResponse, DashboardMetric, DashboardResponse, PipelineStage, RevenuePoint


class DashboardService:
    def __init__(self, repository: DashboardRepository) -> None:
        self.repository = repository
        self.activity_repository = ActivityRepository(repository.store)

    def get_dashboard(self) -> DashboardResponse:
        return DashboardResponse(
            metrics=[DashboardMetric.model_validate(item) for item in self.repository.get_dashboard_metrics()],
            revenue=[RevenuePoint.model_validate(item) for item in self.repository.get_revenue_points()],
            pipeline=[PipelineStage.model_validate(item) for item in self.repository.get_pipeline_stages()],
            activities=[ActivityItem.model_validate(item) for item in self.activity_repository.list_activities()],
        )

    def get_analytics(self) -> AnalyticsResponse:
        return AnalyticsResponse.model_validate(self.repository.get_analytics_snapshot())
