import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const VendorProfile: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [vendor, setVendor] = useState<any | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [pos, setPOs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadProfileData = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const vRes = await api.getVendor(id);
        setVendor(vRes.data);

        // Load products supplied by this vendor
        const pRes = await api.getProducts();
        const vendorProducts = (pRes.data?.products || []).filter(
          (p: any) => p.supplier?.name === vRes.data.name
        );
        setProducts(vendorProducts);

        // Load POs for this vendor
        const poRes = await api.getPurchaseOrders();
        const vendorPOs = (poRes.data || []).filter((po: any) => po.vendorId === id);
        setPOs(vendorPOs);
      } catch (err: any) {
        setError(err.message || 'Failed to load vendor profile');
      } finally {
        setLoading(false);
      }
    };
    loadProfileData();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Vendor Profile</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px' }}>Loading profile...</div>
        </div>
      </div>
    );
  }

  if (error || !vendor) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Vendor Profile</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>{error || 'Vendor not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => navigate('/vendors')} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">{vendor.name} - Performance Profile</h1>
          </div>
          <div className="topbar-actions">
            <Link to="/purchase-orders" className="btn btn-primary btn-sm">
              Create PO
            </Link>
          </div>
        </header>

        <div className="page-content">
          {/* Header Card */}
          <div className="content-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div className="avatar" style={{ background: '#10b981', width: '56px', height: '56px', fontSize: '20px' }}>
                  {vendor.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>{vendor.name}</h2>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 8px' }}>Category: <strong style={{ color: '#475569' }}>{vendor.category}</strong> | Terms: <strong style={{ color: '#475569' }}>{vendor.paymentTerms}</strong></p>
                  <span className="badge" style={{ background: vendor.status === 'Active' ? '#d1fae5' : '#f1f5f9', color: vendor.status === 'Active' ? '#065f46' : '#475569' }}>
                    {vendor.status} Partner
                  </span>
                </div>
              </div>

              {/* Quick Metrics */}
              <div style={{ display: 'flex', gap: '24px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>{vendor.performanceScore}%</div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>OVERALL SCORE</div>
                </div>
                <div style={{ width: '1px', background: '#e2e8f0' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#3b82f6' }}>{vendor.qualityScore}%</div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>QUALITY RATE</div>
                </div>
                <div style={{ width: '1px', background: '#e2e8f0' }} />
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: 800, color: '#f59e0b' }}>{vendor.compliance}%</div>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>COMPLIANCE</div>
                </div>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #f1f5f9', marginTop: '24px', paddingTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', fontSize: '13px' }}>
              <div>
                <span style={{ color: '#94a3b8' }}>Contact Representative</span>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{vendor.contactPerson}</div>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Email Address</span>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}><a href={`mailto:${vendor.email}`}>{vendor.email}</a></div>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Phone Number</span>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{vendor.phone}</div>
              </div>
              <div>
                <span style={{ color: '#94a3b8' }}>Address</span>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{vendor.address}</div>
              </div>
            </div>
          </div>

          <div className="bento-grid">
            {/* Left: Supplied Items */}
            <div className="content-card col-span-7">
              <div className="content-card-header">
                <h3 className="content-card-title">Supplied Inventory Catalog</h3>
              </div>
              <div className="content-card-body" style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Product SKU</th>
                      <th>Product Name</th>
                      <th>Lead Time</th>
                      <th>M.O.Q.</th>
                      <th>Current Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length === 0 ? (
                      <tr>
                        <td colSpan={5} style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>No products mapped to this vendor.</td>
                      </tr>
                    ) : (
                      products.map((p) => (
                        <tr key={p.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/inventory/${p.id}`)}>
                          <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{p.sku}</td>
                          <td style={{ fontWeight: 600, color: '#0f172a' }}>{p.name}</td>
                          <td>{p.supplier?.leadTime || 'N/A'}</td>
                          <td>{p.supplier?.moq || 'N/A'}</td>
                          <td>
                            <span className="badge" style={{
                              background: p.stock <= p.lowStock ? '#fee2e2' : '#d1fae5',
                              color: p.stock <= p.lowStock ? '#991b1b' : '#065f46'
                            }}>
                              {p.stock} Units
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Purchase Orders History */}
            <div className="content-card col-span-5">
              <div className="content-card-header">
                <h3 className="content-card-title">Recent Purchase Orders</h3>
              </div>
              <div className="content-card-body" style={{ overflowX: 'auto' }}>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>PO Ref</th>
                      <th>Date</th>
                      <th>Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pos.length === 0 ? (
                      <tr>
                        <td colSpan={4} style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>No POs issued.</td>
                      </tr>
                    ) : (
                      pos.map((po) => (
                        <tr key={po.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/purchase-orders/${po.id}`)}>
                          <td style={{ fontWeight: 600, fontFamily: 'monospace' }}>{po.id}</td>
                          <td>{new Date(po.date).toLocaleDateString()}</td>
                          <td style={{ fontWeight: 600 }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(po.total)}</td>
                          <td>
                            <span className="badge" style={{
                              background: po.status === 'Received' ? '#d1fae5' : po.status === 'Sent' ? '#dbeafe' : '#f1f5f9',
                              color: po.status === 'Received' ? '#065f46' : po.status === 'Sent' ? '#1d4ed8' : '#475569'
                            }}>
                              {po.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
