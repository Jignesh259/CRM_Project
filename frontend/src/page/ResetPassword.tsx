import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import AuthLayout from './AuthLayout';

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = useMemo(
    () => ((location.state as { email?: string } | null)?.email ?? 'admin@commsync.io'),
    [location.state],
  );
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await api.resetPassword({ email, password, confirmPassword });
      setMessage(response.message);
      navigate(response.nextPath ?? '/login');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Could not reset password.');
    }
  };

  return (
    <AuthLayout
      title="Choose a new password"
      description="Use this final step to complete the local reset workflow and return to sign-in."
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="reset-password">New password</label>
          <input
            id="reset-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="confirm-password">Confirm password</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
        <div className="form-actions">
          <span className="subtle">Minimum 8 characters recommended.</span>
          <button className="primary-button-inline" type="submit">
            Save password
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ResetPassword;
