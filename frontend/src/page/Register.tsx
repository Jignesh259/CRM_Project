import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../api/api';
import AuthLayout from './AuthLayout';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const updateField = (field: keyof typeof form, value: string) =>
    setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    setMessage(null);

    try {
      const response = await api.register(form);
      setMessage(response.message);
      navigate(response.nextPath ?? '/verify-otp');
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to register.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthLayout
      title="Create your workspace"
      description="Spin up a local CRM tenant with the default backend flow and start exploring the connected modules."
    >
      <form className="form-grid two-col" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Full name</label>
          <input id="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            value={form.company}
            onChange={(event) => updateField('company', event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="register-email">Work email</label>
          <input
            id="register-email"
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            value={form.password}
            onChange={(event) => updateField('password', event.target.value)}
          />
        </div>
        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
        <div className="form-actions" style={{ gridColumn: '1 / -1' }}>
          <Link className="link-accent" to="/login">
            Already have an account?
          </Link>
          <button className="primary-button-inline" disabled={submitting} type="submit">
            {submitting ? 'Creating...' : 'Create account'}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default Register;
