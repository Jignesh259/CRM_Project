import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const CustomerPaymentRecords: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customer, setCustomer] = useState<any>(null);
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentData = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const custRes = await api.getCustomer(id);
        const paymentsRes = await api.getCustomerPayments(id);
        if (custRes.success && custRes.data) {
          setCustomer(custRes.data);
        }
        if (paymentsRes.success && paymentsRes.data) {
          setPayments(paymentsRes.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch customer payments');
      } finally {
        setLoading(false);
      }
    };
    fetchPaymentData();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ color: '#64748b' }}>Loading payments...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !customer) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ padding: '24px' }}>
            <div className="btn btn-secondary btn-sm" onClick={() => navigate('/customers')} style={{ marginBottom: '16px', display: 'inline-flex', cursor: 'pointer' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Back to Customers
            </div>
            <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              {error || 'Customer not found'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* ── Topbar ── */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to={`/customers/${customer.id}`} style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="topbar-title">{customer.company} - Payments</h1>
          </div>
        </header>

        {/* ── Page Content ── */}
        <div className="page-content" style={{ background: '#f8fafc' }}>
          {/* Page Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <Link to={`/customers/${customer.id}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', color: '#64748b', fontSize: '12px', fontWeight: 600, marginBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_back</span>
                Back to Client Profile
              </Link>
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Customer Payments</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '4px 0 0' }}>Manage payment methods and track transaction history.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" onClick={() => alert('Exporting payment records...')}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Export
              </button>
              <button className="btn btn-primary" onClick={() => alert('Adding new payment method...')}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add_card</span>
                New Payment Method
              </button>
            </div>
          </div>

          {/* Top Grid: Saved Methods & Quick Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', marginBottom: '24px' }}>
            {/* Saved Payment Methods Card */}
            <div className="content-card" style={{ gridColumn: 'span 8', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: 0 }}>Saved Payment Methods</h3>
                <button style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>Manage All</button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {/* Visa Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
                  padding: '16px',
                  borderRadius: '12px',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '130px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '16px', fontWeight: 800, fontStyle: 'italic', letterSpacing: '0.05em' }}>VISA</span>
                      <span style={{ background: 'rgba(255,255,255,0.2)', fontSize: '10px', padding: '2px 6px', borderRadius: '8px' }}>Primary</span>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'rgba(255,255,255,0.6)' }}>more_vert</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '4px' }}>•••• •••• •••• 4242</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                      <span>EXP 12/26</span>
                      <span style={{ fontWeight: 600, color: '#fff' }}>{customer.company}</span>
                    </div>
                  </div>
                </div>

                {/* Mastercard Card */}
                <div style={{
                  background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
                  padding: '16px',
                  borderRadius: '12px',
                  color: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '130px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '16px', fontWeight: 800, fontStyle: 'italic', letterSpacing: '0.05em' }}>MC</span>
                    <span className="material-symbols-outlined" style={{ color: 'rgba(255,255,255,0.6)' }}>more_vert</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', letterSpacing: '2px', fontFamily: 'monospace', marginBottom: '4px' }}>•••• •••• •••• 8812</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>
                      <span>EXP 08/25</span>
                      <span style={{ fontWeight: 600, color: '#fff' }}>{customer.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="content-card" style={{
              gridColumn: 'span 4',
              padding: '24px',
              background: 'linear-gradient(135deg, #005dac 0%, #1976d2 100%)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle glass effect accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', transform: 'translate(20px, -20px)' }}></div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e0f2fe', fontSize: '12px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span>
                  30-Day Volume
                </div>
                <div style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em' }}>$142,850</div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#e0f2fe' }}>
                <div>
                  <span style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Success Rate</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>98.4%</span>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                <div>
                  <span style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>Avg Transaction</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>$1,240</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment History Table */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Transaction History</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Date &amp; Time</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                    <th>Method</th>
                    <th>Customer</th>
                    <th>Status</th>
                    <th style={{ width: '12px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((p) => (
                    <tr key={p.id}>
                      <td style={{ fontWeight: 600, color: '#334155' }}>{p.id}</td>
                      <td>
                        <div style={{ color: '#0f172a' }}>{p.date}</div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{p.time}</div>
                      </td>
                      <td style={{ fontWeight: 600, color: '#0f172a', textAlign: 'right', fontFamily: 'monospace' }}>{formatCurrency(p.amount)}</td>
                      <td>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#64748b' }}>{p.icon}</span>
                          <span style={{ color: '#0f172a' }}>{p.method}</span>
                        </div>
                      </td>
                      <td>{customer.company}</td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background: p.status === 'Success' ? '#d4ebd8' : p.status === 'Failed' ? '#fee2e2' : '#f1f5f9',
                            color: p.status === 'Success' ? '#1c5f2c' : p.status === 'Failed' ? '#dc2626' : '#475569',
                          }}
                        >
                          <span style={{
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: p.status === 'Success' ? '#1c5f2c' : p.status === 'Failed' ? '#dc2626' : '#94a3b8',
                            marginRight: '6px'
                          }}></span>
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <button className="btn btn-secondary btn-sm" onClick={() => alert(`Opening Transaction Receipt for ${p.id}...`)}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
