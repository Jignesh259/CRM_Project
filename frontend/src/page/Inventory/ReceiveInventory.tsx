import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const ReceiveInventory: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    productId: '',
    qty: '',
    warehouse: 'WH-A',
    vendorId: '',
    ref: '',
    batchNo: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadFormData = async () => {
      try {
        const prodRes = await api.getProducts();
        setProducts(prodRes.data?.products || []);

        const whRes = await api.getWarehouses();
        setWarehouses(whRes.data || []);

        const vendRes = await api.getVendors();
        setVendors(vendRes.data || []);
      } catch (err) {
        console.error('Failed to load form dropdown data', err);
      }
    };
    loadFormData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productId || !formData.qty) {
      setError('Please select a product and specify quantity.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const selectedProd = products.find((p) => p.id === formData.productId);
      const payload = {
        productId: formData.productId,
        productName: selectedProd?.name || 'Product',
        qty: Number(formData.qty),
        warehouse: formData.warehouse,
        ref: formData.ref || 'Manual',
        batchNo: formData.batchNo
      };

      await api.receiveStock(payload);
      navigate('/inventory/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to receive stock');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Receive Inventory (Stock In)</h1>
        </header>

        <div className="page-content">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <button onClick={() => navigate(-1)} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              </button>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Log New Inbound Stock</h2>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Log restocking shipments and warehouse arrivals.</p>
              </div>
            </div>

            {error && (
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Stock In Details</h3>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                <div className="form-grid" style={{ gap: '20px' }}>
                  <div className="form-group full-width">
                    <label className="form-label">Product to Restock</label>
                    <select
                      className="form-select"
                      name="productId"
                      value={formData.productId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.sku}) - Stock: {p.stock} units
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quantity Received</label>
                    <input
                      type="number"
                      className="form-input"
                      name="qty"
                      placeholder="e.g. 50"
                      min="1"
                      value={formData.qty}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Destination Warehouse</label>
                    <select
                      className="form-select"
                      name="warehouse"
                      value={formData.warehouse}
                      onChange={handleChange}
                    >
                      {warehouses.map((w) => (
                        <option key={w.id} value={w.id}>
                          {w.name} ({w.location})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Source Vendor (Optional)</label>
                    <select
                      className="form-select"
                      name="vendorId"
                      value={formData.vendorId}
                      onChange={handleChange}
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
                    <label className="form-label">PO Reference (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      name="ref"
                      placeholder="e.g. PO-2026-102"
                      value={formData.ref}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Batch / Lot Number (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      name="batchNo"
                      placeholder="e.g. BATCH-9912A"
                      value={formData.batchNo}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                  <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Processing...' : 'Complete Stock In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
