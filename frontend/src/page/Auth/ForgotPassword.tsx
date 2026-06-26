import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../api/api';
import '../../style/Auth.css';

// ── Step machine ─────────────────────────────────────────────
type Step = 'email' | 'otp' | 'password' | 'done';

const OTP_TTL = 300;          // 5 minutes
const RESEND_COOLDOWN = 60;   // seconds

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  // ── Shared state ─────────────────────────────────────────
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ── OTP state ─────────────────────────────────────────────
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(OTP_TTL);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMsg, setResendMsg] = useState<string | null>(null);

  // Internal reset token (never exposed in URL or link)
  const [resetToken, setResetToken] = useState('');

  // ── Password state ────────────────────────────────────────
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // ── Timers ────────────────────────────────────────────────
  useEffect(() => {
    if (step !== 'otp' || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [step, timeLeft]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const id = setInterval(() => setResendCooldown((c) => c - 1), 1000);
    return () => clearInterval(id);
  }, [resendCooldown]);

  const formatTime = (s: number) =>
    `${Math.floor(s / 60).toString().padStart(2, '0')}:${(s % 60).toString().padStart(2, '0')}`;

  // ── Step 1: Submit email ──────────────────────────────────
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.forgotPassword(email);
      setStep('otp');
      setTimeLeft(OTP_TTL);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  // ── OTP input handlers ────────────────────────────────────
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pasted.length === 6) {
      setOtp(pasted.split(''));
      inputRefs.current[5]?.focus();
    }
  };

  // ── Step 2: Verify OTP ────────────────────────────────────
  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpStr = otp.join('');
    if (otpStr.length < 6) { setError('Please enter all 6 digits'); return; }

    setLoading(true);
    setError(null);
    try {
      const response = await api.verifyOtp(email, otpStr, 'password_reset');
      const data = response.data || response;
      // Store reset token internally — never put in URL
      setResetToken(data.reset_token);
      setStep('password');
    } catch (err: any) {
      setError(err.message || 'Invalid or expired OTP');
    } finally {
      setLoading(false);
    }
  };

  // ── Resend OTP ─────────────────────────────────────────────
  const handleResend = useCallback(async () => {
    if (resendCooldown > 0 || resendLoading) return;
    setResendLoading(true);
    setError(null);
    try {
      await api.resendOtp(email, 'password_reset');
      setOtp(['', '', '', '', '', '']);
      setTimeLeft(OTP_TTL);
      setResendCooldown(RESEND_COOLDOWN);
      setResendMsg('A new OTP has been sent.');
      setTimeout(() => setResendMsg(null), 4000);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } catch (err: any) {
      setError(err.message || 'Failed to resend OTP');
    } finally {
      setResendLoading(false);
    }
  }, [email, resendCooldown, resendLoading]);

  // ── Step 3: Reset password ─────────────────────────────────
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await api.resetPassword({ token: resetToken, new_password: newPassword });
      setStep('done');
      setTimeout(() => navigate('/login', { state: { passwordReset: true } }), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  // ── Password strength indicator ────────────────────────────
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return null;
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    if (score <= 1) return { label: 'Weak', color: '#dc2626', width: '25%' };
    if (score === 2) return { label: 'Fair', color: '#f59e0b', width: '50%' };
    if (score === 3) return { label: 'Good', color: '#3b82f6', width: '75%' };
    return { label: 'Strong', color: '#16a34a', width: '100%' };
  };

  const strength = getPasswordStrength(newPassword);

  // ── Step indicators ───────────────────────────────────────
  const steps = [
    { key: 'email', label: 'Email', icon: 'mail' },
    { key: 'otp',   label: 'OTP',   icon: 'pin' },
    { key: 'password', label: 'Password', icon: 'key' },
  ];
  const currentStepIndex = steps.findIndex((s) => s.key === step);

  // ── Render ─────────────────────────────────────────────────
  return (
    <div className="auth-layout">
      <div className="auth-container">

        {/* ── Header ── */}
        <div className="auth-header">
          <div className="auth-logo">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>lock_reset</span>
          </div>
          <h1 className="auth-title" style={{ fontSize: '32px' }}>
            {step === 'done' ? 'Password Updated!' : 'Reset Password'}
          </h1>
          <p className="auth-subtitle">
            {step === 'email' && 'Enter your email and we\'ll send you a one-time code.'}
            {step === 'otp' && <>We sent a 6-digit code to <strong>{email}</strong></>}
            {step === 'password' && 'OTP verified! Set your new password below.'}
            {step === 'done' && 'Your password has been updated successfully.'}
          </p>
        </div>

        {/* ── Step progress bar (not shown on done) ── */}
        {step !== 'done' && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            marginBottom: '24px',
          }}>
            {steps.map((s, i) => {
              const isDone = i < currentStepIndex;
              const isCurrent = i === currentStepIndex;
              return (
                <React.Fragment key={s.key}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: isDone ? '#16a34a' : isCurrent ? 'var(--primary, #4f46e5)' : '#e5e7eb',
                      color: isDone || isCurrent ? '#fff' : '#9ca3af',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      boxShadow: isCurrent ? '0 0 0 4px rgba(79,70,229,0.15)' : 'none',
                    }}>
                      {isDone
                        ? <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>check</span>
                        : <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{s.icon}</span>
                      }
                    </div>
                    <span style={{ fontSize: '11px', color: isCurrent ? 'var(--primary, #4f46e5)' : '#9ca3af', fontWeight: isCurrent ? 600 : 400 }}>
                      {s.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div style={{
                      flex: 1,
                      height: '2px',
                      background: i < currentStepIndex ? '#16a34a' : '#e5e7eb',
                      margin: '0 8px',
                      marginBottom: '20px',
                      transition: 'background 0.3s ease',
                    }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        )}

        <div className="auth-card">

          {/* ══ STEP 1: EMAIL ══════════════════════════════ */}
          {step === 'email' && (
            <form className="auth-form" onSubmit={handleEmailSubmit}>
              <div className="floating-input">
                <input
                  type="email"
                  id="forgot-email"
                  placeholder=" "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="forgot-email">Work Email</label>
              </div>

              {error && <div className="auth-error-msg"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span> {error}</div>}

              <div style={{ paddingTop: '16px' }}>
                <button type="submit" className="auth-submit-btn" disabled={loading}>
                  {loading ? 'Sending OTP...' : 'Send OTP'}
                  {!loading && <span className="material-symbols-outlined">send</span>}
                </button>
              </div>
            </form>
          )}

          {/* ══ STEP 2: OTP ════════════════════════════════ */}
          {step === 'otp' && (
            <form className="auth-form" onSubmit={handleOtpSubmit}>

              {/* Timer */}
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: timeLeft < 60 ? '#fef2f2' : '#f0fdf4',
                  color: timeLeft < 60 ? '#dc2626' : '#16a34a',
                  border: `1px solid ${timeLeft < 60 ? '#fecaca' : '#bbf7d0'}`,
                  borderRadius: '20px', padding: '5px 14px',
                  fontSize: '13px', fontWeight: 600,
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>timer</span>
                  {timeLeft > 0 ? `Expires in ${formatTime(timeLeft)}` : 'Code expired — resend below'}
                </span>
              </div>

              {/* OTP boxes */}
              <div className="otp-container" onPaste={handleOtpPaste}>
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    ref={(el) => { inputRefs.current[i] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="otp-input"
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    autoFocus={i === 0}
                    style={{
                      borderColor: digit ? 'var(--primary, #4f46e5)' : undefined,
                      background: digit ? 'rgba(79,70,229,0.07)' : undefined,
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

              {resendMsg && (
                <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>check_circle</span>
                  {resendMsg}
                </div>
              )}

              <div style={{ paddingTop: '16px' }}>
                <button type="submit" className="auth-submit-btn" disabled={loading || timeLeft === 0}>
                  {loading ? 'Verifying...' : 'Verify OTP'}
                  {!loading && <span className="material-symbols-outlined">check_circle</span>}
                </button>
              </div>

              {/* Resend */}
              <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', marginBottom: '6px' }}>
                  Didn't receive the code?
                </p>
                <button
                  type="button"
                  className="auth-link large"
                  style={{ background: 'none', border: 'none', cursor: resendCooldown > 0 ? 'not-allowed' : 'pointer', padding: 0, opacity: resendCooldown > 0 ? 0.5 : 1, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || resendLoading}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>refresh</span>
                  {resendLoading ? 'Sending...' : resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend OTP'}
                </button>
              </div>

              {/* Back */}
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <button
                  type="button"
                  className="auth-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', color: 'var(--on-surface-variant)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                  onClick={() => { setStep('email'); setError(null); setOtp(['','','','','','']); }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_back</span>
                  Change email
                </button>
              </div>
            </form>
          )}

          {/* ══ STEP 3: NEW PASSWORD ════════════════════════ */}
          {step === 'password' && (
            <form className="auth-form" onSubmit={handlePasswordSubmit}>

              {/* Success banner */}
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>verified_user</span>
                OTP verified successfully! Set your new password.
              </div>

              {/* New Password */}
              <div className="floating-input" style={{ position: 'relative' }}>
                <input
                  type={showNew ? 'text' : 'password'}
                  id="new-password"
                  placeholder=" "
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  style={{ paddingRight: '48px' }}
                />
                <label htmlFor="new-password">New Password</label>
                <button
                  type="button"
                  onClick={() => setShowNew((v) => !v)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--on-surface-variant)', padding: '0', display: 'flex' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    {showNew ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>

              {/* Strength bar */}
              {newPassword && strength && (
                <div style={{ marginTop: '-8px', marginBottom: '8px' }}>
                  <div style={{ height: '4px', background: '#e5e7eb', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: strength.width, background: strength.color, borderRadius: '2px', transition: 'width 0.3s, background 0.3s' }} />
                  </div>
                  <p style={{ fontSize: '12px', color: strength.color, marginTop: '4px', fontWeight: 600 }}>
                    {strength.label} password
                  </p>
                </div>
              )}

              {/* Confirm Password */}
              <div className="floating-input" style={{ position: 'relative' }}>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  id="confirm-password"
                  placeholder=" "
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{
                    paddingRight: '48px',
                    borderColor: confirmPassword && confirmPassword !== newPassword ? '#dc2626' : undefined,
                  }}
                />
                <label htmlFor="confirm-password">Confirm New Password</label>
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--on-surface-variant)', padding: '0', display: 'flex' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                    {showConfirm ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>

              {/* Match indicator */}
              {confirmPassword && (
                <p style={{ fontSize: '12px', marginTop: '-8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px', color: confirmPassword === newPassword ? '#16a34a' : '#dc2626' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                    {confirmPassword === newPassword ? 'check_circle' : 'cancel'}
                  </span>
                  {confirmPassword === newPassword ? 'Passwords match' : 'Passwords do not match'}
                </p>
              )}

              {error && (
                <div className="auth-error-msg" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>error</span>
                  {error}
                </div>
              )}

              <div style={{ paddingTop: '8px' }}>
                <button type="submit" className="auth-submit-btn" disabled={loading}>
                  {loading ? 'Updating Password...' : 'Update Password'}
                  {!loading && <span className="material-symbols-outlined">lock_reset</span>}
                </button>
              </div>
            </form>
          )}

          {/* ══ STEP 4: DONE ═══════════════════════════════ */}
          {step === 'done' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '72px', color: '#16a34a' }}>task_alt</span>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '16px', color: 'var(--on-surface)' }}>
                Password Updated!
              </h2>
              <p style={{ color: 'var(--on-surface-variant)', marginTop: '8px', fontSize: '15px' }}>
                Your password has been successfully changed.<br />Redirecting to login...
              </p>
              <div style={{ marginTop: '24px' }}>
                <Link to="/login" className="auth-submit-btn" style={{ display: 'inline-flex', textDecoration: 'none', justifyContent: 'center' }}>
                  Go to Login
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          )}

          {/* Back to login link (always visible except done) */}
          {step !== 'done' && (
            <div style={{ marginTop: '28px', textAlign: 'center', borderTop: '1px solid var(--outline-variant, #e5e7eb)', paddingTop: '20px' }}>
              <Link to="/login" className="auth-link large" style={{ fontSize: '14px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px', verticalAlign: 'middle', marginRight: '4px' }}>arrow_back</span>
                Back to Login
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
