import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';

export const ProductInventoryGrid: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [sortOrder, setSortOrder] = useState('name_asc'); // name_asc, name_desc, price_asc, price_desc, stock_asc, stock_desc
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [prodRes, catRes] = await Promise.all([
        api.getProducts({
          search: search || undefined,
          category: categoryFilter === 'All Categories' ? undefined : categoryFilter
        }),
        api.getCategories()
      ]);

      if (prodRes.success && prodRes.data) {
        let list = prodRes.data.products || [];
        // Apply client side sorting
        list = [...list].sort((a: any, b: any) => {
          if (sortOrder === 'name_asc') return a.name.localeCompare(b.name);
          if (sortOrder === 'name_desc') return b.name.localeCompare(a.name);
          if (sortOrder === 'price_asc') return a.retail - b.retail;
          if (sortOrder === 'price_desc') return b.retail - a.retail;
          if (sortOrder === 'stock_asc') return a.stock - b.stock;
          if (sortOrder === 'stock_desc') return b.stock - a.stock;
          return 0;
        });
        setProducts(list);
      }

      if (catRes.success && catRes.data) {
        setCategories(catRes.data);
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load inventory data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [search, categoryFilter, sortOrder]);

  const handleDelete = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await api.deleteProduct(id);
      loadData();
    } catch (err: any) {
      alert(err.message || 'Failed to delete product');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        {/* TopNavBar */}
        <header className="topbar">
          <h1 className="topbar-title">Inventory - Products</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input 
                type="text" 
                placeholder="Search inventory..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
              />
            </div>
            <Link to="/inventory/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
              Add Product
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="page-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header Section */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px', color: '#0f172a' }}>Product Inventory</h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>Manage and track your products across all warehouses.</p>
            </div>
            
            {/* Filters and Sorting */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#64748b' }}>filter_list</span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  style={{
                    padding: '8px 12px 8px 34px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: 'white',
                    color: '#334155',
                    fontSize: '14px',
                    fontWeight: 500,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="All Categories">All Categories</option>
                  {categories.map((cat: any) => (
                    <option key={cat.id} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ position: 'relative' }}>
                <span className="material-symbols-outlined" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#64748b' }}>sort</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  style={{
                    padding: '8px 12px 8px 34px',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    backgroundColor: 'white',
                    color: '#334155',
                    fontSize: '14px',
                    fontWeight: 500,
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="name_asc">Name: A to Z</option>
                  <option value="name_desc">Name: Z to A</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="stock_asc">Stock: Low to High</option>
                  <option value="stock_desc">Stock: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Grid View */}
          {loading ? (
            <div style={{ padding: '80px', textAlign: 'center', color: '#64748b' }}>Loading products...</div>
          ) : error ? (
            <div style={{ padding: '80px', textAlign: 'center', color: '#ef4444' }}>{error}</div>
          ) : products.length === 0 ? (
            <div style={{ padding: '80px', textAlign: 'center', color: '#64748b', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '48px', color: '#94a3b8', marginBottom: '12px' }}>inventory_2</span>
              <p style={{ margin: 0, fontWeight: 600, fontSize: '16px', color: '#475569' }}>No products found</p>
              <p style={{ margin: '4px 0 16px', fontSize: '14px', color: '#64748b' }}>Try adjusting your search filters or add a new product.</p>
              <Link to="/inventory/new" className="btn btn-primary" style={{ display: 'inline-flex', gap: '8px', alignItems: 'center' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
                Add Product
              </Link>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px', paddingBottom: '40px' }}>
              {products.map((p) => {
                const isLowStock = p.stock <= (p.lowStock || 10);
                return (
                  <div
                    key={p.id}
                    onClick={() => navigate(`/inventory/${p.id}`)}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                      cursor: 'pointer',
                      position: 'relative',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s ease-in-out',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.05)';
                      e.currentTarget.style.borderColor = '#3b82f6';
                      const actions = e.currentTarget.querySelector('.card-actions') as HTMLElement;
                      if (actions) actions.style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      const actions = e.currentTarget.querySelector('.card-actions') as HTMLElement;
                      if (actions) actions.style.opacity = '0';
                    }}
                  >
                    {/* Hover Actions */}
                    <div 
                      className="card-actions"
                      style={{
                        position: 'absolute',
                        top: '8px',
                        right: '8px',
                        display: 'flex',
                        gap: '6px',
                        opacity: 0,
                        transition: 'opacity 0.2s ease',
                        zIndex: 10
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Link 
                        to={`/inventory/${p.id}/edit`} 
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                          transition: 'color 0.2s'
                        }}
                        title="Edit"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                      </Link>
                      <button 
                        onClick={(e) => handleDelete(e, p.id)}
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          border: '1px solid #cbd5e1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#475569',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                          transition: 'color 0.2s',
                          cursor: 'pointer'
                        }}
                        title="Delete"
                        onMouseEnter={(e) => e.currentTarget.style.color = '#ef4444'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                      </button>
                    </div>

                    {/* Image Area */}
                    <div
                      style={{
                        width: '100%',
                        height: '160px',
                        backgroundColor: '#f1f5f9',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      {p.image ? (
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                        />
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: '#94a3b8' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>
                            {p.category === 'Furniture' ? 'chair' : p.category === 'Audio' ? 'headset' : 'inventory_2'}
                          </span>
                          <span style={{ fontSize: '12px', fontWeight: 500 }}>No Image</span>
                        </div>
                      )}
                      <div 
                        style={{
                          position: 'absolute',
                          bottom: '8px',
                          left: '8px',
                          padding: '3px 8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.85)',
                          backdropFilter: 'blur(4px)',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          fontWeight: 500,
                          color: '#475569',
                          border: '1px solid rgba(0,0,0,0.05)'
                        }}
                      >
                        {p.sku}
                      </div>
                    </div>

                    {/* Meta info */}
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: '4px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                        <span 
                          style={{
                            padding: '2px 8px',
                            borderRadius: '12px',
                            backgroundColor: '#eff6ff',
                            color: '#1d4ed8',
                            fontSize: '10px',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                          }}
                        >
                          {p.category}
                        </span>
                        <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(p.retail)}
                        </span>
                      </div>

                      <h3 
                        style={{
                          fontSize: '15px',
                          fontWeight: 600,
                          color: '#1e293b',
                          margin: '4px 0 0',
                          lineHeight: '1.4',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          height: '42px'
                        }}
                      >
                        {p.name}
                      </h3>

                      {/* Stock Level Footer */}
                      <div 
                        style={{
                          marginTop: 'auto',
                          paddingTop: '10px',
                          borderTop: '1px solid #f1f5f9',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: isLowStock ? '#ef4444' : '#64748b' }}>
                          <span className="material-symbols-outlined" style={{ fontSize: '16px', color: isLowStock ? '#ef4444' : '#3b82f6' }}>
                            {isLowStock ? 'warning' : 'inventory_2'}
                          </span>
                          <span style={{ fontSize: '13px', fontWeight: isLowStock ? 600 : 400 }}>
                            {isLowStock ? `Low Stock: ${p.stock}` : `In Stock: ${p.stock}`}
                          </span>
                        </div>
                        <span 
                          style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: isLowStock ? '#ef4444' : '#10b981',
                            boxShadow: isLowStock ? '0 0 8px #ef4444' : 'none'
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
