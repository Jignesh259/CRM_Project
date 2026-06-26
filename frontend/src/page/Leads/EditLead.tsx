import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const EditLead: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usersList, setUsersList] = useState<any[]>([]);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    job_title: '',
    website: '',
    status: 'New',
    temp: 'warm',
    source: 'Organic Search',
    estimated_value: '',
    owner_id: ''
  });

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        // Load users first
        const usersResponse = await fetch('http://localhost:8000/api/users', {
          headers: api.getAuthHeaders()
        });
        if (usersResponse.ok) {
          const resJson = await usersResponse.json();
          if (resJson.success && resJson.data && resJson.data.users) {
            setUsersList(resJson.data.users);
          }
        }

        // Load the lead details
        const leadRes = await api.getLead(id);
        if (leadRes.success && leadRes.data) {
          const lead = leadRes.data;
          setFormData({
            first_name: lead.first_name || '',
            last_name: lead.last_name || '',
            email: lead.email || '',
            phone: lead.phone || '',
            company: lead.company || '',
            job_title: lead.job_title || '',
            website: lead.website || '',
            status: lead.status || 'New',
            temp: lead.temp || 'warm',
            source: lead.source || 'Organic Search',
            estimated_value: lead.estimated_value !== null ? String(lead.estimated_value) : '',
            owner_id: lead.owner_id || ''
          });
        }
      } catch (err: any) {
        setError(err.message || 'Failed to load lead details');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;
    setSaving(true);
    setError(null);

    try {
      const payload = {
        ...formData,
        estimated_value: formData.estimated_value ? parseFloat(formData.estimated_value) : undefined,
        owner_id: formData.owner_id || undefined,
        phone: formData.phone || undefined,
        job_title: formData.job_title || undefined,
        website: formData.website || undefined,
      };

      await api.updateLead(id, payload);
      navigate(`/leads/${id}`);
    } catch (err: any) {
      setError(err.message || 'Failed to update lead');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      setSaving(true);
      await api.deleteLead(id);
      navigate('/leads');
    } catch (err: any) {
      setError(err.message || 'Failed to delete lead');
      setSaving(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate(`/leads/${id}`)}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Edit Lead: {formData.first_name} {formData.last_name}</h1>
          </div>
        </header>

        <div className="page-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="content-card">
            <div className="content-card-body" style={{ padding: '32px' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading lead details...</div>
              ) : (
                <form className="form-grid" onSubmit={handleSubmit}>
                  {error && (
                    <div style={{ gridColumn: 'span 2', color: '#ef4444', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px' }}>
                      {error}
                    </div>
                  )}

                  {/* ── Personal Details ── */}
                  <div className="form-group full-width" style={{ marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', margin: 0, borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Personal Information</h3>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">First Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.first_name}
                      onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.last_name}
                      onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* ── Company Details ── */}
                  <div className="form-group full-width" style={{ marginTop: '16px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', margin: 0, borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Company Details</h3>
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Company Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Job Title</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.job_title}
                      onChange={(e) => setFormData({ ...formData, job_title: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      className="form-input"
                      placeholder="https://"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  {/* ── Lead Details ── */}
                  <div className="form-group full-width" style={{ marginTop: '16px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', margin: 0, borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Lead Details</h3>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Lead Status</label>
                    <select
                      className="form-select"
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Proposal">Proposal</option>
                      <option value="Closed Won">Closed Won</option>
                      <option value="Closed Lost">Closed Lost</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Temperature</label>
                    <select
                      className="form-select"
                      value={formData.temp}
                      onChange={(e) => setFormData({ ...formData, temp: e.target.value })}
                    >
                      <option value="hot">Hot</option>
                      <option value="warm">Warm</option>
                      <option value="cold">Cold</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Lead Source</label>
                    <select
                      className="form-select"
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                    >
                      <option value="Organic Search">Organic Search</option>
                      <option value="Paid Ads">Paid Ads</option>
                      <option value="Referral">Referral</option>
                      <option value="Social Media">Social Media</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Estimated Value ($)</label>
                    <input
                      type="number"
                      className="form-input"
                      min="0"
                      step="100"
                      value={formData.estimated_value}
                      onChange={(e) => setFormData({ ...formData, estimated_value: e.target.value })}
                    />
                  </div>
                  <div className="form-group full-width">
                    <label className="form-label">Assign Owner</label>
                    <select
                      className="form-select"
                      value={formData.owner_id}
                      onChange={(e) => setFormData({ ...formData, owner_id: e.target.value })}
                    >
                      <option value="">-- Select Owner --</option>
                      {usersList.map((u: any) => (
                        <option key={u.id} value={u.id}>
                          {u.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full-width" style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" className="btn btn-danger" disabled={saving} onClick={handleDelete}>
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                      Delete Lead
                    </button>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button type="button" className="btn btn-secondary" disabled={saving} onClick={() => navigate(`/leads/${id}`)}>Cancel</button>
                      <button type="submit" className="btn btn-primary" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Changes'}
                      </button>
                    </div>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
