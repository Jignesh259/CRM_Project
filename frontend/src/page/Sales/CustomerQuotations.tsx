import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const CustomerQuotations: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    customerId: '',
    productId: '',
    qty: '',
  });
  const [modalError, setModalError] = useState<string | null>(null);

  const loadQuotesData = async () => {
    setLoading(true);
    try {
      const qRes = await api.getQuotes();
      setQuotes(qRes.data || []);

      const custRes = await api.getCustomers();
      setCustomers(custRes.data?.customers || []);

      const prodRes = await api.getProducts();
      setProducts(prodRes.data?.products || []);
    } catch (err) {
      console.error('Failed to load quotes details', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadQuotesData();
  }, []);

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerId || !formData.productId || !formData.qty) {
      setModalError('Please specify Customer, Product, and Quantity.');
      return;
    }

    try {
      const selectedCustomer = customers.find((c) => c.id === formData.customerId);
      const selectedProd = products.find((p) => p.id === formData.productId);
      const qty = Number(formData.qty);
      const retail = selectedProd ? selectedProd.retail : 0;
      const total = qty * retail;

      const payload = {
        customerId: formData.customerId,
        customerName: selectedCustomer ? `${selectedCustomer.first_name} ${selectedCustomer.last_name}` : 'Customer',
        total: total,
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days validation
        items: [
          {
            productId: formData.productId,
            name: selectedProd?.name || 'Product',
            qty: qty,
            retail: retail,
            total: total,
          },
        ],
      };

      await api.createQuote(payload);
      setShowCreateModal(false);
      setFormData({ customerId: '', productId: '', qty: '' });
      setModalError(null);
      loadQuotesData();
    } catch (err: any) {
      setModalError(err.message || 'Failed to create quote');
    }
  };

  const handleConvertToInvoice = async (quote: any) => {
    if (!window.confirm(`Convert quote ${quote.id} for ${quote.customerName} to a Customer Invoice?`)) return;
    try {
      const payload = {
        customerId: quote.customerId,
        customerName: quote.customerName,
        amount: quote.total,
        status: 'Unpaid',
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        items: quote.items,
        subtotal: quote.total,
        tax: Number((quote.total * 0.08).toFixed(2)),
        total: Number((quote.total * 1.08).toFixed(2)),
      };

      const res = await api.createInvoice(payload);
      if (res.success) {
        // Mark the quote as Invoiced via the backend
        await api.updateQuote(quote.id, { status: 'Invoiced' });
        alert('Quote successfully converted to Customer Invoice: ' + res.data.id);
        loadQuotesData();
      }
    } catch (err: any) {
      alert(err.message || 'Failed to convert quote to invoice');
    }
  };

  const filteredQuotes = quotes.filter((q) => {
    const matchesSearch = q.customerName.toLowerCase().includes(search.toLowerCase()) || q.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || q.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Customer Quotations</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search quotes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button onClick={() => setShowCreateModal(true)} className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Create Quotation
            </button>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Sales Quotations</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Draft pricing proposals, email quotes, and track customer negotiations.</p>
            </div>
          </div>

          {/* Status Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {['All', 'Sent', 'Accepted', 'Invoiced', 'Expired'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderColor: statusFilter === status ? '#3b82f6' : '#e2e8f0',
                  background: statusFilter === status ? '#dbeafe' : 'white',
                  color: statusFilter === status ? '#1d4ed8' : '#64748b',
                  transition: 'all 0.2s',
                }}
              >
                {status === 'All' ? 'All Proposals' : status}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Quotations List ({filteredQuotes.length})</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading quotes...</div>
              ) : filteredQuotes.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No quotations recorded.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Quote ID</th>
                      <th>Customer Name</th>
                      <th>Creation Date</th>
                      <th>Total Proposal</th>
                      <th>Valid Until</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredQuotes.map((q) => (
                      <tr key={q.id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{q.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{q.customerName}</td>
                        <td style={{ color: '#64748b' }}>{new Date(q.date).toLocaleDateString()}</td>
                        <td style={{ fontWeight: 700 }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(q.total)}
                        </td>
                        <td style={{ color: '#64748b' }}>{new Date(q.validUntil).toLocaleDateString()}</td>
                        <td>
                          <span className="badge" style={{
                            background: q.status === 'Accepted' ? '#d1fae5' : q.status === 'Sent' ? '#dbeafe' : q.status === 'Invoiced' ? '#ede9fe' : '#f1f5f9',
                            color: q.status === 'Accepted' ? '#065f46' : q.status === 'Sent' ? '#1d4ed8' : q.status === 'Invoiced' ? '#5b21b6' : '#475569'
                          }}>
                            {q.status}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          {q.status === 'Accepted' && (
                            <button
                              onClick={() => handleConvertToInvoice(q)}
                              className="btn btn-secondary btn-sm"
                              style={{ borderColor: '#10b981', color: '#10b981' }}
                            >
                              Convert to Invoice
                            </button>
                          )}
                          {q.status === 'Invoiced' && (
                            <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', marginRight: '10px' }}>
                              Invoice Created
                            </span>
                          )}
                          {q.status === 'Sent' && (
                            <span style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', marginRight: '10px' }}>
                              Awaiting Customer
                            </span>
                          )}
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
            <div className="content-card" style={{ width: '450px', background: 'white' }}>
              <div className="content-card-header">
                <h3 className="content-card-title">Generate Quote Proposal</h3>
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
                    <label className="form-label">Product</label>
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
                          {p.name} (${p.retail} retail)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Quantity</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="e.g. 5"
                      min="1"
                      value={formData.qty}
                      onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <button type="button" onClick={() => setShowCreateModal(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Create Quote
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
