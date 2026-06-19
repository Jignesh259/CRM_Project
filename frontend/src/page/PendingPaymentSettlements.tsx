import React from 'react';
import '../style/Dashboard.css';

const PendingPaymentSettlements: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col bg-inverse-surface shadow-xl fixed left-0 top-0 h-screen w-[280px] z-50">
<div className="flex flex-col h-full py-6">
{/* Header/Brand */}
<div className="px-gutter mb-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold">
                    CS
                </div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-surface-lowest">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant">Enterprise ERP</p>
</div>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto">
<ul className="flex flex-col gap-base font-Inter text-body-md font-body-md">
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
                            Dashboard
                        </a>
</li>
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">contacts</span>
                            CRM
                        </a>
</li>
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">monetization_on</span>
                            Sales
                        </a>
</li>
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                            Inventory
                        </a>
</li>
{/* Active State: Finance */}
<li>
<a className="flex items-center gap-sm text-on-primary bg-primary rounded-lg mx-2 my-1 px-4 py-3 shadow-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>account_balance_wallet</span>
                            Finance
                        </a>
</li>
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
                            Reports
                        </a>
</li>
<li>
<a className="flex items-center gap-sm text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
                            Settings
                        </a>
</li>
</ul>
</div>
{/* CTA */}
<div className="px-gutter mt-auto pt-xl border-t border-outline-variant/20">
<button className="w-full bg-primary-container text-on-primary flex items-center justify-center gap-sm py-2 px-4 rounded-lg font-label-md text-label-md hover:bg-primary transition-colors scale-95 active:transition-transform">
<span className="material-symbols-outlined">add</span>
                    New Record
                </button>
</div>
</div>
</nav>
 Main Content Wrapper 
<div className="md:ml-[280px] min-h-screen flex flex-col">
{/* TopAppBar */}
<header className="hidden md:flex fixed top-0 right-0 left-[280px] h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm z-40">
<div className="flex justify-between items-center px-gutter h-full w-full">
{/* Search (on_left logic) */}
<div className="flex-1 max-w-md relative focus-within:ring-2 focus-within:ring-primary/50 rounded-lg">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-body-md font-body-md text-on-surface placeholder:text-outline focus:ring-0" placeholder="Search CommSync..." type="text" />
</div>
{/* Actions */}
<div className="flex items-center gap-md">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-all rounded-full flex items-center justify-center">
<span className="material-symbols-outlined">help</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 ml-2 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional corporate headshot of a business executive wearing a modern, tailored suit against a clean, minimalist light gray background. The lighting is soft and flattering, creating a high-end, authoritative yet approachable persona suitable for an enterprise software profile picture. The mood is confident and polished." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMchGKm02pxcQrxv9S4wN1n1As1OinbIYnxHgeY2G1FPvFHgderDv-ihE2b4kyK_uh5Tcl0_TTz5jEPBWCe2o5Pa5RZQsfrOaNiJRUoLaCqauKmcQX8qVcSTSji6qfF6s1TEvvvXgd0K2oUbIL5LDA9FTalQvor1UQZIgNZqn7qVkOCJ2h0_NAWNuM7sla2-bOqWWl9Z3twpQg3iJkyVl3AlDYS7hZdSUq1fjuJy_8PopIjBOZ59pXinnkxNZ7b1BAJKYqLjH8Ayc" />
</div>
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 pt-20 px-margin-mobile md:px-gutter pb-xl max-w-container-max mx-auto w-full">
{/* Page Header */}
<div className="mb-xl">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Pending Settlements</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Review and process incoming payments awaiting financial clearance.</p>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Main Pending List (8 columns) */}
<div className="lg:col-span-8 flex flex-col gap-md">
{/* Filters/Controls */}
<div className="flex flex-wrap items-center justify-between gap-md mb-2">
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-label-md text-label-md border border-primary/20">All Pending</button>
<button className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant font-label-md text-label-md transition-colors">Requires Review</button>
</div>
<button className="flex items-center gap-xs text-primary font-label-md text-label-md hover:underline">
<span className="material-symbols-outlined text-[18px]">sort</span> Sort by Date
                        </button>
</div>
{/* List Items (Glassmorphism Cards) */}
<div className="flex flex-col gap-sm">
{/* Item 1 */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md hover:shadow-md hover:border-primary/30 transition-all group">
<div className="flex items-start gap-md flex-1">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined">corporate_fare</span>
</div>
<div>
<div className="flex items-center gap-sm mb-1">
<h3 className="font-title-md text-title-md text-on-surface">Acme Corp</h3>
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/10 text-tertiary-container font-code-sm text-code-sm">TRX-8921</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Invoice #INV-2023-089 • Wire Transfer</p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-xl sm:gap-lg flex-1 sm:flex-none border-t sm:border-t-0 border-outline-variant/20 pt-md sm:pt-0 mt-md sm:mt-0">
<div className="text-left sm:text-right">
<div className="font-title-md text-title-md text-on-surface">$24,500.00</div>
{/* Highlighted Settlement Date */}
<div className="font-label-md text-label-md text-tertiary flex items-center gap-xs justify-start sm:justify-end mt-1">
<span className="material-symbols-outlined text-[14px]">calendar_clock</span>
                                        Est. Tomorrow
                                    </div>
</div>
{/* Actions */}
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-tertiary hover:bg-tertiary/10 transition-colors" title="Flag for Review">
<span className="material-symbols-outlined text-[20px]">flag</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</div>
</div>
{/* Item 2 */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md hover:shadow-md hover:border-primary/30 transition-all group">
<div className="flex items-start gap-md flex-1">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
<span className="material-symbols-outlined">storefront</span>
</div>
<div>
<div className="flex items-center gap-sm mb-1">
<h3 className="font-title-md text-title-md text-on-surface">Globex Inc.</h3>
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/10 text-tertiary-container font-code-sm text-code-sm">TRX-8922</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Invoice #INV-2023-091 • ACH</p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-xl sm:gap-lg flex-1 sm:flex-none border-t sm:border-t-0 border-outline-variant/20 pt-md sm:pt-0 mt-md sm:mt-0">
<div className="text-left sm:text-right">
<div className="font-title-md text-title-md text-on-surface">$8,250.00</div>
<div className="font-label-md text-label-md text-outline-variant flex items-center gap-xs justify-start sm:justify-end mt-1">
<span className="material-symbols-outlined text-[14px]">calendar_clock</span>
                                        Est. Oct 28
                                    </div>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-tertiary hover:bg-tertiary/10 transition-colors" title="Flag for Review">
<span className="material-symbols-outlined text-[20px]">flag</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</div>
</div>
{/* Item 3 */}
<div className="bg-surface rounded-xl shadow-sm border border-outline-variant/30 p-md flex flex-col sm:flex-row sm:items-center justify-between gap-md hover:shadow-md hover:border-primary/30 transition-all group">
<div className="flex items-start gap-md flex-1">
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center text-on-error-container shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<div className="flex items-center gap-sm mb-1">
<h3 className="font-title-md text-title-md text-on-surface">Stark Industries</h3>
<span className="px-2 py-0.5 rounded-sm bg-tertiary-container/10 text-tertiary-container font-code-sm text-code-sm">TRX-8919</span>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-md text-[10px] uppercase tracking-wider">Delayed</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Invoice #INV-2023-085 • Wire Transfer</p>
</div>
</div>
<div className="flex items-center justify-between sm:justify-end gap-xl sm:gap-lg flex-1 sm:flex-none border-t sm:border-t-0 border-outline-variant/20 pt-md sm:pt-0 mt-md sm:mt-0">
<div className="text-left sm:text-right">
<div className="font-title-md text-title-md text-on-surface">$112,000.00</div>
<div className="font-label-md text-label-md text-error flex items-center gap-xs justify-start sm:justify-end mt-1">
<span className="material-symbols-outlined text-[14px]">error</span>
                                        Action Required
                                    </div>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded-full flex items-center justify-center text-tertiary bg-tertiary/10 transition-colors" title="Flag for Review">
<span className="material-symbols-outlined text-[20px]">flag</span>
</button>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:text-primary hover:bg-primary/10 transition-colors" title="Approve">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/* Settlement Insights Panel (4 columns) */}
<div className="lg:col-span-4">
<div className="glass-panel rounded-xl shadow-sm border border-outline-variant/30 p-lg sticky top-24">
<div className="flex items-center gap-sm mb-lg">
<span className="material-symbols-outlined text-primary">insights</span>
<h3 className="font-title-md text-title-md text-on-surface">Settlement Insights</h3>
</div>
{/* Primary Metric */}
<div className="mb-xl">
<p className="font-label-md text-label-md text-on-surface-variant mb-1">Total Pending Inflow</p>
<div className="font-display-lg text-display-lg text-on-surface tracking-tight">$144,750<span className="text-outline-variant text-[24px]">.00</span></div>
</div>
{/* Breakdown */}
<div className="space-y-md">
<h4 className="font-label-md text-label-md text-outline font-semibold uppercase tracking-wider border-b border-outline-variant/30 pb-2">Expected Timeline</h4>
{/* Timeline Row */}
<div>
<div className="flex justify-between items-center mb-1">
<span className="font-body-md text-body-md text-on-surface">Next 24 Hours</span>
<span className="font-body-md text-body-md font-medium text-on-surface">$24,500</span>
</div>
<div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width": "17%"}}></div>
</div>
</div>
{/* Timeline Row */}
<div>
<div className="flex justify-between items-center mb-1">
<span className="font-body-md text-body-md text-on-surface">2 - 7 Days</span>
<span className="font-body-md text-body-md font-medium text-on-surface">$8,250</span>
</div>
<div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-inverse-primary rounded-full" style={{"width": "5%"}}></div>
</div>
</div>
{/* Timeline Row */}
<div>
<div className="flex justify-between items-center mb-1">
<span className="font-body-md text-body-md text-on-surface">Requires Action</span>
<span className="font-body-md text-body-md font-medium text-error">$112,000</span>
</div>
<div className="w-full h-2 bg-error-container rounded-full overflow-hidden">
<div className="h-full bg-error rounded-full" style={{"width": "78%"}}></div>
</div>
</div>
</div>
{/* Quick Action */}
<div className="mt-xl pt-md border-t border-outline-variant/30">
<button className="w-full py-2 px-4 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
                                Export Pending Report
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

export default PendingPaymentSettlements;
