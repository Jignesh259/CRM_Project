import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const CustomerProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [customer, setCustomer] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCustomer = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await api.getCustomer(id);
        if (response.success && response.data) {
          setCustomer(response.data);
        }
      } catch (err: any) {
        setError(err.message || 'Failed to fetch customer profile');
      } finally {
        setLoading(false);
      }
    };
    fetchCustomer();
  }, [id]);

  if (loading) {
    return (
      <div className="dashboard-layout">
        <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
        <div className="dashboard-main">
          <div className="page-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <div style={{ color: '#64748b' }}>Loading customer profile...</div>
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
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* ── Topbar ── */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Link to="/customers" style={{ display: 'flex', alignItems: 'center', color: '#64748b' }}>
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h1 className="topbar-title">{customer.first_name} {customer.last_name}</h1>
          </div>
          <div className="topbar-actions">
            <button className="btn btn-secondary btn-sm" onClick={() => navigate(`/customers/${customer.id}/edit`)}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span>
              Edit Profile
            </button>
          </div>
        </header>

        {/* ── Main Canvas ── */}
        <div className="page-content" style={{ background: '#f8fafc' }}>
          {/* Breadcrumb Navigation */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', fontSize: '12px', marginBottom: '20px' }}>
            <Link to="/customers" style={{ textDecoration: 'none', color: '#64748b' }}>CRM</Link>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
            <Link to="/customers" style={{ textDecoration: 'none', color: '#64748b' }}>Customers</Link>
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
            <span style={{ color: '#0f172a', fontWeight: 500 }}>{customer.first_name} {customer.last_name}</span>
          </nav>

          {/* Bento Grid Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
            
            {/* 1. Customer Header Profile (Span 12) */}
            <div className="content-card" style={{ gridColumn: 'span 12', padding: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: '#3b82f6',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: 700
                  }}>
                    {customer.first_name.charAt(0)}{customer.last_name.charAt(0)}
                  </div>
                  <span style={{ position: 'absolute', bottom: '2px', right: '2px', width: '16px', height: '16px', background: '#10b981', border: '3px solid #fff', borderRadius: '50%' }}></span>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#0f172a' }}>{customer.first_name} {customer.last_name}</h2>
                    <span style={{ background: '#dbeafe', color: '#1d4ed8', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '12px', textTransform: 'uppercase' }}>
                      {customer.plan_type || 'Professional'}
                    </span>
                  </div>
                  <p style={{ fontSize: '15px', color: '#475569', margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#64748b' }}>domain</span>
                    Active Customer at <span style={{ fontWeight: 600, color: '#3b82f6' }}>{customer.company}</span>
                  </p>
                  <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '16px', color: '#94a3b8' }}>location_on</span>
                    San Francisco, CA (PST)
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-secondary" onClick={() => navigate(`/customers/${customer.id}/edit`)}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                  Edit Details
                </button>
                <button className="btn btn-primary" onClick={() => navigate(`/customers/${customer.id}/orders`)}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>shopping_cart</span>
                  View Orders
                </button>
              </div>
            </div>

            {/* 2. Key Metrics Card (Span 4) */}
            <div className="content-card" style={{ gridColumn: 'span 4', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>monitoring</span>
                Account Health
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 4px', textTransform: 'uppercase', fontWeight: 600 }}>Lifetime Value (LTV)</p>
                  <p style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>{formatCurrency(customer.ltv || customer.mrr * 12)}</p>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '6px' }}>
                    <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, textTransform: 'uppercase', fontWeight: 600 }}>Health Score</p>
                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#10b981', margin: 0 }}>{customer.health || 90} / 100</p>
                  </div>
                  <div style={{ width: '100%', background: '#e2e8f0', borderRadius: '4px', height: '8px' }}>
                    <div style={{ width: `${customer.health || 90}%`, background: '#10b981', borderRadius: '4px', height: '8px' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Contact Information (Span 4) */}
            <div className="content-card" style={{ gridColumn: 'span 4', padding: '24px', minHeight: '220px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>contact_page</span>
                Contact Information
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94a3b8', fontSize: '18px', marginTop: '2px' }}>mail</span>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', fontWeight: 600 }}>Email Address</span>
                    <a href={`mailto:${customer.email}`} style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'none' }}>{customer.email}</a>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94a3b8', fontSize: '18px', marginTop: '2px' }}>call</span>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', fontWeight: 600 }}>Phone Number</span>
                    <span style={{ fontSize: '14px', color: '#0f172a' }}>{customer.phone || 'Not Provided'}</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#94a3b8', fontSize: '18px', marginTop: '2px' }}>language</span>
                  <div>
                    <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', fontWeight: 600 }}>Website</span>
                    <a href={customer.website} target="_blank" rel="noreferrer" style={{ fontSize: '14px', color: '#3b82f6', textDecoration: 'none' }}>{customer.website || 'Not Provided'}</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* 4. Quick Actions / Links (Span 4) */}
            <div className="content-card" style={{ gridColumn: 'span 4', padding: '24px', display: 'flex', flexDirection: 'column', minHeight: '220px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>bolt</span>
                Quick Actions
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1, marginTop: '8px' }}>
                <button className="btn btn-secondary" onClick={() => navigate(`/customers/${customer.id}/invoices`)} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#3b82f6' }}>receipt_long</span>
                  <span style={{ fontSize: '12px', fontWeight: 500 }}>View Invoices</span>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/customers/${customer.id}/orders`)} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#3b82f6' }}>shopping_cart</span>
                  <span style={{ fontSize: '12px', fontWeight: 500 }}>Active Orders</span>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/customers/${customer.id}/payments`)} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#3b82f6' }}>credit_card</span>
                  <span style={{ fontSize: '12px', fontWeight: 500 }}>Payments</span>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/activity')} style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', gap: '6px', padding: '12px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '24px', color: '#3b82f6' }}>history</span>
                  <span style={{ fontSize: '12px', fontWeight: 500 }}>Activity Log</span>
                </button>
              </div>
            </div>

            {/* 5. Recent Activity Timeline (Span 8) */}
            <div className="content-card" style={{ gridColumn: 'span 8', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px', marginBottom: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>history</span>
                  Recent Activity
                </h3>
              </div>
              <div style={{ position: 'relative', paddingLeft: '24px' }}>
                {/* Timeline vertical bar */}
                <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: '#e2e8f0' }}></div>
                
                {/* Item 1 */}
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-24px', top: '2px', width: '12px', height: '12px', background: '#3b82f6', border: '3px solid #fff', borderRadius: '50%' }}></div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#0f172a' }}>Discovery Call Completed</h4>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>Today, 10:30 AM</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>Discussed Q3 procurement needs. Customer mentioned expanding their vendor list for hardware components.</p>
                    <span style={{ fontSize: '11px', color: '#94a3b8', display: 'block', marginTop: '8px' }}>Logged by: Sarah J.</span>
                  </div>
                </div>

                {/* Item 2 */}
                <div style={{ position: 'relative', marginBottom: '24px' }}>
                  <div style={{ position: 'absolute', left: '-24px', top: '2px', width: '12px', height: '12px', background: '#3b82f6', border: '3px solid #fff', borderRadius: '50%' }}></div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#0f172a' }}>Email Sent: Proposal Draft</h4>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>Yesterday, 4:15 PM</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>Sent the initial draft for the Enterprise license renewal proposal.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-24px', top: '2px', width: '12px', height: '12px', background: '#10b981', border: '3px solid #fff', borderRadius: '50%' }}></div>
                  <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: 600, margin: 0, color: '#0f172a' }}>Invoice #INV-2023-084 Paid</h4>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>Oct 12, 2023</span>
                    </div>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>Payment received for $12,500.00 via Credit Card.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Tags & Attributes (Span 4) */}
            <div className="content-card" style={{ gridColumn: 'span 4', padding: '24px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '0 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>sell</span>
                Tags & Segments
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {customer.tags && customer.tags.length > 0 ? (
                  customer.tags.map((tag: string) => (
                    <span key={tag} style={{ background: '#f1f5f9', color: '#475569', fontSize: '12px', padding: '4px 10px', borderRadius: '16px', border: '1px solid #cbd5e1' }}>
                      {tag}
                    </span>
                  ))
                ) : (
                  <span style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>No tags assigned</span>
                )}
              </div>

              <h3 style={{ fontSize: '15px', fontWeight: 600, margin: '24px 0 16px', color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #f1f5f9', paddingBottom: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#3b82f6' }}>notes</span>
                Internal Notes
              </h3>
              <p style={{
                fontSize: '13px',
                color: '#475569',
                fontStyle: customer.notes ? 'normal' : 'italic',
                background: '#f8fafc',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                margin: 0
              }}>
                {customer.notes || 'No internal notes recorded yet for this client.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
