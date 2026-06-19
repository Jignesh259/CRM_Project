import React from 'react';
import '../style/Dashboard.css';

const OrganizationalRolesControl: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<nav className="hidden md:flex flex-col bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] shadow-md z-50 py-lg">
<div className="px-lg mb-lg flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
<span className="material-symbols-outlined">corporate_fare</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant">Enterprise Suite</p>
</div>
</div>
<button className="mx-lg mb-lg bg-primary text-on-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
            New Entry
        </button>
<div className="flex flex-col gap-xs flex-1 overflow-y-auto font-body-md text-body-md">
{/* Nav Items */}
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">groups</span>
                CRM
            </a>
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
                Sales
            </a>
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">account_balance</span>
                Finance
            </a>
<a className="text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm rounded-lg" href="#">
<span className="material-symbols-outlined">assessment</span>
                Reports
            </a>
{/* Active State */}
<a className="bg-primary text-on-primary rounded-lg mx-2 my-1 cursor-pointer transition-all active:scale-95 flex items-center gap-md px-md py-sm" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] min-h-screen">
{/* TopNavBar Component */}
<header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 sticky z-40 border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop h-16 duration-200 ease-in-out">
<div className="flex items-center gap-lg">
{/* Search on left as requested */}
<div className="relative hidden sm:block w-64">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full bg-surface-container-high border-none rounded-full py-sm pl-xl pr-md font-body-md text-body-md focus:ring-2 focus:ring-primary outline-none transition-shadow" placeholder="Search..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">help</span>
</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant hover:text-primary">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-desktop bg-surface-container-low overflow-x-hidden">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface hidden md:block">User Roles</h2>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:hidden">User Roles</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage organizational access levels and permissions.</p>
</div>
<button className="bg-primary-container text-on-primary-container px-lg py-sm rounded-lg font-label-md text-label-md flex items-center gap-sm hover:bg-primary hover:text-on-primary transition-all shadow-sm hover:shadow-md h-10">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Create New Role
                </button>
</div>
{/* Bento Grid Layout for Roles */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
{/* Role Card 1: Admin */}
<div className="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col h-full relative">
<div className="p-lg flex flex-col flex-1">
<div className="flex justify-between items-start mb-md">
<div className="w-12 h-12 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">shield_person</span>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary p-1 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Administrator</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-lg">Full access to all system features, settings, and user management capabilities across the entire organizational environment.</p>
<div className="flex items-center justify-between pt-md border-t border-surface-variant mt-auto">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">group</span>
<span className="font-label-md text-label-md text-on-surface">4 Assigned</span>
</div>
<span className="bg-surface-container-highest px-2 py-1 rounded text-xs font-medium text-on-surface-variant">System</span>
</div>
</div>
</div>
{/* Role Card 2: Manager */}
<div className="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col h-full relative">
<div className="p-lg flex flex-col flex-1">
<div className="flex justify-between items-start mb-md">
<div className="w-12 h-12 rounded-lg bg-primary-fixed text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">manage_accounts</span>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary p-1 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Manager</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-lg">Can view reports, manage team members within their department, and approve standard operational workflows.</p>
<div className="flex items-center justify-between pt-md border-t border-surface-variant mt-auto">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">group</span>
<span className="font-label-md text-label-md text-on-surface">12 Assigned</span>
</div>
<span className="bg-surface-container-highest px-2 py-1 rounded text-xs font-medium text-on-surface-variant">Custom</span>
</div>
</div>
</div>
{/* Role Card 3: Sales Rep */}
<div className="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col h-full relative">
<div className="p-lg flex flex-col flex-1">
<div className="flex justify-between items-start mb-md">
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">point_of_sale</span>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary p-1 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Sales Rep</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-lg">Access to CRM leads, opportunities, client communications, and personal sales performance dashboards.</p>
<div className="flex items-center justify-between pt-md border-t border-surface-variant mt-auto">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">group</span>
<span className="font-label-md text-label-md text-on-surface">45 Assigned</span>
</div>
<span className="bg-surface-container-highest px-2 py-1 rounded text-xs font-medium text-on-surface-variant">Custom</span>
</div>
</div>
</div>
{/* Role Card 4: Inventory Clerk */}
<div className="bg-surface rounded-xl border border-outline-variant shadow-sm hover:shadow-md transition-all group overflow-hidden flex flex-col h-full relative">
<div className="p-lg flex flex-col flex-1">
<div className="flex justify-between items-start mb-md">
<div className="w-12 h-12 rounded-lg bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">inventory_2</span>
</div>
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary p-1 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<h3 className="font-title-md text-title-md text-on-surface mb-xs">Inventory Clerk</h3>
<p className="font-body-md text-body-md text-on-surface-variant flex-1 mb-lg">Permissions limited to stock checking, receiving shipments, updating quantities, and basic product catalog viewing.</p>
<div className="flex items-center justify-between pt-md border-t border-surface-variant mt-auto">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">group</span>
<span className="font-label-md text-label-md text-on-surface">18 Assigned</span>
</div>
<span className="bg-surface-container-highest px-2 py-1 rounded text-xs font-medium text-on-surface-variant">Custom</span>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default OrganizationalRolesControl;
