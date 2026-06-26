import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: string; // 'warning' | 'info' | 'error' | 'mention' | 'task' | 'update'
  date: string;
  read: boolean;
}

export const NotificationCenter: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filter, setFilter] = useState<'all' | 'unread' | 'mentions' | 'system'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    try {
      setLoading(true);
      const response = await api.getNotifications();
      if (response && response.success) {
        setNotifications(response.data);
      } else {
        setNotifications([]);
      }
      setError(null);
    } catch (err: any) {
      console.error('Error fetching notifications:', err);
      setError('Failed to load notifications. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id: string) => {
    try {
      await api.markNotificationAsRead(id);
      // Update local state to avoid full reload
      setNotifications((prev) =>
        prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
      );
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const handleMarkAllAsRead = async () => {
    try {
      const unread = notifications.filter((n) => !n.read);
      await Promise.all(unread.map((n) => api.markNotificationAsRead(n.id)));
      setNotifications((prev) => prev.map((notif) => ({ ...notif, read: true })));
    } catch (err) {
      console.error('Error marking all as read:', err);
    }
  };

  const getFilteredNotifications = () => {
    return notifications.filter((notif) => {
      if (filter === 'unread') return !notif.read;
      if (filter === 'mentions') return notif.title.toLowerCase().includes('mention') || notif.message.toLowerCase().includes('mentioned');
      if (filter === 'system') return notif.type === 'error' || notif.type === 'warning' || notif.type === 'system';
      return true;
    });
  };

  const formatTimeAgo = (dateString: string) => {
    try {
      const date = new Date(dateString);
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      if (diffMins < 1) return 'Just now';
      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      if (diffDays === 1) return 'Yesterday';
      return date.toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const filteredList = getFilteredNotifications();
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="dashboard-main">
        {/* Top bar */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              className="topbar-icon-btn md:hidden"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h1 className="topbar-title">CommSync</h1>
          </div>
          
          <div className="topbar-search">
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search..." />
          </div>

          <div className="topbar-actions">
            <button className="topbar-icon-btn" style={{ position: 'relative' }}>
              <span className="material-symbols-outlined">notifications</span>
              {unreadCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ba1a1a',
                    borderRadius: '50%',
                  }}
                />
              )}
            </button>
            <button className="topbar-icon-btn">
              <span className="material-symbols-outlined">help</span>
            </button>
            <button className="topbar-icon-btn">
              <span className="material-symbols-outlined">apps</span>
            </button>
            <div style={{ marginLeft: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#005dac',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                  Notifications
                </h2>
                <p style={{ fontSize: '14px', color: '#414752', margin: '4px 0 0 0' }}>
                  Manage your alerts and activities.
                </p>
              </div>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={handleMarkAllAsRead}
                  disabled={unreadCount === 0}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>done_all</span>
                  Mark all as read
                </button>
              </div>
            </div>

            {/* Filters */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                borderBottom: '1px solid #e0e2ea',
                marginBottom: '24px',
                overflowX: 'auto',
                paddingBottom: '4px',
              }}
            >
              <button
                onClick={() => setFilter('all')}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: filter === 'all' ? '600' : '400',
                  color: filter === 'all' ? '#005dac' : '#414752',
                  border: 'none',
                  background: 'none',
                  borderBottom: filter === 'all' ? '2px solid #005dac' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: filter === 'unread' ? '600' : '400',
                  color: filter === 'unread' ? '#005dac' : '#414752',
                  border: 'none',
                  background: 'none',
                  borderBottom: filter === 'unread' ? '2px solid #005dac' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Unread ({unreadCount})
              </button>
              <button
                onClick={() => setFilter('mentions')}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: filter === 'mentions' ? '600' : '400',
                  color: filter === 'mentions' ? '#005dac' : '#414752',
                  border: 'none',
                  background: 'none',
                  borderBottom: filter === 'mentions' ? '2px solid #005dac' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Mentions
              </button>
              <button
                onClick={() => setFilter('system')}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  fontWeight: filter === 'system' ? '600' : '400',
                  color: filter === 'system' ? '#005dac' : '#414752',
                  border: 'none',
                  background: 'none',
                  borderBottom: filter === 'system' ? '2px solid #005dac' : '2px solid transparent',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                System
              </button>
            </div>

            {/* Loading / Error States */}
            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading notifications...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '16px' }}>
                {error}
              </div>
            )}

            {/* Notification List */}
            {!loading && !error && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredList.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '64px 16px', color: '#414752' }}>
                    <div
                      style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        backgroundColor: '#ecedf6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px auto',
                        color: '#717783',
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
                        notifications_paused
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>All caught up!</h3>
                    <p style={{ fontSize: '14px', color: '#717783', margin: 0 }}>
                      You don't have any notifications under this filter right now.
                    </p>
                  </div>
                ) : (
                  filteredList.map((notif) => {
                    // Determine icons and left colors
                    let iconName = 'notifications';
                    let borderLeftColor = '#005dac'; // Default primary
                    let iconColor = '#005dac';
                    let iconBg = 'rgba(0, 93, 172, 0.1)';

                    if (notif.type === 'warning') {
                      iconName = 'warning';
                      borderLeftColor = '#ba5b00'; // Orange
                      iconColor = '#ba5b00';
                      iconBg = 'rgba(186, 91, 0, 0.1)';
                    } else if (notif.type === 'error') {
                      iconName = 'error';
                      borderLeftColor = '#ba1a1a'; // Red
                      iconColor = '#ba1a1a';
                      iconBg = 'rgba(186, 26, 26, 0.1)';
                    } else if (notif.type === 'mention' || notif.title.toLowerCase().includes('mention')) {
                      iconName = 'person';
                      borderLeftColor = '#005dac'; // Primary
                      iconColor = '#005dac';
                      iconBg = 'rgba(0, 93, 172, 0.1)';
                    } else if (notif.type === 'task') {
                      iconName = 'task';
                      borderLeftColor = '#9a25ae'; // Secondary purple
                      iconColor = '#9a25ae';
                      iconBg = 'rgba(154, 37, 174, 0.1)';
                    } else if (notif.type === 'update') {
                      iconName = 'update';
                      borderLeftColor = '#717783'; // Outline grey
                      iconColor = '#717783';
                      iconBg = 'rgba(113, 119, 131, 0.1)';
                    }

                    return (
                      <div
                        key={notif.id}
                        onClick={() => !notif.read && handleMarkAsRead(notif.id)}
                        style={{
                          backgroundColor: notif.read ? '#ffffff' : '#f2f3fc',
                          padding: '16px',
                          borderRadius: '12px',
                          border: notif.read ? '1px solid #e0e2ea' : '1px solid #c1c6d4',
                          borderLeft: `5px solid ${borderLeftColor}`,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '16px',
                          position: 'relative',
                          cursor: notif.read ? 'default' : 'pointer',
                          transition: 'all 0.2s ease',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                        }}
                      >
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: iconBg,
                            color: iconColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <span className="material-symbols-outlined">{iconName}</span>
                        </div>
                        
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '4px',
                            }}
                          >
                            <h4
                              style={{
                                fontSize: '15px',
                                fontWeight: notif.read ? '500' : '600',
                                color: '#181c21',
                                margin: 0,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {notif.title}
                            </h4>
                            <span style={{ fontSize: '12px', color: '#717783', whiteSpace: 'nowrap' }}>
                              {formatTimeAgo(notif.date)}
                            </span>
                          </div>
                          <p
                            style={{
                              fontSize: '14px',
                              color: '#414752',
                              margin: 0,
                              lineHeight: '1.4',
                            }}
                          >
                            {notif.message}
                          </p>
                          
                          {notif.type === 'error' && (
                            <div style={{ marginTop: '12px' }}>
                              <button
                                className="btn btn-secondary btn-sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  alert('Viewing logs for ' + notif.id);
                                }}
                              >
                                View Logs
                              </button>
                            </div>
                          )}
                        </div>

                        {!notif.read && (
                          <div style={{ flexShrink: 0 }}>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleMarkAsRead(notif.id);
                              }}
                              style={{
                                border: 'none',
                                background: 'none',
                                color: '#005dac',
                                cursor: 'pointer',
                                fontSize: '12px',
                                fontWeight: '600',
                                padding: '4px 8px',
                                borderRadius: '4px',
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 93, 172, 0.05)')}
                              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                            >
                              Mark Read
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      
      {/* CSS Spin Keyframe */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
