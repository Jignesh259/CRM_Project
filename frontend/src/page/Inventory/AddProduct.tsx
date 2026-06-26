import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const AddProduct: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  // Form States
  const [name, setName] = useState('');
  const [sku, setSku] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [retail, setRetail] = useState('');
  const [initialStock, setInitialStock] = useState('');
  const [lowStock, setLowStock] = useState('10');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [status, setStatus] = useState(true); // active Listing
  
  // Specs state (mock specs)
  const [formFactor, setFormFactor] = useState('');
  const [weight, setWeight] = useState('');
  const [powerSupply, setPowerSupply] = useState('');
  const [warranty, setWarranty] = useState('3 Yrs Next Business Day');

  // Supplier state (mock supplier details)
  const [supplierName, setSupplierName] = useState('');
  const [leadTime] = useState('10-14 Days');
  const [moq] = useState('5 Units');

  const [categories, setCategories] = useState<any[]>([]);
  const [brands, setBrands] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const loadClassification = async () => {
      try {
        const [catRes, brandRes] = await Promise.all([
          api.getCategories(),
          api.getBrands()
        ]);
        if (catRes.success && catRes.data) setCategories(catRes.data);
        if (brandRes.success && brandRes.data) setBrands(brandRes.data);
      } catch (err) {
        console.error('Failed to load category/brand selections', err);
      }
    };
    loadClassification();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !sku || !retail || !initialStock) {
      alert('Please fill out all required fields marked with *');
      return;
    }

    setSubmitting(true);
    try {
      const productPayload = {
        name,
        sku,
        description,
        cost: cost ? Number(cost) : 0,
        retail: Number(retail),
        initialStock: Number(initialStock),
        lowStock: Number(lowStock),
        category: category || 'Uncategorized',
        brand: brand || 'Generic',
        status: status ? 'Active' : 'Inactive',
        image: '', // default empty, or can set a default
        specs: {
          'Form Factor': formFactor || 'Standard',
          'Weight': weight || 'N/A',
          'Power Supply': powerSupply || 'N/A',
          'Warranty': warranty
        },
        supplier: {
          name: supplierName || 'NetTech Distributors',
          leadTime: leadTime,
          moq: moq,
          lastOrdered: 'Just now'
        }
      };

      const res = await api.createProduct(productPayload);
      if (res.success) {
        alert('Product created successfully!');
        navigate('/inventory');
      }
    } catch (err: any) {
      alert(err.message || 'Failed to create product');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Add Product</h1>
          <div className="topbar-actions">
            <Link to="/inventory" className="btn btn-secondary btn-sm">Cancel</Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          <form onSubmit={handleSubmit} style={{ maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Header Title & Main Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>Add New Product</h2>
                <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>Enter the details below to catalog a new inventory item.</p>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button 
                  type="button" 
                  onClick={() => navigate('/inventory')} 
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
                    boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)' 
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                  {submitting ? 'Creating...' : 'Create Product'}
                </button>
              </div>
            </div>

            {/* Form grid layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
              
              {/* Left Column: Basic Details & Pricing */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Basic Information */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>info</span>
                    Basic Information
                  </h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Product Name *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Enterprise Server Rack 42U" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>SKU (Stock Keeping Unit) *</label>
                      <input 
                        type="text" 
                        placeholder="e.g. SR-42U-BLK" 
                        value={sku}
                        onChange={(e) => setSku(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', fontFamily: 'monospace' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Description</label>
                      <textarea 
                        placeholder="Detailed product description..." 
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none', resize: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Pricing & Inventory */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>sell</span>
                    Pricing &amp; Inventory
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Cost Price ($)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '14px' }}>$</span>
                        <input 
                          type="number" 
                          placeholder="0.00" 
                          step="0.01"
                          value={cost}
                          onChange={(e) => setCost(e.target.value)}
                          style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Retail Price ($) *</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '14px' }}>$</span>
                        <input 
                          type="number" 
                          placeholder="0.00" 
                          step="0.01"
                          value={retail}
                          onChange={(e) => setRetail(e.target.value)}
                          required
                          style={{ width: '100%', padding: '10px 12px 10px 24px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Initial Stock *</label>
                      <input 
                        type="number" 
                        placeholder="0" 
                        value={initialStock}
                        onChange={(e) => setInitialStock(e.target.value)}
                        required
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Low Stock Threshold</label>
                      <input 
                        type="number" 
                        placeholder="10" 
                        value={lowStock}
                        onChange={(e) => setLowStock(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Custom Specs (Additional helper for mock data completeness) */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>settings_applications</span>
                    Specifications (Technical Specs)
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Form Factor</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 1U Rackmount, Ergonomic" 
                        value={formFactor}
                        onChange={(e) => setFormFactor(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Weight</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 4.2 kg" 
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Power Supply</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Dual AC 500W" 
                        value={powerSupply}
                        onChange={(e) => setPowerSupply(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Warranty</label>
                      <input 
                        type="text" 
                        value={warranty}
                        onChange={(e) => setWarranty(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Classification & Image */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Classification */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>category</span>
                    Classification
                  </h3>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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

                    <div>
                      <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: 600, color: '#475569' }}>Supplier Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. NetTech Distributors"
                        value={supplierName}
                        onChange={(e) => setSupplierName(e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginTop: '8px' }}>
                        <input 
                          type="checkbox" 
                          checked={status} 
                          onChange={(e) => setStatus(e.target.checked)}
                          style={{ width: '16px', height: '16px', borderRadius: '4px', border: '1px solid #cbd5e1', cursor: 'pointer' }}
                        />
                        <span style={{ fontSize: '14px', fontWeight: 500, color: '#1e293b' }}>Active Listing</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Media Placeholder */}
                <div style={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>image</span>
                    Product Media
                  </h3>

                  <div 
                    style={{
                      border: '2px dashed #cbd5e1',
                      borderRadius: '12px',
                      padding: '32px 16px',
                      textAlign: 'center',
                      backgroundColor: '#f8fafc',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                    onClick={() => alert('Media upload simulation. The backend currently uses local storage mock data without physical image uploads.')}
                  >
                    <div 
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: '#dbeafe',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 12px'
                      }}
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>cloud_upload</span>
                    </div>
                    <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>
                      <span style={{ color: '#2563eb' }}>Click to upload</span> or drag
                    </p>
                    <p style={{ margin: 0, fontSize: '11px', color: '#64748b' }}>SVG, PNG, JPG or GIF (max. 800x400px)</p>
                  </div>
                </div>

              </div>

            </div>

          </form>
        </main>
      </div>
    </div>
  );
};
