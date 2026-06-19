import React from 'react';
import '../style/Dashboard.css';

const VendorPaymentLedger: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-screen py-md px-lg bg-inverse-surface dark:bg-inverse-surface text-primary-fixed dark:text-primary-fixed-dim font-headline-md text-headline-md font-body-md text-body-md font-label-md text-label-md fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md shadow-md z-50">
<div className="mb-lg">
<h1 className="font-headline-md text-headline-md font-bold text-primary-fixed flex items-center gap-2">
<span className="material-symbols-outlined">sync</span>
                CommSync
            </h1>
<p className="font-body-md text-surface-variant/80 mt-1 pl-8">Enterprise ERP</p>
</div>
<ul className="flex flex-col gap-2 mt-md flex-grow">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="factory">factory</span>
                    Vendors
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                    Procurement
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-primary-fixed-dim font-bold bg-on-primary-fixed-variant/20 hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined fill-icon" data-icon="payments">payments</span>
                    Payments
                </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
                    Compliance
                </a>
</li>
</ul>
<div className="mt-auto">
<button className="w-full bg-primary-fixed text-on-primary-fixed py-2 rounded-lg font-label-md hover:bg-primary-fixed-dim transition-colors mb-4 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                Quick Action
            </button>
<ul className="flex flex-col gap-2 border-t border-outline-variant/30 pt-4">
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                        Settings
                    </a>
</li>
<li>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
                        Support
                    </a>
</li>
</ul>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] w-full min-h-screen overflow-y-auto">
{/* TopAppBar */}
<header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl text-primary dark:text-primary-fixed-dim font-title-md text-title-md font-body-md text-body-md docked full-width top-0 sticky z-40 border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-xl py-sm max-w-container-max mx-auto">
<div className="flex items-center gap-lg">
<h2 className="font-headline-md text-headline-md font-black text-on-surface dark:text-on-surface truncate">CommSync Vendor Management</h2>
<nav className="hidden lg:flex items-center gap-md ml-lg">
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity font-body-md" href="#">Directory</a>
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity font-body-md" href="#">Contracts</a>
<a className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity font-body-md" href="#">Invoices</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-64" placeholder="Search..." type="text" />
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined" data-icon="apps">apps</span></button>
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined" data-icon="account_circle">account_circle</span></button>
</div>
<button className="hidden sm:flex items-center gap-2 bg-primary-container text-on-primary-container px-4 py-2 rounded-lg font-label-md hover:bg-primary transition-colors ml-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                    Add Vendor
                </button>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
{/* Page Header & KPIs */}
<div className="mb-lg flex flex-col sm:flex-row sm:items-end justify-between gap-md">
<div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-2">Vendor Payments &amp; Invoicing</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage outgoing payments and track invoice statuses across your supplier network.</p>
</div>
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-end">
<span className="material-symbols-outlined text-[20px]">add_card</span>
                    New Payment
                </button>
</div>
{/* Bento Grid KPIs */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-xl">
{/* KPI Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-title-md text-title-md text-on-surface-variant">Pending Payments</h3>
<div className="p-2 bg-surface-container rounded-lg text-primary">
<span className="material-symbols-outlined">pending_actions</span>
</div>
</div>
<p className="font-display-lg text-display-lg text-on-surface">$142,500<span className="font-body-md text-body-md text-outline ml-1">.00</span></p>
<div className="flex items-center gap-2 mt-4 text-error">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-label-md text-label-md">+12% vs last week</span>
</div>
</div>
{/* KPI Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-title-md text-title-md text-on-surface-variant">Total Paid (Current Month)</h3>
<div className="p-2 bg-surface-container rounded-lg text-primary">
<span className="material-symbols-outlined">account_balance_wallet</span>
</div>
</div>
<p className="font-display-lg text-display-lg text-on-surface">$850,200<span className="font-body-md text-body-md text-outline ml-1">.50</span></p>
<div className="flex items-center gap-2 mt-4 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
<span className="font-label-md text-label-md">145 Invoices settled</span>
</div>
</div>
{/* KPI Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<h3 className="font-title-md text-title-md text-on-surface-variant">Overdue Invoices</h3>
<div className="p-2 bg-error-container text-on-error-container rounded-lg">
<span className="material-symbols-outlined">warning</span>
</div>
</div>
<p className="font-display-lg text-display-lg text-on-surface">3</p>
<div className="flex items-center gap-2 mt-4 text-error">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span className="font-label-md text-label-md">Requires immediate action</span>
</div>
</div>
</div>
{/* Invoices Table Area */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden">
{/* Table Header/Controls */}
<div className="p-md border-b border-outline-variant/30 bg-surface/50 backdrop-blur-xl flex flex-col sm:flex-row justify-between items-center gap-md">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">receipt_long</span>
                        Recent Invoices
                    </h3>
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search vendor or ID..." type="text" />
</div>
<button className="p-2 border border-outline-variant rounded-lg text-on-surface-variant hover:bg-surface-variant transition-colors flex items-center justify-center" title="Filter">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
</div>
{/* Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<th className="p-md font-medium">Invoice ID</th>
<th className="p-md font-medium">Vendor Name</th>
<th className="p-md font-medium">Issue Date</th>
<th className="p-md font-medium">Due Date</th>
<th className="p-md font-medium text-right">Amount</th>
<th className="p-md font-medium">Status</th>
<th className="p-md font-medium text-center">Action</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/20">
{/* Row 1: Scheduled */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-md font-code-sm text-code-sm text-outline">INV-2023-089</td>
<td className="p-md font-medium flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs">AC</div>
                                    Acme Corp Logistics
                                </td>
<td className="p-md text-on-surface-variant">Oct 12, 2023</td>
<td className="p-md text-on-surface-variant">Nov 12, 2023</td>
<td className="p-md text-right font-medium">$12,450.00</td>
<td className="p-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary-fixed text-on-primary-fixed">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Scheduled
                                    </span>
</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 2: Overdue */}
<tr className="hover:bg-primary/5 transition-colors group bg-error-container/10">
<td className="p-md font-code-sm text-code-sm text-outline">INV-2023-074</td>
<td className="p-md font-medium flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs">GN</div>
                                    Global Network IT Services
                                </td>
<td className="p-md text-on-surface-variant">Sep 01, 2023</td>
<td className="p-md text-error font-medium">Oct 01, 2023</td>
<td className="p-md text-right font-medium">$45,000.00</td>
<td className="p-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-error-container text-error">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Overdue
                                    </span>
</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 3: Pending */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-md font-code-sm text-code-sm text-outline">INV-2023-092</td>
<td className="p-md font-medium flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs">SH</div>
                                    Synapse Hardware
                                </td>
<td className="p-md text-on-surface-variant">Oct 15, 2023</td>
<td className="p-md text-on-surface-variant">Nov 15, 2023</td>
<td className="p-md text-right font-medium">$8,200.00</td>
<td className="p-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                        Pending
                                    </span>
</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 4: Paid */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-md font-code-sm text-code-sm text-outline">INV-2023-081</td>
<td className="p-md font-medium flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold text-xs">EL</div>
                                    Elevate Design Agency
                                </td>
<td className="p-md text-on-surface-variant">Oct 05, 2023</td>
<td className="p-md text-on-surface-variant">Nov 05, 2023</td>
<td className="p-md text-right font-medium text-outline line-through">$3,500.00</td>
<td className="p-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-surface-container-high text-on-surface">
<span className="material-symbols-outlined text-[14px]">check</span>
                                        Paid
                                    </span>
</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="p-sm border-t border-outline-variant/30 flex items-center justify-between text-on-surface-variant font-label-md text-label-md bg-surface-container-lowest">
<span className="pl-2">Showing 1-4 of 145 invoices</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded hover:bg-surface-variant transition-colors disabled:opacity-50"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
<button className="w-8 h-8 rounded flex items-center justify-center bg-primary text-on-primary">1</button>
<button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant transition-colors">2</button>
<button className="w-8 h-8 rounded flex items-center justify-center hover:bg-surface-variant transition-colors">3</button>
<span className="px-1">...</span>
<button className="p-1 rounded hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default VendorPaymentLedger;
