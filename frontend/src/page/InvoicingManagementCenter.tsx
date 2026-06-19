import React from 'react';
import '../style/Dashboard.css';

const InvoicingManagementCenter: React.FC = () => {
  return (
    <>
      
 TopNavBar 
<header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20 shadow-sm flex items-center justify-between px-margin-desktop h-16 w-full hidden md:flex">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">CommSync</span>
<nav className="flex gap-lg h-full pt-1">
<a className="font-title-md text-title-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80 transition-all flex items-center h-full" href="#">Dashboard</a>
<a className="font-title-md text-title-md text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80 transition-all flex items-center h-full" href="#">Invoices</a>
<a className="font-title-md text-title-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80 transition-all flex items-center h-full" href="#">Reports</a>
<a className="font-title-md text-title-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors cursor-pointer active:opacity-80 transition-all flex items-center h-full" href="#">Settings</a>
</nav>
</div>
<div className="flex items-center gap-md">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" style={{"fontVariationSettings": "'FILL' 0"}}>search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-body-md focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none w-64 transition-all" placeholder="Search Invoices..." type="text" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>help_outline</span>
</button>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover ml-2" data-alt="A highly professional headshot of an executive in a modern office environment. The lighting is soft and flattering, highlighting a crisp white shirt and a tailored dark blazer. The background is slightly out of focus, showing blurred glass panels and soft office lighting in a cool, enterprise setting. The mood is confident, approachable, and authoritative, perfectly fitting an enterprise CRM platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5N1NHUFkg2OFlu4xeNbhWmxcZSeeT760eaYpRcHcgpG-purdpnNlO6yV55rr0tcTJ6yvsM5x8TgcVz9b_IDGMV9r1hM3yYUbh8ljaD8lDzqSHUNDcLed-bVgwLFiC60x8j9Pb2nmk7Z1XZqDrdK3t0xouBeP8dvepRpJuL3mo9Mz9jqgX6hiV-cQsVQv9JtB9W81AeqLBOqWwb8I1KnT5tbyn2nfVq7bVg4C_xpsRGWfu5AEUyhj6QvITfsUDlmYnUWsG8JLZskU" />
</div>
</header>
 SideNavBar (Desktop) 
<aside className="fixed left-0 top-0 h-full w-[280px] z-40 bg-inverse-surface dark:bg-surface-container-lowest shadow-xl flex flex-col h-full py-md gap-base hidden md:flex pt-20">
<div className="px-lg pb-md">
<h1 className="font-headline-md text-headline-md font-black text-surface-bright">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant/70 mt-1 uppercase tracking-wider">Enterprise Suite</p>
</div>
<div className="px-md mb-md">
<button className="w-full bg-primary-container text-on-primary-container font-title-md text-title-md py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-fixed transition-colors shadow-sm">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
                Create New
            </button>
</div>
<nav className="flex-1 flex flex-col gap-1 px-2">
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-3 flex items-center gap-3 hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>person_search</span>
                CRM
            </a>
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-3 flex items-center gap-3 hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>inventory_2</span>
                Inventory
            </a>
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-3 flex items-center gap-3 hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>shopping_cart</span>
                Purchase
            </a>
<a className="font-body-md text-body-md bg-primary-container text-on-primary-container rounded-lg mx-2 px-3 py-3 flex items-center gap-3 hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-medium" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>receipt_long</span>
                Invoices
            </a>
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-3 flex items-center gap-3 hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>analytics</span>
                Analytics
            </a>
</nav>
<div className="mt-auto px-2 flex flex-col gap-1 pb-4">
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-2 flex items-center gap-3 transition-colors" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>support_agent</span>
                Support
            </a>
<a className="font-body-md text-body-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 px-3 py-2 flex items-center gap-3 transition-colors" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>account_circle</span>
                Account
            </a>
</div>
</aside>
 Main Content Area 
<main className="pt-20 md:pl-[280px] min-h-screen px-margin-mobile md:px-margin-desktop pb-margin-desktop">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md mb-lg mt-md">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Invoices</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage and track all customer billing.</p>
</div>
<div className="flex flex-wrap gap-sm w-full md:w-auto">
<button className="bg-surface-container-low border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-title-md text-title-md flex items-center gap-2 hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>filter_list</span>
                    Filter
                </button>
<button className="bg-surface-container-low border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-title-md text-title-md flex items-center gap-2 hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>calendar_today</span>
                    Last 30 Days
                </button>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-title-md text-title-md flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-sm ml-auto md:ml-0">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
                    Create Invoice
                </button>
</div>
</div>
{/* Metrics Bento */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
<div className="glass-panel rounded-xl p-lg shadow-sm">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Total Outstanding</p>
<h2 className="font-display-lg text-display-lg text-on-surface">$124,500</h2>
<div className="flex items-center gap-1 mt-2 text-primary font-body-md text-body-md">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>trending_up</span>
<span>+12% vs last month</span>
</div>
</div>
<div className="glass-panel rounded-xl p-lg shadow-sm">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Overdue</p>
<h2 className="font-display-lg text-display-lg text-error">$14,200</h2>
<div className="flex items-center gap-1 mt-2 text-error font-body-md text-body-md">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>warning</span>
<span>3 invoices need attention</span>
</div>
</div>
<div className="glass-panel rounded-xl p-lg shadow-sm">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Paid This Month</p>
<h2 className="font-display-lg text-display-lg text-on-surface">$89,300</h2>
<div className="flex items-center gap-1 mt-2 text-on-surface-variant font-body-md text-body-md">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>check_circle</span>
<span>42 invoices completed</span>
</div>
</div>
<div className="glass-panel rounded-xl p-lg shadow-sm flex items-center justify-center bg-gradient-to-br from-primary-container to-primary-fixed text-on-primary-container">
<div className="text-center">
<span className="material-symbols-outlined text-4xl mb-2" style={{"fontVariationSettings": "'FILL' 0"}}>rocket_launch</span>
<p className="font-title-md text-title-md font-semibold">Generate Monthly Report</p>
</div>
</div>
</div>
{/* Data Table Card */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant/50 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<th className="p-md font-medium">Invoice #</th>
<th className="p-md font-medium">Customer</th>
<th className="p-md font-medium">Issue Date</th>
<th className="p-md font-medium">Due Date</th>
<th className="p-md font-medium text-right">Amount</th>
<th className="p-md font-medium">Status</th>
<th className="p-md font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
{/* Row 1: Paid */}
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors cursor-pointer group">
<td className="p-md font-code-sm text-code-sm text-primary font-medium">INV-2023-001</td>
<td className="p-md">
<div className="flex items-center gap-3">
<img alt="Customer Avatar" className="w-8 h-8 rounded-full bg-surface-variant object-cover" data-alt="A professional headshot of a middle-aged male executive with a warm smile, wearing a dark suit. Soft, bright office lighting in a modern corporate setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtEg5tsU3pwoewfiCke5MA-LoY7AQApA9s1XD4MkXP6Ncmo3TRn8gb1qzhdhhLiiTmO-86VnuTUpnu8dfXlBumf3-rum5oquCZocxeMlbF2XN5mLzjVZa2pjdJrqB8zievIqGA4Ljkf1SnvEb-yxbEqYJ0E_3LL0qmVf9y_-TO_loVBZDlSUBtEZSg78oEpbDf1PWKGIGDq3bsQLkOYMx0vnsveyHaQdmSGqbTKVvFkv6VLlNrJGJgLxTY8v0N8w3KEgzlAveah50" />
<span className="font-medium text-on-surface group-hover:text-primary transition-colors">Acme Corp</span>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 12, 2023</td>
<td className="p-md text-on-surface-variant">Nov 11, 2023</td>
<td className="p-md text-right font-medium">$12,450.00</td>
<td className="p-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-container/20 text-secondary-fixed">
                                    Paid
                                </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 2: Pending */}
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors cursor-pointer group">
<td className="p-md font-code-sm text-code-sm text-primary font-medium">INV-2023-002</td>
<td className="p-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container/20 text-tertiary flex items-center justify-center font-title-md text-title-md font-bold">G</div>
<span className="font-medium text-on-surface group-hover:text-primary transition-colors">Globex Inc.</span>
</div>
</td>
<td className="p-md text-on-surface-variant">Oct 15, 2023</td>
<td className="p-md text-on-surface-variant">Nov 14, 2023</td>
<td className="p-md text-right font-medium">$8,200.00</td>
<td className="p-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-container/10 text-primary-fixed-dim">
                                    Pending
                                </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 3: Overdue */}
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors cursor-pointer group bg-error-container/5">
<td className="p-md font-code-sm text-code-sm text-primary font-medium">INV-2023-003</td>
<td className="p-md">
<div className="flex items-center gap-3">
<img alt="Customer Avatar" className="w-8 h-8 rounded-full bg-surface-variant object-cover" data-alt="A professional headshot of a female executive looking confident. She is wearing a modern business casual outfit. The background is a brightly lit, minimalist office space with glass partitions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQc7luD3y5MGZoLA3RIEoZAzDBzoM4PMrv2XERV1FqrFq59vg3UATKQThT4u-RJBBZnsztaQcjKJ1UYB1ZwbHRO2Oooj16_57vVK2Dcxr2VgOx2rRb-FkYy4Rvg8F1m0HfIleuN-QNxghhAganL706xdgxNapWEWOICjJqeSODRhz20rqvmdsVmWJQCKCXrHLd8rUOyTYLHWkzS0bbjePCpWKFbAzutx70sorl6OJdJB6V1OvWIx5Xo1DrVSEbU7knvdH2Kdf317Q" />
<span className="font-medium text-on-surface group-hover:text-primary transition-colors">Stark Industries</span>
</div>
</td>
<td className="p-md text-on-surface-variant">Sep 01, 2023</td>
<td className="p-md text-error font-medium">Oct 01, 2023</td>
<td className="p-md text-right font-medium">$45,000.00</td>
<td className="p-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error/10 text-error">
                                    Overdue
                                </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 4: Draft */}
<tr className="table-row-hover transition-colors cursor-pointer group">
<td className="p-md font-code-sm text-code-sm text-on-surface-variant font-medium">INV-2023-004</td>
<td className="p-md">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center font-title-md text-title-md text-on-surface-variant font-bold">W</div>
<span className="font-medium text-on-surface group-hover:text-primary transition-colors">Wayne Ent.</span>
</div>
</td>
<td className="p-md text-on-surface-variant">-</td>
<td className="p-md text-on-surface-variant">-</td>
<td className="p-md text-right font-medium text-on-surface-variant">$1,500.00</td>
<td className="p-md">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-variant text-on-surface-variant">
                                    Draft
                                </span>
</td>
<td className="p-md text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-low/50">
<span className="font-body-md text-body-md text-on-surface-variant">Showing 1 to 4 of 124 entries</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant transition-colors disabled:opacity-50 text-on-surface font-body-md text-body-md" disabled>Previous</button>
<button className="px-3 py-1 border border-outline-variant rounded hover:bg-surface-variant transition-colors text-on-surface font-body-md text-body-md">Next</button>
</div>
</div>
</div>
</main>

    </>
  );
};

export default InvoicingManagementCenter;
