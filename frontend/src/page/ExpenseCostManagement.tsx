import React from 'react';
import '../style/Dashboard.css';

const ExpenseCostManagement: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="bg-inverse-surface dark:bg-on-background w-[280px] h-screen fixed left-0 top-0 shadow-sm shadow-md flex flex-col h-full py-lg px-md z-50">
<div className="mb-2xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">domain</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant/80">Enterprise Suite</p>
</div>
</div>
<ul className="flex-1 space-y-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                    Financials
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim bg-white/5 backdrop-blur-md border-r-4 border-primary-container hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="analytics" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>analytics</span>
                    Reports
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
<button className="mt-auto w-full bg-primary-container text-on-primary-container hover:bg-primary transition-colors py-sm rounded-lg font-title-md text-title-md flex justify-center items-center gap-xs">
<span className="material-symbols-outlined text-[20px]">add</span>
            New Report
        </button>
</nav>
 Main Content Wrapper 
<div className="flex-1 ml-[280px] min-h-screen flex flex-col relative">
{/* Background Ambient Design */}
<div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-fixed/20 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-fixed/20 rounded-full blur-3xl opacity-40 translate-y-1/3 -translate-x-1/4"></div>
</div>
{/* TopNavBar */}
<header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl docked full-width top-0 sticky border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-xl h-16 w-full z-40 focus-within:ring-2 focus-within:ring-primary-container transition-all">
<div className="flex items-center gap-lg">
<h2 className="font-headline-md text-headline-md font-black text-primary">CommSync Reports</h2>
</div>
<div className="flex items-center gap-lg">
<div className="relative group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">search</span>
<input className="pl-xl pr-md py-sm rounded-full border border-outline-variant/50 bg-surface-container-lowest focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md w-[300px] transition-all" placeholder="Search reports..." type="text" />
</div>
<div className="flex items-center gap-sm text-on-surface-variant">
<button className="p-xs rounded-full hover:bg-surface-variant hover:text-primary transition-all flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-xs rounded-full hover:bg-surface-variant hover:text-primary transition-all flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="p-xs rounded-full hover:bg-surface-variant hover:text-primary transition-all flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center ml-sm overflow-hidden">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate user with a neutral, bright background to match the light-mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlBgS7wbHjts7pqQVm0s38g-FtmTgac1eZtgX4VjrJReZOvdXAYnJNVnDvwfe5WtTYx9_rPQq_92BgDdxN726_6p0l1aonfaeGFPB845cbwVKbPLJ8SBekCE4U8gXBDKemqn9VZbj5l0lHHzSL7OYRMtyQIzPUSITc8wNkUyZoyMu-P7gs-O7PXJfpWLxdFb2frJE9YtD1MDI7FTI6qQfcYw5tLod5jMGIA8Ik8GYYG7H-tPOmMigr_weeJhbTu8q8vt2s22FrhBA" />
</div>
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-desktop z-10">
{/* Page Header */}
<div className="mb-xl flex justify-between items-end">
<div>
<h2 className="font-display-lg text-display-lg text-on-background">Expense &amp; Operational Costs</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Fiscal Quarter Q3 - September 2023</p>
</div>
<div className="flex gap-md">
<button className="px-md py-sm border border-outline-variant rounded-lg font-title-md text-title-md text-on-surface flex items-center gap-sm hover:bg-surface-variant transition-colors glass-card">
<span className="material-symbols-outlined text-[20px]">calendar_today</span>
                        Date Range
                    </button>
<button className="px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md flex items-center gap-sm hover:bg-primary transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]">download</span>
                        Export PDF
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="bento-grid">
{/* Total OPEX Card (Spans 4) */}
<div className="col-span-12 lg:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between">
<div>
<div className="flex items-center gap-sm text-on-surface-variant mb-md">
<span className="material-symbols-outlined text-tertiary">account_balance_wallet</span>
<h3 className="font-title-md text-title-md">Total Operating Expenses</h3>
</div>
<h4 className="font-display-lg text-display-lg text-on-background tracking-tight">$1.24M</h4>
<div className="flex items-center gap-xs mt-sm text-error">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-label-md text-label-md">+4.2% vs last month</span>
</div>
</div>
<div className="mt-xl pt-lg border-t border-outline-variant/20">
<div className="flex justify-between items-center mb-sm">
<span className="font-body-md text-body-md text-on-surface-variant">Budget Utilized</span>
<span className="font-title-md text-title-md text-on-surface">82%</span>
</div>
<div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-primary-container w-[82%] rounded-full"></div>
</div>
</div>
</div>
{/* Expense Trend Line (Spans 8) */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-lg flex flex-col">
<div className="flex justify-between items-center mb-lg">
<div className="flex items-center gap-sm text-on-surface-variant">
<span className="material-symbols-outlined text-primary">monitoring</span>
<h3 className="font-title-md text-title-md">Monthly Expense Trend</h3>
</div>
<div className="flex gap-sm">
<span className="px-sm py-xs bg-primary-fixed/30 text-on-primary-fixed rounded font-label-md text-label-md">Q3</span>
<span className="px-sm py-xs hover:bg-surface-variant rounded font-label-md text-label-md text-outline cursor-pointer transition-colors">YTD</span>
</div>
</div>
{/* Placeholder for Line Chart */}
<div className="flex-1 chart-placeholder rounded-lg flex items-center justify-center min-h-[200px] relative overflow-hidden">
<div className="absolute bottom-0 w-full flex items-end justify-around px-md h-[120px] opacity-60">
<div className="w-1/6 bg-primary-container/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-primary-container/30 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-primary-container/40 h-[50%] rounded-t-sm"></div>
<div className="w-1/6 bg-primary-container/60 h-[80%] rounded-t-sm"></div>
<div className="w-1/6 bg-primary-container/80 h-[95%] rounded-t-sm"></div>
</div>
<p className="font-body-md text-body-md text-outline z-10 bg-surface-container-lowest/80 px-sm py-xs rounded backdrop-blur">Interactive Line Chart Canvas</p>
</div>
</div>
{/* Cost Breakdown by Department (Spans 4) */}
<div className="col-span-12 lg:col-span-4 glass-card rounded-xl p-lg">
<div className="flex items-center gap-sm text-on-surface-variant mb-lg">
<span className="material-symbols-outlined text-secondary">pie_chart</span>
<h3 className="font-title-md text-title-md">Cost by Department</h3>
</div>
{/* Placeholder for Pie Chart & Legend */}
<div className="flex flex-col items-center justify-center gap-lg">
<div className="w-32 h-32 rounded-full border-[12px] border-surface-variant relative">
{/* CSS pure CSS pie chart placeholder representation */}
<div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-t-primary-container border-r-primary-container transform rotate-45"></div>
<div className="absolute inset-[-12px] rounded-full border-[12px] border-transparent border-b-secondary-container transform -rotate-12"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-title-md text-title-md text-on-surface">100%</span>
</div>
</div>
<div className="w-full space-y-sm">
<div className="flex justify-between items-center">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-primary-container"></div>
<span className="font-body-md text-body-md text-on-surface">R&amp;D / Engineering</span>
</div>
<span className="font-title-md text-title-md text-on-surface">45%</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-secondary-container"></div>
<span className="font-body-md text-body-md text-on-surface">Sales &amp; Marketing</span>
</div>
<span className="font-title-md text-title-md text-on-surface">30%</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-sm">
<div className="w-3 h-3 rounded-full bg-surface-variant"></div>
<span className="font-body-md text-body-md text-on-surface">Operations &amp; G&amp;A</span>
</div>
<span className="font-title-md text-title-md text-on-surface">25%</span>
</div>
</div>
</div>
</div>
{/* Recent Significant Expenses Ledger (Spans 8) */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-lg flex flex-col">
<div className="flex justify-between items-center mb-lg">
<div className="flex items-center gap-sm text-on-surface-variant">
<span className="material-symbols-outlined text-on-surface">receipt_long</span>
<h3 className="font-title-md text-title-md text-on-surface">Recent Significant Expenses</h3>
</div>
<button className="font-label-md text-label-md text-primary hover:underline">View All Ledger</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md">
<th className="py-sm font-medium">Date</th>
<th className="py-sm font-medium">Vendor / Description</th>
<th className="py-sm font-medium">Category</th>
<th className="py-sm font-medium text-right">Amount</th>
<th className="py-sm font-medium text-center">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/10 hover:bg-primary-fixed/5 transition-colors group">
<td className="py-md text-outline">Sep 28, 2023</td>
<td className="py-md font-medium">AWS Cloud Infrastructure<br /><span className="font-body-md text-[12px] text-outline font-normal">Monthly Server Hosting</span></td>
<td className="py-md"><span className="px-sm py-xs bg-surface-variant rounded-full text-label-md">IT &amp; Infra</span></td>
<td className="py-md text-right font-title-md">$45,200.00</td>
<td className="py-md text-center">
<span className="px-sm py-xs bg-primary-fixed text-on-primary-fixed rounded-full text-label-md">Cleared</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary-fixed/5 transition-colors group">
<td className="py-md text-outline">Sep 25, 2023</td>
<td className="py-md font-medium">Global Workspace Solutions<br /><span className="font-body-md text-[12px] text-outline font-normal">Q4 Office Lease</span></td>
<td className="py-md"><span className="px-sm py-xs bg-surface-variant rounded-full text-label-md">Facilities</span></td>
<td className="py-md text-right font-title-md">$120,500.00</td>
<td className="py-md text-center">
<span className="px-sm py-xs bg-primary-fixed text-on-primary-fixed rounded-full text-label-md">Cleared</span>
</td>
</tr>
<tr className="hover:bg-primary-fixed/5 transition-colors group">
<td className="py-md text-outline">Sep 22, 2023</td>
<td className="py-md font-medium">Apex Marketing Agency<br /><span className="font-body-md text-[12px] text-outline font-normal">Fall Campaign Retainer</span></td>
<td className="py-md"><span className="px-sm py-xs bg-surface-variant rounded-full text-label-md">Marketing</span></td>
<td className="py-md text-right font-title-md">$85,000.00</td>
<td className="py-md text-center">
<span className="px-sm py-xs bg-tertiary-fixed text-on-tertiary-fixed-variant rounded-full text-label-md">Pending</span>
</td>
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

export default ExpenseCostManagement;
