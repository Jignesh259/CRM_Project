from app.repositories.activity_repository import ActivityRepository
from app.schemas.activity import ActivityItem


class ActivityService:
    def __init__(self, repository: ActivityRepository) -> None:
        self.repository = repository

    def get_activities(self) -> list[ActivityItem]:
        return [ActivityItem.model_validate(item) for item in self.repository.list_activities()]
