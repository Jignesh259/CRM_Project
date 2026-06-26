import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const InvoiceDetails: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState(false);

  const navigate = useNavigate();

  const loadInvoiceDetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await api.getInvoice(id);
      setInvoice(res.data);
    } catch (err: any) {
      setError(err.message || 'Failed to load invoice details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInvoiceDetails();
  }, [id]);

  const handleMarkAsPaid = async () => {
    if (!invoice) return;
    if (!window.confirm('Mark this invoice as Paid? This will record the payment in the ledger.')) return;
    setUpdating(true);
    try {
      const storedInvsStr = localStorage.getItem('cs_invoices') || '[]';
      const storedInvs = JSON.parse(storedInvsStr);
      const invIdx = storedInvs.findIndex((i: any) => i.id === invoice.id);
      if (invIdx !== -1) {
        storedInvs[invIdx].status = 'Paid';
        storedInvs[invIdx].history.push({
          date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          action: 'Payment received & marked as Paid',
          user: 'Sarah Jenkins',
        });
        localStorage.setItem('cs_invoices', JSON.stringify(storedInvs));
        setInvoice(storedInvs[invIdx]);

        // Add to customer payments
        // Verify customer exists to log payment
        const custRes = await api.getCustomers();
        const customers = custRes.data?.customers || [];
        const customerObj = customers.find((c: any) => String(c.id) === String(invoice.customerId));
        if (customerObj) {
          // Add to cs_payments or customer billing logs
          // We can push to payment logs
          const payRes = await api.getCustomerPayments(invoice.customerId);
          const payments = payRes.data || [];
          payments.unshift({
            id: `PAY-${Math.floor(1000 + Math.random() * 9000)}`,
            amount: invoice.total,
            method: 'Stripe',
            status: 'Completed',
            date: new Date().toISOString().split('T')[0],
          });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Invoice</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px' }}>Loading invoice details...</div>
        </div>
      </div>
    );
  }

  if (error || !invoice) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Invoice</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>{error || 'Invoice not found'}</div>
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
            <button onClick={() => navigate('/invoices')} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Invoice Details - {invoice.id}</h1>
          </div>
          <div className="topbar-actions">
            <Link to={`/invoices/${invoice.id}/preview`} className="btn btn-secondary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>picture_as_pdf</span>
              Print/Preview Document
            </Link>
            {invoice.status !== 'Paid' && (
              <button onClick={handleMarkAsPaid} className="btn btn-primary btn-sm" disabled={updating}>
                Record Payment
              </button>
            )}
          </div>
        </header>

        <div className="page-content">
          <div className="bento-grid">
            {/* Left: Invoice Content Sheet */}
            <div className="content-card col-span-8" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>Invoice Summary</h3>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Issued on: {new Date(invoice.date).toLocaleDateString()}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="badge" style={{
                    background: invoice.status === 'Paid' ? '#d1fae5' : invoice.status === 'Unpaid' ? '#fef3c7' : '#fee2e2',
                    color: invoice.status === 'Paid' ? '#065f46' : invoice.status === 'Unpaid' ? '#b45309' : '#dc2626'
                  }}>
                    {invoice.status}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '16px 0', marginBottom: '24px', fontSize: '13px' }}>
                <div>
                  <div style={{ color: '#94a3b8' }}>Billed To</div>
                  <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '15px' }}>{invoice.customerName}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Due Date</div>
                  <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '15px' }}>{new Date(invoice.dueDate).toLocaleDateString()}</div>
                </div>
              </div>

              <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', margin: '0 0 12px' }}>Line Items</h4>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th style={{ textAlign: 'right' }}>Qty</th>
                    <th style={{ textAlign: 'right' }}>Unit Price</th>
                    <th style={{ textAlign: 'right' }}>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item: any, idx: number) => (
                    <tr key={idx}>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>SKU: {item.productId}</div>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>{item.qty}</td>
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
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.subtotal)}</span>
                </div>
                <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '14px', color: '#64748b' }}>
                  <span>Sales Tax (8%)</span>
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.tax)}</span>
                </div>
                <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: '#0f172a', borderTop: '2px solid #e2e8f0', paddingTop: '8px' }}>
                  <span>Grand Total</span>
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.total)}</span>
                </div>
              </div>
            </div>

            {/* Right: History Timeline */}
            <div className="content-card col-span-4">
              <div className="content-card-header">
                <h3 className="content-card-title">Billing Timeline Logs</h3>
              </div>
              <div style={{ padding: '24px' }}>
                <div className="timeline-feed">
                  {invoice.history.map((log: any, idx: number) => (
                    <div key={idx} className="timeline-event completed">
                      <div className="timeline-marker" />
                      <div className="timeline-event-content">
                        <div className="timeline-time">{log.date}</div>
                        <div className="timeline-title">{log.action}</div>
                        <div className="timeline-desc">User: {log.user}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
