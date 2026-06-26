import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const ProductDetailedOverview: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProduct = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const response = await api.getProduct(id);
      if (response.success && response.data) {
        setProduct(response.data);
      }
    } catch (err: any) {
      setError(err.message || 'Product not found');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const handleRestockRequest = async () => {
    if (!product) return;
    const amountStr = window.prompt('Enter number of units to restock:', '50');
    if (!amountStr) return;
    const amount = parseInt(amountStr, 10);
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid number of units.');
      return;
    }

    try {
      const updatedStock = Number(product.stock) + amount;
      const newActivity = {
        id: String(Date.now()),
        type: 'Inventory Received',
        text: `${amount} units restocked via manual request.`,
        subtext: 'Received by Warehouse Team',
        timestamp: 'Just now'
      };

      const updatedProduct = {
        ...product,
        stock: updatedStock,
        initialStock: Number(product.initialStock || product.stock) + amount,
        activity: [newActivity, ...(product.activity || [])]
      };

      const res = await api.updateProduct(product.id, updatedProduct);
      if (res.success) {
        alert(`Successfully requested restock. Stock increased by ${amount} units.`);
        setProduct(res.data);
      }
    } catch (err: any) {
      alert(err.message || 'Failed to request restock');
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

  if (error || !product) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', gap: '16px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#ef4444' }}>error</span>
            <p style={{ color: '#ef4444', fontWeight: 600 }}>{error || 'Product not found'}</p>
            <Link to="/inventory" className="btn btn-secondary">Back to Inventory</Link>
          </div>
        </div>
      </div>
    );
  }

  const isLowStock = product.stock <= (product.lowStock || 10);
  const totalPhysical = Number(product.stock) + 28; // Committed is mocked to 28 units like screen
  const reorderPoint = product.lowStock || 50;
  const stockPercentage = Math.min(100, Math.round((product.stock / (product.initialStock || product.stock || 1)) * 100));

  // Specs defaults if not present
  const specs = product.specs || {
    'Form Factor': 'Standard',
    'Weight': 'N/A',
    'Power Supply': 'N/A',
    'Warranty': '1 Year Standard'
  };

  // Supplier defaults if not present
  const supplier = product.supplier || {
    name: 'Standard Supplier',
    leadTime: '10-14 Days',
    moq: '5 Units',
    lastOrdered: 'Never'
  };

  // Activity defaults
  const activityList = product.activity || [];

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Product Details</h1>
          <div className="topbar-actions">
            <Link to="/inventory" className="btn btn-secondary btn-sm" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Back
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content">
          {/* Breadcrumb & Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: '#64748b' }}>
              <Link to="/inventory" style={{ textDecoration: 'none', color: '#3b82f6', fontWeight: 500 }}>Inventory</Link>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
              <span style={{ color: '#475569' }}>{product.category}</span>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
              <span style={{ color: '#0f172a', fontWeight: 600 }}>{product.sku}</span>
            </nav>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link to={`/inventory/${product.id}/edit`} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '14px' }}>
                Edit Product
              </Link>
              <button onClick={handleRestockRequest} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '14px', boxShadow: '0 2px 4px rgba(59, 130, 246, 0.1)' }}>
                Restock Request
              </button>
            </div>
          </div>

          {/* Hero Section (Bento style) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', marginBottom: '32px' }}>
            
            {/* Left Box: Image and Primary Info */}
            <div 
              style={{
                gridColumn: 'span 8',
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                gap: '24px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
              }}
            >
              {/* Product Image */}
              <div 
                style={{
                  width: '200px',
                  height: '200px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '16px',
                  boxSizing: 'border-box'
                }}
              >
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                ) : (
                  <span className="material-symbols-outlined" style={{ fontSize: '64px', color: '#94a3b8' }}>
                    {product.category === 'Furniture' ? 'chair' : 'inventory_2'}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#0f172a' }}>{product.name}</h1>
                    <span 
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        backgroundColor: isLowStock ? '#fef3c7' : '#d1fae5',
                        color: isLowStock ? '#b45309' : '#065f46',
                        fontSize: '12px',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span 
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: isLowStock ? '#d97706' : '#10b981'
                        }}
                      />
                      {isLowStock ? 'Low Stock' : 'In Stock'}
                    </span>
                  </div>

                  <p style={{ fontSize: '15px', color: '#475569', margin: '0 0 16px', lineHeight: '1.5' }}>
                    {product.description || 'No description available for this item.'}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '4px' }}>SKU</span>
                      <span style={{ fontFamily: 'monospace', padding: '4px 8px', backgroundColor: '#f1f5f9', borderRadius: '4px', fontSize: '13px', color: '#1e293b' }}>
                        {product.sku}
                      </span>
                    </div>
                    <div>
                      <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Category</span>
                      <span style={{ fontSize: '14px', fontWeight: 500, color: '#1e293b' }}>{product.category}</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                  <span style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', color: '#475569' }}>
                    Brand: {product.brand}
                  </span>
                  <span style={{ fontSize: '12px', padding: '4px 10px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', color: '#475569' }}>
                    Threshold: {reorderPoint} Units
                  </span>
                </div>
              </div>
            </div>

            {/* Right Box: Quick Inventory Stats */}
            <div 
              style={{
                gridColumn: 'span 4',
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>inventory</span>
                Inventory Status
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Available Stock</span>
                    <span style={{ fontSize: '24px', fontWeight: 700, color: '#3b82f6' }}>{product.stock}</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Units</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Committed (Orders)</span>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b' }}>28</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Units</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>Total Physical Stock</span>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: '#1e293b' }}>{totalPhysical}</span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>Units</span>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <div style={{ width: '100%', backgroundColor: '#f1f5f9', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                  <div style={{ width: `${stockPercentage}%`, backgroundColor: isLowStock ? '#ef4444' : '#3b82f6', height: '100%', borderRadius: '4px' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px' }}>
                  <span style={{ color: '#64748b' }}>Reorder Level: {reorderPoint}</span>
                  <span style={{ color: isLowStock ? '#ef4444' : '#10b981', fontWeight: 600 }}>
                    {isLowStock ? 'Needs Restock' : 'Healthy'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Economics, Specifications, and Vendor Details */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {/* Pricing & Economics */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#ec4899' }}>payments</span>
                Economics
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>Unit Cost</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.cost)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>MSRP (Retail)</span>
                  <span style={{ fontSize: '16px', fontWeight: 600, color: '#0f172a' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.retail)}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', backgroundColor: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                  <span style={{ fontSize: '14px', color: '#166534', fontWeight: 500 }}>Est. Margin</span>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#15803d' }}>
                    {product.retail > 0 ? Math.round(((product.retail - product.cost) / product.retail) * 1000) / 10 : 0}%
                  </span>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#f59e0b' }}>settings_applications</span>
                Specifications
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {Object.entries(specs).map(([key, val]: any) => (
                  <li key={key} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', fontSize: '14px' }}>
                    <span style={{ color: '#64748b' }}>{key}</span>
                    <span style={{ fontWeight: 600, color: '#1e293b' }}>{val}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Supplier Details */}
            <div 
              style={{
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#8b5cf6' }}>local_shipping</span>
                Supplier Details
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#f3e8ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e9d5ff' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#7c3aed', width: '100%', textAlign: 'center' }}>
                    {supplier.name.split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: '#0f172a' }}>{supplier.name}</h4>
                  <Link to="/inventory/brands" style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}>View Partner Brands</Link>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Lead Time</span>
                  <span style={{ fontWeight: 600, color: '#1e293b' }}>{supplier.leadTime}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>MOQ</span>
                  <span style={{ fontWeight: 600, color: '#1e293b' }}>{supplier.moq}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#64748b' }}>Last Ordered</span>
                  <span style={{ fontWeight: 600, color: '#1e293b' }}>{supplier.lastOrdered}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Timeline */}
          <div 
            style={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
            }}
          >
            <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 20px', color: '#0f172a' }}>Recent Activity</h3>
            {activityList.length === 0 ? (
              <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>No recent activity logged for this product.</p>
            ) : (
              <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {activityList.map((act: any) => (
                  <div key={act.id} style={{ position: 'relative' }}>
                    <div 
                      style={{
                        position: 'absolute',
                        left: '-33px',
                        top: '4px',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: act.type === 'Inventory Received' ? '#10b981' : act.type === 'Price Update' ? '#f59e0b' : '#3b82f6',
                        border: '4px solid white',
                        boxShadow: '0 0 0 1px #e2e8f0'
                      }} 
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <div>
                        <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                          <span style={{ color: '#475569', fontWeight: 400 }}>{act.type}:</span> {act.text}
                        </p>
                        <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#64748b' }}>{act.subtext}</p>
                      </div>
                      <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 500 }}>{act.timestamp}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};
