"""
CRM API — FastAPI application entry point.

Production-ready with:
- Connection pool management (DB + Redis)
- CORS restricted by environment
- Rate limiting via slowapi
- Structured logging with request ID tracking
"""

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from contextlib import asynccontextmanager
from app.core.config import get_settings
from app.core.database import engine, Base
from app.core.redis_client import get_redis, close_redis
from app.routers import auth_router, user_router, role_router, lead_router, customer_router, inventory_router, audit_router, vendor_router, sales_router, finance_router
from app.middleware.jwt_middleware import JWTMiddleware
from app.middleware.security_headers_middleware import SecurityHeadersMiddleware
from app.core.rate_limit import limiter
from slowapi.errors import RateLimitExceeded
from slowapi import _rate_limit_exceeded_handler
from loguru import logger
import uuid

settings = get_settings()


# ── Lifespan (startup / shutdown) ────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Application startup and shutdown events."""
    # ── Startup ──────────────────────────────────────────────
    logger.info(f"Starting {settings.APP_NAME} v{settings.APP_VERSION}")
    logger.info(f"Environment: {settings.ENVIRONMENT}")

    # Create tables (for dev — use Alembic in production)
    if not settings.is_production:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables created / verified (dev mode)")
        
        # Verify / add missing column 'temp' and 'department' in development
        try:
            from sqlalchemy import text
            with engine.begin() as conn:
                conn.execute(text("ALTER TABLE leads ADD COLUMN IF NOT EXISTS temp VARCHAR(50) DEFAULT 'warm' NOT NULL"))
                conn.execute(text("ALTER TABLE users ADD COLUMN IF NOT EXISTS department VARCHAR(255) DEFAULT 'General'"))
            logger.info("Database schema upgrade: 'temp' and 'department' columns verified/added")
        except Exception as db_err:
            logger.exception("Failed to run startup database schema check/upgrade: {}", db_err)
    else:
        logger.info("Production mode — skipping create_all (use Alembic)")

    # Verify Redis connection
    try:
        r = get_redis()
        r.ping()
        logger.info("Redis connected (connection pool active)")
    except Exception as e:
        logger.warning(f"Redis not available: {e}. OTP features will use DB fallback.")

    # Seed default roles
    _seed_default_roles()

    yield

    # ── Shutdown ─────────────────────────────────────────────
    close_redis()
    engine.dispose()  # Close all DB connections in the pool
    logger.info("Application shutdown complete — all connections closed")


# ── App factory ──────────────────────────────────────────────

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="Production CRM Backend with Auth, JWT, OTP, RBAC",
    docs_url="/docs" if not settings.is_production else None,   # Disable docs in prod
    redoc_url="/redoc" if not settings.is_production else None,
    lifespan=lifespan,
)

app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# ── CORS (restricted in production) ──────────────────────────

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type", "Accept"],
)

# ── Security and Auth Middleware ────────────────────────────

app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(JWTMiddleware)


# ── Request ID Middleware (trace concurrent requests) ────────

@app.middleware("http")
async def add_request_id(request: Request, call_next):
    """
    Attach a unique request ID to every request for tracing.
    When 100 users hit the API simultaneously, each request
    gets a unique ID in logs so you can trace exactly what happened.
    """
    request_id = str(uuid.uuid4())[:8]
    request.state.request_id = request_id

    # Add request ID to response headers
    response = await call_next(request)
    response.headers["X-Request-ID"] = request_id
    return response


# ── Global Exception Handler ────────────────────────────────

@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    """
    Catch unhandled exceptions globally.
    In production, never expose stack traces to users.
    """
    request_id = getattr(request.state, "request_id", "unknown")
    logger.exception("[{}] Unhandled exception: {}", request_id, exc)

    if settings.is_production:
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": "Internal server error",
                "request_id": request_id,
            },
        )
    else:
        return JSONResponse(
            status_code=500,
            content={
                "success": False,
                "message": str(exc),
                "request_id": request_id,
            },
        )


# ── Routers ──────────────────────────────────────────────────

app.include_router(auth_router.router)
app.include_router(user_router.router)
app.include_router(role_router.router)
app.include_router(lead_router.router)
app.include_router(customer_router.router)
app.include_router(inventory_router.router)
app.include_router(vendor_router.router)
app.include_router(sales_router.router)
app.include_router(finance_router.router)
app.include_router(audit_router.router)


# ── Health Check ─────────────────────────────────────────────

@app.get("/api/health", tags=["Health"])
def health_check():
    """
    Health endpoint — used by load balancers and monitoring.
    Checks DB and Redis connectivity for production readiness.
    """
    health = {
        "status": "ok",
        "service": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "environment": settings.ENVIRONMENT,
    }

    # Check Redis health
    try:
        r = get_redis()
        r.ping()
        health["redis"] = "connected"
    except Exception:
        health["redis"] = "disconnected"
        health["status"] = "degraded"

    # Check DB health
    try:
        from app.core.database import SessionLocal
        from sqlalchemy import text
        db = SessionLocal()
        db.execute(text("SELECT 1"))
        db.close()
        health["database"] = "connected"
    except Exception:
        health["database"] = "disconnected"
        health["status"] = "degraded"

    return health


# ── Root ─────────────────────────────────────────────────────

@app.get("/", tags=["Root"])
def root():
    return {
        "message": f"Welcome to {settings.APP_NAME}",
        "docs": "/docs",
        "health": "/api/health",
    }


# ── Seed default roles ──────────────────────────────────────

def _seed_default_roles():
    """Create admin, manager, and user roles if they don't exist."""
    from app.core.database import SessionLocal
    from app.services.rbac_service import RBACService

    db = SessionLocal()
    try:
        rbac = RBACService(db)
        default_roles = [
            ("admin", "Full system access"),
            ("manager", "Manage users and data"),
            ("user", "Standard user access"),
        ]
        for name, desc in default_roles:
            rbac.create_role(name, desc)

        # Seed default permissions
        default_perms = [
            ("user.read", "Read user profiles"),
            ("user.create", "Create new users"),
            ("user.update", "Update user profiles"),
            ("user.delete", "Delete users"),
            ("role.manage", "Manage roles and permissions"),
            # Customers module
            ("customer.read", "Read customer profiles"),
            ("customer.create", "Create new customers"),
            ("customer.update", "Update customer profiles"),
            ("customer.delete", "Delete customers"),
            # Leads module
            ("lead.read", "Read lead profiles"),
            ("lead.create", "Create new leads"),
            ("lead.update", "Update lead profiles"),
            ("lead.delete", "Delete leads"),
            # Inventory module
            ("inventory.read", "Read inventory data"),
            ("inventory.create", "Create inventory items"),
            ("inventory.update", "Update inventory items"),
            ("inventory.delete", "Delete inventory items"),
            # Vendor module
            ("vendor.read", "Read vendor profiles"),
            ("vendor.create", "Create new vendors"),
            ("vendor.update", "Update vendor profiles"),
            ("vendor.delete", "Delete vendors"),
            # Finance module
            ("finance.read", "Read finance data (invoices, payments, expenses)"),
            ("finance.create", "Create finance records"),
            ("finance.update", "Update finance records"),
            ("finance.delete", "Delete finance records"),
        ]
        for name, desc in default_perms:
            rbac.create_permission(name, desc)

        # Assign all permissions to admin
        for perm_name, _ in default_perms:
            rbac.assign_permission_to_role("admin", perm_name)

        # Assign read/create/update to manager
        for perm_name in [
            "user.read", "user.create", "user.update",
            "customer.read", "customer.create", "customer.update",
            "lead.read", "lead.create", "lead.update",
            "inventory.read", "inventory.create", "inventory.update",
            "finance.read", "finance.create", "finance.update",
        ]:
            rbac.assign_permission_to_role("manager", perm_name)

        # Assign read to user
        for perm_name in ["user.read", "customer.read", "lead.read", "inventory.read", "finance.read"]:
            rbac.assign_permission_to_role("user", perm_name)

        logger.info("Default roles and permissions seeded")
    except Exception as e:
        logger.error(f"Error seeding roles: {e}")
    finally:
        db.close()
