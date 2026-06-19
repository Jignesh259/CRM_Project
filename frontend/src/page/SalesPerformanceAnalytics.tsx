import React from 'react';
import '../style/Dashboard.css';

const SalesPerformanceAnalytics: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg px-md bg-inverse-surface dark:bg-on-background font-body-md text-body-md w-[280px] h-screen fixed left-0 top-0 shadow-sm shadow-md z-50">
<div className="mb-xl flex items-center gap-sm px-sm">
<div className="w-8 h-8 rounded-DEFAULT bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-white" data-icon="corporate_fare" style={{"fontVariationSettings": "'FILL' 1"}}>corporate_fare</span>
</div>
<div>
<div className="font-headline-md text-headline-md font-bold text-surface-container-lowest">CommSync</div>
<div className="text-surface-variant/70 font-label-md text-label-md uppercase tracking-wider">Enterprise Suite</div>
</div>
</div>
<div className="flex-1 space-y-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined text-surface-variant/70 group-hover:text-surface-variant transition-colors" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined text-surface-variant/70 group-hover:text-surface-variant transition-colors" data-icon="group">group</span>
                CRM
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined text-surface-variant/70 group-hover:text-surface-variant transition-colors" data-icon="inventory_2">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined text-surface-variant/70 group-hover:text-surface-variant transition-colors" data-icon="payments">payments</span>
                Financials
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim bg-white/5 backdrop-blur-md border-r-4 border-primary-container hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="analytics" style={{"fontVariationSettings": "'FILL' 1"}}>analytics</span>
                Reports
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150 group" href="#">
<span className="material-symbols-outlined text-surface-variant/70 group-hover:text-surface-variant transition-colors" data-icon="settings">settings</span>
                Settings
            </a>
</div>
<div className="mt-auto pt-lg">
<button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container py-sm px-md rounded-lg font-title-md text-title-md hover:bg-primary transition-colors duration-200 active:scale-95 shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                New Report
            </button>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
{/* TopNavBar */}
<header className="flex justify-between items-center px-xl h-16 w-full bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl docked full-width top-0 sticky border-b border-outline-variant/30 shadow-sm z-40">
<div className="font-title-md text-title-md text-primary dark:text-primary-fixed">
<h1 className="font-headline-md text-headline-md font-black text-primary">CommSync Reports</h1>
</div>
<div className="flex items-center gap-lg">
<div className="relative flex-1 max-w-md hidden lg:block focus-within:ring-2 focus-within:ring-primary-container rounded-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50" data-icon="search">search</span>
<input className="w-full bg-surface-container-low border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 rounded-full pl-10 pr-4 py-1.5 font-body-md text-body-md focus:outline-none focus:border-primary-container bg-surface-container transition-all" placeholder="Search reports..." type="text" />
</div>
<div className="flex items-center gap-sm">
<button className="p-2 rounded-full text-on-surface-variant font-medium hover:text-primary transition-all hover:bg-surface-variant/50">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant font-medium hover:text-primary transition-all hover:bg-surface-variant/50">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant font-medium hover:text-primary transition-all hover:bg-surface-variant/50">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
<div className="ml-sm w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 bg-surface-variant">
<img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNUaJdYVwI8uuC5GEsqYaGRInqdq-InuFYfyboLS4bYbMP1xldagzHI1Oa6gZz-sNFtdKTpBzfw8LsAkwNwp8KR20dns_eO0hI9dUe11xQeE6YUKzOPLwm7zM1df-ESGz357U00N5h0tvq5WqOW-BkDs0pZLLd9DJMksnZRUGTxJ_UN7V_4B8J23zR8yGatPKsyOIqt5jjwC7oJfkWkX2_lhoBlt3KDpH88JuY44_Wu08Km4fAALgP8ZtuYzLzacw2eEudKGgTAv8" />
</div>
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto space-y-gutter">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-sm">
<div>
<h2 className="font-headline-lg text-headline-lg md:font-headline-lg-mobile md:text-headline-lg-mobile text-on-background">Sales Performance Overview</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Q3 2023 Performance vs Target</p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-xs px-md py-sm rounded-DEFAULT border border-outline-variant/50 bg-surface hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_month">calendar_month</span>
                        This Quarter
                        <span className="material-symbols-outlined text-[18px]" data-icon="expand_more">expand_more</span>
</button>
<button className="flex items-center gap-xs px-md py-sm rounded-DEFAULT bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                        Export
                    </button>
</div>
</div>
{/* KPI Cards Bento */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Total Sales */}
<div className="glass-card rounded-xl p-lg relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="flex flex-col h-full z-10 relative">
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Total Revenue</div>
<div className="font-display-lg text-display-lg text-on-background my-sm">$2.4M</div>
<div className="flex items-center gap-xs mt-auto">
<span className="flex items-center text-xs font-medium text-[#118d57] bg-[#118d57]/10 px-1.5 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px] mr-0.5" data-icon="arrow_upward">arrow_upward</span>
                                12.5%
                            </span>
<span className="font-label-md text-label-md text-on-surface-variant">vs last quarter</span>
</div>
</div>
</div>
{/* Conversion Rate */}
<div className="glass-card rounded-xl p-lg relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-tertiary-container" data-icon="filter_alt">filter_alt</span>
</div>
<div className="flex flex-col h-full z-10 relative">
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Win Rate</div>
<div className="font-display-lg text-display-lg text-on-background my-sm">34.2%</div>
<div className="flex items-center gap-xs mt-auto">
<span className="flex items-center text-xs font-medium text-[#118d57] bg-[#118d57]/10 px-1.5 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px] mr-0.5" data-icon="arrow_upward">arrow_upward</span>
                                2.1%
                            </span>
<span className="font-label-md text-label-md text-on-surface-variant">vs last quarter</span>
</div>
</div>
</div>
{/* AOV */}
<div className="glass-card rounded-xl p-lg relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 p-lg opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-6xl text-secondary" data-icon="receipt_long">receipt_long</span>
</div>
<div className="flex flex-col h-full z-10 relative">
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Avg Deal Size</div>
<div className="font-display-lg text-display-lg text-on-background my-sm">$45k</div>
<div className="flex items-center gap-xs mt-auto">
<span className="flex items-center text-xs font-medium text-error bg-error/10 px-1.5 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[14px] mr-0.5" data-icon="arrow_downward">arrow_downward</span>
                                1.4%
                            </span>
<span className="font-label-md text-label-md text-on-surface-variant">vs last quarter</span>
</div>
</div>
</div>
</div>
{/* Charts Section */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Main Line Chart */}
<div className="lg:col-span-2 glass-card rounded-xl flex flex-col">
<div className="p-lg border-b border-outline-variant/20 flex justify-between items-center">
<div>
<h3 className="font-title-md text-title-md text-on-background">Revenue Trend</h3>
<p className="font-label-md text-label-md text-on-surface-variant">Daily sales volume (USD)</p>
</div>
<button className="p-1 rounded hover:bg-surface-variant/50 text-on-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="more_vert">more_vert</span>
</button>
</div>
<div className="p-lg flex-1 min-h-[300px] relative">
{/* Chart Placeholder - CSS Pattern for visual representation */}
<div className="absolute inset-lg flex items-end gap-2 border-l border-b border-outline-variant/30 pb-2 pl-2">
{/* Y Axis Labels */}
<div className="absolute -left-8 top-0 bottom-2 flex flex-col justify-between text-[10px] text-on-surface-variant font-medium items-end pr-2">
<span>100k</span>
<span>75k</span>
<span>50k</span>
<span>25k</span>
<span>0</span>
</div>
{/* Grid lines */}
<div className="absolute inset-x-2 inset-y-0 flex flex-col justify-between opacity-10 pointer-events-none">
<div className="w-full border-t border-on-surface-variant border-dashed"></div>
<div className="w-full border-t border-on-surface-variant border-dashed"></div>
<div className="w-full border-t border-on-surface-variant border-dashed"></div>
<div className="w-full border-t border-on-surface-variant border-dashed"></div>
<div className="w-full"></div>
</div>
{/* X Axis Labels */}
<div className="absolute -bottom-6 left-2 right-0 flex justify-between text-[10px] text-on-surface-variant font-medium">
<span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span><span>W8</span><span>W9</span><span>W10</span><span>W11</span><span>W12</span>
</div>
{/* Simulated Line Chart Area */}
<svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
{/* Target Line */}
<line opacity="0.5" stroke="var(--tw-colors-outline-variant)" strokeDasharray="2 2" strokeWidth="0.5" x1="0" x2="100" y1="40" y2="40"></line>
{/* Main Data Line */}
<path d="M0,80 L10,75 L20,60 L30,65 L40,45 L50,50 L60,30 L70,40 L80,20 L90,25 L100,10" fill="none" stroke="var(--tw-colors-primary)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
{/* Area under curve */}
<path d="M0,100 L0,80 L10,75 L20,60 L30,65 L40,45 L50,50 L60,30 L70,40 L80,20 L90,25 L100,10 L100,100 Z" fill="url(#blue-gradient)" opacity="0.2"></path>
<defs>
<linearGradient id="blue-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="var(--tw-colors-primary)"></stop>
<stop offset="100%" stop-color="var(--tw-colors-primary)" stop-opacity="0"></stop>
</linearGradient>
</defs>
{/* Data Points */}
<circle cx="40" cy="45" fill="white" r="2" stroke="var(--tw-colors-primary)" strokeWidth="1" vector-effect="non-scaling-stroke"></circle>
<circle cx="60" cy="30" fill="white" r="2" stroke="var(--tw-colors-primary)" strokeWidth="1" vector-effect="non-scaling-stroke"></circle>
<circle cx="80" cy="20" fill="white" r="2" stroke="var(--tw-colors-primary)" strokeWidth="1" vector-effect="non-scaling-stroke"></circle>
<circle cx="100" cy="10" fill="var(--tw-colors-primary)" r="2"></circle>
</svg>
</div>
</div>
</div>
{/* Secondary Chart / Breakdown */}
<div className="glass-card rounded-xl flex flex-col">
<div className="p-lg border-b border-outline-variant/20 flex justify-between items-center">
<div>
<h3 className="font-title-md text-title-md text-on-background">Sales by Region</h3>
</div>
</div>
<div className="p-lg flex-1 flex flex-col justify-center gap-md">
{/* Horizontal Bar Chart */}
<div className="space-y-sm">
<div className="flex items-center justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">North America</span>
<span className="font-medium">$1.2M</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "50%"}}></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex items-center justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">EMEA</span>
<span className="font-medium">$850k</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
<div className="bg-primary/70 h-full rounded-full" style={{"width": "35%"}}></div>
</div>
</div>
<div className="space-y-sm">
<div className="flex items-center justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface">APAC</span>
<span className="font-medium">$350k</span>
</div>
<div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
<div className="bg-primary/40 h-full rounded-full" style={{"width": "15%"}}></div>
</div>
</div>
</div>
</div>
</div>
{/* Detailed Data Table */}
<div className="glass-card rounded-xl overflow-hidden flex flex-col">
<div className="glass-header p-lg border-b border-outline-variant/20 flex justify-between items-center z-10 sticky top-0">
<h3 className="font-title-md text-title-md text-on-background">Top Performing Reps</h3>
<div className="flex gap-sm">
<div className="relative w-48 hidden sm:block focus-within:ring-2 focus-within:ring-primary-container rounded">
<span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant/50 text-[18px]" data-icon="search">search</span>
<input className="w-full bg-surface border-outline-variant/30 text-on-surface placeholder:text-on-surface-variant/50 rounded pl-8 pr-2 py-1 font-body-md text-body-md focus:outline-none focus:border-primary-container text-sm" placeholder="Filter reps..." type="text" />
</div>
<button className="p-1 rounded border border-outline-variant/30 hover:bg-surface-variant/50 text-on-surface-variant transition-colors flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/20 bg-surface-container-lowest/50">
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium">Rep Name</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium">Region</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right">Deals Closed</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right">Win Rate</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right">Total Revenue</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-sm px-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/20 flex-shrink-0">
<img alt="Profile of Sarah Jenkins" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQiJd0jderNYovJjHKh76vqs7GaiuLjHAYORWp1NkNUeun27-6TZInsOUklbhirwrtJgCDu8L8enZeO8pQswsUDSzxVVH8SOK3hwabkiyHn962SAQc1X-lBc7Eub6CcFr-jbMYHAbgvmsHoagO37KO8eCztSw6Aq77__FVlLvkFKCNah9ASfpGlyxB0VmtNA8T6C1NPipTH3BU-lqXqgQK1nMcG7PMD_15xdG_f9oDmDMgeMPc3XgqPGHfVB6cW_cwxDULP6CwC6s" />
</div>
<div>
<div className="font-medium text-on-background group-hover:text-primary transition-colors">Sarah Jenkins</div>
<div className="text-[12px] text-on-surface-variant">Senior AE</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface">North America</td>
<td className="py-sm px-lg text-right text-on-surface">24</td>
<td className="py-sm px-lg text-right">
<span className="inline-flex items-center gap-1 text-[#118d57]">
                                        42.5%
                                        <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
</span>
</td>
<td className="py-sm px-lg text-right font-medium text-on-background">$845,000</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-sm px-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/20 flex-shrink-0">
<div className="w-full h-full flex items-center justify-center bg-tertiary-container text-white font-medium text-xs">MR</div>
</div>
<div>
<div className="font-medium text-on-background group-hover:text-primary transition-colors">Michael Ross</div>
<div className="text-[12px] text-on-surface-variant">Enterprise AE</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface">EMEA</td>
<td className="py-sm px-lg text-right text-on-surface">18</td>
<td className="py-sm px-lg text-right">
<span className="inline-flex items-center gap-1 text-on-surface">
                                        38.0%
                                        <span className="material-symbols-outlined text-[14px] text-on-surface-variant" data-icon="trending_flat">trending_flat</span>
</span>
</td>
<td className="py-sm px-lg text-right font-medium text-on-background">$620,000</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-sm px-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/20 flex-shrink-0">
<img alt="Profile of Elena Rodriguez" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgAhS_d1GMjQnG6Ls8ns178lSUfxqTn76Yp8ETOgxdtu4owPxUuz5V_5HZppRtspbkLf5CLkbkMVx6vdwlAQgThhNWYp1YZ_akKO1defjIqosRKyNLrDqfwSfyDKyJdV8BEjGpNwhA900a5DI8qlYzW2QDc418CsYF0uN4RwOBMJL8Ka8vF2ZhBzkRLCoG4kWyMTH56KCV9ERiRl97K37z9q8XmW4nRJr6U0W8Pps4NvT_R6KrW3rHlX08KLFasZAcNzTHXLay0-c" />
</div>
<div>
<div className="font-medium text-on-background group-hover:text-primary transition-colors">Elena Rodriguez</div>
<div className="text-[12px] text-on-surface-variant">AE</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface">North America</td>
<td className="py-sm px-lg text-right text-on-surface">31</td>
<td className="py-sm px-lg text-right">
<span className="inline-flex items-center gap-1 text-error">
                                        31.2%
                                        <span className="material-symbols-outlined text-[14px]" data-icon="trending_down">trending_down</span>
</span>
</td>
<td className="py-sm px-lg text-right font-medium text-on-background">$415,000</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-sm px-lg">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/20 flex-shrink-0">
<div className="w-full h-full flex items-center justify-center bg-secondary text-white font-medium text-xs">DK</div>
</div>
<div>
<div className="font-medium text-on-background group-hover:text-primary transition-colors">David Kim</div>
<div className="text-[12px] text-on-surface-variant">APAC Lead</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface">APAC</td>
<td className="py-sm px-lg text-right text-on-surface">12</td>
<td className="py-sm px-lg text-right">
<span className="inline-flex items-center gap-1 text-[#118d57]">
                                        45.8%
                                        <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
</span>
</td>
<td className="py-sm px-lg text-right font-medium text-on-background">$310,000</td>
</tr>
</tbody>
</table>
</div>
<div className="p-sm border-t border-outline-variant/20 flex justify-end">
<button className="text-primary font-label-md text-label-md hover:underline px-md py-sm rounded hover:bg-primary/5 transition-colors">View All Reps</button>
</div>
</div>
</main>
</div>

    </>
  );
};

export default SalesPerformanceAnalytics;
