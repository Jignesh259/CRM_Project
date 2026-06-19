import React from 'react';
import '../style/Dashboard.css';

const LogisticsShipmentTracking: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg bg-inverse-surface shadow-xl fixed left-0 top-0 w-[280px] z-50">
<div className="px-lg mb-xl">
<h1 className="font-title-md text-title-md font-bold text-on-primary-fixed mb-1">CommSync</h1>
<p className="font-body-md text-body-md text-on-surface-variant/80">Sales Module</p>
</div>
<div className="px-lg mb-lg">
<button className="w-full py-sm px-md bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                New Quotation
            </button>
</div>
<ul className="flex flex-col gap-sm px-md flex-grow">
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span><span className="font-body-md text-body-md">Orders</span></a></li>
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="add_shopping_cart">add_shopping_cart</span><span className="font-body-md text-body-md">Create Order</span></a></li>
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="description">description</span><span className="font-body-md text-body-md">Quotations</span></a></li>
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-primary/10 hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span><span className="font-body-md text-body-md">Shipments</span></a></li>
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="settings">settings</span><span className="font-body-md text-body-md">Settings</span></a></li>
</ul>
<div className="mt-auto px-md pt-lg border-t border-outline-variant/20">
<ul className="flex flex-col gap-sm">
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="help">help</span><span className="font-body-md text-body-md">Support</span></a></li>
<li><a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90" href="#"><span className="material-symbols-outlined" data-icon="account_circle">account_circle</span><span className="font-body-md text-body-md">Account</span></a></li>
</ul>
</div>
</nav>
 Main Content Canvas 
<main className="flex-grow w-full md:ml-[280px] md:w-[calc(100%-280px)] min-h-screen pb-2xl">
{/* TopNavBar */}
<header className="flex justify-between items-center w-full px-lg py-sm bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30 sticky top-0 z-40">
<div className="flex items-center gap-lg">
<span className="font-headline-md text-headline-md font-black text-primary">CommSync CRM</span>
<nav className="hidden lg:flex gap-md">
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Dashboard</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Analytics</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="pl-xl pr-md py-xs rounded-full border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md w-64" placeholder="Search..." type="text" />
</div>
<div className="flex items-center gap-sm">
<button className="p-xs text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="p-xs text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined" data-icon="apps">apps</span></button>
</div>
<div className="flex items-center gap-sm ml-sm pl-sm border-l border-outline-variant/30">
<button className="font-label-md text-label-md px-sm py-xs border border-outline-variant text-on-surface rounded hover:bg-surface-variant transition-colors">Export</button>
<button className="font-label-md text-label-md px-sm py-xs bg-primary text-on-primary rounded hover:bg-primary/90 transition-colors">Create</button>
<div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden ml-sm cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a business executive in a modern, well-lit corporate environment. The lighting is soft and natural, creating a welcoming yet authoritative mood. The visual style is crisp and corporate, fitting seamlessly into a high-end enterprise software application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGY6mnb19dqX4qqv2J_kzG4UljfqXPq-b3-snfL3sgBPpoMW51Hfj5Mn9KYmZx0pXJjUhZXmCyFw2eRuJSSPyo9gZosTnatOPgFB5ayPeI3_0kBXaiPFDxNVu8MY95PiTdMr7JVClIw6-9-phBfjEoSrJwMMz07Nzc4SBXjGoJBvYwlaEQcBGN1jLmW1wJmpSyj5EoUY_ALuF9eR-4iNK0f5av0tmju4Kc1LajkmD0RHDO0tlKFj6NUIcD4lxPIEg2UTpcyt_9BUY" />
</div>
</div>
</div>
</header>
{/* Dashboard Content */}
<div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto space-y-lg">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md mb-lg">
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Logistics Overview</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time tracking and delivery analytics.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm bg-surface-container rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span> Filter
                    </button>
<button className="flex items-center gap-xs px-md py-sm bg-surface-container rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="calendar_today">calendar_today</span> This Week
                    </button>
</div>
</div>
{/* KPIs */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-md lg:gap-lg">
<div className="glass-card p-lg flex flex-col gap-md">
<div className="flex justify-between items-center">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="local_shipping">local_shipping</span>
</div>
<span className="font-label-md text-label-md text-tertiary flex items-center gap-xs"><span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span> +12%</span>
</div>
<div>
<h3 className="font-display-lg text-display-lg text-on-background">1,248</h3>
<p className="font-title-md text-title-md text-on-surface-variant">Active Shipments</p>
</div>
</div>
<div className="glass-card p-lg flex flex-col gap-md">
<div className="flex justify-between items-center">
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<span className="font-label-md text-label-md text-error flex items-center gap-xs"><span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span> +2%</span>
</div>
<div>
<h3 className="font-display-lg text-display-lg text-on-background">34</h3>
<p className="font-title-md text-title-md text-on-surface-variant">Delayed Orders</p>
</div>
</div>
<div className="glass-card p-lg flex flex-col gap-md">
<div className="flex justify-between items-center">
<div className="w-10 h-10 rounded-full bg-[#2e7d32]/10 flex items-center justify-center text-[#2e7d32]">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<span className="font-label-md text-label-md text-[#2e7d32] flex items-center gap-xs"><span className="material-symbols-outlined text-sm" data-icon="trending_flat">trending_flat</span> 0%</span>
</div>
<div>
<h3 className="font-display-lg text-display-lg text-on-background">98.2%</h3>
<p className="font-title-md text-title-md text-on-surface-variant">Delivery Success Rate</p>
</div>
</div>
</div>
{/* Content Bento Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg mt-xl">
{/* Shipment List */}
<div className="glass-card lg:col-span-2 overflow-hidden flex flex-col">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface/50">
<h3 className="font-title-md text-title-md text-on-background">Recent Shipments</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-sm" data-icon="search">search</span>
<input className="pl-lg pr-md py-xs rounded border border-outline-variant bg-surface focus:border-primary text-sm w-48" placeholder="Search tracking..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 bg-surface-container-low/50">
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Tracking #</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Destination</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Carrier</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Est. Delivery</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors cursor-pointer">
<td className="p-md">
<a className="font-code-sm text-code-sm text-primary hover:underline flex items-center gap-xs" href="#">
                                            TRK-982374
                                            <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
<td className="p-md">
<div className="font-medium text-on-background">TechCorp HQ</div>
<div className="text-sm text-on-surface-variant">Seattle, WA</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container rounded text-sm">FedEx</span></td>
<td className="p-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-[#2e7d32]/10 text-[#2e7d32] text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-[#2e7d32]"></span> In Transit
                                        </span>
</td>
<td className="p-md text-on-surface-variant">Oct 24, 2023</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors cursor-pointer bg-primary/5">
<td className="p-md">
<a className="font-code-sm text-code-sm text-primary hover:underline flex items-center gap-xs" href="#">
                                            TRK-110928
                                            <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
<td className="p-md">
<div className="font-medium text-on-background">Global Ind.</div>
<div className="text-sm text-on-surface-variant">Chicago, IL</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container rounded text-sm">UPS</span></td>
<td className="p-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-tertiary/10 text-tertiary text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Out for Delivery
                                        </span>
</td>
<td className="p-md text-on-surface-variant">Oct 23, 2023</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors cursor-pointer">
<td className="p-md">
<a className="font-code-sm text-code-sm text-primary hover:underline flex items-center gap-xs" href="#">
                                            TRK-554210
                                            <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
<td className="p-md">
<div className="font-medium text-on-background">Nexus Retail</div>
<div className="text-sm text-on-surface-variant">New York, NY</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container rounded text-sm">DHL</span></td>
<td className="p-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-error/10 text-error text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Delayed
                                        </span>
</td>
<td className="p-md text-error">Oct 26, 2023</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors cursor-pointer">
<td className="p-md">
<a className="font-code-sm text-code-sm text-primary hover:underline flex items-center gap-xs" href="#">
                                            TRK-883921
                                            <span className="material-symbols-outlined text-[14px]" data-icon="open_in_new">open_in_new</span>
</a>
</td>
<td className="p-md">
<div className="font-medium text-on-background">Alpha Corp</div>
<div className="text-sm text-on-surface-variant">Austin, TX</div>
</td>
<td className="p-md"><span className="px-2 py-1 bg-surface-container rounded text-sm">FedEx</span></td>
<td className="p-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-outline-variant/20 text-on-surface-variant text-xs font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Pending
                                        </span>
</td>
<td className="p-md text-on-surface-variant">Oct 28, 2023</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant/30 flex justify-center bg-surface-container-low/30 mt-auto">
<button className="font-label-md text-label-md text-primary hover:underline">View All Shipments</button>
</div>
</div>
{/* Active Shipment Detail & Map */}
<div className="glass-card lg:col-span-1 flex flex-col overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 bg-surface/50">
<div className="flex justify-between items-start mb-sm">
<h3 className="font-title-md text-title-md text-on-background">Tracking TRK-110928</h3>
<span className="px-2 py-1 bg-surface-container rounded text-xs font-medium">UPS</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">To: Global Ind. (Chicago, IL)</p>
</div>
<div className="relative h-48 w-full bg-surface-container-high overflow-hidden">
{/* Placeholder for Map Image */}
<img alt="Map" className="w-full h-full object-cover opacity-80 mix-blend-luminosity" data-location="Chicago" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXttzn7gyj88AGfiYr9-Vt4GAPQNu85wFLCZ9SwCRHkJ7lE5zcnNhLjurPwbV7b5xZXtXe3ZtwMO_Kumb-tUiB8esC4zAczqQCiVe2ZGbOTxeXc0OLV9dZdvysJe7_1MFxuB8rAttRcNSp_1egem5gRnb0rOSjVV7v53mGGB5EEUhz1FuUnkHtSmlwYz8WL9_v3CHxOZ6C4wrCzS2ZeDFzA0UqLZ62iYTHWvKg9LJ4iPk_hYlx6BGOYXjUzhXpTH9deAtIUmBEwF0" />
{/* Map Overlay UI */}
<div className="absolute inset-0 p-sm pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-lg animate-bounce">
<span className="material-symbols-outlined text-sm" data-icon="local_shipping">local_shipping</span>
</div>
<div className="w-12 h-4 bg-black/20 rounded-[50%] blur-sm mt-1"></div>
</div>
</div>
</div>
<div className="p-lg flex-grow flex flex-col gap-md">
<div className="flex flex-col gap-xs">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Current Status</span>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-tertiary" data-icon="local_shipping">local_shipping</span>
<span className="font-title-md text-title-md text-on-background">Out for Delivery</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm mt-1">Last scan: 08:42 AM - Chicago Distribution Center</p>
</div>
<div className="h-px w-full bg-outline-variant/30 my-sm"></div>
<div className="flex flex-col gap-md">
{/* Timeline */}
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
<div className="w-px h-full bg-primary/30 my-1"></div>
</div>
<div className="pb-md">
<p className="font-label-md text-label-md text-on-background font-medium">Out for Delivery</p>
<p className="font-label-md text-label-md text-on-surface-variant text-xs">Today, 08:42 AM - Chicago, IL</p>
</div>
</div>
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-primary/50 mt-1.5"></div>
<div className="w-px h-full bg-primary/30 my-1"></div>
</div>
<div className="pb-md">
<p className="font-label-md text-label-md text-on-surface-variant">Arrived at Sort Facility</p>
<p className="font-label-md text-label-md text-on-surface-variant text-xs">Yesterday, 11:20 PM - Chicago, IL</p>
</div>
</div>
<div className="flex gap-md">
<div className="flex flex-col items-center">
<div className="w-3 h-3 rounded-full bg-primary/50 mt-1.5"></div>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Departed Origin</p>
<p className="font-label-md text-label-md text-on-surface-variant text-xs">Oct 21, 09:00 AM - Seattle, WA</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default LogisticsShipmentTracking;
