import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const VendorPayments: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [payments, setPayments] = useState<any[]>([]);
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showRecordModal, setShowRecordModal] = useState(false);
  const [formData, setFormData] = useState({
    vendorId: '',
    invoiceNo: '',
    amount: '',
    paymentMethod: 'ACH Transfer',
  });
  const [modalError, setModalError] = useState<string | null>(null);

  const loadPaymentData = async () => {
    setLoading(true);
    try {
      const payRes = await api.getVendorPayments();
      setPayments(payRes.data || []);

      const vendRes = await api.getVendors();
      setVendors(vendRes.data || []);
    } catch (err) {
      console.error('Failed to load payments details', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPaymentData();
  }, []);

  const totalYTD = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = payments
    .filter((p) => p.status === 'Pending')
    .reduce((sum, p) => sum + p.amount, 0);

  const handleRecordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.vendorId || !formData.amount || !formData.invoiceNo) {
      setModalError('Please specify Vendor, Invoice No., and Amount.');
      return;
    }

    try {
      const selectedVendor = vendors.find((v) => v.id === formData.vendorId);
      const payload = {
        vendorId: formData.vendorId,
        vendorName: selectedVendor?.name || 'Vendor',
        invoiceNo: formData.invoiceNo,
        amount: Number(formData.amount),
        paymentMethod: formData.paymentMethod,
      };

      await api.createVendorPayment(payload);
      setShowRecordModal(false);
      setFormData({ vendorId: '', invoiceNo: '', amount: '', paymentMethod: 'ACH Transfer' });
      setModalError(null);
      loadPaymentData();
    } catch (err: any) {
      setModalError(err.message || 'Failed to record payment');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Vendor Payment Ledger</h1>
          <div className="topbar-actions">
            <button onClick={() => setShowRecordModal(true)} className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Record Vendor Payment
            </button>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Outbound Payments</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review accounts payable, paid invoices, and pending approvals.</p>
            </div>
          </div>

          {/* Stats */}
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Paid YTD</span>
                <div className="stat-card-icon" style={{ background: '#d1fae5', color: '#065f46' }}>
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalYTD)}
              </span>
              <div className="stat-card-change up">
                <span>Completed transactions</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Pending Approval</span>
                <div className="stat-card-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
                  <span className="material-symbols-outlined">pending</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalPending)}
              </span>
              <div className="stat-card-change" style={{ color: '#b45309' }}>
                <span>Awaiting finance clearance</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Outstanding Invoices</span>
                <div className="stat-card-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                  <span className="material-symbols-outlined">schedule</span>
                </div>
              </div>
              <span className="stat-card-value">1</span>
              <div className="stat-card-change down">
                <span>Payment due soon</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Payment History Logs</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading payment history...</div>
              ) : payments.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No payments recorded.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Payment ID</th>
                      <th>Vendor</th>
                      <th>Invoice Number</th>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr key={p.id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{p.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{p.vendorName}</td>
                        <td style={{ fontFamily: 'monospace' }}>{p.invoiceNo}</td>
                        <td style={{ fontWeight: 700 }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.amount)}
                        </td>
                        <td>{p.paymentMethod}</td>
                        <td style={{ color: '#64748b' }}>{new Date(p.date).toLocaleDateString()}</td>
                        <td>
                          <span className="badge" style={{
                            background: p.status === 'Completed' ? '#d1fae5' : '#fef3c7',
                            color: p.status === 'Completed' ? '#065f46' : '#b45309'
                          }}>
                            {p.status}
                          </span>
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
        {showRecordModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
            <div className="content-card" style={{ width: '450px', background: 'white' }}>
              <div className="content-card-header">
                <h3 className="content-card-title">Record Vendor Payment</h3>
                <button onClick={() => setShowRecordModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleRecordSubmit} style={{ padding: '24px' }}>
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
                    <label className="form-label">Invoice Number</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. INV-NET-9912"
                      value={formData.invoiceNo}
                      onChange={(e) => setFormData({ ...formData, invoiceNo: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Amount Paid ($)</label>
                    <input
                      type="number"
                      className="form-input"
                      placeholder="e.g. 5000"
                      min="1"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Payment Method</label>
                    <select
                      className="form-select"
                      value={formData.paymentMethod}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    >
                      <option value="ACH Transfer">ACH Transfer</option>
                      <option value="Wire Transfer">Wire Transfer</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Check">Check</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '24px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <button type="button" onClick={() => setShowRecordModal(false)} className="btn btn-secondary">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Record Payment
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
