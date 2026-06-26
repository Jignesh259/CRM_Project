import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const ProductCategoryManager: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Side Panel States
  const [isEditing, setIsEditing] = useState(false); // True = Edit Mode, False = Create Mode
  const [selectedCategory, setSelectedCategory] = useState<any>(null);
  
  // Form Inputs
  const [name, setName] = useState('');
  const [parentId, setParentId] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(true);
  const [icon, setIcon] = useState('folder');

  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getCategories();
      if (res.success && res.data) {
        setCategories(res.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSelectCategory = (cat: any) => {
    setIsEditing(true);
    setSelectedCategory(cat);
    setName(cat.name || '');
    setParentId(cat.parentId || '');
    setDescription(cat.description || '');
    setStatus(cat.status === 'Active');
    setIcon(cat.icon || 'folder');
  };

  const handleNewCategoryClick = () => {
    setIsEditing(false);
    setSelectedCategory(null);
    setName('');
    setParentId('');
    setDescription('');
    setStatus(true);
    setIcon('folder');
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      alert('Category Name is required.');
      return;
    }

    try {
      const payload = {
        name,
        parentId,
        description,
        status: status ? 'Active' : 'Draft',
        icon
      };

      if (isEditing && selectedCategory) {
        const res = await api.updateCategory(selectedCategory.id, payload);
        if (res.success) {
          alert('Category updated successfully!');
        }
      } else {
        const res = await api.createCategory(payload);
        if (res.success) {
          alert('Category created successfully!');
        }
      }
      loadCategories();
      handleNewCategoryClick();
    } catch (err: any) {
      alert(err.message || 'Failed to save category');
    }
  };

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this category? All sub-associations will be removed.')) return;
    try {
      const res = await api.deleteCategory(id);
      if (res.success) {
        alert('Category deleted successfully.');
        loadCategories();
        if (selectedCategory && selectedCategory.id === id) {
          handleNewCategoryClick();
        }
      }
    } catch (err: any) {
      alert(err.message || 'Failed to delete category');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Categories</h1>
          <div className="topbar-actions">
            <button onClick={handleNewCategoryClick} className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              New Category
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)', overflow: 'hidden' }}>
          {/* Breadcrumbs & Title */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexShrink: 0 }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Category Management</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Organize and structure your product catalog taxonomy.</p>
            </div>
            <button 
              onClick={() => alert('Exporting category list to CSV (mock format)...')}
              className="btn btn-secondary" 
              style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export List
            </button>
          </div>

          {/* Dual columns layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px', flex: 1, overflow: 'hidden' }}>
            
            {/* Left Column: Categories List Table */}
            <div 
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                display: 'flex', 
                flexDirection: 'column', 
                overflow: 'hidden',
                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
              }}
            >
              {/* Table Toolbar */}
              <div style={{ padding: '16px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', flexShrink: 0 }}>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Showing {categories.length} categories</span>
                <span style={{ fontSize: '12px', color: '#94a3b8' }}>Click any category row to edit</span>
              </div>

              {/* Table wrapper */}
              <div style={{ flex: 1, overflowY: 'auto' }}>
                {loading ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading categories...</div>
                ) : error ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
                ) : categories.length === 0 ? (
                  <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No categories registered.</div>
                ) : (
                  <table className="data-table" style={{ width: '100%', minWidth: '600px' }}>
                    <thead>
                      <tr>
                        <th style={{ width: '240px' }}>Category Name</th>
                        <th>Description</th>
                        <th style={{ width: '100px' }}>Products</th>
                        <th style={{ width: '100px' }}>Status</th>
                        <th style={{ width: '80px', textAlign: 'right' }}>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((cat: any) => (
                        <tr 
                          key={cat.id} 
                          onClick={() => handleSelectCategory(cat)}
                          style={{ 
                            cursor: 'pointer',
                            backgroundColor: selectedCategory?.id === cat.id ? '#eff6ff' : 'transparent'
                          }}
                        >
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <div style={{ width: '32px', height: '32px', borderRadius: '6px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{cat.icon || 'folder'}</span>
                              </div>
                              <span style={{ fontWeight: 600, color: '#0f172a' }}>{cat.name}</span>
                            </div>
                          </td>
                          <td style={{ color: '#475569', fontSize: '13px' }}>
                            <div style={{ maxWidth: '280px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }} title={cat.description}>
                              {cat.description || 'No description provided.'}
                            </div>
                          </td>
                          <td style={{ fontWeight: 500, color: '#1e293b' }}>{cat.productsCount || 0}</td>
                          <td>
                            <span 
                              className="badge"
                              style={{
                                backgroundColor: cat.status === 'Active' ? '#d1fae5' : '#f1f5f9',
                                color: cat.status === 'Active' ? '#065f46' : '#475569'
                              }}
                            >
                              {cat.status || 'Draft'}
                            </span>
                          </td>
                          <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                            <div style={{ display: 'flex', gap: '4px', justifyContent: 'flex-end' }}>
                              <button 
                                onClick={() => handleSelectCategory(cat)} 
                                className="btn btn-secondary btn-sm"
                                style={{ width: '28px', height: '28px', padding: 0 }}
                                title="Edit"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
                              </button>
                              <button 
                                onClick={(e) => handleDelete(e, cat.id)} 
                                className="btn btn-secondary btn-sm"
                                style={{ width: '28px', height: '28px', padding: 0, color: '#ef4444' }}
                                title="Delete"
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>

            {/* Right Column: Edit/Add Detail Panel */}
            <div 
              style={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '12px', 
                display: 'flex', 
                flexDirection: 'column', 
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                overflow: 'hidden'
              }}
            >
              {/* Panel Header */}
              <div style={{ padding: '20px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: 0, color: '#0f172a' }}>
                    {isEditing ? 'Edit Category' : 'New Category'}
                  </h3>
                  {isEditing && selectedCategory && (
                    <span style={{ fontSize: '12px', color: '#64748b' }}>ID: {selectedCategory.id}</span>
                  )}
                </div>
                {isEditing && (
                  <button 
                    onClick={handleNewCategoryClick} 
                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center' }}
                    title="Switch to Create Mode"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
                  </button>
                )}
              </div>

              {/* Form Content */}
              <form onSubmit={handleSave} style={{ flex: 1, padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Category Name *</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Hardware & Devices"
                    required
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Parent Category</label>
                  <select 
                    value={parentId}
                    onChange={(e) => setParentId(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', fontSize: '14px', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="">None (Top Level)</option>
                    {categories
                      .filter((c: any) => !isEditing || c.id !== selectedCategory?.id)
                      .map((c: any) => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Icon Symbol (Material Icon Name)</label>
                  <select 
                    value={icon}
                    onChange={(e) => setIcon(e.target.value)}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', fontSize: '14px', outline: 'none', cursor: 'pointer' }}
                  >
                    <option value="folder">Folder</option>
                    <option value="laptop_mac">Laptop (Hardware)</option>
                    <option value="dns">Server (Software)</option>
                    <option value="desk">Desk (Furniture)</option>
                    <option value="router">Router (Networking)</option>
                    <option value="devices">Devices (Electronics)</option>
                    <option value="headset">Headset (Audio)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Description</label>
                  <textarea 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Short description of the taxonomy category..."
                    rows={3}
                    maxLength={200}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'none' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
                    {description.length}/200
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '12px', borderTop: '1px solid #f1f5f9', marginTop: 'auto' }}>
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b', display: 'block' }}>Category Status</span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Visible to sales/catalog team</span>
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
                        transition: 'left 0.2s',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                      }} 
                    />
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
                  <button 
                    type="button" 
                    onClick={handleNewCategoryClick} 
                    className="btn btn-secondary" 
                    style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                  >
                    Reset
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                  >
                    {isEditing ? 'Save Changes' : 'Create Category'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};
