import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import { useAuth } from '../../components/AuthContext';
import '../../components/Sidebar.css';

export const AddLead: React.FC = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const loadUsers = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/users', {
          headers: api.getAuthHeaders()
        });
        if (response.ok) {
          const resJson = await response.json();
          if (resJson.success && resJson.data && resJson.data.users) {
            setUsersList(resJson.data.users);
          }
        }
      } catch (err) {
        console.error('Failed to load users', err);
      }
    };
    loadUsers();
  }, []);

  // Sync owner_id to current user once currentUser is loaded, if owner_id is empty
  useEffect(() => {
    if (currentUser && !formData.owner_id) {
      setFormData(prev => ({ ...prev, owner_id: currentUser.id }));
    }
  }, [currentUser]);

  // Combine fetched users and current user fallback
  const displayUsers = usersList.length > 0 
    ? usersList 
    : (currentUser ? [{ id: currentUser.id, full_name: `${currentUser.full_name} (Me)` }] : []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
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

      await api.createLead(payload);
      navigate('/leads');
    } catch (err: any) {
      setError(err.message || 'Failed to create lead');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/leads')}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Add New Lead</h1>
          </div>
        </header>

        <div className="page-content" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="content-card">
            <div className="content-card-body" style={{ padding: '32px' }}>
              {error && (
                <div style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '20px', fontSize: '14px' }}>
                  {error}
                </div>
              )}
              
              <form className="form-grid" onSubmit={handleSubmit}>
                
                {/* ── Personal Details ── */}
                <div className="form-group full-width" style={{ marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a', margin: 0, borderBottom: '1px solid #e2e8f0', paddingBottom: '8px' }}>Personal Information</h3>
                </div>
                
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.first_name}
                    onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.last_name}
                    onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
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
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
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
                    {displayUsers.map((u: any) => (
                      <option key={u.id} value={u.id}>
                        {u.full_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width" style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                  <button type="button" className="btn btn-secondary" disabled={loading} onClick={() => navigate('/leads')}>Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Creating...' : 'Create Lead'}
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
