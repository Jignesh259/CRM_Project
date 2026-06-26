import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const InventoryOverviewDashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [stats, setStats] = useState({
    totalValue: 0,
    lowStockCount: 0,
    pendingTransfers: 0,
    capacity: '82%',
  });
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [recentMovements, setRecentMovements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      try {
        // Load products to compute total value and low stock
        const prodRes = await api.getProducts();
        const products = prodRes.data?.products || [];
        
        let totalVal = 0;
        let lowCount = 0;
        products.forEach((p: any) => {
          totalVal += p.stock * p.cost;
          if (p.stock <= p.lowStock) {
            lowCount++;
          }
        });

        // Load transfers to count pending
        const transferRes = await api.getTransfers();
        const transfers = transferRes.data || [];
        const pending = transfers.filter((t: any) => t.status === 'In Transit').length;

        // Load ledger
        const ledgerRes = await api.getInventoryLedger();
        const ledger = ledgerRes.data || [];

        setStats({
          totalValue: totalVal,
          lowStockCount: lowCount,
          pendingTransfers: pending,
          capacity: '82%', // Mock static capacity
        });

        setRecentMovements(ledger.slice(0, 5));

        // Group products by category
        const catMap: Record<string, number> = {};
        products.forEach((p: any) => {
          catMap[p.category] = (catMap[p.category] || 0) + p.stock;
        });

        const catList = Object.entries(catMap).map(([name, stock]) => ({
          name,
          stock,
          height: Math.min(180, Math.max(20, (stock / 1000) * 100)), // Scale height for bar chart
        }));
        setCategoryData(catList);

      } catch (err) {
        console.error('Failed to load dashboard data', err);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory Overview Dashboard</h1>
          <div className="topbar-actions">
            <Link to="/inventory/stock-in" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>move_to_inbox</span>
              Receive Stock
            </Link>
          </div>
        </header>

        {/* Content */}
        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Stock Metrics & Operations</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Real-time stock status, transfers, and ledger movements.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <Link to="/inventory/stock-transfer" className="btn btn-secondary btn-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>swap_horiz</span>
                Stock Transfer
              </Link>
              <Link to="/inventory/stock-out" className="btn btn-secondary btn-sm">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>outbox</span>
                Stock Out
              </Link>
            </div>
          </div>

          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading dashboard metrics...</div>
          ) : (
            <>
              {/* Stat Grid */}
              <div className="stat-grid">
                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-card-label">Total Stock Value</span>
                    <div className="stat-card-icon" style={{ background: '#dbeafe', color: '#1d4ed8' }}>
                      <span className="material-symbols-outlined">attach_money</span>
                    </div>
                  </div>
                  <span className="stat-card-value">
                    {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(stats.totalValue)}
                  </span>
                  <div className="stat-card-change up">
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                    <span>Active Valuation</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-card-label">Low Stock Items</span>
                    <div className="stat-card-icon" style={{ background: '#fee2e2', color: '#dc2626' }}>
                      <span className="material-symbols-outlined">warning</span>
                    </div>
                  </div>
                  <span className="stat-card-value">{stats.lowStockCount}</span>
                  <div className="stat-card-change down">
                    <span>Below threshold</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-card-label">Pending Transfers</span>
                    <div className="stat-card-icon" style={{ background: '#fef3c7', color: '#b45309' }}>
                      <span className="material-symbols-outlined">local_shipping</span>
                    </div>
                  </div>
                  <span className="stat-card-value">{stats.pendingTransfers}</span>
                  <div className="stat-card-change" style={{ color: '#b45309' }}>
                    <span>In transit between hubs</span>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-card-header">
                    <span className="stat-card-label">Warehouse Capacity</span>
                    <div className="stat-card-icon" style={{ background: '#f1f5f9', color: '#475569' }}>
                      <span className="material-symbols-outlined">warehouse</span>
                    </div>
                  </div>
                  <span className="stat-card-value">{stats.capacity}</span>
                  <div className="stat-card-change" style={{ color: '#475569' }}>
                    <span>Zone A near capacity</span>
                  </div>
                </div>
              </div>

              {/* Bento Grid */}
              <div className="bento-grid">
                {/* Bar Chart */}
                <div className="content-card col-span-8">
                  <div className="content-card-header">
                    <h3 className="content-card-title">Stock Levels by Category</h3>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div className="bar-chart-container" style={{ borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', paddingLeft: '20px' }}>
                      {categoryData.length === 0 ? (
                        <div style={{ color: '#64748b', fontSize: '13px' }}>No categories registered.</div>
                      ) : (
                        categoryData.map((cat) => (
                          <div key={cat.name} className="bar-wrapper">
                            <div
                              className="bar"
                              data-val={`${cat.stock} Units`}
                              style={{ height: `${cat.height}px` }}
                            />
                            <span className="axis-label" title={cat.name}>
                              {cat.name.length > 12 ? cat.name.slice(0, 10) + '..' : cat.name}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Alerts */}
                <div className="content-card col-span-4" style={{ background: '#1e293b', color: 'white', border: 'none' }}>
                  <div className="content-card-header" style={{ borderBottom: '1px solid #334155' }}>
                    <h3 className="content-card-title" style={{ color: 'white', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="material-symbols-outlined" style={{ color: '#ef4444' }}>error</span>
                      Critical Alerts
                    </h3>
                  </div>
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>Stock status requires restock actions.</p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ background: '#334155', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '13px' }}>CS-RTR-9000-V2</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>Core Network Router</div>
                        </div>
                        <span style={{ color: '#f87171', fontWeight: 700 }}>Restock Limit</span>
                      </div>
                      <div style={{ background: '#334155', padding: '12px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '13px' }}>SKU-4412</div>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>AeroNoise Headphones</div>
                        </div>
                        <span style={{ color: '#f87171', fontWeight: 700 }}>4 Units Left</span>
                      </div>
                    </div>

                    <Link to="/purchase-orders" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center', marginTop: '10px', background: 'white', color: '#1e293b' }}>
                      Generate Restock PO
                    </Link>
                  </div>
                </div>

                {/* Recent Movements */}
                <div className="content-card col-span-12">
                  <div className="content-card-header">
                    <h3 className="content-card-title">Recent Stock Movements</h3>
                    <Link to="/inventory/transaction-ledger" style={{ fontSize: '13px', color: '#3b82f6', fontWeight: 600 }}>
                      View Full Ledger
                    </Link>
                  </div>
                  <div className="content-card-body" style={{ overflowX: 'auto' }}>
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Transaction ID</th>
                          <th>Product Name</th>
                          <th>Movement Type</th>
                          <th>Quantity</th>
                          <th>Date</th>
                          <th>Reference</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentMovements.length === 0 ? (
                          <tr>
                            <td colSpan={7} style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>No transactions recorded.</td>
                          </tr>
                        ) : (
                          recentMovements.map((movement) => (
                            <tr key={movement.id}>
                              <td style={{ fontWeight: 600, color: '#64748b', fontFamily: 'monospace' }}>{movement.id}</td>
                              <td style={{ fontWeight: 600, color: '#0f172a' }}>{movement.productName}</td>
                              <td>
                                <span style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '4px',
                                  fontWeight: 600,
                                  color: movement.type === 'Stock In' ? '#16a34a' : movement.type === 'Stock Out' ? '#dc2626' : '#2563eb'
                                }}>
                                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                                    {movement.type === 'Stock In' ? 'arrow_downward' : movement.type === 'Stock Out' ? 'arrow_upward' : 'swap_horiz'}
                                  </span>
                                  {movement.type}
                                </span>
                              </td>
                              <td style={{ fontWeight: 700 }}>
                                {movement.qty > 0 ? `+${movement.qty}` : movement.qty}
                              </td>
                              <td style={{ color: '#64748b' }}>{new Date(movement.date).toLocaleDateString()} {new Date(movement.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                              <td style={{ fontFamily: 'monospace', color: '#475569' }}>{movement.ref || 'Manual'}</td>
                              <td>
                                <span className="badge" style={{
                                  background: movement.status === 'Completed' ? '#d1fae5' : '#fef3c7',
                                  color: movement.status === 'Completed' ? '#065f46' : '#b45309'
                                }}>
                                  {movement.status}
                                </span>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
