import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

const STATUS_BADGE: Record<string, string> = {
  New: 'badge-new',
  Contacted: 'badge-contacted',
  Qualified: 'badge-qualified',
  Proposal: 'badge-proposal',
  'Closed Won': 'badge-closed',
  'Closed Lost': 'badge-lost',
};

const getInitials = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

const getAvatarColor = (id: string) => {
  const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981', '#ec4899', '#6366f1'];
  let sum = 0;
  for (let i = 0; i < id.length; i++) sum += id.charCodeAt(i);
  return colors[sum % colors.length];
};

const formatValue = (val: number | null) => {
  if (val === null || val === undefined) return '$0';
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
};

export const LeadList: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    total: 0,
    hot: 0,
    qualified: 0,
    proposal: 0
  });
  
  const navigate = useNavigate();
  const statuses = ['All', 'New', 'Contacted', 'Qualified', 'Proposal', 'Closed Won'];

  const loadLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.getLeads({
        search: search || undefined,
        status: statusFilter === 'All' ? undefined : statusFilter,
        per_page: 100
      });
      if (response.success && response.data) {
        const leadList = response.data.leads || [];
        setLeads(leadList);
        
        // Fetch all leads to compute overall summary statistics
        const allRes = await api.getLeads({ per_page: 250 });
        if (allRes.success && allRes.data) {
          const allLeads = allRes.data.leads || [];
          setStats({
            total: allRes.data.total || 0,
            hot: allLeads.filter((l: any) => l.temp === 'hot').length,
            qualified: allLeads.filter((l: any) => l.status === 'Qualified').length,
            proposal: allLeads.filter((l: any) => l.status === 'Proposal').length,
          });
        }
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeads();
  }, [search, statusFilter]);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    try {
      await api.deleteLead(id);
      loadLeads();
    } catch (err: any) {
      alert(err.message || 'Failed to delete lead');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Lead Management</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input type="text" placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Link to="/leads/kanban" className="btn btn-secondary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>view_kanban</span>
              Pipeline
            </Link>
            <Link to="/leads/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Add Lead
            </Link>
          </div>
        </header>

        <div className="page-content">
          {/* ── Stats ── */}
          <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '24px' }}>
            {[
              { label: 'Total Leads', value: stats.total, icon: 'filter_list', bg: '#dbeafe', ic: '#3b82f6' },
              { label: 'Hot Leads', value: stats.hot, icon: 'local_fire_department', bg: '#fee2e2', ic: '#ef4444' },
              { label: 'Qualified', value: stats.qualified, icon: 'verified', bg: '#d1fae5', ic: '#10b981' },
              { label: 'Proposals Sent', value: stats.proposal, icon: 'description', bg: '#ede9fe', ic: '#8b5cf6' },
            ].map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card-header">
                  <span className="stat-card-label">{s.label}</span>
                  <div className="stat-card-icon" style={{ background: s.bg }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: s.ic }}>{s.icon}</span>
                  </div>
                </div>
                <div className="stat-card-value">{s.value}</div>
              </div>
            ))}
          </div>

          {/* ── Status filter ── */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                style={{
                  padding: '5px 14px', borderRadius: '20px', border: '1px solid',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
                  borderColor: statusFilter === s ? '#3b82f6' : '#e2e8f0',
                  background: statusFilter === s ? '#dbeafe' : 'white',
                  color: statusFilter === s ? '#1d4ed8' : '#64748b',
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* ── Table ── */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Leads ({leads.length})</h3>
            </div>
            <div className="content-card-body">
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading leads...</div>
              ) : error ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
              ) : leads.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No leads found.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Lead</th>
                      <th>Contact</th>
                      <th>Source</th>
                      <th>Status</th>
                      <th>Temp</th>
                      <th>Value</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead) => (
                      <tr key={lead.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/leads/${lead.id}`)}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="avatar" style={{ background: getAvatarColor(lead.id), width: '34px', height: '34px', fontSize: '12px' }}>
                              {getInitials(lead.first_name, lead.last_name)}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, color: '#0f172a' }}>{lead.first_name} {lead.last_name}</div>
                              <div style={{ fontSize: '12px', color: '#64748b' }}>{lead.company}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div style={{ fontSize: '13px', color: '#64748b' }}>
                            <div>{lead.email}</div>
                            {lead.phone && <div>{lead.phone}</div>}
                          </div>
                        </td>
                        <td>{lead.source}</td>
                        <td><span className={`badge ${STATUS_BADGE[lead.status] || 'badge-new'}`}>{lead.status}</span></td>
                        <td><span className={`badge badge-${lead.temp || 'warm'}`}>{lead.temp || 'warm'}</span></td>
                        <td style={{ fontWeight: 600, color: '#16a34a' }}>{formatValue(lead.estimated_value)}</td>
                        <td style={{ fontSize: '13px', color: '#64748b' }}>
                          {lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A'}
                        </td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <Link to={`/leads/${lead.id}`} className="btn btn-secondary btn-sm" title="View">
                              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>visibility</span>
                            </Link>
                            <Link to={`/leads/${lead.id}/edit`} className="btn btn-secondary btn-sm" title="Edit">
                              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>edit</span>
                            </Link>
                            <button
                              onClick={(e) => handleDelete(e, lead.id)}
                              className="btn btn-secondary btn-sm"
                              title="Delete"
                              style={{ color: '#ef4444' }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>delete</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
