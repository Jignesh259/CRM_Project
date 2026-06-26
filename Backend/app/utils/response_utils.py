"""
Standardised API response helpers.
"""

from fastapi.responses import JSONResponse
from typing import Any, Optional


def success_response(
    data: Any = None,
    message: str = "Success",
    status_code: int = 200,
) -> JSONResponse:
    """Return a uniform success envelope."""
    return JSONResponse(
        status_code=status_code,
        content={
            "success": True,
            "message": message,
            "data": data,
            "errors": None,
        },
    )


def error_response(
    message: str = "An error occurred",
    errors: Optional[list[str]] = None,
    status_code: int = 400,
) -> JSONResponse:
    """Return a uniform error envelope."""
    return JSONResponse(
        status_code=status_code,
        content={
            "success": False,
            "message": message,
            "data": None,
            "errors": errors,
        },
    )
