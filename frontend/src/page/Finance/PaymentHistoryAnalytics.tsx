import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const PaymentHistoryAnalytics: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [payments, setPayments] = useState<any[]>([]);
  const [filteredPayments, setFilteredPayments] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await api.getCustomerPaymentsLocal();
      setPayments(res.data || []);
    } catch (err) {
      console.error('Failed to load payments history', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (search) {
      const q = search.toLowerCase();
      const filtered = payments.filter((p) =>
        p.id.toLowerCase().includes(q) ||
        p.customerName.toLowerCase().includes(q) ||
        p.paymentMethod.toLowerCase().includes(q) ||
        p.status.toLowerCase().includes(q)
      );
      setFilteredPayments(filtered);
    } else {
      setFilteredPayments(payments);
    }
  }, [search, payments]);

  // Mocked 12 months payment volumes for the chart (representing Last 12 Months)
  const monthlyData = [
    { name: 'Jan', collected: 65400, pending: 15000 },
    { name: 'Feb', collected: 72000, pending: 8000 },
    { name: 'Mar', collected: 55000, pending: 12000 },
    { name: 'Apr', collected: 85000, pending: 18000 },
    { name: 'May', collected: 110000, pending: 14000 },
    { name: 'Jun', collected: 78000, pending: 9000 },
    { name: 'Jul', collected: 88000, pending: 22000 },
    { name: 'Aug', collected: 95000, pending: 16000 },
    { name: 'Sep', collected: 120000, pending: 10000 },
    { name: 'Oct', collected: 98000, pending: 15000 },
    { name: 'Nov', collected: 85000, pending: 20000 },
    { name: 'Dec', collected: 90000, pending: 25000 },
  ];

  const maxVolume = 150000; // Reference value for scaling the bars

  const exportCSV = () => {
    alert('Exporting historical payments to CSV format...');
  };

  const exportPDF = () => {
    alert('Exporting payment analytical report to PDF...');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Top bar */}
        <header className="topbar">
          <h1 className="topbar-title">Finance Analytics</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search archive..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Payment History & Archive</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review historical transactions and analyze collections over the long term.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={exportCSV} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Export CSV
              </button>
              <button onClick={exportPDF} className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>picture_as_pdf</span>
                Export PDF
              </button>
            </div>
          </div>

          {/* Monthly Volume Bar Chart */}
          <div className="content-card" style={{ marginBottom: '24px' }}>
            <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
              <h3 className="content-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#005dac' }}>bar_chart</span>
                Payment Volume (Last 12 Months)
              </h3>
              <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '12px', height: '12px', background: '#005dac', borderRadius: '2px' }}></div>
                  <span>Collected</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '12px', height: '12px', background: '#cbd5e1', borderRadius: '2px' }}></div>
                  <span>Pending</span>
                </div>
              </div>
            </div>

            <div style={{ padding: '24px', height: '350px', position: 'relative', display: 'flex', alignItems: 'flex-end' }}>
              {/* Y Axis Grid Labels */}
              <div style={{
                position: 'absolute',
                left: '24px',
                top: '24px',
                bottom: '64px',
                width: '60px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                fontSize: '11px',
                color: '#94a3b8',
                borderRight: '1px solid #e2e8f0',
                paddingRight: '8px',
                textAlign: 'right',
                fontFamily: 'monospace'
              }}>
                <span>$150k</span>
                <span>$100k</span>
                <span>$50k</span>
                <span>$0</span>
              </div>

              {/* Bars Container */}
              <div style={{ marginLeft: '76px', width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '30px' }}>
                {monthlyData.map((d, idx) => {
                  const collectedPct = (d.collected / maxVolume) * 100;
                  const pendingPct = (d.pending / maxVolume) * 100;

                  return (
                    <div key={idx} style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1,
                      maxWidth: '45px',
                      height: '100%',
                      justifyContent: 'flex-end',
                      position: 'relative'
                    }}>
                      {/* Tooltip on hover */}
                      <div className="chart-tooltip" style={{
                        position: 'absolute',
                        top: '-32px',
                        background: '#0f172a',
                        color: '#fff',
                        fontSize: '10px',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        opacity: 0,
                        transition: 'opacity 0.2s',
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap',
                        zIndex: 10
                      }}>
                        Collected: ${d.collected.toLocaleString()}
                      </div>
                      
                      {/* Bar Stack */}
                      <div style={{ width: '70%', background: '#cbd5e1', height: `${pendingPct}%`, borderRadius: '2px 2px 0 0' }}></div>
                      <div style={{ width: '70%', background: '#005dac', height: `${collectedPct}%`, marginTop: '-2px', borderRadius: '2px 2px 0 0' }}></div>

                      <span style={{ fontSize: '12px', color: '#64748b', marginTop: '8px', position: 'absolute', bottom: '-24px' }}>
                        {d.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Historical Table */}
          <div className="content-card">
            <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="content-card-title">Archive Entries ({filteredPayments.length})</h3>
            </div>
            <div className="content-card-body" style={{ padding: 0, overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading payment archives...</div>
              ) : filteredPayments.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No archived payments found.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Date Paid</th>
                      <th>Reference ID</th>
                      <th>Client Entity</th>
                      <th>Payment Method</th>
                      <th style={{ textAlign: 'right' }}>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPayments.map((p) => (
                      <tr key={p.id} onClick={() => navigate(`/finance/transactions/${p.id}`)} style={{ cursor: 'pointer' }}>
                        <td>{new Date(p.date).toLocaleDateString()}</td>
                        <td style={{ fontWeight: 600, color: '#005dac', fontFamily: 'monospace' }}>{p.id}</td>
                        <td style={{ fontWeight: 600 }}>{p.customerName}</td>
                        <td>{p.paymentMethod}</td>
                        <td style={{ fontWeight: 700, textAlign: 'right' }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.amount)}
                        </td>
                        <td>
                          <span className="badge" style={{
                            background: p.status === 'Completed' ? '#e2e8f0' : p.status === 'Processing' ? '#ffedd5' : '#fee2e2',
                            color: p.status === 'Completed' ? '#475569' : p.status === 'Processing' ? '#ea580c' : '#b91c1c'
                          }}>
                            {p.status === 'Completed' ? 'Archived' : p.status}
                          </span>
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
      
      {/* Styles for hover interactions */}
      <style>{`
        div:hover > .chart-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};
