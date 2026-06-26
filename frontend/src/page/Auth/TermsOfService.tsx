import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Auth.css';
import '../../style/Legal.css';

const LAST_UPDATED = 'June 25, 2026';
const COMPANY_NAME = 'Customer CRM';
const CONTACT_EMAIL = 'legal@customercrm.com';
const WEBSITE = 'https://customercrm.com';

export const TermsOfService: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'services', title: '2. Description of Services' },
    { id: 'account', title: '3. Account Registration & Security' },
    { id: 'data', title: '4. Data & Content Ownership' },
    { id: 'acceptable-use', title: '5. Acceptable Use Policy' },
    { id: 'subscription', title: '6. Subscription & Billing' },
    { id: 'termination', title: '7. Termination' },
    { id: 'liability', title: '8. Limitation of Liability' },
    { id: 'changes', title: '9. Changes to Terms' },
    { id: 'contact', title: '10. Contact Us' },
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
            <div className="legal-hero-icon">
              <span className="material-symbols-outlined">gavel</span>
            </div>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-subtitle">
              Please read these terms carefully before using {COMPANY_NAME}.
            </p>
            <div className="legal-badge">
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>schedule</span>
              Last updated: {LAST_UPDATED}
            </div>
          </div>

          <div className="legal-content">

            <section id="acceptance" className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By creating an account or using <strong>{COMPANY_NAME}</strong> ("the Service"), you agree to be
                bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not
                access or use the Service.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you (the "User") and {COMPANY_NAME}.
                Your continued use of the Service after any changes to these Terms constitutes acceptance of
                the updated Terms.
              </p>
              <div className="legal-highlight">
                <span className="material-symbols-outlined">warning</span>
                <p>By clicking "I agree to the Terms of Service," you confirm that you have read, understood,
                  and agreed to these Terms in their entirety.</p>
              </div>
            </section>

            <section id="services" className="legal-section">
              <h2>2. Description of Services</h2>
              <p>
                {COMPANY_NAME} is a cloud-based Customer Relationship Management (CRM) platform that provides:
              </p>
              <ul className="legal-list">
                <li>
                  <span className="material-symbols-outlined">person</span>
                  <div><strong>Lead & Contact Management</strong> — Track and manage leads, contacts, and customer accounts across your organization.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">handshake</span>
                  <div><strong>Deal Pipeline</strong> — Manage deals across stages with close dates and financial tracking.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">receipt_long</span>
                  <div><strong>Quotes & Invoicing</strong> — Generate professional quotes and invoices tied to deals and products.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">payments</span>
                  <div><strong>Payment Tracking</strong> — Record and monitor payments against invoices.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">task_alt</span>
                  <div><strong>Tasks & Activities</strong> — Schedule tasks, log activities, and keep notes on every customer interaction.</div>
                </li>
                <li>
                  <span className="material-symbols-outlined">notifications</span>
                  <div><strong>Notifications</strong> — Receive real-time alerts for important events and deadlines.</div>
                </li>
              </ul>
            </section>

            <section id="account" className="legal-section">
              <h2>3. Account Registration & Security</h2>
              <p>To use the Service, you must:</p>
              <ul className="legal-plain-list">
                <li>Provide a valid email address and verify it via OTP</li>
                <li>Create a password of at least 8 characters</li>
                <li>Be at least 18 years of age</li>
                <li>Represent a company or organization (corporate accounts)</li>
              </ul>
              <p>
                You are responsible for maintaining the confidentiality of your credentials. You agree to
                immediately notify us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> of any
                unauthorized use of your account. {COMPANY_NAME} will not be liable for any losses resulting
                from unauthorized use of your account.
              </p>
              <p>
                Your account uses <strong>Role-Based Access Control (RBAC)</strong>. Roles include Admin,
                Manager, and User — each with defined permissions. Account administrators are responsible
                for properly managing roles within their organization.
              </p>
            </section>

            <section id="data" className="legal-section">
              <h2>4. Data & Content Ownership</h2>
              <p>
                <strong>Your Data:</strong> All customer data, contacts, leads, deals, and business information
                you enter into {COMPANY_NAME} ("User Content") remains your sole property. We do not claim
                any ownership rights over your User Content.
              </p>
              <p>
                <strong>License to Us:</strong> By using the Service, you grant {COMPANY_NAME} a limited,
                non-exclusive license to process your User Content solely for the purpose of providing and
                improving the Service.
              </p>
              <p>
                <strong>Data Export:</strong> You may export your data at any time. Upon account termination,
                we provide a 30-day window for data export before permanent deletion.
              </p>
              <div className="legal-highlight info">
                <span className="material-symbols-outlined">database</span>
                <p>Your data is stored in secure PostgreSQL databases. We maintain automated backups with
                  point-in-time recovery capabilities.</p>
              </div>
            </section>

            <section id="acceptable-use" className="legal-section">
              <h2>5. Acceptable Use Policy</h2>
              <p>You agree <strong>not</strong> to:</p>
              <ul className="legal-plain-list">
                <li>Use the Service for any unlawful purpose or in violation of applicable laws</li>
                <li>Attempt to gain unauthorized access to any part of the Service or other users' accounts</li>
                <li>Transmit malware, viruses, or any harmful code</li>
                <li>Use the Service to send spam, unsolicited messages, or engage in phishing</li>
                <li>Scrape, crawl, or systematically extract data from the platform</li>
                <li>Resell, sublicense, or provide the Service to third parties without authorization</li>
                <li>Interfere with the operation or performance of the Service</li>
                <li>Store or transmit content that is defamatory, obscene, or violates third-party rights</li>
              </ul>
              <p>
                Violation of this Acceptable Use Policy may result in immediate account suspension or termination
                without notice or refund.
              </p>
            </section>

            <section id="subscription" className="legal-section">
              <h2>6. Subscription & Billing</h2>
              <p>
                {COMPANY_NAME} offers subscription-based access. By subscribing, you agree to pay the applicable
                fees as described on our pricing page. Fees are billed in advance on a monthly or annual basis.
              </p>
              <ul className="legal-plain-list">
                <li><strong>Free Trial:</strong> New accounts may be eligible for a free trial period</li>
                <li><strong>Payment:</strong> All payments are processed securely via our payment provider</li>
                <li><strong>Refunds:</strong> Refunds are not provided for partial subscription periods</li>
                <li><strong>Cancellation:</strong> You may cancel your subscription at any time; access continues until the end of the billing period</li>
                <li><strong>Price Changes:</strong> We will notify you 30 days in advance of any price changes</li>
              </ul>
            </section>

            <section id="termination" className="legal-section">
              <h2>7. Termination</h2>
              <p>
                Either party may terminate this agreement at any time. {COMPANY_NAME} reserves the right to
                suspend or terminate your account immediately if you violate these Terms.
              </p>
              <p>
                Upon termination: (a) your right to use the Service ceases immediately; (b) you may export
                your data within 30 days; (c) we may delete your data after the 30-day retention period.
              </p>
            </section>

            <section id="liability" className="legal-section">
              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, {COMPANY_NAME} shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of your use of
                or inability to use the Service.
              </p>
              <p>
                Our total aggregate liability to you for any claims arising under these Terms shall not exceed
                the fees paid by you to {COMPANY_NAME} in the three (3) months preceding the claim.
              </p>
              <div className="legal-highlight warning">
                <span className="material-symbols-outlined">shield</span>
                <p>The Service is provided "as is" without warranty of any kind. We do not guarantee
                  uninterrupted or error-free operation of the Service.</p>
              </div>
            </section>

            <section id="changes" className="legal-section">
              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of material
                changes by email to your registered address or by prominent notice within the Service at
                least 14 days before the changes take effect.
              </p>
              <p>
                Your continued use of the Service after the effective date constitutes your acceptance of
                the updated Terms. If you do not agree to the updated Terms, you must stop using the Service.
              </p>
            </section>

            <section id="contact" className="legal-section">
              <h2>10. Contact Us</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="legal-contact-grid">
                <a href={`mailto:${CONTACT_EMAIL}`} className="legal-contact-card">
                  <span className="material-symbols-outlined">email</span>
                  <div>
                    <strong>Email</strong>
                    <span>{CONTACT_EMAIL}</span>
                  </div>
                </a>
                <a href={WEBSITE} className="legal-contact-card">
                  <span className="material-symbols-outlined">language</span>
                  <div>
                    <strong>Website</strong>
                    <span>{WEBSITE}</span>
                  </div>
                </a>
              </div>
            </section>

          </div>

          {/* ── Footer action ── */}
          <div className="legal-footer-action">
            <p>By registering, you agree to these Terms of Service and our Privacy Policy.</p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/privacy-policy" className="legal-secondary-btn">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>privacy_tip</span>
                Read Privacy Policy
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
