import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

export const VisualThemeCustomization: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  // Theme states
  const [mode, setMode] = useState<'light' | 'dark' | 'system'>('light');
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  const [fontSize, setFontSize] = useState<string>('medium'); // small, medium, large
  const [primaryColor, setPrimaryColor] = useState('#1976D2');
  
  // Custom temp state for slider (1 = small, 2 = medium, 3 = large)
  const [fontSliderVal, setFontSliderVal] = useState(2);

  const fetchThemeSettings = async () => {
    try {
      setLoading(true);
      const response = await api.getSystemSettings();
      if (response && response.success && response.data) {
        const theme = response.data.theme || {};
        setMode(theme.mode || 'light');
        setPrimaryColor(theme.primaryColor || '#1976D2');
        setDensity(theme.density || 'comfortable');
        setFontSize(theme.fontSize || 'medium');
        
        if (theme.fontSize === 'small') setFontSliderVal(1);
        else if (theme.fontSize === 'large') setFontSliderVal(3);
        else setFontSliderVal(2);
      }
      setError(null);
    } catch (err) {
      console.error('Error loading theme settings:', err);
      setError('Failed to load visual theme preferences.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThemeSettings();
  }, []);

  // Update slider conversion
  useEffect(() => {
    if (fontSliderVal === 1) setFontSize('small');
    else if (fontSliderVal === 3) setFontSize('large');
    else setFontSize('medium');
  }, [fontSliderVal]);

  const handleApplyTheme = async () => {
    setSaving(true);
    setSuccess(false);
    try {
      const themeData = {
        mode,
        primaryColor,
        density,
        fontSize,
      };

      const response = await api.updateSystemSettings('theme', themeData);
      if (response && response.success) {
        setSuccess(true);
        // Visual toggle on HTML element for live demo
        if (mode === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else if (mode === 'light') {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        } else {
          // System preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert('Failed to update visual settings.');
      }
    } catch (err) {
      console.error('Error updating theme settings:', err);
      alert('An error occurred while applying theme.');
    } finally {
      setSaving(false);
    }
  };

  const handleResetDefaults = () => {
    setMode('light');
    setDensity('comfortable');
    setFontSliderVal(2);
    setPrimaryColor('#1976D2');
  };

  const colorPresets = [
    { name: 'Default Blue', hex: '#1976D2' },
    { name: 'Purple', hex: '#9A25AE' },
    { name: 'Teal', hex: '#00897B' },
    { name: 'Red', hex: '#E53935' },
    { name: 'Orange', hex: '#F57C00' },
    { name: 'Slate', hex: '#455A64' },
  ];

  return (
    <div className={`dashboard-layout ${mode === 'dark' ? 'dark' : ''}`}>
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
                  backgroundColor: primaryColor,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                T
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ backgroundColor: mode === 'dark' ? '#181c21' : '#f9f9ff', minHeight: 'calc(100vh - 64px)', color: mode === 'dark' ? '#eff0f9' : '#181c21' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Page Header */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '600', margin: 0 }}>
                Theme Settings
              </h2>
              <p style={{ fontSize: '16px', color: '#717783', margin: '4px 0 0 0' }}>
                Customize your workspace appearance and density.
              </p>
            </div>

            {loading && (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <span className="material-symbols-outlined" style={{ animation: 'spin 1.5s linear infinite', fontSize: '32px' }}>
                  sync
                </span>
                <p style={{ marginTop: '12px' }}>Loading theme options...</p>
              </div>
            )}

            {error && (
              <div style={{ padding: '16px', backgroundColor: '#ffdad6', color: '#93000a', borderRadius: '8px', marginBottom: '24px' }}>
                {error}
              </div>
            )}

            {!loading && !error && (
              <div className="bento-grid">
                
                {/* Left side: Configuration Details */}
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
                      Theme configurations updated successfully.
                    </div>
                  )}

                  {/* Mode Card */}
                  <section className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: mode === 'dark' ? '#2d3037' : '#ffffff' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ color: primaryColor }}>light_mode</span>
                      Appearance Mode
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                      
                      {/* Light Card */}
                      <button
                        onClick={() => setMode('light')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px',
                          borderRadius: '8px',
                          border: mode === 'light' ? `2px solid ${primaryColor}` : '2px solid #e0e2ea',
                          backgroundColor: mode === 'light' ? 'rgba(0, 93, 172, 0.05)' : 'transparent',
                          cursor: 'pointer',
                          color: mode === 'dark' ? '#eff0f9' : '#181c21',
                        }}
                      >
                        <div style={{ width: '100%', height: '80px', backgroundColor: '#f9f9ff', borderRadius: '4px', border: '1px solid #e0e2ea', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                          <div style={{ height: '20px', backgroundColor: '#ecedf6', borderBottom: '1px solid #e0e2ea' }} />
                          <div style={{ flex: 1, display: 'flex', padding: '6px', gap: '6px' }}>
                            <div style={{ width: '20px', backgroundColor: '#ecedf6', borderRadius: '2px' }} />
                            <div style={{ flex: 1, backgroundColor: '#ffffff', borderRadius: '2px', border: '1px solid #e0e2ea' }} />
                          </div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: mode === 'light' ? 'bold' : '500' }}>Light</span>
                      </button>

                      {/* Dark Card */}
                      <button
                        onClick={() => setMode('dark')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px',
                          borderRadius: '8px',
                          border: mode === 'dark' ? `2px solid ${primaryColor}` : '2px solid #e0e2ea',
                          backgroundColor: mode === 'dark' ? 'rgba(25, 118, 210, 0.15)' : 'transparent',
                          cursor: 'pointer',
                          color: mode === 'dark' ? '#eff0f9' : '#181c21',
                        }}
                      >
                        <div style={{ width: '100%', height: '80px', backgroundColor: '#2d3037', borderRadius: '4px', border: '1px solid #414752', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                          <div style={{ height: '20px', backgroundColor: '#181c21', borderBottom: '1px solid #414752' }} />
                          <div style={{ flex: 1, display: 'flex', padding: '6px', gap: '6px' }}>
                            <div style={{ width: '20px', backgroundColor: '#181c21', borderRadius: '2px' }} />
                            <div style={{ flex: 1, backgroundColor: '#414752', borderRadius: '2px', border: '1px solid #414752' }} />
                          </div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: mode === 'dark' ? 'bold' : '500' }}>Dark</span>
                      </button>

                      {/* System Card */}
                      <button
                        onClick={() => setMode('system')}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '12px',
                          borderRadius: '8px',
                          border: mode === 'system' ? `2px solid ${primaryColor}` : '2px solid #e0e2ea',
                          backgroundColor: mode === 'system' ? 'rgba(0, 93, 172, 0.05)' : 'transparent',
                          cursor: 'pointer',
                          color: mode === 'dark' ? '#eff0f9' : '#181c21',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '80px',
                            borderRadius: '4px',
                            border: '1px solid #e0e2ea',
                            background: 'linear-gradient(135deg, #f9f9ff 50%, #2d3037 50%)',
                            position: 'relative',
                          }}
                        >
                          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="material-symbols-outlined" style={{ backgroundColor: '#ffffff', borderRadius: '50%', padding: '4px', color: '#717783', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                              devices
                            </span>
                          </div>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: mode === 'system' ? 'bold' : '500' }}>System</span>
                      </button>
                      
                    </div>
                  </section>

                  {/* Density and Typography grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                    
                    {/* Sidebar Density */}
                    <section className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: mode === 'dark' ? '#2d3037' : '#ffffff' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="material-symbols-outlined" style={{ color: primaryColor }}>view_compact</span>
                        Sidebar Density
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        
                        <label
                          onClick={() => setDensity('comfortable')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px',
                            borderRadius: '8px',
                            border: density === 'comfortable' ? `1px solid ${primaryColor}` : '1px solid #e0e2ea',
                            backgroundColor: density === 'comfortable' ? 'rgba(0, 93, 172, 0.05)' : 'transparent',
                            cursor: 'pointer',
                          }}
                        >
                          <div>
                            <span style={{ display: 'block', fontSize: '14px', fontWeight: '600' }}>Comfortable</span>
                            <span style={{ fontSize: '12px', color: '#717783' }}>Standard 24px spacing</span>
                          </div>
                          <input
                            type="radio"
                            name="density"
                            checked={density === 'comfortable'}
                            onChange={() => setDensity('comfortable')}
                            style={{ accentColor: primaryColor }}
                          />
                        </label>

                        <label
                          onClick={() => setDensity('compact')}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px',
                            borderRadius: '8px',
                            border: density === 'compact' ? `1px solid ${primaryColor}` : '1px solid #e0e2ea',
                            backgroundColor: density === 'compact' ? 'rgba(0, 93, 172, 0.05)' : 'transparent',
                            cursor: 'pointer',
                          }}
                        >
                          <div>
                            <span style={{ display: 'block', fontSize: '14px', fontWeight: '600' }}>Compact</span>
                            <span style={{ fontSize: '12px', color: '#717783' }}>Dense 12px spacing</span>
                          </div>
                          <input
                            type="radio"
                            name="density"
                            checked={density === 'compact'}
                            onChange={() => setDensity('compact')}
                            style={{ accentColor: primaryColor }}
                          />
                        </label>

                      </div>
                    </section>

                    {/* Typography Scale */}
                    <section className="glass-panel" style={{ borderRadius: '12px', padding: '24px', backgroundColor: mode === 'dark' ? '#2d3037' : '#ffffff' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className="material-symbols-outlined" style={{ color: primaryColor }}>text_format</span>
                        Typography Scale
                      </h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <input
                          type="range"
                          min="1"
                          max="3"
                          value={fontSliderVal}
                          onChange={(e) => setFontSliderVal(Number(e.target.value))}
                          style={{ width: '100%', accentColor: primaryColor, cursor: 'pointer' }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#717783' }}>
                          <span style={{ fontWeight: fontSize === 'small' ? 'bold' : '400' }}>Small</span>
                          <span style={{ color: fontSize === 'medium' ? primaryColor : '#717783', fontWeight: fontSize === 'medium' ? 'bold' : '400' }}>Medium</span>
                          <span style={{ fontWeight: fontSize === 'large' ? 'bold' : '400' }}>Large</span>
                        </div>
                        <div style={{ padding: '8px', backgroundColor: mode === 'dark' ? '#181c21' : '#f2f3fc', borderRadius: '4px', border: '1px solid #e0e2ea', marginTop: '8px' }}>
                          <p style={{ fontSize: fontSize === 'small' ? '12px' : fontSize === 'large' ? '16px' : '14px', margin: 0 }}>
                            The quick brown fox jumps over the lazy dog.
                          </p>
                        </div>
                      </div>
                    </section>

                  </div>

                </div>

                {/* Right side: Color & Action panel */}
                <div className="col-span-4 space-y-lg" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  
                  {/* Brand Color Swatches */}
                  <section className="glass-panel" style={{ borderRadius: '12px', padding: '20px', backgroundColor: mode === 'dark' ? '#2d3037' : '#ffffff' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="material-symbols-outlined" style={{ color: primaryColor }}>palette</span>
                      Brand Color
                    </h3>
                    <p style={{ fontSize: '12px', color: '#717783', margin: '0 0 16px 0' }}>
                      Select a primary accent color for active states and primary buttons.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '16px' }}>
                      {colorPresets.map((preset) => (
                        <button
                          key={preset.hex}
                          onClick={() => setPrimaryColor(preset.hex)}
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            borderRadius: '50%',
                            backgroundColor: preset.hex,
                            border: 'none',
                            cursor: 'pointer',
                            position: 'relative',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                          }}
                        >
                          {primaryColor === preset.hex && (
                            <span
                              className="material-symbols-outlined"
                              style={{
                                color: 'white',
                                fontSize: '16px',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                              }}
                            >
                              check
                            </span>
                          )}
                        </button>
                      ))}
                      
                      {/* Color Picker trigger */}
                      <button
                        onClick={() => {
                          const picker = document.getElementById('custom-color-picker');
                          if (picker) picker.click();
                        }}
                        style={{
                          width: '100%',
                          aspectRatio: '1',
                          borderRadius: '50%',
                          backgroundColor: '#ecedf6',
                          border: '1px solid #c1c6d4',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#414752' }}>
                          add
                        </span>
                        <input
                          id="custom-color-picker"
                          type="color"
                          value={primaryColor}
                          onChange={(e) => setPrimaryColor(e.target.value)}
                          style={{ display: 'none' }}
                        />
                      </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', backgroundColor: mode === 'dark' ? '#181c21' : '#f2f3fc', borderRadius: '6px', border: '1px solid #e0e2ea' }}>
                      <span style={{ fontSize: '11px', fontFamily: 'monospace', color: '#717783' }}>HEX</span>
                      <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{primaryColor.toUpperCase()}</span>
                    </div>
                  </section>

                  {/* Actions */}
                  <section className="glass-panel" style={{ borderRadius: '12px', padding: '20px', backgroundColor: mode === 'dark' ? '#2d3037' : '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button
                      onClick={handleApplyTheme}
                      className="btn btn-primary"
                      style={{
                        backgroundColor: primaryColor,
                        width: '100%',
                        justifyContent: 'center',
                        fontWeight: '600',
                      }}
                      disabled={saving}
                    >
                      {saving ? 'Applying...' : 'Apply Theme'}
                    </button>
                    <button
                      onClick={handleResetDefaults}
                      className="btn btn-secondary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      disabled={saving}
                    >
                      Reset to Default
                    </button>
                  </section>

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
