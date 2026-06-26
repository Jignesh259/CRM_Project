import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const OnboardVendor: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Networking',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    paymentTerms: 'Net 30',
    moq: '10 Units',
    leadTime: '7-14 Days',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contactPerson || !formData.email) {
      setError('Please fill in Company Name, Contact Representative, and Email.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      await api.createVendor(formData);
      navigate('/vendors');
    } catch (err: any) {
      setError(err.message || 'Failed to onboard vendor');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Onboard New Vendor</h1>
        </header>

        <div className="page-content">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <button onClick={() => navigate('/vendors')} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              </button>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Register New Partner</h2>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Establish a new supplier connection in the procurement ledger.</p>
              </div>
            </div>

            {error && (
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Vendor Registration Profile</h3>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                <div className="form-grid" style={{ gap: '20px' }}>
                  
                  {/* General company info */}
                  <div className="form-group full-width">
                    <label className="form-label">Company Name</label>
                    <input
                      type="text"
                      className="form-input"
                      name="name"
                      placeholder="e.g. Cisco Systems Ltd"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Supply Category</label>
                    <select
                      className="form-select"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="Networking">Networking & Core</option>
                      <option value="Electronics">Consumer Electronics</option>
                      <option value="Audio">Audio Hardware</option>
                      <option value="Packaging">Packaging Supplies</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Primary Contact Representative</label>
                    <input
                      type="text"
                      className="form-input"
                      name="contactPerson"
                      placeholder="e.g. Sarah Connor"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      name="email"
                      placeholder="e.g. contacts@cisco.example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      name="phone"
                      placeholder="e.g. 555-1234"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Office Address</label>
                    <input
                      type="text"
                      className="form-input"
                      name="address"
                      placeholder="e.g. 170 Tech Center, San Jose, CA"
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Procurement Terms */}
                  <div className="form-group">
                    <label className="form-label">Payment Terms</label>
                    <select
                      className="form-select"
                      name="paymentTerms"
                      value={formData.paymentTerms}
                      onChange={handleChange}
                    >
                      <option value="Net 30">Net 30</option>
                      <option value="Net 15">Net 15</option>
                      <option value="COD">Cash on Delivery (COD)</option>
                      <option value="Prepaid">Prepaid</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Minimum Order Quantity (MOQ)</label>
                    <input
                      type="text"
                      className="form-input"
                      name="moq"
                      placeholder="e.g. 25 Units"
                      value={formData.moq}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Average Lead Time</label>
                    <input
                      type="text"
                      className="form-input"
                      name="leadTime"
                      placeholder="e.g. 7-14 Days"
                      value={formData.leadTime}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Company Description</label>
                    <textarea
                      className="form-textarea"
                      name="description"
                      placeholder="Summary of services, items manufactured, certifications, etc..."
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                  <button type="button" onClick={() => navigate('/vendors')} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Registering...' : 'Register Vendor'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
