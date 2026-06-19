import React from 'react';
import '../style/Dashboard.css';

const CustomerBillingInvoices: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component Blueprint) 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-xl flex flex-col p-md z-50 hidden md:flex">
{/* Header */}
<div className="flex items-center gap-sm mb-xl px-sm">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined font-bold">domain</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-black text-primary-fixed tracking-tight">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant/70 uppercase tracking-widest">Enterprise Suite</p>
</div>
</div>
{/* CTA */}
<button className="w-full bg-primary text-on-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm mb-lg shadow-sm hover:bg-surface-tint transition-colors">
<span className="material-symbols-outlined">add</span>
<span className="font-title-md text-title-md text-sm">Create New</span>
</button>
{/* Main Navigation */}
<nav className="flex-1 flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">dashboard</span>
<span className="font-title-md text-title-md text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">group</span>
<span className="font-title-md text-title-md text-sm">CRM</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">payments</span>
<span className="font-title-md text-title-md text-sm">Sales</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">inventory_2</span>
<span className="font-title-md text-title-md text-sm">Inventory</span>
</a>
{/* Active State: Finance (Intent match for Invoices) */}
<a className="flex items-center gap-md px-md py-sm text-primary-fixed-dim bg-white/10 rounded-lg font-medium transition-all" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>account_balance</span>
<span className="font-title-md text-title-md text-sm">Finance</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">assessment</span>
<span className="font-title-md text-title-md text-sm">Reports</span>
</a>
</nav>
{/* Footer Navigation */}
<div className="mt-auto flex flex-col gap-xs pt-lg border-t border-white/10">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
<span className="font-title-md text-title-md text-sm">Settings</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all group" href="#">
<span className="material-symbols-outlined group-hover:scale-110 transition-transform">contact_support</span>
<span className="font-title-md text-title-md text-sm">Support</span>
</a>
</div>
</aside>
 Main Content Wrapper 
<main className="flex-1 md:ml-[280px] flex flex-col min-h-screen overflow-y-auto">
{/* TopNavBar (Shared Component Blueprint) */}
<header className="sticky top-0 z-40 flex justify-between items-center px-lg py-sm w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
{/* Left: Search */}
<div className="flex-1 max-w-md hidden sm:block">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant/50 text-on-surface text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md" placeholder="Search CommSync..." type="text" />
</div>
</div>
{/* Mobile Menu Trigger */}
<button className="md:hidden p-2 text-on-surface">
<span className="material-symbols-outlined">menu</span>
</button>
{/* Right: Actions & Profile */}
<div className="flex items-center gap-sm">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150 hidden sm:block">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150 hidden sm:block">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/50 mx-xs hidden sm:block"></div>
<button className="w-8 h-8 rounded-full bg-surface-variant border border-outline-variant/30 overflow-hidden ml-xs active:scale-95 duration-150">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a person looking directly at the camera. The lighting is soft and natural, typical of a modern corporate portrait. The individual is wearing a dark, textured blazer over a light-colored shirt. The background is slightly blurred, emphasizing the subject and maintaining a clean, high-end visual aesthetic suitable for an enterprise software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsbm05LM2_aOhd-L4vcLI4syKlL9x3N6dt_jnzIeZYe0C4KNTCImBpMn258JKifZKnbgS_mdCuxge6KupjAnR-5ul_hN-71OZ2Vo-ARkrVqE_7yxtmgE82rskr-6uWFwoRFbquqoeL2-d9A7vhNyK3svbnD_hUWC0hywJkZK46grG8toz9HGnKNpwkPfCiMPukii6ql7EVsBrM6ZN724LF7Ru1hxxJzAIrqwBZ74BbYfNKBZRTwh42N9NpD38JmusgojRiHApw4aY" />
</button>
</div>
</header>
{/* Page Canvas */}
<div className="p-margin-mobile md:p-margin-desktop flex-1 flex flex-col gap-lg max-w-container-max mx-auto w-full">
{/* Breadcrumbs & Header */}
<div className="flex flex-col gap-xs">
<div className="flex items-center gap-xs text-outline font-label-md text-label-md">
<span className="hover:text-primary cursor-pointer transition-colors">Finance</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer transition-colors">Customers</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface font-medium">Acme Corporation</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface flex items-center gap-sm">
                            Acme Corporation Invoices
                        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage and track billing history for this account.</p>
</div>
<button className="bg-primary text-on-primary rounded-lg px-md py-2 flex items-center gap-sm hover:bg-surface-tint transition-colors shadow-sm font-label-md text-label-md font-medium shrink-0 h-[40px]">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Invoice
                    </button>
</div>
</div>
{/* Bento Stats Overview */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-md">
<div className="bg-surface rounded-xl p-md border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div className="flex items-center gap-sm text-on-surface-variant mb-sm">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
<span className="font-label-md text-label-md font-medium">Total Lifetime Billed</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface">$142,500.00</div>
</div>
<div className="bg-surface rounded-xl p-md border border-outline-variant/30 shadow-sm flex flex-col justify-between">
<div className="flex items-center gap-sm text-on-surface-variant mb-sm">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
<span className="font-label-md text-label-md font-medium">Outstanding Balance</span>
</div>
<div className="font-headline-md text-headline-md text-tertiary-container">$18,450.00</div>
</div>
<div className="bg-surface rounded-xl p-md border border-outline-variant/30 shadow-sm flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-error/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-center gap-sm text-error mb-sm">
<span className="material-symbols-outlined text-[20px]">warning</span>
<span className="font-label-md text-label-md font-medium">Overdue</span>
</div>
<div className="relative z-10 font-headline-md text-headline-md text-error">$4,200.00</div>
</div>
</div>
{/* Main Data Section */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm flex flex-col flex-1 overflow-hidden">
{/* Toolbar */}
<div className="p-md border-b border-outline-variant/30 bg-surface-bright flex flex-col sm:flex-row gap-4 justify-between items-center">
{/* Search within table */}
<div className="relative w-full sm:w-80">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search invoice # or amount..." type="text" />
</div>
{/* Filters */}
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative flex-1 sm:flex-none">
<select className="w-full appearance-none bg-surface-container-lowest border border-outline-variant text-on-surface font-body-md text-body-md rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-all">
<option value="all">All Statuses</option>
<option value="paid">Paid</option>
<option value="overdue">Overdue</option>
<option value="partial">Partial</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg p-2 hover:bg-surface-container-high transition-colors flex items-center justify-center shrink-0" title="Filter by Date">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
</button>
<button className="bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg p-2 hover:bg-surface-container-high transition-colors flex items-center justify-center shrink-0" title="Export List">
<span className="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
{/* Table Container */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-lowest border-b border-outline-variant/30">
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold w-12 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Invoice Number</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Issue Date</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Due Date</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Amount</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold">Status</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/20">
{/* Row 1: Paid */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-3 px-4 font-medium text-primary cursor-pointer hover:underline">INV-2023-084</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 12, 2023</td>
<td className="py-3 px-4 text-on-surface-variant">Nov 11, 2023</td>
<td className="py-3 px-4 font-code-sm text-code-sm">$12,500.00</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-container/20 text-primary-container font-label-md text-[11px] font-bold border border-primary-container/30">
                                        Paid
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="p-1 text-outline hover:text-primary transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
{/* Row 2: Overdue */}
<tr className="hover:bg-primary/5 transition-colors group bg-error/5">
<td className="py-3 px-4 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-3 px-4 font-medium text-primary cursor-pointer hover:underline">INV-2023-091</td>
<td className="py-3 px-4 text-on-surface-variant">Sep 01, 2023</td>
<td className="py-3 px-4 text-error font-medium flex items-center gap-1">
                                    Oct 01, 2023
                                    <span className="material-symbols-outlined text-[14px]">warning</span>
</td>
<td className="py-3 px-4 font-code-sm text-code-sm">$4,200.00</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-error-container text-on-error-container font-label-md text-[11px] font-bold border border-error/20">
                                        Overdue
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="p-1 text-outline hover:text-primary transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
{/* Row 3: Partial */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-3 px-4 font-medium text-primary cursor-pointer hover:underline">INV-2023-098</td>
<td className="py-3 px-4 text-on-surface-variant">Oct 20, 2023</td>
<td className="py-3 px-4 text-on-surface-variant">Nov 19, 2023</td>
<td className="py-3 px-4 font-code-sm text-code-sm">
                                    $8,000.00
                                    <span className="block text-xs text-tertiary-container mt-0.5">$3,000.00 remaining</span>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-[11px] font-bold border border-tertiary/20">
                                        Partial
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="p-1 text-outline hover:text-primary transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
{/* Row 4: Paid */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-3 px-4 font-medium text-primary cursor-pointer hover:underline">INV-2023-072</td>
<td className="py-3 px-4 text-on-surface-variant">Aug 15, 2023</td>
<td className="py-3 px-4 text-on-surface-variant">Sep 14, 2023</td>
<td className="py-3 px-4 font-code-sm text-code-sm">$1,550.00</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-container/20 text-primary-container font-label-md text-[11px] font-bold border border-primary-container/30">
                                        Paid
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<button className="p-1 text-outline hover:text-primary transition-colors" title="View">
<span className="material-symbols-outlined text-[20px]">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="p-sm px-md border-t border-outline-variant/30 bg-surface-bright flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Showing 1 to 4 of 24 entries</span>
<div className="flex items-center gap-xs">
<button className="p-1 rounded hover:bg-surface-container-high text-outline disabled:opacity-50 transition-colors" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary-container/10 text-primary-container font-label-md text-label-md font-bold flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">3</button>
<span className="text-on-surface-variant mx-1">...</span>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerBillingInvoices;
