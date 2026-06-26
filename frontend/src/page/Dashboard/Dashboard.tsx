import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { useAuth } from '../../components/AuthContext';
import '../../components/Sidebar.css';

const RECENT_ACTIVITIES = [
  { icon: 'receipt_long', color: '#dbeafe', iconColor: '#3b82f6', text: 'Sarah Jenkins opened Invoice #1042', time: '10 mins ago' },
  { icon: 'check_circle', color: '#d1fae5', iconColor: '#10b981', text: 'Project Titan phase 1 approved', time: '2 hours ago' },
  { icon: 'warning', color: '#fee2e2', iconColor: '#ef4444', text: 'Server load threshold exceeded', time: '5 hours ago' },
  { icon: 'person_add', color: '#ede9fe', iconColor: '#8b5cf6', text: 'New lead: James Wilson (Acme Corp)', time: '6 hours ago' },
  { icon: 'payments', color: '#fef3c7', iconColor: '#f59e0b', text: 'Payment of $4,500 received from TechFlow', time: '1 day ago' },
];

const HIGH_PRIORITY_LEADS = [
  { name: 'James Wilson', company: 'Acme Corp', value: '$12,000', status: 'Qualified', temp: 'hot', avatar: 'JW', color: '#ef4444' },
  { name: 'Priya Sharma', company: 'InnovateTech', value: '$8,500', status: 'Proposal', temp: 'warm', avatar: 'PS', color: '#f59e0b' },
  { name: 'Marcus Lee', company: 'DataStream', value: '$6,200', status: 'Contacted', temp: 'cold', avatar: 'ML', color: '#3b82f6' },
];

export const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user } = useAuth();
  const firstName = user?.full_name ? user.full_name.split(' ')[0] : 'Guest';

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
              { label: 'Total Revenue', value: '$1.2M', change: '+12.5%', up: true, icon: 'payments', bg: '#dbeafe', ic: '#3b82f6' },
              { label: 'New Leads', value: '854', change: '+8.2%', up: true, icon: 'person_add', bg: '#d1fae5', ic: '#10b981' },
              { label: 'Active Projects', value: '42', change: '-3 this week', up: false, icon: 'folder_open', bg: '#ede9fe', ic: '#8b5cf6' },
              { label: 'Customer Satisfaction', value: '98%', change: '+2.1%', up: true, icon: 'star', bg: '#fef3c7', ic: '#f59e0b' },
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
                { icon: 'person_add', label: 'Add Lead', path: '/leads/new', color: '#3b82f6' },
                { icon: 'receipt_long', label: 'New Quote', path: '/quotes/new', color: '#8b5cf6' },
                { icon: 'description', label: 'Create Invoice', path: '/invoices/new', color: '#10b981' },
                { icon: 'task_alt', label: 'Add Task', path: '/tasks/new', color: '#f59e0b' },
                { icon: 'analytics', label: 'View Reports', path: '/analytics', color: '#ef4444' },
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
                {RECENT_ACTIVITIES.map((a, i) => (
                  <div className="activity-item" key={i}>
                    <div className="activity-icon" style={{ background: a.color }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: a.iconColor }}>{a.icon}</span>
                    </div>
                    <div className="activity-content">
                      <div className="activity-text">{a.text}</div>
                      <div className="activity-time">{a.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── High Priority Leads ── */}
            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">High Priority Leads</h3>
                <Link to="/leads" className="btn btn-secondary btn-sm">View All</Link>
              </div>
              <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {HIGH_PRIORITY_LEADS.map((lead) => (
                  <div key={lead.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px', background: '#f8fafc', borderRadius: '10px' }}>
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
