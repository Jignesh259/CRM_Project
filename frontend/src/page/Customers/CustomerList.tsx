import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

const getInitials = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
};

const getAvatarColor = (id: string) => {
  const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#8b5cf6', '#10b981', '#ec4899', '#6366f1'];
  let sum = 0;
  for (let i = 0; i < id.length; i++) sum += id.charCodeAt(i);
  return colors[sum % colors.length];
};

const formatValue = (val: number | null) => {
  if (val === null || val === undefined) return '₹0';
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
};

export const CustomerList: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const navigate = useNavigate();
  const statuses = ['All', 'Active', 'Pending', 'Inactive'];

  const loadCustomers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.getCustomers({
        search: search || undefined,
        status: statusFilter === 'All' ? undefined : statusFilter,
      });
      if (response.success && response.data) {
        setCustomers(response.data.customers || []);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load customers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCustomers();
  }, [search, statusFilter]);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this customer?')) return;
    try {
      await api.deleteCustomer(id);
      loadCustomers();
    } catch (err: any) {
      alert(err.message || 'Failed to delete customer');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">CRM - Customer List</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input type="text" placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Link to="/customers/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              New Customer
            </Link>
          </div>
        </header>

        <div className="page-content">
          {/* ── Page Header ── */}
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Customers</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Manage your client relationships and MRR.</p>
            </div>
          </div>

          {/* ── Status Tabs ── */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif',
                  borderColor: statusFilter === s ? '#3b82f6' : '#e2e8f0',
                  background: statusFilter === s ? '#dbeafe' : 'white',
                  color: statusFilter === s ? '#1d4ed8' : '#64748b',
                  transition: 'all 0.2s',
                }}
              >
                {s === 'All' ? 'All Customers' : s}
              </button>
            ))}
          </div>

          {/* ── Table Card ── */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Customers ({customers.length})</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading customers...</div>
              ) : error ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
              ) : customers.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No customers found.</div>
              ) : (
                <table className="data-table" style={{ minWidth: '800px' }}>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Company</th>
                      <th>MRR</th>
                      <th>Status</th>
                      <th>Last Order</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((c) => (
                      <tr key={c.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/customers/${c.id}`)}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div className="avatar" style={{ background: getAvatarColor(c.id), width: '34px', height: '34px', fontSize: '12px' }}>
                              {getInitials(c.first_name, c.last_name)}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, color: '#0f172a' }}>{c.first_name} {c.last_name}</div>
                              <div style={{ fontSize: '12px', color: '#64748b' }}>{c.email}</div>
                            </div>
                          </div>
                        </td>
                        <td>{c.company}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{formatValue(c.mrr)}</td>
                        <td>
                          <span
                            className="badge"
                            style={{
                              background: c.status === 'Active' ? '#d1fae5' : c.status === 'Pending' ? '#fef3c7' : '#f1f5f9',
                              color: c.status === 'Active' ? '#065f46' : c.status === 'Pending' ? '#b45309' : '#475569',
                            }}
                          >
                            {c.status}
                          </span>
                        </td>
                        <td style={{ color: '#64748b' }}>{c.last_order || 'N/A'}</td>
                        <td onClick={(e) => e.stopPropagation()} style={{ textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                            <Link to={`/customers/${c.id}`} className="btn btn-secondary btn-sm" title="View Profile">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span>
                            </Link>
                            <Link to={`/customers/${c.id}/orders`} className="btn btn-secondary btn-sm" title="Orders">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>shopping_cart</span>
                            </Link>
                            <Link to={`/customers/${c.id}/invoices`} className="btn btn-secondary btn-sm" title="Invoices">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>receipt_long</span>
                            </Link>
                            <Link to={`/customers/${c.id}/payments`} className="btn btn-secondary btn-sm" title="Payments">
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>payments</span>
                            </Link>
                            <button
                              onClick={(e) => handleDelete(e, c.id)}
                              className="btn btn-secondary btn-sm"
                              title="Delete"
                              style={{ color: '#ef4444' }}
                            >
                              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                            </button>
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
