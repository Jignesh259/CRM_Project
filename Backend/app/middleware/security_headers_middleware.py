from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request
from starlette.responses import Response

class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """
    Middleware that adds security headers to all responses to safeguard
    against Clickjacking, XSS, MIME-sniffing, and other web threats.
    """
    async def dispatch(self, request: Request, call_next) -> Response:
        response: Response = await call_next(request)
        
        # Clickjacking Protection
        response.headers["X-Frame-Options"] = "DENY"
        
        # MIME Type Sniffing Protection
        response.headers["X-Content-Type-Options"] = "nosniff"
        
        # XSS Protection
        response.headers["X-XSS-Protection"] = "1; mode=block"
        
        # HTTP Strict Transport Security (HSTS)
        response.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
        
        # Referrer Policy
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        
        # Content Security Policy (CSP)
        # We relax the policy slightly for FastAPI documentation routes to load Swagger UI assets.
        if request.url.path in ["/docs", "/redoc", "/openapi.json"]:
            response.headers["Content-Security-Policy"] = (
                "default-src 'self' https://cdn.jsdelivr.net; "
                "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; "
                "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
                "img-src 'self' data: https://fastapi.tiangolo.com; "
                "frame-ancestors 'none';"
            )
        else:
            response.headers["Content-Security-Policy"] = (
                "default-src 'self'; "
                "frame-ancestors 'none'; "
                "object-src 'none';"
            )
            
        return response
