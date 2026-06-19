import React from 'react';
import '../style/Dashboard.css';

const PaymentTransactionDetails: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex bg-inverse-surface dark:bg-inverse-surface font-Inter text-body-md font-body-md shadow-xl fixed left-0 top-0 h-screen w-[280px] flex flex-col h-full py-6 z-50">
<div className="px-6 mb-8 flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg">
                C
            </div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-surface-lowest leading-tight text-white">CommSync</h1>
<p className="text-label-md font-label-md text-outline-variant">Enterprise ERP</p>
</div>
</div>
<div className="flex-1 overflow-y-auto px-2 space-y-1">
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">contacts</span>
<span>CRM</span>
</a>
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">monetization_on</span>
<span>Sales</span>
</a>
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">inventory_2</span>
<span>Inventory</span>
</a>
<a className="flex items-center space-x-3 text-on-primary bg-primary rounded-lg mx-2 my-1 px-4 py-3 hover:bg-primary/90 transition-colors duration-200 shadow-md" href="#">
<span className="material-symbols-outlined text-[20px]">account_balance_wallet</span>
<span className="font-medium">Finance</span>
</a>
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">assessment</span>
<span>Reports</span>
</a>
<a className="flex items-center space-x-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 hover:bg-primary/10 transition-colors duration-200 rounded-lg group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
<span>Settings</span>
</a>
</div>
<div className="px-4 mt-auto pt-6 border-t border-outline/20">
<button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-all duration-200 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>New Record</span>
</button>
</div>
</nav>
 Main Content Area 
<div className="flex-1 md:ml-[280px] flex flex-col h-full bg-surface-container-low">
{/* TopAppBar */}
<header className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md font-Inter text-label-md font-label-md shadow-sm border-b border-outline-variant/30 flex justify-between items-center px-gutter h-16 w-full sticky top-0 z-40">
<div className="flex items-center text-on-surface-variant space-x-2 group">
<span className="material-symbols-outlined text-[20px] cursor-pointer hover:text-primary transition-colors">arrow_back</span>
<span className="font-medium cursor-pointer hover:text-primary transition-colors">Back to Payments</span>
</div>
<div className="flex items-center space-x-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all focus-within:ring-2 focus-within:ring-primary/50 relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-all focus-within:ring-2 focus-within:ring-primary/50">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center overflow-hidden cursor-pointer">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBe4WMFN-HwuULYZnZqd6jirCD55MZQvXk0VZBVIGuasB6Ux2JzxPe1c9T6P0JpwdecZIwmURGjVxwSwoRGGIYW-W7vlzpWnHodkiWSGS4hoXlKn10cA5iqXRkzhrTICr2Hw_2iRlEIHeNUxfqERM2ruBobF0njb7YwFV8wVrBwTJWE8riCNkJP13DKXRLhxSQbuDMs03r932DIX4o3YZEHa3xSsc-d4eZGj9PZZqXiA8pEnD4pIwpvuq02HZatHtVpF05KlAVWNA" />
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 overflow-y-auto p-4 md:p-gutter lg:p-margin-desktop">
<div className="max-w-[1000px] mx-auto space-y-6">
{/* Page Header */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<div className="flex items-center space-x-3 mb-1">
<h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Payment #PAY-2023-0891</h2>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-md font-label-md bg-[#e6f4ea] text-[#1e8e3e] border border-[#ceead6]">
<span className="w-1.5 h-1.5 rounded-full bg-[#1e8e3e] mr-1.5"></span>
                                Completed
                            </span>
</div>
<p className="text-body-md font-body-md text-on-surface-variant">Processed on Oct 24, 2023 at 14:32 PST</p>
</div>
<div className="flex items-center space-x-3">
<button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg hover:bg-surface-container-high hover:border-outline transition-all duration-200 flex items-center space-x-2 shadow-sm font-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">print</span>
<span>Print</span>
</button>
<button className="px-4 py-2 bg-surface text-on-surface border border-outline-variant rounded-lg hover:bg-surface-container-high hover:border-outline transition-all duration-200 flex items-center space-x-2 shadow-sm font-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">receipt_long</span>
<span>Download Receipt</span>
</button>
<button className="px-4 py-2 bg-error/10 text-error border border-error/20 rounded-lg hover:bg-error/20 transition-all duration-200 flex items-center space-x-2 font-label-md font-label-md">
<span className="material-symbols-outlined text-[18px]">undo</span>
<span>Refund Payment</span>
</button>
</div>
</div>
{/* Main Bento Grid */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
{/* Left Column: Overview & Allocations (Span 2) */}
<div className="lg:col-span-2 space-y-6">
{/* Transaction Overview Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:border-primary/20 backdrop-blur-md">
<div className="px-6 py-4 border-b border-outline-variant/20 bg-surface-bright/50">
<h3 className="text-title-md font-title-md text-on-surface flex items-center">
<span className="material-symbols-outlined mr-2 text-outline">info</span>
                                    Transaction Overview
                                </h3>
</div>
<div className="p-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="col-span-2 md:col-span-1">
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Amount Paid</p>
<p className="text-headline-md font-headline-md text-on-surface font-semibold">$12,450.00</p>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Payment Method</p>
<div className="flex items-center text-body-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-[18px] mr-1.5 text-outline">credit_card</span>
                                            Visa •••• 4242
                                        </div>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Date &amp; Time</p>
<p className="text-body-md font-body-md text-on-surface">Oct 24, 2023<br /><span className="text-on-surface-variant text-sm">14:32:45 PST</span></p>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Processor Ref</p>
<p className="text-code-sm font-code-sm text-on-surface bg-surface-container px-2 py-1 rounded inline-block">ch_3N1K2mG...</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant/20 grid grid-cols-2 gap-6">
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Internal Note</p>
<p className="text-body-md font-body-md text-on-surface italic">Payment for Q3 Enterprise Licensing. Processed automatically.</p>
</div>
</div>
</div>
</div>
{/* Allocations Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:border-primary/20 backdrop-blur-md">
<div className="px-6 py-4 border-b border-outline-variant/20 bg-surface-bright/50 flex justify-between items-center">
<h3 className="text-title-md font-title-md text-on-surface flex items-center">
<span className="material-symbols-outlined mr-2 text-outline">account_tree</span>
                                    Allocations
                                </h3>
<button className="text-primary font-label-md font-label-md hover:underline">Edit Allocation</button>
</div>
<div className="p-0">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-label-md font-label-md text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/20">
<th className="px-6 py-3 font-medium">Invoice Number</th>
<th className="px-6 py-3 font-medium">Issue Date</th>
<th className="px-6 py-3 font-medium text-right">Amount Applied</th>
<th className="px-6 py-3 font-medium text-center">Status</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md text-on-surface">
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-medium text-primary group-hover:underline">INV-2023-1102</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 15, 2023</td>
<td className="px-6 py-4 text-right font-medium">$10,000.00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-xs bg-[#e6f4ea] text-[#1e8e3e]">Fully Paid</span>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-medium text-primary group-hover:underline">INV-2023-1105</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 20, 2023</td>
<td className="px-6 py-4 text-right font-medium">$2,450.00</td>
<td className="px-6 py-4 text-center">
<span className="inline-flex px-2 py-0.5 rounded text-xs bg-surface-container-high text-on-surface-variant">Partially Paid</span>
</td>
</tr>
</tbody>
<tfoot className="bg-surface-bright border-t border-outline-variant/20">
<tr>
<td className="px-6 py-4 text-right text-label-md font-label-md text-on-surface-variant uppercase" colSpan={2}>Total Allocated</td>
<td className="px-6 py-4 text-right font-headline-md font-headline-md text-on-surface">$12,450.00</td>
<td></td>
</tr>
</tfoot>
</table>
</div>
</div>
</div>
{/* Right Column: Customer Info & Timeline */}
<div className="space-y-6">
{/* Customer Info Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:border-primary/20 backdrop-blur-md">
<div className="px-6 py-4 border-b border-outline-variant/20 bg-surface-bright/50">
<h3 className="text-title-md font-title-md text-on-surface flex items-center">
<span className="material-symbols-outlined mr-2 text-outline">person</span>
                                    Customer Info
                                </h3>
</div>
<div className="p-6">
<div className="flex items-center space-x-4 mb-6">
<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-headline-md font-headline-md">
                                        AC
                                    </div>
<div>
<p className="text-title-md font-title-md text-on-surface">Acme Corp</p>
<p className="text-body-md font-body-md text-on-surface-variant flex items-center mt-0.5 hover:text-primary cursor-pointer transition-colors">
<span className="material-symbols-outlined text-[16px] mr-1">mail</span>
                                            billing@acmecorp.com
                                        </p>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-outline-variant/20">
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Billing Address</p>
<p className="text-body-md font-body-md text-on-surface leading-relaxed">
                                            123 Innovation Drive<br />
                                            Suite 400<br />
                                            San Francisco, CA 94105<br />
                                            United States
                                        </p>
</div>
<div>
<p className="text-label-md font-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Contact</p>
<p className="text-body-md font-body-md text-on-surface">Sarah Jenkins (AP Manager)</p>
<p className="text-body-md font-body-md text-on-surface-variant">+1 (415) 555-0198</p>
</div>
</div>
</div>
</div>
{/* Timeline / Audit Log */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden transition-all hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] hover:border-primary/20 backdrop-blur-md">
<div className="px-6 py-4 border-b border-outline-variant/20 bg-surface-bright/50">
<h3 className="text-title-md font-title-md text-on-surface flex items-center">
<span className="material-symbols-outlined mr-2 text-outline">history</span>
                                    Timeline
                                </h3>
</div>
<div className="p-6">
<div className="relative border-l-2 border-outline-variant/30 ml-3 space-y-6">
{/* Timeline Item 1 */}
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#e6f4ea] border-2 border-white flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#1e8e3e]"></div>
</div>
<div>
<p className="text-body-md font-body-md font-medium text-on-surface">Payment Settled</p>
<p className="text-label-md font-label-md text-on-surface-variant mt-0.5">Oct 26, 2023 • 09:15 AM</p>
<p className="text-body-sm text-on-surface-variant mt-1">Funds deposited to primary merchant account.</p>
</div>
</div>
{/* Timeline Item 2 */}
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-white flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
<div>
<p className="text-body-md font-body-md font-medium text-on-surface">Payment Captured</p>
<p className="text-label-md font-label-md text-on-surface-variant mt-0.5">Oct 24, 2023 • 14:32 PM</p>
<p className="text-body-sm text-on-surface-variant mt-1">Stripe successfully captured $12,450.00.</p>
</div>
</div>
{/* Timeline Item 3 */}
<div className="relative pl-6">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-outline"></div>
</div>
<div>
<p className="text-body-md font-body-md font-medium text-on-surface">Payment Authorized</p>
<p className="text-label-md font-label-md text-on-surface-variant mt-0.5">Oct 24, 2023 • 14:31 PM</p>
<p className="text-body-sm text-on-surface-variant mt-1">Customer initiated payment via secure portal.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default PaymentTransactionDetails;
