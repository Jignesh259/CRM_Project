import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

const STAGE_COLORS: Record<string, string> = {
  New: '#3b82f6',
  Contacted: '#f59e0b',
  Qualified: '#8b5cf6',
  Proposal: '#10b981',
  'Closed Won': '#16a34a',
  'Closed Lost': '#ef4444'
};

const formatValue = (val: number | null) => {
  if (val === null || val === undefined) return '₹0';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
};

export const LeadKanban: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPipelineLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.getLeads({ per_page: 250 });
      if (res.success && res.data) {
        setLeads(res.data.leads || []);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to fetch pipeline leads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPipelineLeads();
  }, []);

  // Group leads by status columns
  const columns: Record<string, any[]> = {
    New: [],
    Contacted: [],
    Qualified: [],
    Proposal: [],
    'Closed Won': [],
    'Closed Lost': []
  };

  leads.forEach((lead) => {
    const status = lead.status;
    if (columns[status] !== undefined) {
      columns[status].push(lead);
    } else {
      columns['New'].push(lead);
    }
  });

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Pipeline Kanban</h1>
          <div className="topbar-actions">
            <Link to="/leads" className="btn btn-secondary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>filter_list</span>
              List View
            </Link>
            <Link to="/leads/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Add Lead
            </Link>
          </div>
        </header>

        <div className="page-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>
          {error && (
            <div style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '12px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
              Loading Kanban board...
            </div>
          ) : (
            <div className="kanban-board" style={{ flex: 1 }}>
              {Object.entries(columns).map(([stage, stageLeads]) => (
                <div key={stage} className="kanban-column">
                  <div className="kanban-column-header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: STAGE_COLORS[stage] || '#64748b' }} />
                      <span className="kanban-column-title">{stage}</span>
                    </div>
                    <span className="kanban-count">{stageLeads.length}</span>
                  </div>
                  <div style={{ minHeight: '150px' }}>
                    {stageLeads.map((lead) => (
                      <Link to={`/leads/${lead.id}`} key={lead.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="kanban-card">
                          <div className="kanban-card-name">{lead.first_name} {lead.last_name}</div>
                          <div className="kanban-card-company">{lead.company}</div>
                          <div style={{ marginBottom: '12px' }}>
                            <span className={`badge badge-${lead.temp || 'warm'}`}>{lead.temp || 'warm'}</span>
                          </div>
                          <div className="kanban-card-footer">
                            <span style={{ fontSize: '14px', fontWeight: 600, color: '#16a34a' }}>
                              {formatValue(lead.estimated_value)}
                            </span>
                            <span style={{ fontSize: '12px', color: '#64748b' }}>
                              {lead.created_at ? new Date(lead.created_at).toLocaleDateString([], { month: 'short', day: 'numeric' }) : 'N/A'}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                    {stageLeads.length === 0 && (
                      <div style={{ textAlign: 'center', color: '#cbd5e1', padding: '30px 10px', fontSize: '13px', border: '1px dashed #f1f5f9', borderRadius: '8px', marginBottom: '12px' }}>
                        No leads
                      </div>
                    )}
                  </div>
                  <Link
                    to="/leads/new"
                    style={{
                      textDecoration: 'none',
                      width: '100%',
                      padding: '10px',
                      background: 'transparent',
                      border: '1px dashed #cbd5e1',
                      borderRadius: '8px',
                      color: '#64748b',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 500,
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span> Add
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
