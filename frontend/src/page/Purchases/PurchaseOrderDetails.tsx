import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const PurchaseOrderDetails: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { id } = useParams<{ id: string }>();
  const [po, setPO] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newComment, setNewComment] = useState('');
  const [updating, setUpdating] = useState(false);

  const navigate = useNavigate();

  const loadPODetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const res = await api.getPurchaseOrder(id);
      setPO(res.data);
    } catch (err: any) {
      setError(err.message || 'Failed to load PO details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPODetails();
  }, [id]);

  const handleStatusChange = async (newStatus: string) => {
    if (!po) return;
    setUpdating(true);
    try {
      const storedPOsStr = localStorage.getItem('cs_purchase_orders') || '[]';
      const storedPOs = JSON.parse(storedPOsStr);
      const poIdx = storedPOs.findIndex((p: any) => p.id === po.id);
      
      if (poIdx !== -1) {
        storedPOs[poIdx].status = newStatus;
        storedPOs[poIdx].comments.push({
          id: String(Date.now()),
          author: 'System',
          text: `Purchase Order status updated to ${newStatus}.`,
          timestamp: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        });

        // If Received, restock products automatically
        if (newStatus === 'Received') {
          // Decrement vendor active count & pending deliveries
          const vendorStr = localStorage.getItem('cs_vendors') || '[]';
          const vendors = JSON.parse(vendorStr);
          const vIdx = vendors.findIndex((v: any) => v.id === po.vendorId);
          if (vIdx !== -1) {
            vendors[vIdx].activePOs = Math.max(0, vendors[vIdx].activePOs - 1);
            vendors[vIdx].pendingDeliveries = Math.max(0, vendors[vIdx].pendingDeliveries - 1);
            localStorage.setItem('cs_vendors', JSON.stringify(vendors));
          }

          // Restock items in products
          const prodStr = localStorage.getItem('cs_products') || '[]';
          const products = JSON.parse(prodStr);
          po.items.forEach((item: any) => {
            const pIdx = products.findIndex((p: any) => p.id === item.productId);
            if (pIdx !== -1) {
              products[pIdx].stock += Number(item.qty);
            }
          });
          localStorage.setItem('cs_products', JSON.stringify(products));

          // Log in Transaction Ledger
          const ledgerStr = localStorage.getItem('cs_inventory_ledger') || '[]';
          const ledger = JSON.parse(ledgerStr);
          po.items.forEach((item: any) => {
            ledger.unshift({
              id: `TX-${Math.floor(9000 + Math.random() * 1000)}`,
              productId: item.productId,
              productName: item.name,
              type: 'Stock In',
              qty: item.qty,
              warehouse: 'WH-A', // Seed WH
              date: new Date().toISOString(),
              status: 'Completed',
              ref: po.id,
            });
          });
          localStorage.setItem('cs_inventory_ledger', JSON.stringify(ledger));
        }

        localStorage.setItem('cs_purchase_orders', JSON.stringify(storedPOs));
        setPO(storedPOs[poIdx]);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdating(false);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !po) return;

    const storedPOsStr = localStorage.getItem('cs_purchase_orders') || '[]';
    const storedPOs = JSON.parse(storedPOsStr);
    const poIdx = storedPOs.findIndex((p: any) => p.id === po.id);
    
    if (poIdx !== -1) {
      const commentObj = {
        id: String(Date.now()),
        author: 'Sarah Jenkins', // Mock logged in user
        text: newComment,
        timestamp: 'Just now',
      };
      storedPOs[poIdx].comments.push(commentObj);
      localStorage.setItem('cs_purchase_orders', JSON.stringify(storedPOs));
      setPO(storedPOs[poIdx]);
      setNewComment('');
    }
  };

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Purchase Order</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px' }}>Loading PO details...</div>
        </div>
      </div>
    );
  }

  if (error || !po) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <header className="topbar"><h1 className="topbar-title">Purchase Order</h1></header>
          <div className="page-content" style={{ textAlign: 'center', padding: '40px', color: '#ef4444' }}>{error || 'PO not found'}</div>
        </div>
      </div>
    );
  }

  const steps = ['Draft', 'Sent', 'Approved', 'Received'];
  const currentStepIndex = steps.indexOf(po.status);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => navigate('/purchase-orders')} className="btn btn-secondary btn-sm" style={{ padding: '6px 8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Purchase Order - {po.id}</h1>
          </div>
          <div className="topbar-actions">
            {po.status === 'Sent' && (
              <button onClick={() => handleStatusChange('Approved')} className="btn btn-secondary btn-sm" disabled={updating}>
                Approve PO
              </button>
            )}
            {po.status === 'Approved' && (
              <button onClick={() => handleStatusChange('Received')} className="btn btn-primary btn-sm" disabled={updating}>
                Receive Delivery
              </button>
            )}
          </div>
        </header>

        <div className="page-content">
          {/* Status Tracker */}
          <div className="step-tracker">
            {steps.map((step, idx) => {
              let stateClass = '';
              if (idx < currentStepIndex) stateClass = 'completed';
              else if (idx === currentStepIndex) stateClass = 'active';

              return (
                <React.Fragment key={step}>
                  <div className={`step-item ${stateClass}`}>
                    <div className="step-node">
                      {idx < currentStepIndex ? (
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>check</span>
                      ) : (
                        idx + 1
                      )}
                    </div>
                    <span className="step-label">{step}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className={`step-divider ${idx < currentStepIndex ? 'completed' : ''}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="bento-grid">
            {/* General Info Sheet */}
            <div className="content-card col-span-8" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>PO Summary</h3>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>Issued on: {new Date(po.date).toLocaleDateString()}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="badge" style={{
                    background: po.status === 'Received' ? '#d1fae5' : po.status === 'Sent' ? '#dbeafe' : '#f1f5f9',
                    color: po.status === 'Received' ? '#065f46' : po.status === 'Sent' ? '#1d4ed8' : '#475569'
                  }}>
                    {po.status}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px', fontSize: '13px', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9', padding: '16px 0' }}>
                <div>
                  <div style={{ color: '#94a3b8' }}>Vendor / Supplier</div>
                  <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '15px' }}>{po.vendorName}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8' }}>Expected Delivery Date</div>
                  <div style={{ fontWeight: 600, color: '#334155', marginTop: '4px', fontSize: '15px' }}>{new Date(po.expectedDelivery).toLocaleDateString()}</div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ color: '#94a3b8' }}>Instructions & Notes</div>
                  <div style={{ color: '#475569', marginTop: '4px' }}>{po.notes || 'No special instructions recorded.'}</div>
                </div>
              </div>

              {/* Items List */}
              <h4 style={{ margin: '0 0 12px', fontSize: '15px', fontWeight: 600, color: '#0f172a' }}>Purchase Line Items</h4>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Item Description</th>
                    <th style={{ textAlign: 'right' }}>Qty Ordered</th>
                    <th style={{ textAlign: 'right' }}>Unit Cost</th>
                    <th style={{ textAlign: 'right' }}>Total Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {po.items.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{item.name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>SKU: {item.productId}</div>
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 600 }}>{item.qty} units</td>
                      <td style={{ textAlign: 'right' }}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.cost)}</td>
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
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(po.total)}</span>
                </div>
                <div style={{ display: 'flex', width: '250px', justifyContent: 'space-between', fontSize: '16px', fontWeight: 700, color: '#0f172a', borderTop: '2px solid #e2e8f0', paddingTop: '8px' }}>
                  <span>Grand Total</span>
                  <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(po.total)}</span>
                </div>
              </div>
            </div>

            {/* Right: Comments Feed */}
            <div className="content-card col-span-4" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="content-card-header">
                <h3 className="content-card-title">PO Activity & Comments</h3>
              </div>
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="timeline-feed" style={{ maxHeight: '350px', overflowY: 'auto', marginBottom: '20px' }}>
                  {po.comments.map((comment: any) => (
                    <div key={comment.id} className="timeline-event">
                      <div className="timeline-marker" />
                      <div className="timeline-event-content">
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 600 }}>{comment.author}</span>
                          <span>{comment.timestamp}</span>
                        </div>
                        <div style={{ fontSize: '13px', color: '#334155', lineHeight: 1.4 }}>{comment.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddComment} style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                  <textarea
                    className="form-textarea"
                    placeholder="Write a message..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{ minHeight: '60px', marginBottom: '10px', fontSize: '13px' }}
                    required
                  />
                  <button type="submit" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                    Post Comment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
