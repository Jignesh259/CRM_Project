import React from 'react';
import '../style/Dashboard.css';

const InventoryTransactionLedger: React.FC = () => {
  return (
    <>
      
 SideNavBar (Desktop Only) 
<nav className="hidden md:flex flex-col h-full py-lg bg-inverse-surface dark:bg-surface-container-lowest font-body-md text-body-md fixed left-0 top-0 h-full w-[280px] shadow-md z-30">
<div className="px-lg mb-xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md font-bold shadow-sm">
                C
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-70">Enterprise Suite</p>
</div>
</div>
<div className="px-md mb-lg">
<button className="w-full flex items-center justify-center gap-sm bg-primary text-on-primary h-10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 Active: scale-[0.99] transition-transform font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Entry
            </button>
</div>
<ul className="flex flex-col gap-base flex-grow px-sm">
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="group">group</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="payments">payments</span>
                    Sales
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 bg-on-surface-variant/20 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="inventory_2" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="account_balance">account_balance</span>
                    Finance
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="assessment">assessment</span>
                    Reports
                </a>
</li>
<li>
<a className="flex items-center gap-sm h-10 rounded-lg text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-auto px-lg pt-lg border-t border-surface-variant/20">
<div className="flex items-center gap-sm text-surface-variant opacity-70">
<div className="w-8 h-8 rounded-full bg-surface-variant/30 flex items-center justify-center">
<span className="material-symbols-outlined text-[16px]">person</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-tertiary">Admin User</span>
<span className="text-[10px]">admin@commsync.inc</span>
</div>
</div>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-w-0 md:ml-[280px]">
{/* TopNavBar */}
<header className="hidden md:flex justify-between items-center w-full h-16 px-margin-desktop bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 border-b border-outline-variant shadow-sm z-20 sticky">
<div className="flex-1 max-w-md relative focus-within:ring-2 focus-within:ring-primary rounded-lg transition-shadow">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full h-10 pl-10 pr-sm bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0" placeholder="Search inventory..." type="text" />
</div>
<div className="flex items-center gap-md">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-title-md text-title-md overflow-hidden ring-2 ring-transparent hover:ring-primary transition-all cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="Professional headshot of an enterprise user, modern corporate setting, soft studio lighting, high resolution, minimalist aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAbNSxwGq_HS3ZsZ04nCoC66ivzfK6zx8zPiX820YirQeqGioG0aW-ck9-IdSlUNnuud7iqAqphnjT8lbn5HyFPZVd8b46Mtti7X0cfkif578Slkz-cOBx6GMjMk0SIgW0Kcal4mVGmrSXu-ejtkX9eQadeQYI05-QH8bh1h9jncMdZn-ylL18eqx4_-RRMWIox83sLweQh7FdOp-EHloAgoEZSaXm5l_Mf6u-KS2XeTHj56eDIwRN8Qa2kmH0nHLrPw14uc4ohIw" />
</div>
</div>
</header>
{/* Mobile Header (Simplified) */}
<header className="md:hidden flex justify-between items-center w-full h-14 px-margin-mobile bg-surface border-b border-outline-variant sticky top-0 z-20">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md font-bold">C</div>
<h1 className="font-title-md text-title-md text-on-surface font-bold">CommSync</h1>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
{/* Page Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden flex flex-col gap-lg">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
<div>
<nav className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md mb-xs">
<a className="hover:text-primary transition-colors" href="#">Inventory</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-bold">Stock Transactions</span>
</nav>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">Stock Ledger</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Comprehensive view of all material movements across facilities.</p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-sm h-10 px-md rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container hover:border-outline transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export CSV
                    </button>
<button className="flex items-center gap-sm h-10 px-md rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container hover:border-outline transition-colors">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                        PDF Report
                    </button>
</div>
</div>
{/* Complex Filter Bar (Glassmorphic) */}
<div className="glass-panel rounded-xl p-md flex flex-col md:flex-row gap-md items-center shadow-sm">
{/* Search */}
<div className="relative w-full md:w-64 focus-within:ring-2 focus-within:ring-primary rounded-lg transition-shadow">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full h-10 pl-10 pr-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-0" placeholder="Transaction ID, Item..." type="text" />
</div>
{/* Filters */}
<div className="flex-1 flex flex-wrap gap-sm w-full">
{/* Date Range */}
<div className="relative flex-1 min-w-[140px]">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">calendar_today</span>
<select className="w-full h-10 pl-10 pr-lg bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-shadow cursor-pointer">
<option>Last 7 Days</option>
<option selected>Last 30 Days</option>
<option>This Quarter</option>
<option>This Year</option>
<option>Custom Range...</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
</div>
{/* Type Filter */}
<div className="relative flex-1 min-w-[140px]">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">filter_list</span>
<select className="w-full h-10 pl-10 pr-lg bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-shadow cursor-pointer">
<option selected>All Types</option>
<option>Stock In</option>
<option>Stock Out</option>
<option>Transfer</option>
<option>Adjustment</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
</div>
{/* Warehouse Filter */}
<div className="relative flex-1 min-w-[140px]">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">warehouse</span>
<select className="w-full h-10 pl-10 pr-lg bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md text-on-surface appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-shadow cursor-pointer">
<option selected>All Warehouses</option>
<option>WH-A (Main)</option>
<option>WH-B (Overflow)</option>
<option>WH-C (Cold Storage)</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px] pointer-events-none">expand_more</span>
</div>
</div>
<button className="w-full md:w-auto h-10 px-md rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-on-primary-fixed-variant transition-colors shadow-sm whitespace-nowrap">
                    Apply Filters
                </button>
</div>
{/* Active Filter Badges */}
<div className="flex flex-wrap gap-xs">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-surface-container-high border border-outline-variant text-on-surface font-label-md text-[11px]">
                    Date: Last 30 Days
                    <button className="material-symbols-outlined text-[14px] hover:text-error transition-colors rounded-full">close</button>
</span>
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-primary-fixed/30 border border-primary-fixed-dim text-on-primary-fixed font-label-md text-[11px]">
                    Warehouse: All
                    <button className="material-symbols-outlined text-[14px] hover:text-error transition-colors rounded-full">close</button>
</span>
</div>
{/* High-Density Data Table Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[900px]">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap sticky left-0 bg-surface-container-low z-10 w-12 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap cursor-pointer hover:text-on-surface transition-colors group">
                                    Date/Time <span className="material-symbols-outlined text-[14px] align-middle opacity-0 group-hover:opacity-100 transition-opacity">arrow_downward</span>
</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap cursor-pointer hover:text-on-surface transition-colors">
                                    Transaction ID
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap">
                                    Item Details
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap">
                                    Type
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap text-right">
                                    Qty Change
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap">
                                    Warehouse
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap">
                                    User
                                </th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-bold whitespace-nowrap text-right">
                                    Actions
                                </th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/50">
{/* Row 1: Stock In */}
<tr className="data-table-row transition-colors duration-150">
<td className="py-sm px-md sticky left-0 bg-surface-container-lowest z-10 text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
</td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Oct 24, 2023</span>
<span className="text-[11px] text-on-surface-variant">09:41 AM</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">
                                    TRX-9982-IN
                                </td>
<td className="py-sm px-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Lithium-Ion Cell (3200mAh)</span>
<span className="text-[11px] text-on-surface-variant">SKU: BAT-LI-3200-A</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#e8f5e9] text-[#1b5e20] text-[11px] font-bold tracking-wide uppercase border border-[#c8e6c9]">
<span className="material-symbols-outlined text-[12px]">arrow_downward</span> In
                                    </span>
</td>
<td className="py-sm px-md whitespace-nowrap text-right font-medium text-[#2e7d32]">
                                    +5,000
                                </td>
<td className="py-sm px-md whitespace-nowrap text-on-surface-variant">
                                    WH-A (Main)
                                </td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">SJ</div>
<span className="text-[12px]">S. Jenkins</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
{/* Row 2: Stock Out */}
<tr className="data-table-row transition-colors duration-150">
<td className="py-sm px-md sticky left-0 bg-surface-container-lowest z-10 text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
</td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Oct 24, 2023</span>
<span className="text-[11px] text-on-surface-variant">11:15 AM</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">
                                    TRX-9983-OUT
                                </td>
<td className="py-sm px-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Aluminum Extrusion Profile 2020</span>
<span className="text-[11px] text-on-surface-variant">SKU: AL-EXT-2020-2M</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#ffebee] text-[#b71c1c] text-[11px] font-bold tracking-wide uppercase border border-[#ffcdd2]">
<span className="material-symbols-outlined text-[12px]">arrow_upward</span> Out
                                    </span>
</td>
<td className="py-sm px-md whitespace-nowrap text-right font-medium text-error">
                                    -120
                                </td>
<td className="py-sm px-md whitespace-nowrap text-on-surface-variant">
                                    WH-A (Main)
                                </td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">MR</div>
<span className="text-[12px]">M. Rossi</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
{/* Row 3: Transfer */}
<tr className="data-table-row transition-colors duration-150">
<td className="py-sm px-md sticky left-0 bg-surface-container-lowest z-10 text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
</td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Oct 23, 2023</span>
<span className="text-[11px] text-on-surface-variant">02:30 PM</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">
                                    TRX-9984-TFR
                                </td>
<td className="py-sm px-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Industrial Sensor Array V2</span>
<span className="text-[11px] text-on-surface-variant">SKU: SENS-ARR-V2-IND</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-primary-fixed/40 text-on-primary-fixed-variant text-[11px] font-bold tracking-wide uppercase border border-primary-fixed-dim">
<span className="material-symbols-outlined text-[12px]">swap_horiz</span> Transfer
                                    </span>
</td>
<td className="py-sm px-md whitespace-nowrap text-right font-medium text-on-surface">
                                    50
                                </td>
<td className="py-sm px-md whitespace-nowrap text-on-surface-variant">
<span className="text-[11px] block">From: WH-A</span>
<span className="text-[11px] block">To: WH-B</span>
</td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">SJ</div>
<span className="text-[12px]">S. Jenkins</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
{/* Row 4: Adjustment (Negative) */}
<tr className="data-table-row transition-colors duration-150">
<td className="py-sm px-md sticky left-0 bg-surface-container-lowest z-10 text-center border-r border-outline-variant/30">
<input className="rounded border-outline-variant text-primary focus:ring-primary w-4 h-4 cursor-pointer" type="checkbox" />
</td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Oct 23, 2023</span>
<span className="text-[11px] text-on-surface-variant">04:45 PM</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">
                                    TRX-9985-ADJ
                                </td>
<td className="py-sm px-md">
<div className="flex flex-col">
<span className="font-medium text-on-surface">Packaging Tape (Clear) 50m</span>
<span className="text-[11px] text-on-surface-variant">SKU: PKG-TAPE-CLR-50M</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed/50 text-on-tertiary-fixed text-[11px] font-bold tracking-wide uppercase border border-tertiary-fixed-dim">
<span className="material-symbols-outlined text-[12px]">build</span> Adjust
                                    </span>
</td>
<td className="py-sm px-md whitespace-nowrap text-right font-medium text-error">
                                    -5 <span className="material-symbols-outlined text-[14px] align-middle text-on-surface-variant ml-1 cursor-help" title="Damaged stock">info</span>
</td>
<td className="py-sm px-md whitespace-nowrap text-on-surface-variant">
                                    WH-A (Main)
                                </td>
<td className="py-sm px-md whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">SA</div>
<span className="text-[12px]">System Admin</span>
</div>
</td>
<td className="py-sm px-md whitespace-nowrap text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="bg-surface-container-low border-t border-outline-variant py-sm px-md flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant text-[12px]">Showing 1-4 of 1,248 transactions</span>
<div className="flex items-center gap-2">
<select className="h-8 pl-2 pr-6 py-0 bg-surface-container-lowest border border-outline-variant rounded text-[12px] focus:ring-1 focus:ring-primary">
<option>10 per page</option>
<option selected>25 per page</option>
<option>50 per page</option>
</select>
<div className="flex gap-1">
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant disabled:opacity-50 hover:bg-surface-container-high transition-colors" disabled>
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default InventoryTransactionLedger;
