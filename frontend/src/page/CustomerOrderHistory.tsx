import React from 'react';
import '../style/Dashboard.css';

const CustomerOrderHistory: React.FC = () => {
  return (
    <>
      
 SideNavBar (from JSON) 
<nav className="hidden md:flex flex-col bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] shadow-xl p-md z-50">
{/* Header */}
<div className="flex items-center gap-md mb-xl px-sm">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-on-primary icon-fill" data-icon="hub">hub</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-black text-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant/70 uppercase tracking-widest mt-xs">Enterprise Suite</p>
</div>
</div>
{/* Main Navigation */}
<ul className="flex flex-col gap-xs flex-1">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-title-md text-title-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-title-md text-title-md">CRM</span>
</a>
</li>
{/* Active State Navigation */}
<li>
<a className="flex items-center gap-md px-md py-sm text-primary-fixed-dim bg-white/10 rounded-lg font-medium transition-all" href="#">
<span className="material-symbols-outlined icon-fill" data-icon="payments">payments</span>
<span className="font-title-md text-title-md">Sales</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-title-md text-title-md">Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-title-md text-title-md">Finance</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span className="font-title-md text-title-md">Reports</span>
</a>
</li>
</ul>
{/* Footer Actions */}
<div className="mt-auto flex flex-col gap-sm border-t border-outline-variant/20 pt-md">
<button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary py-sm rounded-lg font-title-md text-title-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm mb-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                Create New
            </button>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-title-md text-title-md">Settings</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
<span className="font-title-md text-title-md">Support</span>
</a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 flex flex-col md:ml-[280px] min-w-0 h-full relative bg-background">
{/* TopNavBar (from JSON) */}
<header className="sticky top-0 z-40 flex justify-between items-center px-lg py-sm w-full bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-outline-variant/30 dark:border-outline/20 shadow-sm">
{/* Left: Mobile Menu Trigger (hidden on desktop) / Context Area */}
<div className="flex items-center gap-md">
<button className="md:hidden text-on-surface-variant p-sm rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
{/* Search Bar */}
<div className="hidden sm:flex items-center bg-surface-container-low border border-outline-variant/50 rounded-full px-md py-sm w-64 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<span className="material-symbols-outlined text-outline mr-sm" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 p-0 font-body-md text-body-md text-on-surface w-full placeholder:text-outline/70" placeholder="Search orders..." type="text" />
</div>
</div>
{/* Right: Actions & Profile */}
<div className="flex items-center gap-sm">
<button className="p-sm text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-sm text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="p-sm text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150 mr-sm">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/50 mx-xs"></div>
<button className="w-10 h-10 rounded-full overflow-hidden border-2 border-surface-container ml-sm hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a business executive in a modern, well-lit corporate environment. The lighting is soft and flattering, highlighting a friendly yet confident expression. The background is a slightly blurred, light-mode minimalist office setting with subtle glass partitions. The overall aesthetic is clean, trustworthy, and aligned with a high-end enterprise software user profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbLvSVoIr3gZZVZble4g8WM07N3d0qQwAhreR5WkpJQMHdYSIFeBkZGF1kJRBT6uX1A_d60cFT2R0cC7FnUg-1lAQuzy4ezTwLrp1b2JiuxXE_EKV-nTtLpWnXCkih3oGEpGnFVfAyROg5g1R7EixzFewXB7i14nXZclRfmsO4g10FDZEJ3KjjXeVlQouaPMewOsAP8w4u4XZy53A7wzEs_yn9QKnW5qC5IiGKYm_iOggTC5ULmiz_hhUrW9hto4o0nmAFMFzAtYw" />
</button>
</div>
</header>
{/* Page Content */}
<div className="flex-1 overflow-auto p-margin-mobile md:p-margin-desktop">
<div className="max-w-container-max mx-auto">
{/* Page Header */}
<div className="mb-xl flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<a className="inline-flex items-center gap-xs text-outline font-label-md text-label-md hover:text-primary transition-colors mb-sm" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
                            Back to Client Profile
                        </a>
<h2 className="font-headline-lg text-headline-lg text-on-background">Apex Dynamics Inc.</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Order History &amp; Fulfillment Status</p>
</div>
<div className="flex items-center gap-md">
<button className="px-md py-sm bg-surface text-on-surface border border-outline-variant rounded-lg font-title-md text-title-md flex items-center gap-sm hover:bg-surface-container-low transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="download">download</span>
                            Export CSV
                        </button>
<button className="px-md py-sm bg-primary text-on-primary rounded-lg font-title-md text-title-md flex items-center gap-sm hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                            New Order
                        </button>
</div>
</div>
{/* Metrics Bento Grid (Optional Context) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
<div className="bg-surface rounded-2xl p-lg border border-outline-variant/30 shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl group-hover:bg-primary-fixed/30 transition-colors"></div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Total Spend YTD</p>
<p className="font-display-lg text-display-lg text-on-surface">$124,500</p>
</div>
<div className="bg-surface rounded-2xl p-lg border border-outline-variant/30 shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary-fixed/20 rounded-full blur-xl group-hover:bg-tertiary-fixed/30 transition-colors"></div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Active Orders</p>
<p className="font-display-lg text-display-lg text-on-surface">3</p>
</div>
<div className="bg-surface rounded-2xl p-lg border border-outline-variant/30 shadow-sm relative overflow-hidden group">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary-fixed/20 rounded-full blur-xl group-hover:bg-secondary-fixed/30 transition-colors"></div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Avg. Fulfillment Time</p>
<p className="font-display-lg text-display-lg text-on-surface">2.4 <span className="font-title-md text-title-md text-outline">Days</span></p>
</div>
</div>
{/* Data Table Card */}
<div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm flex flex-col overflow-hidden">
{/* Table Toolbar */}
<div className="px-lg py-md border-b border-outline-variant/30 flex items-center justify-between bg-surface/50 backdrop-blur-md">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-outline" data-icon="filter_list">filter_list</span>
<span className="font-title-md text-title-md text-on-surface">Filter Orders</span>
</div>
<div className="flex gap-sm">
<select className="bg-transparent border-none text-on-surface font-body-md text-body-md py-xs pl-sm pr-lg focus:ring-0 cursor-pointer hover:bg-surface-container-low rounded-md transition-colors appearance-none">
<option>All Statuses</option>
<option>Delivered</option>
<option>Processing</option>
<option>Shipped</option>
</select>
<div className="w-px h-6 bg-outline-variant/50 self-center"></div>
<select className="bg-transparent border-none text-on-surface font-body-md text-body-md py-xs pl-sm pr-lg focus:ring-0 cursor-pointer hover:bg-surface-container-low rounded-md transition-colors appearance-none">
<option>Last 6 Months</option>
<option>This Year</option>
<option>All Time</option>
</select>
</div>
</div>
{/* Table Container */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest border-b border-outline-variant/50">
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Order ID</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Date</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Items</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap text-right">Total Amount</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap">Status</th>
<th className="px-lg py-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider whitespace-nowrap text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/20">
{/* Row 1 (Delivered) */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-lg py-md whitespace-nowrap">
<span className="font-code-sm text-code-sm font-medium text-primary">ORD-2023-8842</span>
</td>
<td className="px-lg py-md whitespace-nowrap">Oct 24, 2023</td>
<td className="px-lg py-md whitespace-nowrap text-on-surface-variant">24 Units</td>
<td className="px-lg py-md whitespace-nowrap text-right font-medium">$12,450.00</td>
<td className="px-lg py-md whitespace-nowrap">
<div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-primary-fixed text-on-primary-fixed">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
<span className="font-label-md text-label-md">Delivered</span>
</div>
</td>
<td className="px-lg py-md whitespace-nowrap text-right">
<button className="p-xs text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
{/* Row 2 (Processing) */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-lg py-md whitespace-nowrap">
<span className="font-code-sm text-code-sm font-medium text-primary">ORD-2023-8901</span>
</td>
<td className="px-lg py-md whitespace-nowrap">Nov 02, 2023</td>
<td className="px-lg py-md whitespace-nowrap text-on-surface-variant">5 Units</td>
<td className="px-lg py-md whitespace-nowrap text-right font-medium">$3,200.00</td>
<td className="px-lg py-md whitespace-nowrap">
<div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-tertiary-container text-on-tertiary-container">
<span className="material-symbols-outlined text-[14px]" data-icon="autorenew">autorenew</span>
<span className="font-label-md text-label-md">Processing</span>
</div>
</td>
<td className="px-lg py-md whitespace-nowrap text-right">
<button className="p-xs text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
{/* Row 3 (Shipped) */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-lg py-md whitespace-nowrap">
<span className="font-code-sm text-code-sm font-medium text-primary">ORD-2023-8875</span>
</td>
<td className="px-lg py-md whitespace-nowrap">Oct 28, 2023</td>
<td className="px-lg py-md whitespace-nowrap text-on-surface-variant">12 Units</td>
<td className="px-lg py-md whitespace-nowrap text-right font-medium">$8,100.50</td>
<td className="px-lg py-md whitespace-nowrap">
<div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-surface-variant text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]" data-icon="local_shipping">local_shipping</span>
<span className="font-label-md text-label-md">Shipped</span>
</div>
</td>
<td className="px-lg py-md whitespace-nowrap text-right">
<button className="p-xs text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
{/* Row 4 (Delivered) */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-lg py-md whitespace-nowrap">
<span className="font-code-sm text-code-sm font-medium text-primary">ORD-2023-8750</span>
</td>
<td className="px-lg py-md whitespace-nowrap">Sep 15, 2023</td>
<td className="px-lg py-md whitespace-nowrap text-on-surface-variant">100 Units</td>
<td className="px-lg py-md whitespace-nowrap text-right font-medium">$45,000.00</td>
<td className="px-lg py-md whitespace-nowrap">
<div className="inline-flex items-center gap-xs px-sm py-xs rounded-full bg-primary-fixed text-on-primary-fixed">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
<span className="font-label-md text-label-md">Delivered</span>
</div>
</td>
<td className="px-lg py-md whitespace-nowrap text-right">
<button className="p-xs text-outline hover:text-primary transition-colors rounded-full hover:bg-surface-container-highest opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="px-lg py-md border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-lowest">
<p className="font-body-md text-body-md text-on-surface-variant">Showing 1 to 4 of 48 entries</p>
<div className="flex items-center gap-xs">
<button className="p-sm text-outline hover:text-on-surface hover:bg-surface-container-low rounded-md transition-colors disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 flex items-center justify-center font-label-md text-label-md rounded-md bg-primary text-on-primary">1</button>
<button className="w-8 h-8 flex items-center justify-center font-label-md text-label-md rounded-md text-on-surface-variant hover:bg-surface-container-low transition-colors">2</button>
<button className="w-8 h-8 flex items-center justify-center font-label-md text-label-md rounded-md text-on-surface-variant hover:bg-surface-container-low transition-colors">3</button>
<span className="text-outline mx-xs">...</span>
<button className="w-8 h-8 flex items-center justify-center font-label-md text-label-md rounded-md text-on-surface-variant hover:bg-surface-container-low transition-colors">12</button>
<button className="p-sm text-outline hover:text-on-surface hover:bg-surface-container-low rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerOrderHistory;
