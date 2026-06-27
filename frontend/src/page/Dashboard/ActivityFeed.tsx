import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import '../../components/Sidebar.css';
import { api } from '../../api/api';

const FILTER_TYPES = ['All', 'Leads', 'Deals', 'Invoices', 'Payments', 'Tasks'];

export const ActivityFeed: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [filter, setFilter] = useState('All');
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const res = await api.getSecurityLogs();
        if (res.success && res.data) {
          const mapped = res.data.map((log: any) => {
            let type = 'system';
            let icon = 'info';
            let color = '#dbeafe';
            let ic = '#3b82f6';
            
            const actionLower = log.action.toLowerCase();
            if (actionLower.includes('lead')) {
              type = 'leads';
              icon = 'person_add';
              color = '#dbeafe';
              ic = '#3b82f6';
            } else if (actionLower.includes('deal') || actionLower.includes('quote')) {
              type = 'deals';
              icon = 'handshake';
              color = '#d1fae5';
              ic = '#10b981';
            } else if (actionLower.includes('invoice')) {
              type = 'invoices';
              icon = 'receipt_long';
              color = '#ede9fe';
              ic = '#8b5cf6';
            } else if (actionLower.includes('payment') || actionLower.includes('expense')) {
              type = 'payments';
              icon = 'payments';
              color = '#fef3c7';
              ic = '#f59e0b';
            } else if (actionLower.includes('task')) {
              type = 'tasks';
              icon = 'task_alt';
              color = '#d1fae5';
              ic = '#10b981';
            } else if (actionLower.includes('user') || actionLower.includes('role')) {
              type = 'admin';
              icon = 'shield_person';
              color = '#fce7f3';
              ic = '#ec4899';
            }

            let subject = '';
            try {
              if (log.details) {
                const parsed = typeof log.details === 'string' ? JSON.parse(log.details) : log.details;
                subject = parsed.name || parsed.subject || parsed.email || parsed.product_id || parsed.category_id || JSON.stringify(parsed);
              }
            } catch (e) {
              subject = String(log.details || '');
            }

            // Humanize action label
            const displayAction = log.action
              .replace('inventory.product.', '')
              .replace('inventory.category.', '')
              .replace('inventory.brand.', '')
              .replace('customer.', '')
              .replace('lead.', '')
              .replace('user.', '')
              .replace('role.', '')
              .replace('auth.', '')
              .replace('.', ' ');

            const date = new Date(log.timestamp);
            const timeStr = date.toLocaleString();

            return {
              type,
              icon,
              color,
              ic,
              user: log.userName || 'System',
              action: displayAction,
              subject: subject || '',
              time: timeStr
            };
          });
          setActivities(mapped);
        }
      } catch (err) {
        console.error('Failed to load activities', err);
      } finally {
        setLoading(false);
      }
    };
    loadActivities();
  }, []);

  const filtered = filter === 'All'
    ? activities
    : activities.filter((a) => a.type.toLowerCase() === filter.toLowerCase());

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
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading activities...</div>
              ) : filtered.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No activities logged yet.</div>
              ) : (
                filtered.map((a, i) => (
                  <div className="activity-item" key={i}>
                    <div className="activity-icon" style={{ background: a.color }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px', color: a.ic }}>{a.icon}</span>
                    </div>
                    <div className="activity-content">
                      <div className="activity-text">
                        <strong style={{ color: '#0f172a' }}>{a.user}</strong>{' '}
                        {a.action}{' '}
                        {a.subject && (
                          <span style={{ color: '#3b82f6', fontWeight: 500 }}>{a.subject}</span>
                        )}
                      </div>
                      <div className="activity-time">{a.time}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
