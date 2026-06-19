import React from 'react';
import '../style/Dashboard.css';

const SalesOrderManagement: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<nav className="hidden md:flex flex-col h-full py-lg fixed left-0 top-0 w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-xl z-50">
<div className="px-lg mb-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="sync" style={{"fontVariationSettings": "'FILL' 1"}}>sync</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-bold text-on-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-on-surface-variant/80">Sales Module</p>
</div>
</div>
<div className="px-lg mb-lg">
<button className="w-full bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary transition-colors duration-200 rounded-lg py-sm px-md flex items-center justify-center gap-sm font-title-md text-title-md h-[40px] shadow-sm">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
                New Quotation
            </button>
</div>
<ul className="flex flex-col gap-xs px-md flex-grow">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-primary/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="shopping_cart" style={{"fontVariationSettings": "'FILL' 1"}}>shopping_cart</span>
                    Orders
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="add_shopping_cart">add_shopping_cart</span>
                    Create Order
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="description">description</span>
                    Quotations
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="local_shipping">local_shipping</span>
                    Shipments
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="mt-auto px-md">
<div className="h-px bg-outline-variant/20 mb-sm mx-md"></div>
<ul className="flex flex-col gap-xs">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="help">help</span>
                        Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="account_circle">account_circle</span>
                        Account
                    </a>
</li>
</ul>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-w-0 md:ml-[280px]">
{/* TopNavBar Component */}
<header className="flex justify-between items-center w-full px-lg py-sm bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 border-b border-outline-variant/30 shadow-sm docked full-width top-0 z-40 sticky">
<div className="flex items-center gap-xl">
{/* Mobile Menu Button (Visible only on mobile) */}
<button className="md:hidden text-on-surface p-sm rounded-full hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="hidden md:flex items-center gap-lg">
<span className="font-headline-md text-headline-md font-black text-primary">CommSync CRM</span>
</div>
<div className="relative hidden lg:block w-[320px]">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[20px]" data-icon="search">search</span>
<input className="w-full h-[40px] pl-[36px] pr-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface placeholder:text-outline/70" placeholder="Search orders, customers..." type="text" />
</div>
</div>
<nav className="hidden md:flex items-center gap-lg h-full">
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out h-full flex items-center" href="#">Dashboard</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out h-full flex items-center" href="#">Analytics</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out h-full flex items-center" href="#">Reports</a>
</nav>
<div className="flex items-center gap-md">
<button className="hidden lg:flex items-center justify-center h-[32px] px-md rounded-lg border border-outline-variant text-primary font-label-md text-label-md hover:bg-primary/5 transition-colors">
                    Export
                </button>
<button className="hidden lg:flex items-center justify-center h-[32px] px-md rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors shadow-sm">
                    Create
                </button>
<div className="flex items-center gap-xs border-l border-outline-variant/30 pl-md ml-xs">
<button className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors relative">
<span className="material-symbols-outlined text-[20px]" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="w-[36px] h-[36px] rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="apps">apps</span>
</button>
<button className="ml-sm w-[36px] h-[36px] rounded-full overflow-hidden border border-outline-variant shadow-sm hover:ring-2 hover:ring-primary/30 transition-all">
<img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDARW-52sAOHFu4k9guPu_hO5oqcGLq3QJP3ClhseSyjQVhrNvVsZ-UBs9emxuhqWRCE9AvZe96XjDgIL8YNdzihTAEaodP5pL9PvT3U_YLyn7WHti0QncPM2JXiSj_rCZarzNpaJry8IrWhc6Y2m68Vp8CciIEk-dW83aqhYeK8pn4ttIK_E4MAnFyfVzS6h6sVFbDTgsVavt_tTza37NueNkVsyPYXT8OPDuteZ5GeCKalfYvwfOYmo4C0N7z51wYsyNiDqM9bsg" />
</button>
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden">
{/* Header Section */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-md mb-lg">
<div>
<h2 className="font-headline-lg text-headline-lg font-semibold text-on-background">Sales Orders</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage and track customer orders, fulfillment status, and financial details.</p>
</div>
<div className="flex items-center gap-md">
<button className="h-[40px] px-md rounded-lg border border-outline-variant text-on-surface-variant bg-surface-container-lowest font-label-md text-label-md hover:bg-surface-variant/50 transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="tune">tune</span>
                        Advanced Filters
                    </button>
<button className="h-[40px] px-md rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                        New Sales Order
                    </button>
</div>
</div>
{/* Toolbar / Filters */}
<div className="bg-surface-container-lowest rounded-t-xl border border-outline-variant/30 border-b-0 p-md flex flex-col md:flex-row gap-md items-center justify-between shadow-sm backdrop-blur-md bg-opacity-80">
<div className="flex flex-col sm:flex-row gap-md w-full md:w-auto">
<div className="relative w-full sm:w-[280px]">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]" data-icon="search">search</span>
<input className="w-full h-[36px] pl-[32px] pr-sm rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface text-sm" placeholder="Search Order ID, Customer..." type="text" />
</div>
<div className="flex items-center gap-sm w-full sm:w-auto">
<div className="relative flex-1 sm:flex-none">
<select className="w-full sm:w-[160px] h-[36px] pl-sm pr-lg rounded-lg border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md text-on-surface text-sm appearance-none cursor-pointer">
<option value="">All Statuses</option>
<option value="pending">Pending</option>
<option value="picking">Picking</option>
<option value="shipped">Shipped</option>
<option value="delivered">Delivered</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline text-[18px] pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
<div className="relative flex-1 sm:flex-none">
<button className="w-full sm:w-[200px] h-[36px] px-sm rounded-lg border border-outline-variant bg-surface hover:bg-surface-variant/30 transition-all font-body-md text-body-md text-on-surface text-sm flex items-center justify-between text-left">
<span className="truncate">Last 30 Days</span>
<span className="material-symbols-outlined text-outline text-[18px]" data-icon="calendar_month">calendar_month</span>
</button>
</div>
</div>
</div>
<div className="flex items-center gap-sm self-end md:self-auto text-sm text-on-surface-variant font-label-md">
<span>Showing 1-10 of 245</span>
<div className="flex gap-xs ml-sm">
<button className="w-[32px] h-[32px] rounded border border-outline-variant flex items-center justify-center hover:bg-surface-variant/50 disabled:opacity-50 disabled:cursor-not-allowed">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-[32px] h-[32px] rounded border border-outline-variant flex items-center justify-center hover:bg-surface-variant/50">
<span className="material-symbols-outlined text-[18px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Data Table Card */}
<div className="bg-surface-container-lowest rounded-b-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col relative min-h-[500px]">
<div className="overflow-x-auto table-scrollbar flex-1">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="border-b border-outline-variant/30 bg-surface-container-low/50">
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant w-[48px] text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer" type="checkbox" />
</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant cursor-pointer hover:text-on-surface group transition-colors">
<div className="flex items-center gap-xs">
                                        Order ID
                                        <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity" data-icon="arrow_downward">arrow_downward</span>
</div>
</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant">Customer</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant">Date</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant text-right">Amount</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant">Status</th>
<th className="py-sm px-md font-label-md text-label-md font-semibold text-on-surface-variant text-right w-[80px]">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/10">
{/* Row 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-md px-md">
<a className="font-code-sm text-primary hover:underline" href="#">SO-2023-5001</a>
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<img alt="Avatar for Acme Corp" className="w-[28px] h-[28px] rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTAJGW470ANztRu16qjFNtHGQdNZuRbeS-fYn6g6LazRQGV8OHIOnRijGKpmaAqV2DGwPD56K4vhVEjZXTU8KDraiXnNruPkaX3nvqDKRRSi-eYQODzqDuyGLSk5ohbgEm_3t8HYVBOTojvwHeSvEghskAieAanXDi97GFnM3e5x5acIUBHJ3K0YzVUlTM1nErdVp-c78cHbXUb7moyynFZs54LphTmB2FP7wg_jVetmTgpALQD1CBZZ_rSATVuEWIabGry0jlYq0" />
<span className="font-medium">Acme Corp</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Oct 24, 2023</td>
<td className="py-md px-md text-right font-medium">$12,450.00</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-error-container/30 text-on-error-container font-label-md text-label-md border border-error-container/50">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                                        Pending
                                    </span>
</td>
<td className="py-md px-md text-right">
<button className="w-[32px] h-[32px] rounded-full inline-flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-md px-md">
<a className="font-code-sm text-primary hover:underline" href="#">SO-2023-5002</a>
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<div className="w-[28px] h-[28px] rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-md text-xs font-bold shadow-sm">G</div>
<span className="font-medium">Global Industries</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Oct 23, 2023</td>
<td className="py-md px-md text-right font-medium">$3,200.50</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-label-md border border-outline-variant/30">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                        Picking
                                    </span>
</td>
<td className="py-md px-md text-right">
<button className="w-[32px] h-[32px] rounded-full inline-flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-md px-md">
<a className="font-code-sm text-primary hover:underline" href="#">SO-2023-5003</a>
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<img alt="Avatar for TechFlow" className="w-[28px] h-[28px] rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR8Z37K9knNrpKv2MqkGwjWK4eu4hJBREehKCuFE0t9E-CDPDi8RFI0rdIOa0398Ym6PZ13ddgkL6DLzrfwdhB_-PgXAxPc_4MNnTFBTUa3X7_o_IN5sqAU6nwDxxOBnuH6MXFqDOKl7F3fqLYtAzE5dArMtNcuM4U-i-qTN3MiI41y_v5ZFn7vwB8qdzK22qwEVVj9M8wajI06FSTNk6mmAtLfaCsSUmDDVqbgugV3NcMRQz60t-X1aIZJ6dsnNLuz8inKuOVb4E" />
<span className="font-medium">TechFlow LLC</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Oct 21, 2023</td>
<td className="py-md px-md text-right font-medium">$45,000.00</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-primary-container/30 text-on-primary-fixed-variant font-label-md text-label-md border border-primary-container/50">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Shipped
                                    </span>
</td>
<td className="py-md px-md text-right">
<button className="w-[32px] h-[32px] rounded-full inline-flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-md px-md">
<a className="font-code-sm text-primary hover:underline" href="#">SO-2023-5004</a>
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<img alt="Avatar for Nexus Systems" className="w-[28px] h-[28px] rounded-full object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-eJfgiR-YXdN17K_duxx4E3Ze2yrmrn9c1OE_toSR_P2siIlrIU-9NQQMUkJAFgg6I2oBySahjYN9QGJIe_L7yXkZ36FdP_--9Jav0A6MFt4beSNQfsxySQCrGdDt_lFH7UaNupaJZpplUN1KUviibDi7DJJrirRSPnBc-x1AhAUA_ig4BwqSWZYp5Utkr_jc41w2ZtJXhTYPrhd04TFkpmEGpOpRE3QREp2p8iXG9QSKinczGIv1_IsyuIaJYhCrbgbejud02SI" />
<span className="font-medium">Nexus Systems</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Oct 20, 2023</td>
<td className="py-md px-md text-right font-medium">$1,850.00</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-md text-label-md border border-secondary-container/50">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        Delivered
                                    </span>
</td>
<td className="py-md px-md text-right">
<button className="w-[32px] h-[32px] rounded-full inline-flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-primary/5 transition-colors group bg-surface-container-low/20">
<td className="py-md px-md text-center">
<input className="rounded border-outline-variant text-primary focus:ring-primary rounded-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox" />
</td>
<td className="py-md px-md">
<a className="font-code-sm text-primary hover:underline" href="#">SO-2023-5005</a>
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<div className="w-[28px] h-[28px] rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-xs font-bold shadow-sm">O</div>
<span className="font-medium text-on-surface-variant">Omega Logistics</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Oct 19, 2023</td>
<td className="py-md px-md text-right font-medium text-on-surface-variant">$8,900.00</td>
<td className="py-md px-md">
<span className="inline-flex items-center gap-xs px-2 py-1 rounded-full bg-secondary-container/30 text-on-secondary-fixed-variant font-label-md text-label-md border border-secondary-container/50">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        Delivered
                                    </span>
</td>
<td className="py-md px-md text-right">
<button className="w-[32px] h-[32px] rounded-full inline-flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
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

export default SalesOrderManagement;
