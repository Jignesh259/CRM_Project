import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const OrganizationalRolesControl: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // New Role Form State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newRoleName, setNewRoleName] = useState('');
  const [newRoleDescription, setNewRoleDescription] = useState('');

  const navigate = useNavigate();

  const loadRoles = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getRoles();
      if (res.success) {
        setRoles(res.data || []);
      } else {
        setError('Failed to fetch organizational roles.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while loading roles.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoles();
  }, []);

  const handleCreateRole = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoleName.trim() || !newRoleDescription.trim()) return;

    try {
      const dataStr = localStorage.getItem('cs_roles') || '[]';
      const list = JSON.parse(dataStr);
      const newRole = {
        id: `role-${Math.floor(100 + Math.random() * 900)}`,
        name: newRoleName,
        description: newRoleDescription,
        usersCount: 0,
        modules: {
          CRM: 'None',
          Inventory: 'None',
          Finance: 'None',
          Settings: 'None'
        }
      };
      list.push(newRole);
      localStorage.setItem('cs_roles', JSON.stringify(list));
      setRoles(list);
      
      // Reset form
      setNewRoleName('');
      setNewRoleDescription('');
      setShowCreateModal(false);
    } catch (err) {
      console.error('Failed to create role', err);
    }
  };

  const getRoleIcon = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'administrator':
      case 'admin':
        return 'shield_person';
      case 'manager':
        return 'manage_accounts';
      case 'sales agent':
      case 'sales rep':
        return 'point_of_sale';
      case 'warehouse staff':
      case 'inventory clerk':
        return 'inventory_2';
      default:
        return 'security';
    }
  };

  const getRoleIconBg = (roleName: string) => {
    switch (roleName.toLowerCase()) {
      case 'administrator':
      case 'admin':
        return { bg: '#ffdad6', color: '#ba1a1a' }; // error-container style
      case 'manager':
        return { bg: '#d4e3ff', color: '#005dac' }; // primary-fixed style
      case 'sales agent':
      case 'sales rep':
        return { bg: '#ffdbc7', color: '#944700' }; // tertiary-fixed style
      default:
        return { bg: '#ffd6fe', color: '#9a25ae' }; // secondary-fixed style
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Organizational Roles Control</h1>
          <div className="topbar-actions">
            <button onClick={() => setShowCreateModal(true)} className="btn btn-primary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              Create Custom Role
            </button>
          </div>
        </header>

        <div className="page-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a', letterSpacing: '-0.02em' }}>User Roles & Access Levels</h2>
              <p style={{ fontSize: '15px', color: '#64748b', margin: 0, maxWidth: '600px' }}>
                Manage organizational access levels, view configured permissions, and configure boundaries for security credentials.
              </p>
            </div>
            <button onClick={() => setShowCreateModal(true)} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
              Create New Role
            </button>
          </div>

          {error && (
            <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>
              <div style={{ fontSize: '16px', fontWeight: 500 }}>Loading system roles...</div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              {roles.map((role) => {
                const iconName = getRoleIcon(role.name);
                const colors = getRoleIconBg(role.name);
                
                // Calculate permissions count (number of modules configured with access other than 'None')
                const configuredPermissionsCount = Object.values(role.modules || {}).filter(val => val !== 'None').length;

                return (
                  <div key={role.id} className="content-card card-hover-effect" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '8px',
                        backgroundColor: colors.bg,
                        color: colors.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>{iconName}</span>
                      </div>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '4px',
                        backgroundColor: role.id === '1' ? '#f1f5f9' : '#e0e7ff',
                        color: role.id === '1' ? '#475569' : '#4f46e5'
                      }}>
                        {role.id === '1' ? 'System' : 'Custom'}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>{role.name}</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: '0 0 20px', flexGrow: 1, lineHeight: '1.5' }}>
                      {role.description}
                    </p>

                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      marginBottom: '20px',
                      fontSize: '13px'
                    }}>
                      <div style={{ fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Module Permissions</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {Object.entries(role.modules || {}).map(([mod, perm]: any) => (
                          <span key={mod} style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: 500,
                            backgroundColor: perm === 'None' ? '#f1f5f9' : '#dbeafe',
                            color: perm === 'None' ? '#94a3b8' : '#1d4ed8',
                            textDecoration: perm === 'None' ? 'line-through' : 'none'
                          }}>
                            {mod}: {perm}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '16px',
                      marginTop: 'auto'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#64748b' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>group</span>
                        <span>{role.usersCount} Assigned</span>
                      </div>
                      
                      <button
                        onClick={() => navigate(`/admin/permissions?role=${role.id}`)}
                        className="btn btn-secondary btn-sm"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '12px',
                          color: '#005dac',
                          borderColor: '#005dac',
                          padding: '4px 12px'
                        }}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>key</span>
                        Permissions ({configuredPermissionsCount})
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Simple Create Role Dialog (simulated inside a simple card or overlay) */}
          {showCreateModal && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(4px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px'
            }}>
              <div className="content-card" style={{ maxWidth: '480px', width: '100%', padding: 0 }}>
                <div style={{ padding: '20px 24px', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Create Custom Role</h3>
                  <button onClick={() => setShowCreateModal(false)} style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </div>
                <form onSubmit={handleCreateRole}>
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Role Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Regional Manager"
                        value={newRoleName}
                        onChange={(e) => setNewRoleName(e.target.value)}
                        style={{ width: '100%', height: '38px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                        required
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '6px' }}>Description</label>
                      <textarea
                        placeholder="Describe the access boundaries and responsibilities..."
                        value={newRoleDescription}
                        onChange={(e) => setNewRoleDescription(e.target.value)}
                        style={{ width: '100%', height: '80px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', resize: 'none', fontFamily: 'inherit' }}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ padding: '16px 24px', borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
                    <button type="button" onClick={() => setShowCreateModal(false)} className="btn btn-secondary">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Create Role
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
