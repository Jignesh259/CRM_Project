import React from 'react';
import '../style/Dashboard.css';

const GranularAccessPermissions: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md flex flex-col py-lg z-50">
<div className="px-lg mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" style={{"fontVariationSettings": "'FILL' 1"}}>dataset</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-inverse-on-surface">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant">Enterprise Suite</p>
</div>
</div>
<nav className="flex-1 overflow-y-auto px-sm">
<ul className="space-y-1">
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="groups">groups</span>
<span className="font-body-md text-body-md">CRM</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-body-md text-body-md">Sales</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-body-md text-body-md">Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-body-md text-body-md">Finance</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-inverse-on-surface hover:text-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
</li>
{/* Active Tab */}
<li>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-on-primary mx-2 my-1 cursor-pointer transition-all active:scale-95 shadow-sm" href="#">
<span className="material-symbols-outlined" data-icon="settings" style={{"fontVariationSettings": "'FILL' 1"}}>settings</span>
<span className="font-body-md text-body-md font-medium">Settings</span>
</a>
</li>
</ul>
</nav>
<div className="px-lg mt-auto pt-4">
<button className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-3 rounded-lg font-body-md text-body-md font-medium hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
                New Entry
            </button>
</div>
</aside>
 Main Content Canvas 
<div className="flex-1 flex flex-col ml-[280px] min-h-screen">
{/* TopNavBar Component */}
<header className="docked full-width top-0 sticky z-40 flex justify-between items-center px-margin-desktop h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm duration-200 ease-in-out">
<div className="flex items-center w-96 relative">
<span className="material-symbols-outlined absolute left-3 text-outline">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search setting or module..." type="text" />
</div>
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-all ml-2">
<span className="material-symbols-outlined text-[32px]" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-margin-desktop overflow-x-hidden">
{/* Context Header */}
<div className="flex items-end justify-between mb-8">
<div>
<nav className="flex text-on-surface-variant font-label-md text-label-md mb-2 items-center gap-1">
<a className="hover:text-primary transition-colors" href="#">Settings</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Access &amp; Roles</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface">Regional Manager</span>
</nav>
<h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold flex items-center gap-3">
                        Role Permissions
                        <span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed-variant font-label-md text-label-md rounded-md flex items-center gap-1 border border-primary-fixed-dim">
<span className="material-symbols-outlined text-[14px]">shield</span> Standard Role
                        </span>
</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-2xl">
                        Define granular access capabilities for the <strong className="text-on-surface font-medium">Regional Manager</strong> role across all enterprise modules. Changes are audited and take effect immediately upon saving.
                    </p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 rounded-lg border border-outline font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors">
                        Discard Changes
                    </button>
<button className="px-4 py-2 rounded-lg bg-primary text-on-primary font-body-md text-body-md flex items-center gap-2 hover:bg-primary/90 shadow-sm transition-colors">
<span className="material-symbols-outlined text-[20px]">save</span>
                        Save Configuration
                    </button>
</div>
</div>
{/* Matrix Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col relative">
{/* Table Header */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low border-b border-outline-variant sticky top-0 z-10">
<div className="col-span-4 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Module / Subsystem</div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">visibility</span> View
                    </div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">edit</span> Edit
                    </div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">delete</span> Delete
                    </div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[16px]">download</span> Export
                    </div>
</div>
{/* Matrix Body */}
<div className="flex flex-col divide-y divide-outline-variant/50">
{/* Row 1: CRM */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-surface-container-low/50 transition-colors items-center group">
<div className="col-span-4 flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Customer Relationship (CRM)</span>
<span className="font-body-md text-body-md text-on-surface-variant mt-1">Access to client profiles, interaction history, and lead scoring.</span>
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
</div>
{/* Row 2: Sales Pipeline */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-surface-container-low/50 transition-colors items-center group">
<div className="col-span-4 flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Sales Pipeline &amp; Deals</span>
<span className="font-body-md text-body-md text-on-surface-variant mt-1">Manage opportunities, quotes, and contract progression.</span>
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
</div>
{/* Row 3: Inventory */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-surface-container-low/50 transition-colors items-center group">
<div className="col-span-4 flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Inventory Management</span>
<span className="font-body-md text-body-md text-on-surface-variant mt-1">Stock levels, SKU data, and warehouse transfers.</span>
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 text-primary/50 bg-surface-container-highest cursor-not-allowed" disabled title="Not applicable for this module" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
</div>
{/* Row 4: Finance */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-surface-container-low/50 transition-colors items-center group">
<div className="col-span-4 flex flex-col">
<span className="font-title-md text-title-md text-on-surface">Financial Reporting</span>
<span className="font-body-md text-body-md text-on-surface-variant mt-1">Invoices, revenue recognition, and tax summaries.</span>
</div>
<div className="col-span-2 flex justify-center">
<input checked className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 text-primary/50 bg-surface-container-highest cursor-not-allowed" disabled type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-surface bg-surface cursor-pointer" type="checkbox" />
</div>
</div>
{/* Row 5: System Settings */}
<div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container-low/30 items-center opacity-75">
<div className="col-span-4 flex flex-col">
<span className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-error">lock</span> 
                                Core System Settings
                            </span>
<span className="font-body-md text-body-md text-on-surface-variant mt-1">Global configurations, API keys, and billing. Restricted.</span>
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 bg-surface-container-highest cursor-not-allowed" disabled type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 bg-surface-container-highest cursor-not-allowed" disabled type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 bg-surface-container-highest cursor-not-allowed" disabled type="checkbox" />
</div>
<div className="col-span-2 flex justify-center">
<input className="w-5 h-5 rounded border-outline-variant/50 bg-surface-container-highest cursor-not-allowed" disabled type="checkbox" />
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default GranularAccessPermissions;
