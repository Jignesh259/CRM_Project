import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../components/AuthContext';
import '../../style/Auth.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Use the global login method which fetches profile information and updates auth state
      await login({ email, password });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-layout">
      <div className="auth-container">

        {/* Brand Header */}
        <div className="auth-header">
          <div className="auth-logo">
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>sync</span>
          </div>
          <h1 className="auth-title">CommSync</h1>
          <p className="auth-subtitle">Enterprise Data Intelligence</p>
        </div>

        {/* Login Card */}
        <div className="auth-card">
          <h2 className="auth-card-title">Sign In</h2>

          <form className="auth-form" onSubmit={handleLogin}>
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
              <label htmlFor="password">Password</label>
            </div>

            {error && <div className="auth-error-msg">{error}</div>}

            <div className="auth-row-between">
              <label className="auth-checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
            </div>

            <div style={{ paddingTop: '16px' }}>
              <button type="submit" className="auth-submit-btn" disabled={loading}>
                {loading ? 'Signing in...' : 'Sign In'}
                {!loading && <span className="material-symbols-outlined">arrow_forward</span>}
              </button>
            </div>
          </form>

          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)' }}>
              Don't have an account? <Link to="/register" className="auth-link large">Register here</Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};