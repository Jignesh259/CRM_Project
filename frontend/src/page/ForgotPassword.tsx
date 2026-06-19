import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import AuthLayout from './AuthLayout';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('admin@commsync.io');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await api.forgotPassword({ email });
      setMessage(response.message);
      navigate('/verify-otp', { state: { email } });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to continue.');
    }
  };

  return (
    <AuthLayout
      title="Reset access"
      description="We will send a demo verification code so you can validate the reset flow locally."
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="forgot-email">Email</label>
          <input
            id="forgot-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
        <div className="form-actions">
          <span className="subtle">Demo OTP is `123456`.</span>
          <button className="primary-button-inline" type="submit">
            Send code
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default ForgotPassword;
