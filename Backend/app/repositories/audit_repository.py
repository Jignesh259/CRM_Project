from sqlalchemy.orm import Session
from app.models.audit_log_model import AuditLog
from typing import Dict, Any, Optional
import uuid

class AuditRepository:
    """Repository class for CRUD operations on AuditLog model."""
    
    def __init__(self, db: Session):
        self.db = db

    def create_log(
        self,
        action: str,
        user_id: Optional[uuid.UUID] = None,
        resource: Optional[str] = None,
        details: Optional[Dict[str, Any]] = None,
        ip_address: Optional[str] = None
    ) -> AuditLog:
        """Create a new audit log record in the database."""
        db_log = AuditLog(
            user_id=user_id,
            action=action,
            resource=resource,
            details=details,
            ip_address=ip_address
        )
        self.db.add(db_log)
        self.db.commit()
        self.db.refresh(db_log)
        return db_log
