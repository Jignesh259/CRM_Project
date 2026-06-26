import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const PendingPaymentSettlements: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [pendingPayments, setPendingPayments] = useState<any[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadData = async () => {
    setLoading(true);
    try {
      const payRes = await api.getCustomerPaymentsLocal();
      const list = payRes.data || [];
      const pendingList = list.filter((p: any) => p.status === 'Processing');
      setPendingPayments(pendingList);
      setFilteredPayments(pendingList);
    } catch (err) {
      console.error('Failed to load pending payments', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (search) {
      const q = search.toLowerCase();
      const result = pendingPayments.filter(
        (p) =>
          p.id.toLowerCase().includes(q) ||
          p.customerName.toLowerCase().includes(q) ||
          (p.invoiceId && p.invoiceId.toLowerCase().includes(q))
      );
      setFilteredPayments(result);
    } else {
      setFilteredPayments(pendingPayments);
    }
  }, [search, pendingPayments]);

  // Settle Payment handler (Approve)
  const handleSettle = async (id: string) => {
    try {
      const dataStr = localStorage.getItem('cs_customer_payments') || '[]';
      const list = JSON.parse(dataStr);
      const idx = list.findIndex((p: any) => p.id === id);
      if (idx !== -1) {
        list[idx].status = 'Completed';
        list[idx].settlementDate = new Date().toISOString();
        localStorage.setItem('cs_customer_payments', JSON.stringify(list));
      }
      await loadData();
    } catch (err) {
      console.error('Failed to settle payment', err);
    }
  };

  // Fail Payment handler (Reject)
  const handleFail = async (id: string) => {
    try {
      const dataStr = localStorage.getItem('cs_customer_payments') || '[]';
      const list = JSON.parse(dataStr);
      const idx = list.findIndex((p: any) => p.id === id);
      if (idx !== -1) {
        list[idx].status = 'Failed';
        list[idx].failureReason = 'Settlement manually declined by admin';
        localStorage.setItem('cs_customer_payments', JSON.stringify(list));
      }
      await loadData();
    } catch (err) {
      console.error('Failed to reject payment', err);
    }
  };

  // Calculations
  const grossVolume = pendingPayments.reduce((sum, p) => sum + Number(p.amount), 0);
  const totalFees = pendingPayments.reduce((sum, p) => sum + Number(p.transactionFee || 0), 0);
  const netPayout = grossVolume - totalFees;

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Top bar */}
        <header className="topbar">
          <h1 className="topbar-title">Settlement Management</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search processing settlements..."
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
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Pending Payment Settlements</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review and authorize outbound settlements for processing merchant transactions.</p>
            </div>
          </div>

          {/* KPI Dashboard */}
          <div className="bento-grid" style={{ marginBottom: '24px' }}>
            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Gross Pending Vol</span>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: '8px 0 4px' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(grossVolume)}
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Before processing charges</span>
            </div>

            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Est. Settlement Fees</span>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#e11d48', margin: '8px 0 4px' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalFees)}
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Estimated payment gateway costs</span>
            </div>

            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Net Cash Payout</span>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#16a34a', margin: '8px 0 4px' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netPayout)}
              </div>
              <span style={{ fontSize: '12px', color: '#16a34a' }}>Expected net bank transfer</span>
            </div>

            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Active Batches</span>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: '8px 0 4px' }}>
                {pendingPayments.length}
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Payments requiring settlement</span>
            </div>
          </div>

          {/* Pending List Card */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Pending Settlement Transactions</h3>
            </div>
            <div className="content-card-body" style={{ padding: 0, overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading pending settlements...</div>
              ) : filteredPayments.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No pending settlements found. All cleared!</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Payment ID</th>
                      <th>Customer</th>
                      <th>Initiation Date</th>
                      <th>Method</th>
                      <th>Gross Amount</th>
                      <th>Est. Fee</th>
                      <th>Est. Net</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Settlement Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((p) => {
                      const fee = p.transactionFee || 0;
                      const net = p.amount - fee;
                      return (
                        <tr key={p.id}>
                          <td style={{ fontWeight: 600, color: '#005dac', fontFamily: 'monospace' }} onClick={() => navigate(`/finance/transactions/${p.id}`)}>
                            {p.id}
                          </td>
                          <td style={{ fontWeight: 600, color: '#0f172a' }}>{p.customerName}</td>
                          <td>{new Date(p.date).toLocaleDateString()} {new Date(p.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                          <td>{p.paymentMethod}</td>
                          <td style={{ fontWeight: 600 }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.amount)}</td>
                          <td style={{ color: '#e11d48' }}>-{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(fee)}</td>
                          <td style={{ fontWeight: 700, color: '#16a34a' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(net)}</td>
                          <td>
                            <span className="badge" style={{ background: '#ffedd5', color: '#ea580c' }}>
                              {p.status}
                            </span>
                          </td>
                          <td style={{ textAlign: 'right' }}>
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                              <button
                                onClick={() => handleSettle(p.id)}
                                className="btn btn-primary btn-sm"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  background: '#16a34a',
                                  borderColor: '#16a34a',
                                  color: '#fff',
                                  padding: '4px 8px',
                                  fontSize: '12px',
                                }}
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>check</span>
                                Approve
                              </button>
                              <button
                                onClick={() => handleFail(p.id)}
                                className="btn btn-secondary btn-sm"
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  color: '#dc2626',
                                  borderColor: '#dc2626',
                                  padding: '4px 8px',
                                  fontSize: '12px',
                                }}
                              >
                                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>close</span>
                                Decline
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
