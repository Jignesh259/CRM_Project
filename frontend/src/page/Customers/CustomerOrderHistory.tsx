import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const CustomerOrderHistory: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customer, setCustomer] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderData = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const custRes = await api.getCustomer(id);
        const ordersRes = await api.getCustomerOrders(id);
        if (custRes.success && custRes.data) {
          setCustomer(custRes.data);
        }
        if (ordersRes.success && ordersRes.data) {
          setOrders(ordersRes.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch customer orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrderData();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ color: '#64748b' }}>Loading orders...</div>
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

  const totalSpend = orders.reduce((sum, order) => sum + (order.status !== 'Failed' ? order.amount : 0), 0);
  const activeOrdersCount = orders.filter(order => order.status === 'Processing' || order.status === 'Shipped').length;

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
            <h1 className="topbar-title">{customer.company} - Orders</h1>
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
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: 0, color: '#0f172a' }}>{customer.company}</h2>
              <p style={{ fontSize: '16px', color: '#64748b', margin: '4px 0 0' }}>Order History & Fulfillment Status</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" onClick={() => alert('Exporting orders CSV...')}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Export CSV
              </button>
            </div>
          </div>

          {/* Metrics Bento Grid */}
          <div className="stat-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '24px' }}>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Total Spend YTD</span>
                <div className="stat-card-icon" style={{ background: '#dbeafe' }}>
                  <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>payments</span>
                </div>
              </div>
              <div className="stat-card-value">{formatCurrency(totalSpend)}</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Active Orders</span>
                <div className="stat-card-icon" style={{ background: '#fef3c7' }}>
                  <span className="material-symbols-outlined" style={{ color: '#f59e0b' }}>local_shipping</span>
                </div>
              </div>
              <div className="stat-card-value">{activeOrdersCount}</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Avg. Fulfillment Time</span>
                <div className="stat-card-icon" style={{ background: '#d1fae5' }}>
                  <span className="material-symbols-outlined" style={{ color: '#10b981' }}>schedule</span>
                </div>
              </div>
              <div className="stat-card-value">2.4 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: 500 }}>Days</span></div>
            </div>
          </div>

          {/* Data Table Card */}
          <div className="content-card">
            <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="content-card-title">Orders List</h3>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: '#64748b' }}>Fulfillment filter:</span>
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#3b82f6' }}>All Time</span>
              </div>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              <table className="data-table" style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Date</th>
                    <th>Items</th>
                    <th style={{ textAlign: 'right' }}>Total Amount</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td style={{ fontWeight: 600, color: '#3b82f6' }}>{order.id}</td>
                      <td>{order.date}</td>
                      <td style={{ color: '#64748b' }}>{order.items}</td>
                      <td style={{ fontWeight: 600, color: '#0f172a', textAlign: 'right' }}>{formatCurrency(order.amount)}</td>
                      <td>
                        <span
                          className="badge"
                          style={{
                            background: order.status === 'Delivered' ? '#d1fae5' : order.status === 'Shipped' ? '#dbeafe' : '#fef3c7',
                            color: order.status === 'Delivered' ? '#065f46' : order.status === 'Shipped' ? '#1d4ed8' : '#b45309',
                          }}
                        >
                          <span className="material-symbols-outlined" style={{ fontSize: '14px', marginRight: '4px', verticalAlign: 'middle' }}>
                            {order.icon}
                          </span>
                          {order.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button className="btn btn-secondary btn-sm" onClick={() => alert(`Viewing details of ${order.id}...`)}>
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
