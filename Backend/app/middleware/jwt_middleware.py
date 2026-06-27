"""
JWT middleware — validates Bearer tokens on incoming requests
and attaches the user to request state.
"""

from fastapi import Request, HTTPException, status
from fastapi.responses import JSONResponse
from starlette.middleware.base import BaseHTTPMiddleware
from app.services.jwt_service import verify_access_token
from app.core.database import SessionLocal
from app.models.user_model import User
from loguru import logger

# Paths that do NOT require authentication
PUBLIC_PATHS = {
    "/",
    "/docs",
    "/redoc",
    "/openapi.json",
    "/api/health",
    "/api/auth/register",
    "/api/auth/login",
    "/api/auth/refresh-token",
    "/api/auth/send-otp",
    "/api/auth/verify-otp",
    "/api/auth/forgot-password",
    "/api/auth/reset-password",
}


class JWTMiddleware(BaseHTTPMiddleware):
    """Extract and validate JWT from Authorization header."""

    async def dispatch(self, request: Request, call_next):
        # Skip public endpoints
        if request.url.path in PUBLIC_PATHS:
            return await call_next(request)

        # Skip preflight (CORS)
        if request.method == "OPTIONS":
            return await call_next(request)

        try:
            # Extract token
            auth_header = request.headers.get("Authorization")
            if not auth_header or not auth_header.startswith("Bearer "):
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Missing or invalid Authorization header",
                    headers={"WWW-Authenticate": "Bearer"},
                )

            token = auth_header.split(" ", 1)[1]
            payload = verify_access_token(token)
            if payload is None:
                raise HTTPException(
                    status_code=status.HTTP_401_UNAUTHORIZED,
                    detail="Invalid or expired access token",
                    headers={"WWW-Authenticate": "Bearer"},
                )

            # Attach user info to request state
            request.state.user_id = payload.get("sub")
            request.state.roles = payload.get("roles", [])

            response = await call_next(request)
            return response
        except HTTPException as exc:
            return JSONResponse(
                status_code=exc.status_code,
                content={"detail": exc.detail},
                headers=exc.headers,
            )

