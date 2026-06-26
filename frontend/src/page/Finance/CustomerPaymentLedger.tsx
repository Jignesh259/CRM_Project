import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const CustomerPaymentLedger: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [payments, setPayments] = useState<any[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<any[]>([]);
  const [customers, setCustomers] = useState<any[]>([]);
  const [invoices, setInvoices] = useState<any[]>([]);
  
  // Filters
  const [search, setSearch] = useState('');
  const [methodFilter, setMethodFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Loading & Modal State
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [newPayment, setNewPayment] = useState({
    customerId: '',
    invoiceId: '',
    amount: '',
    paymentMethod: 'Wire Transfer',
    status: 'Completed',
    notes: '',
  });

  const navigate = useNavigate();

  const loadData = async () => {
    setLoading(true);
    try {
      const payRes = await api.getCustomerPaymentsLocal();
      setPayments(payRes.data || []);

      const custRes = await api.getCustomers();
      // Handle different possible structures of customer response
      setCustomers(custRes.data?.customers || custRes.data || []);

      const invRes = await api.getInvoices();
      setInvoices(invRes.data || []);
    } catch (err: any) {
      console.error('Failed to load ledger data', err);
      setError(err.message || 'Failed to load ledger data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter payments
  useEffect(() => {
    let result = [...payments];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.id.toLowerCase().includes(q) ||
          p.customerName.toLowerCase().includes(q) ||
          (p.invoiceId && p.invoiceId.toLowerCase().includes(q))
      );
    }

    if (methodFilter !== 'All') {
      result = result.filter((p) => p.paymentMethod === methodFilter);
    }

    if (statusFilter !== 'All') {
      result = result.filter((p) => p.status === statusFilter);
    }

    setFilteredPayments(result);
  }, [search, methodFilter, statusFilter, payments]);

  // Calculations for KPIs
  const totalMTD = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  const pendingSettlements = payments
    .filter((p) => p.status === 'Processing')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  const pendingCount = payments.filter((p) => p.status === 'Processing').length;

  const failedTotal = payments
    .filter((p) => p.status === 'Failed')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  const handleCreatePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPayment.customerId || !newPayment.amount) {
      setError('Please select a customer and specify amount.');
      return;
    }

    try {
      const selectedCust = customers.find((c) => String(c.id) === String(newPayment.customerId));
      const customerName = selectedCust 
        ? `${selectedCust.first_name || ''} ${selectedCust.last_name || ''}`.trim() || selectedCust.company
        : 'Unknown Customer';

      const payload = {
        customerId: newPayment.customerId,
        customerName: customerName,
        amount: Number(newPayment.amount),
        date: new Date().toISOString(),
        paymentMethod: newPayment.paymentMethod,
        status: newPayment.status,
        invoiceId: newPayment.invoiceId || 'N/A',
        notes: newPayment.notes,
      };

      await api.createCustomerPaymentLocal(payload);
      
      // Reset form and reload
      setNewPayment({
        customerId: '',
        invoiceId: '',
        amount: '',
        paymentMethod: 'Wire Transfer',
        status: 'Completed',
        notes: '',
      });
      setShowModal(false);
      setError(null);
      loadData();
    } catch (err: any) {
      setError(err.message || 'Failed to create payment record');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Top bar */}
        <header className="topbar">
          <h1 className="topbar-title">Finance & Payments</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search payments by ID, customer..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Customer Payments Ledger</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Central ledger for all customer transaction records.</p>
            </div>
            <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add_card</span>
              Record Payment
            </button>
          </div>

          {/* KPI Cards */}
          <div className="bento-grid">
            <div className="col-span-4 content-card card-hover-effect" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 600 }}>Total Collected (All-Time)</span>
                <span className="material-symbols-outlined" style={{ color: '#16a34a', background: '#d1fae5', padding: '8px', borderRadius: '8px' }}>payments</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalMTD)}
              </div>
              <div style={{ fontSize: '12px', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                Verified completed payments
              </div>
            </div>

            <div className="col-span-4 content-card card-hover-effect" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 600 }}>Pending Settlements</span>
                <span className="material-symbols-outlined" style={{ color: '#ea580c', background: '#ffedd5', padding: '8px', borderRadius: '8px' }}>pending_actions</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pendingSettlements)}
              </div>
              <div style={{ fontSize: '12px', color: '#ea580c', marginTop: '8px' }}>
                {pendingCount} transactions currently processing
              </div>
            </div>

            <div className="col-span-4 content-card card-hover-effect" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 600 }}>Failed Collections</span>
                <span className="material-symbols-outlined" style={{ color: '#dc2626', background: '#fee2e2', padding: '8px', borderRadius: '8px' }}>warning</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(failedTotal)}
              </div>
              <div style={{ fontSize: '12px', color: '#dc2626', marginTop: '8px' }}>
                Requires immediate collection retry
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="content-card" style={{ padding: '16px', marginBottom: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Payment Method</span>
              <select
                className="form-select"
                style={{ width: '180px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={methodFilter}
                onChange={(e) => setMethodFilter(e.target.value)}
              >
                <option value="All">All Methods</option>
                <option value="Wire Transfer">Wire Transfer</option>
                <option value="Credit Card">Credit Card</option>
                <option value="ACH">ACH</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Status</span>
              <select
                className="form-select"
                style={{ width: '160px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Completed">Completed</option>
                <option value="Processing">Processing</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          </div>

          {/* Ledger Table */}
          <div className="content-card">
            <div className="content-card-body" style={{ padding: 0, overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading payment ledger...</div>
              ) : filteredPayments.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No payments found matching criteria.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Payment ID</th>
                      <th>Customer</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Invoice ID</th>
                      <th>Txn Fee</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((p) => (
                      <tr key={p.id} onClick={() => navigate(`/finance/transactions/${p.id}`)} style={{ cursor: 'pointer' }}>
                        <td style={{ fontWeight: 600, color: '#005dac', fontFamily: 'monospace' }}>{p.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{p.customerName}</td>
                        <td>{new Date(p.date).toLocaleDateString()} {new Date(p.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                        <td style={{ fontWeight: 700 }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.amount)}</td>
                        <td>{p.paymentMethod}</td>
                        <td style={{ fontFamily: 'monospace' }}>{p.invoiceId || 'N/A'}</td>
                        <td style={{ color: '#64748b' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.transactionFee || 0)}</td>
                        <td>
                          <span className="badge" style={{
                            background: p.status === 'Completed' ? '#d1fae5' : p.status === 'Processing' ? '#ffedd5' : '#fee2e2',
                            color: p.status === 'Completed' ? '#065f46' : p.status === 'Processing' ? '#ea580c' : '#b91c1c'
                          }}>
                            {p.status}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => navigate(`/finance/transactions/${p.id}`)}
                            className="btn btn-secondary btn-sm"
                            style={{ padding: '4px 8px', fontSize: '12px' }}
                          >
                            Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Record Payment Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(4px)',
        }}>
          <div className="content-card" style={{ width: '550px', maxWidth: '95%', margin: 0, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}>
            <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <h3 className="content-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#005dac' }}>add_card</span>
                Record Customer Payment
              </h3>
              <button onClick={() => { setShowModal(false); setError(null); }} className="btn btn-secondary btn-sm" style={{ padding: '4px', minWidth: 'auto' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
              </button>
            </div>
            
            <form onSubmit={handleCreatePayment} style={{ padding: '24px' }}>
              {error && (
                <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
                  {error}
                </div>
              )}

              <div className="form-grid" style={{ gap: '16px', marginBottom: '20px' }}>
                <div className="form-group">
                  <label className="form-label">Select Customer</label>
                  <select
                    className="form-select"
                    value={newPayment.customerId}
                    onChange={(e) => setNewPayment({ ...newPayment, customerId: e.target.value })}
                    required
                  >
                    <option value="">Select a customer...</option>
                    {customers.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.first_name || ''} {c.last_name || ''} ({c.company || 'N/A'})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Linked Invoice ID (Optional)</label>
                  <select
                    className="form-select"
                    value={newPayment.invoiceId}
                    onChange={(e) => setNewPayment({ ...newPayment, invoiceId: e.target.value })}
                  >
                    <option value="">No invoice linkage...</option>
                    {invoices.map((i) => (
                      <option key={i.id} value={i.id}>
                        {i.id} - {i.customerName} ({new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(i.total)})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    className="form-input"
                    placeholder="Enter amount..."
                    value={newPayment.amount}
                    onChange={(e) => setNewPayment({ ...newPayment, amount: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Payment Method</label>
                  <select
                    className="form-select"
                    value={newPayment.paymentMethod}
                    onChange={(e) => setNewPayment({ ...newPayment, paymentMethod: e.target.value })}
                  >
                    <option value="Wire Transfer">Wire Transfer</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="ACH">ACH Transfer</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newPayment.status}
                    onChange={(e) => setNewPayment({ ...newPayment, status: e.target.value })}
                  >
                    <option value="Completed">Completed</option>
                    <option value="Processing">Processing</option>
                    <option value="Failed">Failed</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Notes / Remarks</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="E.g., Q3 Licensing fees..."
                    value={newPayment.notes}
                    onChange={(e) => setNewPayment({ ...newPayment, notes: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button type="button" onClick={() => { setShowModal(false); setError(null); }} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Save Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
