import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useAuth } from '../../components/AuthContext';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user } = useAuth();
  const firstName = user?.full_name ? user.full_name.split(' ')[0] : 'Guest';

  const [recentActivities, setRecentActivities] = useState<any[]>([]);
  const [highPriorityLeads, setHighPriorityLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    revenue: '₹0',
    leadsCount: '0',
    activeProjects: '0',
    satisfaction: '98%',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch leads
        const leadsRes = await api.getLeads({ per_page: 250 });
        if (leadsRes.success && leadsRes.data) {
          const leads = leadsRes.data.leads || [];
          
          // Calculate won leads revenue
          const wonLeadsVal = leads
            .filter((l: any) => l.status === 'Closed Won')
            .reduce((sum: number, l: any) => sum + (l.estimated_value || 0), 0);
          
          let revenueStr = '₹0';
          if (wonLeadsVal >= 10000000) {
            revenueStr = `₹${(wonLeadsVal / 10000000).toFixed(2)} Cr`;
          } else if (wonLeadsVal >= 100000) {
            revenueStr = `₹${(wonLeadsVal / 100000).toFixed(2)} L`;
          } else {
            revenueStr = `₹${wonLeadsVal.toLocaleString('en-IN')}`;
          }

          // Active Projects/Deals (e.g. leads in Proposal, Qualified, or Contacted state)
          const activeDeals = leads.filter((l: any) => l.status === 'Qualified' || l.status === 'Proposal' || l.status === 'Contacted').length;

          setStats({
            revenue: revenueStr,
            leadsCount: String(leadsRes.data.total || leads.length),
            activeProjects: String(activeDeals),
            satisfaction: '98%',
          });

          // Sort and map high priority leads (by estimated value descending)
          const sortedLeads = [...leads].sort((a: any, b: any) => (b.estimated_value || 0) - (a.estimated_value || 0));
          const mappedLeads = sortedLeads
            .slice(0, 5)
            .map((l: any) => {
              const name = `${l.first_name} ${l.last_name}`;
              const val = l.estimated_value ? `₹${l.estimated_value.toLocaleString('en-IN')}` : '₹0';
              const avatar = `${l.first_name?.[0] || ''}${l.last_name?.[0] || ''}`.toUpperCase() || 'L';
              
              let temp = l.temp || 'warm';
              let color = '#f59e0b';
              if (temp === 'hot') color = '#ef4444';
              else if (temp === 'cold') color = '#3b82f6';

              return {
                name,
                company: l.company || 'Individual',
                value: val,
                status: l.status || 'New',
                temp,
                avatar,
                color
              };
            });
          setHighPriorityLeads(mappedLeads);
        }

        // Fetch recent activities
        const logsRes = await api.getSecurityLogs();
        if (logsRes.success && logsRes.data) {
          const logs = logsRes.data.slice(0, 5).map((log: any) => {
            let icon = 'info';
            let color = '#dbeafe';
            let iconColor = '#3b82f6';

            const actionLower = log.action.toLowerCase();
            if (actionLower.includes('create') || actionLower.includes('add')) {
              icon = 'person_add';
              color = '#ede9fe';
              iconColor = '#8b5cf6';
            } else if (actionLower.includes('delete') || actionLower.includes('remove')) {
              icon = 'warning';
              color = '#fee2e2';
              iconColor = '#ef4444';
            } else if (actionLower.includes('update') || actionLower.includes('edit')) {
              icon = 'check_circle';
              color = '#d1fae5';
              iconColor = '#10b981';
            }

            const displayAction = log.action
              .replace('inventory.product.', '')
              .replace('inventory.category.', '')
              .replace('inventory.brand.', '')
              .replace('customer.', '')
              .replace('lead.', '')
              .replace('.', ' ');

            let subject = '';
            try {
              if (log.details) {
                const parsed = typeof log.details === 'string' ? JSON.parse(log.details) : log.details;
                subject = parsed.name || parsed.subject || parsed.email || parsed.product_id || parsed.category_id || JSON.stringify(parsed);
              }
            } catch (e) {
              subject = String(log.details || '');
            }

            return {
              icon,
              color,
              iconColor,
              text: `${log.userName || 'System'} ${displayAction} ${subject ? ': ' + subject : ''}`,
              time: new Date(log.timestamp).toLocaleTimeString()
            };
          });
          setRecentActivities(logs);
        }
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div className="dashboard-main">
        {/* ── Topbar ── */}
        <header className="topbar">
          <h1 className="topbar-title">Executive Dashboard</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input type="text" placeholder="Search anything..." />
            </div>
            <button className="topbar-icon-btn" title="Notifications">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
            </button>
            <button className="topbar-icon-btn" title="Settings">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>settings</span>
            </button>
          </div>
        </header>

        <div className="page-content">
          {/* ── Welcome ── */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>
              Welcome back, {firstName} 👋
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>
              Here's what's happening across your enterprise today.
            </p>
          </div>

          {/* ── KPI Cards ── */}
          <div className="stat-grid">
            {[
              { label: 'Total Revenue', value: stats.revenue, change: '+12.5%', up: true, icon: 'payments', bg: '#dbeafe', ic: '#3b82f6' },
              { label: 'New Leads', value: stats.leadsCount, change: '+8.2%', up: true, icon: 'person_add', bg: '#d1fae5', ic: '#10b981' },
              { label: 'Active Projects', value: stats.activeProjects, change: '-3 this week', up: false, icon: 'folder_open', bg: '#ede9fe', ic: '#8b5cf6' },
              { label: 'Customer Satisfaction', value: stats.satisfaction, change: '+2.1%', up: true, icon: 'star', bg: '#fef3c7', ic: '#f59e0b' },
            ].map((s) => (
              <div className="stat-card" key={s.label}>
                <div className="stat-card-header">
                  <span className="stat-card-label">{s.label}</span>
                  <div className="stat-card-icon" style={{ background: s.bg }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: s.ic }}>{s.icon}</span>
                  </div>
                </div>
                <div className="stat-card-value">{s.value}</div>
                <div className={`stat-card-change ${s.up ? 'up' : 'down'}`}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>{s.up ? 'trending_up' : 'trending_down'}</span>
                  {s.change} from last month
                </div>
              </div>
            ))}
          </div>

          {/* ── Quick Actions ── */}
          <div className="content-card" style={{ marginBottom: '24px' }}>
            <div className="content-card-header">
              <h3 className="content-card-title">Quick Actions</h3>
            </div>
            <div style={{ padding: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { icon: 'person_add', label: 'Add Lead', path: '/leads', color: '#3b82f6' },
                { icon: 'receipt_long', label: 'New Quote', path: '/sales', color: '#8b5cf6' },
                { icon: 'description', label: 'Create Invoice', path: '/invoices', color: '#10b981' },
                { icon: 'task_alt', label: 'Add Task', path: '/activity', color: '#f59e0b' },
                { icon: 'analytics', label: 'View Reports', path: '/reports', color: '#ef4444' },
              ].map((a) => (
                <Link key={a.label} to={a.path} className="btn btn-secondary" style={{ gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: a.color }}>{a.icon}</span>
                  {a.label}
                </Link>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px' }}>
            {/* ── Recent Activity ── */}
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Recent Activity</h3>
                <Link to="/activity" className="btn btn-secondary btn-sm">View All</Link>
              </div>
              <div className="content-card-body" style={{ padding: '0 20px' }}>
                {loading ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading activities...</div>
                ) : recentActivities.length === 0 ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No activities logged yet.</div>
                ) : (
                  recentActivities.map((a, i) => (
                    <div className="activity-item" key={i}>
                      <div className="activity-icon" style={{ background: a.color }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px', color: a.iconColor }}>{a.icon}</span>
                      </div>
                      <div className="activity-content">
                        <div className="activity-text">{a.text}</div>
                        <div className="activity-time">{a.time}</div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* ── High Priority Leads ── */}
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">High Priority Leads</h3>
                <Link to="/leads" className="btn btn-secondary btn-sm">View All</Link>
              </div>
              <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {loading ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading leads...</div>
                ) : highPriorityLeads.length === 0 ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No leads found.</div>
                ) : (
                  highPriorityLeads.map((lead, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', background: '#f8fafc', borderRadius: '10px' }}>
                      <div className="avatar" style={{ background: lead.color }}>{lead.avatar}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{lead.name}</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>{lead.company}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{lead.value}</div>
                        <span className={`badge badge-${lead.temp}`}>{lead.temp}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
