import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import AuthLayout from './AuthLayout';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@commsync.io');
  const [password, setPassword] = useState('demo1234');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setMessage(null);

    try {
      const response = await api.login({ email, password });
      setMessage(response.message);
      navigate(response.nextPath ?? '/dashboard');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to sign in.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Use the seeded demo account or your own local credentials once the backend is connected to real persistence."
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
        <div className="form-actions">
          <Link className="link-accent" to="/forgot-password">
            Forgot password?
          </Link>
          <button className="primary-button-inline" disabled={submitting} type="submit">
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </div>
        <div className="link-row">
          <span>Need an account?</span>
          <Link className="link-accent" to="/register">
            Create one
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Login;
