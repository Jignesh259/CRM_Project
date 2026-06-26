"""
Password hashing and verification using raw bcrypt directly.
Avoids passlib compatibility issues with modern bcrypt library versions.
"""

import bcrypt


def hash_password(password: str) -> str:
    """Hash a plain-text password."""
    # Ensure password fits within bcrypt limit if extremely long
    # (though standard frontend inputs are shorter)
    pwd_bytes = password.encode('utf-8')
    # Generate salt and hash the password
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(pwd_bytes, salt)
    return hashed.decode('utf-8')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain-text password against a hash."""
    try:
        pwd_bytes = plain_password.encode('utf-8')
        hashed_bytes = hashed_password.encode('utf-8')
        return bcrypt.checkpw(pwd_bytes, hashed_bytes)
    except Exception:
        return False

