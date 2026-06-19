import React from 'react';
import '../style/Dashboard.css';

const InventoryOverviewDashboard: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest text-primary-fixed-dim shadow-md flex flex-col py-lg z-20 hidden md:flex">
<div className="px-lg mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>widgets</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-70">Enterprise Suite</p>
</div>
</div>
<button className="mx-lg mb-8 bg-primary-container hover:bg-primary-fixed text-on-primary hover:text-on-primary-fixed font-title-md text-title-md py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined">add</span>
            New Entry
        </button>
<nav className="flex-1 overflow-y-auto font-body-md text-body-md flex flex-col gap-2">
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">group</span>
                CRM
            </a>
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
                Sales
            </a>
<a className="flex items-center gap-3 py-3 text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 bg-on-surface-variant/20 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
                Finance
            </a>
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
                Reports
            </a>
<a className="flex items-center gap-3 py-3 pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 mt-auto" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</nav>
</aside>
 Main Content Wrapper 
<div className="flex-1 flex flex-col ml-0 md:ml-[280px] min-h-screen">
{/* TopNavBar Component */}
<header className="docked full-width top-0 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 border-b border-outline-variant shadow-sm flex justify-between items-center w-full h-16 px-margin-desktop z-10 sticky">
<div className="flex items-center gap-4">
<div className="md:hidden">
<span className="material-symbols-outlined text-on-surface-variant text-2xl cursor-pointer">menu</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary hidden md:block">CommSync</h2>
</div>
<div className="flex-1 max-w-xl mx-8 hidden md:block">
<div className="relative focus-within:ring-2 focus-within:ring-primary rounded-lg">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-lg pl-10 pr-4 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Search inventory..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-on-surface-variant hover:text-primary transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors hidden sm:block">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a business executive in a modern office setting. Soft, natural lighting highlights the subject's face against a blurred background. The overall tone is corporate, approachable, and high-quality, fitting for a premium software dashboard profile image." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1WvBoygTVOZRkybduHnRNu09OWlD4wEyL2UrC8VytPbPZ0NatRjFJxls7KsWRrv5WgSsWSWAYCtOvTgVi9NADBPPfB2ZHZZoQjcDY57eqEpXrfY1o1wfilVHzSSl_HVzWpeXpqNzHPhz5_4Fu4IWrFGTCkxHX-nWf6qciK3WvdcyhSGysSoPvHL2B0W2ibZ4eqEMjc6f7IvUZ22a9-8OPC4gBp_aSBe8QBO9gaY2lleSJLuYmHrOJNQ2E4VeGquF3HwwWjDS4CuM" />
</div>
</div>
</header>
{/* Main Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-background">Inventory Overview</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Manage stock levels, tracking, and warehouse capacity.</p>
</div>
<div className="flex flex-wrap items-center gap-3">
<button className="bg-surface hover:bg-surface-container border border-outline-variant text-on-surface font-title-md text-title-md py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[20px]">swap_horiz</span>
                        Transfer
                    </button>
<button className="bg-surface hover:bg-surface-container border border-outline-variant text-on-surface font-title-md text-title-md py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[20px]">outbox</span>
                        Stock Out
                    </button>
<button className="bg-primary-container hover:bg-primary text-on-primary font-title-md text-title-md py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>move_to_inbox</span>
                        Stock In
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="bento-grid">
{/* KPI Card 1: Total Stock Value */}
<div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 card-shadow relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-primary-container/10 rounded-full blur-xl"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Stock Value</p>
<h3 className="font-headline-lg text-headline-lg text-on-background mt-1">$1.24M</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
<span className="material-symbols-outlined">attach_money</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4 relative z-10">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-secondary-container/20 text-on-secondary-container font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +4.2%
                        </span>
<span className="font-body-md text-body-md text-on-surface-variant text-xs">vs last month</span>
</div>
</div>
{/* KPI Card 2: Low Stock Items */}
<div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 card-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Low Stock Items</p>
<h3 className="font-headline-lg text-headline-lg text-on-background mt-1">28</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined">warning</span>
</div>
</div>
<div className="flex items-center gap-2 mt-4">
<span className="inline-flex items-center px-2 py-1 rounded-md bg-error/10 text-error font-label-md text-label-md">
                            Requires Attention
                        </span>
</div>
</div>
{/* KPI Card 3: Pending Transfers */}
<div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 card-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Transfers</p>
<h3 className="font-headline-lg text-headline-lg text-on-background mt-1">15</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span className="material-symbols-outlined">local_shipping</span>
</div>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5 mt-6">
<div className="bg-tertiary-container h-1.5 rounded-full" style={{"width": "45%"}}></div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant mt-2 text-right">45% Completed</p>
</div>
{/* KPI Card 4: Warehouse Capacity */}
<div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant/30 card-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Warehouse Cap.</p>
<h3 className="font-headline-lg text-headline-lg text-on-background mt-1">82%</h3>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-variant flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">warehouse</span>
</div>
</div>
<div className="w-full bg-surface-variant rounded-full h-1.5 mt-6">
<div className="bg-primary-container h-1.5 rounded-full" style={{"width": "82%"}}></div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant mt-2">Zone A near capacity</p>
</div>
{/* Chart: Stock Levels by Category */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/30 card-shadow flex flex-col">
<div className="p-6 border-b border-outline-variant/20 flex justify-between items-center glass-panel rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-background">Stock Levels by Category</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="p-6 flex-1">
{/* Mock Bar Chart */}
<div className="bar-chart-container border-b border-l border-outline-variant/50 relative pl-4 pb-4">
{/* Y-axis labels */}
<div className="absolute left-0 bottom-4 flex flex-col justify-between h-[200px] -ml-8 font-label-md text-label-md text-on-surface-variant">
<span>5k</span>
<span>2.5k</span>
<span>0</span>
</div>
{/* Bars */}
<div className="flex flex-col items-center gap-2">
<div className="bar" data-val="3,800" style={{"height": "150px"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">Electronics</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="bar" data-val="2,900" style={{"height": "120px"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">Hardware</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="bar" data-val="4,500" style={{"height": "180px"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">Components</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="bar" data-val="1,200" style={{"height": "80px"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">Packaging</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="bar" data-val="1,800" style={{"height": "100px"}}></div>
<span className="font-label-md text-label-md text-on-surface-variant">Accessories</span>
</div>
{/* Horizontal Grid Lines */}
<div className="absolute w-full border-t border-outline-variant/20 bottom-[104px] left-0 pointer-events-none"></div>
<div className="absolute w-full border-t border-outline-variant/20 bottom-[204px] left-0 pointer-events-none"></div>
</div>
</div>
</div>
{/* Quick Action / Status Widget */}
<div className="col-span-12 lg:col-span-4 bg-primary text-on-primary rounded-xl p-6 shadow-md relative overflow-hidden flex flex-col justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>error_circle_rounded</span>
<h3 className="font-title-md text-title-md">Critical Alerts</h3>
</div>
<p className="font-body-md text-body-md text-primary-fixed mt-2">3 items are below minimum threshold levels.</p>
</div>
<div className="mt-8 relative z-10 flex flex-col gap-3">
<div className="bg-on-primary/10 rounded-lg p-3 flex justify-between items-center backdrop-blur-sm border border-white/10">
<div>
<p className="font-label-md text-label-md font-bold">SKU-A109</p>
<p className="text-xs text-primary-fixed">Logic Boards</p>
</div>
<span className="text-error-container font-bold">2 left</span>
</div>
<div className="bg-on-primary/10 rounded-lg p-3 flex justify-between items-center backdrop-blur-sm border border-white/10">
<div>
<p className="font-label-md text-label-md font-bold">SKU-C404</p>
<p className="text-xs text-primary-fixed">Thermal Paste</p>
</div>
<span className="text-error-container font-bold">0 left</span>
</div>
</div>
<button className="mt-6 w-full bg-white text-primary font-title-md text-title-md py-2 rounded-lg hover:bg-surface transition-colors relative z-10">
                        Generate Restock PO
                    </button>
</div>
{/* Table: Recent Stock Movements */}
<div className="col-span-12 bg-surface-container-lowest rounded-xl border border-outline-variant/30 card-shadow overflow-hidden">
<div className="p-6 border-b border-outline-variant/20 flex justify-between items-center glass-panel">
<h3 className="font-title-md text-title-md text-on-background">Recent Stock Movements</h3>
<button className="text-primary font-label-md text-label-md hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/30">
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Transaction ID</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Item Name</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Type</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Qty</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Date</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant font-medium">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="p-4 font-code-sm text-code-sm text-on-surface-variant">#TX-9082</td>
<td className="p-4 font-medium text-on-background">Industrial Power Supply</td>
<td className="p-4">
<span className="flex items-center gap-1 text-tertiary"><span className="material-symbols-outlined text-[16px]">arrow_downward</span> Stock In</span>
</td>
<td className="p-4 font-medium">+150</td>
<td className="p-4 text-on-surface-variant">Oct 24, 14:30</td>
<td className="p-4">
<span className="inline-block px-2 py-1 rounded-md bg-secondary-container/20 text-on-secondary-container text-xs font-medium">Completed</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="p-4 font-code-sm text-code-sm text-on-surface-variant">#TX-9081</td>
<td className="p-4 font-medium text-on-background">Cat6 Ethernet Cable (100m)</td>
<td className="p-4">
<span className="flex items-center gap-1 text-error"><span className="material-symbols-outlined text-[16px]">arrow_upward</span> Stock Out</span>
</td>
<td className="p-4 font-medium">-25</td>
<td className="p-4 text-on-surface-variant">Oct 24, 11:15</td>
<td className="p-4">
<span className="inline-block px-2 py-1 rounded-md bg-secondary-container/20 text-on-secondary-container text-xs font-medium">Completed</span>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group">
<td className="p-4 font-code-sm text-code-sm text-on-surface-variant">#TX-9080</td>
<td className="p-4 font-medium text-on-background">Cooling Fans 120mm</td>
<td className="p-4">
<span className="flex items-center gap-1 text-primary"><span className="material-symbols-outlined text-[16px]">swap_horiz</span> Transfer</span>
</td>
<td className="p-4 font-medium">50</td>
<td className="p-4 text-on-surface-variant">Oct 23, 16:45</td>
<td className="p-4">
<span className="inline-block px-2 py-1 rounded-md bg-surface-variant text-on-surface-variant text-xs font-medium">In Transit</span>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-4 font-code-sm text-code-sm text-on-surface-variant">#TX-9079</td>
<td className="p-4 font-medium text-on-background">Server Rack Mounts 2U</td>
<td className="p-4">
<span className="flex items-center gap-1 text-tertiary"><span className="material-symbols-outlined text-[16px]">arrow_downward</span> Stock In</span>
</td>
<td className="p-4 font-medium">+10</td>
<td className="p-4 text-on-surface-variant">Oct 23, 09:20</td>
<td className="p-4">
<span className="inline-block px-2 py-1 rounded-md bg-secondary-container/20 text-on-secondary-container text-xs font-medium">Completed</span>
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

export default InventoryOverviewDashboard;
