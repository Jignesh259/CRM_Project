import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const VendorDirectory: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [vendors, setVendors] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const statusFilter = 'All';
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loadVendors = async () => {
    setLoading(true);
    try {
      const res = await api.getVendors({
        search: search || undefined,
        category: categoryFilter === 'All' ? undefined : categoryFilter,
        status: statusFilter === 'All' ? undefined : statusFilter,
      });
      setVendors(res.data || []);
    } catch (err) {
      console.error('Failed to load vendors', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVendors();
  }, [search, categoryFilter, statusFilter]);

  const getPerformanceBadgeColor = (score: number) => {
    if (score >= 90) return { bg: '#d1fae5', text: '#065f46' };
    if (score >= 80) return { bg: '#fef3c7', text: '#b45309' };
    return { bg: '#fee2e2', text: '#991b1b' };
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Vendor Directory Board</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Search vendors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to="/vendors/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Onboard Vendor
            </Link>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Supply Partners</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Manage procurement channels, contracts, and vendor metrics.</p>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {['All', 'Networking', 'Electronics', 'Audio'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                style={{
                  padding: '6px 16px',
                  borderRadius: '20px',
                  border: '1px solid',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderColor: categoryFilter === cat ? '#3b82f6' : '#e2e8f0',
                  background: categoryFilter === cat ? '#dbeafe' : 'white',
                  color: categoryFilter === cat ? '#1d4ed8' : '#64748b',
                  transition: 'all 0.2s',
                }}
              >
                {cat === 'All' ? 'All Categories' : cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>Loading vendors directory...</div>
          ) : vendors.length === 0 ? (
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>No vendors registered.</div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
              {vendors.map((v) => {
                const badge = getPerformanceBadgeColor(v.performanceScore);
                return (
                  <div key={v.id} className="content-card card-hover-effect" style={{ padding: '20px', cursor: 'pointer' }} onClick={() => navigate(`/vendors/${v.id}`)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div className="avatar" style={{ background: '#3b82f6', width: '40px', height: '40px', fontSize: '15px' }}>
                          {v.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '16px', color: '#0f172a' }}>{v.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748b' }}>{v.category}</div>
                        </div>
                      </div>
                      <span className="badge" style={{ background: badge.bg, color: badge.text }}>
                        {v.performanceScore}% Score
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '12px', fontSize: '13px' }}>
                      <div>
                        <div style={{ color: '#94a3b8' }}>Contact Person</div>
                        <div style={{ fontWeight: 600, color: '#475569' }}>{v.contactPerson}</div>
                      </div>
                      <div>
                        <div style={{ color: '#94a3b8' }}>Terms</div>
                        <div style={{ fontWeight: 600, color: '#475569' }}>{v.paymentTerms}</div>
                      </div>
                      <div>
                        <div style={{ color: '#94a3b8' }}>YTD Spent</div>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(v.ytdSpend)}
                        </div>
                      </div>
                      <div>
                        <div style={{ color: '#94a3b8' }}>Active POs</div>
                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{v.activePOs} POs</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }} onClick={(e) => e.stopPropagation()}>
                      <Link to={`/vendors/${v.id}`} className="btn btn-secondary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>
                        View Profile
                      </Link>
                      <a href={`mailto:${v.email}`} className="btn btn-secondary btn-sm" style={{ flex: 1, justifyContent: 'center', borderColor: '#3b82f6', color: '#3b82f6' }}>
                        Contact
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
