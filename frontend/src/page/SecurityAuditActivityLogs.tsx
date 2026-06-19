import React from 'react';
import '../style/Dashboard.css';

const SecurityAuditActivityLogs: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg fixed left-0 top-0 w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-md z-50">
<div className="px-lg mb-xl">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-on-primary font-bold">C</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-outline">Enterprise Suite</p>
</div>
</div>
</div>
<div className="px-lg mb-lg">
<button className="w-full bg-primary text-on-primary h-10 rounded-lg font-title-md text-title-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">add</span> New Entry
            </button>
</div>
<div className="flex-1 overflow-y-auto">
<ul className="flex flex-col gap-xs">
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">dashboard</span> Dashboard</a></li>
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">groups</span> CRM</a></li>
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">payments</span> Sales</a></li>
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">inventory_2</span> Inventory</a></li>
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">account_balance</span> Finance</a></li>
<li><a className="flex items-center gap-md px-md py-sm text-on-surface-variant hover:text-on-surface mx-2 my-1 hover:bg-surface-variant/10 transition-colors rounded-lg cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">assessment</span> Reports</a></li>
<li><a className="flex items-center gap-md px-md py-sm bg-primary text-on-primary rounded-lg mx-2 my-1 cursor-pointer transition-all active:scale-95" href="#"><span className="material-symbols-outlined">settings</span> Settings</a></li>
</ul>
</div>
</nav>
 Main Content Area 
<div className="flex-1 ml-0 md:ml-[280px] flex flex-col h-screen overflow-hidden">
{/* TopNavBar */}
<header className="docked full-width top-0 sticky z-40 border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop h-16 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 duration-200 ease-in-out">
<div className="flex items-center gap-lg">
{/* Search on Left */}
<div className="relative hidden sm:block focus-ring rounded-lg bg-surface border border-outline-variant">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="h-10 pl-10 pr-4 rounded-lg bg-transparent border-none focus:ring-0 text-body-md w-64 text-on-surface placeholder-outline" placeholder="Global search..." type="text" />
</div>
</div>
<div className="flex items-center gap-md text-primary dark:text-primary-fixed-dim">
<button className="p-2 rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">help</span></button>
<button className="p-2 rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined">account_circle</span></button>
</div>
</header>
{/* Canvas */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
<div className="max-w-container-max mx-auto">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-lg gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-surface">User Activity Logs</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">System-wide audit trail of security events and transactions.</p>
</div>
<div className="flex gap-sm">
<button className="h-10 px-4 border border-outline-variant text-on-surface rounded-lg font-title-md text-title-md flex items-center gap-sm hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span> Export CSV
                        </button>
</div>
</div>
{/* Filters & Controls Card */}
<div className="glass-card rounded-xl p-md mb-lg shadow-sm">
<div className="flex flex-wrap gap-md items-end">
<div className="flex-1 min-w-[200px]">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Search Logs</label>
<div className="relative focus-ring rounded-lg border border-outline-variant bg-surface">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-10 pl-10 pr-4 bg-transparent border-none focus:ring-0 text-body-md" placeholder="Search by user, action, or IP..." type="text" />
</div>
</div>
<div className="w-full sm:w-auto">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Date Range</label>
<div className="flex items-center gap-xs focus-ring rounded-lg border border-outline-variant bg-surface px-3">
<span className="material-symbols-outlined text-outline">calendar_today</span>
<input className="h-10 bg-transparent border-none focus:ring-0 text-body-md text-on-surface" type="date" />
<span className="text-outline">-</span>
<input className="h-10 bg-transparent border-none focus:ring-0 text-body-md text-on-surface" type="date" />
</div>
</div>
<div className="w-full sm:w-auto">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Module</label>
<select className="h-10 px-4 border border-outline-variant rounded-lg bg-surface text-on-surface focus-ring font-body-md text-body-md min-w-[150px]">
<option>All Modules</option>
<option>Authentication</option>
<option>Finance</option>
<option>CRM</option>
<option>Inventory</option>
</select>
</div>
<div className="w-full sm:w-auto">
<button className="h-10 px-4 bg-surface-container border border-outline-variant text-on-surface rounded-lg font-title-md text-title-md flex items-center gap-sm hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span> More Filters
                            </button>
</div>
</div>
</div>
{/* Data Table Card */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Timestamp</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">User</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Action</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Module</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap">IP Address</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant whitespace-nowrap text-right">Details</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/50">
<tr className="table-row-hover transition-colors">
<td className="py-3 px-4 whitespace-nowrap text-on-surface-variant">2023-10-27 14:32:01</td>
<td className="py-3 px-4 whitespace-nowrap flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-[10px]">JD</div>
                                        John Doe
                                    </td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Login Successful
                                        </span>
</td>
<td className="py-3 px-4 whitespace-nowrap">Authentication</td>
<td className="py-3 px-4 whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">192.168.1.105</td>
<td className="py-3 px-4 whitespace-nowrap text-right">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-3 px-4 whitespace-nowrap text-on-surface-variant">2023-10-27 14:15:22</td>
<td className="py-3 px-4 whitespace-nowrap flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-label-md text-[10px]">AS</div>
                                        Alice Smith
                                    </td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Invoice Created
                                        </span>
</td>
<td className="py-3 px-4 whitespace-nowrap">Finance</td>
<td className="py-3 px-4 whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">10.0.0.42</td>
<td className="py-3 px-4 whitespace-nowrap text-right">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-3 px-4 whitespace-nowrap text-on-surface-variant">2023-10-27 13:45:10</td>
<td className="py-3 px-4 whitespace-nowrap flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center font-label-md text-[10px]">RJ</div>
                                        Robert Jones
                                    </td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-error-container text-on-error-container font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Failed Login Attempt
                                        </span>
</td>
<td className="py-3 px-4 whitespace-nowrap">Authentication</td>
<td className="py-3 px-4 whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">203.0.113.45</td>
<td className="py-3 px-4 whitespace-nowrap text-right">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-3 px-4 whitespace-nowrap text-on-surface-variant">2023-10-27 13:30:05</td>
<td className="py-3 px-4 whitespace-nowrap flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-[10px]">EW</div>
                                        Emma Wilson
                                    </td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span> Record Updated
                                        </span>
</td>
<td className="py-3 px-4 whitespace-nowrap">CRM</td>
<td className="py-3 px-4 whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">192.168.1.201</td>
<td className="py-3 px-4 whitespace-nowrap text-right">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-3 px-4 whitespace-nowrap text-on-surface-variant">2023-10-27 13:15:55</td>
<td className="py-3 px-4 whitespace-nowrap flex items-center gap-sm">
<div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-[10px]">JD</div>
                                        John Doe
                                    </td>
<td className="py-3 px-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-surface-container-high text-on-surface font-code-sm text-code-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span> User Permissions Edited
                                        </span>
</td>
<td className="py-3 px-4 whitespace-nowrap">Settings</td>
<td className="py-3 px-4 whitespace-nowrap font-code-sm text-code-sm text-on-surface-variant">192.168.1.105</td>
<td className="py-3 px-4 whitespace-nowrap text-right">
<button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="flex items-center justify-between px-4 py-3 bg-surface-container-low border-t border-outline-variant">
<div className="font-body-md text-body-md text-on-surface-variant">
                            Showing 1 to 5 of 1,240 entries
                        </div>
<div className="flex gap-sm">
<button className="h-8 px-3 rounded border border-outline-variant text-on-surface hover:bg-surface-container disabled:opacity-50 flex items-center" disabled>
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<button className="h-8 w-8 rounded bg-primary text-on-primary flex items-center justify-center font-title-md text-[14px]">1</button>
<button className="h-8 w-8 rounded hover:bg-surface-container text-on-surface flex items-center justify-center font-title-md text-[14px]">2</button>
<button className="h-8 w-8 rounded hover:bg-surface-container text-on-surface flex items-center justify-center font-title-md text-[14px]">3</button>
<span className="flex items-center justify-center px-1">...</span>
<button className="h-8 px-3 rounded border border-outline-variant text-on-surface hover:bg-surface-container flex items-center">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
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

export default SecurityAuditActivityLogs;
