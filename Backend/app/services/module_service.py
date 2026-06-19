from fastapi import HTTPException

from app.repositories.module_repository import ModuleRepository
from app.schemas.module import ModuleSummary


class ModuleService:
    def __init__(self, repository: ModuleRepository) -> None:
        self.repository = repository

    def get_module(self, module_id: str) -> ModuleSummary:
        module = self.repository.get_module(module_id)
        if module is None:
            raise HTTPException(status_code=404, detail="Module not found.")
        return ModuleSummary.model_validate(module)
