import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { api } from '../../../shared/api/client';
import AuthLayout from '../../../shared/layouts/AuthLayout';

function VerifyOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = useMemo(
    () => ((location.state as { email?: string } | null)?.email ?? 'admin@commsync.io'),
    [location.state],
  );
  const [otp, setOtp] = useState(['1', '2', '3', '4', '5', '6']);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    setOtp((current) => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await api.verifyOtp({ email, otp: otp.join('') });
      setMessage(response.message);
      navigate(response.nextPath ?? '/reset-password', { state: { email } });
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'OTP verification failed.');
    }
  };

  return (
    <AuthLayout
      title="Verify your code"
      description={`Enter the 6-digit code sent to ${email}. For the local demo flow, use 123456.`}
    >
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="otp-grid">
          {otp.map((digit, index) => (
            <input
              key={index}
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => handleChange(index, event.target.value)}
            />
          ))}
        </div>
        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
        <div className="form-actions">
          <span className="subtle">Need a new code? Return to the previous step.</span>
          <button className="primary-button-inline" type="submit">
            Verify code
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default VerifyOTP;
