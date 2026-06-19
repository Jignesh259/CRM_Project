import React from 'react';
import '../style/Dashboard.css';

const CustomerPaymentRecords: React.FC = () => {
  return (
    <>
      
 SideNavBar (JSON Driven) 
<aside className="fixed left-0 top-0 h-full flex flex-col p-md z-50 w-[280px] bg-inverse-surface shadow-xl flex-shrink-0 hidden md:flex">
{/* Header */}
<div className="flex items-center gap-sm mb-xl px-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined text-title-md">sync</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-black text-primary-fixed tracking-tight">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant/70 uppercase tracking-widest mt-0.5">Enterprise Suite</p>
</div>
</div>
{/* Create New CTA */}
<button className="mb-lg w-full h-10 bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm hover:opacity-90 transition-opacity shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
            Create New
        </button>
{/* Navigation Tabs */}
<nav className="flex-1 flex flex-col gap-xs overflow-y-auto pr-2">
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-title-md text-title-md">Dashboard</span>
</a>
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-title-md text-title-md">CRM</span>
</a>
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-title-md text-title-md">Sales</span>
</a>
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-title-md text-title-md">Inventory</span>
</a>
{/* Active Tab Semantic Mapping: Finance / Payments */}
<a className="flex items-center gap-md px-sm py-2.5 text-primary-fixed-dim bg-white/10 rounded-lg font-medium shadow-inner" href="#">
<span className="material-symbols-outlined fill-icon">account_balance</span>
<span className="font-title-md text-title-md">Finance</span>
</a>
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="font-title-md text-title-md">Reports</span>
</a>
</nav>
{/* Footer Tabs */}
<div className="mt-auto pt-lg border-t border-outline-variant/10 flex flex-col gap-xs">
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-title-md text-title-md">Settings</span>
</a>
<a className="flex items-center gap-md px-sm py-2.5 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span className="font-title-md text-title-md">Support</span>
</a>
</div>
</aside>
 Main Content Area 
<main className="flex-1 ml-[280px] flex flex-col min-w-0 bg-background relative">
{/* TopNavBar (JSON Driven) */}
<header className="sticky top-0 z-40 flex justify-between items-center px-lg py-sm w-full bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm glass-panel">
{/* Left: Search / Context */}
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full h-10 pl-10 pr-4 bg-surface-container-low border border-outline-variant/30 rounded-lg font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline-variant" placeholder="Search transactions, customers..." type="text" />
</div>
</div>
{/* Right: Actions */}
<div className="flex items-center gap-sm">
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
<button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 active:scale-95 duration-150 transition-transform">
<img alt="User profile avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPO-DQ3iUPxutQb1WRGp3kIMsQOwBw5uyH4IojTj5H8AhO8pRlxZL2hGPIXUyEFWcBXoOuM-DTKGd6Lhebo-fJ0lsfCsG4Yhp-7huzajffbTBVbrsbsokY4V_yCHFaNizgPcNZniMbva2kEshtsy3LIvJ3ifq0ti7bsIA4oPHRbnNZjvS25l2kGyhyUkxLxBWEdVhjzv18HQFOFH-XvUQ69EzRgI6gOauO72nEeuIfTZ08AbJZIPTLPqYkSm7Tc12RI-kLjACCD0c" />
</button>
</div>
</header>
{/* Scrollable Page Canvas */}
<div className="flex-1 overflow-y-auto p-margin-desktop space-y-gutter">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Customer Payments</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Manage payment methods and track transaction history.</p>
</div>
<div className="flex gap-sm">
<button className="h-10 px-4 rounded-lg border border-outline-variant/50 font-title-md text-title-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
<button className="h-10 px-4 rounded-lg bg-primary-container text-on-primary-container font-title-md text-title-md hover:bg-primary-container/90 transition-colors shadow-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">add_card</span>
                        New Payment
                    </button>
</div>
</div>
{/* Top Grid: Saved Methods & Quick Stats */}
<div className="grid grid-cols-12 gap-gutter">
{/* Saved Payment Methods (Bento Section) */}
<div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant/20 rounded-2xl shadow-sm p-lg hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Saved Payment Methods</h3>
<button className="text-primary font-label-md text-label-md hover:underline">Manage All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
{/* Card 1 */}
<div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-gradient-to-br from-surface-container-low to-surface p-md group cursor-pointer hover:border-primary/50 transition-colors">
{/* Subtle backdrop pattern */}
<div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
<div className="flex justify-between items-start mb-xl relative z-10">
<div className="flex items-center gap-2">
<div className="w-10 h-6 bg-[#1434CB] rounded flex items-center justify-center text-white font-bold text-[10px] italic">VISA</div>
<span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-surface-container border border-outline-variant/20 text-on-surface-variant">Primary</span>
</div>
<button className="text-outline-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="relative z-10">
<p className="font-code-sm text-code-sm text-on-surface-variant tracking-[0.2em] mb-1">•••• •••• •••• 4242</p>
<div className="flex justify-between items-end">
<p className="font-label-md text-label-md text-outline">Expires 12/26</p>
<p className="font-label-md text-label-md text-on-surface font-medium">Acme Corp</p>
</div>
</div>
</div>
{/* Card 2 */}
<div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-low p-md group cursor-pointer hover:border-primary/50 transition-colors">
<div className="flex justify-between items-start mb-xl relative z-10">
<div className="flex items-center gap-2">
<div className="w-10 h-6 bg-[#EB001B] rounded flex items-center justify-center relative overflow-hidden">
{/* Fake Mastercard Logo */}
<div className="w-4 h-4 rounded-full bg-[#FF5F00] absolute right-1 mix-blend-multiply opacity-80"></div>
<div className="w-4 h-4 rounded-full bg-[#EB001B] absolute left-1 mix-blend-multiply opacity-80"></div>
</div>
</div>
<button className="text-outline-variant hover:text-on-surface transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="relative z-10">
<p className="font-code-sm text-code-sm text-on-surface-variant tracking-[0.2em] mb-1">•••• •••• •••• 8812</p>
<div className="flex justify-between items-end">
<p className="font-label-md text-label-md text-outline">Expires 08/25</p>
<p className="font-label-md text-label-md text-on-surface font-medium">Acme Corp</p>
</div>
</div>
</div>
</div>
</div>
{/* Quick Stats (Bento) */}
<div className="col-span-12 lg:col-span-4 bg-primary-container text-on-primary-container rounded-2xl shadow-sm p-lg relative overflow-hidden flex flex-col justify-between">
{/* Glass highlight */}
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-primary-fixed-dim">
<span className="material-symbols-outlined text-[18px]">trending_up</span>
<h3 className="font-label-md text-label-md uppercase tracking-wider">30-Day Volume</h3>
</div>
<p className="font-display-lg text-display-lg font-bold tracking-tight">$142,850</p>
</div>
<div className="relative z-10 mt-xl pt-md border-t border-white/20 flex justify-between items-center">
<div>
<p className="font-label-md text-label-md text-primary-fixed-dim">Success Rate</p>
<p className="font-title-md text-title-md">98.4%</p>
</div>
<div className="w-px h-8 bg-white/20"></div>
<div>
<p className="font-label-md text-label-md text-primary-fixed-dim">Avg. Txn</p>
<p className="font-title-md text-title-md">$1,240</p>
</div>
</div>
</div>
</div>
{/* Payment History Table (Level 1 Card) */}
<div className="bg-surface border border-outline-variant/20 rounded-2xl shadow-sm overflow-hidden flex flex-col">
{/* Table Header/Toolbar */}
<div className="p-lg border-b border-outline-variant/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-md bg-surface-bright/50">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span>
                        Payment History
                    </h3>
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative flex-1 sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">filter_list</span>
<select className="w-full h-9 pl-9 pr-8 bg-surface border border-outline-variant/30 rounded-md font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer">
<option>All Statuses</option>
<option>Success</option>
<option>Failed</option>
<option>Pending</option>
</select>
</div>
</div>
</div>
{/* Table Wrapper for Scroll */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider w-32">Transaction ID</th>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider">Date &amp; Time</th>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider text-right">Amount</th>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider">Method</th>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider">Customer</th>
<th className="font-label-md text-label-md text-on-surface-variant px-lg py-sm border-b border-outline-variant/20 font-medium uppercase tracking-wider">Status</th>
<th className="px-lg py-sm border-b border-outline-variant/20 w-12"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
{/* Row 1 (Success) */}
<tr className="group hover:bg-primary/5 transition-colors border-b border-outline-variant/5 last:border-0 cursor-pointer">
<td className="px-lg py-md font-code-sm text-on-surface-variant group-hover:text-primary transition-colors">TXN-8472</td>
<td className="px-lg py-md text-on-surface">
<div>Oct 24, 2023</div>
<div className="text-outline font-label-md text-label-md">14:32 EST</div>
</td>
<td className="px-lg py-md text-on-surface font-title-md text-right tabular-nums">$4,500.00</td>
<td className="px-lg py-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">credit_card</span>
<span className="text-on-surface">Visa •••• 4242</span>
</div>
</td>
<td className="px-lg py-md text-on-surface">Acme Corp</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-1 bg-[#d4ebd8] text-[#1c5f2c] font-label-md text-label-md px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#1c5f2c]"></span>
                                        Success
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</td>
</tr>
{/* Row 2 (Failed) */}
<tr className="group hover:bg-primary/5 transition-colors border-b border-outline-variant/5 last:border-0 cursor-pointer">
<td className="px-lg py-md font-code-sm text-on-surface-variant group-hover:text-primary transition-colors">TXN-8471</td>
<td className="px-lg py-md text-on-surface">
<div>Oct 24, 2023</div>
<div className="text-outline font-label-md text-label-md">11:15 EST</div>
</td>
<td className="px-lg py-md text-on-surface font-title-md text-right tabular-nums">$1,250.00</td>
<td className="px-lg py-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">account_balance</span>
<span className="text-on-surface">Bank Transfer</span>
</div>
</td>
<td className="px-lg py-md text-on-surface">Globex Inc</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-1 bg-error-container text-on-error-container font-label-md text-label-md px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Failed
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</td>
</tr>
{/* Row 3 (Success) */}
<tr className="group hover:bg-primary/5 transition-colors border-b border-outline-variant/5 last:border-0 cursor-pointer">
<td className="px-lg py-md font-code-sm text-on-surface-variant group-hover:text-primary transition-colors">TXN-8470</td>
<td className="px-lg py-md text-on-surface">
<div>Oct 23, 2023</div>
<div className="text-outline font-label-md text-label-md">09:45 EST</div>
</td>
<td className="px-lg py-md text-on-surface font-title-md text-right tabular-nums">$8,900.50</td>
<td className="px-lg py-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">credit_card</span>
<span className="text-on-surface">Mastercard •••• 8812</span>
</div>
</td>
<td className="px-lg py-md text-on-surface">Acme Corp</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-1 bg-[#d4ebd8] text-[#1c5f2c] font-label-md text-label-md px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#1c5f2c]"></span>
                                        Success
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</td>
</tr>
{/* Row 4 (Pending) */}
<tr className="group hover:bg-primary/5 transition-colors border-b border-outline-variant/5 last:border-0 cursor-pointer">
<td className="px-lg py-md font-code-sm text-on-surface-variant group-hover:text-primary transition-colors">TXN-8469</td>
<td className="px-lg py-md text-on-surface">
<div>Oct 23, 2023</div>
<div className="text-outline font-label-md text-label-md">08:00 EST</div>
</td>
<td className="px-lg py-md text-on-surface font-title-md text-right tabular-nums">$350.00</td>
<td className="px-lg py-md">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">payments</span>
<span className="text-on-surface">ACH Debit</span>
</div>
</td>
<td className="px-lg py-md text-on-surface">Soylent Corp</td>
<td className="px-lg py-md">
<span className="inline-flex items-center gap-1 bg-surface-variant text-on-surface-variant font-label-md text-label-md px-2 py-1 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                        Pending
                                    </span>
</td>
<td className="px-lg py-md text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="p-4 border-t border-outline-variant/10 flex items-center justify-between bg-surface-bright/50">
<p className="font-label-md text-label-md text-outline">Showing 1 to 4 of 124 transactions</p>
<div className="flex gap-1">
<button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-outline-variant hover:bg-surface-container hover:text-on-surface transition-colors disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-outline-variant hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Bottom spacer */}
<div className="h-xl"></div>
</div>
</main>

    </>
  );
};

export default CustomerPaymentRecords;
