import React from 'react';
import '../style/Dashboard.css';

const CustomerInvoiceDetails: React.FC = () => {
  return (
    <>
      
 SideNavBar (Desktop) 
<nav className="hidden md:flex flex-col h-full w-[280px] z-40 shadow-xl bg-inverse-surface dark:bg-surface-container-lowest py-md gap-base shrink-0">
{/* Brand */}
<div className="px-gutter mb-lg">
<h1 className="font-headline-md text-headline-md font-black text-surface-bright flex items-center gap-sm">
<span className="material-symbols-outlined text-primary-fixed">diamond</span>
                CommSync
            </h1>
<p className="font-body-md text-body-md text-surface-variant mt-sm">Enterprise Suite</p>
</div>
{/* CTA */}
<div className="px-md mb-lg">
<button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded-lg hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">add</span>
                Create New
            </button>
</div>
{/* Navigation Links */}
<div className="flex-1 flex flex-col gap-base overflow-y-auto px-xs">
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">person_search</span>
                CRM
            </a>
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
                Purchase
            </a>
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg bg-primary-container text-on-primary-container scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">receipt_long</span>
                Invoices
            </a>
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">analytics</span>
                Analytics
            </a>
</div>
{/* Footer Links */}
<div className="mt-auto flex flex-col gap-base px-xs pt-md border-t border-surface-variant/20">
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">support_agent</span>
                Support
            </a>
<a className="flex items-center gap-md py-sm px-md mx-2 rounded-lg text-surface-variant hover:bg-surface-variant/20 transition-all duration-200 scale-95 active:scale-90 transition-transform font-body-md text-body-md" href="#">
<span className="material-symbols-outlined">account_circle</span>
                Account
            </a>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col h-full overflow-hidden relative">
{/* TopNavBar (Mobile only since sidebar takes over desktop, but adding a simplified top bar for desktop context if needed, usually ERPs have a global search top bar) */}
<header className="flex items-center justify-between px-margin-desktop h-16 w-full z-30 bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/30 shrink-0">
<div className="flex items-center gap-md md:hidden">
<span className="material-symbols-outlined text-primary cursor-pointer">menu</span>
<span className="font-headline-md text-headline-md font-bold text-primary">CommSync</span>
</div>
{/* Breadcrumbs (Desktop) */}
<div className="hidden md:flex items-center gap-xs font-body-md text-body-md text-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Invoices</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-on-surface font-medium">INV-2023-0891</span>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-surface-variant">search</span>
<input className="pl-xl pr-md py-sm bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary text-body-md w-64" placeholder="Search..." type="text" />
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">notifications</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-80">help_outline</button>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPZFZ_RIhC_rUdFLclZEym_GEothm8qD-zszJO_XIrAtIjCSLK7jUCnJ2IaUjeN-Tv0d-3CHuZtEsXhphllNFJ1RxJoV2SKeNNVmSwzxp-DC8tDTcJq93dqCDRIeATqgYp0-p3MiZeat_9lFwD1Vhi5HOKpUktXazM5vbEKY9AsBL6iypVf7TSK04rgOJgzhFy4GdA-ubK3TkwDLtlaAB60xPv2n55-K60L6xGqhcBsuJUuiCDebYxj6GC1T2gzjQhJfVIX6nrTbo" />
</div>
</header>
{/* Scrollable Canvas */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface">
<div className="max-w-container-max mx-auto flex flex-col xl:flex-row gap-gutter">
{/* Left Column: Details */}
<div className="flex-1 flex flex-col gap-gutter">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-md">
<div>
<div className="flex items-center gap-md mb-xs">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Invoice #INV-2023-0891</h2>
<span className="px-sm py-xs bg-error-container/50 text-on-error-container font-label-md text-label-md rounded-full border border-error/20 flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-error"></span> Overdue
                                </span>
</div>
<p className="font-body-md text-body-md text-surface-variant">Issued on Aug 12, 2023 • Due Aug 26, 2023</p>
</div>
<div className="flex items-center gap-sm">
<button className="px-md py-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant/50 transition-colors flex items-center gap-xs h-10">
<span className="material-symbols-outlined text-sm">download</span> Download PDF
                            </button>
<button className="px-md py-sm bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant/50 transition-colors flex items-center gap-xs h-10">
<span className="material-symbols-outlined text-sm">forward_to_inbox</span> Send Reminder
                            </button>
<button className="px-md py-sm bg-primary-container text-on-primary-container hover:opacity-90 font-label-md text-label-md rounded-lg transition-opacity flex items-center gap-xs h-10 shadow-sm">
<span className="material-symbols-outlined text-sm">payments</span> Record Payment
                            </button>
</div>
</div>
{/* Line Items Card (Glassmorphic) */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden backdrop-blur-md">
<div className="p-md border-b border-outline-variant/20 bg-surface-container-low/50">
<h3 className="font-title-md text-title-md text-on-surface">Itemized Manifest</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/20 text-surface-variant font-label-md text-label-md">
<th className="p-md font-medium">Description</th>
<th className="p-md font-medium text-right">Qty</th>
<th className="p-md font-medium text-right">Rate</th>
<th className="p-md font-medium text-right">Amount</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-md">
<div className="font-medium">Enterprise Software License</div>
<div className="text-surface-variant text-sm mt-1">Annual subscription for 50 users</div>
</td>
<td className="p-md text-right">1</td>
<td className="p-md text-right font-code-sm text-code-sm">$12,000.00</td>
<td className="p-md text-right font-code-sm text-code-sm font-medium">$12,000.00</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-md">
<div className="font-medium">Implementation Services</div>
<div className="text-surface-variant text-sm mt-1">Data migration and initial setup (Fixed fee)</div>
</td>
<td className="p-md text-right">1</td>
<td className="p-md text-right font-code-sm text-code-sm">$3,500.00</td>
<td className="p-md text-right font-code-sm text-code-sm font-medium">$3,500.00</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors">
<td className="p-md">
<div className="font-medium">Premium Support Package</div>
<div className="text-surface-variant text-sm mt-1">24/7 technical support access</div>
</td>
<td className="p-md text-right">12</td>
<td className="p-md text-right font-code-sm text-code-sm">$150.00</td>
<td className="p-md text-right font-code-sm text-code-sm font-medium">$1,800.00</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Payment History (Bento Style Card) */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden">
<div className="p-md border-b border-outline-variant/20 flex justify-between items-center">
<h3 className="font-title-md text-title-md text-on-surface">Payment History</h3>
<span className="font-label-md text-label-md text-surface-variant">2 Transactions</span>
</div>
<div className="p-md flex flex-col gap-sm">
<div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-primary-fixed/30 text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-sm">account_balance</span>
</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-surface">Wire Transfer</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 15, 2023 • Ref: WT-099281</p>
</div>
</div>
<span className="font-code-sm text-code-sm text-on-surface font-medium">$5,000.00</span>
</div>
<div className="flex items-center justify-between p-sm rounded-lg hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-primary-fixed/30 text-on-primary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-sm">credit_card</span>
</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-surface">Credit Card (Ending in 4242)</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 20, 2023 • Ref: CC-110029</p>
</div>
</div>
<span className="font-code-sm text-code-sm text-on-surface font-medium">$2,300.00</span>
</div>
</div>
</div>
</div>
{/* Right Column: Context & Summary (Sidebar equivalent) */}
<aside className="w-full xl:w-[360px] flex flex-col gap-gutter shrink-0">
{/* Payment Summary (Hero Metric) */}
<div className="bg-primary text-on-primary rounded-xl p-lg shadow-sm relative overflow-hidden">
{/* Abstract pattern background */}
<div className="absolute inset-0 opacity-10" style={{"backgroundImage": "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", "backgroundSize": "16px 16px"}}></div>
<h3 className="font-body-md text-body-md opacity-90 relative z-10">Amount Due</h3>
<p className="font-display-lg text-display-lg font-bold mt-xs mb-md relative z-10">$10,000.00</p>
<div className="space-y-sm font-body-md text-body-md relative z-10 border-t border-white/20 pt-md">
<div className="flex justify-between">
<span className="opacity-80">Subtotal</span>
<span>$17,300.00</span>
</div>
<div className="flex justify-between">
<span className="opacity-80">Tax (0%)</span>
<span>$0.00</span>
</div>
<div className="flex justify-between">
<span className="opacity-80">Total</span>
<span className="font-semibold">$17,300.00</span>
</div>
<div className="flex justify-between text-tertiary-fixed pt-sm">
<span>Amount Paid</span>
<span>-$7,300.00</span>
</div>
</div>
</div>
{/* Customer Profile */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm p-md">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Bill To</h3>
<div className="flex items-start gap-md mb-md">
<div className="w-12 h-12 rounded-lg bg-surface-variant flex items-center justify-center shrink-0">
<span className="font-title-md text-title-md text-on-surface-variant">A</span>
</div>
<div>
<h4 className="font-body-lg text-body-lg font-medium text-on-surface">Acme Corporation</h4>
<p className="font-body-md text-body-md text-surface-variant">Jane Doe, Procurement</p>
</div>
</div>
<div className="space-y-sm font-body-md text-body-md text-surface-variant border-t border-outline-variant/20 pt-md">
<p className="flex items-center gap-sm"><span className="material-symbols-outlined text-sm">mail</span> jane.doe@acmecorp.com</p>
<p className="flex items-center gap-sm"><span className="material-symbols-outlined text-sm">call</span> +1 (555) 123-4567</p>
<p className="flex items-start gap-sm">
<span className="material-symbols-outlined text-sm mt-1">location_on</span>
<span>1200 Innovation Drive<br />Suite 400<br />San Francisco, CA 94103</span>
</p>
</div>
</div>
{/* Activity Timeline */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm p-md">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Timeline</h3>
<div className="relative border-l-2 border-outline-variant/30 ml-3 space-y-md pb-xs">
{/* Timeline Item: Overdue Reminder */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-error border-2 border-surface-container-lowest"></div>
<p className="font-body-md text-body-md font-medium text-on-surface">Reminder Sent</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 27, 2023 at 09:00 AM</p>
<p className="font-body-md text-body-md text-surface-variant mt-xs bg-surface-container p-xs rounded text-xs">Automated overdue notice sent via email.</p>
</div>
{/* Timeline Item: Viewed */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest"></div>
<p className="font-body-md text-body-md font-medium text-on-surface">Invoice Viewed</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 14, 2023 at 02:15 PM</p>
</div>
{/* Timeline Item: Sent */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
<p className="font-body-md text-body-md font-medium text-on-surface">Invoice Sent</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 12, 2023 at 10:30 AM</p>
</div>
{/* Timeline Item: Created */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-outline border-2 border-surface-container-lowest"></div>
<p className="font-body-md text-body-md font-medium text-on-surface">Invoice Created</p>
<p className="font-label-md text-label-md text-surface-variant">Aug 12, 2023 at 10:15 AM</p>
<p className="font-body-md text-body-md text-surface-variant mt-xs">Created by System Admin.</p>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>

    </>
  );
};

export default CustomerInvoiceDetails;
