import React from 'react';
import '../style/Dashboard.css';

const VendorPerformanceProfile: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="bg-inverse-surface dark:bg-inverse-surface fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md flex flex-col py-md px-lg z-50">
<div className="mb-xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md">
                C
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-primary-fixed">CommSync</h1>
<p className="text-surface-variant/60 font-label-md">Enterprise ERP</p>
</div>
</div>
<button className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-title-md flex items-center justify-center gap-sm mb-xl hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined">add</span>
            Quick Action
        </button>
<ul className="flex flex-col gap-sm flex-1">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-on-primary-fixed-variant/20 scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined" data-weight="fill">factory</span>
                    Vendors
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
                    Procurement
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">payments</span>
                    Payments
                </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">verified_user</span>
                    Compliance
                </a>
</li>
</ul>
<div className="mt-auto pt-lg border-t border-surface-variant/20">
<ul className="flex flex-col gap-sm">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">settings</span>
                        Settings
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant/80 font-body-md hover:bg-primary-fixed-variant/10 hover:text-primary-fixed-dim transition-colors scale-95 duration-150 ease-in-out" href="#">
<span className="material-symbols-outlined">help</span>
                        Support
                    </a>
</li>
</ul>
</div>
</nav>
 Main Content Area 
<div className="ml-[280px] flex-1 flex flex-col h-full bg-surface-container-lowest">
{/* TopAppBar */}
<header className="bg-surface/80 dark:bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-40 border-b border-outline-variant/30 shadow-sm">
<div className="flex justify-between items-center w-full px-xl py-sm max-w-container-max mx-auto h-[64px]">
<div className="flex items-center gap-xl">
<span className="font-headline-md text-headline-md font-black text-on-surface dark:text-on-surface">CommSync Vendor Management</span>
<nav className="hidden md:flex items-center gap-lg ml-lg">
<a className="font-title-md text-title-md text-primary border-b-2 border-primary pb-1 active:opacity-80 transition-opacity" href="#">Directory</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity" href="#">Contracts</a>
<a className="font-title-md text-title-md text-on-surface-variant hover:text-primary transition-all duration-200 active:opacity-80 transition-opacity" href="#">Invoices</a>
</nav>
</div>
<div className="flex items-center gap-md">
<button className="bg-primary-container text-on-primary-container px-md py-xs rounded-lg font-label-md flex items-center gap-xs hover:bg-primary hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Add Vendor
                    </button>
<div className="flex items-center text-primary dark:text-primary-fixed-dim">
<button className="p-xs rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-xs rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">apps</span></button>
<button className="p-xs rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">account_circle</span></button>
</div>
</div>
</div>
</header>
{/* Main Canvas */}
<main className="flex-1 overflow-y-auto p-margin-desktop">
<div className="max-w-[1200px] mx-auto flex flex-col gap-lg">
{/* Header Profile Section */}
<section className="glass-card rounded-xl p-lg flex flex-col md:flex-row gap-lg items-start md:items-center relative overflow-hidden">
{/* Subtle background decoration */}
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="w-24 h-24 rounded-xl bg-surface-container flex items-center justify-center shrink-0 border border-outline-variant/30 overflow-hidden shadow-sm">
<img alt="TechNova Solutions Logo" className="w-full h-full object-cover opacity-90" data-alt="A clean, modern corporate logo design for a technology company. The logo features sharp geometric shapes in shades of deep blue and silver on a pristine white background. The aesthetic is professional, minimalist, and authoritative, suitable for an enterprise software vendor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgWnxiNpV8WpGjhgFvqkK6htp4H5gnBHdojQIVcmT-VeGkHpNiniUEL8YIPUwxj8yl4iTWX8L_3TPXYsELcptOuj-rcqnxV6G86v1K7jsJxOL9ymTJ9Joo6zwUD5KyENcPTXV9OjySJQycZELzb2sjE5mF4IXBiQMHFw7lMbuwQAuJGZ0E9yPUMO2HYUuUTq9rY05ywdmrr5oFout3DPeQUx8-j3uxmZmBqyFbdzz3IC1h-ShAXabZenHfkdX9SxsnXXOabhTgWM8" />
</div>
<div className="flex-1">
<div className="flex items-center gap-sm mb-xs">
<h2 className="font-headline-lg text-headline-lg text-on-surface">TechNova Solutions</h2>
<span className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Active</span>
</div>
<p className="font-body-md text-on-surface-variant mb-md max-w-2xl">Providing enterprise-grade cloud infrastructure and managed IT services globally. Primary vendor for cloud compute resources since Q2 2021.</p>
<div className="flex flex-wrap gap-md">
<div className="flex items-center gap-xs text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                San Jose, CA
                            </div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[16px]">language</span>
                                technovasolutions.com
                            </div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[16px]">person</span>
                                Sarah Jenkins (Account Rep)
                            </div>
</div>
</div>
<div className="shrink-0 flex flex-col items-center md:items-end justify-center h-full pl-lg border-l border-outline-variant/20">
<span className="font-label-md text-on-surface-variant mb-xs">Overall Performance</span>
<div className="flex items-center gap-xs text-primary mb-xs">
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined" data-weight="fill">star</span>
<span className="material-symbols-outlined text-outline-variant">star_half</span>
</div>
<span className="font-headline-md text-headline-md text-on-surface">4.2 / 5.0</span>
</div>
</section>
{/* KPI Bento Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
{/* Card 1 */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-on-surface-variant">Total Spend (YTD)</span>
<span className="material-symbols-outlined text-outline">payments</span>
</div>
<div className="font-headline-lg text-headline-lg text-on-surface mb-xs">$1.24M</div>
<div className="flex items-center gap-xs text-primary font-label-md">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                            +12% vs last year
                        </div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-on-surface-variant">Orders Fulfilled</span>
<span className="material-symbols-outlined text-outline">inventory_2</span>
</div>
<div className="font-headline-lg text-headline-lg text-on-surface mb-xs">842</div>
<div className="flex items-center gap-xs text-on-surface-variant font-label-md">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                            Across 12 categories
                        </div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-tertiary-container scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-on-surface-variant">On-Time Delivery</span>
<span className="material-symbols-outlined text-outline">local_shipping</span>
</div>
<div className="font-headline-lg text-headline-lg text-on-surface mb-xs">96.4%</div>
<div className="flex items-center gap-xs text-tertiary-container font-label-md">
<span className="material-symbols-outlined text-[14px]">warning</span>
                            -2.1% this quarter
                        </div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest rounded-xl p-md border border-outline-variant/30 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom"></div>
<div className="flex justify-between items-start mb-md">
<span className="font-label-md text-on-surface-variant">Quality Score</span>
<span className="material-symbols-outlined text-outline">high_quality</span>
</div>
<div className="font-headline-lg text-headline-lg text-on-surface mb-xs">99.8%</div>
<div className="flex items-center gap-xs text-primary font-label-md">
<span className="material-symbols-outlined text-[14px]">done_all</span>
                            Top tier supplier
                        </div>
</div>
</section>
{/* Bottom Section: Contracts & Transactions */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-lg">
{/* Active Contracts */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm flex flex-col">
<div className="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface/50 rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-surface">Active Contracts</h3>
<button className="text-primary font-label-md hover:underline">View All</button>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 flex justify-between items-center cursor-pointer">
<div>
<div className="font-title-md text-on-surface">Cloud Infrastructure Master Services</div>
<div className="font-label-md text-on-surface-variant">MSA-2021-0042 • Expires in 8 months</div>
</div>
<div className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded text-xs font-medium">Active</div>
</div>
<div className="p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 flex justify-between items-center cursor-pointer">
<div>
<div className="font-title-md text-on-surface">Q3 Hardware Provisioning</div>
<div className="font-label-md text-on-surface-variant">PO-23-9921 • Expires in 2 months</div>
</div>
<div className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded text-xs font-medium">Active</div>
</div>
<div className="p-sm rounded-lg hover:bg-surface-container-low transition-colors border border-transparent hover:border-outline-variant/30 flex justify-between items-center cursor-pointer">
<div>
<div className="font-title-md text-on-surface">Enterprise Support Tier 1</div>
<div className="font-label-md text-on-surface-variant">SLA-2022-011 • Auto-renews</div>
</div>
<div className="bg-primary-fixed text-on-primary-fixed px-2 py-1 rounded text-xs font-medium">Active</div>
</div>
</div>
</div>
{/* Recent Transactions */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm flex flex-col">
<div className="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface/50 rounded-t-xl">
<h3 className="font-title-md text-title-md text-on-surface">Recent Transactions</h3>
<button className="text-primary font-label-md hover:underline">View Ledger</button>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="flex items-center justify-between p-sm border-b border-outline-variant/10 last:border-0">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[16px]">receipt_long</span>
</div>
<div>
<div className="font-body-md text-on-surface">Invoice #INV-8823</div>
<div className="font-label-md text-on-surface-variant">Oct 12, 2023</div>
</div>
</div>
<div className="text-right">
<div className="font-title-md text-on-surface">$45,200.00</div>
<div className="font-label-md text-primary">Paid</div>
</div>
</div>
<div className="flex items-center justify-between p-sm border-b border-outline-variant/10 last:border-0">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[16px]">receipt_long</span>
</div>
<div>
<div className="font-body-md text-on-surface">Invoice #INV-8790</div>
<div className="font-label-md text-on-surface-variant">Sep 28, 2023</div>
</div>
</div>
<div className="text-right">
<div className="font-title-md text-on-surface">$12,450.00</div>
<div className="font-label-md text-primary">Paid</div>
</div>
</div>
<div className="flex items-center justify-between p-sm border-b border-outline-variant/10 last:border-0">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded-full bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined text-[16px]">pending</span>
</div>
<div>
<div className="font-body-md text-on-surface">Invoice #INV-8901</div>
<div className="font-label-md text-on-surface-variant">Oct 20, 2023</div>
</div>
</div>
<div className="text-right">
<div className="font-title-md text-on-surface">$89,000.00</div>
<div className="font-label-md text-tertiary-container">Pending Approval</div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
};

export default VendorPerformanceProfile;
