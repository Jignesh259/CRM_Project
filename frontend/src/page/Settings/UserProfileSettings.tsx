import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import { useAuth } from '../../components/AuthContext';
import '../../style/StitchDashboard.css';

export const UserProfileSettings: React.FC = () => {
  const { user, refreshUser } = useAuth();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Profile State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [avatar, setAvatar] = useState('');
  
  // Feedback
  const [profileSuccess, setProfileSuccess] = useState(false);
  const [profileSaving, setProfileSaving] = useState(false);

  const fetchProfileSettings = async () => {
    try {
      setLoading(true);
      if (user) {
        setFullName(user.full_name || '');
        setPhone(user.phone || '');
        setJobTitle(user.roles && user.roles.length > 0 ? user.roles[0].charAt(0).toUpperCase() + user.roles[0].slice(1) : 'Member');
      } else {
        const response = await api.getSystemSettings();
        if (response && response.success && response.data) {
          const profile = response.data.profile || {};
          setFullName(profile.fullName || '');
          setPhone(profile.phone || '');
          setJobTitle(profile.jobTitle || '');
          setAvatar(profile.avatar || '');
        }
      }
      setError(null);
    } catch (err) {
      console.error('Error fetching system settings for profile:', err);
      setError('Failed to load profile settings.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      setFullName(user.full_name || '');
      setPhone(user.phone || '');
      setJobTitle(user.roles && user.roles.length > 0 ? user.roles[0].charAt(0).toUpperCase() + user.roles[0].slice(1) : 'Member');
      setLoading(false);
    } else {
      fetchProfileSettings();
    }
  }, [user]);

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setProfileSaving(true);
    setProfileSuccess(false);
    try {
      if (user) {
        await api.updateUser(user.id, {
          name: fullName,
          phone: phone
        });
        await refreshUser();
      }

      const updatedProfile = {
        fullName,
        phone,
        jobTitle,
        avatar
      };
      
      const response = await api.updateSystemSettings('profile', updatedProfile);
      if (response && response.success) {
        setProfileSuccess(true);
        setTimeout(() => setProfileSuccess(false), 3000);
      } else {
        alert('Failed to save profile changes.');
      }
    } catch (err) {
      console.error('Error saving profile settings:', err);
      alert('An error occurred while saving.');
    } finally {
      setProfileSaving(false);
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
                {fullName ? fullName.slice(0, 2).toUpperCase() : 'JD'}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: '#f9f9ff', minHeight: 'calc(100vh - 64px)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header */}
            <div style={{ marginBottom: '24px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#181c21', margin: 0 }}>
                Profile Settings
              </h2>
              <p style={{ fontSize: '14px', color: '#414752', margin: '4px 0 0 0' }}>
                Manage your user profile details, credentials, and notifications.
              </p>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0', color: '#414752' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading settings...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* Left Column: Navigation Sidebar */}
                <div className="col-span-3">
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
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>person</span>
                        User Profile
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
                        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>domain</span>
                        Organization Info
                      </a>
                    </nav>
                  </div>
                </div>

                {/* Right Column: Forms Panel */}
                <div className="col-span-9" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* General Profile Info form */}
                  <div className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: '#ffffff' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#181c21', margin: '0 0 20px 0' }}>
                      General Information
                    </h3>
                    
                    {profileSuccess && (
                      <div
                        style={{
                          padding: '12px',
                          backgroundColor: '#d1fae5',
                          color: '#065f46',
                          borderRadius: '8px',
                          marginBottom: '20px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <span className="material-symbols-outlined">check_circle</span>
                        Profile settings updated successfully.
                      </div>
                    )}
                    
                    {/* Profile Header Block */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          borderRadius: '12px',
                          backgroundColor: '#ecedf6',
                          color: '#717783',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '32px',
                          fontWeight: 'bold',
                        }}
                      >
                        {fullName ? fullName.slice(0, 2).toUpperCase() : 'JD'}
                      </div>
                      <div>
                        <p style={{ fontSize: '14px', color: '#414752', margin: '0 0 8px 0' }}>
                          Upload your profile photo. This will be visible to your team members.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm"
                            onClick={() => alert('Photo upload trigger')}
                          >
                            Upload Photo
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            style={{ background: 'transparent', border: 'none', color: '#ba1a1a', cursor: 'pointer' }}
                            onClick={() => setAvatar('')}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSaveProfile} className="form-grid">
                      <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-input"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Job Title</label>
                        <input
                          type="text"
                          className="form-input"
                          value={jobTitle}
                          onChange={(e) => setJobTitle(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="text"
                          className="form-input"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      
                      <div className="form-group full-width" style={{ marginTop: '16px', borderTop: '1px solid #e0e2ea', paddingTop: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={fetchProfileSettings}
                            disabled={profileSaving}
                          >
                            Discard
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={profileSaving}
                          >
                            {profileSaving ? 'Saving...' : 'Save Changes'}
                          </button>
                        </div>
                      </div>
                    </form>
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
