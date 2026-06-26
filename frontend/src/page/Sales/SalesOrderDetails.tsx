import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const SalesOrderDetails: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [order, setOrder] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadOrderDetails = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const res = await api.getSalesOrder(id);
        setOrder(res.data);
      } catch (err: any) {
        setError(err.message || 'Failed to load sales order details');
      } finally {
        setLoading(false);
      }
    };
    loadOrderDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Sales Order</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px' }}>Loading order details...</div>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Sales Order</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>{error || 'Sales order not found'}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => navigate(-1)} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Sales Order Details - {order.id}</h1>
          </div>
          {order.shipmentId && (
            <div className="topbar-actions">
              <Link to={`/logistics`} className="btn btn-primary btn-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>local_shipping</span>
                Track Shipment
              </Link>
            </div>
          )}
        </header>

        <div className="page-content">
          <div className="content-card" style={{ padding: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Order Information</h3>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Date: {new Date(order.date).toLocaleDateString()}</span>
              </div>
              <span className="badge" style={{
                background: order.status === 'Processing' ? '#fef3c7' : '#d1fae5',
                color: order.status === 'Processing' ? '#b45309' : '#065f46'
              }}>
                {order.status}
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '16px 0', marginBottom: '24px', fontSize: '13px' }}>
              <div>
                <div style={{ color: '#94a3b8' }}>Client / Customer</div>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '14px' }}>{order.customerName}</div>
              </div>
              <div>
                <div style={{ color: '#94a3b8' }}>Shipping Address</div>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{order.shippingAddress}</div>
              </div>
              <div>
                <div style={{ color: '#94a3b8' }}>Billing Address</div>
                <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px' }}>{order.billingAddress}</div>
              </div>
              <div>
                <div style={{ color: '#94a3b8' }}>Shipment Reference</div>
                <div style={{ fontWeight: 600, color: '#3b82f6', marginTop: '4px', fontFamily: 'monospace' }}>
                  {order.shipmentId || 'Not Shipped Yet'}
                </div>
              </div>
            </div>

            <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: '0 0 12px' }}>Order Line Items</h4>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th style={{ textAlign: 'right' }}>Qty</th>
                  <th style={{ textAlign: 'right' }}>Unit Price</th>
                  <th style={{ textAlign: 'right' }}>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item: any, idx: number) => (
                  <tr key={idx}>
                    <td>
                      <div style={{ fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>SKU: {item.productId}</div>
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>{item.qty} units</td>
                    <td style={{ textAlign: 'right' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.retail)}</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#0f172a' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.total)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', marginTop: '24px' }}>
              <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '14px', color: '#64748b' }}>
                <span>Subtotal</span>
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.total)}</span>
              </div>
              <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '14px', color: '#64748b' }}>
                <span>Shipping & Tax</span>
                <span>$0.00</span>
              </div>
              <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: '#0f172a', borderTop: '2px solid #e2e8f0', paddingTop: '8px' }}>
                <span>Total Amount</span>
                <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
