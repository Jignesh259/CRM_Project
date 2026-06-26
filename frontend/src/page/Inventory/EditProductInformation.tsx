import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const EditProductInformation: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Form States
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [retail, setRetail] = useState('');
  const [stock, setStock] = useState('');
  const [lowStock, setLowStock] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [status, setStatus] = useState(true);
  const [image, setImage] = useState('');

  // Specs States
  const [specs, setSpecs] = useState<any>({});
  
  // Supplier States
  const [supplier, setSupplier] = useState<any>({});

  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const [prodRes, catRes, brandRes] = await Promise.all([
          api.getProduct(id),
          api.getCategories(),
          api.getBrands()
        ]);

        if (prodRes.success && prodRes.data) {
          const p = prodRes.data;
          setName(p.name || '');
          setSku(p.sku || '');
          setDescription(p.description || '');
          setCost(p.cost !== undefined ? String(p.cost) : '');
          setRetail(p.retail !== undefined ? String(p.retail) : '');
          setStock(p.stock !== undefined ? String(p.stock) : '');
          setLowStock(p.lowStock !== undefined ? String(p.lowStock) : '');
          setCategory(p.category || '');
          setBrand(p.brand || '');
          setStatus(p.status === 'Active');
          setImage(p.image || '');
          setSpecs(p.specs || {});
          setSupplier(p.supplier || {});
        }

        if (catRes.success && catRes.data) setCategories(catRes.data);
        if (brandRes.success && brandRes.data) setBrands(brandRes.data);
      } catch (err: any) {
        alert(err.message || 'Failed to load product for editing');
        navigate('/inventory');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id]);

  const handleSpecChange = (key: string, value: string) => {
    setSpecs((prev: any) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !sku || !retail || !stock) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    setSubmitting(true);
    try {
      const updatedProduct = {
        name,
        sku,
        description,
        cost: cost ? Number(cost) : 0,
        retail: Number(retail),
        stock: Number(stock),
        lowStock: Number(lowStock || 10),
        category,
        brand,
        status: status ? 'Active' : 'Inactive',
        image,
        specs,
        supplier
      };

      const res = await api.updateProduct(id!, updatedProduct);
      if (res.success) {
        alert('Product updated successfully!');
        navigate(`/inventory/${id}`);
      }
    } catch (err: any) {
      alert(err.message || 'Failed to update product');
    } finally {
      setSubmitting(false);
    }
  };

  const handleArchive = async () => {
    if (!window.confirm('Are you sure you want to archive (delete) this product? This will remove it from the active inventory.')) return;
    try {
      await api.deleteProduct(id!);
      alert('Product archived successfully.');
      navigate('/inventory');
    } catch (err: any) {
      alert(err.message || 'Failed to archive product');
    }
  };

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <p style={{ color: '#64748b' }}>Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Edit Product</h1>
          <div className="topbar-actions">
            <Link to={`/inventory/${id}`} className="btn btn-secondary btn-sm" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Cancel
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {/* Header Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>Edit Product</h2>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Update product details, specifications, and inventory levels.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  onClick={() => navigate(`/inventory/${id}`)} 
                  className="btn btn-secondary"
                  style={{ padding: '10px 24px', fontSize: '14px', fontWeight: 600 }}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{ 
                    padding: '10px 24px', 
                    fontSize: '14px', 
                    fontWeight: 600,
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)',
                    backgroundColor: '#1976D2'
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                  {submitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>

            {/* Form grid layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              
              {/* Left Column: General & Specs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* General Information Card */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a' }}>General Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Product Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Description</label>
                      <textarea 
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>SKU</label>
                        <input 
                          type="text" 
                          value={sku}
                          onChange={(e) => setSku(e.target.value)}
                          required
                          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', fontFamily: 'monospace' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Category</label>
                        <select 
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', fontSize: '14px', outline: 'none', cursor: 'pointer' }}
                        >
                          <option value="">Select Category</option>
                          {categories.map((c) => (
                            <option key={c.id} value={c.name}>{c.name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Brand</label>
                        <select 
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', backgroundColor: 'white', fontSize: '14px', outline: 'none', cursor: 'pointer' }}
                        >
                          <option value="">Select Brand</option>
                          {brands.map((b) => (
                            <option key={b.id} value={b.name}>{b.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specifications Card */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a' }}>Specifications</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {Object.keys(specs).length === 0 ? (
                      <p style={{ color: '#64748b', fontSize: '14px', gridColumn: 'span 2', margin: 0 }}>No specifications registered. Add custom fields below:</p>
                    ) : (
                      Object.entries(specs).map(([key, val]: any) => (
                        <div key={key}>
                          <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>{key}</label>
                          <input 
                            type="text" 
                            value={val}
                            onChange={(e) => handleSpecChange(key, e.target.value)}
                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Stock Management, Pricing, and Danger Zone */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Stock Management */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a' }}>Stock Management</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Current Stock</label>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <input 
                          type="number" 
                          value={stock}
                          onChange={(e) => setStock(e.target.value)}
                          required
                          style={{ flex: 1, padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        />
                        <span style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '8px', fontSize: '12px', border: '1px solid #cbd5e1', fontWeight: 500, color: '#64748b' }}>Units</span>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Reorder Point</label>
                      <input 
                        type="number" 
                        value={lowStock}
                        onChange={(e) => setLowStock(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '8px' }}>
                        <input 
                          type="checkbox" 
                          checked={status} 
                          onChange={(e) => setStatus(e.target.checked)}
                          style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#1e293b' }}>Active Listing</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a' }}>Pricing</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Cost Price ($)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '14px' }}>$</span>
                        <input 
                          type="number" 
                          step="0.01"
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Base Price (Retail) *</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '14px' }}>$</span>
                        <input 
                          type="number" 
                          step="0.01"
                          value={retail}
                          onChange={(e) => setRetail(e.target.value)}
                          required
                          style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Danger Zone */}
                <div style={{ backgroundColor: 'rgba(239, 68, 68, 0.05)', border: '1px solid #fca5a5', borderRadius: '12px', padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined">warning</span>
                    Danger Zone
                  </h3>
                  <p style={{ fontSize: '13px', color: '#dc2626', margin: '0 0 16px', lineHeight: '1.4' }}>
                    Archiving this product will hide it from active inventory views.
                  </p>
                  <button 
                    type="button" 
                    onClick={handleArchive}
                    className="btn"
                    style={{ 
                      width: '100%', 
                      padding: '10px', 
                      borderRadius: '8px', 
                      border: '1px solid #ef4444', 
                      backgroundColor: 'transparent',
                      color: '#ef4444',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ef4444';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#ef4444';
                    }}
                  >
                    Archive Product
                  </button>
                </div>

              </div>

            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
