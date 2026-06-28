import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const PaymentTransactionDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [payment, setPayment] = useState<any | null>(null);
  const [customer, setCustomer] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const loadDetails = async () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    try {
      const payRes = await api.getPaymentDetails(id);
      const paymentData = payRes.data;
      setPayment(paymentData);

      if (paymentData?.customerId) {
        try {
          const custRes = await api.getCustomer(paymentData.customerId);
          setCustomer(custRes.data || custRes);
        } catch (cErr) {
          console.error('Failed to load customer profile details', cErr);
        }
      }
    } catch (err: any) {
      console.error('Failed to load payment transaction details', err);
      setError(err.message || 'Payment transaction not found.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDetails();
  }, [id]);

  const handleSettle = async () => {
    if (!payment) return;
    try {
      await api.updatePayment(payment.id, {
        status: 'Completed',
        settlementDate: new Date().toISOString()
      });
      await loadDetails();
    } catch (err) {
      console.error(err);
    }
  };

  const handleFail = async () => {
    if (!payment) return;
    try {
      await api.updatePayment(payment.id, {
        status: 'Failed'
      });
      await loadDetails();
    } catch (err) {
      console.error(err);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ textAlign: 'center', padding: '100px 0' }}>
            <div style={{ fontSize: '16px', color: '#64748b' }}>Loading payment transaction details...</div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !payment) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ maxWidth: '600px', margin: '40px auto' }}>
            <div className="content-card" style={{ padding: '24px', textAlign: 'center' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#dc2626', marginBottom: '16px' }}>warning</span>
              <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>Transaction Error</h3>
              <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 20px' }}>{error || 'The requested transaction was not found.'}</p>
              <button onClick={() => navigate('/finance/payments')} className="btn btn-primary">
                Return to Ledger
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const netAmount = payment.amount - (payment.transactionFee || 0);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button onClick={() => navigate('/finance/payments')} className="btn btn-secondary btn-sm" style={{ padding: '4px', minWidth: 'auto' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
            </button>
            <h1 className="topbar-title">Transaction Details</h1>
          </div>
          <div className="topbar-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span>
              Print Receipt
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <div className="bento-grid">
            
            {/* Left Column: Details & Actions */}
            <div className="col-span-8 space-y-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Overview Card */}
              <div className="content-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                      TRANSACTION ID: {payment.id}
                    </span>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '4px 0 0', color: '#0f172a' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payment.amount)}
                    </h2>
                  </div>
                  <span className="badge" style={{
                    fontSize: '13px',
                    padding: '6px 12px',
                    background: payment.status === 'Completed' ? '#d1fae5' : payment.status === 'Processing' ? '#ffedd5' : '#fee2e2',
                    color: payment.status === 'Completed' ? '#065f46' : payment.status === 'Processing' ? '#ea580c' : '#b91c1c'
                  }}>
                    {payment.status}
                  </span>
                </div>

                <div className="form-grid" style={{ gap: '16px 24px', borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Payment Method</span>
                    <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>{payment.paymentMethod}</span>
                  </div>

                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Date Initiated</span>
                    <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>
                      {new Date(payment.date).toLocaleString()}
                    </span>
                  </div>

                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Invoice Association</span>
                    <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 500, fontFamily: 'monospace' }}>
                      {payment.invoiceId || 'None'}
                    </span>
                  </div>

                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Settlement Date</span>
                    <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: 500 }}>
                      {payment.settlementDate ? new Date(payment.settlementDate).toLocaleString() : 'N/A'}
                    </span>
                  </div>

                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Transaction Fee</span>
                    <span style={{ fontSize: '14px', color: '#e11d48', fontWeight: 500 }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payment.transactionFee || 0)}
                    </span>
                  </div>

                  <div className="form-group">
                    <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Net Settlement Payout</span>
                    <span style={{ fontSize: '14px', color: '#16a34a', fontWeight: 700 }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netAmount)}
                    </span>
                  </div>
                </div>

                {payment.failureReason && (
                  <div style={{ marginTop: '20px', padding: '12px', background: '#fee2e2', border: '1px solid #fca5a5', borderRadius: '6px', color: '#b91c1c', fontSize: '13px' }}>
                    <strong>Decline Reason:</strong> {payment.failureReason}
                  </div>
                )}

                {payment.notes && (
                  <div style={{ marginTop: '20px', padding: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', color: '#475569', fontSize: '13px' }}>
                    <strong>Merchant Notes:</strong> {payment.notes}
                  </div>
                )}
              </div>

              {/* Settlement Control Panel (Conditional) */}
              {payment.status === 'Processing' && (
                <div className="content-card" style={{ padding: '24px', borderColor: '#ea580c' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 8px', color: '#ea580c' }}>Pending Approval Control</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 20px' }}>
                    This transaction is currently processing. Authorize settlement to clear funds or flag as failed.
                  </p>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={handleSettle} className="btn btn-primary" style={{ background: '#16a34a', borderColor: '#16a34a' }}>
                      Approve & Settle Funds
                    </button>
                    <button onClick={handleFail} className="btn btn-secondary" style={{ color: '#dc2626', borderColor: '#dc2626' }}>
                      Reject & Decline Transaction
                    </button>
                  </div>
                </div>
              )}

              {/* Action History / Lifecycle Timeline */}
              <div className="content-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a' }}>Transaction Timeline</h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: '#16a34a', background: '#d1fae5', padding: '4px', borderRadius: '50%', fontSize: '16px' }}>check</span>
                      <div style={{ width: '2px', flexGrow: 1, background: '#e2e8f0', minHeight: '20px' }}></div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>Transaction Initiated</h4>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0' }}>
                        Customer authorized {payment.paymentMethod} transfer of {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payment.amount)}
                      </p>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(payment.date).toLocaleString()}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '12px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span className="material-symbols-outlined" style={{
                        color: payment.status === 'Completed' ? '#16a34a' : payment.status === 'Failed' ? '#dc2626' : '#ea580c',
                        background: payment.status === 'Completed' ? '#d1fae5' : payment.status === 'Failed' ? '#fee2e2' : '#ffedd5',
                        padding: '4px', borderRadius: '50%', fontSize: '16px'
                      }}>
                        {payment.status === 'Completed' ? 'done_all' : payment.status === 'Failed' ? 'error' : 'hourglass_empty'}
                      </span>
                      <div style={{ width: '2px', flexGrow: 1, background: '#e2e8f0', minHeight: '20px' }}></div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0 }}>
                        {payment.status === 'Completed' ? 'Funds Settled Successfully' : payment.status === 'Failed' ? 'Transaction Failed' : 'Payment Processing'}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: '2px 0' }}>
                        {payment.status === 'Completed'
                          ? `Cleared and settled to main vault. Net payout of ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netAmount)} realized.`
                          : payment.status === 'Failed'
                          ? `Transaction failed. Error: ${payment.failureReason || 'Declined'}`
                          : 'Funds routing through banking rails. Pending standard 24h bank clearance.'}
                      </p>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                        {payment.settlementDate ? new Date(payment.settlementDate).toLocaleString() : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Customer Snapshot & Simulated Receipt */}
            <div className="col-span-4 space-y-lg" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Customer Snapshot */}
              {customer && (
                <div className="content-card" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px', color: '#0f172a' }}>Client Snapshot</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#005dac',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '16px'
                    }}>
                      {(customer.first_name?.[0] || '') + (customer.last_name?.[0] || '') || 'C'}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>
                        {customer.first_name || ''} {customer.last_name || ''}
                      </h4>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>{customer.company || 'Private Entity'}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Email</span>
                      <span style={{ fontWeight: 500, color: '#0f172a' }}>{customer.email || 'N/A'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Phone</span>
                      <span style={{ fontWeight: 500, color: '#0f172a' }}>{customer.phone || 'N/A'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b' }}>Status</span>
                      <span className="badge" style={{
                        background: customer.status === 'Active' ? '#d1fae5' : '#fee2e2',
                        color: customer.status === 'Active' ? '#065f46' : '#b91c1c'
                      }}>{customer.status || 'Active'}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Receipt Copy */}
              <div className="content-card invoice-sheet" style={{
                padding: '24px',
                background: '#fff',
                border: '1px dashed #c1c6d4',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}>
                <div style={{ textAlign: 'center', borderBottom: '1px dashed #e2e8f0', paddingBottom: '16px' }}>
                  <div style={{ fontWeight: 800, fontSize: '16px', color: '#005dac', letterSpacing: '0.05em' }}>COMMSYNC ENTERPRISE</div>
                  <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>OFFICIAL TRANSACTION RECEIPT</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', fontFamily: 'monospace' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>RECEIPT NO:</span>
                    <span>REC-{payment.id}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>DATE:</span>
                    <span>{new Date(payment.date).toLocaleDateString()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>METHOD:</span>
                    <span>{payment.paymentMethod.toUpperCase()}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>CLIENT:</span>
                    <span style={{ maxWidth: '180px', textAlign: 'right', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {payment.customerName.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div style={{ borderTop: '1px dashed #e2e8f0', borderBottom: '1px dashed #e2e8f0', padding: '12px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: '13px' }}>TOTAL PAID</span>
                  <span style={{ fontWeight: 800, fontSize: '16px', color: '#005dac' }}>
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(payment.amount)}
                  </span>
                </div>

                <div style={{ textAlign: 'center', fontSize: '11px', color: '#94a3b8', fontStyle: 'italic', marginTop: '8px' }}>
                  Thank you for your business.
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
