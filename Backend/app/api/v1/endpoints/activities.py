from fastapi import APIRouter, Depends

from app.core.dependencies import get_activity_service
from app.schemas.activity import ActivityItem
from app.services.activity_service import ActivityService

router = APIRouter()


@router.get("/activities", response_model=list[ActivityItem])
def get_activities(service: ActivityService = Depends(get_activity_service)) -> list[ActivityItem]:
    return service.get_activities()
