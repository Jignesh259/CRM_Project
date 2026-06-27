# CRM Backend API

Production-grade CRM backend built with **FastAPI + PostgreSQL + Redis**.

## Features

- ✅ **Authentication**: Register, Login, Logout
- ✅ **JWT Tokens**: Access Token (30 min) + Refresh Token (7 days)
- ✅ **Email OTP**: 6-digit OTP with 5-minute expiry via Redis
- ✅ **Real-time Email**: SMTP via aiosmtplib with Jinja2 HTML templates
- ✅ **Forgot/Reset Password**: Secure token-based password reset
- ✅ **RBAC**: Role-Based Access Control with granular permissions
- ✅ **PostgreSQL + SQLAlchemy + Alembic**: Full ORM with migrations
- ✅ **Redis**: OTP storage, token blacklisting, password reset tokens

## Architecture

```
app/
├── core/           # Config, database, security, Redis, dependencies
├── models/         # SQLAlchemy models (User, Role, Permission, etc.)
├── schemas/        # Pydantic request/response schemas
├── repositories/   # Data access layer
├── services/       # Business logic (auth, JWT, email, OTP, RBAC)
├── routers/        # API route handlers
├── middleware/      # JWT validation, RBAC decorators
├── utils/          # Helpers (OTP generator, password validator, etc.)
├── templates/      # HTML email templates
└── main.py         # FastAPI application entry point
```

## API Endpoints

### Authentication
| Method | Endpoint                    | Description                |
|--------|-----------------------------|----------------------------|
| POST   | `/api/auth/register`        | Register new user          |
| POST   | `/api/auth/login`           | Login + get tokens         |
| POST   | `/api/auth/refresh-token`   | Refresh access token       |
| POST   | `/api/auth/logout`          | Revoke refresh token       |
| GET    | `/api/auth/me`              | Get current user profile   |
| POST   | `/api/auth/send-otp`        | Send OTP to email          |
| POST   | `/api/auth/verify-otp`      | Verify email OTP           |
| POST   | `/api/auth/forgot-password` | Request password reset     |
| POST   | `/api/auth/reset-password`  | Reset password with token  |

### Users (RBAC Protected)
| Method | Endpoint            | Description       |
|--------|---------------------|-------------------|
| GET    | `/api/users`        | List all users    |
| GET    | `/api/users/{id}`   | Get user by ID    |
| PUT    | `/api/users/{id}`   | Update user       |
| DELETE | `/api/users/{id}`   | Delete user       |

### Roles (Admin Only)
| Method | Endpoint             | Description        |
|--------|----------------------|--------------------|
| GET    | `/api/roles`         | List all roles     |
| POST   | `/api/roles`         | Create role        |
| POST   | `/api/roles/assign`  | Assign role        |
| POST   | `/api/roles/remove`  | Remove role        |

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn app.main:app --reload --port 8000

# Open docs
# http://localhost:8000/docs
```

## Prerequisites

- Python 3.11+
- PostgreSQL
- Redis

## Docker Deployment

The CRM is designed to be fully containerized for production deployment. A multi-container `docker-compose.yml` is provided at the workspace root.

To launch the database, Redis cache, backend API, and static frontend concurrently:
```bash
docker-compose up --build -d
```

### Applying Database Migrations (Alembic)

In production, automatic schema generation (`create_all`) is disabled in favor of versioned Alembic migrations. Run the following command inside the backend container to apply migrations:

```bash
docker-compose exec backend alembic upgrade head
```

To create a new migration after editing your SQLAlchemy models:
```bash
docker-compose exec backend alembic revision --autogenerate -m "description_of_change"
```

## Security & Compliance Hardening

This backend has been audited and hardened for real-world production use:
1. **Granular RBAC**: All CRM endpoints (Customers, Leads, Inventory) are guarded by route-level permissions checks (e.g. `lead.read`, `inventory.create`).
2. **Strict Multi-Tenancy**: Data isolation is enforced at the database repository level using `company_id`. No cross-tenant data leakage is possible.
3. **Resilient Rate Limiting**: Enabled globally with SlowAPI. Auth endpoints are strictly rate-limited with safe fallback to in-memory limits in case Redis is temporarily unreachable.
4. **Centralized Audit Logging**: Mutating CRUD actions and auth state changes are logged asynchronously to the `audit_logs` table via `AuditService`, ensuring non-blocking operations and full compliance trails.
5. **Secure Headers**: Globals headers (XSS protection, Frame Options, Content Type Options) are injected automatically via custom middleware.

