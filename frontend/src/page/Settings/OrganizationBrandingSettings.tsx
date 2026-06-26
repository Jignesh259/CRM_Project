import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

export const OrganizationBrandingSettings: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form states
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('Technology & Software');
  const [taxId, setTaxId] = useState('');
  const [address, setAddress] = useState('');
  const [logo, setLogo] = useState('');
  const [primaryLanguage, setPrimaryLanguage] = useState('English (US)');
  const [baseCurrency, setBaseCurrency] = useState('USD - US Dollar');
  const [timezone, setTimezone] = useState('(GMT-08:00) Pacific Time (US & Canada)');

  const fetchBrandingSettings = async () => {
    try {
      setLoading(true);
      const response = await api.getSystemSettings();
      if (response && response.success && response.data) {
        const org = response.data.organization || {};
        setCompanyName(org.companyName || '');
        setTaxId(org.taxId || '');
        setAddress(org.address || '');
        setLogo(org.logo || '');
        setIndustry(org.industry || 'Technology & Software');
        setPrimaryLanguage(org.primaryLanguage || 'English (US)');
        setBaseCurrency(org.baseCurrency || 'USD - US Dollar');
        setTimezone(org.timezone || '(GMT-08:00) Pacific Time (US & Canada)');
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching organization settings:', err);
      setError('Failed to load branding configurations.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrandingSettings();
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSuccess(false);
    try {
      const updatedOrg = {
        companyName,
        industry,
        taxId,
        address,
        logo,
        primaryLanguage,
        baseCurrency,
        timezone,
      };

      const response = await api.updateSystemSettings('organization', updatedOrg);
      if (response && response.success) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Failed to update organization settings.');
      }
    } catch (err) {
      console.error('Error saving organization settings:', err);
      alert('An error occurred while saving organization settings.');
    } finally {
      setSaving(false);
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
                C
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)', position: 'relative' }}>
          
          {/* Decorative gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '384px',
              background: 'linear-gradient(to bottom left, rgba(25, 118, 210, 0.05), transparent)',
              borderBottomLeftRadius: '100px',
              pointerEvents: 'none',
            }}
          />

          <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            
            {/* Page Header */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                Company Settings
              </h2>
              <p style={{ fontSize: '16px', color: '#414752', margin: '4px 0 0 0' }}>
                Manage your organization's identity, localization, and core information.
              </p>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading organization settings...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* Left side: Navigation links */}
                <div className="col-span-4">
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '16px', backgroundColor: '#ffffff' }}>
                    <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          backgroundColor: '#f2f3fc',
                          color: '#005dac',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '14px',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>domain</span>
                        Organization Info
                      </a>
                      <a
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          color: '#414752',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f2f3fc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>public</span>
                        Localization
                      </a>
                      <a
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          color: '#414752',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f2f3fc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>group_add</span>
                        Team & Roles
                      </a>
                      <a
                        href="#"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          color: '#414752',
                          textDecoration: 'none',
                          fontSize: '14px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f2f3fc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>credit_card</span>
                        Billing
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Right side: Forms and fields */}
                <div className="col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
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
                      Organization settings updated successfully.
                    </div>
                  )}

                  {/* Logo Upload Card */}
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#181c21', margin: '0 0 16px 0' }}>
                      Company Logo
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', flexWrap: 'wrap' }}>
                      <div
                        style={{
                          width: '96px',
                          height: '96px',
                          borderRadius: '8px',
                          backgroundColor: '#ecedf6',
                          border: '1px solid #c1c6d4',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                          flexShrink: 0,
                        }}
                      >
                        {logo ? (
                          <img src={logo} alt="Company Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        ) : (
                          <span className="material-symbols-outlined" style={{ fontSize: '36px', color: '#717783' }}>
                            image
                          </span>
                        )}
                      </div>
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        <p style={{ fontSize: '14px', color: '#414752', margin: '0 0 16px 0' }}>
                          Upload your organization's logo. This will be visible on invoices, reports, and team portals.
                        </p>
                        <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => {
                              const newUrl = prompt('Enter image URL for logo:');
                              if (newUrl !== null) setLogo(newUrl);
                            }}
                          >
                            Upload Image
                          </button>
                          {logo && (
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              style={{ background: 'transparent', border: 'none', color: '#ba1a1a', cursor: 'pointer' }}
                              onClick={() => setLogo('')}
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <p style={{ fontSize: '12px', color: '#717783', margin: 0 }}>
                          Recommended: 512x512px, PNG or SVG.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Form fields */}
                  <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    
                    {/* General Information */}
                    <div className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#181c21', margin: '0 0 20px 0' }}>
                        General Information
                      </h3>
                      
                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Organization Name</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="Enter company name"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Industry</label>
                          <select
                            className="form-select"
                            value={industry}
                            onChange={(e) => setIndustry(e.target.value)}
                          >
                            <option>Technology & Software</option>
                            <option>Manufacturing</option>
                            <option>Financial Services</option>
                            <option>Healthcare</option>
                          </select>
                        </div>
                        
                        <div className="form-group full-width">
                          <label className="form-label">Tax ID / VAT Number</label>
                          <input
                            type="text"
                            className="form-input"
                            placeholder="e.g. GB123456789"
                            value={taxId}
                            onChange={(e) => setTaxId(e.target.value)}
                          />
                        </div>

                        <div className="form-group full-width">
                          <label className="form-label">Headquarters Address</label>
                          <textarea
                            className="form-textarea"
                            placeholder="Enter full address"
                            rows={3}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Localization */}
                    <div className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#181c21', margin: '0 0 20px 0' }}>
                        Localization
                      </h3>
                      
                      <div className="form-grid">
                        <div className="form-group">
                          <label className="form-label">Primary Language</label>
                          <select
                            className="form-select"
                            value={primaryLanguage}
                            onChange={(e) => setPrimaryLanguage(e.target.value)}
                          >
                            <option>English (US)</option>
                            <option>English (UK)</option>
                            <option>Spanish</option>
                            <option>French</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label className="form-label">Base Currency</label>
                          <select
                            className="form-select"
                            value={baseCurrency}
                            onChange={(e) => setBaseCurrency(e.target.value)}
                          >
                            <option>USD - US Dollar</option>
                            <option>EUR - Euro</option>
                            <option>GBP - British Pound</option>
                          </select>
                        </div>
                        <div className="form-group full-width">
                          <label className="form-label">Timezone</label>
                          <select
                            className="form-select"
                            value={timezone}
                            onChange={(e) => setTimezone(e.target.value)}
                          >
                            <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                            <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                            <option>(GMT+00:00) Greenwich Mean Time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Submit Actions */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: '16px',
                        borderTop: '1px solid #e0e2ea',
                        paddingTop: '20px',
                      }}
                    >
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={fetchBrandingSettings}
                        disabled={saving}
                      >
                        Discard Changes
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ backgroundColor: '#1976D2' }}
                        disabled={saving}
                      >
                        {saving ? 'Updating...' : 'Update Organization'}
                      </button>
                    </div>

                  </form>
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
