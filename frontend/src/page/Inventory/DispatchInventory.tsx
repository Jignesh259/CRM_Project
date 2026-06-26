import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const DispatchInventory: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    productId: '',
    qty: '',
    warehouse: 'WH-A',
    ref: '',
    notes: '',
  });
  const [selectedProductStock, setSelectedProductStock] = useState<number | null>(null);
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
      } catch (err) {
        console.error('Failed to load form dropdown data', err);
      }
    };
    loadFormData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const val = e.target.value;

    setFormData({
      ...formData,
      [name]: val
    });

    if (name === 'productId') {
      const prod = products.find((p) => p.id === val);
      setSelectedProductStock(prod ? prod.stock : null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.productId || !formData.qty) {
      setError('Please select a product and specify quantity.');
      return;
    }

    const qty = Number(formData.qty);
    if (selectedProductStock !== null && qty > selectedProductStock) {
      setError(`Cannot dispatch. Only ${selectedProductStock} units available in stock.`);
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const selectedProd = products.find((p) => p.id === formData.productId);
      const payload = {
        productId: formData.productId,
        productName: selectedProd?.name || 'Product',
        qty: qty,
        warehouse: formData.warehouse,
        ref: formData.ref || 'Manual Dispatch',
        notes: formData.notes
      };

      await api.dispatchStock(payload);
      navigate('/inventory/dashboard');
    } catch (err: any) {
      setError(err.message || 'Failed to dispatch stock');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Dispatch Inventory (Stock Out)</h1>
        </header>

        <div className="page-content">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <button onClick={() => navigate(-1)} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              </button>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Release Outbound Stock</h2>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Authorize stock release for customer orders, replacements, or scrap.</p>
              </div>
            </div>

            {error && (
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Stock Out Details</h3>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                <div className="form-grid" style={{ gap: '20px' }}>
                  <div className="form-group full-width">
                    <label className="form-label">Product to Release</label>
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
                          {p.name} ({p.sku}) - Available Stock: {p.stock} units
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quantity to Dispatch</label>
                    <input
                      type="number"
                      className="form-input"
                      name="qty"
                      placeholder="e.g. 10"
                      min="1"
                      value={formData.qty}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Source Warehouse</label>
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

                  <div className="form-group full-width">
                    <label className="form-label">Order / Reference Number (Optional)</label>
                    <input
                      type="text"
                      className="form-input"
                      name="ref"
                      placeholder="e.g. SO-8821"
                      value={formData.ref}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label className="form-label">Release Notes / Remarks (Optional)</label>
                    <textarea
                      className="form-textarea"
                      name="notes"
                      placeholder="Specify customer name, dispatch reason, courier details, etc..."
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '32px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                  <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" style={{ background: '#dc2626' }} disabled={submitting}>
                    {submitting ? 'Processing...' : 'Authorize Release'}
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
