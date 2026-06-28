import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Sidebar.css';

interface NavItem {
  icon: string;
  label: string;
  path: string;
}

interface NavGroup {
  title?: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    title: 'Main',
    items: [
      { icon: 'dashboard', label: 'Dashboard', path: '/dashboard' },
      { icon: 'analytics', label: 'Analytics', path: '/analytics' },
      { icon: 'feed', label: 'Activity Feed', path: '/activity' },
    ],
  },
  {
    title: 'CRM',
    items: [
      { icon: 'filter_list', label: 'Leads', path: '/leads' },
      { icon: 'group', label: 'Customers', path: '/customers' },
      { icon: 'view_kanban', label: 'Pipeline', path: '/leads/kanban' },
    ],
  },
  {
    title: 'Inventory',
    items: [
      { icon: 'monitoring', label: 'Stock Overview', path: '/inventory/dashboard' },
      { icon: 'inventory_2', label: 'Products', path: '/inventory' },
      { icon: 'move_to_inbox', label: 'Receive (Stock In)', path: '/inventory/stock-in' },
      { icon: 'outbox', label: 'Dispatch (Stock Out)', path: '/inventory/stock-out' },
      { icon: 'swap_horiz', label: 'Stock Transfer', path: '/inventory/stock-transfer' },
      { icon: 'receipt_long', label: 'Stock Ledger', path: '/inventory/transaction-ledger' },
      { icon: 'category', label: 'Categories', path: '/inventory/categories' },
      { icon: 'branding_watermark', label: 'Brands', path: '/inventory/brands' },
    ],
  },
  {
    title: 'Vendors & Buying',
    items: [
      { icon: 'storefront', label: 'Vendor Directory', path: '/vendors' },
      { icon: 'payments', label: 'Vendor Payments', path: '/vendors/payments' },
      { icon: 'shopping_bag', label: 'Purchase Orders', path: '/purchase-orders' },
    ],
  },
  {
    title: 'Sales & Logistics',
    items: [
      { icon: 'request_quote', label: 'Customer Quotes', path: '/quotes' },
      { icon: 'description', label: 'Invoices', path: '/invoices' },
      { icon: 'local_shipping', label: 'Logistics Tracking', path: '/logistics' },
    ],
  },
  {
    title: 'Finance & Accounts',
    items: [
      { icon: 'account_balance_wallet', label: 'Payments Ledger', path: '/finance/payments' },
      { icon: 'account_balance', label: 'Settlements', path: '/finance/settlements' },
      { icon: 'receipt', label: 'Expense Manager', path: '/finance/expenses' },
    ],
  },
  {
    title: 'Reports & Analytics',
    items: [
      { icon: 'bar_chart', label: 'Product Performance', path: '/reports/products' },
      { icon: 'trending_up', label: 'Sales Analytics', path: '/reports/sales' },
      { icon: 'group_work', label: 'Customer Retention', path: '/reports/customers' },
      { icon: 'analytics', label: 'Stock Optimization', path: '/reports/inventory' },
    ],
  },
  {
    title: 'Administration',
    items: [
      { icon: 'manage_accounts', label: 'User Directory', path: '/admin/users' },
      { icon: 'admin_panel_settings', label: 'Roles Control', path: '/admin/roles' },
      { icon: 'vpn_key', label: 'Access Permissions', path: '/admin/permissions' },
      { icon: 'security', label: 'Security Logs', path: '/admin/security' },
    ],
  },
  {
    title: 'Communication',
    items: [
      { icon: 'campaign', label: 'Announcements', path: '/announcements' },
      { icon: 'notifications', label: 'Notifications', path: '/notifications' },
    ],
  },
  {
    title: 'Settings',
    items: [
      { icon: 'person', label: 'Profile Settings', path: '/settings/profile' },
      { icon: 'domain', label: 'Org Branding', path: '/settings/organization' },
      { icon: 'mail', label: 'Email & Comm', path: '/settings/email' },
      { icon: 'tune', label: 'Core Config', path: '/settings/system' },
    ],
  },
];

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ collapsed = false, onToggle }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}>
      {/* ── Brand ── */}
      <div className="sidebar-brand">
        <div className="sidebar-brand-icon">
          <span className="material-symbols-outlined">contacts</span>
        </div>
        {!collapsed && (
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-name">CommSync</span>
            <span className="sidebar-brand-sub">Enterprise Suite</span>
          </div>
        )}
        <button className="sidebar-toggle-btn" onClick={onToggle} title="Toggle sidebar">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
            {collapsed ? 'chevron_right' : 'chevron_left'}
          </span>
        </button>
      </div>

      {/* ── Nav groups ── */}
      <nav className="sidebar-nav">
        {(() => {
          const roles = user?.roles ? user.roles.map(r => r.toLowerCase()) : [];
          const isAdmin = roles.includes('admin');
          const isManager = roles.includes('manager');

          return NAV_GROUPS.map((group) => {
            if (group.title === 'Administration') {
              if (!isAdmin) return null;
            }
            if (group.title === 'Finance & Accounts' || group.title === 'Reports & Analytics') {
              if (!isAdmin && !isManager) return null;
            }
            if (group.title === 'Settings') {
              const allowedItems = group.items.filter(item => {
                if (item.path === '/settings/profile') return true;
                return isAdmin;
              });
              if (allowedItems.length === 0) return null;
              return { ...group, items: allowedItems };
            }
            return group;
          })
          .filter((group): group is NavGroup => group !== null)
          .map((group) => (
            <div key={group.title} className="sidebar-nav-group">
              {!collapsed && group.title && (
                <p className="sidebar-nav-group-title">{group.title}</p>
              )}
              {group.items.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-nav-item ${isActive ? 'sidebar-nav-item--active' : ''}`
                  }
                  title={collapsed ? item.label : undefined}
                >
                  <span className="material-symbols-outlined sidebar-nav-icon">{item.icon}</span>
                  {!collapsed && <span className="sidebar-nav-label">{item.label}</span>}
                </NavLink>
              ))}
            </div>
          ));
        })()}
      </nav>

      {/* ── Bottom: user profile ── */}
      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-avatar">
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>
              {user?.full_name
                ? user.full_name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()
                : 'U'}
            </span>
          </div>
          {!collapsed && (
            <div className="sidebar-user-info">
              <span className="sidebar-user-name" title={user?.full_name || 'Guest'}>
                {user?.full_name || 'Guest'}
              </span>
              <span className="sidebar-user-role">
                {user?.roles && user.roles.length > 0
                  ? user.roles[0].charAt(0).toUpperCase() + user.roles[0].slice(1)
                  : 'Standard User'}
              </span>
            </div>
          )}
        </div>
        <button
          className="sidebar-logout-btn"
          onClick={handleLogout}
          title="Logout"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>logout</span>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};
