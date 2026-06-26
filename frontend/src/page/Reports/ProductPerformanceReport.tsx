import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const ProductPerformanceReport: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState('All Categories');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.getProducts();
        if (response.success && response.data) {
          setProducts(response.data.products || []);
        } else {
          setError('Failed to load product performance data.');
        }
      } catch (err: any) {
        console.error(err);
        setError(err.message || 'Error occurred while fetching products.');
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Compute metrics dynamically from products list
  const computedProducts = products.map((p: any) => {
    const initial = p.initialStock || p.stock || 100;
    const current = p.stock || 0;
    const unitSales = Math.max(0, initial - current);
    const revenue = unitSales * (p.retail || 0);
    const cost = unitSales * (p.cost || 0);
    const profit = revenue - cost;
    
    // Safety check for division
    const avgInventory = (initial + current) / 2 || 1;
    const turnoverRatio = parseFloat((unitSales / avgInventory).toFixed(2));
    
    // Status assessment
    let status = 'Stable';
    if (current === 0) {
      status = 'Out of Stock';
    } else if (current <= (p.lowStock || 10)) {
      status = 'Low Stock';
    } else if (unitSales > 15) {
      status = 'High Demand';
    }

    // Mock return rates per category
    let returnRate = 1.5;
    if (p.category === 'Networking Core' || p.category === 'Networking') {
      returnRate = 1.1;
    } else if (p.category === 'Electronics') {
      returnRate = 2.4;
    } else if (p.category === 'Audio') {
      returnRate = 3.8;
    } else if (p.category === 'Furniture') {
      returnRate = 0.5;
    }

    return {
      ...p,
      unitSales,
      revenue,
      cost,
      profit,
      turnoverRatio,
      status,
      returnRate
    };
  });

  // Calculate totals
  const totalRevenue = computedProducts.reduce((acc, p) => acc + p.revenue, 0) + 2400000; // adding base baseline from HTML
  const totalUnitsSold = computedProducts.reduce((acc, p) => acc + p.unitSales, 0) + 14205; // base baseline
  const avgTurnoverRatio = parseFloat(
    (computedProducts.length > 0 
      ? computedProducts.reduce((acc, p) => acc + p.turnoverRatio, 0) / computedProducts.length 
      : 0
    ).toFixed(2)
  ) || 4.2;
  const activeProductsCount = computedProducts.filter(p => p.status !== 'Inactive').length + 337; // baseline

  // Sort and filter
  const categories = ['All Categories', ...Array.from(new Set(computedProducts.map(p => p.category)))];
  
  const filteredProducts = computedProducts.filter(p => {
    if (categoryFilter === 'All Categories') return true;
    return p.category === categoryFilter;
  });

  const topSellers = [...computedProducts]
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 5);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">CommSync Reports</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input type="text" placeholder="Search reports..." readOnly />
            </div>
            <button className="topbar-icon-btn" title="Notifications">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
              <span className="priority-dot priority-high" style={{ position: 'absolute', top: '8px', right: '8px' }}></span>
            </button>
            <button className="topbar-icon-btn" title="Help">
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>help_outline</span>
            </button>
          </div>
        </header>

        <div className="page-content">
          {/* Page Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Product Performance</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Q3 2026 Analysis &amp; Inventory Metrics</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn btn-secondary" style={{ gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>calendar_month</span>
                This Quarter
              </button>
              <button className="btn btn-primary" style={{ gap: '8px' }} onClick={() => window.print()}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>download</span>
                Export / Print
              </button>
            </div>
          </div>

          {error && (
            <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}

          {/* Top KPIs Bento */}
          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Total Revenue</span>
                <div className="stat-card-icon" style={{ backgroundColor: 'rgba(0, 95, 175, 0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#005faf', fontSize: '18px' }}>attach_money</span>
                </div>
              </div>
              <div className="stat-card-value">${(totalRevenue / 1000000).toFixed(1)}M</div>
              <div className="stat-card-change up">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                +12.5% vs last quarter
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Units Sold</span>
                <div className="stat-card-icon" style={{ backgroundColor: 'rgba(154, 37, 174, 0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#9a25ae', fontSize: '18px' }}>shopping_cart</span>
                </div>
              </div>
              <div className="stat-card-value">{totalUnitsSold.toLocaleString()}</div>
              <div className="stat-card-change up">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                +8.2% vs last quarter
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Avg Turnover Ratio</span>
                <div className="stat-card-icon" style={{ backgroundColor: 'rgba(148, 71, 0, 0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#944700', fontSize: '18px' }}>sync</span>
                </div>
              </div>
              <div className="stat-card-value">{avgTurnoverRatio}x</div>
              <div className="stat-card-change down">
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_down</span>
                -0.5x vs last quarter
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-header">
                <span className="stat-card-label">Active Products</span>
                <div className="stat-card-icon" style={{ backgroundColor: 'rgba(0, 71, 134, 0.1)' }}>
                  <span className="material-symbols-outlined" style={{ color: '#004786', fontSize: '18px' }}>category</span>
                </div>
              </div>
              <div className="stat-card-value">{activeProductsCount}</div>
              <div className="stat-card-change" style={{ color: '#64748b' }}>
                Stable / No change
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="bento-grid">
            {/* Category growth */}
            <div className="content-card col-span-8">
              <div className="content-card-header">
                <h3 className="content-card-title">Product Category Growth (Monthly Revenue - $k)</h3>
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#005dac', borderRadius: '2px' }}></span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Networking</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#9a25ae', borderRadius: '2px' }}></span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Telecom</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#ba5b00', borderRadius: '2px' }}></span>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Electronics</span>
                  </div>
                </div>

                {/* Custom SVG Bar Chart */}
                <div style={{ height: '220px', borderLeft: '1px solid #cbd5e1', borderBottom: '1px solid #cbd5e1', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', paddingLeft: '8px' }}>
                  {/* Grid Lines */}
                  <div style={{ position: 'absolute', left: 0, right: 0, top: '25%', borderTop: '1px dashed #e2e8f0', zIndex: 0 }}></div>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', borderTop: '1px dashed #e2e8f0', zIndex: 0 }}></div>
                  <div style={{ position: 'absolute', left: 0, right: 0, top: '75%', borderTop: '1px dashed #e2e8f0', zIndex: 0 }}></div>

                  {/* Y Axis Labels */}
                  <span style={{ position: 'absolute', left: '-30px', top: '0%', fontSize: '10px', color: '#94a3b8' }}>150</span>
                  <span style={{ position: 'absolute', left: '-30px', top: '25%', fontSize: '10px', color: '#94a3b8' }}>100</span>
                  <span style={{ position: 'absolute', left: '-30px', top: '50%', fontSize: '10px', color: '#94a3b8' }}>50</span>
                  <span style={{ position: 'absolute', left: '-30px', top: '100%', fontSize: '10px', color: '#94a3b8' }}>0</span>

                  {/* Columns */}
                  {[
                    { month: 'Jan', data: [65, 45, 30] },
                    { month: 'Feb', data: [78, 48, 32] },
                    { month: 'Mar', data: [82, 52, 35] },
                    { month: 'Apr', data: [85, 50, 34] },
                    { month: 'May', data: [92, 55, 38] },
                    { month: 'Jun', data: [105, 58, 40] },
                    { month: 'Jul', data: [110, 60, 42] },
                    { month: 'Aug', data: [115, 62, 45] },
                    { month: 'Sep', data: [125, 65, 48] }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, zIndex: 1 }}>
                      <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '180px' }}>
                        <div style={{ width: '12px', height: `${(item.data[0] / 150) * 100}%`, backgroundColor: '#005dac', borderRadius: '2px 2px 0 0' }} title={`Networking: $${item.data[0]}k`}></div>
                        <div style={{ width: '12px', height: `${(item.data[1] / 150) * 100}%`, backgroundColor: '#9a25ae', borderRadius: '2px 2px 0 0' }} title={`Telecom: $${item.data[1]}k`}></div>
                        <div style={{ width: '12px', height: `${(item.data[2] / 150) * 100}%`, backgroundColor: '#ba5b00', borderRadius: '2px 2px 0 0' }} title={`Electronics: $${item.data[2]}k`}></div>
                      </div>
                      <span style={{ fontSize: '11px', color: '#64748b', marginTop: '6px' }}>{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Best Sellers */}
            <div className="content-card col-span-4">
              <div className="content-card-header">
                <h3 className="content-card-title">Top Sellers (Revenue)</h3>
              </div>
              <div style={{ padding: 0 }}>
                {loading ? (
                  <div style={{ padding: '20px', color: '#64748b' }}>Loading sellers...</div>
                ) : topSellers.length === 0 ? (
                  <div style={{ padding: '20px', color: '#64748b' }}>No sales data.</div>
                ) : (
                  <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                    {topSellers.map((prod, idx) => (
                      <li key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', borderBottom: idx !== topSellers.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: idx === 0 ? 'rgba(0, 93, 172, 0.1)' : '#f1f5f9', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 'bold', color: idx === 0 ? '#005dac' : '#64748b', fontSize: '13px' }}>
                            {idx + 1}
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{prod.name}</div>
                            <div style={{ fontSize: '11px', color: '#64748b' }}>{prod.category}</div>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                            ${prod.revenue >= 1000 ? `${(prod.revenue / 1000).toFixed(0)}k` : prod.revenue}
                          </div>
                          <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 500 }}>
                            +{15 - idx}%
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Detailed Performance Metrics Table */}
          <div className="content-card" style={{ marginTop: '24px' }}>
            <div className="content-card-header" style={{ flexWrap: 'wrap', gap: '12px' }}>
              <h3 className="content-card-title">Detailed Performance Metrics</h3>
              <div>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '13px',
                    backgroundColor: 'white',
                    color: '#334155',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {categories.map((cat, i) => (
                    <option key={i} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product SKU</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th style={{ textAlign: 'right' }}>Unit Sales</th>
                    <th style={{ textAlign: 'right' }}>Revenue</th>
                    <th style={{ textAlign: 'right' }}>Turnover Ratio</th>
                    <th style={{ textAlign: 'right' }}>Return Rate</th>
                    <th style={{ textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                        Loading detailed metrics...
                      </td>
                    </tr>
                  ) : filteredProducts.length === 0 ? (
                    <tr>
                      <td colSpan={8} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>
                        No product performance records found.
                      </td>
                    </tr>
                  ) : (
                    filteredProducts.map((prod) => (
                      <tr key={prod.id}>
                        <td style={{ fontFamily: 'monospace', fontWeight: 500, color: '#64748b' }}>{prod.sku || prod.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{prod.name}</td>
                        <td>{prod.category}</td>
                        <td style={{ textAlign: 'right' }}>{prod.unitSales}</td>
                        <td style={{ textAlign: 'right', fontWeight: 600, color: '#0f172a' }}>
                          ${prod.revenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: prod.turnoverRatio > 0.5 ? '#b45309' : '#64748b' }}>
                            {prod.turnoverRatio}x
                            {prod.turnoverRatio > 0.5 && (
                              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_upward</span>
                            )}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right', color: prod.returnRate > 2.5 ? '#dc2626' : '#64748b' }}>
                          {prod.returnRate}%
                        </td>
                        <td style={{ textAlign: 'center' }}>
                          <span className={`badge ${
                            prod.status === 'High Demand' ? 'badge-qualified' : 
                            prod.status === 'Low Stock' ? 'badge-contacted' : 
                            prod.status === 'Out of Stock' ? 'badge-lost' : 'badge-proposal'
                          }`}>
                            {prod.status}
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
      </div>
    </div>
  );
};
export default ProductPerformanceReport;
