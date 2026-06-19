from app.db.mock_store import MockStore
from app.models.entities import UserRecord


class AuthRepository:
    def __init__(self, store: MockStore) -> None:
        self.store = store

    def get_user_by_email(self, email: str) -> UserRecord | None:
        return self.store.users.get(email)

    def create_user(self, user: UserRecord) -> UserRecord:
        self.store.users[user.email] = user
        return user

    def update_user(self, user: UserRecord) -> UserRecord:
        self.store.users[user.email] = user
        return user
