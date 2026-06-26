"""
OTP generator — cryptographically random 6-digit codes.
"""

import secrets


def generate_otp(length: int = 6) -> str:
    """Generate a random numeric OTP of the given length."""
    # Use secrets for cryptographic randomness
    return "".join(str(secrets.randbelow(10)) for _ in range(length))
