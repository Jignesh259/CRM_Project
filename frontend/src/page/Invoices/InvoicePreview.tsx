import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import '../../style/StitchDashboard.css';

export const InvoicePreview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [invoice, setInvoice] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadInvoice = async () => {
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
    loadInvoice();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading document...</div>;
  }

  if (error || !invoice) {
    return <div style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>{error || 'Document not found'}</div>;
  }

  return (
    <div style={{ background: '#f1f5f9', minHeight: '100vh', padding: '40px 20px' }}>
      {/* Control Bar */}
      <div style={{ maxWidth: '800px', margin: '0 auto 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="no-print">
        <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'white', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', fontWeight: 500 }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
          Back to Details
        </button>
        <button onClick={handlePrint} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#3b82f6', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', fontWeight: 600 }}>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span>
          Print Invoice
        </button>
      </div>

      {/* Invoice Sheet */}
      <div className="invoice-sheet">
        <div className="invoice-header">
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#3b82f6', margin: '0 0 4px' }}>CommSync Inc.</h1>
            <span style={{ fontSize: '13px', color: '#64748b' }}>Enterprise Suite Billing Department</span>
          </div>
          <div className="invoice-title-block">
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>INVOICE</h2>
            <span style={{ fontSize: '14px', color: '#475569', fontWeight: 600, fontFamily: 'monospace' }}>{invoice.id}</span>
          </div>
        </div>

        <div className="invoice-details-grid">
          <div className="invoice-meta">
            <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Billed From</span>
            <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
              <strong>CommSync Corporate Headquarters</strong><br />
              100 Tech Corridor, Suite 500<br />
              San Francisco, CA 94107<br />
              billing@commsync.example.com
            </div>
          </div>
          <div className="invoice-meta">
            <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase' }}>Billed To</span>
            <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.5 }}>
              <strong>{invoice.customerName}</strong><br />
              Acme Corp HQ Operations<br />
              Los Angeles, CA 90001<br />
              finance@acmecorp.example.com
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '8px', marginBottom: '32px', border: '1px solid #e2e8f0', fontSize: '13px' }}>
          <div>
            <span style={{ color: '#64748b' }}>Date Issued</span>
            <div style={{ fontWeight: 600, marginTop: '4px' }}>{new Date(invoice.date).toLocaleDateString()}</div>
          </div>
          <div>
            <span style={{ color: '#64748b' }}>Payment Terms</span>
            <div style={{ fontWeight: 600, marginTop: '4px' }}>Net 30</div>
          </div>
          <div>
            <span style={{ color: '#64748b' }}>Due Date</span>
            <div style={{ fontWeight: 600, marginTop: '4px' }}>{new Date(invoice.dueDate).toLocaleDateString()}</div>
          </div>
          <div>
            <span style={{ color: '#64748b' }}>Invoice Status</span>
            <div style={{ fontWeight: 700, marginTop: '4px', color: invoice.status === 'Paid' ? '#16a34a' : '#b45309' }}>
              {invoice.status.toUpperCase()}
            </div>
          </div>
        </div>

        <table className="invoice-table">
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Item Description</th>
              <th style={{ textAlign: 'right' }}>Qty</th>
              <th style={{ textAlign: 'right' }}>Unit Price</th>
              <th style={{ textAlign: 'right' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item: any, idx: number) => (
              <tr key={idx}>
                <td style={{ textAlign: 'left' }}>
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

        <div className="invoice-totals">
          <div className="invoice-total-row">
            <span>Subtotal</span>
            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.subtotal)}</span>
          </div>
          <div className="invoice-total-row">
            <span>Sales Tax (8%)</span>
            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.tax)}</span>
          </div>
          <div className="invoice-total-row grand-total">
            <span>Total Due</span>
            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(invoice.total)}</span>
          </div>
        </div>

        <div className="invoice-footer">
          <p style={{ margin: '0 0 8px', fontWeight: 600 }}>Thank you for your business!</p>
          <p style={{ margin: 0 }}>If you have any questions about this invoice, please contact billing@commsync.example.com</p>
        </div>
      </div>
    </div>
  );
};
