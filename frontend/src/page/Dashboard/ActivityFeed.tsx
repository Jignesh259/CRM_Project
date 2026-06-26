import React, { useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import '../../components/Sidebar.css';

const ACTIVITIES = [
  { type: 'lead', icon: 'person_add', color: '#dbeafe', ic: '#3b82f6', user: 'Sarah Jenkins', action: 'added a new lead', subject: 'James Wilson from Acme Corp', time: '2 mins ago' },
  { type: 'deal', icon: 'handshake', color: '#d1fae5', ic: '#10b981', user: 'Mike Torres', action: 'moved deal to', subject: 'Proposal stage — DataStream Inc.', time: '18 mins ago' },
  { type: 'invoice', icon: 'receipt_long', color: '#ede9fe', ic: '#8b5cf6', user: 'System', action: 'Invoice #1042 sent to', subject: 'TechFlow Solutions', time: '1 hour ago' },
  { type: 'payment', icon: 'payments', color: '#fef3c7', ic: '#f59e0b', user: 'System', action: 'Payment of $4,500 received from', subject: 'InnovateTech Ltd', time: '2 hours ago' },
  { type: 'task', icon: 'task_alt', color: '#d1fae5', ic: '#10b981', user: 'Lisa Chen', action: 'completed task', subject: 'Follow-up call with Priya Sharma', time: '3 hours ago' },
  { type: 'note', icon: 'edit_note', color: '#fce7f3', ic: '#ec4899', user: 'James Park', action: 'added a note to lead', subject: 'Marcus Lee — DataStream', time: '4 hours ago' },
  { type: 'alert', icon: 'warning', color: '#fee2e2', ic: '#ef4444', user: 'System', action: 'Server load threshold exceeded —', subject: 'Review required', time: '5 hours ago' },
  { type: 'lead', icon: 'person_add', color: '#dbeafe', ic: '#3b82f6', user: 'Sarah Jenkins', action: 'updated lead status for', subject: 'Priya Sharma to Qualified', time: '6 hours ago' },
  { type: 'deal', icon: 'handshake', color: '#d1fae5', ic: '#10b981', user: 'Mike Torres', action: 'closed deal with', subject: 'Acme Corp — $12,000', time: '1 day ago' },
  { type: 'invoice', icon: 'receipt_long', color: '#ede9fe', ic: '#8b5cf6', user: 'System', action: 'Invoice #1038 overdue —', subject: 'Reminder sent to GlobalTech', time: '1 day ago' },
];

const FILTER_TYPES = ['All', 'Leads', 'Deals', 'Invoices', 'Payments', 'Tasks'];

export const ActivityFeed: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? ACTIVITIES
    : ACTIVITIES.filter((a) => a.type === filter.toLowerCase().slice(0, -1));

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Activity Feed</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input type="text" placeholder="Search activities..." />
            </div>
          </div>
        </header>

        <div className="page-content">
          {/* ── Filter tabs ── */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {FILTER_TYPES.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '6px 16px', borderRadius: '20px', border: '1px solid',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif', transition: 'all 0.18s',
                  borderColor: filter === f ? '#3b82f6' : '#e2e8f0',
                  background: filter === f ? '#dbeafe' : 'white',
                  color: filter === f ? '#1d4ed8' : '#64748b',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Organisation Activity</h3>
              <span style={{ fontSize: '13px', color: '#94a3b8' }}>{filtered.length} events</span>
            </div>
            <div style={{ padding: '0 20px' }}>
              {filtered.map((a, i) => (
                <div className="activity-item" key={i}>
                  <div className="activity-icon" style={{ background: a.color }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: a.ic }}>{a.icon}</span>
                  </div>
                  <div className="activity-content">
                    <div className="activity-text">
                      <strong style={{ color: '#0f172a' }}>{a.user}</strong>{' '}
                      {a.action}{' '}
                      <span style={{ color: '#3b82f6', fontWeight: 500 }}>{a.subject}</span>
                    </div>
                    <div className="activity-time">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
