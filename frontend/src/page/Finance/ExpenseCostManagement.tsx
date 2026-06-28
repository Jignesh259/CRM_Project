import React, { useState, useEffect } from 'react';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const ExpenseCostManagement: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [expenses, setExpenses] = useState<any[]>([]);
  const [filteredExpenses, setFilteredExpenses] = useState<any[]>([]);
  
  // Search & Filter
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  // Loading & Modal state
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // New Expense form
  const [newExpense, setNewExpense] = useState({
    category: 'IT & Infra',
    amount: '',
    merchant: '',
    description: '',
    status: 'Pending',
  });

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await api.getExpenses();
      setExpenses(res.data || []);
    } catch (err) {
      console.error('Failed to load expenses data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    let result = [...expenses];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (e) =>
          e.merchant.toLowerCase().includes(q) ||
          (e.description && e.description.toLowerCase().includes(q)) ||
          e.id.toLowerCase().includes(q)
      );
    }

    if (categoryFilter !== 'All') {
      result = result.filter((e) => e.category === categoryFilter);
    }

    if (statusFilter !== 'All') {
      result = result.filter((e) => e.status === statusFilter);
    }

    setFilteredExpenses(result);
  }, [search, categoryFilter, statusFilter, expenses]);

  // Calculations
  const totalOpex = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
  const clearedOpex = expenses
    .filter((e) => e.status === 'Cleared' || e.status === 'Approved')
    .reduce((sum, e) => sum + Number(e.amount), 0);
  const pendingOpex = expenses
    .filter((e) => e.status === 'Pending')
    .reduce((sum, e) => sum + Number(e.amount), 0);

  // Categories list for choices
  const categories = ['IT & Infra', 'Office rent', 'Marketing', 'Facilities', 'Travel', 'Utilities', 'Operations'];

  // Handle Log new expense
  const handleCreateExpense = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.amount || !newExpense.merchant) {
      setError('Please provide merchant name and transaction amount.');
      return;
    }

    try {
      const payload = {
        category: newExpense.category,
        amount: Number(newExpense.amount),
        merchant: newExpense.merchant,
        description: newExpense.description,
        status: newExpense.status,
        approvedBy: newExpense.status === 'Approved' ? 'Alex Mercer' : null,
        date: new Date().toISOString(),
      };

      await api.createExpense(payload);
      
      // Reset & Reload
      setNewExpense({
        category: 'IT & Infra',
        amount: '',
        merchant: '',
        description: '',
        status: 'Pending',
      });
      setShowModal(false);
      setError(null);
      loadData();
    } catch (err: any) {
      setError(err.message || 'Failed to create expense claim');
    }
  };

  // Settle / Approve expense claim
  const handleApproveExpense = async (id: string) => {
    try {
      await api.updateExpense(id, {
        status: 'Cleared',
        approvedBy: 'Alex Mercer'
      });
      loadData();
    } catch (err) {
      console.error('Failed to approve expense claim', err);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <h1 className="topbar-title">Operational Expenses</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search vendor or merchant..."
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
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', margin: '0 0 4px' }}>Expense & operational costs</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Log, monitor, and approve operational disbursements across departments.</p>
            </div>
            <button onClick={() => setShowModal(true)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>receipt</span>
              Log Expense
            </button>
          </div>

          {/* KPI Dashboard */}
          <div className="bento-grid" style={{ marginBottom: '24px' }}>
            {/* Total OPEX */}
            <div className="col-span-4 content-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Total Operating Expenses</span>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', margin: '8px 0 4px' }}>
                  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalOpex)}
                </div>
                <div style={{ fontSize: '12px', color: '#dc2626', display: 'flex', alignItems: 'center', gap: '2px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span>
                  +4.2% versus last month
                </div>
              </div>
              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>
                  <span>Q3 Budget Utilized</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>82%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: '#e2e8f0', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: '82%', height: '100%', background: '#005dac', borderRadius: '3px' }}></div>
                </div>
              </div>
            </div>

            {/* Cleared Disbursements */}
            <div className="col-span-4 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Cleared & Approved</span>
                <span className="material-symbols-outlined" style={{ color: '#16a34a', background: '#d1fae5', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>check_circle</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(clearedOpex)}
              </div>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Disbursed and accounted transactions</span>
            </div>

            {/* Pending Approvals */}
            <div className="col-span-4 content-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>Claims Pending Clearance</span>
                <span className="material-symbols-outlined" style={{ color: '#ea580c', background: '#ffedd5', padding: '6px', borderRadius: '6px', fontSize: '18px' }}>pending_actions</span>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(pendingOpex)}
              </div>
              <span style={{ fontSize: '12px', color: '#ea580c' }}>Requires manager review approval</span>
            </div>
          </div>

          {/* Departmental breakdown donut and monthly trend (Side-by-side Bento Grid elements) */}
          <div className="bento-grid" style={{ marginBottom: '24px' }}>
            <div className="col-span-4 content-card" style={{ padding: '20px' }}>
              <h3 className="content-card-title" style={{ marginBottom: '16px' }}>Cost by Department</h3>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'conic-gradient(#005dac 0% 45%, #ea580c 45% 75%, #94a3b8 75% 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '84px', height: '84px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px' }}>
                    100%
                  </div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#005dac', borderRadius: '50%' }}></div>
                      <span>R&D / Infra</span>
                    </div>
                    <span>45%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#ea580c', borderRadius: '50%' }}></div>
                      <span>Sales & Marketing</span>
                    </div>
                    <span>30%</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '8px', height: '8px', background: '#94a3b8', borderRadius: '50%' }}></div>
                      <span>Operations / G&A</span>
                    </div>
                    <span>25%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-8 content-card" style={{ padding: '20px' }}>
              <h3 className="content-card-title" style={{ marginBottom: '16px' }}>Monthly Expense Trend</h3>
              <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', position: 'relative', borderBottom: '1px solid #cbd5e1', paddingBottom: '10px' }}>
                {/* Simulated background chart bar vectors */}
                <div style={{ width: '12%', background: 'rgba(0, 93, 172, 0.2)', height: '40%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ width: '12%', background: 'rgba(0, 93, 172, 0.3)', height: '60%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ width: '12%', background: 'rgba(0, 93, 172, 0.4)', height: '50%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ width: '12%', background: 'rgba(0, 93, 172, 0.6)', height: '80%', borderRadius: '2px 2px 0 0' }}></div>
                <div style={{ width: '12%', background: 'rgba(0, 93, 172, 0.8)', height: '95%', borderRadius: '2px 2px 0 0' }}></div>
                <span style={{ position: 'absolute', bottom: '-24px', fontSize: '11px', color: '#94a3b8' }}>Quarterly OpEx Growth Trend</span>
              </div>
            </div>
          </div>

          {/* Filtering bar */}
          <div className="content-card" style={{ padding: '16px', marginBottom: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Expense Category</span>
              <select
                className="form-select"
                style={{ width: '180px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="All">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Disbursement Status</span>
              <select
                className="form-select"
                style={{ width: '160px', padding: '6px 10px', height: '34px', fontSize: '13px' }}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Cleared">Cleared</option>
                <option value="Approved">Approved</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </div>

          {/* Expenses Table list */}
          <div className="content-card">
            <div className="content-card-body" style={{ padding: 0, overflowX: 'auto' }}>
              {loading ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading operational expenses ledger...</div>
              ) : filteredExpenses.length === 0 ? (
                <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No expense claims found.</div>
              ) : (
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Expense ID</th>
                      <th>Merchant / Vendor</th>
                      <th>Date</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th style={{ textAlign: 'right' }}>Amount</th>
                      <th>Status</th>
                      <th style={{ textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredExpenses.map((e) => (
                      <tr key={e.id}>
                        <td style={{ fontWeight: 600, color: '#64748b', fontFamily: 'monospace' }}>{e.id}</td>
                        <td style={{ fontWeight: 600, color: '#0f172a' }}>{e.merchant}</td>
                        <td>{new Date(e.date).toLocaleDateString()}</td>
                        <td>
                          <span style={{ padding: '4px 8px', background: '#f1f5f9', borderRadius: '4px', fontSize: '11px', fontWeight: 600, color: '#475569' }}>
                            {e.category}
                          </span>
                        </td>
                        <td style={{ color: '#64748b', fontSize: '13px' }}>{e.description || 'No description provided'}</td>
                        <td style={{ fontWeight: 700, textAlign: 'right' }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(e.amount)}
                        </td>
                        <td>
                          <span className="badge" style={{
                            background: e.status === 'Cleared' || e.status === 'Approved' ? '#d1fae5' : '#ffedd5',
                            color: e.status === 'Cleared' || e.status === 'Approved' ? '#065f46' : '#ea580c'
                          }}>
                            {e.status}
                          </span>
                        </td>
                        <td style={{ textAlign: 'right' }}>
                          {e.status === 'Pending' && (
                            <button
                              onClick={() => handleApproveExpense(e.id)}
                              className="btn btn-primary btn-sm"
                              style={{ padding: '4px 8px', fontSize: '12px', background: '#16a34a', borderColor: '#16a34a' }}
                            >
                              Approve
                            </button>
                          )}
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

      {/* Log Expense Modal Dialog */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          backdropFilter: 'blur(4px)'
        }}>
          <div className="content-card" style={{ width: '500px', maxWidth: '95%', margin: 0 }}>
            <div className="content-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 className="content-card-title" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="material-symbols-outlined" style={{ color: '#005dac' }}>receipt</span>
                Log Operational Expense
              </h3>
              <button onClick={() => { setShowModal(false); setError(null); }} className="btn btn-secondary btn-sm" style={{ padding: '4px', minWidth: 'auto' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
              </button>
            </div>

            <form onSubmit={handleCreateExpense} style={{ padding: '24px' }}>
              {error && (
                <div style={{ background: '#fee2e2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '10px 14px', borderRadius: '6px', marginBottom: '16px', fontSize: '13px' }}>
                  {error}
                </div>
              )}

              <div className="form-grid" style={{ gap: '16px', marginBottom: '20px' }}>
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Merchant / Vendor Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="E.g., Amazon Web Services..."
                    value={newExpense.merchant}
                    onChange={(e) => setNewExpense({ ...newExpense, merchant: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Expense Amount ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0.01"
                    className="form-input"
                    placeholder="Enter cost..."
                    value={newExpense.amount}
                    onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Expense Category</label>
                  <select
                    className="form-select"
                    value={newExpense.category}
                    onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
                    value={newExpense.status}
                    onChange={(e) => setNewExpense({ ...newExpense, status: e.target.value })}
                  >
                    <option value="Pending">Pending Review</option>
                    <option value="Approved">Cleared / Paid</option>
                  </select>
                </div>

                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label className="form-label">Short Description / Allocation Details</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Explain resource utilization..."
                    value={newExpense.description}
                    onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                <button type="button" onClick={() => { setShowModal(false); setError(null); }} className="btn btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Log Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
