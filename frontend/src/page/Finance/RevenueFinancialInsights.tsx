import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const RevenueFinancialInsights: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [payments, setPayments] = useState<any[]>([]);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const payRes = await api.getCustomerPaymentsLocal();
      setPayments(payRes.data || []);

      const expRes = await api.getExpenses();
      setExpenses(expRes.data || []);
    } catch (err) {
      console.error('Failed to load financial datasets', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Compute stats
  const totalRevenue = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + Number(p.amount), 0);

  const totalExpenses = expenses
    .filter((e) => e.status === 'Cleared' || e.status === 'Approved')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  const netProfit = totalRevenue - totalExpenses;
  const profitMargin = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0;
  
  // Growth indicators (mock calculation based on real data)
  const yoyGrowthVal = totalRevenue * 1.25;

  const exportReport = () => {
    alert('Generating financial performance report for export...');
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <h1 className="topbar-title">Financial Insights</h1>
          <div className="topbar-actions">
            <button onClick={exportReport} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
              Export Insights
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {loading ? (
            <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
              Loading financial insights...
            </div>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Financial Performance Dashboard</h2>
                  <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Comprehensive overview of organizational revenues, operational cost distributions, and net profitability.</p>
                </div>
                <div style={{ fontSize: '13px', background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', color: '#475569', fontWeight: 600 }}>
                  Fiscal Period: Current Quarter (Q3)
                </div>
              </div>

          {/* KPI Dashboard Grid */}
          <div className="bento-grid" style={{ marginBottom: '24px' }}>
            
            {/* Revenue Card */}
            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Gross Revenue</span>
                <span className="material-symbols-outlined" style={{ color: '#005dac', background: '#d4e3ff', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>account_balance_wallet</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRevenue)}
              </div>
              <div style={{ fontSize: '11px', color: '#16a34a', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
                +12.5% vs Q2
              </div>
            </div>

            {/* Net Profit Card */}
            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Net Profit</span>
                <span className="material-symbols-outlined" style={{ color: '#9a25ae', background: '#ffd6fe', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>savings</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netProfit)}
              </div>
              <div style={{ fontSize: '11px', color: '#16a34a', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
                +8.2% vs Q2
              </div>
            </div>

            {/* Profit Margin Card */}
            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Profit Margin</span>
                <span className="material-symbols-outlined" style={{ color: '#944700', background: '#ffdbc7', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>pie_chart</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
                {profitMargin.toFixed(1)}%
              </div>
              <div style={{ fontSize: '11px', color: '#dc2626', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_down</span>
                -1.1% margin shift
              </div>
            </div>

            {/* YoY Growth Card */}
            <div className="col-span-3 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Projected YoY Value</span>
                <span className="material-symbols-outlined" style={{ color: '#475569', background: '#e2e8f0', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>monitoring</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(yoyGrowthVal)}
              </div>
              <div style={{ fontSize: '11px', color: '#16a34a', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>trending_up</span>
                +22.4% target forecast
              </div>
            </div>
          </div>

          {/* Detailed Visualizations Bento */}
          <div className="bento-grid" style={{ marginBottom: '24px' }}>
            
            {/* Chart: Revenue vs Profit */}
            <div className="col-span-8 content-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
                <h3 className="content-card-title">Revenue vs. Profit Breakdown</h3>
                <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#64748b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#1976d2', borderRadius: '2px' }}></div>
                    <span>Revenue</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '12px', height: '12px', background: '#ed76fd', borderRadius: '2px' }}></div>
                    <span>Profit</span>
                  </div>
                </div>
              </div>

              <div style={{ padding: '24px', height: '280px', display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '24px',
                  top: '24px',
                  bottom: '50px',
                  width: '50px',
                  borderRight: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  fontSize: '11px',
                  color: '#94a3b8',
                  paddingRight: '6px',
                  textAlign: 'right'
                }}>
                  <span>$100k</span>
                  <span>$50k</span>
                  <span>$0</span>
                </div>

                <div style={{ marginLeft: '66px', width: '100%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', paddingBottom: '20px' }}>
                  {/* Jan */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '65%', borderRadius: '2px 2px 0 0' }} title="Revenue: $65k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '35%', borderRadius: '2px 2px 0 0' }} title="Profit: $35k"></div>
                    <span style={{ fontSize: '11px', color: '#64748b', position: 'absolute', bottom: '-20px' }}>Jan</span>
                  </div>
                  {/* Feb */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '72%', borderRadius: '2px 2px 0 0' }} title="Revenue: $72k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '40%', borderRadius: '2px 2px 0 0' }} title="Profit: $40k"></div>
                    <span style={{ fontSize: '11px', color: '#64748b', position: 'absolute', bottom: '-20px' }}>Feb</span>
                  </div>
                  {/* Mar */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '55%', borderRadius: '2px 2px 0 0' }} title="Revenue: $55k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '28%', borderRadius: '2px 2px 0 0' }} title="Profit: $28k"></div>
                    <span style={{ fontSize: '11px', color: '#64748b', position: 'absolute', bottom: '-20px' }}>Mar</span>
                  </div>
                  {/* Apr */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '85%', borderRadius: '2px 2px 0 0' }} title="Revenue: $85k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '48%', borderRadius: '2px 2px 0 0' }} title="Profit: $48k"></div>
                    <span style={{ fontSize: '11px', position: 'absolute', bottom: '-20px', fontWeight: 'bold', color: '#005dac' }}>Apr</span>
                  </div>
                  {/* May */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '90%', borderRadius: '2px 2px 0 0' }} title="Revenue: $90k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '52%', borderRadius: '2px 2px 0 0' }} title="Profit: $52k"></div>
                    <span style={{ fontSize: '11px', color: '#64748b', position: 'absolute', bottom: '-20px' }}>May</span>
                  </div>
                  {/* Jun */}
                  <div style={{ display: 'flex', gap: '4px', height: '100%', alignItems: 'flex-end', width: '45px', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ width: '12px', background: '#1976d2', height: '78%', borderRadius: '2px 2px 0 0' }} title="Revenue: $78k"></div>
                    <div style={{ width: '12px', background: '#ed76fd', height: '44%', borderRadius: '2px 2px 0 0' }} title="Profit: $44k"></div>
                    <span style={{ fontSize: '11px', color: '#64748b', position: 'absolute', bottom: '-20px' }}>Jun</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Categorical Cost Distribution */}
            <div className="col-span-4 content-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="content-card-header" style={{ borderBottom: '1px solid #e2e8f0' }}>
                <h3 className="content-card-title">Revenue by Category</h3>
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, justifyContent: 'center' }}>
                {/* Simulated Donut Chart using a heavy conical border */}
                <div style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#1976d2 0% 45%, #9a25ae 45% 75%, #ba5b00 75% 90%, #c1c6d4 90% 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '90px',
                    height: '90px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.06)'
                  }}>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>100%</span>
                    <span style={{ fontSize: '10px', color: '#64748b' }}>Breakdown</span>
                  </div>
                </div>

                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#1976d2', borderRadius: '50%' }}></div>
                      <span>Software Licensing</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>45%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#9a25ae', borderRadius: '50%' }}></div>
                      <span>Cloud Services</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>30%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#ba5b00', borderRadius: '50%' }}></div>
                      <span>Consulting retainer</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>15%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#c1c6d4', borderRadius: '50%' }}></div>
                      <span>Other sources</span>
                    </div>
                    <span style={{ fontWeight: 600 }}>10%</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Financial Summary Matrix */}
          <div className="content-card">
            <div className="content-card-header" style={{ borderBottom: '1px solid #e2e8f0' }}>
              <h3 className="content-card-title">Financial Summary Matrix</h3>
            </div>
            <div className="content-card-body" style={{ padding: 0, overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr style={{ background: '#f8fafc' }}>
                    <th>Category</th>
                    <th style={{ textAlign: 'right' }}>Q1 2026</th>
                    <th style={{ textAlign: 'right' }}>Q2 2026</th>
                    <th style={{ textAlign: 'right' }}>Q3 2026</th>
                    <th style={{ textAlign: 'right' }}>YTD Total</th>
                    <th style={{ textAlign: 'center' }}>Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Gross Revenue</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$750,000</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$820,000</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRevenue)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#005dac' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1570000 + totalRevenue)}
                    </td>
                    <td style={{ textAlign: 'center', color: '#16a34a' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>trending_up</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Operating Expenses</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$420,000</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$435,000</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalExpenses)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#dc2626' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(855000 + totalExpenses)}
                    </td>
                    <td style={{ textAlign: 'center', color: '#dc2626' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>trending_up</span>
                    </td>
                  </tr>
                  <tr style={{ background: '#f8fafc' }}>
                    <td style={{ fontWeight: 700, color: '#1e3a8a' }}>EBITDA</td>
                    <td style={{ textAlign: 'right', fontWeight: 500 }}>$330,000</td>
                    <td style={{ textAlign: 'right', fontWeight: 500 }}>$385,000</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#005dac' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalRevenue - totalExpenses)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 800, color: '#1e3a8a' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(715000 + (totalRevenue - totalExpenses))}
                    </td>
                    <td style={{ textAlign: 'center', color: '#16a34a' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>trending_up</span>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 600 }}>Net Profit</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$240,000</td>
                    <td style={{ textAlign: 'right', color: '#475569' }}>$285,000</td>
                    <td style={{ textAlign: 'right', fontWeight: 600 }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(netProfit)}
                    </td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: '#9a25ae' }}>
                      {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(525000 + netProfit)}
                    </td>
                    <td style={{ textAlign: 'center', color: '#9a25ae' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>moving</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </>
          )}
        </div>
      </div>
    </div>
  );
};
