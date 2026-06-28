import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

const ACTIVITY_CONFIG: Record<string, { icon: string; bg: string; ic: string }> = {
  call: { icon: 'call', bg: '#dbeafe', ic: '#3b82f6' },
  Call: { icon: 'call', bg: '#dbeafe', ic: '#3b82f6' },
  email: { icon: 'mail', bg: '#ede9fe', ic: '#8b5cf6' },
  Email: { icon: 'mail', bg: '#ede9fe', ic: '#8b5cf6' },
  note: { icon: 'edit_note', bg: '#fef3c7', ic: '#f59e0b' },
  Note: { icon: 'edit_note', bg: '#fef3c7', ic: '#f59e0b' },
  meeting: { icon: 'groups', bg: '#d1fae5', ic: '#10b981' },
  Meeting: { icon: 'groups', bg: '#d1fae5', ic: '#10b981' },
  task: { icon: 'task_alt', bg: '#fee2e2', ic: '#ef4444' },
  Task: { icon: 'task_alt', bg: '#fee2e2', ic: '#ef4444' },
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
  if (val === null || val === undefined) return '₹0';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
};

export const LeadProfile: React.FC = () => {
  const { id } = useParams();
   const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'activities' | 'notes'>('overview');
  
  const [lead, setLead] = useState<any | null>(null);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [noteContent, setNoteContent] = useState('');

  const loadLeadDetails = async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);

      // Fetch users list
      const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:19022/api';
      const usersResponse = await fetch(`${apiBase}/users`, {
        headers: api.getAuthHeaders()
      });
      if (usersResponse.ok) {
        const resJson = await usersResponse.json();
        if (resJson.success && resJson.data && resJson.data.users) {
          setUsersList(resJson.data.users);
        }
      }

      // Fetch lead
      const response = await api.getLead(id);
      if (response.success && response.data) {
        setLead(response.data);
        setNoteContent(response.data.notes || '');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load lead details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLeadDetails();
  }, [id]);

  const handleSaveNote = async () => {
    if (!id) return;
    setSaving(true);
    try {
      await api.updateLead(id, { notes: noteContent });
      setLead((prev: any) => prev ? { ...prev, notes: noteContent } : null);
      alert('Notes saved successfully');
    } catch (err: any) {
      alert(err.message || 'Failed to save note');
    } finally {
      setSaving(false);
    }
  };

  const getOwnerName = (ownerId: string | null) => {
    if (!ownerId) return 'Unassigned';
    const found = usersList.find(u => u.id === ownerId);
    return found ? found.full_name : 'Assigned Owner';
  };

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar">
            <h1 className="topbar-title">Lead Profile</h1>
          </header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
            Loading lead details...
          </div>
        </div>
      </div>
    );
  }

  if (error || !lead) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar">
            <h1 className="topbar-title">Lead Profile</h1>
          </header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>
            {error || 'Lead not found.'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button className="btn btn-secondary btn-sm" onClick={() => navigate('/leads')}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Lead Profile</h1>
          </div>
          <div className="topbar-actions">
            <Link to={`/leads/${id}/schedule`} className="btn btn-secondary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_add_on</span>
              Schedule Follow-up
            </Link>
            <Link to={`/leads/${id}/edit`} className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
              Edit Lead
            </Link>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: '24px' }}>
            {/* ── Left: Profile card ── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="content-card">
                <div style={{ padding: '24px', textAlign: 'center', borderBottom: '1px solid #f1f5f9' }}>
                  <div className="avatar" style={{ background: getAvatarColor(lead.id), width: '72px', height: '72px', fontSize: '24px', margin: '0 auto 12px' }}>
                    {getInitials(lead.first_name, lead.last_name)}
                  </div>
                  <h2 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{lead.first_name} {lead.last_name}</h2>
                  {lead.job_title && <p style={{ margin: '0 0 8px', fontSize: '14px', color: '#64748b' }}>{lead.job_title}</p>}
                  <p style={{ margin: '0 0 12px', fontSize: '14px', fontWeight: 600, color: '#3b82f6' }}>{lead.company}</p>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <span className={`badge badge-${lead.temp || 'warm'}`}>{lead.temp || 'warm'}</span>
                    <span className={`badge ${STATUS_BADGE[lead.status] || 'badge-new'}`}>{lead.status}</span>
                  </div>
                </div>
                <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { icon: 'mail', label: 'Email', value: lead.email },
                    { icon: 'call', label: 'Phone', value: lead.phone || 'N/A' },
                    { icon: 'language', label: 'Website', value: lead.website || 'N/A' },
                    { icon: 'track_changes', label: 'Source', value: lead.source },
                    { icon: 'person', label: 'Owner', value: getOwnerName(lead.owner_id) },
                    { icon: 'calendar_today', label: 'Created', value: lead.created_at ? new Date(lead.created_at).toLocaleDateString() : 'N/A' },
                  ].map((item) => (
                    <div key={item.label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8', flexShrink: 0, marginTop: '1px' }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600 }}>{item.label}</div>
                        <div style={{ fontSize: '14px', color: '#334155', wordBreak: 'break-all' }}>{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deal value card */}
              <div className="content-card" style={{ padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', fontWeight: 600 }}>Estimated Value</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: '#16a34a', marginBottom: '8px' }}>{formatValue(lead.estimated_value)}</div>
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>handshake</span>
                  Convert to Deal
                </button>
              </div>
            </div>

            {/* ── Right: Tabs ── */}
            <div>
              {/* Tab bar */}
              <div style={{ display: 'flex', gap: '0', borderBottom: '2px solid #e2e8f0', marginBottom: '20px' }}>
                {(['overview', 'activities', 'notes'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '10px 20px', background: 'none', border: 'none', cursor: 'pointer',
                      fontSize: '14px', fontWeight: activeTab === tab ? 600 : 400,
                      color: activeTab === tab ? '#3b82f6' : '#64748b',
                      borderBottom: `2px solid ${activeTab === tab ? '#3b82f6' : 'transparent'}`,
                      marginBottom: '-2px', fontFamily: 'Inter, sans-serif', transition: 'all 0.18s',
                      textTransform: 'capitalize',
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {activeTab === 'overview' && (
                <div className="content-card">
                  <div className="content-card-header"><h3 className="content-card-title">Notes & Summary</h3></div>
                  <div style={{ padding: '20px' }}>
                    <p style={{ fontSize: '15px', color: '#334155', lineHeight: 1.7, margin: 0, whiteSpace: 'pre-wrap' }}>
                      {lead.notes || 'No summary notes recorded.'}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'activities' && (
                <div className="content-card">
                  <div className="content-card-header">
                    <h3 className="content-card-title">Activity Timeline</h3>
                    <Link to={`/leads/${id}/schedule`} className="btn btn-primary btn-sm">
                      <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>add</span>
                      Log Activity
                    </Link>
                  </div>
                  <div style={{ padding: '0 20px 20px' }}>
                    {!lead.activities || lead.activities.length === 0 ? (
                      <div style={{ padding: '30px', textAlign: 'center', color: '#94a3b8', fontSize: '14px' }}>
                        No activities logged for this lead yet.
                      </div>
                    ) : (
                      lead.activities.map((a: any, i: number) => {
                        const cfg = ACTIVITY_CONFIG[a.activity_type] || { icon: 'event', bg: '#f1f5f9', ic: '#64748b' };
                        return (
                          <div className="activity-item" key={a.id || i} style={{ display: 'flex', gap: '16px', margin: '20px 0', position: 'relative' }}>
                            <div className="activity-icon" style={{ 
                              background: cfg.bg, 
                              width: '36px', 
                              height: '36px', 
                              borderRadius: '50%', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: cfg.ic }}>{cfg.icon}</span>
                            </div>
                            <div className="activity-content" style={{ flexGrow: 1 }}>
                              <div className="activity-text" style={{ fontWeight: 600, color: '#1e293b', fontSize: '14px' }}>{a.subject}</div>
                              {a.notes && <div className="activity-notes" style={{ fontSize: '13px', color: '#64748b', marginTop: '4px', whiteSpace: 'pre-wrap' }}>{a.notes}</div>}
                              <div className="activity-time" style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>
                                {a.activity_date ? `${a.activity_date} ${a.activity_time || ''}` : new Date(a.created_at).toLocaleString()}
                                {a.assigned_to_id && ` · Assigned: ${getOwnerName(a.assigned_to_id)}`}
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="content-card">
                  <div className="content-card-header"><h3 className="content-card-title">Notes</h3></div>
                  <div style={{ padding: '20px' }}>
                    <textarea
                      className="form-textarea"
                      placeholder="Add a note about this lead..."
                      rows={6}
                      value={noteContent}
                      onChange={(e) => setNoteContent(e.target.value)}
                    />
                    <button className="btn btn-primary" style={{ marginTop: '12px' }} disabled={saving} onClick={handleSaveNote}>
                      {saving ? 'Saving...' : 'Save Note'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
