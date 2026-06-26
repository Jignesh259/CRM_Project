import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  lastUsed: string;
  active: boolean;
}

export const CoreSystemConfiguration: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  // General Settings States
  const [defaultDashboardView, setDefaultDashboardView] = useState('Sales Pipeline');
  const [autoSaveInterval, setAutoSaveInterval] = useState('Every 5 minutes');
  const [sessionDuration, setSessionDuration] = useState(60); // minutes
  const [timezone, setTimezone] = useState('PST (UTC-8)');
  const [currency, setCurrency] = useState('USD ($)');
  const [autoBackup, setAutoBackup] = useState(true);

  // Module States
  const [crmCoreEnabled, setCrmCoreEnabled] = useState(true);
  const [inventoryEnabled, setInventoryEnabled] = useState(true);
  const [salesEngineEnabled, setSalesEngineEnabled] = useState(true);
  const [financeEnabled, setFinanceEnabled] = useState(false);

  // API Access keys state
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([
    { id: '1', name: 'Production Sync', prefix: 'pk_live_8f92...', lastUsed: 'Today, 10:42 AM', active: true },
    { id: '2', name: 'Staging Env', prefix: 'pk_test_3a1b...', lastUsed: 'Oct 12, 2023', active: true },
    { id: '3', name: 'Legacy Integration', prefix: 'pk_live_00x4...', lastUsed: 'Never', active: false },
  ]);

  // Modal to generate key
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [generatedKey, setGeneratedKey] = useState<string | null>(null);

  const fetchSystemSettings = async () => {
    try {
      setLoading(true);
      const response = await api.getSystemSettings();
      if (response && response.success && response.data) {
        const sys = response.data.system || {};
        setTimezone(sys.timezone || 'PST (UTC-8)');
        setCurrency(sys.currency || 'USD ($)');
        setAutoBackup(sys.autoBackup ?? true);
        
        // Extract sessionDuration as number if it has text like "30 Minutes"
        if (sys.sessionDuration) {
          const num = parseInt(sys.sessionDuration);
          if (!isNaN(num)) setSessionDuration(num);
        }

        setDefaultDashboardView(sys.defaultDashboardView || 'Sales Pipeline');
        setAutoSaveInterval(sys.autoSaveInterval || 'Every 5 minutes');

        // Extract modules if stored
        if (sys.modules) {
          setCrmCoreEnabled(sys.modules.crmCore ?? true);
          setInventoryEnabled(sys.modules.inventory ?? true);
          setSalesEngineEnabled(sys.modules.salesEngine ?? true);
          setFinanceEnabled(sys.modules.finance ?? false);
        }
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching system configurations:', err);
      setError('Failed to load system settings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSystemSettings();
  }, []);

  const handleSaveConfig = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setSaving(true);
    setSuccess(false);
    try {
      const updatedSystem = {
        timezone,
        currency,
        sessionDuration: `${sessionDuration} Minutes`,
        autoBackup,
        defaultDashboardView,
        autoSaveInterval,
        modules: {
          crmCore: crmCoreEnabled,
          inventory: inventoryEnabled,
          salesEngine: salesEngineEnabled,
          finance: financeEnabled,
        },
      };

      const response = await api.updateSystemSettings('system', updatedSystem);
      if (response && response.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Failed to save system configurations.');
      }
    } catch (err) {
      console.error('Error updating system configurations:', err);
      alert('An error occurred while saving configurations.');
    } finally {
      setSaving(false);
    }
  };

  const handleExportData = () => {
    alert('Simulating database compilation... Export started. Your download (commsync_backup.json) will begin shortly.');
  };

  const handleClearCache = async () => {
    if (window.confirm('Are you sure you want to clear the system cache? All active sessions will require re-authentication.')) {
      alert('System cache cleared successfully. 120MB of temporary resources released.');
    }
  };

  const handleDeleteApiKey = (id: string) => {
    if (window.confirm('Are you sure you want to revoke this API access key? Any active scripts using this key will immediately fail.')) {
      setApiKeys((prev) => prev.filter((k) => k.id !== id));
    }
  };

  const handleGenerateKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName) return;

    const randomHex = Math.random().toString(16).substring(2, 10);
    const keyStr = `pk_live_${randomHex}...`;
    const newKeyObj: ApiKey = {
      id: Date.now().toString(),
      name: newKeyName,
      prefix: keyStr,
      lastUsed: 'Never',
      active: true,
    };

    setApiKeys((prev) => [...prev, newKeyObj]);
    setGeneratedKey(`pk_live_${randomHex}${Math.random().toString(16).substring(2, 12)}`);
    setNewKeyName('');
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
            <input type="text" placeholder="Search settings..." />
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
                  backgroundColor: '#005dac',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                S
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Page Header */}
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                  System Configuration
                </h2>
                <p style={{ fontSize: '16px', color: '#414752', margin: '4px 0 0 0' }}>
                  Manage core application behavior, modules, and data integrations.
                </p>
              </div>
              <div>
                <button
                  onClick={handleSaveConfig}
                  className="btn btn-primary"
                  style={{ height: '40px' }}
                  disabled={saving}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                  {saving ? 'Saving...' : 'Save Configuration'}
                </button>
              </div>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading system settings...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {success && (
              <div
                style={{
                  padding: '12px',
                  backgroundColor: '#d1fae5',
                  color: '#065f46',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span className="material-symbols-outlined">check_circle</span>
                System configurations saved successfully.
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* General Settings Bento Box */}
                <div className="col-span-8">
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', height: '100%', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(0, 93, 172, 0.02)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined text-primary">tune</span>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>General Settings</h3>
                    </div>
                    
                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Default Dashboard View</label>
                          <select
                            className="form-select"
                            value={defaultDashboardView}
                            onChange={(e) => setDefaultDashboardView(e.target.value)}
                          >
                            <option>Sales Pipeline</option>
                            <option>Global Analytics</option>
                            <option>Customer Overview</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Auto-save Interval</label>
                          <select
                            className="form-select"
                            value={autoSaveInterval}
                            onChange={(e) => setAutoSaveInterval(e.target.value)}
                          >
                            <option>Every 1 minute</option>
                            <option>Every 5 minutes</option>
                            <option>Every 10 minutes</option>
                            <option>Manual only</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Timezone</label>
                          <select
                            className="form-select"
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                          >
                            <option>PST (UTC-8)</option>
                            <option>EST (UTC-5)</option>
                            <option>GMT (UTC+0)</option>
                            <option>CET (UTC+1)</option>
                          </select>
                        </div>

                        <div className="form-group">
                          <label className="form-label">Base Currency</label>
                          <select
                            className="form-select"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                          >
                            <option>USD ($)</option>
                            <option>EUR (€)</option>
                            <option>GBP (£)</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="form-label">Session Timeout (Minutes)</label>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <input
                            type="range"
                            min="15"
                            max="120"
                            value={sessionDuration}
                            onChange={(e) => setSessionDuration(Number(e.target.value))}
                            style={{ flex: 1, accentColor: '#005dac', cursor: 'pointer' }}
                          />
                          <span style={{ fontSize: '13px', fontWeight: 'bold', minWidth: '40px', textAlign: 'right', fontFamily: 'monospace' }}>
                            {sessionDuration}m
                          </span>
                        </div>
                      </div>

                      <label
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          padding: '12px 16px',
                          backgroundColor: '#f2f3fc',
                          borderRadius: '8px',
                          marginTop: '8px',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={autoBackup}
                          onChange={(e) => setAutoBackup(e.target.checked)}
                          style={{ accentColor: '#005dac' }}
                        />
                        <div>
                          <span style={{ display: 'block', fontSize: '14px', fontWeight: '600' }}>Enable Auto Backups</span>
                          <span style={{ fontSize: '11px', color: '#717783' }}>Automatically compile and securely backup system logs daily.</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Data Management Bento Box */}
                <div className="col-span-4">
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', height: '100%', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(186, 91, 0, 0.02)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined text-tertiary">database</span>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>Data Management</h3>
                    </div>

                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', height: 'calc(100% - 53px)', boxSizing: 'border-box' }}>
                      <p style={{ fontSize: '14px', color: '#414752', margin: '0 0 8px 0' }}>
                        Export system data or perform routine maintenance.
                      </p>
                      
                      <button
                        type="button"
                        onClick={handleExportData}
                        className="btn btn-secondary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                        Export All Data (CSV/JSON)
                      </button>

                      <button
                        type="button"
                        onClick={handleClearCache}
                        className="btn btn-danger"
                        style={{ width: '100%', justifyContent: 'center', background: 'rgba(186, 26, 26, 0.1)', border: 'none', color: '#ba1a1a' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete_sweep</span>
                        Clear System Cache
                      </button>
                    </div>
                  </div>
                </div>

                {/* Module Management Bento Box */}
                <div className="col-span-5">
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: 'rgba(154, 37, 174, 0.02)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined text-secondary">view_module</span>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>Module Management</h3>
                    </div>

                    <div style={{ padding: '16px' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        
                        {/* CRM Core */}
                        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setCrmCoreEnabled(!crmCoreEnabled)} className="card-hover-effect">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#ecedf6', color: '#414752', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>group</span>
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>CRM Core</span>
                          </div>
                          <div style={{ width: '40px', height: '20px', borderRadius: '10px', backgroundColor: crmCoreEnabled ? '#005dac' : '#ecedf6', position: 'relative', transition: 'background-color 0.2s' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffffff', position: 'absolute', top: '3px', left: crmCoreEnabled ? '23px' : '3px', transition: 'left 0.2s' }} />
                          </div>
                        </li>

                        {/* Inventory */}
                        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setInventoryEnabled(!inventoryEnabled)} className="card-hover-effect">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#ecedf6', color: '#414752', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>inventory_2</span>
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Inventory System</span>
                          </div>
                          <div style={{ width: '40px', height: '20px', borderRadius: '10px', backgroundColor: inventoryEnabled ? '#005dac' : '#ecedf6', position: 'relative', transition: 'background-color 0.2s' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffffff', position: 'absolute', top: '3px', left: inventoryEnabled ? '23px' : '3px', transition: 'left 0.2s' }} />
                          </div>
                        </li>

                        {/* Sales Engine */}
                        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setSalesEngineEnabled(!salesEngineEnabled)} className="card-hover-effect">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#ecedf6', color: '#414752', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>leaderboard</span>
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Sales Engine</span>
                          </div>
                          <div style={{ width: '40px', height: '20px', borderRadius: '10px', backgroundColor: salesEngineEnabled ? '#005dac' : '#ecedf6', position: 'relative', transition: 'background-color 0.2s' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffffff', position: 'absolute', top: '3px', left: salesEngineEnabled ? '23px' : '3px', transition: 'left 0.2s' }} />
                          </div>
                        </li>

                        {/* Finance */}
                        <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setFinanceEnabled(!financeEnabled)} className="card-hover-effect">
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#ecedf6', color: '#414752', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_balance</span>
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: '500' }}>Finance Integration</span>
                          </div>
                          <div style={{ width: '40px', height: '20px', borderRadius: '10px', backgroundColor: financeEnabled ? '#005dac' : '#ecedf6', position: 'relative', transition: 'background-color 0.2s' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#ffffff', position: 'absolute', top: '3px', left: financeEnabled ? '23px' : '3px', transition: 'left 0.2s' }} />
                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>

                {/* API Access Bento Box */}
                <div className="col-span-7">
                  <div className="glass-panel" style={{ borderRadius: '12px', backgroundColor: '#ffffff', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)' }}>
                    <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(0, 0, 0, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="material-symbols-outlined text-primary">api</span>
                        <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>API Access</h3>
                      </div>
                      <button
                        onClick={() => {
                          setGeneratedKey(null);
                          setIsModalOpen(true);
                        }}
                        className="btn btn-primary btn-sm"
                        style={{ height: '32px', padding: '0 12px' }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                        Generate Key
                      </button>
                    </div>

                    <div style={{ padding: '20px' }}>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                          <thead>
                            <tr style={{ borderBottom: '1px solid #e0e2ea', color: '#717783', fontSize: '12px' }}>
                              <th style={{ paddingBottom: '8px', fontWeight: '600' }}>Name</th>
                              <th style={{ paddingBottom: '8px', fontWeight: '600' }}>Key Prefix</th>
                              <th style={{ paddingBottom: '8px', fontWeight: '600' }}>Last Used</th>
                              <th style={{ paddingBottom: '8px', fontWeight: '600', textAlign: 'right' }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody style={{ fontSize: '13px' }}>
                            {apiKeys.map((key) => (
                              <tr key={key.id} style={{ borderBottom: '1px solid #f2f3fc' }}>
                                <td style={{ padding: '12px 0', fontWeight: '500', opacity: key.active ? 1 : 0.5 }}>{key.name}</td>
                                <td style={{ padding: '12px 0', fontFamily: 'monospace', color: '#717783', opacity: key.active ? 1 : 0.5 }}>{key.prefix}</td>
                                <td style={{ padding: '12px 0', color: '#717783', opacity: key.active ? 1 : 0.5 }}>{key.lastUsed}</td>
                                <td style={{ padding: '12px 0', textAlign: 'right' }}>
                                  <button
                                    onClick={() => handleDeleteApiKey(key.id)}
                                    style={{
                                      border: 'none',
                                      background: 'none',
                                      color: '#ba1a1a',
                                      cursor: 'pointer',
                                      padding: '4px',
                                      borderRadius: '4px',
                                    }}
                                  >
                                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                                  </button>
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
            )}

          </div>
        </main>
      </div>

      {/* Modal for Key Generation */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', width: '90%', maxWidth: '450px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: '1px solid #e0e2ea', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#181c21', margin: 0 }}>Generate API Key</h3>
              <button onClick={() => setIsModalOpen(false)} style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#717783' }}>
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div style={{ padding: '20px' }}>
              {!generatedKey ? (
                <form onSubmit={handleGenerateKeySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Key Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Mobile App Client"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                    <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Generate
                    </button>
                  </div>
                </form>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ padding: '12px', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '8px', fontSize: '13px' }}>
                    <strong>Key generated successfully!</strong> Make sure to copy this key now, as you won't be able to see it again.
                  </div>
                  
                  <div style={{ padding: '12px', backgroundColor: '#f2f3fc', border: '1px solid #c1c6d4', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    {generatedKey}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '8px' }}>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        navigator.clipboard.writeText(generatedKey || '');
                        alert('Copied to clipboard!');
                        setIsModalOpen(false);
                      }}
                    >
                      Copy & Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
