import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const BrandManagementBoard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [brands, setBrands] = useState<any[]>([]);
  const [filter, setFilter] = useState('All'); // All, Active, Archived
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Slide-out panel states
  const [panelOpen, setPanelOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);

  // Form states
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true); // Active

  const loadBrands = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getBrands();
      if (res.success && res.data) {
        setBrands(res.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load brands');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBrands();
  }, []);

  const handleOpenCreatePanel = () => {
    setIsEditing(false);
    setSelectedBrand(null);
    setName('');
    setLogo('');
    setWebsite('');
    setDescription('');
    setStatus(true);
    setPanelOpen(true);
  };

  const handleOpenEditPanel = (brand: any) => {
    setIsEditing(true);
    setSelectedBrand(brand);
    setName(brand.name || '');
    setLogo(brand.logo || '');
    setWebsite(brand.website || '');
    setDescription(brand.description || '');
    setStatus(brand.status === 'Active');
    setPanelOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert('Brand Name is required.');
      return;
    }

    try {
      const payload = {
        name,
        logo: logo || 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSyeL2AwCmeY1Dz3ZLhE5rthH27PMwah7RECIzd8X4P3PC2JJX0QYzvEHlPgU-w9T0Ha-EFWE7mFUvPAneKImOHlhJtt09pAIC572UQVAdELsSkww3_aGgfsNIOorAqoOlMFN31gPoEpp1RVmzenvRN2YIJc_MWnFwvt31fGS_zGaxEYIzEAAbQJK3bB9YqgN3LjOmFVGvq-vApKenY64U9jzx8GtRwI90sRQHqOcVGhFxVCxvmNMyTkfWky1OG0gs61c5WmlWHvE',
        website,
        description,
        status: status ? 'Active' : 'Inactive'
      };

      if (isEditing && selectedBrand) {
        const res = await api.updateBrand(selectedBrand.id, payload);
        if (res.success) {
          alert('Brand updated successfully!');
        }
      } else {
        const res = await api.createBrand(payload);
        if (res.success) {
          alert('Brand registered successfully!');
        }
      }
      setPanelOpen(false);
      loadBrands();
    } catch (err: any) {
      alert(err.message || 'Failed to save brand');
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this brand? Products associated with this brand will remain but have brand unset.')) return;
    try {
      const res = await api.deleteBrand(id);
      if (res.success) {
        alert('Brand deleted successfully.');
        loadBrands();
        if (selectedBrand && selectedBrand.id === id) {
          setPanelOpen(false);
        }
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete brand');
    }
  };

  const filteredBrands = brands.filter((b) => {
    if (filter === 'Active') return b.status === 'Active';
    if (filter === 'Archived') return b.status === 'Inactive';
    return true;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Brands</h1>
          <div className="topbar-actions">
            <button onClick={handleOpenCreatePanel} className="btn btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add_business</span>
              Add Brand
            </button>
          </div>
        </header>

        {/* Page Content wrapper */}
        <main className="page-content" style={{ overflowY: 'auto', flex: 1, position: 'relative' }}>
          {/* Breadcrumb & Header Title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b', marginBottom: '6px' }}>
                <span>Inventory</span>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
                <span style={{ color: '#3b82f6', fontWeight: 500 }}>Brands</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Brand Management</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0' }}>Manage partner brands, view product distributions, and toggle active status.</p>
            </div>
            <button 
              onClick={handleOpenCreatePanel} 
              className="btn btn-primary" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add_business</span>
              Add Brand
            </button>
          </div>

          {/* Filter Bar */}
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '24px', 
              backgroundColor: 'white', 
              padding: '12px 16px', 
              borderRadius: '8px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All', 'Active', 'Archived'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    backgroundColor: filter === f ? '#f1f5f9' : 'transparent',
                    color: filter === f ? '#0f172a' : '#64748b',
                    transition: 'all 0.2s'
                  }}
                >
                  {f === 'All' ? 'All Brands' : f}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => alert('Filtering options')}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>filter_list</span> Filter
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }} onClick={() => alert('Sorting options')}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>sort</span> Sort
              </span>
            </div>
          </div>

          {/* Bento Grid */}
          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading brands...</div>
          ) : error ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', paddingBottom: '60px' }}>
              
              {/* Actual Cards */}
              {filteredBrands.map((b) => {
                const isActive = b.status === 'Active';
                return (
                  <div
                    key={b.id}
                    onClick={() => handleOpenEditPanel(b)}
                    style={{
                      backgroundColor: 'white',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '20px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      cursor: 'pointer',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      opacity: isActive ? 1 : 0.75,
                      transition: 'all 0.2s ease-in-out'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.05)';
                      const actions = e.currentTarget.querySelector('.card-actions') as HTMLElement;
                      if (actions) actions.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                      const actions = e.currentTarget.querySelector('.card-actions') as HTMLElement;
                      if (actions) actions.style.opacity = '0';
                    }}
                  >
                    {/* Hover actions */}
                    <div 
                      className="card-actions"
                      style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        display: 'flex',
                        gap: '6px',
                        opacity: 0,
                        transition: 'opacity 0.2s'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button 
                        onClick={() => handleOpenEditPanel(b)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#64748b',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                        title="Edit Details"
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_vert</span>
                      </button>
                    </div>

                    {/* Logo & Name Row */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                      <div 
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '8px',
                          border: '1px solid #e2e8f0',
                          backgroundColor: '#f8fafc',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '6px',
                          boxSizing: 'border-box',
                          flexShrink: 0
                        }}
                      >
                        {b.logo ? (
                          <img 
                            src={b.logo} 
                            alt={b.name} 
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                          />
                        ) : (
                          <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#94a3b8' }}>storefront</span>
                        )}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0f172a' }}>{b.name}</h3>
                        <span 
                          style={{
                            display: 'inline-block',
                            marginTop: '4px',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            backgroundColor: isActive ? '#d1fae5' : '#f1f5f9',
                            color: isActive ? '#065f46' : '#475569',
                            fontSize: '9px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {b.status}
                        </span>
                      </div>
                    </div>

                    {/* Statistics Grid */}
                    <div 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '12px', 
                        borderTop: '1px solid #f1f5f9', 
                        paddingTop: '16px',
                        marginTop: 'auto'
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Products</span>
                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{b.productsCount || 0}</span>
                      </div>
                      <div>
                        <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Last Restock</span>
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#1e293b' }}>{b.lastRestock || 'N/A'}</span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Add New Brand Card Trigger */}
              <button
                onClick={handleOpenCreatePanel}
                style={{
                  backgroundColor: '#f8fafc',
                  border: '2px dashed #cbd5e1',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: '170px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  outline: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.backgroundColor = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#f1f5f9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#64748b',
                    marginBottom: '12px',
                    transition: 'all 0.2s'
                  }}
                >
                  <span className="material-symbols-outlined">add</span>
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#1e293b', margin: '0 0 4px' }}>Register New Brand</h3>
                <p style={{ fontSize: '12px', color: '#64748b', margin: 0, textAlign: 'center', lineHeight: '1.4' }}>
                  Add a new partner manufacturer to your system.
                </p>
              </button>

            </div>
          )}

          {/* Slide-out Overlay Panel */}
          {panelOpen && (
            <>
              {/* Backdrop */}
              <div 
                onClick={() => setPanelOpen(false)}
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.3)',
                  backdropFilter: 'blur(4px)',
                  zIndex: 40
                }}
              />

              {/* Panel Container */}
              <div 
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  height: '100%',
                  width: '400px',
                  backgroundColor: 'white',
                  boxShadow: '-4px 0 24px rgba(0,0,0,0.15)',
                  zIndex: 50,
                  display: 'flex',
                  flexDirection: 'column',
                  borderLeft: '1px solid #e2e8f0',
                  boxSizing: 'border-box'
                }}
              >
                {/* Header */}
                <div style={{ padding: '24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc' }}>
                  <div>
                    <h2 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#0f172a' }}>
                      {isEditing ? 'Edit Brand' : 'Register New Brand'}
                    </h2>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: '2px 0 0' }}>Enter details for the partner brand.</p>
                  </div>
                  <button 
                    onClick={() => setPanelOpen(false)}
                    style={{
                      border: 'none',
                      background: 'none',
                      color: '#64748b',
                      cursor: 'pointer',
                      padding: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      borderRadius: '50%',
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSave} style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
                  
                  {/* Brand Logo Upload Simulation */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Brand Logo</label>
                    <div 
                      onClick={() => alert('Brand logo upload simulation. Path will use default placeholder or prefilled URL.')}
                      style={{
                        border: '2px dashed #cbd5e1',
                        borderRadius: '8px',
                        padding: '24px 12px',
                        textAlign: 'center',
                        backgroundColor: '#f8fafc',
                        cursor: 'pointer'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '32px', color: '#94a3b8', marginBottom: '8px', display: 'block' }}>cloud_upload</span>
                      <p style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', margin: '0 0 2px' }}>Drag &amp; drop or click to upload</p>
                      <p style={{ fontSize: '11px', color: '#64748b', margin: 0 }}>SVG, PNG, JPG (max 2MB)</p>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Brand Name *</label>
                    <input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Acme Corp"
                      required
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Website</label>
                    <div style={{ position: 'relative' }}>
                      <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '14px' }}>https://</span>
                      <input 
                        type="text" 
                        value={website.replace(/^https?:\/\//i, '')}
                        onChange={(e) => setWebsite('https://' + e.target.value)}
                        placeholder="www.example.com"
                        style={{ width: '100%', padding: '10px 12px 10px 64px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Internal Notes</label>
                    <textarea 
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Add any details regarding supply chain or contact info..."
                      rows={4}
                      style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'none' }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                    <div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', display: 'block' }}>Active Status</span>
                      <span style={{ fontSize: '12px', color: '#64748b' }}>Available for product cataloging</span>
                    </div>
                    <label style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={status} 
                        onChange={(e) => setStatus(e.target.checked)}
                        style={{ width: '40px', height: '20px', borderRadius: '10px', appearance: 'none', backgroundColor: status ? '#3b82f6' : '#cbd5e1', position: 'relative', outline: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
                      />
                      <span 
                        style={{
                          position: 'absolute',
                          left: status ? '22px' : '2px',
                          top: '2px',
                          width: '16px',
                          height: '16px',
                          borderRadius: '50%',
                          backgroundColor: 'white',
                          transition: 'left 0.2s'
                        }} 
                      />
                    </label>
                  </div>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={(e) => handleDelete(e, selectedBrand.id)}
                      style={{
                        padding: '10px',
                        border: '1px solid #fca5a5',
                        backgroundColor: 'rgba(239, 68, 68, 0.05)',
                        color: '#ef4444',
                        borderRadius: '8px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        marginTop: '10px'
                      }}
                    >
                      Delete Partner Brand
                    </button>
                  )}

                  {/* Footer actions inside the scrollable form for accessibility */}
                  <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                    <button 
                      type="button" 
                      onClick={() => setPanelOpen(false)} 
                      className="btn btn-secondary" 
                      style={{ flex: 1, padding: '10px', fontSize: '14px' }}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn btn-primary" 
                      style={{ flex: 1, padding: '10px', fontSize: '14px' }}
                    >
                      Save Brand
                    </button>
                  </div>
                </form>

              </div>
            </>
          )}

        </main>
      </div>
    </div>
  );
};
