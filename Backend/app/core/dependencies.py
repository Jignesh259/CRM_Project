from app.db.mock_store import mock_store
from app.repositories.activity_repository import ActivityRepository
from app.repositories.auth_repository import AuthRepository
from app.repositories.dashboard_repository import DashboardRepository
from app.repositories.module_repository import ModuleRepository
from app.services.activity_service import ActivityService
from app.services.auth_service import AuthService
from app.services.dashboard_service import DashboardService
from app.services.module_service import ModuleService


def get_auth_service() -> AuthService:
    return AuthService(AuthRepository(mock_store))


def get_dashboard_service() -> DashboardService:
    return DashboardService(DashboardRepository(mock_store))


def get_activity_service() -> ActivityService:
    return ActivityService(ActivityRepository(mock_store))


def get_module_service() -> ModuleService:
    return ModuleService(ModuleRepository(mock_store))
