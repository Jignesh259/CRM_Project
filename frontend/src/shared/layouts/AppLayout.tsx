import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/app-shell.css';

type AppLayoutProps = {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
};

const navItems = [
  { to: '/dashboard', label: 'Overview' },
  { to: '/analytics', label: 'Analytics' },
  { to: '/activity', label: 'Activity Feed' },
  { to: '/module/crm', label: 'CRM' },
  { to: '/module/sales', label: 'Sales' },
  { to: '/module/inventory', label: 'Inventory' },
  { to: '/module/finance', label: 'Finance' },
  { to: '/module/settings', label: 'Settings' },
];

function AppLayout({ title, subtitle, actions, children }: AppLayoutProps) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div>
          <div className="brand-badge">CS</div>
          <div className="brand-copy">
            <h1>CommSync</h1>
            <p>Customer CRM and ERP workspace</p>
          </div>
        </div>
        <nav className="nav-group">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="sidebar-card">
          <h3>Next step</h3>
          <p>Connect a real database and replace the mock repositories when you are ready for persistence.</p>
          <NavLink to="/module/settings">Open settings</NavLink>
        </div>
      </aside>
      <main className="content-shell">
        <header className="topbar">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="topbar-actions">{actions}</div>
        </header>
        {children}
      </main>
    </div>
  );
}

export default AppLayout;
