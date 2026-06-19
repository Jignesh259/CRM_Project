from __future__ import annotations

import hashlib
import hmac
import secrets


def hash_password(password: str) -> str:
    salt = "commsync-demo-salt"
    return hashlib.sha256(f"{salt}:{password}".encode("utf-8")).hexdigest()


def verify_password(password: str, password_hash: str) -> bool:
    computed_hash = hash_password(password)
    return hmac.compare_digest(computed_hash, password_hash)


def create_demo_token(subject: str) -> str:
    return f"{subject}.{secrets.token_hex(12)}"
