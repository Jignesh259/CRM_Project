import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const TransactionLedger: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [ledger, setLedger] = useState<any[]>([]);
  const [filteredLedger, setFilteredLedger] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [warehouseFilter, setWarehouseFilter] = useState('All');
  const [warehouses, setWarehouses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const loadLedgerData = async () => {
      setLoading(true);
      try {
        const ledgerRes = await api.getInventoryLedger();
        setLedger(ledgerRes.data || []);

        const whRes = await api.getWarehouses();
        setWarehouses(whRes.data || []);
      } catch (err) {
        console.error('Failed to load ledger data', err);
      } finally {
        setLoading(false);
      }
    };
    loadLedgerData();
  }, []);

  useEffect(() => {
    let result = [...ledger];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (item) =>
          item.id.toLowerCase().includes(q) ||
          item.productName.toLowerCase().includes(q) ||
          (item.ref && item.ref.toLowerCase().includes(q))
      );
    }

    if (typeFilter !== 'All') {
      result = result.filter((item) => item.type === typeFilter);
    }

    if (warehouseFilter !== 'All') {
      result = result.filter((item) => item.warehouse === warehouseFilter);
    }

    setFilteredLedger(result);
  }, [search, typeFilter, warehouseFilter, ledger]);

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Inventory Transaction Ledger</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search ledger..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Transaction History</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Review all inward, outward, and transfer movements.</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => navigate('/inventory/stock-in')} className="btn btn-primary btn-sm">
                Log Stock In
              </button>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Movement Type</span>
              <select
                className="form-select"
                style={{ width: '160px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Stock In">Stock In</option>
                <option value="Stock Out">Stock Out</option>
                <option value="Transfer">Transfer</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Warehouse Hub</span>
              <select
                className="form-select"
                style={{ width: '200px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={warehouseFilter}
                onChange={(e) => setWarehouseFilter(e.target.value)}
              >
                <option value="All">All Warehouses</option>
                {warehouses.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Ledger List */}
          <div className="content-card">
            <div className="content-card-header">
              <h3 className="content-card-title">Ledger Entries ({filteredLedger.length})</h3>
            </div>
            <div className="content-card-body" style={{ overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading transaction ledger...</div>
              ) : filteredLedger.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No transaction history found.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Transaction ID</th>
                      <th>Product</th>
                      <th>Type</th>
                      <th>Warehouse</th>
                      <th>Qty</th>
                      <th>Date / Time</th>
                      <th>Ref Order</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLedger.map((item) => (
                      <tr key={item.id}>
                        <td style={{ fontWeight: 600, color: '#64748b', fontFamily: 'monospace' }}>{item.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{item.productName}</td>
                        <td>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 600,
                            color: item.type === 'Stock In' ? '#16a34a' : item.type === 'Stock Out' ? '#dc2626' : '#2563eb'
                          }}>
                            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                              {item.type === 'Stock In' ? 'arrow_downward' : item.type === 'Stock Out' ? 'arrow_upward' : 'swap_horiz'}
                            </span>
                            {item.type}
                          </span>
                        </td>
                        <td>{item.warehouse}</td>
                        <td style={{ fontWeight: 700 }}>
                          {item.qty > 0 ? `+${item.qty}` : item.qty}
                        </td>
                        <td style={{ color: '#64748b' }}>
                          {new Date(item.date).toLocaleDateString()} {new Date(item.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </td>
                        <td style={{ fontFamily: 'monospace', color: '#475569' }}>{item.ref || 'Manual'}</td>
                        <td>
                          <span className="badge" style={{
                            background: item.status === 'Completed' ? '#d1fae5' : '#fef3c7',
                            color: item.status === 'Completed' ? '#065f46' : '#b45309'
                          }}>
                            {item.status}
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
    </div>
  );
};
