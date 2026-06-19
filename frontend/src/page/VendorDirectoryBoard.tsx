import React from 'react';
import '../style/Dashboard.css';

const VendorDirectoryBoard: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-screen py-md px-lg fixed left-0 top-0 w-[280px] bg-inverse-surface dark:bg-inverse-surface shadow-md z-50">
<div className="flex items-center gap-md mb-xl">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-fixed" style={{"fontVariationSettings": "'FILL' 1"}}>corporate_fare</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise ERP</p>
</div>
</div>
<button className="w-full bg-primary-container text-on-primary-container font-label-md text-label-md py-sm px-md rounded-lg mb-lg hover:bg-primary transition-colors flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
            Quick Action
        </button>
<div className="flex-1 flex flex-col gap-sm mt-4">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-on-primary-fixed-variant/20 scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>factory</span>
                Vendors
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
                Procurement
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">payments</span>
                Payments
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">verified_user</span>
                Compliance
            </a>
</div>
<div className="mt-auto pt-lg border-t border-outline-variant/20 flex flex-col gap-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">help</span>
                Support
            </a>
<div className="mt-md flex items-center gap-sm px-md py-sm">
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30" data-alt="A professional headshot of an administrator in a corporate setting, clean lighting, enterprise context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZSCyHE7rshPI0ZlAoWJUmlIhZta6_Ty4vxsMH1Ra7R4qH3piqZBkmmhdd40VWSB79OBKrrHjiNSYfga_XABoG6BASCA898rrsfmt1kv71D__Zl7ErzUoepD8b855_2Re9CWJvqqEuTnXxdoBPGFlo0ixhx8mZ4beKkIbuDPk7N8yXQnAP2PIIeV7PyaFToXwR0gYE9dJ_uhH_rYJwx7g2eM1PjCQh9IOy-p-KNKy2iCL-4D4kG3CQIPXLe4AvBIEPVM5IksPD_m8" />
<div className="flex-1 min-w-0">
<p className="font-label-md text-label-md text-surface-variant truncate">Jane Doe</p>
<p className="text-[10px] text-surface-variant/60 truncate">Admin</p>
</div>
</div>
</div>
</nav>
 Main Content Area 
<main className="flex-1 ml-0 md:ml-[280px] flex flex-col min-h-screen bg-background relative z-0">
{/* TopAppBar */}
<header className="docked full-width top-0 sticky z-40 bg-surface/80 dark:bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-xl py-sm max-w-container-max mx-auto h-[64px]">
<div className="flex items-center gap-lg">
<button className="md:hidden p-xs rounded-full hover:bg-surface-variant text-on-surface transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="hidden md:flex gap-md">
<a className="font-title-md text-title-md font-body-md text-body-md text-primary border-b-2 border-primary pb-1 active:opacity-80 transition-opacity" href="#">Directory</a>
<a className="font-title-md text-title-md font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity" href="#">Contracts</a>
<a className="font-title-md text-title-md font-body-md text-body-md text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity" href="#">Invoices</a>
</div>
</div>
<div className="flex-1 max-w-md mx-lg hidden sm:block">
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">search</span>
<input className="w-full h-10 pl-10 pr-4 bg-surface-container-lowest border border-outline-variant rounded-full font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm" placeholder="Search vendors, categories, or IDs..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="hidden sm:flex items-center justify-center bg-primary-container text-on-primary-container font-label-md text-label-md h-10 px-lg rounded-full hover:bg-primary hover:shadow-md transition-all">
                    Add Vendor
                </button>
<div className="flex items-center gap-xs ml-sm border-l border-outline-variant/30 pl-sm">
<button className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">apps</span>
</button>
<button className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors hidden md:block">
<span className="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
{/* Page Content */}
<div className="flex-1 overflow-auto p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full">
{/* Page Header */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Vendor Directory</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage and monitor all active supplier relationships.</p>
</div>
<div className="flex gap-sm">
<button className="flex items-center gap-xs px-md py-sm bg-surface-container border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">tune</span>
                        Filter
                    </button>
<button className="flex items-center gap-xs px-md py-sm bg-surface-container border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
</div>
</div>
{/* Key Metrics Bento */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-xl">
<div className="glass-panel p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>groups</span>
</div>
<span className="font-label-md text-label-md text-surface-tint bg-primary/10 px-2 py-1 rounded-full">+12% YoY</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Total Active Vendors</p>
<p className="font-headline-lg text-headline-lg text-on-surface mt-xs">1,248</p>
</div>
<div className="glass-panel p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-full bg-tertiary-container/10 flex items-center justify-center text-tertiary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>account_balance_wallet</span>
</div>
<span className="font-label-md text-label-md text-surface-tint bg-primary/10 px-2 py-1 rounded-full">+5.4% YoY</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">YTD Managed Spend</p>
<p className="font-headline-lg text-headline-lg text-on-surface mt-xs">$42.8M</p>
</div>
<div className="glass-panel p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-md">
<div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>warning</span>
</div>
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-variant px-2 py-1 rounded-full">Requires Action</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Expiring Contracts (30d)</p>
<p className="font-headline-lg text-headline-lg text-on-surface mt-xs">14</p>
</div>
</div>
{/* Data Table Card */}
<div className="glass-panel rounded-xl shadow-sm overflow-hidden flex flex-col">
{/* Table Header / Tools */}
<div className="p-md border-b border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-md bg-surface-container-lowest/50">
<div className="flex items-center gap-sm overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto hide-scrollbar">
<button className="px-md py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md border border-primary/20 whitespace-nowrap">All Vendors</button>
<button className="px-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/50 hover:bg-surface-variant transition-colors whitespace-nowrap">Electronics</button>
<button className="px-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/50 hover:bg-surface-variant transition-colors whitespace-nowrap">Logistics</button>
<button className="px-md py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/50 hover:bg-surface-variant transition-colors whitespace-nowrap">Facilities</button>
</div>
<div className="flex items-center gap-sm w-full sm:w-auto">
<span className="text-sm text-on-surface-variant whitespace-nowrap font-label-md">Sort by:</span>
<select className="form-select py-1 pl-3 pr-8 rounded-lg border-outline-variant bg-transparent text-sm focus:ring-primary focus:border-primary font-label-md">
<option>Spend (High to Low)</option>
<option>Name (A-Z)</option>
<option>Lead Time (Fastest)</option>
</select>
</div>
</div>
{/* Table */}
<div className="overflow-x-auto w-full">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/30 bg-surface-container-lowest/80 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
<th className="p-md font-semibold w-12 text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
</th>
<th className="p-md font-semibold">Vendor Details</th>
<th className="p-md font-semibold">Category</th>
<th className="p-md font-semibold">Status</th>
<th className="p-md font-semibold text-right">YTD Spend</th>
<th className="p-md font-semibold text-right">Avg Lead Time</th>
<th className="p-md font-semibold w-16"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
{/* Row 1 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="p-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center justify-center overflow-hidden shrink-0">
<img alt="Tech Corp Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfa4LlEGN3iYjy_PzI8G_m9agbCz9Qch0ImIhay3-1lLn5tUuqKZAEEufX8vizv3oXIL5ma4hEjXB0Qtn9mskOcn_B9hLEnga4vauTCvckfzdES9cpAxsveTB42nyLyHBCjNgrnWaPJrNiesLHVdOxNWU_nylCHsCG_4pApAMXEPKfs04KMACnfxsBWaBihtttmu-Hn7jJR7ZABUhRI71rQVQcibf0h2diYm8OB622s1sSonhUAazHKC_a-EAFRgPZcxKH3d-B_lo" />
</div>
<div>
<p className="font-semibold text-on-surface group-hover:text-primary transition-colors">TechCorp Global Solutions</p>
<p className="text-[12px] text-on-surface-variant">ID: VEN-1042</p>
</div>
</div>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/20">
<span className="material-symbols-outlined text-[14px]">memory</span>
                                        Electronics
                                    </span>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#E6F4EA] text-[#137333] font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span>
                                        Active
                                    </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm font-semibold">
                                    $2,450,000
                                </td>
<td className="p-md text-right">
<span className="font-semibold text-on-surface">14 days</span>
</td>
<td className="p-md text-center">
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="p-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center justify-center overflow-hidden shrink-0">
<img alt="FastLog Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHfzYNCTB6oFcE9frQSC0DCWAuVoCK8_0GEbRNhl1JAj3Pa435jQn6hIOOSJZqXoGw1H2BwSs7XsM0Ib28D-iOpBueKolmgrmmcEQAnoSsbaDsSTMbwv5sqUiHaqN9DBa4qShbRPANk1BAlOhKnOuHxlRKKnCpV-bfsyMNyY_aInutwj2e7F3xBtw6uDY1xUwdDUHYjNnY1Y8U3BmZURMYEWQOU_prf5MlscR_LL9JX0sWl2b52uEWmNMWpAtLjJmZH2w15YPAphw" />
</div>
<div>
<p className="font-semibold text-on-surface group-hover:text-primary transition-colors">FastLog Freight Co.</p>
<p className="text-[12px] text-on-surface-variant">ID: VEN-2089</p>
</div>
</div>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/20">
<span className="material-symbols-outlined text-[14px]">local_shipping</span>
                                        Logistics
                                    </span>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#FEF7E0] text-[#B06000] font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#B06000]"></span>
                                        Onboarding
                                    </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm font-semibold text-on-surface-variant">
                                    $0
                                </td>
<td className="p-md text-right">
<span className="text-on-surface-variant italic text-sm">Pending</span>
</td>
<td className="p-md text-center">
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="p-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="p-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center justify-center overflow-hidden shrink-0">
<img alt="Nexus Mfg Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGzsYRoxu71bGdGbAwJGtcarwoltxk0eq3Vpf5u1dYv4IgYBknkNuVoJl9BdxkfX9yy5ve2OMCi4i07YJ3CW9BJvxKReeIgCL09STeO9BS99KhvfuggUGPAAbRslECpm__grUEyW-CnBX9tfAeEmiX-6bd6S32DQWhZrNY9dAmg-F8B7hndz9iPapIwqM5riM73hC9PqaT92eXPLRR5RucLYo95dJZbIwDNbnWnmEEVdgqSDPbufAsBxs1R34b_9hL3sA4IZJ4wD0" />
</div>
<div>
<p className="font-semibold text-on-surface group-hover:text-primary transition-colors">Nexus Manufacturing Ltd.</p>
<p className="text-[12px] text-on-surface-variant">ID: VEN-0844</p>
</div>
</div>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/20">
<span className="material-symbols-outlined text-[14px]">precision_manufacturing</span>
                                        Hardware
                                    </span>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#E6F4EA] text-[#137333] font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#137333]"></span>
                                        Active
                                    </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm font-semibold">
                                    $8,920,500
                                </td>
<td className="p-md text-right">
<span className="font-semibold text-on-surface">45 days</span>
</td>
<td className="p-md text-center">
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group opacity-70">
<td className="p-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
</td>
<td className="p-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center justify-center overflow-hidden shrink-0 grayscale">
<img alt="Old Supplier Logo" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxh6P8JqTQVm4QnWf1MYulzW0p3e50S7I1lUBiCf0OjWo2c35cTYSv9K-9YSAwBEJl9pv6vKik6Vig3UJ19VXO0VNC2uJlVELJk0913himkTg3A5FWh_aa9M3F4pFsgY14jVYs8EYWt7VNy6hPVhXQKU-YwWuY6jlZA8dHiLtjWGdpii7wLc1AD2Kbbs_hO5-N23Y-CK8Meyrsqk0vkZCHoaO5RawKnTP9078Gp_yYMwgARPCfT_eE7vS3skO3WlM0_ZqMlr2isGU" />
</div>
<div>
<p className="font-semibold text-on-surface group-hover:text-primary transition-colors">Legacy Office Supplies</p>
<p className="text-[12px] text-on-surface-variant">ID: VEN-0102</p>
</div>
</div>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-md text-label-md border border-outline-variant/20">
<span className="material-symbols-outlined text-[14px]">inventory_2</span>
                                        Facilities
                                    </span>
</td>
<td className="p-md">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                        Inactive
                                    </span>
</td>
<td className="p-md text-right font-code-sm text-code-sm font-semibold text-on-surface-variant">
                                    $45,200
                                </td>
<td className="p-md text-right text-on-surface-variant">
<span>--</span>
</td>
<td className="p-md text-center">
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="p-md border-t border-outline-variant/30 flex items-center justify-between bg-surface-container-lowest/50 mt-auto">
<p className="text-sm text-on-surface-variant font-label-md">Showing 1 to 10 of 1,248 vendors</p>
<div className="flex items-center gap-xs">
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant transition-colors disabled:opacity-50">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded-md text-on-surface-variant hover:bg-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded-md text-on-surface-variant hover:bg-surface-variant font-label-md text-label-md flex items-center justify-center transition-colors">3</button>
<span className="text-on-surface-variant px-1">...</span>
<button className="p-1 rounded-md text-on-surface-variant hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default VendorDirectoryBoard;
