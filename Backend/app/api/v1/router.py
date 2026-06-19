from fastapi import APIRouter

from app.api.v1.endpoints.activities import router as activities_router
from app.api.v1.endpoints.analytics import router as analytics_router
from app.api.v1.endpoints.auth import router as auth_router
from app.api.v1.endpoints.dashboard import router as dashboard_router
from app.api.v1.endpoints.health import router as health_router
from app.api.v1.endpoints.modules import router as modules_router

router = APIRouter()
router.include_router(health_router, tags=["health"])
router.include_router(auth_router, prefix="/auth", tags=["auth"])
router.include_router(dashboard_router, tags=["dashboard"])
router.include_router(analytics_router, tags=["analytics"])
router.include_router(activities_router, tags=["activities"])
router.include_router(modules_router, tags=["modules"])
