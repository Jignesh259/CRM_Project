"""Quick smoke test for core modules."""
import sys
sys.path.insert(0, ".")

# Test 1: Security
from app.core.security import hash_password, verify_password
h = hash_password("Test@1234")
assert verify_password("Test@1234", h), "Password verification failed"
print("[PASS] Security: hash + verify OK")

# Test 2: JWT
from app.services.jwt_service import create_access_token, create_refresh_token, verify_access_token, verify_refresh_token
at = create_access_token({"sub": "test-id", "roles": ["admin"]})
payload = verify_access_token(at)
assert payload is not None
assert payload["sub"] == "test-id"
print("[PASS] JWT Access Token OK (sub=%s)" % payload["sub"])

rt, exp = create_refresh_token({"sub": "test-id", "roles": ["admin"]})
rt_payload = verify_refresh_token(rt)
assert rt_payload is not None
print("[PASS] JWT Refresh Token OK (expires=%s)" % exp)

# Test 3: OTP Generator
from app.utils.otp_generator import generate_otp
otp = generate_otp()
assert len(otp) == 6 and otp.isdigit()
print("[PASS] OTP Generator OK (sample=%s)" % otp)

# Test 4: Password Validator
from app.utils.password_utils import validate_password_strength
try:
    validate_password_strength("weak")
    print("[FAIL] Password validator should have rejected 'weak'")
except:
    print("[PASS] Password Validator OK (rejected weak password)")

# Test 5: Config
from app.core.config import get_settings
s = get_settings()
assert s.APP_NAME == "CRM API"
print("[PASS] Config OK (%s v%s)" % (s.APP_NAME, s.APP_VERSION))

# Test 6: Models import
from app.models import User, Role, Permission, RefreshToken, OTP, AuditLog
print("[PASS] All models import OK")

# Test 7: Schemas import
from app.schemas.auth_schema import RegisterRequest, LoginRequest
from app.schemas.token_schema import TokenResponse, RefreshTokenRequest
from app.schemas.otp_schema import SendOTPRequest, VerifyOTPRequest
from app.schemas.user_schema import UserResponse, UserUpdate
from app.schemas.password_schema import ForgotPasswordRequest, ResetPasswordRequest
print("[PASS] All schemas import OK")

print("\n=== All smoke tests passed! ===")
