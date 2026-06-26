# Models package — import all models so Alembic can discover them.
from app.models.user_model import User  # noqa: F401
from app.models.role_model import Role  # noqa: F401
from app.models.permission_model import Permission  # noqa: F401
from app.models.refresh_token_model import RefreshToken  # noqa: F401
from app.models.otp_model import OTP  # noqa: F401
from app.models.audit_log_model import AuditLog  # noqa: F401
from app.models.lead_model import Lead, LeadActivity  # noqa: F401
from app.models.customer_model import Customer  # noqa: F401
from app.models.inventory_model import Product, ProductCategory, ProductBrand  # noqa: F401
