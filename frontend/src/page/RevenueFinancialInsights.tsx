import React from 'react';
import '../style/Dashboard.css';

const RevenueFinancialInsights: React.FC = () => {
  return (
    <>
      
 Shared Component: SideNavBar 
<nav className="bg-inverse-surface dark:bg-on-background w-[280px] h-screen fixed left-0 top-0 shadow-sm flex flex-col h-full py-lg px-md z-40 hidden md:flex">
{/* Brand / Header */}
<div className="mb-xl px-sm">
<div className="flex items-center gap-sm mb-xs">
<div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>dataset</span>
</div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">CommSync</h1>
</div>
<p className="font-label-md text-label-md text-primary-fixed-dim opacity-80">Enterprise Suite</p>
</div>
{/* Navigation Tabs */}
<div className="flex flex-col gap-sm flex-1">
{/* Inactive: Dashboard */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
{/* Inactive: CRM */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">group</span>
                CRM
            </a>
{/* Inactive: Inventory */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
{/* ACTIVE: Financials (Semantic mapping to Revenue & Financial Report) */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim bg-white/5 backdrop-blur-md border-r-4 border-primary-container hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>payments</span>
                Financials
            </a>
{/* Inactive: Reports */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">analytics</span>
                Reports
            </a>
</div>
{/* Spacer */}
<div className="mt-auto pt-lg">
{/* Inactive: Settings */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md mb-lg" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
{/* CTA */}
<button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container font-title-md text-title-md py-sm px-md rounded-lg shadow-sm hover:brightness-110 transition-all active:scale-95">
<span className="material-symbols-outlined text-[20px]">add</span>
                New Report
            </button>
</div>
</nav>
 Main Wrapper (accounts for fixed sidebar) 
<div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
{/* Shared Component: TopNavBar */}
<header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl docked full-width top-0 sticky border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-xl h-16 w-full z-30">
<div className="flex items-center gap-lg">
{/* Mobile Menu Trigger (hidden on desktop) */}
<button className="md:hidden text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">menu</span>
</button>
{/* Product Name / Brand Logo Anchor */}
<div className="font-headline-md text-headline-md font-black text-primary flex items-center gap-sm">
<span className="material-symbols-outlined hidden md:block">bar_chart</span>
                    CommSync Reports
                </div>
</div>
{/* Global Actions */}
<div className="flex items-center gap-md">
{/* Search (on_left configuration implies search is to the left of trailing actions) */}
<div className="relative hidden lg:block mr-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant/30 rounded-full font-body-md text-body-md text-on-surface focus:outline-none focus-within:ring-2 focus-within:ring-primary-container transition-all w-64 placeholder:text-outline" placeholder="Search financials..." type="text" />
</div>
{/* Trailing Icon Actions */}
<button className="text-on-surface-variant font-medium hover:text-primary transition-all p-2 rounded-full hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary-container">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant font-medium hover:text-primary transition-all p-2 rounded-full hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary-container hidden sm:block">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="text-on-surface-variant font-medium hover:text-primary transition-all p-2 rounded-full hover:bg-surface-container-high focus-within:ring-2 focus-within:ring-primary-container">
<span className="material-symbols-outlined">dark_mode</span>
</button>
{/* User Avatar */}
<div className="h-8 w-8 rounded-full bg-primary-fixed ml-sm overflow-hidden border border-outline-variant/30 cursor-pointer hover:ring-2 ring-primary-container transition-all shrink-0">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate financial analyst in her early 30s. She has a confident, warm expression, wearing a tailored navy blue blazer over a crisp white blouse. The lighting is soft and studio-quality, illuminating her face evenly. The background is a clean, neutral bright white to match a modern light-mode enterprise software aesthetic. The image is hyper-realistic and high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHbTWn2Dx8ddrc2NJz2VLJNO7JIRQkPgkK4THZQBYZca6M4G9iXG5xyJdB9YWdgWTX2sm7zB5ISL7amL5tLCM4f6aZyY0HbT4kWaPLNHNC0xOEpvqhvUPRL6f5i4ihjiEoZy8RZ16UYW3D1-rXK6Rlr-tgWdnyKp8bfVRR6-w4h0-c3YX3K6I6-dM4dUgKXe2FNSiW7u0UiKLUwRPZxjhIZUs30EfaEFSfuW27yM1ND--pbS-QAl87XJWBPdHFP9aGk_Tm5QG5_w" />
</div>
</div>
</header>
{/* Canvas / Main Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden">
<div className="max-w-container-max mx-auto space-y-lg">
{/* Page Header & Global Controls */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface">Financial Performance</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Comprehensive overview of revenue streams and profit margins for Q3.</p>
</div>
<div className="flex items-center gap-sm shrink-0">
{/* Date Range Selector */}
<button className="flex items-center gap-sm px-md py-2 bg-surface-container-lowest border border-outline-variant/50 rounded-lg hover:border-primary hover:shadow-sm transition-all text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                            Jul 1 - Sep 30, 2023
                            <span className="material-symbols-outlined text-[18px] text-outline">expand_more</span>
</button>
{/* Export Action */}
<button className="flex items-center justify-center w-10 h-10 bg-surface-container-lowest border border-outline-variant/50 rounded-lg hover:bg-primary hover:text-on-primary hover:border-primary transition-all text-on-surface">
<span className="material-symbols-outlined">download</span>
</button>
</div>
</div>
{/* KPI Bento Grid (Level 1 Elevation) */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* KPI 1 */}
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-primary">account_balance_wallet</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12.5%
                            </span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Total Revenue</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface">$2.45M</h3>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-secondary">savings</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +8.2%
                            </span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Net Profit</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface">$842K</h3>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary">pie_chart</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-error-container text-error font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">trending_down</span> -1.1%
                            </span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Profit Margin</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface">34.4%</h3>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:border-primary/30 transition-all duration-300">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant">monitoring</span>
</div>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-low text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +22.4%
                            </span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-1">YoY Growth</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface">$4.1M</h3>
</div>
</div>
{/* Main Data Visualizations (Bento Row 2) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Multi-Series Bar Chart (8 Columns) */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex flex-col">
{/* Card Header */}
<div className="p-lg border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright rounded-t-xl">
<div>
<h3 className="font-title-md text-title-md text-on-surface">Revenue vs. Profit</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Monthly breakdown for fiscal year</p>
</div>
{/* Legend */}
<div className="flex items-center gap-md font-label-md text-label-md text-on-surface-variant">
<div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-sm bg-primary-container"></span> Revenue</div>
<div className="flex items-center gap-xs"><span className="w-3 h-3 rounded-sm bg-secondary-container"></span> Profit</div>
</div>
</div>
{/* Chart Area (CSS implementation for precision styling) */}
<div className="p-lg flex-1 relative min-h-[300px] flex items-end">
{/* Y-Axis Grid Lines */}
<div className="absolute inset-0 p-lg pb-[48px] pl-[60px] flex flex-col justify-between pointer-events-none">
<div className="border-b border-outline-variant/20 w-full h-0 relative"><span className="absolute -left-12 -top-2.5 font-label-md text-label-md text-outline">100k</span></div>
<div className="border-b border-outline-variant/20 w-full h-0 relative"><span className="absolute -left-12 -top-2.5 font-label-md text-label-md text-outline">75k</span></div>
<div className="border-b border-outline-variant/20 w-full h-0 relative"><span className="absolute -left-12 -top-2.5 font-label-md text-label-md text-outline">50k</span></div>
<div className="border-b border-outline-variant/20 w-full h-0 relative"><span className="absolute -left-12 -top-2.5 font-label-md text-label-md text-outline">25k</span></div>
<div className="border-b border-outline-variant/20 w-full h-0 relative"><span className="absolute -left-12 -top-2.5 font-label-md text-label-md text-outline">0</span></div>
</div>
{/* Bar Columns Container */}
<div className="ml-[40px] flex-1 flex justify-between items-end h-[250px] relative z-10 w-full px-sm pb-2">
{/* Month 1 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "65%"}} title="Revenue: $65k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "35%"}} title="Profit: $35k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Jan</span>
</div>
{/* Month 2 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "72%"}} title="Revenue: $72k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "40%"}} title="Profit: $40k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Feb</span>
</div>
{/* Month 3 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "55%"}} title="Revenue: $55k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "28%"}} title="Profit: $28k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Mar</span>
</div>
{/* Month 4 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "85%"}} title="Revenue: $85k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "48%"}} title="Profit: $48k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant text-primary font-bold">Apr</span>
</div>
{/* Month 5 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "90%"}} title="Revenue: $90k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "52%"}} title="Profit: $52k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">May</span>
</div>
{/* Month 6 */}
<div className="flex flex-col items-center gap-2 w-full max-w-[40px] group">
<div className="flex items-end gap-1 w-full h-[220px] justify-center">
<div className="w-1/2 bg-primary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "78%"}} title="Revenue: $78k"></div>
<div className="w-1/2 bg-secondary-container rounded-t-sm chart-bar group-hover:opacity-80 cursor-pointer" style={{"height": "44%"}} title="Profit: $44k"></div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant">Jun</span>
</div>
</div>
</div>
</div>
{/* Donut Chart Card (4 Columns) */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 flex flex-col">
<div className="p-lg border-b border-outline-variant/10 bg-surface-bright rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-surface">Revenue by Category</h3>
</div>
<div className="p-lg flex-1 flex flex-col items-center justify-center">
{/* CSS Conic Gradient Donut */}
<div className="relative w-48 h-48 rounded-full mb-lg flex items-center justify-center shadow-inner" style={{"background": "conic-gradient(\n                                var(--tw-colors-primary-container) 0% 45%, \n                                var(--tw-colors-secondary) 45% 75%, \n                                var(--tw-colors-tertiary-container) 75% 90%,\n                                var(--tw-colors-outline-variant) 90% 100%\n                            )"}}>
{/* Inner cutout to make it a donut */}
<div className="absolute w-32 h-32 bg-surface-container-lowest rounded-full flex flex-col items-center justify-center shadow-sm">
<span className="font-headline-md text-headline-md font-bold text-on-surface">100%</span>
<span className="font-label-md text-label-md text-on-surface-variant">Total</span>
</div>
</div>
{/* Custom Legend */}
<div className="w-full space-y-sm">
<div className="flex items-center justify-between font-body-md text-body-md">
<div className="flex items-center gap-sm"><span className="w-3 h-3 rounded-sm bg-primary-container"></span> Software Licenses</div>
<span className="font-medium text-on-surface">45%</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md">
<div className="flex items-center gap-sm"><span className="w-3 h-3 rounded-sm bg-secondary"></span> Cloud Services</div>
<span className="font-medium text-on-surface">30%</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md">
<div className="flex items-center gap-sm"><span className="w-3 h-3 rounded-sm bg-tertiary-container"></span> Consulting</div>
<span className="font-medium text-on-surface">15%</span>
</div>
<div className="flex items-center justify-between font-body-md text-body-md">
<div className="flex items-center gap-sm"><span className="w-3 h-3 rounded-sm bg-outline-variant"></span> Other</div>
<span className="font-medium text-on-surface">10%</span>
</div>
</div>
</div>
</div>
</div>
{/* Financial Summary Table */}
<div className="bg-surface-container-lowest rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-outline-variant/20 overflow-hidden">
<div className="p-lg border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright">
<h3 className="font-title-md text-title-md text-on-surface">Financial Summary</h3>
<button className="text-primary font-label-md text-label-md hover:underline flex items-center gap-xs">
                            View Full Report <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/20 bg-surface-container-low/50 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
<th className="py-md px-lg font-medium">Category</th>
<th className="py-md px-lg font-medium text-right">Q1 2023</th>
<th className="py-md px-lg font-medium text-right">Q2 2023</th>
<th className="py-md px-lg font-medium text-right">Q3 2023</th>
<th className="py-md px-lg font-medium text-right">YTD Total</th>
<th className="py-md px-lg font-medium text-center">Trend</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="py-md px-lg font-medium">Gross Revenue</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$750,000</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$820,000</td>
<td className="py-md px-lg text-right font-medium">$880,000</td>
<td className="py-md px-lg text-right font-bold text-primary">$2,450,000</td>
<td className="py-md px-lg text-center"><span className="material-symbols-outlined text-primary text-[20px]">trending_up</span></td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="py-md px-lg font-medium">Operating Expenses</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$420,000</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$435,000</td>
<td className="py-md px-lg text-right font-medium">$450,000</td>
<td className="py-md px-lg text-right font-bold text-error">$1,305,000</td>
<td className="py-md px-lg text-center"><span className="material-symbols-outlined text-error text-[20px]">trending_up</span></td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group bg-surface-container-low/30">
<td className="py-md px-lg font-bold text-primary-container">EBITDA</td>
<td className="py-md px-lg text-right font-medium">$330,000</td>
<td className="py-md px-lg text-right font-medium">$385,000</td>
<td className="py-md px-lg text-right font-bold text-primary">$430,000</td>
<td className="py-md px-lg text-right font-bold text-primary-container">$1,145,000</td>
<td className="py-md px-lg text-center"><span className="material-symbols-outlined text-primary text-[20px]">trending_up</span></td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-lg font-medium">Net Profit</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$240,000</td>
<td className="py-md px-lg text-right text-on-surface-variant group-hover:text-on-surface transition-colors">$285,000</td>
<td className="py-md px-lg text-right font-medium">$317,000</td>
<td className="py-md px-lg text-right font-bold text-secondary">$842,000</td>
<td className="py-md px-lg text-center"><span className="material-symbols-outlined text-secondary text-[20px]">moving</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default RevenueFinancialInsights;
