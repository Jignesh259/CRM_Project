import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const UserManagementDirectory: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getUsers();
      if (res.success) {
        setUsers(res.data || []);
      } else {
        setError('Failed to fetch users.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while loading users.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleToggleStatus = async (userId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'Active' ? 'Suspended' : 'Active';
    try {
      const res = await api.updateUser(userId, { status: newStatus });
      if (res.success) {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));
      } else {
        setError('Failed to update user status.');
      }
    } catch (err: any) {
      console.error('Failed to update status', err);
      setError(err.message || 'Failed to update user status.');
    }
  };

  // Filter users based on query
  const filteredUsers = users.filter(u => {
    const q = searchQuery.toLowerCase();
    return (
      u.name?.toLowerCase().includes(q) ||
      u.email?.toLowerCase().includes(q) ||
      u.role?.toLowerCase().includes(q) ||
      u.department?.toLowerCase().includes(q)
    );
  });

  const getRoleBadgeStyle = (role: string) => {
    switch (role?.toLowerCase()) {
      case 'administrator':
      case 'admin':
        return { backgroundColor: '#ffd6fe', color: '#7b008f' }; // secondary-fixed like style
      case 'manager':
        return { backgroundColor: '#d4e3ff', color: '#004786' }; // primary-fixed style
      case 'sales agent':
      case 'editor':
        return { backgroundColor: '#ffdbc7', color: '#733600' }; // tertiary-fixed style
      default:
        return { backgroundColor: '#e2e8f0', color: '#475569' };
    }
  };

  const getStatusBadgeStyle = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active':
        return { backgroundColor: '#d1fae5', color: '#065f46' };
      case 'suspended':
        return { backgroundColor: '#ffdad6', color: '#93000a' };
      default:
        return { backgroundColor: '#f1f5f9', color: '#475569' };
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">User Management Directory</h1>
          <div className="topbar-actions">
            <div className="topbar-search">
              <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
              <input
                type="text"
                placeholder="Global search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Link to="/admin/users/new" className="btn btn-primary btn-sm">
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>person_add</span>
              Onboard Team Member
            </Link>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a', letterSpacing: '-0.02em' }}>User Directory</h2>
              <p style={{ fontSize: '15px', color: '#64748b', margin: 0, maxWidth: '600px' }}>
                Oversee team members, assign organizational roles, and monitor system access levels across your workspace.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div className="topbar-search" style={{ margin: 0, width: '280px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#94a3b8' }}>search</span>
                <input
                  type="text"
                  placeholder="Search users by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button onClick={() => navigate('/admin/users/new')} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>person_add</span>
                Add User
              </button>
            </div>
          </div>

          {error && (
            <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}

          <div className="content-card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
            <div style={{ height: '4px', background: 'linear-gradient(90deg, rgba(0,95,175,0.1) 0%, rgba(154,37,174,0.1) 100%)' }}></div>
            {loading ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>Loading active team users...</div>
              </div>
            ) : filteredUsers.length === 0 ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
                <div style={{ fontSize: '16px', fontWeight: 500 }}>No users found matching your search criteria.</div>
              </div>
            ) : (
              <div style={{ overflowX: 'auto' }}>
                <table className="invoice-table" style={{ width: '100%', borderCollapse: 'collapse', margin: 0 }}>
                  <thead>
                    <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Member Details</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Email Contact</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Department</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Assigned Role</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Account Status</th>
                      <th style={{ textAlign: 'left', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Last Session</th>
                      <th style={{ textAlign: 'right', padding: '14px 20px', fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => {
                      const initials = user.name
                        ? user.name.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase()
                        : 'U';
                      const roleBadge = getRoleBadgeStyle(user.role);
                      const statusBadge = getStatusBadgeStyle(user.status);

                      return (
                        <tr key={user.id} style={{ borderBottom: '1px solid #f1f5f9' }} className="table-row-hover">
                          <td style={{ padding: '12px 20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div className="avatar" style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '50%',
                                backgroundColor: '#005dac',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 700,
                                fontSize: '14px'
                              }}>
                                {initials}
                              </div>
                              <div>
                                <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '14px' }}>{user.name}</div>
                                <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>ID: {user.id}</div>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '12px 20px', color: '#475569', fontSize: '14px' }}>
                            {user.email}
                          </td>
                          <td style={{ padding: '12px 20px', color: '#475569', fontSize: '14px' }}>
                            {user.department || 'General'}
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: '11px',
                              fontWeight: 600,
                              ...roleBadge
                            }}>
                              {user.role}
                            </span>
                          </td>
                          <td style={{ padding: '12px 20px' }}>
                            <span style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: '11px',
                              fontWeight: 500,
                              ...statusBadge
                            }}>
                              <span style={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                backgroundColor: user.status === 'Active' ? '#10b981' : '#ef4444'
                              }}></span>
                              {user.status}
                            </span>
                          </td>
                          <td style={{ padding: '12px 20px', color: '#64748b', fontSize: '13px' }}>
                            {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never logged in'}
                          </td>
                          <td style={{ padding: '12px 20px', textAlign: 'right' }}>
                            <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                              <button
                                onClick={() => handleToggleStatus(user.id, user.status)}
                                className={`btn btn-sm ${user.status === 'Active' ? 'btn-secondary' : 'btn-primary'}`}
                                style={{
                                  fontSize: '12px',
                                  padding: '4px 10px',
                                  height: 'auto',
                                  borderColor: user.status === 'Active' ? '#ef4444' : '#10b981',
                                  color: user.status === 'Active' ? '#ef4444' : '#10b981',
                                  backgroundColor: 'transparent'
                                }}
                              >
                                {user.status === 'Active' ? 'Suspend' : 'Activate'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'between',
              padding: '16px 20px',
              borderTop: '1px solid #e2e8f0',
              backgroundColor: '#f8fafc',
              fontSize: '13px',
              color: '#64748b'
            }}>
              <div>
                Showing 1 to {filteredUsers.length} of {users.length} members
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <button className="btn btn-secondary btn-sm" disabled style={{ padding: '4px 8px', minWidth: 'auto', opacity: 0.5 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_left</span>
                </button>
                <button className="btn btn-secondary btn-sm" disabled style={{ padding: '4px 8px', minWidth: 'auto', opacity: 0.5 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chevron_right</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
