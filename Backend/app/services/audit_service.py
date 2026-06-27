from sqlalchemy.orm import Session
from app.repositories.audit_repository import AuditRepository
from typing import Dict, Any, Optional
from loguru import logger
import uuid

class AuditService:
    """Service to handle audit logging of user and system activities."""

    @staticmethod
    def log(
        db: Session,
        action: str,
        user_id: Optional[uuid.UUID] = None,
        resource: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
        ip_address: Optional[str] = None
    ) -> None:
        """
        Record a security/audit event.
        Guarantees that database failures in logging do not crash the primary operation.
        """
        try:
            repo = AuditRepository(db)
            repo.create_log(
                action=action,
                user_id=user_id,
                resource=resource,
                details=details,
                ip_address=ip_address
            )
            logger.info(f"Audit log recorded: action={action} user={user_id} resource={resource}")
        except Exception as e:
            logger.error(f"CRITICAL: Failed to write audit log: {e}")
