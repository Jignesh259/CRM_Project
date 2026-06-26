import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Auth.css';
import '../../style/Legal.css';

const LAST_UPDATED = 'June 25, 2026';
const COMPANY_NAME = 'Customer CRM';
const CONTACT_EMAIL = 'privacy@customercrm.com';

export const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'intro',       title: '1. Introduction' },
    { id: 'collect',     title: '2. Data We Collect' },
    { id: 'how-use',     title: '3. How We Use Your Data' },
    { id: 'storage',     title: '4. Data Storage & Security' },
    { id: 'sharing',     title: '5. Data Sharing' },
    { id: 'retention',   title: '6. Data Retention' },
    { id: 'rights',      title: '7. Your Rights' },
    { id: 'cookies',     title: '8. Cookies & Tokens' },
    { id: 'children',    title: '9. Children\'s Privacy' },
    { id: 'contact',     title: '10. Contact Us' },
  ];

  return (
    <div className="legal-layout">

      {/* ── Top nav ── */}
      <header className="legal-header">
        <div className="legal-header-inner">
          <Link to="/register" className="legal-back-link">
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Register
          </Link>
          <div className="legal-brand">
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '22px' }}>contacts</span>
            <span>{COMPANY_NAME}</span>
          </div>
        </div>
      </header>

      <div className="legal-body">

        {/* ── Sidebar TOC ── */}
        <aside className="legal-sidebar">
          <p className="legal-toc-title">Table of Contents</p>
          <nav className="legal-toc">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`legal-toc-link ${activeSection === s.id ? 'active' : ''}`}
                onClick={() => setActiveSection(s.id)}
              >
                {s.title}
              </a>
            ))}
          </nav>
          <div className="legal-sidebar-card">
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>info</span>
            <p>Last updated<br /><strong>{LAST_UPDATED}</strong></p>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="legal-main">
          <div className="legal-hero">
            <div className="legal-hero-icon" style={{ background: 'linear-gradient(135deg, #0d9488, #0891b2)' }}>
              <span className="material-symbols-outlined">privacy_tip</span>
            </div>
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-subtitle">
              We take your privacy seriously. Learn how {COMPANY_NAME} collects, uses, and protects your data.
            </p>
            <div className="legal-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
              Last updated: {LAST_UPDATED}
            </div>
          </div>

          {/* ── Quick summary cards ── */}
          <div className="legal-summary-grid">
            <div className="legal-summary-card">
              <span className="material-symbols-outlined" style={{ color: '#16a34a' }}>lock</span>
              <strong>Your data is encrypted</strong>
              <p>All data in transit uses TLS. Passwords are hashed using bcrypt.</p>
            </div>
            <div className="legal-summary-card">
              <span className="material-symbols-outlined" style={{ color: '#2563eb' }}>sell</span>
              <strong>We never sell data</strong>
              <p>Your CRM data is never sold to third parties for any purpose.</p>
            </div>
            <div className="legal-summary-card">
              <span className="material-symbols-outlined" style={{ color: '#9333ea' }}>admin_panel_settings</span>
              <strong>You stay in control</strong>
              <p>Export or delete your data at any time. Full data portability.</p>
            </div>
          </div>

          <div className="legal-content">

            <section id="intro" className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                <strong>{COMPANY_NAME}</strong> ("we," "our," or "us") is committed to protecting your
                personal information. This Privacy Policy describes how we collect, use, disclose, and
                safeguard your data when you use our CRM platform.
              </p>
              <p>
                By registering for and using {COMPANY_NAME}, you consent to the data practices described
                in this policy. This policy applies to all users including administrators, managers, and
                end users within your organization.
              </p>
            </section>

            <section id="collect" className="legal-section">
              <h2>2. Data We Collect</h2>

              <h3>Account Information</h3>
              <ul className="legal-plain-list">
                <li>Full name and email address</li>
                <li>Phone number (optional)</li>
                <li>Company name and domain</li>
                <li>Hashed password (we never store plain-text passwords)</li>
                <li>Role and permission assignments</li>
              </ul>

              <h3>CRM Business Data</h3>
              <ul className="legal-plain-list">
                <li><strong>Leads</strong> — name, email, phone, source, status</li>
                <li><strong>Contacts</strong> — contact details associated with accounts</li>
                <li><strong>Accounts & Companies</strong> — company name, domain, phone, email</li>
                <li><strong>Deals</strong> — deal name, amount, stage, close date</li>
                <li><strong>Quotes & Invoices</strong> — product lists, pricing, totals</li>
                <li><strong>Payments</strong> — payment method, amount, date</li>
                <li><strong>Tasks, Activities & Notes</strong> — interaction logs</li>
              </ul>

              <h3>Automatically Collected Data</h3>
              <ul className="legal-plain-list">
                <li>IP address and browser/device type</li>
                <li>Login timestamps and session activity</li>
                <li>Audit logs (actions performed within the system)</li>
                <li>API request logs (for security and debugging)</li>
              </ul>

              <h3>OTP & Authentication Data</h3>
              <ul className="legal-plain-list">
                <li>One-time verification codes (stored temporarily, expire in 5 minutes)</li>
                <li>JWT access tokens (expire in 30 minutes)</li>
                <li>Refresh tokens (expire in 7 days, stored securely in database)</li>
              </ul>
            </section>

            <section id="how-use" className="legal-section">
              <h2>3. How We Use Your Data</h2>
              <ul className="legal-list">
                <li>
                  <span className="material-symbols-outlined">person_check</span>
                  <div><strong>Authentication & Account Security</strong> — Verify your identity via OTP, manage sessions with JWT tokens.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">manage_accounts</span>
                  <div><strong>Service Delivery</strong> — Provide CRM features including lead management, deal tracking, and reporting.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">mail</span>
                  <div><strong>Communications</strong> — Send OTP verification codes, password reset emails, and account notifications.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">analytics</span>
                  <div><strong>Analytics & Improvement</strong> — Analyze usage patterns (anonymized) to improve the platform.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">security</span>
                  <div><strong>Security & Fraud Prevention</strong> — Monitor for suspicious activity, rate-limit API calls, maintain audit logs.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">gavel</span>
                  <div><strong>Legal Compliance</strong> — Meet regulatory requirements and respond to lawful requests.</div>
                </li>
              </ul>
            </section>

            <section id="storage" className="legal-section">
              <h2>4. Data Storage & Security</h2>
              <p>We implement industry-standard security measures:</p>

              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Data Type</th>
                      <th>Storage</th>
                      <th>Security Measure</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>User accounts & CRM data</td>
                      <td>PostgreSQL database</td>
                      <td>Encrypted at rest, access-controlled</td>
                    </tr>
                    <tr>
                      <td>OTP codes</td>
                      <td>Redis (primary)</td>
                      <td>Auto-expire in 5 minutes</td>
                    </tr>
                    <tr>
                      <td>Passwords</td>
                      <td>PostgreSQL</td>
                      <td>bcrypt hashed (never plain-text)</td>
                    </tr>
                    <tr>
                      <td>Session tokens</td>
                      <td>Redis + PostgreSQL</td>
                      <td>JWT signed, short-lived (30 min)</td>
                    </tr>
                    <tr>
                      <td>Audit logs</td>
                      <td>PostgreSQL</td>
                      <td>Append-only, tamper-resistant</td>
                    </tr>
                    <tr>
                      <td>Data in transit</td>
                      <td>—</td>
                      <td>TLS 1.2+ encryption</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="legal-highlight info">
                <span className="material-symbols-outlined">verified_user</span>
                <p>API access is protected by JWT authentication. Role-Based Access Control (RBAC) ensures
                users can only access data appropriate to their role (Admin, Manager, User).</p>
              </div>
            </section>

            <section id="sharing" className="legal-section">
              <h2>5. Data Sharing</h2>
              <p>We do <strong>not</strong> sell, rent, or trade your personal data or CRM data to any third party.</p>
              <p>We may share data only in these limited circumstances:</p>
              <ul className="legal-plain-list">
                <li><strong>Service Providers:</strong> SMTP email providers (to send OTP/notification emails) — bound by strict data processing agreements</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or government regulation</li>
                <li><strong>Business Transfer:</strong> In the event of a merger or acquisition, your data may be transferred with advance notice</li>
                <li><strong>With Your Consent:</strong> Any other sharing only with your explicit written consent</li>
              </ul>
            </section>

            <section id="retention" className="legal-section">
              <h2>6. Data Retention</h2>
              <ul className="legal-plain-list">
                <li><strong>Active accounts:</strong> Data retained for as long as your account is active</li>
                <li><strong>OTP codes:</strong> Automatically deleted after 5 minutes (Redis TTL)</li>
                <li><strong>Refresh tokens:</strong> Expire after 7 days or upon logout</li>
                <li><strong>Password reset tokens:</strong> Expire after 15 minutes</li>
                <li><strong>Audit logs:</strong> Retained for 2 years for compliance</li>
                <li><strong>After account deletion:</strong> 30-day window for data export, then permanent deletion</li>
              </ul>
            </section>

            <section id="rights" className="legal-section">
              <h2>7. Your Rights</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul className="legal-list">
                <li>
                  <span className="material-symbols-outlined">visibility</span>
                  <div><strong>Right to Access</strong> — Request a copy of all personal data we hold about you.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">edit</span>
                  <div><strong>Right to Rectification</strong> — Correct inaccurate or incomplete data via your account settings.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">delete</span>
                  <div><strong>Right to Erasure</strong> — Request deletion of your account and all associated data.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">download</span>
                  <div><strong>Right to Portability</strong> — Export your CRM data in standard formats (CSV/JSON).</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">block</span>
                  <div><strong>Right to Restrict Processing</strong> — Request that we limit how we use your data.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">campaign</span>
                  <div><strong>Right to Object</strong> — Object to certain types of processing, including marketing communications.</div>
                </li>
              </ul>
              <p>To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30 days.</p>
            </section>

            <section id="cookies" className="legal-section">
              <h2>8. Cookies & Tokens</h2>
              <p>We use the following browser storage mechanisms:</p>
              <ul className="legal-plain-list">
                <li><strong>localStorage (access_token):</strong> JWT token stored to maintain your session — expires in 30 minutes</li>
                <li><strong>localStorage (refresh_token):</strong> Used to obtain new access tokens — expires in 7 days</li>
                <li><strong>Session cookies:</strong> For CSRF protection and session management</li>
              </ul>
              <p>We do <strong>not</strong> use third-party tracking cookies or advertising cookies.</p>
            </section>

            <section id="children" className="legal-section">
              <h2>9. Children's Privacy</h2>
              <p>
                {COMPANY_NAME} is a business tool intended for users aged 18 and above. We do not knowingly
                collect personal data from children under the age of 13. If you believe a child has provided
                us with personal data, please contact us immediately at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2>10. Contact Us</h2>
              <p>
                For any privacy-related questions, data requests, or concerns, please contact our Data
                Protection Officer:
              </p>
              <div className="legal-contact-grid">
                <a href={`mailto:${CONTACT_EMAIL}`} className="legal-contact-card">
                  <span className="material-symbols-outlined">email</span>
                  <div>
                    <strong>Email</strong>
                    <span>{CONTACT_EMAIL}</span>
                  </div>
                </a>
                <div className="legal-contact-card" style={{ cursor: 'default' }}>
                  <span className="material-symbols-outlined">schedule</span>
                  <div>
                    <strong>Response Time</strong>
                    <span>Within 30 business days</span>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* ── Footer action ── */}
          <div className="legal-footer-action">
            <p>Your privacy matters to us. We are committed to being transparent about our data practices.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/terms" className="legal-secondary-btn">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>gavel</span>
                Read Terms of Service
              </Link>
              <Link to="/register" className="auth-submit-btn" style={{ width: 'auto', padding: '0 24px', textDecoration: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check_circle</span>
                I Agree — Back to Register
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
