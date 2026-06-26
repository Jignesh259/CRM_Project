/**
 * ResetPassword.tsx
 *
 * This page is kept for backward compatibility.
 * The primary "Forgot Password" flow now lives entirely in ForgotPassword.tsx
 * (3-step: email → OTP → new password — all in one page, no shareable links).
 *
 * This page is only used if someone navigates here directly with a
 * reset_token in route state (e.g., from an older flow or deep link).
 * If no token is present, it redirects to /forgot-password.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { api } from '../../api/api';
import '../../style/Auth.css';

export const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const token: string = location.state?.token || '';

  useEffect(() => {
    // If no token in state, redirect to the forgot-password flow
    if (!token) {
      navigate('/forgot-password', { replace: true });
    }
  }, [token, navigate]);

  const getStrength = (pwd: string) => {
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

  const strength = getStrength(password);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await api.resetPassword({ token, new_password: password });
      setSuccess(true);
      setTimeout(() => navigate('/login', { state: { passwordReset: true } }), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to reset password');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-layout">
        <div className="auth-container">
          <div className="auth-card" style={{ textAlign: 'center', padding: '40px 32px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '72px', color: '#16a34a' }}>task_alt</span>
            <h2 className="auth-card-title" style={{ marginTop: '16px' }}>Password Reset!</h2>
            <p className="auth-subtitle">Your password has been successfully updated.<br />Redirecting to login...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-layout">
      <div className="auth-container">

        <div className="auth-header">
          <div className="auth-logo">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>key</span>
          </div>
          <h1 className="auth-title" style={{ fontSize: '32px' }}>Set New Password</h1>
          <p className="auth-subtitle">Please create a strong password for your account.</p>
        </div>

        <div className="auth-card">
          <form className="auth-form" onSubmit={handleReset}>

            {/* New password */}
            <div className="floating-input" style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="reset-password"
                placeholder=" "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: '48px' }}
              />
              <label htmlFor="reset-password">New Password</label>
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--on-surface-variant)', padding: '0', display: 'flex' }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            {/* Strength bar */}
            {password && strength && (
              <div style={{ marginTop: '-8px', marginBottom: '8px' }}>
                <div style={{ height: '4px', background: '#e5e7eb', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: strength.width, background: strength.color, borderRadius: '2px', transition: 'width 0.3s' }} />
                </div>
                <p style={{ fontSize: '12px', color: strength.color, marginTop: '4px', fontWeight: 600 }}>{strength.label} password</p>
              </div>
            )}

            {/* Confirm password */}
            <div className="floating-input" style={{ position: 'relative' }}>
              <input
                type={showConfirm ? 'text' : 'password'}
                id="reset-confirm-password"
                placeholder=" "
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ paddingRight: '48px', borderColor: confirmPassword && confirmPassword !== password ? '#dc2626' : undefined }}
              />
              <label htmlFor="reset-confirm-password">Confirm New Password</label>
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
              <p style={{ fontSize: '12px', marginTop: '-8px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '4px', color: confirmPassword === password ? '#16a34a' : '#dc2626' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
                  {confirmPassword === password ? 'check_circle' : 'cancel'}
                </span>
                {confirmPassword === password ? 'Passwords match' : 'Passwords do not match'}
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
                {loading ? 'Updating...' : 'Update Password'}
                {!loading && <span className="material-symbols-outlined">lock_reset</span>}
              </button>
            </div>
          </form>

          <div style={{ marginTop: '28px', textAlign: 'center', borderTop: '1px solid var(--outline-variant, #e5e7eb)', paddingTop: '20px' }}>
            <Link to="/login" className="auth-link large">Back to Login</Link>
          </div>
        </div>

      </div>
    </div>
  );
};
