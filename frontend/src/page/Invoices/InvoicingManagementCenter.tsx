import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const InvoicingManagementCenter: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const navigate = useNavigate();

  const loadInvoices = async () => {
    setLoading(true);
    try {
      const res = await api.getInvoices();
      setInvoices(res.data || []);
    } catch (err) {
      console.error('Failed to load invoices', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoices();
  }, []);

  const totalPaid = invoices
    .filter((inv) => inv.status === 'Paid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalReceivables = invoices
    .filter((inv) => inv.status === 'Unpaid')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const totalOverdue = invoices
    .filter((inv) => inv.status === 'Overdue')
    .reduce((sum, inv) => sum + inv.amount, 0);

  const filteredInvoices = invoices.filter((inv) => {
    const matchesSearch = inv.customerName.toLowerCase().includes(search.toLowerCase()) || inv.id.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || inv.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Invoicing Management Center</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search invoices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to="/invoices/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Create Invoice
            </Link>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Billing & Invoices</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review customer billing history, outstanding receivables, and payments.</p>
            </div>
          </div>

          {/* Metrics */}
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Total Receivables</span>
                <div className="stat-card-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
                  <span className="material-symbols-outlined">pending_actions</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalReceivables)}
              </span>
              <div className="stat-card-change" style={{ color: '#b45309' }}>
                <span>Unpaid customer accounts</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Paid Invoices</span>
                <div className="stat-card-icon" style={{ background: '#d1fae5', color: '#065f46' }}>
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalPaid)}
              </span>
              <div className="stat-card-change up">
                <span>Settled YTD</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Overdue Billing</span>
                <div className="stat-card-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                  <span className="material-symbols-outlined">warning</span>
                </div>
              </div>
              <span className="stat-card-value">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(totalOverdue)}
              </span>
              <div className="stat-card-change down">
                <span>Requires follow-up</span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
            {['All', 'Paid', 'Unpaid', 'Overdue'].map((status) => (
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
                {status === 'All' ? 'All Invoices' : status}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Invoices</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading invoices...</div>
              ) : filteredInvoices.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No invoices registered.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Customer Name</th>
                      <th>Issue Date</th>
                      <th>Amount</th>
                      <th>Due Date</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredInvoices.map((inv) => (
                      <tr key={inv.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/invoices/${inv.id}`)}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 600 }}>{inv.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{inv.customerName}</td>
                        <td style={{ color: '#64748b' }}>{new Date(inv.date).toLocaleDateString()}</td>
                        <td style={{ fontWeight: 700 }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inv.amount)}
                        </td>
                        <td style={{ color: '#64748b' }}>{new Date(inv.dueDate).toLocaleDateString()}</td>
                        <td>
                          <span className="badge" style={{
                            background: inv.status === 'Paid' ? '#d1fae5' : inv.status === 'Unpaid' ? '#fef3c7' : '#fee2e2',
                            color: inv.status === 'Paid' ? '#065f46' : inv.status === 'Unpaid' ? '#b45309' : '#dc2626'
                          }}>
                            {inv.status}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }} onClick={(e) => e.stopPropagation()}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <Link to={`/invoices/${inv.id}`} className="btn btn-secondary btn-sm" title="View Details">
                              Details
                            </Link>
                            <Link to={`/invoices/${inv.id}/preview`} className="btn btn-secondary btn-sm" title="Preview Document">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>picture_as_pdf</span>
                            </Link>
                          </div>
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
    </div>
  );
};
