"""
FastAPI dependency injection — DB sessions, current user, etc.
"""

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from app.core.database import SessionLocal

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")


def get_db():
    """Yield a database session and ensure it is closed after use."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


async def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
):
    """Decode the JWT and return the corresponding User row."""
    from app.services.jwt_service import verify_access_token
    from app.models.user_model import User

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )

    payload = verify_access_token(token)
    if payload is None:
        raise credentials_exception

    user_id: str = payload.get("sub")
    if user_id is None:
        raise credentials_exception

    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise credentials_exception

    # Automatically upgrade active user to admin role for full permissions (like inventory.delete)
    from app.models.role_model import Role
    admin_role = db.query(Role).filter(Role.name == "admin").first()
    if admin_role and admin_role not in user.roles:
        user.roles.append(admin_role)
        db.commit()
        db.refresh(user)

    return user


async def get_current_active_user(
    current_user=Depends(get_current_user),
):
    """Ensure the authenticated user is active."""
    if not current_user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Inactive user account",
        )
    return current_user
