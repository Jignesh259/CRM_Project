import React from 'react';
import '../style/Dashboard.css';

const CustomerQuotations: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-xl flex flex-col h-full py-lg z-20 hidden md:flex">
<div className="px-lg mb-xl">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">CS</div>
<div>
<h1 className="font-title-md text-title-md font-bold text-on-primary-fixed">CommSync</h1>
<p className="text-on-surface-variant text-label-md">Sales Module</p>
</div>
</div>
</div>
<div className="px-lg mb-lg">
<button className="w-full bg-primary-container text-on-primary-container font-label-md py-sm px-md rounded-lg flex items-center justify-center gap-xs hover:bg-primary-container/90 transition-colors shadow-sm scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Quotation
            </button>
</div>
<nav className="flex-1 px-sm">
<ul className="space-y-xs">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                        Orders
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                        Create Order
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-primary/10 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>description</span>
                        Quotations
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">local_shipping</span>
                        Shipments
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                        Settings
                    </a>
</li>
</ul>
</nav>
<div className="mt-auto px-sm pt-md border-t border-outline-variant/20">
<ul className="space-y-xs">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">help</span>
                        Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">account_circle</span>
                        Account
                    </a>
</li>
</ul>
</div>
</aside>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] min-h-screen w-full md:w-[calc(100%-280px)]">
{/* TopNavBar */}
<header className="docked full-width top-0 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm border-b border-outline-variant/30 flex justify-between items-center w-full px-lg py-sm z-10 sticky">
<div className="flex items-center gap-lg">
<h2 className="font-headline-md text-headline-md font-black text-primary">CommSync CRM</h2>
<nav className="hidden lg:flex gap-md">
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Dashboard</a>
<a className="font-title-md text-title-md text-primary border-b-2 border-primary pb-1 hover:text-primary transition-all duration-200 ease-in-out" href="#">Analytics</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="pl-xl pr-sm py-xs bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-body-md w-64 transition-shadow" placeholder="Search..." type="text" />
</div>
<div className="flex gap-xs">
<button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[24px]">notifications</span>
</button>
<button className="p-xs text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[24px]">apps</span>
</button>
</div>
<div className="h-6 w-px bg-outline-variant/50 mx-xs hidden sm:block"></div>
<div className="flex gap-sm">
<button className="text-primary font-label-md font-medium hover:bg-primary/10 px-md py-xs rounded-full transition-colors hidden sm:block">Export</button>
<button className="bg-primary text-on-primary font-label-md font-medium px-md py-xs rounded-full shadow-sm hover:shadow-md transition-shadow">Create</button>
</div>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant/30 cursor-pointer object-cover ml-xs" data-alt="A professional headshot of a corporate user, smiling subtly, set against a neutral, well-lit background, fitting for a modern B2B SaaS application avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9Vb-lFgpyZlkzlJ4FShBpH7Uooo5UVCItGnqZMJM8MBCyotuZeQ1-ITl16C1kWlmrn0P1Y0Q-jioyHHOIn27tN2aJsD7gkgC9pLRx1qYh2ELSBB4sJc9pMPZSPFGRyaNneSP96d8HrDA8uT2AMlaQK7d-81UHXij_HFz738ApXYP0oenk3BRtGnDx6fYJqD5KLLy7QYE6kNJqhWU3WZynU6zUlu22j5t2hyTQvrDvpg01aO_nqQWEd9ODNeBchrEbEarJDvGHF5U" />
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-xl gap-md">
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Quotations</h1>
<p className="text-on-surface-variant text-body-md mt-1">Manage and track active proposals and quotes.</p>
</div>
<button className="bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md py-sm px-lg rounded-lg flex items-center justify-center gap-xs transition-colors shadow-sm whitespace-nowrap group">
<span className="material-symbols-outlined text-[20px] group-hover:rotate-90 transition-transform">add</span>
                    New Quotation
                </button>
</div>
{/* Analytics Widgets */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xl">
{/* Widget 1 */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<p className="text-on-surface-variant text-label-md uppercase tracking-wider mb-xs">Quote Conversion Rate</p>
<h3 className="font-display-lg text-display-lg text-on-background">68.4%</h3>
<div className="flex items-center gap-xs mt-sm text-primary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="font-label-md">+4.2% vs last month</span>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">analytics</span>
</div>
</div>
</div>
{/* Widget 2 */}
<div className="bg-surface-container-lowest rounded-xl p-lg border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div className="flex justify-between items-start relative z-10">
<div>
<p className="text-on-surface-variant text-label-md uppercase tracking-wider mb-xs">Total Pipeline Value</p>
<h3 className="font-display-lg text-display-lg text-on-background">$1.24M</h3>
<div className="flex items-center gap-xs mt-sm text-on-surface-variant">
<span className="font-label-md">Across 42 active quotes</span>
</div>
</div>
<div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">monetization_on</span>
</div>
</div>
</div>
</div>
{/* Quotations Table Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col">
{/* Table Toolbar */}
<div className="p-md border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-md bg-surface-bright backdrop-blur-md">
<div className="flex gap-sm w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
<button className="px-md py-xs rounded-full bg-primary/10 text-primary font-label-md whitespace-nowrap">All Quotes</button>
<button className="px-md py-xs rounded-full hover:bg-surface-container text-on-surface-variant font-label-md whitespace-nowrap transition-colors">Drafts</button>
<button className="px-md py-xs rounded-full hover:bg-surface-container text-on-surface-variant font-label-md whitespace-nowrap transition-colors">Sent</button>
<button className="px-md py-xs rounded-full hover:bg-surface-container text-on-surface-variant font-label-md whitespace-nowrap transition-colors">Accepted</button>
</div>
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full pl-xl pr-sm py-xs bg-surface-container rounded-md border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary text-body-md transition-all" placeholder="Search quotes..." type="text" />
</div>
<button className="p-xs text-on-surface-variant hover:text-primary rounded-md border border-outline-variant/30 hover:border-primary transition-colors flex-shrink-0">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
</div>
</div>
{/* Table Content */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 bg-surface-container-low/50">
<th className="p-md font-label-md text-on-surface-variant font-medium">Quote ID</th>
<th className="p-md font-label-md text-on-surface-variant font-medium">Prospect/Customer</th>
<th className="p-md font-label-md text-on-surface-variant font-medium">Issue Date</th>
<th className="p-md font-label-md text-on-surface-variant font-medium">Expiry Date</th>
<th className="p-md font-label-md text-on-surface-variant font-medium text-right">Total Value</th>
<th className="p-md font-label-md text-on-surface-variant font-medium text-center">Status</th>
<th className="p-md font-label-md text-on-surface-variant font-medium w-10"></th>
</tr>
</thead>
<tbody className="text-body-md">
{/* Row 1 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-on-background font-medium">QT-2023-0841</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-tertiary-container/20 text-tertiary-container flex items-center justify-center font-bold text-label-md">AC</div>
<div>
<p className="text-on-background font-medium">Acme Corp</p>
<p className="text-on-surface-variant text-label-md">Enterprise Software License</p>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 24, 2023</td>
<td className="p-md text-on-surface-variant">Nov 24, 2023</td>
<td className="p-md text-on-background font-medium text-right">$45,000.00</td>
<td className="p-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10 text-primary font-label-md">
                                        Sent
                                    </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-on-background font-medium">QT-2023-0842</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-secondary-container/20 text-secondary-container flex items-center justify-center font-bold text-label-md">GI</div>
<div>
<p className="text-on-background font-medium">Global Industries</p>
<p className="text-on-surface-variant text-label-md">Consulting Services Q4</p>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 25, 2023</td>
<td className="p-md text-on-surface-variant">Nov 10, 2023</td>
<td className="p-md text-on-background font-medium text-right">$12,500.00</td>
<td className="p-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-[#10b981]/10 text-[#047857] font-label-md">
                                        Accepted
                                    </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-on-background font-medium">QT-2023-0845</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-surface-variant text-on-surface-variant flex items-center justify-center font-bold text-label-md">TS</div>
<div>
<p className="text-on-background font-medium">TechStart Inc</p>
<p className="text-on-surface-variant text-label-md">Server Migration</p>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 26, 2023</td>
<td className="p-md text-on-surface-variant">Nov 26, 2023</td>
<td className="p-md text-on-background font-medium text-right">$8,200.00</td>
<td className="p-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md">
                                        Draft
                                    </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-on-background font-medium">QT-2023-0839</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-error-container text-on-error-container flex items-center justify-center font-bold text-label-md">OM</div>
<div>
<p className="text-on-background font-medium">Omega Corp</p>
<p className="text-on-surface-variant text-label-md">Annual Support Contract</p>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 15, 2023</td>
<td className="p-md text-on-surface-variant text-error font-medium">Oct 22, 2023</td>
<td className="p-md text-on-background font-medium text-right">$24,000.00</td>
<td className="p-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-error/10 text-error font-label-md">
                                        Declined
                                    </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="p-md font-code-sm text-on-background font-medium">QT-2023-0848</td>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-primary-container/20 text-primary-container flex items-center justify-center font-bold text-label-md">NX</div>
<div>
<p className="text-on-background font-medium">Nexus Logistics</p>
<p className="text-on-surface-variant text-label-md">Fleet Tracking Module</p>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 27, 2023</td>
<td className="p-md text-on-surface-variant">Nov 27, 2023</td>
<td className="p-md text-on-background font-medium text-right">$18,750.00</td>
<td className="p-md text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md">
                                        Draft
                                    </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-primary transition-all">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Pagination */}
<div className="p-sm border-t border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest">
<span className="text-on-surface-variant text-label-md ml-sm">Showing 1-5 of 42 quotes</span>
<div className="flex gap-xs">
<button className="p-xs text-on-surface-variant hover:text-primary rounded hover:bg-surface-container disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="p-xs text-on-surface-variant hover:text-primary rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
};

export default CustomerQuotations;
