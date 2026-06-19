import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../style/AppShell.css';

type AuthLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="auth-page">
      <div className="glass-card auth-card">
        <section className="auth-hero">
          <div className="brand-badge">CS</div>
          <h1>CommSync CRM that feels fast, focused, and enterprise-ready.</h1>
          <p>
            Manage leads, sales, inventory, finance, and customer activity from one
            connected workspace designed around the local design system in this repo.
          </p>
          <div className="hero-points">
            <span>Live KPI visibility across sales and operations</span>
            <span>Centralized records for customers, products, and invoices</span>
            <span>Clear workflows for teams moving from leads to payments</span>
          </div>
        </section>
        <section className="auth-form-card">
          <h2>{title}</h2>
          <p>{description}</p>
          {children}
          <div className="link-row" style={{ marginTop: 24 }}>
            <Link className="link-accent" to="/login">
              Back to login
            </Link>
            <Link className="link-accent" to="/dashboard">
              View dashboard
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AuthLayout;
