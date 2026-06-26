import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const PurchaseOrderManagement: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [pos, setPOs] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    vendorId: '',
    productId: '',
    qty: '',
    notes: '',
  });
  const [modalError, setModalError] = useState<string | null>(null);

  const navigate = useNavigate();

  const loadPOData = async () => {
    setLoading(true);
    try {
      const poRes = await api.getPurchaseOrders();
      setPOs(poRes.data || []);

      const vendRes = await api.getVendors();
      setVendors(vendRes.data || []);

      const prodRes = await api.getProducts();
      setProducts(prodRes.data?.products || []);
    } catch (err) {
      console.error('Failed to load PO data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPOData();
  }, []);

  const totalSpend = pos.reduce((sum, po) => sum + po.total, 0);
  const activeCount = pos.filter((po) => po.status === 'Sent' || po.status === 'Approved').length;

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.vendorId || !formData.productId || !formData.qty) {
      setModalError('Please specify Vendor, Product, and Quantity.');
      return;
    }

    try {
      const selectedVendor = vendors.find((v) => v.id === formData.vendorId);
      const selectedProd = products.find((p) => p.id === formData.productId);
      const qty = Number(formData.qty);
      const cost = selectedProd ? selectedProd.cost : 0;
      const total = qty * cost;

      const payload = {
        vendorId: formData.vendorId,
        vendorName: selectedVendor?.name || 'Vendor',
        total: total,
        expectedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days from now
        items: [
          {
            productId: formData.productId,
            name: selectedProd?.name || 'Product',
            qty: qty,
            cost: cost,
            total: total,
          },
        ],
        notes: formData.notes,
      };

      await api.createPurchaseOrder(payload);
      setShowCreateModal(false);
      setFormData({ vendorId: '', productId: '', qty: '', notes: '' });
      setModalError(null);
      loadPOData();
    } catch (err: any) {
      setModalError(err.message || 'Failed to create PO');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Purchase Order Management</h1>
          <div className="topbar-actions">
            <button onClick={() => setShowCreateModal(true)} className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Generate Purchase Order
            </button>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Procurement & POs</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Create purchase orders, track vendor deliveries, and log inbound costs.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Total Spend</span>
                <div className="stat-card-icon" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                  <span className="material-symbols-outlined">payments</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalSpend)}
              </span>
              <div className="stat-card-change" style={{ color: '#1d4ed8' }}>
                <span>All POs generated</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Active POs</span>
                <div className="stat-card-icon" style={{ background: '#d1fae5', color: '#065f46' }}>
                  <span className="material-symbols-outlined">hourglass_empty</span>
                </div>
              </div>
              <span className="stat-card-value">{activeCount}</span>
              <div className="stat-card-change up">
                <span>Deliveries pending</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Completed Deliveries</span>
                <div className="stat-card-icon" style={{ background: '#f1f5f9', color: '#475569' }}>
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
              </div>
              <span className="stat-card-value">
                {pos.filter((po) => po.status === 'Received').length}
              </span>
              <div className="stat-card-change" style={{ color: '#475569' }}>
                <span>Checked into storage</span>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Purchase Orders List ({pos.length})</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading purchase orders...</div>
              ) : pos.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No purchase orders recorded.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>PO ID</th>
                      <th>Vendor</th>
                      <th>Order Date</th>
                      <th>Total Amount</th>
                      <th>Est. Delivery</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pos.map((po) => (
                      <tr key={po.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/purchase-orders/${po.id}`)}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{po.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{po.vendorName}</td>
                        <td style={{ color: '#64748b' }}>{new Date(po.date).toLocaleDateString()}</td>
                        <td style={{ fontWeight: 700 }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(po.total)}
                        </td>
                        <td style={{ color: '#64748b' }}>{new Date(po.expectedDelivery).toLocaleDateString()}</td>
                        <td>
                          <span className="badge" style={{
                            background: po.status === 'Received' ? '#d1fae5' : po.status === 'Sent' ? '#dbeafe' : '#f1f5f9',
                            color: po.status === 'Received' ? '#065f46' : po.status === 'Sent' ? '#1d4ed8' : '#475569'
                          }}>
                            {po.status}
                          </span>
                        </td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <Link to={`/purchase-orders/${po.id}`} className="btn btn-secondary btn-sm">
                            Details
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>

        {/* Modal Overlay */}
        {showCreateModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
            <div className="content-card" style={{ width: '500px', background: 'white' }}>
              <div className="content-card-header">
                <h3 className="content-card-title">Generate Purchase Order</h3>
                <button onClick={() => setShowCreateModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleCreateSubmit} style={{ padding: '24px' }}>
                {modalError && (
                  <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '10px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
                    {modalError}
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  <div className="form-group">
                    <label className="form-label">Vendor</label>
                    <select
                      className="form-select"
                      name="vendorId"
                      value={formData.vendorId}
                      onChange={(e) => setFormData({ ...formData, vendorId: e.target.value })}
                      required
                    >
                      <option value="">Select vendor...</option>
                      {vendors.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Product to Order</label>
                    <select
                      className="form-select"
                      name="productId"
                      value={formData.productId}
                      onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                      required
                    >
                      <option value="">Select product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} (${p.cost} cost)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="e.g. 50"
                      min="1"
                      value={formData.qty}
                      onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Instructions / Notes (Optional)</label>
                    <textarea
                      className="form-textarea"
                      placeholder="e.g. Please expedite shipping..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows={2}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <button type="button" onClick={() => setShowCreateModal(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create PO
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
