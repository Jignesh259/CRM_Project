"""
JWT utility helpers.
"""

from app.services.jwt_service import decode_token
from typing import Optional


def extract_user_id(token: str) -> Optional[str]:
    """Extract the user ID (sub claim) from a JWT."""
    payload = decode_token(token)
    return payload.get("sub") if payload else None


def extract_roles(token: str) -> list[str]:
    """Extract roles from a JWT."""
    payload = decode_token(token)
    return payload.get("roles", []) if payload else []
