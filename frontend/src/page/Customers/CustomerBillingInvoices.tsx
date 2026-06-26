import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const CustomerBillingInvoices: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customer, setCustomer] = useState<any>(null);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBillingData = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const custRes = await api.getCustomer(id);
        const invRes = await api.getCustomerInvoices(id);
        if (custRes.success && custRes.data) {
          setCustomer(custRes.data);
        }
        if (invRes.success && invRes.data) {
          setInvoices(invRes.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch customer invoices');
      } finally {
        setLoading(false);
      }
    };
    fetchBillingData();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ color: '#64748b' }}>Loading invoices...</div>
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

  const totalBilled = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const outstanding = invoices.reduce((sum, inv) => {
    if (inv.status === 'Overdue') return sum + inv.amount;
    if (inv.status === 'Partial') return sum + (inv.remaining || 0);
    return sum;
  }, 0);
  const overdue = invoices.reduce((sum, inv) => {
    if (inv.status === 'Overdue') return sum + inv.amount;
    return sum;
  }, 0);

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
            <h1 className="topbar-title">{customer.company} - Invoices</h1>
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
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0, color: '#0f172a' }}>{customer.company} Invoices</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '4px 0 0' }}>Manage and track billing history for this account.</p>
            </div>
            <button className="btn btn-primary" onClick={() => alert('New invoice creation...')}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              New Invoice
            </button>
          </div>

          {/* Metrics Bento Grid */}
          <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Total Lifetime Billed</span>
                <div className="stat-card-icon" style={{ background: '#dbeafe' }}>
                  <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>account_balance_wallet</span>
                </div>
              </div>
              <div className="stat-card-value">{formatCurrency(totalBilled)}</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Outstanding Balance</span>
                <div className="stat-card-icon" style={{ background: '#fef3c7' }}>
                  <span className="material-symbols-outlined" style={{ color: '#f59e0b' }}>pending_actions</span>
                </div>
              </div>
              <div className="stat-card-value" style={{ color: '#b45309' }}>{formatCurrency(outstanding)}</div>
            </div>
            <div className="stat-card" style={{ border: overdue > 0 ? '1px solid #fca5a5' : '1px solid #e2e8f0' }}>
              <div className="stat-card-header">
                <span className="stat-card-label" style={{ color: overdue > 0 ? '#ef4444' : '#64748b' }}>Overdue</span>
                <div className="stat-card-icon" style={{ background: '#fee2e2' }}>
                  <span className="material-symbols-outlined" style={{ color: '#ef4444' }}>warning</span>
                </div>
              </div>
              <div className="stat-card-value" style={{ color: '#ef4444' }}>{formatCurrency(overdue)}</div>
            </div>
          </div>

          {/* Invoices List Card */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Invoices List</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Invoice Number</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th style={{ textAlign: 'right' }}>Amount</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} style={{ background: inv.status === 'Overdue' ? '#fff5f5' : 'transparent' }}>
                      <td style={{ fontWeight: 600, color: '#3b82f6' }}>{inv.id}</td>
                      <td>{inv.issue_date}</td>
                      <td style={{ color: inv.status === 'Overdue' ? '#ef4444' : '#64748b', fontWeight: inv.status === 'Overdue' ? 600 : 400 }}>
                        {inv.due_date}
                        {inv.status === 'Overdue' && (
                          <span className="material-symbols-outlined" style={{ fontSize: '14px', marginLeft: '4px', color: '#ef4444', verticalAlign: 'middle' }}>
                            warning
                          </span>
                        )}
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>
                        {formatCurrency(inv.amount)}
                        {inv.remaining !== undefined && (
                          <span style={{ display: 'block', fontSize: '11px', color: '#b45309', fontWeight: 400 }}>
                            {formatCurrency(inv.remaining)} remaining
                          </span>
                        )}
                      </td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background: inv.status === 'Paid' ? '#d1fae5' : inv.status === 'Overdue' ? '#fee2e2' : '#fef3c7',
                            color: inv.status === 'Paid' ? '#065f46' : inv.status === 'Overdue' ? '#dc2626' : '#b45309',
                          }}
                        >
                          {inv.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="btn btn-secondary btn-sm" onClick={() => alert(`Opening Invoice ${inv.id}...`)}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span>
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
