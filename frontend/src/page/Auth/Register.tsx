import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../../api/api';
import '../../style/Auth.css';

export const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.register({
        email,
        password,
        full_name: fullName,
        company_name: companyName,
      });

      // ✅ Navigate to OTP verification page, passing the email in route state
      navigate('/verify-otp', {
        state: {
          email,
          purpose: 'email_verification',
        },
      });
    } catch (err: any) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-container" style={{ maxWidth: '600px' }}>

        <div className="auth-header">
          <h1 className="auth-title" style={{ fontSize: '32px' }}>Create an account</h1>
          <p className="auth-subtitle">Start optimizing your business operations today.</p>
        </div>

        <div className="auth-card">
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="auth-grid-2">
              <div className="floating-input">
                <input
                  type="text"
                  id="fullName"
                  placeholder=" "
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <label htmlFor="fullName">Full Name</label>
              </div>

              <div className="floating-input">
                <input
                  type="text"
                  id="companyName"
                  placeholder=" "
                  required
                  minLength={2}
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <label htmlFor="companyName">Company Name</label>
              </div>
            </div>

            <div className="floating-input">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Work Email</label>
            </div>

            <div className="floating-input">
              <input
                type="password"
                id="password"
                placeholder=" "
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password (min 8 characters)</label>
            </div>

            {error && <div className="auth-error-msg">{error}</div>}

            {/* Checkbox + legal links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '8px' }}>
              <label className="auth-checkbox-label" style={{ alignItems: 'flex-start' }}>
                <input
                  type="checkbox"
                  id="agree-terms"
                  required
                  style={{ marginTop: '2px', flexShrink: 0 }}
                />
                <span style={{ fontSize: '14px', color: 'var(--on-surface-variant)', lineHeight: '1.5' }}>
                  I have read and agree to the
                </span>
              </label>

              <div style={{ paddingLeft: '24px', display: 'flex', gap: '6px', flexWrap: 'wrap', fontSize: '14px' }}>
                <Link
                  to="/terms"
                  onClick={(e) => { e.preventDefault(); window.open('/terms', '_blank', 'noopener,noreferrer'); }}
                  className="auth-link large"
                  style={{ textDecoration: 'underline', fontWeight: 600 }}
                >
                  Terms of Service
                </Link>
                <span style={{ color: 'var(--on-surface-variant)' }}>and</span>
                <Link
                  to="/privacy-policy"
                  onClick={(e) => { e.preventDefault(); window.open('/privacy-policy', '_blank', 'noopener,noreferrer'); }}
                  className="auth-link large"
                  style={{ textDecoration: 'underline', fontWeight: 600 }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            <div style={{ paddingTop: '16px' }}>
              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? 'Creating account...' : 'Create Account'}
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </div>
          </form>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
              Already have an account? <Link to="/login" className="auth-link large">Log in here</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
