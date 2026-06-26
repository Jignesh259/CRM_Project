import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { api } from '../../api/api';
import '../../style/Auth.css';

type Purpose = 'email_verification' | 'password_reset';

const OTP_EXPIRE_SECONDS = 300;   // 5 minutes (matches backend)
const RESEND_COOLDOWN = 60;       // seconds before user can resend again

export const VerifyOTP: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // OTP expiry countdown
  const [timeLeft, setTimeLeft] = useState(OTP_EXPIRE_SECONDS);

  // Resend cooldown
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const email: string = location.state?.email || '';
  const purpose: Purpose = location.state?.purpose || 'email_verification';

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ── Redirect if no email in state ────────────────────────
  useEffect(() => {
    if (!email) {
      navigate(purpose === 'password_reset' ? '/forgot-password' : '/register');
    }
  }, [email, navigate, purpose]);

  // ── OTP expiry countdown ─────────────────────────────────
  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timeLeft]);

  // ── Resend cooldown countdown ────────────────────────────
  useEffect(() => {
    if (resendCooldown <= 0) return;
    const id = setInterval(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [resendCooldown]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // ── Input handling ───────────────────────────────────────
  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;           // digits only
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(''));
      inputRefs.current[5]?.focus();
    }
  };

  // ── Submit OTP ───────────────────────────────────────────
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length < 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await api.verifyOtp(email, otpString, purpose);
      const data = response.data || response;

      if (purpose === 'email_verification') {
        setSuccessMsg('Email verified! Redirecting to login...');
        setTimeout(() => navigate('/login', { state: { verified: true } }), 2000);
      } else {
        // password_reset — backend returns reset_token
        navigate('/reset-password', { state: { token: data.reset_token } });
      }
    } catch (err: any) {
      setError(err.message || 'Invalid or expired OTP');
    } finally {
      setLoading(false);
    }
  };

  // ── Resend OTP ───────────────────────────────────────────
  const handleResend = useCallback(async () => {
    if (resendCooldown > 0 || resendLoading) return;
    setResendLoading(true);
    setError(null);

    try {
      await api.resendOtp(email, purpose);
      setTimeLeft(OTP_EXPIRE_SECONDS);       // reset expiry timer
      setResendCooldown(RESEND_COOLDOWN);    // start cooldown
      setOtp(['', '', '', '', '', '']);      // clear boxes
      inputRefs.current[0]?.focus();
      setSuccessMsg('A new OTP has been sent to your email.');
      setTimeout(() => setSuccessMsg(null), 4000);
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP');
    } finally {
      setResendLoading(false);
    }
  }, [email, purpose, resendCooldown, resendLoading]);

  // ── UI config by purpose ─────────────────────────────────
  const isEmailVerification = purpose === 'email_verification';
  const icon = isEmailVerification ? 'mark_email_read' : 'lock_reset';
  const title = isEmailVerification ? 'Verify Your Email' : 'Reset Password';
  const subtitle = isEmailVerification
    ? `We sent a 6-digit verification code to`
    : `We sent a 6-digit reset code to`;
  const buttonLabel = isEmailVerification ? 'Verify & Activate Account' : 'Verify & Continue';

  return (
    <div className="auth-layout">
      <div className="auth-container">

        <div className="auth-header">
          <div className="auth-logo">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{icon}</span>
          </div>
          <h1 className="auth-title" style={{ fontSize: '32px' }}>{title}</h1>
          <p className="auth-subtitle">
            {subtitle} <strong>{email}</strong>
          </p>
        </div>

        <div className="auth-card">

          {/* ── Expiry timer ── */}
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
          }}>
            {timeLeft > 0 ? (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: timeLeft < 60 ? '#fef2f2' : '#f0fdf4',
                color: timeLeft < 60 ? '#dc2626' : '#16a34a',
                border: `1px solid ${timeLeft < 60 ? '#fecaca' : '#bbf7d0'}`,
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: '600',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer</span>
                Code expires in {formatTime(timeLeft)}
              </span>
            ) : (
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#fef2f2',
                color: '#dc2626',
                border: '1px solid #fecaca',
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: '600',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>timer_off</span>
                Code has expired — please resend
              </span>
            )}
          </div>

          <form className="auth-form" onSubmit={handleVerify}>

            {/* ── OTP inputs ── */}
            <div className="otp-container" onPaste={handlePaste}>
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="otp-input"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                  style={{
                    borderColor: digit ? 'var(--primary)' : undefined,
                    background: digit ? 'var(--primary-container, #ede9fe)' : undefined,
                  }}
                />
              ))}
            </div>

            {error && (
              <div className="auth-error-msg" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span>
                {error}
              </div>
            )}

            {successMsg && (
              <div style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                color: '#16a34a',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '8px',
              }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                {successMsg}
              </div>
            )}

            <div style={{ paddingTop: '20px' }}>
              <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading || timeLeft === 0}
              >
                {loading ? 'Verifying...' : buttonLabel}
                {!loading && <span className="material-symbols-outlined">check_circle</span>}
              </button>
            </div>
          </form>

          {/* ── Resend section ── */}
          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', marginBottom: '8px' }}>
              Didn't receive the code?
            </p>
            <button
              type="button"
              className="auth-link large"
              style={{
                background: 'none',
                border: 'none',
                cursor: resendCooldown > 0 ? 'not-allowed' : 'pointer',
                padding: 0,
                opacity: resendCooldown > 0 ? 0.5 : 1,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
              }}
              onClick={handleResend}
              disabled={resendCooldown > 0 || resendLoading}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>refresh</span>
              {resendLoading
                ? 'Sending...'
                : resendCooldown > 0
                  ? `Resend in ${resendCooldown}s`
                  : 'Resend OTP'}
            </button>
          </div>

          {/* ── Back link ── */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link
              to={isEmailVerification ? '/register' : '/forgot-password'}
              className="auth-link"
              style={{ fontSize: '13px', color: 'var(--on-surface-variant)' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px', verticalAlign: 'middle', marginRight: '2px' }}>arrow_back</span>
              {isEmailVerification ? 'Back to Register' : 'Back to Forgot Password'}
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
