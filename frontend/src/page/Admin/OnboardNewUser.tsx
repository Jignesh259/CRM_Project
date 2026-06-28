import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

export const OnboardNewUser: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  
  // Permissions states
  const [crmAccess, setCrmAccess] = useState(true);
  const [inventoryAccess, setInventoryAccess] = useState(false);
  const [financeAccess, setFinanceAccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !role || !department.trim()) {
      setError('Please fill in all required fields (Name, Email, Department, and Role).');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await api.createUser({
        name,
        email,
        phone,
        role,
        department,
        password: password || undefined,
        permissions: {
          crm: crmAccess,
          inventory: inventoryAccess,
          finance: financeAccess
        }
      });
      if (res.success) {
        // Successfully created user
        navigate('/admin/users');
      } else {
        setError('Failed to create user. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while creating the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Onboard New Team Member</h1>
          <div className="topbar-actions">
            <button onClick={() => navigate('/admin/users')} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Back to Directory
            </button>
          </div>
        </header>

        <div className="page-content" style={{ display: 'flex', justifyContent: 'center', padding: '32px 16px' }}>
          <div className="content-card" style={{ maxWidth: '640px', width: '100%', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '24px 32px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(0, 93, 172, 0.1)',
                color: '#005dac',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span className="material-symbols-outlined">person_add</span>
              </div>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#0f172a' }}>Create New User</h2>
                <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0' }}>Add a new member to the CommSync workspace.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {error && (
                  <div style={{ padding: '12px 16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', fontSize: '14px', border: '1px solid #fee2e2' }}>
                    {error}
                  </div>
                )}

                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Email Address *</label>
                    <input
                      type="email"
                      placeholder="jane@company.com"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Department *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sales, Product Management"
                      className="form-control"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>System Role *</label>
                    <select
                      className="form-control"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', background: 'white' }}
                      required
                    >
                      <option value="" disabled>Select a role...</option>
                      <option value="Viewer">Viewer</option>
                      <option value="Editor">Editor</option>
                      <option value="Manager">Manager</option>
                      <option value="Administrator">Administrator</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>
                      Password <span style={{ color: '#64748b', fontWeight: 400 }}>(Optional - defaults to Password123!)</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter initial temporary password or leave blank"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: '100%', height: '40px', padding: '8px 12px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }}
                    />
                  </div>
                </div>

                <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '8px 0' }}></div>

                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 6px' }}>Initial Permissions</h3>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px' }}>Configure baseline module access for this user. These can be adjusted later in settings.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }} className="table-row-hover">
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>CRM Access</div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Allow access to client profiles and communications.</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={crmAccess}
                        onChange={(e) => setCrmAccess(e.target.checked)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }} className="table-row-hover">
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Inventory Management</div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>View and edit stock levels and catalogs.</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={inventoryAccess}
                        onChange={(e) => setInventoryAccess(e.target.checked)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </label>

                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s'
                    }} className="table-row-hover">
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>Financial Reports</div>
                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Read-only access to revenue and sales reports.</div>
                      </div>
                      <input
                        type="checkbox"
                        checked={financeAccess}
                        onChange={(e) => setFinanceAccess(e.target.checked)}
                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '16px 32px',
                borderTop: '1px solid #e2e8f0',
                backgroundColor: '#f8fafc',
                display: 'flex',
                justifyContent: 'flex-end',
                gap: '12px'
              }}>
                <button type="button" onClick={() => navigate('/admin/users')} className="btn btn-secondary" style={{ height: '40px' }}>
                  Cancel
                </button>
                <button type="submit" disabled={loading} className="btn btn-primary" style={{ height: '40px', minWidth: '120px' }}>
                  {loading ? 'Creating...' : 'Create User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
