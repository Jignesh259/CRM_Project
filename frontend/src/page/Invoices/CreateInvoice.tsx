import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

interface LineItemInput {
  productId: string;
  qty: number;
  discount: number; // in percentage
}

export const CreateInvoice: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    customerId: '',
    dueDate: '',
  });
  const [lineItems, setLineItems] = useState<LineItemInput[]>([
    { productId: '', qty: 1, discount: 0 }
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadFormData = async () => {
      try {
        const custRes = await api.getCustomers();
        setCustomers(custRes.data?.customers || []);

        const prodRes = await api.getProducts();
        setProducts(prodRes.data?.products || []);
      } catch (err) {
        console.error('Failed to load dropdown datasets', err);
      }
    };
    loadFormData();
  }, []);

  const handleLineChange = (index: number, field: keyof LineItemInput, value: any) => {
    const updated = [...lineItems];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setLineItems(updated);
  };

  const addLineItem = () => {
    setLineItems([...lineItems, { productId: '', qty: 1, discount: 0 }]);
  };

  const removeLineItem = (index: number) => {
    if (lineItems.length === 1) return;
    setLineItems(lineItems.filter((_, idx) => idx !== index));
  };

  // Calculate invoice values dynamically
  let subtotal = 0;
  lineItems.forEach((item) => {
    const prod = products.find((p) => p.id === item.productId);
    if (prod) {
      const price = prod.retail;
      const discountedPrice = price * (1 - item.discount / 100);
      subtotal += discountedPrice * item.qty;
    }
  });
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerId || !formData.dueDate) {
      setError('Please select a customer and set a due date.');
      return;
    }

    const validLines = lineItems.filter((item) => item.productId !== '');
    if (validLines.length === 0) {
      setError('Please add at least one valid line item.');
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const selectedCustomer = customers.find((c) => c.id === formData.customerId);
      const itemsPayload = validLines.map((line) => {
        const prod = products.find((p) => p.id === line.productId);
        return {
          productId: line.productId,
          name: prod?.name || 'Product',
          qty: line.qty,
          retail: prod ? prod.retail : 0,
          discount: line.discount,
          total: (prod ? prod.retail : 0) * (1 - line.discount / 100) * line.qty
        };
      });

      const payload = {
        customerId: formData.customerId,
        customerName: selectedCustomer ? `${selectedCustomer.first_name} ${selectedCustomer.last_name}` : 'Customer',
        amount: total,
        status: 'Unpaid',
        dueDate: new Date(formData.dueDate).toISOString(),
        items: itemsPayload,
        subtotal: subtotal,
        tax: tax,
        total: total,
      };

      await api.createInvoice(payload);
      navigate('/invoices');
    } catch (err: any) {
      setError(err.message || 'Failed to create invoice');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Create New Customer Invoice</h1>
        </header>

        <div className="page-content">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <button onClick={() => navigate('/invoices')} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              </button>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Draft Invoice Document</h2>
                <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>Input billable services, products, discounts, and terms.</p>
              </div>
            </div>

            {error && (
              <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '14px' }}>
                {error}
              </div>
            )}

            <div className="content-card">
              <div className="content-card-header">
                <h3 className="content-card-title">Invoice Information</h3>
              </div>
              <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                <div className="form-grid" style={{ gap: '20px', marginBottom: '32px' }}>
                  
                  <div className="form-group">
                    <label className="form-label">Client / Customer</label>
                    <select
                      className="form-select"
                      name="customerId"
                      value={formData.customerId}
                      onChange={(e) => setFormData({ ...formData, customerId: e.target.value })}
                      required
                    >
                      <option value="">Select customer...</option>
                      {customers.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.first_name} {c.last_name} ({c.company})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Due Date</label>
                    <input
                      type="date"
                      className="form-input"
                      value={formData.dueDate}
                      onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Invoice Line Items</h4>
                  <button type="button" onClick={addLineItem} className="btn btn-secondary btn-sm" style={{ borderColor: '#3b82f6', color: '#3b82f6' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
                    Add Line Item
                  </button>
                </div>

                {/* Line Items Table */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {lineItems.map((item, idx) => {
                    const selectedProd = products.find((p) => p.id === item.productId);
                    const unitPrice = selectedProd ? selectedProd.retail : 0;
                    const lineValue = unitPrice * (1 - item.discount / 100) * item.qty;

                    return (
                      <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-end', background: '#f8fafc', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                        <div className="form-group" style={{ flex: 3 }}>
                          <label className="form-label" style={{ fontSize: '11px' }}>Product</label>
                          <select
                            className="form-select"
                            value={item.productId}
                            onChange={(e) => handleLineChange(idx, 'productId', e.target.value)}
                            required
                          >
                            <option value="">Select item...</option>
                            {products.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} (${p.retail} retail)
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="form-group" style={{ flex: 1 }}>
                          <label className="form-label" style={{ fontSize: '11px' }}>Quantity</label>
                          <input
                            type="number"
                            className="form-input"
                            value={item.qty}
                            min="1"
                            onChange={(e) => handleLineChange(idx, 'qty', Number(e.target.value))}
                            required
                          />
                        </div>

                        <div className="form-group" style={{ flex: 1 }}>
                          <label className="form-label" style={{ fontSize: '11px' }}>Discount (%)</label>
                          <input
                            type="number"
                            className="form-input"
                            value={item.discount}
                            min="0"
                            max="100"
                            onChange={(e) => handleLineChange(idx, 'discount', Number(e.target.value))}
                          />
                        </div>

                        <div style={{ flex: 1.5, display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'right' }}>
                          <span style={{ fontSize: '11px', fontWeight: 500, color: '#64748b' }}>Subtotal</span>
                          <span style={{ fontSize: '14px', fontWeight: 700, color: '#334155', padding: '9px 0' }}>
                            {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(lineValue)}
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeLineItem(idx)}
                          className="btn btn-secondary btn-sm"
                          style={{ color: '#ef4444', height: '36px', width: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}
                          disabled={lineItems.length === 1}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Summaries */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '20px', marginBottom: '32px' }}>
                  <div style={{ display: 'flex', width: '280px', justifyContent: 'space-between', fontSize: '14px', color: '#64748b' }}>
                    <span>Subtotal</span>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(subtotal)}</span>
                  </div>
                  <div style={{ display: 'flex', width: '280px', justifyContent: 'space-between', fontSize: '14px', color: '#64748b' }}>
                    <span>Tax (8% sales tax)</span>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(tax)}</span>
                  </div>
                  <div style={{ display: 'flex', width: '280px', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: '#0f172a', borderTop: '2px solid #e2e8f0', paddingTop: '8px' }}>
                    <span>Total Amount</span>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                  <button type="button" onClick={() => navigate('/invoices')} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={submitting}>
                    {submitting ? 'Generating...' : 'Generate Invoice'}
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
