import React from 'react';
import '../style/Dashboard.css';

const LeadManagementList: React.FC = () => {
  return (
    <>
      
 SideNavBar (Desktop Fixed) 
<nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[280px] z-40 bg-inverse-surface shadow-xl py-lg px-md font-body-md text-body-md font-medium text-primary-fixed duration-200 ease-in-out">
<div className="flex items-center gap-sm mb-xl px-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="business_center">business_center</span>
</div>
<div>
<h1 className="font-title-md text-title-md text-surface-lowest">Lead Manager</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise Edition</p>
</div>
</div>
<button className="flex items-center justify-center gap-sm w-full py-sm px-md mb-xl bg-primary-container hover:bg-primary text-on-primary-container rounded-lg transition-colors font-title-md text-title-md h-10 shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
            New Lead
        </button>
<div className="flex-1 overflow-y-auto">
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container/20 text-primary-fixed border-l-4 border-primary-fixed hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                        Leads
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
                        Pipeline
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
                        Tasks
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
                        Activities
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
                        Contacts
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="handshake">handshake</span>
                        Deals
                    </a>
</li>
</ul>
</div>
<div className="mt-auto pt-lg border-t border-white/10">
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                        Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="manage_accounts">manage_accounts</span>
                        Account
                    </a>
</li>
</ul>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] w-full bg-surface-container-low min-h-screen">
{/* TopNavBar */}
<header className="docked full-width top-0 sticky z-30 border-b border-outline-variant/30 shadow-sm bg-surface/80 backdrop-blur-md font-body-md text-body-md flex justify-between items-center w-full px-margin-desktop py-sm h-[64px]">
<div className="flex items-center gap-lg">
<span className="font-headline-md text-headline-md font-bold text-primary block md:hidden">CommSync CRM</span>
<div className="hidden md:flex items-center bg-surface-container rounded-full px-md py-xs h-10 border border-outline-variant/30 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all w-[300px]">
<span className="material-symbols-outlined text-outline mr-sm" data-icon="search">search</span>
<input className="bg-transparent border-none outline-none w-full text-on-surface font-body-md focus:ring-0 p-0" placeholder="Search leads..." type="text" />
</div>
</div>
<div className="hidden lg:flex items-center gap-lg h-full">
<nav className="flex h-full gap-lg">
<a className="flex items-center h-full text-primary border-b-2 border-primary pb-1 font-title-md text-title-md cursor-pointer transition-colors" href="#">Dashboard</a>
<a className="flex items-center h-full text-on-surface-variant hover:text-primary cursor-pointer transition-colors" href="#">Analytics</a>
<a className="flex items-center h-full text-on-surface-variant hover:text-primary cursor-pointer transition-colors" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-sm">
<button className="p-sm rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-sm rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden ml-sm border border-outline-variant/50 cursor-pointer">
<img alt="User profile" className="w-full h-full object-cover" data-alt="Professional headshot of a corporate user against a neutral grey background. High-quality lighting typical of a modern enterprise software avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiRXjPBh1Ar5Vp587wQr6wPYMomSdwBhcoOqWTKdKIISOPfk6nWdMeSN9Kxc7DZZVoPVe5OqMx-EgLBeBGkG2wDa-0Qga85-RmyWGfr9x3vI6oYESjXAXhwVvLw4zjSbkPZuBdjN4GLCL8atdMN82xdDuj_TZ77OLl3qfwg4-bD5cyQVqeT-0kt9lPsk2OAHr6Vi_RVQD78N71X7vQsE-Who81X7Qpz-3MSA9OyDcRsjdckdA2O5WQf7pOChm45xFhH6AfcodgbYw" />
</div>
</div>
</header>
{/* Page Canvas */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop">
<div className="max-w-container-max mx-auto space-y-lg">
{/* Page Header & Filters */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md mb-lg">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Leads</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage and track your incoming prospects.</p>
</div>
<div className="flex flex-wrap items-center gap-sm">
<div className="flex bg-surface rounded-lg border border-outline-variant/30 p-xs shadow-sm">
<button className="px-md py-xs rounded-md bg-surface-container text-on-surface font-title-md text-title-md text-sm">All</button>
<button className="px-md py-xs rounded-md text-on-surface-variant hover:bg-surface-container/50 font-body-md text-body-md text-sm transition-colors">New</button>
<button className="px-md py-xs rounded-md text-on-surface-variant hover:bg-surface-container/50 font-body-md text-body-md text-sm transition-colors">Qualified</button>
</div>
<button className="flex items-center gap-xs px-md py-sm bg-surface border border-outline-variant/30 rounded-lg text-on-surface hover:bg-surface-container transition-colors shadow-sm h-10">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                            Filters
                        </button>
<button className="md:hidden flex items-center justify-center gap-xs px-md py-sm bg-primary-container hover:bg-primary text-on-primary-container rounded-lg transition-colors font-title-md text-title-md shadow-sm h-10">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                            Add Lead
                        </button>
</div>
</div>
{/* Data Grid (Bento Style Card) */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 bg-surface-container/30">
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Lead Name</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Company</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-right">Est. Value</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold">Last Activity</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold text-center">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
{/* Row 1 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-title-md text-sm shrink-0">
                                                AS
                                            </div>
<div>
<div className="font-title-md text-title-md text-on-surface text-sm">Alice Smith</div>
<div className="text-on-surface-variant text-xs">alice@techcorp.com</div>
</div>
</div>
</td>
<td className="p-md text-on-surface">TechCorp Industries</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                                            New
                                        </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm text-on-surface">$45,000</td>
<td className="p-md text-on-surface-variant text-sm">2 hours ago</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary font-title-md text-sm shrink-0">
                                                JD
                                            </div>
<div>
<div className="font-title-md text-title-md text-on-surface text-sm">John Doe</div>
<div className="text-on-surface-variant text-xs">j.doe@globex.io</div>
</div>
</div>
</td>
<td className="p-md text-on-surface">Globex Corporation</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                                            Qualified
                                        </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm text-on-surface">$120,000</td>
<td className="p-md text-on-surface-variant text-sm">Yesterday</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-error/10 flex items-center justify-center text-error font-title-md text-sm shrink-0">
                                                MR
                                            </div>
<div>
<div className="font-title-md text-title-md text-on-surface text-sm">Maria Rodriguez</div>
<div className="text-on-surface-variant text-xs">mrodriguez@startup.co</div>
</div>
</div>
</td>
<td className="p-md text-on-surface">Startup.co</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-error/10 text-error border border-error/20">
                                            Cold
                                        </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm text-on-surface">$15,500</td>
<td className="p-md text-on-surface-variant text-sm">Oct 12, 2023</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary font-title-md text-sm shrink-0">
                                                PL
                                            </div>
<div>
<div className="font-title-md text-title-md text-on-surface text-sm">Peter Lee</div>
<div className="text-on-surface-variant text-xs">peter@logistics.net</div>
</div>
</div>
</td>
<td className="p-md text-on-surface">Fast Logistics</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-tertiary/10 text-tertiary border border-tertiary/20">
                                            In Discussion
                                        </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm text-on-surface">$85,000</td>
<td className="p-md text-on-surface-variant text-sm">Today, 9:00 AM</td>
<td className="p-md text-center">
<button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="flex items-center justify-between p-md border-t border-outline-variant/30 bg-surface-container/10">
<span className="text-sm text-on-surface-variant">Showing 1 to 4 of 24 leads</span>
<div className="flex items-center gap-xs">
<button className="p-xs rounded-md border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary text-on-primary font-title-md text-sm flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface font-body-md text-sm flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface font-body-md text-sm flex items-center justify-center transition-colors">3</button>
<span className="text-on-surface-variant">...</span>
<button className="p-xs rounded-md border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default LeadManagementList;
