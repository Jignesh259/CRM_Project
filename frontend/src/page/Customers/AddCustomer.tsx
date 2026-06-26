import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const AddCustomer: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    website: '',
    plan_type: 'professional',
    assigned_manager: 'unassigned',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, name, value } = e.target;
    const fieldId = id || name;
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handlePlanChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      plan_type: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.email || !formData.company) {
      setError('Please fill in all required fields (First Name, Last Name, Email, Company).');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      // Set MRR based on plan type
      let mrr = 850;
      if (formData.plan_type === 'professional') mrr = 4500;
      else if (formData.plan_type === 'enterprise') mrr = 12000;

      const customerId = `cust_${Date.now()}`;
      const payload = {
        ...formData,
        id: customerId,
        mrr,
        ltv: mrr * 12,
        tags: [
          formData.plan_type.charAt(0).toUpperCase() + formData.plan_type.slice(1),
          formData.industry ? formData.industry.toUpperCase() : 'General',
        ],
      };

      await api.createCustomer(payload);
      navigate('/customers');
    } catch (err: any) {
      setError(err.message || 'Failed to create customer');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* ── Topbar ── */}
        <header className="topbar">
          <h1 className="topbar-title">Add New Customer</h1>
          <div className="topbar-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/customers')}>
              Cancel
            </button>
          </div>
        </header>

        <div className="page-content" style={{ background: '#f8fafc', display: 'flex', justifyContent: 'center', padding: '32px 16px' }}>
          <div className="content-card" style={{ width: '100%', maxWidth: '800px', padding: '24px' }}>
            <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '12px', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>person_add</span>
                Customer Information Form
              </h2>
              <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0' }}>Register a new client profile into the CRM.</p>
            </div>

            {error && (
              <div style={{ background: '#fee2e2', color: '#dc2626', border: '1px solid #fca5a5', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Section 1: Basic Info */}
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                Basic Information
              </h3>
              <div className="form-grid" style={{ marginBottom: '24px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="first_name">First Name *</label>
                  <input
                    type="text"
                    id="first_name"
                    className="form-input"
                    placeholder="e.g. Jane"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="last_name">Last Name *</label>
                  <input
                    type="text"
                    id="last_name"
                    className="form-input"
                    placeholder="e.g. Doe"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="jane.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Section 2: Company Details */}
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '24px 0 16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                Company Details
              </h3>
              <div className="form-grid" style={{ marginBottom: '24px' }}>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label" htmlFor="company">Company Name *</label>
                  <input
                    type="text"
                    id="company"
                    className="form-input"
                    placeholder="Acme Corporation"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="industry">Industry</label>
                  <select id="industry" className="form-select" value={formData.industry} onChange={handleChange}>
                    <option value="">Select an industry</option>
                    <option value="tech">Technology</option>
                    <option value="finance">Finance</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="website">Website URL</label>
                  <input
                    type="url"
                    id="website"
                    className="form-input"
                    placeholder="https://www.example.com"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Section 3: Plan Type Selection & Account Settings */}
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '24px 0 16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                Plan & Account Manager
              </h3>
              <div style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>Plan Type</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {/* Starter */}
                  <div
                    onClick={() => handlePlanChange('starter')}
                    style={{
                      border: formData.plan_type === 'starter' ? '2px solid #3b82f6' : '1px solid #cbd5e1',
                      background: formData.plan_type === 'starter' ? '#eff6ff' : '#fff',
                      padding: '16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: formData.plan_type === 'starter' ? '#3b82f6' : '#64748b' }}>rocket_launch</span>
                      <span style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid #cbd5e1',
                        borderColor: formData.plan_type === 'starter' ? '#3b82f6' : '#cbd5e1',
                        background: formData.plan_type === 'starter' ? '#3b82f6' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {formData.plan_type === 'starter' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }}></span>}
                      </span>
                    </div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '14px', marginTop: '8px' }}>Starter</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>$850/mo • Up to 5 users</div>
                  </div>

                  {/* Professional */}
                  <div
                    onClick={() => handlePlanChange('professional')}
                    style={{
                      border: formData.plan_type === 'professional' ? '2px solid #3b82f6' : '1px solid #cbd5e1',
                      background: formData.plan_type === 'professional' ? '#eff6ff' : '#fff',
                      padding: '16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: formData.plan_type === 'professional' ? '#3b82f6' : '#64748b' }}>work</span>
                      <span style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid #cbd5e1',
                        borderColor: formData.plan_type === 'professional' ? '#3b82f6' : '#cbd5e1',
                        background: formData.plan_type === 'professional' ? '#3b82f6' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {formData.plan_type === 'professional' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }}></span>}
                      </span>
                    </div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '14px', marginTop: '8px' }}>Professional</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>$4,500/mo • CRM tools</div>
                  </div>

                  {/* Enterprise */}
                  <div
                    onClick={() => handlePlanChange('enterprise')}
                    style={{
                      border: formData.plan_type === 'enterprise' ? '2px solid #3b82f6' : '1px solid #cbd5e1',
                      background: formData.plan_type === 'enterprise' ? '#eff6ff' : '#fff',
                      padding: '16px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '4px',
                      transition: 'all 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: formData.plan_type === 'enterprise' ? '#3b82f6' : '#64748b' }}>corporate_fare</span>
                      <span style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        border: '2px solid #cbd5e1',
                        borderColor: formData.plan_type === 'enterprise' ? '#3b82f6' : '#cbd5e1',
                        background: formData.plan_type === 'enterprise' ? '#3b82f6' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {formData.plan_type === 'enterprise' && <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff' }}></span>}
                      </span>
                    </div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '14px', marginTop: '8px' }}>Enterprise</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>$12,000/mo • Custom plan</div>
                  </div>
                </div>
              </div>

              <div className="form-grid" style={{ marginBottom: '24px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="assigned_manager">Assigned Account Manager</label>
                  <select id="assigned_manager" className="form-select" value={formData.assigned_manager} onChange={handleChange}>
                    <option value="unassigned">Unassigned</option>
                    <option value="sarah_j">Sarah Jenkins</option>
                    <option value="mike_r">Mike Ross</option>
                    <option value="david_c">David Chen</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="notes">Internal Notes</label>
                  <input
                    type="text"
                    id="notes"
                    className="form-input"
                    placeholder="Concise workflow notes..."
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <button type="button" className="btn btn-secondary" onClick={() => navigate('/customers')} style={{ height: '40px' }}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={submitting} style={{ height: '40px', gap: '8px' }}>
                  {submitting ? 'Creating...' : 'Create Customer'}
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
