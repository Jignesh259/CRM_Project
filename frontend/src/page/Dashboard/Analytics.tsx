import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import '../../components/Sidebar.css';

export const Analytics: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [period, setPeriod] = useState('monthly');

  const metrics = [
    { label: 'Total Leads', value: '1,284', change: '+14%', up: true, icon: 'person_add', bg: '#dbeafe', ic: '#3b82f6' },
    { label: 'Conversion Rate', value: '24.6%', change: '+2.3%', up: true, icon: 'trending_up', bg: '#d1fae5', ic: '#10b981' },
    { label: 'Avg Deal Size', value: '$8,240', change: '-1.2%', up: false, icon: 'payments', bg: '#fef3c7', ic: '#f59e0b' },
    { label: 'Pipeline Value', value: '$2.4M', change: '+18%', up: true, icon: 'account_balance', bg: '#ede9fe', ic: '#8b5cf6' },
  ];

  const sourceData = [
    { source: 'Organic Search', leads: 312, pct: 62, color: '#3b82f6' },
    { source: 'Paid Ads', leads: 124, pct: 25, color: '#10b981' },
    { source: 'Referral', leads: 48, pct: 9, color: '#f59e0b' },
    { source: 'Social Media', leads: 20, pct: 4, color: '#8b5cf6' },
  ];

  const stageData = [
    { stage: 'New', count: 142, value: '$284K', color: '#3b82f6' },
    { stage: 'Contacted', count: 89, value: '$178K', color: '#f59e0b' },
    { stage: 'Qualified', count: 54, value: '$432K', color: '#8b5cf6' },
    { stage: 'Proposal', count: 31, value: '$620K', color: '#10b981' },
    { stage: 'Closed Won', count: 18, value: '$810K', color: '#16a34a' },
    { stage: 'Closed Lost', count: 12, value: '—', color: '#ef4444' },
  ];

  const topReps = [
    { name: 'Sarah Jenkins', deals: 24, revenue: '$192K', rate: '82%', avatar: 'SJ', color: '#ef4444' },
    { name: 'Mike Torres', deals: 19, revenue: '$156K', rate: '74%', avatar: 'MT', color: '#3b82f6' },
    { name: 'Lisa Chen', deals: 17, revenue: '$138K', rate: '71%', avatar: 'LC', color: '#10b981' },
    { name: 'James Park', deals: 14, revenue: '$112K', rate: '67%', avatar: 'JP', color: '#f59e0b' },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Enterprise Analytics</h1>
          <div className="topbar-actions">
            <div style={{ display: 'flex', background: '#f1f5f9', borderRadius: '8px', padding: '3px', gap: '2px' }}>
              {['weekly', 'monthly', 'quarterly', 'yearly'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  style={{
                    padding: '5px 12px', borderRadius: '6px', border: 'none', cursor: 'pointer',
                    fontSize: '13px', fontWeight: 500, fontFamily: 'Inter, sans-serif',
                    background: period === p ? 'white' : 'transparent',
                    color: period === p ? '#0f172a' : '#64748b',
                    boxShadow: period === p ? '0 1px 4px rgba(0,0,0,0.1)' : 'none',
                    transition: 'all 0.18s',
                  }}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
            <button className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
              Export
            </button>
          </div>
        </header>

        <div className="page-content">
          {/* ── KPI ── */}
          <div className="stat-grid" style={{ marginBottom: '24px' }}>
            {metrics.map((m) => (
              <div className="stat-card" key={m.label}>
                <div className="stat-card-header">
                  <span className="stat-card-label">{m.label}</span>
                  <div className="stat-card-icon" style={{ background: m.bg }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: m.ic }}>{m.icon}</span>
                  </div>
                </div>
                <div className="stat-card-value">{m.value}</div>
                <div className={`stat-card-change ${m.up ? 'up' : 'down'}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{m.up ? 'trending_up' : 'trending_down'}</span>
                  {m.change} vs last period
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
            {/* ── Lead Sources ── */}
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Lead Sources</h3>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {sourceData.map((s) => (
                  <div key={s.source}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{s.source}</span>
                      <span style={{ fontSize: '13px', color: '#64748b' }}>{s.leads} leads</span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: '4px', transition: 'width 0.6s ease' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Pipeline by Stage ── */}
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Pipeline by Stage</h3>
              </div>
              <div style={{ padding: '8px 0' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Stage</th>
                      <th>Leads</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stageData.map((s) => (
                      <tr key={s.stage}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: s.color, display: 'inline-block' }} />
                            {s.stage}
                          </div>
                        </td>
                        <td style={{ fontWeight: 600 }}>{s.count}</td>
                        <td style={{ color: '#10b981', fontWeight: 600 }}>{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── Top Sales Reps ── */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Top Sales Representatives</h3>
            </div>
            <div className="content-card-body">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Representative</th>
                    <th>Deals Closed</th>
                    <th>Revenue</th>
                    <th>Win Rate</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {topReps.map((rep, i) => (
                    <tr key={rep.name}>
                      <td style={{ fontWeight: 700, color: '#94a3b8' }}>#{i + 1}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div className="avatar" style={{ background: rep.color, width: '32px', height: '32px', fontSize: '12px' }}>{rep.avatar}</div>
                          <span style={{ fontWeight: 600 }}>{rep.name}</span>
                        </div>
                      </td>
                      <td style={{ fontWeight: 600 }}>{rep.deals}</td>
                      <td style={{ color: '#16a34a', fontWeight: 600 }}>{rep.revenue}</td>
                      <td>
                        <span style={{ fontWeight: 600, color: parseInt(rep.rate) >= 75 ? '#16a34a' : '#f59e0b' }}>{rep.rate}</span>
                      </td>
                      <td>
                        <div style={{ height: '6px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden', width: '80px' }}>
                          <div style={{ height: '100%', width: rep.rate, background: rep.color, borderRadius: '3px' }} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
