import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar';
import { api } from '../../api/api';
import '../../components/Sidebar.css';
import '../../style/StitchDashboard.css';

interface ModulePermissions {
  view: boolean;
  edit: boolean;
  delete: boolean;
  export: boolean;
}

interface PermissionsState {
  CRM: ModulePermissions;
  Sales: ModulePermissions;
  Inventory: ModulePermissions;
  Finance: ModulePermissions;
}

export const GranularAccessPermissions: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [roles, setRoles] = useState<any[]>([]);
  const [selectedRoleId, setSelectedRoleId] = useState<string>('');
  const [selectedRole, setSelectedRole] = useState<any | null>(null);
  
  // Grid matrix state
  const [permissions, setPermissions] = useState<PermissionsState>({
    CRM: { view: false, edit: false, delete: false, export: false },
    Sales: { view: false, edit: false, delete: false, export: false },
    Inventory: { view: false, edit: false, delete: false, export: false },
    Finance: { view: false, edit: false, delete: false, export: false }
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Load all roles
  const loadRoles = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.getRoles();
      if (res.success && res.data) {
        setRoles(res.data);
        
        // Pick initial role from query params or fallback to the first role
        const paramId = searchParams.get('role');
        const initialRoleId = paramId || res.data[0]?.id || '';
        setSelectedRoleId(initialRoleId);
      } else {
        setError('Failed to fetch roles.');
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

  // Update URL and loaded role when selected role changes
  useEffect(() => {
    if (!selectedRoleId || roles.length === 0) return;
    
    const role = roles.find(r => r.id === selectedRoleId);
    if (role) {
      setSelectedRole(role);
      
      // Update query param
      setSearchParams({ role: selectedRoleId });

      // Initialize permissions matrix state
      // If the role already has a stored permissionsMatrix, use it.
      // Otherwise, map standard API modules (Manage, Edit, View, None) to checkboxes.
      if (role.permissionsMatrix) {
        setPermissions(role.permissionsMatrix);
      } else {
        const initialMatrix: PermissionsState = {
          CRM: mapApiValueToPermissions(role.modules?.CRM),
          Sales: mapApiValueToPermissions(role.modules?.CRM), // Sales maps to CRM in terms of baseline settings or defaults
          Inventory: mapApiValueToPermissions(role.modules?.Inventory),
          Finance: mapApiValueToPermissions(role.modules?.Finance),
        };
        setPermissions(initialMatrix);
      }
    }
  }, [selectedRoleId, roles]);

  const mapApiValueToPermissions = (apiValue: string): ModulePermissions => {
    switch (apiValue) {
      case 'Manage':
        return { view: true, edit: true, delete: true, export: true };
      case 'Edit':
        return { view: true, edit: true, delete: false, export: true };
      case 'View':
        return { view: true, edit: false, delete: false, export: false };
      case 'None':
      default:
        return { view: false, edit: false, delete: false, export: false };
    }
  };

  const mapPermissionsToApiValue = (perms: ModulePermissions): string => {
    if (perms.view && perms.edit && perms.delete && perms.export) {
      return 'Manage';
    }
    if (perms.view && perms.edit) {
      return 'Edit';
    }
    if (perms.view) {
      return 'View';
    }
    return 'None';
  };

  const handleCheckboxChange = (module: keyof PermissionsState, permission: keyof ModulePermissions) => {
    setPermissions(prev => {
      const updatedModule = { ...prev[module] };
      updatedModule[permission] = !updatedModule[permission];
      
      // Dependency logic: if Edit/Delete/Export is ticked, View must be ticked.
      if (permission !== 'view' && updatedModule[permission]) {
        updatedModule.view = true;
      }
      // Dependency logic: if View is unticked, Edit/Delete/Export must be unticked.
      if (permission === 'view' && !updatedModule.view) {
        updatedModule.edit = false;
        updatedModule.delete = false;
        updatedModule.export = false;
      }

      return {
        ...prev,
        [module]: updatedModule
      };
    });
  };

  const handleSave = async () => {
    if (!selectedRoleId || !selectedRole) return;

    setSaving(true);
    setError(null);
    setSuccessMessage(null);
    try {
      // Map checkbox state back to modules object
      const updatedModules = {
        CRM: mapPermissionsToApiValue(permissions.CRM),
        Inventory: mapPermissionsToApiValue(permissions.Inventory),
        Finance: mapPermissionsToApiValue(permissions.Finance),
        Settings: selectedRole.modules?.Settings || 'None'
      };

      const updatedRoleData = {
        ...selectedRole,
        modules: updatedModules,
        permissionsMatrix: permissions // Save checkboxes state for persistence
      };

      const res = await api.updateRole(selectedRoleId, updatedRoleData);
      if (res.success) {
        setSuccessMessage(`Permissions for role "${selectedRole.name}" updated successfully!`);
        // Refresh local roles cache
        setRoles(prev => prev.map(r => r.id === selectedRoleId ? res.data : r));
      } else {
        setError('Failed to update role permissions.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An error occurred while saving configuration.');
    } finally {
      setSaving(false);
    }
  };

  const handleDiscard = () => {
    if (selectedRole) {
      // Revert checkbox state
      if (selectedRole.permissionsMatrix) {
        setPermissions(selectedRole.permissionsMatrix);
      } else {
        const initialMatrix: PermissionsState = {
          CRM: mapApiValueToPermissions(selectedRole.modules?.CRM),
          Sales: mapApiValueToPermissions(selectedRole.modules?.CRM),
          Inventory: mapApiValueToPermissions(selectedRole.modules?.Inventory),
          Finance: mapApiValueToPermissions(selectedRole.modules?.Finance),
        };
        setPermissions(initialMatrix);
      }
      setSuccessMessage('Changes discarded.');
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="dashboard-main">
        <header className="topbar">
          <h1 className="topbar-title">Granular Access Permissions</h1>
          <div className="topbar-actions">
            <button onClick={() => navigate('/admin/roles')} className="btn btn-secondary btn-sm" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
              Back to Roles
            </button>
          </div>
        </header>

        <div className="page-content">
          {/* Breadcrumb Navigation & Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <nav style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#64748b', marginBottom: '8px' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => navigate('/admin/roles')}>Access & Roles</span>
                <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>chevron_right</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>{selectedRole?.name || 'Loading...'}</span>
              </nav>
              <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '0 0 8px', color: '#0f172a', letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: '12px' }}>
                Role Permissions
                {selectedRole && (
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#dbeafe',
                    color: '#1d4ed8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>shield</span>
                    {selectedRole.id === '1' ? 'Admin Role' : 'Standard Role'}
                  </span>
                )}
              </h2>
              <p style={{ fontSize: '15px', color: '#64748b', margin: 0, maxWidth: '640px', lineHeight: '1.5' }}>
                Define granular access capabilities for the <strong style={{ color: '#0f172a' }}>{selectedRole?.name}</strong> role across all enterprise modules.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={handleDiscard} className="btn btn-secondary" style={{ height: '40px' }}>
                Discard Changes
              </button>
              <button onClick={handleSave} disabled={saving} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '40px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>save</span>
                {saving ? 'Saving...' : 'Save Configuration'}
              </button>
            </div>
          </div>

          {/* Role selector dropdown */}
          <div className="content-card" style={{ padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#475569' }}>Select Role to Edit:</span>
            <select
              value={selectedRoleId}
              onChange={(e) => setSelectedRoleId(e.target.value)}
              style={{ padding: '8px 16px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none', background: 'white', fontSize: '14px', width: '240px' }}
            >
              {roles.map(r => (
                <option key={r.id} value={r.id}>{r.name}</option>
              ))}
            </select>
          </div>

          {successMessage && (
            <div style={{ padding: '16px', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #a7f3d0' }}>
              {successMessage}
            </div>
          )}

          {error && (
            <div style={{ padding: '16px', backgroundColor: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '20px', fontSize: '14px', border: '1px solid #fee2e2' }}>
              {error}
            </div>
          )}

          {/* Matrix Card */}
          <div className="content-card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '16px 24px', backgroundColor: '#f8fafc', borderBottom: '1px solid #cbd5e1', fontWeight: 700, fontSize: '12px', color: '#475569', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <div>Module / Subsystem</div>
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>visibility</span> View
              </div>
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>edit</span> Edit
              </div>
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span> Delete
              </div>
              <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span> Export
              </div>
            </div>

            {loading ? (
              <div style={{ padding: '60px', textAlign: 'center', color: '#64748b' }}>Loading permissions matrix...</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Row 1: CRM */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }} className="table-row-hover">
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>Customer Relationship (CRM)</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Access to client profiles, interaction history, and lead scoring.</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.CRM.view}
                    onChange={() => handleCheckboxChange('CRM', 'view')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.CRM.edit}
                    onChange={() => handleCheckboxChange('CRM', 'edit')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.CRM.delete}
                    onChange={() => handleCheckboxChange('CRM', 'delete')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.CRM.export}
                    onChange={() => handleCheckboxChange('CRM', 'export')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Row 2: Sales Pipeline */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }} className="table-row-hover">
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>Sales Pipeline & Deals</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Manage opportunities, quotes, and contract progression.</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Sales.view}
                    onChange={() => handleCheckboxChange('Sales', 'view')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Sales.edit}
                    onChange={() => handleCheckboxChange('Sales', 'edit')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Sales.delete}
                    onChange={() => handleCheckboxChange('Sales', 'delete')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Sales.export}
                    onChange={() => handleCheckboxChange('Sales', 'export')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Row 3: Inventory */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }} className="table-row-hover">
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>Inventory Management</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Stock levels, SKU data, and warehouse transfers.</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Inventory.view}
                    onChange={() => handleCheckboxChange('Inventory', 'view')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Inventory.edit}
                    onChange={() => handleCheckboxChange('Inventory', 'edit')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Inventory.delete}
                    onChange={() => handleCheckboxChange('Inventory', 'delete')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Inventory.export}
                    onChange={() => handleCheckboxChange('Inventory', 'export')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Row 4: Finance */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '20px 24px', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }} className="table-row-hover">
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px' }}>Financial Reporting</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Invoices, revenue recognition, and tax summaries.</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Finance.view}
                    onChange={() => handleCheckboxChange('Finance', 'view')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Finance.edit}
                    onChange={() => handleCheckboxChange('Finance', 'edit')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Finance.delete}
                    onChange={() => handleCheckboxChange('Finance', 'delete')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    checked={permissions.Finance.export}
                    onChange={() => handleCheckboxChange('Finance', 'export')}
                    style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Row 5: Locked System Settings */}
              <div style={{ display: 'grid', gridTemplateColumns: '2fr repeat(4, 1fr)', gap: '16px', padding: '20px 24px', backgroundColor: '#f1f5f9', opacity: 0.7, alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px', color: '#ef4444' }}>lock</span>
                    Core System Settings
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Global configurations, API integrations, and billing. Restricted to Admin.</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    disabled
                    checked={selectedRoleId === '1'}
                    style={{ width: '18px', height: '18px', cursor: 'not-allowed' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    disabled
                    checked={selectedRoleId === '1'}
                    style={{ width: '18px', height: '18px', cursor: 'not-allowed' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    disabled
                    checked={selectedRoleId === '1'}
                    style={{ width: '18px', height: '18px', cursor: 'not-allowed' }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <input
                    type="checkbox"
                    disabled
                    checked={selectedRoleId === '1'}
                    style={{ width: '18px', height: '18px', cursor: 'not-allowed' }}
                  />
                </div>
              </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
