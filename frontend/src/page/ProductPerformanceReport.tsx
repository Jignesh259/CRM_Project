import React from 'react';
import '../style/Dashboard.css';

const ProductPerformanceReport: React.FC = () => {
  return (
    <>
      
 SideNavBar (Desktop) 
<nav className="hidden md:flex flex-col h-full py-lg px-md bg-inverse-surface text-primary-container font-body-md text-body-md w-[280px] h-screen fixed left-0 top-0 shadow-md shadow-sm z-50">
<div className="flex items-center gap-sm mb-2xl px-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md font-bold">
                C
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">CommSync</h1>
<p className="font-label-md text-label-md text-primary-fixed-dim opacity-80">Enterprise Suite</p>
</div>
</div>
<button className="mb-lg w-full bg-primary-container hover:bg-primary text-on-primary-container h-10 rounded-lg flex items-center justify-center gap-sm font-title-md text-title-md transition-colors shadow-sm">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
            New Report
        </button>
<ul className="flex flex-col gap-xs flex-grow">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary-fixed-dim transition-colors">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary-fixed-dim transition-colors">group</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary-fixed-dim transition-colors">inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary-fixed-dim transition-colors">payments</span>
                    Financials
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim bg-white/5 backdrop-blur-md border-r-4 border-primary-container hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>analytics</span>
                    Reports
                </a>
</li>
<li className="mt-auto pt-lg border-t border-white/10">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary-fixed-dim transition-colors">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-lg px-sm flex items-center gap-sm">
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline/30" data-alt="A small circular avatar placeholder image showing a professional headshot, used in the bottom left corner of a dark-themed enterprise sidebar navigation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMnpNJEx0AXDO5nFQdHVSN_WcWyElq-0E3IjaxjFnvGPIr5XesNCWQp-XZYG9GMafzwNxDhN0m0NmHDbFPyc7ULwNvj8l5AjjCKhrE1wGcorG-Djv44VxAKBre_PoubvCFxeoflAAQUax3_EKeN29y3VnxmjiehncAjc8wM_kyHGeImgJslorwTh_NnGuM1HIk1zG1I2KojO4Upj9iWKQ7tVopyxmJhXYpBVt-fEFulGkGyNDg1bMGrVBFPZ0VGbY02zUbs_Ed2Uo" />
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-surface-container-lowest truncate">Admin User</p>
</div>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 md:ml-[280px] flex flex-col min-h-screen bg-background relative">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-xl text-primary font-title-md text-title-md docked full-width top-0 sticky border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-xl h-16 w-full z-40 focus-within:ring-2 focus-within:ring-primary-container">
<div className="flex items-center gap-lg w-1/3">
<div className="relative w-full max-w-md hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant/50 text-on-surface rounded-lg pl-10 pr-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none font-body-md" placeholder="Search reports..." type="text" />
</div>
{/* Mobile Menu Button */}
<button className="md:hidden text-on-surface-variant p-2 rounded-md hover:bg-surface-variant/50">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<div className="flex-1 flex justify-center">
<span className="font-headline-md text-headline-md font-black text-primary truncate hidden md:block">CommSync Reports</span>
</div>
<div className="flex items-center justify-end gap-sm w-1/3">
<button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-variant/50 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-variant/50 hidden sm:block">
<span className="material-symbols-outlined">help_outline</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-all rounded-full hover:bg-surface-variant/50 hidden sm:block">
<span className="material-symbols-outlined">dark_mode</span>
</button>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-xl gap-4">
<div>
<h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background mb-1">Product Performance</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Q3 2023 Analysis &amp; Inventory Metrics</p>
</div>
<div className="flex gap-sm">
<button className="px-4 py-2 border border-outline-variant text-on-surface bg-surface-container-lowest rounded-lg font-title-md text-body-md hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        This Quarter
                    </button>
<button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-title-md text-body-md hover:bg-primary transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
</div>
</div>
{/* Top KPIs Bento */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-xl">
{/* KPI 1 */}
<div className="data-card p-lg flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/5 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Revenue</p>
<span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">attach_money</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg text-on-background mb-1">$2.4M</h3>
<div className="flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">trending_up</span>
<span className="text-tertiary font-medium">+12.5%</span>
<span className="text-outline text-xs ml-1">vs last quarter</span>
</div>
</div>
</div>
{/* KPI 2 */}
<div className="data-card p-lg flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/5 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Units Sold</p>
<span className="material-symbols-outlined text-secondary p-2 bg-secondary/10 rounded-lg">shopping_cart</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg text-on-background mb-1">14,205</h3>
<div className="flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px] text-tertiary">trending_up</span>
<span className="text-tertiary font-medium">+8.2%</span>
<span className="text-outline text-xs ml-1">vs last quarter</span>
</div>
</div>
</div>
{/* KPI 3 */}
<div className="data-card p-lg flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-tertiary-container/5 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Turnover Ratio</p>
<span className="material-symbols-outlined text-tertiary-container p-2 bg-tertiary-container/10 rounded-lg">sync</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg text-on-background mb-1">4.2x</h3>
<div className="flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-[16px] text-error">trending_down</span>
<span className="text-error font-medium">-0.5x</span>
<span className="text-outline text-xs ml-1">vs last quarter</span>
</div>
</div>
</div>
{/* KPI 4 */}
<div className="data-card p-lg flex flex-col justify-between h-full relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Products</p>
<span className="material-symbols-outlined text-primary-fixed-variant p-2 bg-primary-fixed/30 rounded-lg">category</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg text-on-background mb-1">342</h3>
<div className="flex items-center gap-1 text-sm">
<span className="text-outline-variant font-medium">Stable</span>
<span className="text-outline text-xs ml-1">No change</span>
</div>
</div>
</div>
</div>
{/* Main Charts Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-xl">
{/* Large Chart: Category Growth */}
<div className="data-card lg:col-span-2 p-0 flex flex-col h-[400px]">
<div className="p-lg border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-lowest/50 backdrop-blur-sm rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-background">Product Category Growth</h3>
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="p-lg flex-1 relative w-full h-full">
<canvas id="categoryGrowthChart"></canvas>
</div>
</div>
{/* Best Sellers List */}
<div className="data-card flex flex-col h-[400px]">
<div className="p-lg border-b border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-sm rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-background">Top Sellers (Rev)</h3>
</div>
<div className="p-0 overflow-y-auto flex-1">
<ul className="flex flex-col">
<li className="flex items-center justify-between p-md border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-primary-container/10 flex items-center justify-center text-primary-container font-bold">1</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Enterprise Router X-1</p>
<p className="font-label-md text-label-md text-on-surface-variant">Networking</p>
</div>
</div>
<div className="text-right">
<p className="font-body-md text-body-md font-medium text-on-background">$450k</p>
<p className="font-label-md text-label-md text-tertiary">+12%</p>
</div>
</li>
<li className="flex items-center justify-between p-md border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-outline-variant/20 flex items-center justify-center text-on-surface-variant font-bold">2</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Cloud Switch Pro</p>
<p className="font-label-md text-label-md text-on-surface-variant">Networking</p>
</div>
</div>
<div className="text-right">
<p className="font-body-md text-body-md font-medium text-on-background">$380k</p>
<p className="font-label-md text-label-md text-tertiary">+8%</p>
</div>
</li>
<li className="flex items-center justify-between p-md border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-outline-variant/20 flex items-center justify-center text-on-surface-variant font-bold">3</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">VoIP Base Station</p>
<p className="font-label-md text-label-md text-on-surface-variant">Telecom</p>
</div>
</div>
<div className="text-right">
<p className="font-body-md text-body-md font-medium text-on-background">$210k</p>
<p className="font-label-md text-label-md text-tertiary">+15%</p>
</div>
</li>
<li className="flex items-center justify-between p-md border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded bg-outline-variant/10 flex items-center justify-center text-on-surface-variant font-bold">4</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Fiber Optic Patch 5m</p>
<p className="font-label-md text-label-md text-on-surface-variant">Cables</p>
</div>
</div>
<div className="text-right">
<p className="font-body-md text-body-md font-medium text-on-background">$185k</p>
<p className="font-label-md text-label-md text-error">-2%</p>
</div>
</li>
</ul>
</div>
</div>
</div>
{/* Detailed Grid */}
<div className="data-card overflow-hidden">
<div className="p-lg border-b border-outline-variant/20 bg-surface-container-lowest/50 backdrop-blur-sm flex justify-between items-center flex-wrap gap-4">
<h3 className="font-title-md text-title-md text-on-background">Detailed Performance Metrics</h3>
<div className="flex gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">filter_list</span>
<select className="pl-8 pr-8 py-1.5 bg-surface-container-low border border-outline-variant/50 rounded-md text-sm font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none appearance-none">
<option>All Categories</option>
<option>Networking</option>
<option>Telecom</option>
</select>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/20 bg-surface-container-low/50">
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold">Product ID</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold">Name</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold">Category</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold text-right">Unit Sales</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold text-right">Revenue</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold text-right">Turnover Ratio</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant font-semibold text-center">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant/10 table-row-hover transition-colors">
<td className="p-md text-outline font-code-sm text-code-sm">NW-1042</td>
<td className="p-md text-on-background font-medium">Enterprise Router X-1</td>
<td className="p-md text-on-surface-variant">Networking</td>
<td className="p-md text-right text-on-background">1,240</td>
<td className="p-md text-right text-on-background font-medium">$450,000</td>
<td className="p-md text-right">
<span className="inline-flex items-center gap-1 text-tertiary">
                                        5.2 <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
</span>
</td>
<td className="p-md text-center">
<span className="inline-block px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-medium">High Demand</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 table-row-hover transition-colors">
<td className="p-md text-outline font-code-sm text-code-sm">NW-2099</td>
<td className="p-md text-on-background font-medium">Cloud Switch Pro</td>
<td className="p-md text-on-surface-variant">Networking</td>
<td className="p-md text-right text-on-background">950</td>
<td className="p-md text-right text-on-background font-medium">$380,000</td>
<td className="p-md text-right">
<span className="inline-flex items-center gap-1 text-tertiary">
                                        4.8 <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
</span>
</td>
<td className="p-md text-center">
<span className="inline-block px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-medium">High Demand</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 table-row-hover transition-colors">
<td className="p-md text-outline font-code-sm text-code-sm">TC-045</td>
<td className="p-md text-on-background font-medium">VoIP Base Station</td>
<td className="p-md text-on-surface-variant">Telecom</td>
<td className="p-md text-right text-on-background">2,100</td>
<td className="p-md text-right text-on-background font-medium">$210,000</td>
<td className="p-md text-right">
<span className="inline-flex items-center gap-1 text-on-surface-variant">
                                        3.5 <span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
</span>
</td>
<td className="p-md text-center">
<span className="inline-block px-2 py-1 rounded-full bg-outline-variant/30 text-on-surface-variant text-xs font-medium">Stable</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 table-row-hover transition-colors">
<td className="p-md text-outline font-code-sm text-code-sm">CB-992</td>
<td className="p-md text-on-background font-medium">Fiber Optic Patch 5m</td>
<td className="p-md text-on-surface-variant">Cables</td>
<td className="p-md text-right text-on-background">8,500</td>
<td className="p-md text-right text-on-background font-medium">$185,000</td>
<td className="p-md text-right">
<span className="inline-flex items-center gap-1 text-error">
                                        1.8 <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
</span>
</td>
<td className="p-md text-center">
<span className="inline-block px-2 py-1 rounded-full bg-error/10 text-error text-xs font-medium">Overstocked</span>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="p-md text-outline font-code-sm text-code-sm">SR-102</td>
<td className="p-md text-on-background font-medium">Rack Server 2U</td>
<td className="p-md text-on-surface-variant">Hardware</td>
<td className="p-md text-right text-on-background">120</td>
<td className="p-md text-right text-on-background font-medium">$150,000</td>
<td className="p-md text-right">
<span className="inline-flex items-center gap-1 text-on-surface-variant">
                                        2.1 <span className="material-symbols-outlined text-[14px]">horizontal_rule</span>
</span>
</td>
<td className="p-md text-center">
<span className="inline-block px-2 py-1 rounded-full bg-outline-variant/30 text-on-surface-variant text-xs font-medium">Stable</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-sm border-t border-outline-variant/20 flex justify-between items-center text-sm text-on-surface-variant bg-surface-container-lowest">
<span className="pl-2">Showing 1-5 of 342 products</span>
<div className="flex gap-1">
<button className="p-1 rounded hover:bg-surface-variant disabled:opacity-50" disabled><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
<button className="p-1 rounded hover:bg-surface-variant"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
</div>
</main>
</div>
 Chart.js Initialization Script 


    </>
  );
};

export default ProductPerformanceReport;
