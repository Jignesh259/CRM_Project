from app.db.mock_store import MockStore


class ActivityRepository:
    def __init__(self, store: MockStore) -> None:
        self.store = store

    def list_activities(self) -> list[dict[str, int | str]]:
        return self.store.activities
