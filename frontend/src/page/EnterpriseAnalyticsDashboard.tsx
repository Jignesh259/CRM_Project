import React from 'react';
import '../style/Dashboard.css';

const EnterpriseAnalyticsDashboard: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest text-primary dark:text-primary-fixed shadow-md flex flex-col py-lg px-md z-50">
<div className="mb-xl px-md">
<h1 className="font-headline-md text-headline-md text-surface-bright font-bold">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant/70 mt-1">Enterprise Suite</p>
</div>
<ul className="flex flex-col gap-sm flex-grow">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform bg-surface-variant/10" href="#">
<span className="material-symbols-outlined text-primary-fixed-dim" style={{"fontVariationSettings": "'FILL' 1"}}>dashboard</span>
<span className="font-body-md text-body-md text-primary-fixed-dim font-bold">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">groups</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">CRM</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">payments</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">Sales</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">inventory_2</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">account_balance</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">Finance</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">analytics</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">Reports</span>
</a>
</li>
<li className="mt-auto">
<a className="flex items-center gap-md px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-surface-variant/70">settings</span>
<span className="font-body-md text-body-md text-surface-variant/70 font-medium">Settings</span>
</a>
</li>
</ul>
</nav>
 TopNavBar 
<header className="fixed top-0 bg-surface/80 backdrop-blur-md dark:bg-inverse-surface/80 text-primary dark:text-primary-fixed border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full h-16 px-xl ml-[280px] max-w-[calc(100%-280px)] z-40 font-label-md text-label-md">
{/* Search on Left */}
<div className="flex items-center gap-sm bg-surface-container-low px-md py-sm rounded-full focus-within:ring-2 focus-within:ring-primary w-64 border border-outline-variant/50 transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-on-surface w-full p-0 font-body-md text-body-md outline-none" placeholder="Search analytics..." type="text" />
</div>
{/* Brand Logo (Hidden on mobile) */}
<div className="hidden md:block font-headline-md text-headline-md text-on-surface dark:text-on-primary-fixed-variant font-bold">
            CommSync
        </div>
{/* Trailing Actions */}
<div className="flex items-center gap-md">
<button className="hover:bg-surface-container-high transition-all p-sm rounded-full text-on-surface-variant">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="hover:bg-surface-container-high transition-all p-sm rounded-full text-on-surface-variant relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="w-9 h-9 rounded-full bg-surface-variant border border-outline-variant overflow-hidden cursor-pointer">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a business executive used as a user profile avatar. The individual is wearing a sharp suit and smiling subtly. The lighting is bright and modern, set against a blurred corporate office background. The image is crisp, high-resolution, and perfectly suited for a premium enterprise software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu-h2I4OPhDIj_dLUM45oCbl9YG-e4YSOeHfW6a9g5d9NB48qNgb3-5CrLjlWVKJJum4DaNjaiv9zzIhXOHnGwT3R3LV4KF71Oo2hKpBoa3xHz80qy5f8OKUNN1FJfwlTGc_mvGljMz9x2uVKIz6kxCLTkRnXKiUOnBosRcfhc5uwArhT2e3Rby1sI3b8t5RwJ_A_XfyaBzxpGW36EMDv9XCdnlZQc_1CK5ncM4V7L4SRnF-qzqeXF9zabYtBU1PAwic_9602DlDo" />
</div>
</div>
</header>
 Main Content Area 
<main className="ml-[280px] mt-16 p-lg lg:p-margin-desktop min-h-[calc(100vh-64px)]">
<div className="max-w-container-max mx-auto">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Analytics Overview</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Key performance indicators and organizational metrics.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-sm px-md py-sm bg-surface text-on-surface border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">download</span> CSV
                    </button>
<button className="flex items-center gap-sm px-md py-sm bg-primary text-on-primary rounded-lg hover:bg-surface-tint transition-colors shadow-sm font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> Export PDF
                    </button>
</div>
</div>
{/* Filter Bar */}
<div className="bg-surface border border-outline-variant/30 rounded-xl p-md mb-lg shadow-sm flex flex-wrap gap-md items-center">
<div className="flex items-center gap-sm border-r border-outline-variant/30 pr-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">calendar_today</span>
<select className="bg-transparent border-none text-on-surface font-body-md text-body-md focus:ring-0 cursor-pointer outline-none">
<option>Last 30 Days</option>
<option>This Quarter</option>
<option>Year to Date</option>
</select>
</div>
<div className="flex items-center gap-sm border-r border-outline-variant/30 pr-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">domain</span>
<select className="bg-transparent border-none text-on-surface font-body-md text-body-md focus:ring-0 cursor-pointer outline-none">
<option>All Departments</option>
<option>Sales</option>
<option>Marketing</option>
</select>
</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">public</span>
<select className="bg-transparent border-none text-on-surface font-body-md text-body-md focus:ring-0 cursor-pointer outline-none">
<option>Global</option>
<option>North America</option>
<option>EMEA</option>
<option>APAC</option>
</select>
</div>
</div>
{/* Charts Grid (Bento) */}
<div className="grid grid-cols-12 gap-lg mb-xl">
{/* Chart 1: Lead Conversion Funnel */}
<div className="col-span-12 lg:col-span-6 bg-surface border border-outline-variant/30 rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Lead Conversion Funnel</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 flex flex-col justify-center items-center gap-sm w-full">
<div className="w-[90%] h-12 bg-primary/20 rounded-md flex items-center justify-between px-md">
<span className="font-label-md text-label-md text-on-surface">Total Leads</span>
<span className="font-title-md text-title-md text-primary">12,450</span>
</div>
<div className="w-[70%] h-12 bg-primary/40 rounded-md flex items-center justify-between px-md">
<span className="font-label-md text-label-md text-on-surface">Qualified</span>
<span className="font-title-md text-title-md text-primary-container">8,230</span>
</div>
<div className="w-[50%] h-12 bg-primary/60 rounded-md flex items-center justify-between px-md text-on-primary">
<span className="font-label-md text-label-md">Proposals</span>
<span className="font-title-md text-title-md">4,110</span>
</div>
<div className="w-[30%] h-12 bg-primary rounded-md flex items-center justify-between px-md text-on-primary">
<span className="font-label-md text-label-md">Won</span>
<span className="font-title-md text-title-md">1,890</span>
</div>
</div>
</div>
{/* Chart 2: Sales by Region */}
<div className="col-span-12 lg:col-span-6 bg-surface border border-outline-variant/30 rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Sales by Region</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
</div>
<div className="h-64 flex justify-center items-center relative">
{/* CSS Pie Chart representation */}
<div className="w-48 h-48 rounded-full" style={{"background": "conic-gradient(#1976d2 0% 45%, #a5c8ff 45% 75%, #e0e2ea 75% 100%)"}}></div>
{/* Legend */}
<div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-sm">
<div className="flex items-center gap-xs"><div className="w-3 h-3 rounded-full bg-[#1976d2]"></div><span className="font-label-md text-label-md text-on-surface-variant">NA (45%)</span></div>
<div className="flex items-center gap-xs"><div className="w-3 h-3 rounded-full bg-[#a5c8ff]"></div><span className="font-label-md text-label-md text-on-surface-variant">EMEA (30%)</span></div>
<div className="flex items-center gap-xs"><div className="w-3 h-3 rounded-full bg-[#e0e2ea]"></div><span className="font-label-md text-label-md text-on-surface-variant">APAC (25%)</span></div>
</div>
</div>
</div>
{/* Chart 3: Monthly Growth Rate */}
<div className="col-span-12 lg:col-span-8 bg-surface border border-outline-variant/30 rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Monthly Revenue Growth</h3>
<div className="flex gap-sm">
<span className="px-sm py-xs bg-surface-container-low rounded text-on-surface font-label-md text-label-md border border-outline-variant/30">Rev</span>
<span className="px-sm py-xs bg-primary/10 text-primary rounded font-label-md text-label-md">Profit</span>
</div>
</div>
<div className="h-56 relative w-full flex items-end justify-between px-md pb-md mt-md border-b border-l border-outline-variant/30">
{/* Abstract Area Chart representation using flex bars */}
<div className="w-8 h-[20%] bg-primary/40 rounded-t-sm relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-surface px-sm py-xs text-[10px] rounded">12k</div></div>
<div className="w-8 h-[35%] bg-primary/40 rounded-t-sm relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-surface px-sm py-xs text-[10px] rounded">18k</div></div>
<div className="w-8 h-[25%] bg-primary/40 rounded-t-sm"></div>
<div className="w-8 h-[50%] bg-primary/60 rounded-t-sm relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-surface px-sm py-xs text-[10px] rounded">32k</div></div>
<div className="w-8 h-[45%] bg-primary/60 rounded-t-sm"></div>
<div className="w-8 h-[70%] bg-primary/80 rounded-t-sm relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-surface px-sm py-xs text-[10px] rounded">48k</div></div>
<div className="w-8 h-[85%] bg-primary rounded-t-sm relative group"><div className="absolute -top-8 left-1/2 -translate-x-1/2 hidden group-hover:block bg-inverse-surface text-surface px-sm py-xs text-[10px] rounded">55k</div></div>
</div>
<div className="flex justify-between px-md mt-sm font-label-md text-label-md text-on-surface-variant">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
</div>
</div>
{/* Chart 4: CAC vs LTV */}
<div className="col-span-12 lg:col-span-4 bg-surface border border-outline-variant/30 rounded-xl p-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] transition-shadow">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">CAC vs LTV</h3>
</div>
<div className="h-64 flex flex-col justify-center gap-lg">
<div>
<div className="flex justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface-variant">Customer Acquisition Cost</span>
<span className="font-title-md text-title-md text-on-surface">$450</span>
</div>
<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary w-[30%]"></div>
</div>
</div>
<div>
<div className="flex justify-between font-label-md text-label-md mb-xs">
<span className="text-on-surface-variant">Lifetime Value</span>
<span className="font-title-md text-title-md text-primary">$3,200</span>
</div>
<div className="w-full h-3 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary w-[85%]"></div>
</div>
</div>
<div className="mt-sm p-sm bg-surface-container-low rounded-lg border border-outline-variant/20 flex items-start gap-sm">
<span className="material-symbols-outlined text-secondary text-[20px]">insights</span>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">LTV to CAC ratio is currently <strong className="text-on-surface">7.1x</strong>, indicating highly efficient growth.</p>
</div>
</div>
</div>
</div>
{/* Performance Metrics Table */}
<div className="col-span-12 bg-surface border border-outline-variant/30 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 bg-surface-bright/50 backdrop-blur-md">
<h3 className="font-title-md text-title-md text-on-surface">Performance Metrics</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-lowest font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30">
<th className="p-md font-medium">Metric Name</th>
<th className="p-md font-medium">Current Period</th>
<th className="p-md font-medium">Previous Period</th>
<th className="p-md font-medium">YoY Change</th>
<th className="p-md font-medium">Trend (7d)</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors">
<td className="p-md font-medium">Total Revenue</td>
<td className="p-md">$1.24M</td>
<td className="p-md text-on-surface-variant">$1.10M</td>
<td className="p-md text-[#1b5e20] flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">trending_up</span> +12.4%</td>
<td className="p-md">
<div className="w-24 h-6 bg-surface-container-low rounded flex items-end px-1 gap-[2px] opacity-70">
<div className="w-full h-[40%] bg-primary rounded-t-sm"></div><div className="w-full h-[50%] bg-primary rounded-t-sm"></div><div className="w-full h-[30%] bg-primary rounded-t-sm"></div><div className="w-full h-[60%] bg-primary rounded-t-sm"></div><div className="w-full h-[80%] bg-primary rounded-t-sm"></div>
</div>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors">
<td className="p-md font-medium">Active Users</td>
<td className="p-md">45,200</td>
<td className="p-md text-on-surface-variant">42,800</td>
<td className="p-md text-[#1b5e20] flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">trending_up</span> +5.6%</td>
<td className="p-md">
<div className="w-24 h-6 bg-surface-container-low rounded flex items-end px-1 gap-[2px] opacity-70">
<div className="w-full h-[60%] bg-secondary rounded-t-sm"></div><div className="w-full h-[65%] bg-secondary rounded-t-sm"></div><div className="w-full h-[70%] bg-secondary rounded-t-sm"></div><div className="w-full h-[75%] bg-secondary rounded-t-sm"></div><div className="w-full h-[85%] bg-secondary rounded-t-sm"></div>
</div>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors">
<td className="p-md font-medium">Churn Rate</td>
<td className="p-md">2.4%</td>
<td className="p-md text-on-surface-variant">2.1%</td>
<td className="p-md text-error flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">trending_down</span> +0.3%</td>
<td className="p-md">
<div className="w-24 h-6 bg-surface-container-low rounded flex items-end px-1 gap-[2px] opacity-70">
<div className="w-full h-[20%] bg-error rounded-t-sm"></div><div className="w-full h-[25%] bg-error rounded-t-sm"></div><div className="w-full h-[20%] bg-error rounded-t-sm"></div><div className="w-full h-[35%] bg-error rounded-t-sm"></div><div className="w-full h-[40%] bg-error rounded-t-sm"></div>
</div>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-md font-medium">Avg Deal Size</td>
<td className="p-md">$14,500</td>
<td className="p-md text-on-surface-variant">$13,200</td>
<td className="p-md text-[#1b5e20] flex items-center gap-xs"><span className="material-symbols-outlined text-[16px]">trending_up</span> +9.8%</td>
<td className="p-md">
<div className="w-24 h-6 bg-surface-container-low rounded flex items-end px-1 gap-[2px] opacity-70">
<div className="w-full h-[50%] bg-primary rounded-t-sm"></div><div className="w-full h-[40%] bg-primary rounded-t-sm"></div><div className="w-full h-[60%] bg-primary rounded-t-sm"></div><div className="w-full h-[70%] bg-primary rounded-t-sm"></div><div className="w-full h-[90%] bg-primary rounded-t-sm"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

    </>
  );
};

export default EnterpriseAnalyticsDashboard;
