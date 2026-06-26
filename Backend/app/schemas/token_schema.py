"""
Token request / response schemas.
"""

from pydantic import BaseModel
from typing import Optional


class TokenResponse(BaseModel):
    access_token: str
    refresh_token: str
    token_type: str = "bearer"


class RefreshTokenRequest(BaseModel):
    refresh_token: str


class TokenPayload(BaseModel):
    sub: str
    exp: int
    type: str  # "access" or "refresh"
    roles: Optional[list[str]] = []
