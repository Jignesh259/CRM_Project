from app.models.entities import ActivityType
from pydantic import BaseModel


class ActivityItem(BaseModel):
    id: int
    title: str
    description: str
    time: str
    type: ActivityType
