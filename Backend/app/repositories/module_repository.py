from app.db.mock_store import MockStore


class ModuleRepository:
    def __init__(self, store: MockStore) -> None:
        self.store = store

    def get_module(self, module_id: str) -> dict[str, object] | None:
        return self.store.module_summaries.get(module_id)
