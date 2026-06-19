from fastapi import APIRouter, Depends

from app.core.dependencies import get_module_service
from app.schemas.module import ModuleSummary
from app.services.module_service import ModuleService

router = APIRouter()


@router.get("/modules/{module_id}", response_model=ModuleSummary)
def get_module(module_id: str, service: ModuleService = Depends(get_module_service)) -> ModuleSummary:
    return service.get_module(module_id)
