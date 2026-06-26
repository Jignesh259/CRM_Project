import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const SecurityAuditActivityLogs: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Selected log for detail lookup
  const [selectedLog, setSelectedLog] = useState<any | null>(null);

  const loadLogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getSecurityLogs();
      if (res.success) {
        setLogs(res.data || []);
      } else {
        setError('Failed to fetch security audit logs.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while loading audit logs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  // Filter logs locally
  const filteredLogs = logs.filter(log => {
    // 1. Text Search query
    const q = searchQuery.toLowerCase();
    const matchesQuery = !searchQuery || 
      log.userName?.toLowerCase().includes(q) ||
      log.action?.toLowerCase().includes(q) ||
      log.ipAddress?.toLowerCase().includes(q) ||
      log.module?.toLowerCase().includes(q) ||
      log.details?.toLowerCase().includes(q);

    // 2. Module filter
    const matchesModule = selectedModule === 'All' || log.module === selectedModule;

    // 3. Status filter
    const matchesStatus = selectedStatus === 'All' || log.status === selectedStatus;

    // 4. Date filter
    let matchesDate = true;
    if (startDate) {
      const start = new Date(startDate).getTime();
      const logTime = new Date(log.timestamp).getTime();
      if (logTime < start) matchesDate = false;
    }
    if (endDate) {
      // Set to end of the day
      const end = new Date(endDate).setHours(23, 59, 59, 999);
      const logTime = new Date(log.timestamp).getTime();
      if (logTime > end) matchesDate = false;
    }

    return matchesQuery && matchesModule && matchesStatus && matchesDate;
  });

  const handleExportCSV = () => {
    if (filteredLogs.length === 0) return;
    
    // Construct simple CSV string
    const headers = ['Timestamp', 'User', 'Action', 'Module', 'IP Address', 'Status', 'Details'];
    const rows = filteredLogs.map(l => [
      new Date(l.timestamp).toLocaleString(),
      l.userName,
      l.action,
      l.module,
      l.ipAddress,
      l.status,
      l.details || ''
    ]);

    const csvContent = "data:text/csv;charset=utf-8," 
      + [headers.join(','), ...rows.map(r => r.map(val => `"${val.replace(/"/g, '""')}"`).join(','))].join('\n');
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `commsync_security_audit_logs_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'success':
        return { bg: '#d1fae5', text: '#065f46', marker: '#10b981' };
      case 'failed':
      case 'error':
        return { bg: '#ffdad6', text: '#93000a', marker: '#ba1a1a' };
      default:
        return { bg: '#f1f5f9', text: '#475569', marker: '#94a3b8' };
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Security Audit & Activity Logs</h1>
          <div className="topbar-actions">
            <button onClick={handleExportCSV} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export CSV
            </button>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a', letterSpacing: '-0.02em' }}>Security Logs</h2>
              <p style={{ fontSize: '15px', color: '#64748b', margin: 0, maxWidth: '600px' }}>
                System-wide audit trail of security events, authentications, data exports, and state transactions.
              </p>
            </div>
            <button onClick={handleExportCSV} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export CSV List
            </button>
          </div>

          {error && (
            <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}

          {/* Filters Bar */}
          <div className="content-card" style={{ padding: '20px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', alignItems: 'end' }}>
              <div className="form-group" style={{ minWidth: '220px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Search Logs</label>
                <div className="topbar-search" style={{ margin: 0, width: '100%', border: '1px solid #cbd5e1', borderRadius: '8px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
                  <input
                    type="text"
                    placeholder="User, action, IP..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{ width: '100%', height: '38px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ width: '100%', height: '38px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                />
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Module</label>
                <select
                  value={selectedModule}
                  onChange={(e) => setSelectedModule(e.target.value)}
                  style={{ width: '100%', height: '38px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', background: 'white' }}
                >
                  <option value="All">All Modules</option>
                  <option value="Auth">Auth & Login</option>
                  <option value="CRM">CRM & Leads</option>
                  <option value="Finance">Finance & Invoices</option>
                  <option value="Inventory">Inventory</option>
                  <option value="Settings">System Settings</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  style={{ width: '100%', height: '38px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', background: 'white' }}
                >
                  <option value="All">All Statuses</option>
                  <option value="Success">Success</option>
                  <option value="Failed">Failed</option>
                </select>
              </div>
            </div>
          </div>

          {/* Logs Table Card */}
          <div className="content-card" style={{ padding: 0, overflow: 'hidden' }}>
            {loading ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>Loading security audit logs...</div>
              </div>
            ) : filteredLogs.length === 0 ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>No security events found matching current filter values.</div>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="invoice-table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Timestamp</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>User</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Action Details</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Module</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>IP Address</th>
                      <th style={{ textAlign: 'center', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</th>
                      <th style={{ textAlign: 'right', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Lookup</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLogs.map((log) => {
                      const userInitials = log.userName
                        ? log.userName.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
                        : 'US';
                      
                      const statusStyle = getStatusStyle(log.status);

                      return (
                        <tr key={log.id} style={{ borderBottom: '1px solid #f1f5f9' }} className="table-row-hover">
                          <td style={{ padding: '12px 20px', fontSize: '13px', color: '#64748b' }}>
                            {new Date(log.timestamp).toLocaleString()}
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: '#9a25ae',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '10px',
                                fontWeight: 700
                              }}>
                                {userInitials}
                              </div>
                              <span style={{ fontSize: '14px', fontWeight: 500, color: '#0f172a' }}>{log.userName}</span>
                            </div>
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: '14px', color: '#334155' }}>
                            <span style={{
                              fontFamily: 'monospace',
                              backgroundColor: '#f1f5f9',
                              padding: '2px 6px',
                              borderRadius: '4px',
                              fontSize: '13px',
                              color: '#0f172a'
                            }}>
                              {log.action}
                            </span>
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: '14px', color: '#475569' }}>
                            {log.module}
                          </td>
                          <td style={{ padding: '12px 20px', fontSize: '13px', fontFamily: 'monospace', color: '#64748b' }}>
                            {log.ipAddress}
                          </td>
                          <td style={{ padding: '12px 20px', textAlign: 'center' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: '11px',
                              fontWeight: 600,
                              backgroundColor: statusStyle.bg,
                              color: statusStyle.text
                            }}>
                              <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: statusStyle.marker
                              }}></span>
                              {log.status}
                            </span>
                          </td>
                          <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                            <button
                              onClick={() => setSelectedLog(log)}
                              style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: '#005dac',
                                padding: '4px'
                              }}
                              title="View Log Details"
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'between',
              padding: '16px 20px',
              borderTop: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              fontSize: '13px',
              color: '#64748b'
            }}>
              <div>
                Showing 1 to {filteredLogs.length} of {logs.length} entries
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button className="btn btn-secondary btn-sm" disabled style={{ padding: '4px 8px', minWidth: 'auto', opacity: 0.5 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                </button>
                <button className="btn btn-secondary btn-sm" disabled style={{ padding: '4px 8px', minWidth: 'auto', opacity: 0.5 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                </button>
              </div>
            </div>
          </div>

          {/* Details Modal */}
          {selectedLog && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}>
              <div className="content-card" style={{ maxWidth: '540px', width: '100%', padding: 0 }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#005dac' }}>security</span>
                    Audit Event Details
                  </h3>
                  <button onClick={() => setSelectedLog(null)} style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#64748b' }}>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Event ID:</span>
                    <span style={{ fontFamily: 'monospace', color: '#0f172a' }}>{selectedLog.id}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Timestamp:</span>
                    <span style={{ color: '#0f172a' }}>{new Date(selectedLog.timestamp).toLocaleString()}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>User Profile:</span>
                    <span style={{ color: '#0f172a', fontWeight: 500 }}>{selectedLog.userName} (ID: {selectedLog.userId})</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Operation:</span>
                    <span style={{ fontFamily: 'monospace', color: '#0f172a' }}>{selectedLog.action}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Target Module:</span>
                    <span style={{ color: '#0f172a' }}>{selectedLog.module}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>IP Address:</span>
                    <span style={{ fontFamily: 'monospace', color: '#0f172a' }}>{selectedLog.ipAddress}</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Status Code:</span>
                    <span>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: getStatusStyle(selectedLog.status).bg,
                        color: getStatusStyle(selectedLog.status).text
                      }}>{selectedLog.status}</span>
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontWeight: 600, color: '#64748b' }}>Additional Details:</span>
                    <div style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '12px',
                      fontFamily: 'monospace',
                      fontSize: '13px',
                      color: '#334155',
                      whiteSpace: 'pre-wrap'
                    }}>
                      {selectedLog.details || 'No extended status details reported for this event.'}
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={() => setSelectedLog(null)} className="btn btn-primary">
                    Close Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
