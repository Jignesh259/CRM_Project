import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const Analytics: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [period, setPeriod] = useState('monthly');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [metrics, setMetrics] = useState<any[]>([]);
  const [sourceData, setSourceData] = useState<any[]>([]);
  const [stageData, setStageData] = useState<any[]>([]);
  const [topReps, setTopReps] = useState<any[]>([]);

  const loadAnalyticsData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [leadsRes, usersRes] = await Promise.all([
        api.getLeads({ per_page: 250 }),
        api.getUsers()
      ]);

      const leads = (leadsRes.success && leadsRes.data?.leads) ? leadsRes.data.leads : [];
      const users = (usersRes.success && usersRes.data) ? usersRes.data : [];

      // ── Calculate Metrics ──
      const totalLeads = leads.length;
      const wonCount = leads.filter((l: any) => l.status === 'Closed Won').length;
      const convRate = totalLeads > 0 ? ((wonCount / totalLeads) * 100).toFixed(1) : '0';

      const valLeads = leads.filter((l: any) => l.estimated_value > 0);
      const avgDeal = valLeads.length > 0
        ? Math.round(valLeads.reduce((sum: number, l: any) => sum + (l.estimated_value || 0), 0) / valLeads.length)
        : 0;

      const pipelineVal = leads
        .filter((l: any) => l.status !== 'Closed Won' && l.status !== 'Closed Lost')
        .reduce((sum: number, l: any) => sum + (l.estimated_value || 0), 0);

      // Formatting Pipeline Value
      let pipelineStr = '';
      if (pipelineVal >= 10000000) {
        pipelineStr = `₹${(pipelineVal / 10000000).toFixed(2)} Cr`;
      } else if (pipelineVal >= 100000) {
        pipelineStr = `₹${(pipelineVal / 100000).toFixed(2)} L`;
      } else {
        pipelineStr = `₹${pipelineVal.toLocaleString('en-IN')}`;
      }

      setMetrics([
        { label: 'Total Leads', value: totalLeads.toLocaleString('en-IN'), change: '+14%', up: true, icon: 'person_add', bg: '#dbeafe', ic: '#3b82f6' },
        { label: 'Conversion Rate', value: `${convRate}%`, change: '+2.3%', up: true, icon: 'trending_up', bg: '#d1fae5', ic: '#10b981' },
        { label: 'Avg Deal Size', value: `₹${avgDeal.toLocaleString('en-IN')}`, change: '-1.2%', up: false, icon: 'payments', bg: '#fef3c7', ic: '#f59e0b' },
        { label: 'Pipeline Value', value: pipelineStr, change: '+18%', up: true, icon: 'account_balance', bg: '#ede9fe', ic: '#8b5cf6' },
      ]);

      // ── Calculate Lead Sources ──
      const sourcesMap: Record<string, number> = {};
      leads.forEach((l: any) => {
        const src = l.source || 'Organic Search';
        sourcesMap[src] = (sourcesMap[src] || 0) + 1;
      });

      const sourceColors = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899'];
      const calculatedSources = Object.entries(sourcesMap).map(([source, count], idx) => ({
        source,
        leads: count,
        pct: totalLeads > 0 ? Math.round((count / totalLeads) * 100) : 0,
        color: sourceColors[idx % sourceColors.length]
      })).sort((a, b) => b.leads - a.leads);

      setSourceData(calculatedSources.length > 0 ? calculatedSources : [
        { source: 'No Data', leads: 0, pct: 0, color: '#94a3b8' }
      ]);

      // ── Calculate Pipeline by Stage ──
      const stages = ['New', 'Contacted', 'Qualified', 'Proposal', 'Closed Won', 'Closed Lost'];
      const stageColors: Record<string, string> = {
        New: '#3b82f6',
        Contacted: '#f59e0b',
        Qualified: '#8b5cf6',
        Proposal: '#10b981',
        'Closed Won': '#16a34a',
        'Closed Lost': '#ef4444'
      };

      const calculatedStages = stages.map(stage => {
        const stageLeads = leads.filter((l: any) => l.status === stage || (stage === 'New' && !stages.includes(l.status)));
        const count = stageLeads.length;
        const valueSum = stageLeads.reduce((sum: number, l: any) => sum + (l.estimated_value || 0), 0);

        let valStr = '—';
        if (valueSum > 0) {
          if (valueSum >= 10000000) valStr = `₹${(valueSum / 10000000).toFixed(1)} Cr`;
          else if (valueSum >= 100000) valStr = `₹${(valueSum / 100000).toFixed(1)} L`;
          else valStr = `₹${(valueSum / 1000).toFixed(0)}K`;
        }

        return {
          stage,
          count,
          value: valStr,
          color: stageColors[stage] || '#64748b'
        };
      });
      setStageData(calculatedStages);

      // ── Calculate Top Sales Reps ──
      const repsMap: Record<string, { name: string; deals: number; revenue: number; rate: number; avatar: string; color: string }> = {};
      const usersMap: Record<string, any> = {};
      users.forEach((u: any) => {
        usersMap[u.id] = u;
      });

      leads.forEach((l: any) => {
        const ownerId = l.owner_id || 'unassigned';
        const ownerName = usersMap[ownerId]?.name || 'Unassigned';

        if (!repsMap[ownerId]) {
          const avatar = ownerName.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2) || 'U';
          const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
          const colorIdx = ownerId.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) % colors.length;

          repsMap[ownerId] = {
            name: ownerName,
            deals: 0,
            revenue: 0,
            rate: 0,
            avatar,
            color: colors[colorIdx]
          };
        }

        if (l.status === 'Closed Won') {
          repsMap[ownerId].deals += 1;
          repsMap[ownerId].revenue += (l.estimated_value || 0);
        }
      });

      const repsTotalAssigned: Record<string, number> = {};
      leads.forEach((l: any) => {
        const ownerId = l.owner_id || 'unassigned';
        repsTotalAssigned[ownerId] = (repsTotalAssigned[ownerId] || 0) + 1;
      });

      Object.keys(repsMap).forEach(ownerId => {
        const totalAssigned = repsTotalAssigned[ownerId] || 0;
        const won = repsMap[ownerId].deals;
        repsMap[ownerId].rate = totalAssigned > 0 ? Math.round((won / totalAssigned) * 100) : 0;
      });

      const calculatedReps = Object.values(repsMap)
        .filter((rep: any) => rep.deals > 0 || rep.name !== 'Unassigned')
        .map((rep: any) => {
          let revStr = '₹0';
          if (rep.revenue >= 10000000) revStr = `₹${(rep.revenue / 10000000).toFixed(1)} Cr`;
          else if (rep.revenue >= 100000) revStr = `₹${(rep.revenue / 100000).toFixed(1)} L`;
          else revStr = `₹${(rep.revenue / 1000).toFixed(0)}K`;

          return {
            name: rep.name,
            deals: rep.deals,
            revenue: revStr,
            rate: `${rep.rate}%`,
            avatar: rep.avatar,
            color: rep.color
          };
        })
        .sort((a: any, b: any) => b.deals - a.deals)
        .slice(0, 5);

      setTopReps(calculatedReps);

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while loading analytics data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAnalyticsData();
  }, [period]);

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
          {loading ? (
            <div style={{ padding: '80px 40px', textAlign: 'center', color: '#64748b' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#3b82f6', marginBottom: '16px', animation: 'spin 2s linear infinite' }}>sync</span>
              <h2 style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', margin: '0 0 8px' }}>Analyzing CRM Metrics...</h2>
              <p style={{ fontSize: '14px', margin: 0 }}>Compiling active pipeline values and agent conversion rates.</p>
            </div>
          ) : error ? (
            <div style={{ padding: '80px 40px', textAlign: 'center', color: '#ef4444' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', marginBottom: '16px' }}>warning</span>
              <h2 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 8px' }}>Failed to Load Analytics</h2>
              <p style={{ fontSize: '14px', margin: 0 }}>{error}</p>
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
