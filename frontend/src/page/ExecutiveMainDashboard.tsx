import React from 'react';
import '../style/Dashboard.css';

const ExecutiveMainDashboard: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg px-md bg-inverse-surface dark:bg-surface-container-lowest text-primary dark:text-primary-fixed font-body-md text-body-md fixed left-0 top-0 h-full w-[280px] shadow-md z-20">
<div className="mb-xl flex items-center gap-sm px-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xl">C</div>
<div>
<h1 className="font-headline-md text-headline-md text-surface-bright font-bold">CommSync</h1>
<p className="text-surface-variant/70 text-xs">Enterprise Suite</p>
</div>
</div>
<ul className="flex flex-col gap-sm flex-grow">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg bg-surface-variant/10 text-primary-fixed-dim font-bold transition-transform scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">groups</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">payments</span>
                    Sales
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">account_balance</span>
                    Finance
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">analytics</span>
                    Reports
                </a>
</li>
</ul>
<div className="mt-auto">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-w-0 md:ml-[280px]">
{/* TopNavBar */}
<header className="flex justify-between items-center w-full h-16 px-xl bg-surface/80 backdrop-blur-md dark:bg-inverse-surface/80 text-primary dark:text-primary-fixed font-label-md text-label-md sticky top-0 z-10 border-b border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-lg flex-1">
<div className="hidden md:block font-headline-md text-headline-md text-on-surface dark:text-on-primary-fixed-variant font-bold">CommSync</div>
<div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-primary rounded-lg transition-all">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg text-body-md focus:outline-none focus:border-primary bg-transparent text-on-surface" placeholder="Search across ERP..." type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<button className="p-2 rounded-full text-on-surface-variant font-medium hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="p-2 rounded-full text-on-surface-variant font-medium hover:bg-surface-container-high transition-all relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant/30 ml-sm cursor-pointer hover:ring-2 hover:ring-primary transition-all">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Professional headshot of a young male executive in a well-lit modern office setting. The lighting is soft and natural, creating a bright, high-key light mode aesthetic. The color palette features neutral grays and crisp whites with subtle blue accents, aligning with a premium corporate design system. The mood is confident and welcoming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF0A_yGau-y79EDIyFO2vPRd5uomVRsTmIpEj6BkVdTQ8yVm8-7MsTxE6P3D6N51Qb4VQYp1uxDa9D-j0PnLQA7HQ37q1-R6scN0yMq6EioK69btdCADtH-0foSpgIO4U9l8L-xTEmBYtjmFc9Bv2nHyPBR9pc3UlepMO-Jy8sPg-FakGeaawovB4TSYNgoIT5SjIwrmAYoeZ820Hu2buNkSCxVdj64i5JbeFnuYmNtm8XSdgKvLQXFef6G3BkAr01Y6MU9A2rTrA" />
</div>
</div>
</header>
{/* Main Dashboard Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
{/* Hero Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-lg gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Welcome back, Alex</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Here's what's happening across your enterprise today.</p>
</div>
<div className="flex items-center gap-sm bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-4 py-2 shadow-sm glass-card">
<span className="material-symbols-outlined text-outline">calendar_today</span>
<span className="font-label-md text-label-md text-on-surface">Oct 24 - Oct 31, 2023</span>
<span className="material-symbols-outlined text-outline text-sm">expand_more</span>
</div>
</div>
{/* KPI Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-xl">
{/* Revenue Card */}
<div className="glass-card rounded-xl p-lg hover:shadow-lg transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Revenue</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">$1.2M</h3>
</div>
<div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="flex items-center text-surface-tint text-sm font-medium bg-surface-tint/10 px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +12%
                        </span>
<span className="font-label-md text-label-md text-outline">vs last month</span>
</div>
</div>
{/* Leads Card */}
<div className="glass-card rounded-xl p-lg hover:shadow-lg transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">New Leads</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">854</h3>
</div>
<div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">group_add</span>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="flex items-center text-surface-tint text-sm font-medium bg-surface-tint/10 px-2 py-0.5 rounded-full">
<span className="material-symbols-outlined text-[16px]">trending_up</span> +5%
                        </span>
<span className="font-label-md text-label-md text-outline">vs last month</span>
</div>
</div>
{/* Projects Card */}
<div className="glass-card rounded-xl p-lg hover:shadow-lg transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-tertiary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Projects</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">42</h3>
</div>
<div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined">assignment</span>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="font-label-md text-label-md text-outline">Across 12 departments</span>
</div>
</div>
{/* CSAT Card */}
<div className="glass-card rounded-xl p-lg hover:shadow-lg transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-surface-tint/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Customer Satisfaction</p>
<h3 className="font-headline-lg text-headline-lg text-on-surface mt-1">98%</h3>
</div>
<div className="w-10 h-10 rounded-full bg-surface-tint/20 flex items-center justify-center text-surface-tint">
<span className="material-symbols-outlined">sentiment_satisfied</span>
</div>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5 mt-2">
<div className="bg-surface-tint h-1.5 rounded-full" style={{"width": "98%"}}></div>
</div>
</div>
</div>
{/* Bento Layout Main Area */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-lg mb-xl">
{/* Main Chart Area */}
<div className="xl:col-span-2 glass-card rounded-xl p-lg flex flex-col">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Revenue vs Expenses</h3>
<div className="flex gap-sm">
<button className="px-3 py-1 rounded-md text-sm font-medium bg-surface-container-high text-on-surface">1M</button>
<button className="px-3 py-1 rounded-md text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">3M</button>
<button className="px-3 py-1 rounded-md text-sm font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors">1Y</button>
</div>
</div>
<div className="flex-1 relative min-h-[300px] w-full mt-4 rounded-lg overflow-hidden border border-outline-variant/20 chart-gradient">
{/* Mock Chart using SVG */}
<svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
{/* Grid lines */}
<line stroke="rgba(113, 119, 131, 0.1)" strokeWidth="0.5" x1="0" x2="100" y1="25" y2="25"></line>
<line stroke="rgba(113, 119, 131, 0.1)" strokeWidth="0.5" x1="0" x2="100" y1="50" y2="50"></line>
<line stroke="rgba(113, 119, 131, 0.1)" strokeWidth="0.5" x1="0" x2="100" y1="75" y2="75"></line>
{/* Revenue Line */}
<path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,10" fill="none" stroke="#005dac" strokeWidth="2"></path>
{/* Expenses Line */}
<path d="M0,90 Q10,85 20,80 T40,70 T60,65 T80,55 T100,60" fill="none" stroke="#ba1a1a" strokeDasharray="2,2" strokeWidth="2"></path>
</svg>
<div className="absolute bottom-2 left-4 right-4 flex justify-between text-xs text-outline font-label-md">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
</div>
</div>
{/* Sidebar Area */}
<div className="flex flex-col gap-lg">
{/* Quick Actions */}
<div className="glass-card rounded-xl p-lg">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Quick Actions</h3>
<div className="flex flex-col gap-sm">
<button className="flex items-center justify-between w-full p-3 rounded-lg border border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all group">
<div className="flex items-center gap-md text-on-surface">
<span className="material-symbols-outlined text-primary">person_add</span>
<span className="font-body-md text-body-md font-medium">New Lead</span>
</div>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</button>
<button className="flex items-center justify-between w-full p-3 rounded-lg border border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all group">
<div className="flex items-center gap-md text-on-surface">
<span className="material-symbols-outlined text-tertiary">receipt_long</span>
<span className="font-body-md text-body-md font-medium">Create Invoice</span>
</div>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</button>
<button className="flex items-center justify-between w-full p-3 rounded-lg border border-outline-variant/30 hover:border-primary hover:bg-primary/5 transition-all group">
<div className="flex items-center gap-md text-on-surface">
<span className="material-symbols-outlined text-secondary">inventory_2</span>
<span className="font-body-md text-body-md font-medium">Add Product</span>
</div>
<span className="material-symbols-outlined text-outline opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
</button>
</div>
</div>
{/* Recent Notifications */}
<div className="glass-card rounded-xl p-lg flex-1">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Recent Activity</h3>
<div className="flex flex-col gap-4">
<div className="flex gap-3 relative">
<div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0 text-primary z-10 bg-surface">
<span className="material-symbols-outlined text-sm">mail</span>
</div>
<div className="absolute left-4 top-8 bottom-[-16px] w-px bg-outline-variant/30"></div>
<div>
<p className="font-body-md text-body-md text-on-surface"><span className="font-semibold">Sarah Jenkins</span> opened Invoice #1042</p>
<p className="font-label-md text-label-md text-outline mt-0.5">10 mins ago</p>
</div>
</div>
<div className="flex gap-3 relative">
<div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 text-secondary z-10 bg-surface">
<span className="material-symbols-outlined text-sm">check_circle</span>
</div>
<div className="absolute left-4 top-8 bottom-[-16px] w-px bg-outline-variant/30"></div>
<div>
<p className="font-body-md text-body-md text-on-surface">Project <span className="font-semibold">Titan</span> phase 1 approved</p>
<p className="font-label-md text-label-md text-outline mt-0.5">2 hours ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-error-container/20 flex items-center justify-center shrink-0 text-error z-10 bg-surface">
<span className="material-symbols-outlined text-sm">warning</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface">Server load threshold exceeded</p>
<p className="font-label-md text-label-md text-outline mt-0.5">5 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Bottom Section Table */}
<div className="glass-card rounded-xl overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface/50">
<h3 className="font-title-md text-title-md text-on-surface">High Priority Leads</h3>
<button className="text-primary font-label-md text-label-md font-medium hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/30">
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium">Company</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium">Contact</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium">Est. Value</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium">Status</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium text-right">Action</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="py-4 px-lg font-medium text-on-surface">Acme Corp</td>
<td className="py-4 px-lg text-on-surface-variant">john.doe@acme.com</td>
<td className="py-4 px-lg text-on-surface">$125,000</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary/10 text-tertiary">
                                        Negotiation
                                    </span>
</td>
<td className="py-4 px-lg text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="py-4 px-lg font-medium text-on-surface">Globex Inc</td>
<td className="py-4 px-lg text-on-surface-variant">sarah.j@globex.com</td>
<td className="py-4 px-lg text-on-surface">$85,000</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-tint/10 text-surface-tint">
                                        Proposal Sent
                                    </span>
</td>
<td className="py-4 px-lg text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-4 px-lg font-medium text-on-surface">Initech</td>
<td className="py-4 px-lg text-on-surface-variant">p.lumbergh@initech.com</td>
<td className="py-4 px-lg text-on-surface">$210,000</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary">
                                        Meeting Set
                                    </span>
</td>
<td className="py-4 px-lg text-right">
<button className="text-outline hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

    </>
  );
};

export default ExecutiveMainDashboard;
