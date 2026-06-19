from fastapi import APIRouter, Depends

from app.core.dependencies import get_dashboard_service
from app.schemas.dashboard import AnalyticsResponse
from app.services.dashboard_service import DashboardService

router = APIRouter()


@router.get("/analytics", response_model=AnalyticsResponse)
def get_analytics(service: DashboardService = Depends(get_dashboard_service)) -> AnalyticsResponse:
    return service.get_analytics()
