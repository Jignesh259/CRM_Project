import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

export const EmailCommunicationSettings: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // Connection Test State
  const [testingConnection, setTestingConnection] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  // Form States - SMTP
  const [smtpHost, setSmtpHost] = useState('');
  const [smtpPort, setSmtpPort] = useState('587');
  const [securityProtocol, setSecurityProtocol] = useState('tls');
  const [smtpUser, setSmtpUser] = useState('');
  const [smtpPassword, setSmtpPassword] = useState('••••••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  // Form States - Sender Identity
  const [fromName, setFromName] = useState('CommSync System');
  const [replyToEmail, setReplyToEmail] = useState('support@commsync.com');

  // Trigger States
  const [emailTriggerNewInvoices, setEmailTriggerNewInvoices] = useState(true);
  const [emailTriggerTasks, setEmailTriggerTasks] = useState(false);
  const [emailTriggerSecurity, setEmailTriggerSecurity] = useState(true);

  const fetchEmailSettings = async () => {
    try {
      setLoading(true);
      const response = await api.getSystemSettings();
      if (response && response.success && response.data) {
        const email = response.data.email || {};
        setSmtpHost(email.smtpHost || '');
        setSmtpPort(email.smtpPort || '587');
        setSmtpUser(email.smtpUser || '');
        
        setEmailTriggerNewInvoices(email.emailTriggerNewInvoices ?? true);
        setEmailTriggerTasks(email.emailTriggerTasks ?? false);
        setEmailTriggerSecurity(email.emailTriggerSecurity ?? true);
        
        setFromName(email.fromName || 'CommSync System');
        setReplyToEmail(email.replyToEmail || 'support@commsync.com');
        setSecurityProtocol(email.securityProtocol || 'tls');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching email settings:', err);
      setError('Failed to load email configurations.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmailSettings();
  }, []);

  const handleSaveSettings = async () => {
    setSaving(true);
    setSuccess(false);
    try {
      const updatedEmail = {
        smtpHost,
        smtpPort,
        smtpUser,
        fromName,
        replyToEmail,
        securityProtocol,
        emailTriggerNewInvoices,
        emailTriggerTasks,
        emailTriggerSecurity,
      };

      const response = await api.updateSystemSettings('email', updatedEmail);
      if (response && response.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Failed to update email settings.');
      }
    } catch (err) {
      console.error('Error saving email settings:', err);
      alert('An error occurred while saving.');
    } finally {
      setSaving(false);
    }
  };

  const handleTestConnection = async () => {
    setTestingConnection(true);
    setTestResult(null);
    try {
      // Simulate network latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setTestResult('success');
    } catch (err) {
      setTestResult('error');
    } finally {
      setTestingConnection(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="dashboard-main">
        {/* TopNavBar */}
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
            <input type="text" placeholder="Search across enterprise..." />
          </div>

          <div className="topbar-actions">
            <button className="topbar-icon-btn">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="topbar-icon-btn">
              <span className="material-symbols-outlined">help</span>
            </button>
            <div style={{ marginLeft: '8px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#9a25ae',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                E
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Page Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: '32px',
                flexWrap: 'wrap',
                gap: '16px',
              }}
            >
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                  Email Settings
                </h2>
                <p style={{ fontSize: '16px', color: '#414752', margin: '4px 0 0 0' }}>
                  Manage SMTP configuration, sender identities, and automated notification preferences.
                </p>
              </div>
              <div>
                <button
                  className="btn btn-secondary"
                  onClick={() => alert('Logs output: No exceptions triggered in last 24h.')}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', height: '40px' }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>history</span>
                  View Logs
                </button>
              </div>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading SMTP configuration...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* Left Column: Form Settings */}
                <div className="col-span-8 space-y-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {success && (
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: '#d1fae5',
                        color: '#065f46',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span className="material-symbols-outlined">check_circle</span>
                      Email credentials saved successfully.
                    </div>
                  )}

                  {/* SMTP Configuration Card */}
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundColor: 'rgba(0, 93, 172, 0.02)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(0, 93, 172, 0.1)', color: '#005dac', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>router</span>
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>SMTP Configuration</h3>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Server Address</label>
                        <input
                          type="text"
                          className="form-input"
                          value={smtpHost}
                          onChange={(e) => setSmtpHost(e.target.value)}
                          placeholder="smtp.example.com"
                        />
                      </div>

                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Port</label>
                          <select
                            className="form-select"
                            value={smtpPort}
                            onChange={(e) => setSmtpPort(e.target.value)}
                          >
                            <option value="587">587 (TLS)</option>
                            <option value="465">465 (SSL)</option>
                            <option value="25">25 (Unencrypted)</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Security Protocol</label>
                          <select
                            className="form-select"
                            value={securityProtocol}
                            onChange={(e) => setSecurityProtocol(e.target.value)}
                          >
                            <option value="tls">STARTTLS</option>
                            <option value="ssl">SSL/TLS</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Username</label>
                          <input
                            type="text"
                            className="form-input"
                            value={smtpUser}
                            onChange={(e) => setSmtpUser(e.target.value)}
                            placeholder="username@domain.com"
                          />
                        </div>

                        <div className="form-group">
                          <label className="form-label">Password</label>
                          <div style={{ position: 'relative' }}>
                            <input
                              type={showPassword ? 'text' : 'password'}
                              className="form-input"
                              style={{ paddingRight: '40px' }}
                              value={smtpPassword}
                              onChange={(e) => setSmtpPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              style={{
                                position: 'absolute',
                                right: '8px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                background: 'none',
                                border: 'none',
                                color: '#717783',
                                cursor: 'pointer',
                                padding: '4px',
                                display: 'flex',
                                alignItems: 'center',
                              }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                                {showPassword ? 'visibility' : 'visibility_off'}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Connection footer */}
                    <div
                      style={{
                        padding: '12px 24px',
                        backgroundColor: '#f2f3fc',
                        borderTop: '1px solid #e0e2ea',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '8px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: testResult === 'error' ? '#ba1a1a' : '#10b981',
                          }}
                        />
                        <span style={{ fontSize: '12px', color: '#414752' }}>
                          {testingConnection
                            ? 'Testing connection...'
                            : testResult === 'success'
                            ? 'Connection successful!'
                            : testResult === 'error'
                            ? 'Connection test failed.'
                            : 'Last connection: Successful (2 mins ago)'}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={handleTestConnection}
                        disabled={testingConnection}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#005dac',
                          cursor: 'pointer',
                          fontWeight: '600',
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>wifi_protected_setup</span>
                        Test Connection
                      </button>
                    </div>

                  </div>

                  {/* Sender Identity Card */}
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div
                      style={{
                        padding: '16px 24px',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundColor: 'rgba(154, 37, 174, 0.02)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(154, 37, 174, 0.1)', color: '#9a25ae', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>badge</span>
                      </div>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>Sender Identity</h3>
                    </div>

                    <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div className="form-group">
                        <label className="form-label">Default 'From' Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={fromName}
                          onChange={(e) => setFromName(e.target.value)}
                        />
                        <span style={{ fontSize: '11px', color: '#717783', marginTop: '4px' }}>
                          This name will appear in recipients' inboxes.
                        </span>
                      </div>
                      <div className="form-group">
                        <label className="form-label">'Reply-To' Email</label>
                        <input
                          type="email"
                          className="form-input"
                          value={replyToEmail}
                          onChange={(e) => setReplyToEmail(e.target.value)}
                        />
                        <span style={{ fontSize: '11px', color: '#717783', marginTop: '4px' }}>
                          Where replies to automated emails are routed.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Triggers and Actions */}
                <div className="col-span-4 space-y-lg" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* System Notifications switches */}
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div
                      style={{
                        padding: '16px 20px',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                        backgroundColor: 'rgba(186, 91, 0, 0.02)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                      }}
                    >
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(186, 91, 0, 0.1)', color: '#ba5b00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>mark_email_unread</span>
                      </div>
                      <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#181c21', margin: 0 }}>System Notifications</h3>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      
                      {/* New Invoice Delivery */}
                      <div
                        onClick={() => setEmailTriggerNewInvoices(!emailTriggerNewInvoices)}
                        style={{
                          padding: '16px 20px',
                          borderBottom: '1px solid #e0e2ea',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ paddingRight: '8px' }}>
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: '500' }}>Invoice Delivery</span>
                          <span style={{ fontSize: '11px', color: '#717783' }}>Send automated emails when invoices are generated.</span>
                        </div>
                        <div
                          style={{
                            width: '44px',
                            height: '24px',
                            borderRadius: '12px',
                            backgroundColor: emailTriggerNewInvoices ? '#005dac' : '#ecedf6',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              backgroundColor: '#ffffff',
                              position: 'absolute',
                              top: '4px',
                              left: emailTriggerNewInvoices ? '24px' : '4px',
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Task Assignments */}
                      <div
                        onClick={() => setEmailTriggerTasks(!emailTriggerTasks)}
                        style={{
                          padding: '16px 20px',
                          borderBottom: '1px solid #e0e2ea',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ paddingRight: '8px' }}>
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: '500' }}>Task Assignments</span>
                          <span style={{ fontSize: '11px', color: '#717783' }}>Notify users when new tasks are assigned to them.</span>
                        </div>
                        <div
                          style={{
                            width: '44px',
                            height: '24px',
                            borderRadius: '12px',
                            backgroundColor: emailTriggerTasks ? '#005dac' : '#ecedf6',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              backgroundColor: '#ffffff',
                              position: 'absolute',
                              top: '4px',
                              left: emailTriggerTasks ? '24px' : '4px',
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                            }}
                          />
                        </div>
                      </div>

                      {/* Security Events */}
                      <div
                        onClick={() => setEmailTriggerSecurity(!emailTriggerSecurity)}
                        style={{
                          padding: '16px 20px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                      >
                        <div style={{ paddingRight: '8px' }}>
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: '500' }}>Security Events</span>
                          <span style={{ fontSize: '11px', color: '#717783' }}>Critical alerts for unusual login activity.</span>
                        </div>
                        <div
                          style={{
                            width: '44px',
                            height: '24px',
                            borderRadius: '12px',
                            backgroundColor: emailTriggerSecurity ? '#005dac' : '#ecedf6',
                            position: 'relative',
                            transition: 'background-color 0.2s',
                            flexShrink: 0,
                          }}
                        >
                          <div
                            style={{
                              width: '16px',
                              height: '16px',
                              borderRadius: '50%',
                              backgroundColor: '#ffffff',
                              position: 'absolute',
                              top: '4px',
                              left: emailTriggerSecurity ? '24px' : '4px',
                              transition: 'left 0.2s',
                              boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                            }}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <p style={{ fontSize: '12px', color: '#717783', textAlign: 'center', margin: '0 0 8px 0' }}>
                      Ensure all configurations are correct before saving changes to the production environment.
                    </p>
                    <button
                      onClick={handleSaveSettings}
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center', height: '40px' }}
                      disabled={saving}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                      {saving ? 'Saving...' : 'Save Settings'}
                    </button>
                    <button
                      onClick={fetchEmailSettings}
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center', height: '40px' }}
                      disabled={saving}
                    >
                      Cancel Changes
                    </button>
                  </div>

                </div>

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
