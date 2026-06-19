import React from 'react';
import '../style/Dashboard.css';

const ExecutiveDashboard: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component) 
<nav className="hidden md:flex flex-col h-screen py-md bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 w-[280px] shadow-lg shadow-xl transition-all duration-300 ease-in-out z-50">
<div className="px-lg pb-md flex items-center space-x-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="sync" style={{"fontVariationSettings": "'FILL' 1"}}>sync</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-bold text-surface-lowest">CommSync</h1>
<p className="font-label-md text-label-md text-outline">Enterprise ERP</p>
</div>
</div>
<div className="px-md mb-6">
<button className="w-full py-2 bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 hover:bg-primary-container/90 transition-colors shadow-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                New Record
            </button>
</div>
<div className="flex-1 overflow-y-auto px-2 space-y-1">
{/* Active Navigation */}
<a className="flex items-center space-x-3 px-4 py-3 bg-primary-container text-on-primary-container font-title-md rounded-lg transition-all duration-300 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
{/* Inactive Navigation */}
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>CRM</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Sales</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventory</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Finance</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span>Reports</span>
</a>
<a className="flex items-center space-x-3 px-4 py-3 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</div>
<div className="px-2 mt-auto pt-4 border-t border-outline-variant/10">
<a className="flex items-center space-x-3 px-4 py-2 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[18px]" data-icon="help">help</span>
<span>Support</span>
</a>
<a className="flex items-center space-x-3 px-4 py-2 text-on-surface-variant hover:text-on-primary hover:bg-primary-container/20 transition-colors rounded-lg mx-2 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined text-[18px]" data-icon="info">info</span>
<span>Help Center</span>
</a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-h-screen md:ml-[280px]">
{/* TopNavBar (Shared Component) */}
<header className="flex justify-between items-center h-16 px-lg z-40 fixed top-0 right-0 w-full md:w-[calc(100%-280px)] bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm backdrop-blur-md">
<div className="flex items-center gap-4">
<button className="md:hidden text-on-surface-variant p-2">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-10 pr-4 py-2 rounded-full border-outline-variant/50 bg-surface-container-low text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md w-64 transition-all" placeholder="Search..." type="text" />
</div>
</div>
<div className="flex items-center space-x-4">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-container-high" id="theme-toggle">
<span className="material-symbols-outlined" data-icon="contrast">contrast</span>
</button>
<button className="font-title-md text-title-md px-4 py-2 bg-primary-container/10 text-primary rounded-full hover:bg-primary-container/20 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="auto_awesome">auto_awesome</span>
                    AI Insights
                </button>
<img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant/30 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFBWWqsmaPmTYdcjtFPH45PGjxpnsfCEY1EAS3yzUKZoBywTlM8n2yfqDxQC1Fo5exAilzO80-i6jt2s3wiEYin9s-TaUiPqmCujpYDmmrfbaYeZuuB6OzbTJY11HVoLDIZ2alOLdHBORaUuGJsS-Wi82SsME55y97y7uK7SSOtlHW0bL0Po7JqXexE-zMV_CnKqV8gyHZlfhM34Zn6lxPdrgiQZQ_lDlB5etaXmuM5HwQCPhLT9OJjXzSBa8vC2y8q0rLjocQEpY" />
</div>
</header>
{/* Dashboard Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop mt-16 overflow-y-auto">
<div className="mb-lg">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Executive Overview</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Real-time performance metrics and insights.</p>
</div>
{/* KPIs Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
{/* KPI 1 */}
<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-primary-container/10 rounded-full blur-2xl group-hover:bg-primary-container/20 transition-all"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Revenue</p>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">$1,245,000</h3>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="attach_money">attach_money</span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="flex items-center text-tertiary-container font-medium bg-tertiary-container/10 px-2 py-1 rounded-full text-xs">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
                            +12.5%
                        </span>
<span className="text-on-surface-variant ml-2 text-xs">vs last month</span>
</div>
</div>
{/* KPI 2 */}
<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-secondary-container/10 rounded-full blur-2xl group-hover:bg-secondary-container/20 transition-all"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Leads</p>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">8,432</h3>
</div>
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="group_add">group_add</span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="flex items-center text-tertiary-container font-medium bg-tertiary-container/10 px-2 py-1 rounded-full text-xs">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_up">trending_up</span>
                            +5.2%
                        </span>
<span className="text-on-surface-variant ml-2 text-xs">vs last month</span>
</div>
</div>
{/* KPI 3 */}
<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary-container/10 rounded-full blur-2xl group-hover:bg-tertiary-container/20 transition-all"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Conversion Rate</p>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">24.8%</h3>
</div>
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="percent">percent</span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="flex items-center text-on-surface-variant font-medium bg-surface-variant px-2 py-1 rounded-full text-xs">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_flat">trending_flat</span>
                            0.0%
                        </span>
<span className="text-on-surface-variant ml-2 text-xs">vs last month</span>
</div>
</div>
{/* KPI 4 */}
<div className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-6 -top-6 w-24 h-24 bg-error-container/10 rounded-full blur-2xl group-hover:bg-error-container/20 transition-all"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Churn Rate</p>
<h3 className="font-headline-md text-headline-md text-on-surface mt-1">1.2%</h3>
</div>
<div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center text-error">
<span className="material-symbols-outlined" data-icon="person_remove">person_remove</span>
</div>
</div>
<div className="flex items-center text-sm">
<span className="flex items-center text-tertiary-container font-medium bg-tertiary-container/10 px-2 py-1 rounded-full text-xs">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="trending_down">trending_down</span>
                            -0.5%
                        </span>
<span className="text-on-surface-variant ml-2 text-xs">vs last month</span>
</div>
</div>
</div>
{/* Charts & Activity Area */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mb-xl">
{/* Main Chart (Spans 2 cols) */}
<div className="glass-panel rounded-2xl p-6 lg:col-span-2 flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-title-md text-title-md text-on-surface">Revenue &amp; Projections</h3>
<div className="flex space-x-2">
<button className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-medium">1M</button>
<button className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-medium shadow-sm">6M</button>
<button className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-medium">1Y</button>
</div>
</div>
<div className="chart-container flex-1">
<canvas id="revenueChart"></canvas>
</div>
</div>
{/* Recent Activity Timeline */}
<div className="glass-panel rounded-2xl p-6 flex flex-col h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-title-md text-title-md text-on-surface">Recent Activity</h3>
<button className="text-primary text-sm font-medium hover:underline">View All</button>
</div>
<div className="flex-1 overflow-y-auto pr-2 space-y-6">
{/* Timeline Item 1 */}
<div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant/30 last:before:hidden">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary-container/20 flex items-center justify-center border-2 border-surface">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
<div>
<p className="font-title-md text-sm text-on-surface">New Enterprise Contract</p>
<p className="text-xs text-on-surface-variant mt-0.5">Acme Corp signed for $120k/yr</p>
<p className="text-[10px] text-outline mt-1 uppercase">10 mins ago</p>
</div>
</div>
{/* Timeline Item 2 */}
<div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant/30 last:before:hidden">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-secondary-container/20 flex items-center justify-center border-2 border-surface">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
<div>
<p className="font-title-md text-sm text-on-surface">Lead Assigned</p>
<p className="text-xs text-on-surface-variant mt-0.5">Sarah J. assigned to TechStart lead</p>
<p className="text-[10px] text-outline mt-1 uppercase">2 hours ago</p>
</div>
</div>
{/* Timeline Item 3 */}
<div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant/30 last:before:hidden">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-tertiary-container/20 flex items-center justify-center border-2 border-surface">
<div className="w-2 h-2 rounded-full bg-tertiary"></div>
</div>
<div>
<p className="font-title-md text-sm text-on-surface">Invoice Paid</p>
<p className="text-xs text-on-surface-variant mt-0.5">INV-2023-089 paid by Globex</p>
<p className="text-[10px] text-outline mt-1 uppercase">5 hours ago</p>
</div>
</div>
{/* Timeline Item 4 */}
<div className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-outline-variant/30 last:before:hidden">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface">
<div className="w-2 h-2 rounded-full bg-outline"></div>
</div>
<div>
<p className="font-title-md text-sm text-on-surface">System Update</p>
<p className="text-xs text-on-surface-variant mt-0.5">ERP Core updated to v4.2</p>
<p className="text-[10px] text-outline mt-1 uppercase">1 day ago</p>
</div>
</div>
</div>
</div>
</div>
{/* Modern Data Table */}
<div className="glass-panel rounded-2xl overflow-hidden">
<div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface/50">
<h3 className="font-title-md text-title-md text-on-surface">Recent Transactions</h3>
<button className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest/50 text-xs uppercase text-on-surface-variant tracking-wider font-label-md">
<th className="px-6 py-4 font-medium border-b border-outline-variant/20">Transaction ID</th>
<th className="px-6 py-4 font-medium border-b border-outline-variant/20">Client</th>
<th className="px-6 py-4 font-medium border-b border-outline-variant/20">Amount</th>
<th className="px-6 py-4 font-medium border-b border-outline-variant/20">Date</th>
<th className="px-6 py-4 font-medium border-b border-outline-variant/20">Status</th>
<th className="px-6 py-4 font-medium border-b border-outline-variant/20 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="hover:bg-primary/5 transition-colors border-b border-outline-variant/10 last:border-0 group">
<td className="px-6 py-4 font-code-sm text-on-surface">#TRX-8924</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary font-bold text-xs">AC</div>
<span className="font-medium text-on-surface">Acme Corp</span>
</td>
<td className="px-6 py-4 text-on-surface font-medium">$12,450.00</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 24, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20">
                                        Completed
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors border-b border-outline-variant/10 last:border-0 group">
<td className="px-6 py-4 font-code-sm text-on-surface">#TRX-8923</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-bold text-xs">TS</div>
<span className="font-medium text-on-surface">TechStart Inc.</span>
</td>
<td className="px-6 py-4 text-on-surface font-medium">$4,200.00</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 23, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container/10 text-secondary border border-secondary/20">
                                        Pending
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors border-b border-outline-variant/10 last:border-0 group">
<td className="px-6 py-4 font-code-sm text-on-surface">#TRX-8922</td>
<td className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary font-bold text-xs">GL</div>
<span className="font-medium text-on-surface">Globex Corp</span>
</td>
<td className="px-6 py-4 text-on-surface font-medium">$8,900.50</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 21, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-container/10 text-error border border-error/20">
                                        Failed
                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 border-t border-outline-variant/20 bg-surface/50 flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Showing 1 to 3 of 45 entries</span>
<div className="flex space-x-1">
<button className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant disabled:opacity-50" disabled>Prev</button>
<button className="px-3 py-1 bg-primary text-on-primary rounded font-medium">1</button>
<button className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">2</button>
<button className="px-3 py-1 border border-outline-variant/30 rounded hover:bg-surface-container-high transition-colors text-on-surface-variant">Next</button>
</div>
</div>
</div>
</main>
</div>
 Chart.js Initialization 


    </>
  );
};

export default ExecutiveDashboard;
