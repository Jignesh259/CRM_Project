import React from 'react';
import '../style/Dashboard.css';

const PurchaseOrderDetails: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<nav className="hidden md:flex flex-col p-md gap-sm bg-inverse-surface dark:bg-surface-container-highest fixed left-0 top-0 h-full w-[280px] shadow-lg z-40">
{/* Header */}
<div className="px-md py-lg mb-sm flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container icon-fill">all_inclusive</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-black text-surface-lowest">Procurement</h1>
<p className="font-label-md text-label-md text-surface-variant">Enterprise ERP</p>
</div>
</div>
{/* CTA */}
<div className="px-sm mb-lg">
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary rounded-lg py-sm px-md flex items-center justify-center gap-sm transition-all shadow-sm">
<span className="material-symbols-outlined text-[20px]">add</span>
<span className="font-label-md text-label-md font-semibold">New Request</span>
</button>
</div>
{/* Main Navigation */}
<div className="flex-1 flex flex-col gap-xs overflow-y-auto">
<a className="flex items-center gap-md px-md py-sm text-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px]">shopping_cart</span>
<span className="font-body-md text-body-md font-medium">Purchase Orders</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
<span className="font-body-md text-body-md font-medium">Create PO</span>
</a>
<a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-title-md transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px] icon-fill">receipt_long</span>
<span className="font-body-md text-body-md font-semibold">Purchase Details</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px]">history</span>
<span className="font-body-md text-body-md font-medium">Purchase History</span>
</a>
</div>
{/* Footer Navigation */}
<div className="mt-auto pt-md border-t border-surface-variant/10 flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm text-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px]">help_outline</span>
<span className="font-body-md text-body-md font-medium">Help Center</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant dark:text-on-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined text-[20px]">logout</span>
<span className="font-body-md text-body-md font-medium">Sign Out</span>
</a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-w-0 md:ml-[280px]">
{/* TopNavBar Component */}
<header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl flex justify-between items-center w-full px-margin-desktop h-16 sticky top-0 z-30 border-b border-outline-variant/30 shadow-sm">
{/* Left: Brand / Title */}
<div className="flex items-center gap-lg">
<div className="md:hidden flex items-center">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
<h2 className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed-dim text-[24px] leading-none hidden md:block">CommSync</h2>
{/* Search Bar (on_left as per JSON) */}
<div className="hidden lg:flex items-center ml-xl relative">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px]">search</span>
<input className="pl-10 pr-4 py-sm rounded-full bg-surface-container-low border border-outline-variant/50 focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md w-[280px] transition-all" placeholder="Search POs, Vendors..." type="text" />
</div>
</div>
{/* Center: Navigation Links (Suppressed slightly as focus is on details, but keeping structure) */}
<nav className="hidden md:flex items-center gap-lg h-full">
<a className="h-full flex items-center text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-title-md text-title-md font-medium text-[15px]" href="#">Dashboard</a>
<a className="h-full flex items-center text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-title-md text-title-md font-medium text-[15px]" href="#">Inventory</a>
<a className="h-full flex items-center text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors font-title-md text-title-md font-medium text-[15px]" href="#">Reports</a>
</nav>
{/* Right: Actions & Profile */}
<div className="flex items-center gap-md">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-variant/50 transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant/30 ml-sm cursor-pointer hover:ring-2 ring-primary ring-offset-2 transition-all">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaJzhN0cdREGOkDgKCtijt1SpoD_ZkDCt6AdvDbF3Pmo18QkW-IW4HuTd-gLYuUlTR9r-iDwJd2CKG2jMKTt6SmaR4XIgR_2ErBELcWGZmLjLkvpQg52Jkg2T3eV7g0XNTsKxXFZsAGdEmVpCBsZ32AhO0CrPSlgy4qlYr_A5Leoed-z_cTriP7hfNdYN8NZ8tYg3Q3ZLJ-6yR6F3v109OnscsFYzXWCHYdPWYUl61niqSmu9HkrIh_ySBIO2MOHyWEGKSHRkj6qw" />
</div>
</div>
</header>
{/* Page Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-gutter">
{/* Page Header Section */}
<div className="flex flex-col gap-md lg:flex-row lg:items-end justify-between mb-sm">
<div className="flex flex-col gap-sm">
{/* Breadcrumbs */}
<nav className="flex items-center gap-xs text-label-md font-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Procurement</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Purchase Orders</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface font-medium">PO-2023-0891</span>
</nav>
{/* Title & Status */}
<div className="flex items-center gap-md flex-wrap mt-sm">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Purchase Order <span className="text-outline">#2023-0891</span></h1>
<div className="inline-flex items-center gap-xs px-3 py-1 rounded-full bg-primary-container/10 text-primary-container border border-primary-container/20">
<span className="material-symbols-outlined text-[14px] icon-fill">check_circle</span>
<span className="font-label-md text-label-md font-bold uppercase tracking-wider">Approved</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Created on Oct 24, 2023 by Sarah Jenkins</p>
</div>
{/* Actions */}
<div className="flex items-center gap-sm mt-md lg:mt-0">
<button className="h-10 px-md rounded-lg border border-outline text-on-surface bg-surface hover:bg-surface-variant/50 font-label-md text-label-md font-semibold flex items-center gap-xs transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">print</span>
                        Print PO
                    </button>
<button className="h-10 px-md rounded-lg bg-primary hover:bg-primary/90 text-on-primary font-label-md text-label-md font-semibold flex items-center gap-xs transition-all shadow-sm active:scale-95">
<span className="material-symbols-outlined text-[18px]">inventory_2</span>
                        Receive Items
                    </button>
<button className="w-10 h-10 rounded-lg border border-outline text-on-surface bg-surface hover:bg-surface-variant/50 flex items-center justify-center transition-all shadow-sm">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Left Column (Main Content - Manifest) */}
<div className="lg:col-span-8 flex flex-col gap-gutter">
{/* Line Items Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden flex flex-col h-full">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface-container-lowest/50 backdrop-blur-sm">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">list_alt</span>
                                Detailed Manifest
                            </h3>
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-container-low px-2 py-1 rounded-md border border-outline-variant/20">4 Items Total</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left font-body-md text-on-surface whitespace-nowrap">
<thead className="bg-surface-container-lowest border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<tr>
<th className="px-lg py-md font-medium">Item Description</th>
<th className="px-md py-md font-medium">SKU</th>
<th className="px-md py-md font-medium text-right">Qty</th>
<th className="px-md py-md font-medium text-right">Unit Price</th>
<th className="px-lg py-md font-medium text-right">Total</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">devices</span>
</div>
<div>
<p className="font-medium text-on-surface group-hover:text-primary transition-colors">ThinkPad T14 Gen 3</p>
<p className="text-[12px] text-on-surface-variant mt-0.5">14" WUXGA, i7-1260P, 16GB RAM</p>
</div>
</div>
</td>
<td className="px-md py-md text-on-surface-variant font-code-sm">LT-TP14-G3</td>
<td className="px-md py-md text-right font-medium">5</td>
<td className="px-md py-md text-right text-on-surface-variant">$1,249.00</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$6,245.00</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">monitor</span>
</div>
<div>
<p className="font-medium text-on-surface group-hover:text-primary transition-colors">Dell UltraSharp 27"</p>
<p className="text-[12px] text-on-surface-variant mt-0.5">U2722D 1440p USB-C Hub Monitor</p>
</div>
</div>
</td>
<td className="px-md py-md text-on-surface-variant font-code-sm">MN-U2722D</td>
<td className="px-md py-md text-right font-medium">10</td>
<td className="px-md py-md text-right text-on-surface-variant">$389.50</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$3,895.00</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">mouse</span>
</div>
<div>
<p className="font-medium text-on-surface group-hover:text-primary transition-colors">Logitech MX Master 3S</p>
<p className="text-[12px] text-on-surface-variant mt-0.5">Wireless Performance Mouse</p>
</div>
</div>
</td>
<td className="px-md py-md text-on-surface-variant font-code-sm">AC-MX3S</td>
<td className="px-md py-md text-right font-medium">15</td>
<td className="px-md py-md text-right text-on-surface-variant">$99.99</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$1,499.85</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-lg py-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">cable</span>
</div>
<div>
<p className="font-medium text-on-surface group-hover:text-primary transition-colors">Anker USB-C Hub</p>
<p className="text-[12px] text-on-surface-variant mt-0.5">7-in-1 PowerExpand, 100W PD</p>
</div>
</div>
</td>
<td className="px-md py-md text-on-surface-variant font-code-sm">AC-ANK71</td>
<td className="px-md py-md text-right font-medium">5</td>
<td className="px-md py-md text-right text-on-surface-variant">$34.99</td>
<td className="px-lg py-md text-right font-semibold text-on-surface">$174.95</td>
</tr>
</tbody>
</table>
</div>
{/* Notes Section within manifest */}
<div className="mt-auto p-lg bg-surface-container-lowest border-t border-outline-variant/10">
<h4 className="font-label-md text-label-md font-semibold text-on-surface mb-xs flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">speaker_notes</span>
                                Buyer Notes
                            </h4>
<p className="text-body-md font-body-md text-on-surface-variant max-w-3xl">Please ensure all monitors are packed securely with corner protection. Delivery requested to Loading Bay C between 9 AM and 3 PM EST.</p>
</div>
</div>
</div>
{/* Right Column (Contextual Data & Tracking) */}
<div className="lg:col-span-4 flex flex-col gap-gutter">
{/* Vendor Info Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm p-lg relative overflow-hidden group">
{/* Decorative bg accent */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
<div className="flex justify-between items-start mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Vendor Details</h3>
<button aria-label="Edit Vendor" className="text-primary hover:bg-primary/10 p-1 rounded transition-colors">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
</div>
<div className="flex items-center gap-md mb-lg">
<div className="w-12 h-12 rounded-lg border border-outline-variant/30 overflow-hidden bg-white shadow-sm shrink-0">
<div className="w-full h-full bg-cover bg-center" data-alt="A clean, minimalist abstract corporate logo featuring interlocking geometric blue shapes on a pure white background. The lighting is even and bright, suggesting a modern technology or enterprise hardware supplier. The overall aesthetic is professional, crisp, and aligns perfectly with a high-contrast corporate UI theme." style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnhUdlXe9y_OFjC-WHJuDEZU47xOxaD6r1yS5qC2E7DqdFtF2h7R1xd4qYJkA1biqPaWeIXCGK9hAphFJwxLV5EsXCb_bonhrFrRYwUsElyEPP1Olq28lhoCs43O9Id0ujSsLo5qFjgY79prpy3r7JCUwkO5wwqYWL5WRLqyo9zHIbF3s_iVe9ExI33_K97uKYRDsSlyJpWHuXeq5iYt0TpQYZv7iXG2rUdo2k_jFRK_OfoM9V36mZDpmOcTlMeRd8WQ38dVtAxOI')"}}></div>
</div>
<div>
<h4 className="font-headline-md text-[18px] font-bold text-on-surface leading-tight">TechSupply Global Inc.</h4>
<p className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px]">verified</span>
                                    Preferred Partner
                                </p>
</div>
</div>
<div className="space-y-sm text-body-md font-body-md">
<div className="flex gap-sm items-start">
<span className="material-symbols-outlined text-outline-variant mt-0.5 text-[18px]">location_on</span>
<span className="text-on-surface-variant">1042 Enterprise Way, Suite 300<br />San Jose, CA 95134</span>
</div>
<div className="flex gap-sm items-center">
<span className="material-symbols-outlined text-outline-variant text-[18px]">mail</span>
<a className="text-primary hover:underline" href="mailto:orders@techsupply.com">orders@techsupply.com</a>
</div>
<div className="flex gap-sm items-center">
<span className="material-symbols-outlined text-outline-variant text-[18px]">call</span>
<span className="text-on-surface-variant">+1 (800) 555-0199</span>
</div>
</div>
</div>
{/* Timeline/Tracking Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm p-lg">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-title-md text-title-md text-on-surface">Order Tracking</h3>
<span className="font-label-md text-label-md text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">In Transit</span>
</div>
<div className="relative pl-6 space-y-6">
{/* Vertical Line */}
<div className="absolute left-2.5 top-2 bottom-2 w-0.5 bg-outline-variant/30"></div>
{/* Filled Line (Progress) */}
<div className="absolute left-2.5 top-2 h-[60%] w-0.5 bg-primary"></div>
{/* Step 1: Created */}
<div className="relative">
<div className="absolute -left-6 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-surface">
<span className="material-symbols-outlined text-on-primary text-[12px] icon-fill">check</span>
</div>
<h4 className="font-label-md text-label-md font-bold text-on-surface">Order Placed</h4>
<p className="text-[12px] text-on-surface-variant mt-0.5">Oct 24, 2023 • 09:41 AM</p>
</div>
{/* Step 2: Approved */}
<div className="relative">
<div className="absolute -left-6 w-5 h-5 rounded-full bg-primary flex items-center justify-center ring-4 ring-surface">
<span className="material-symbols-outlined text-on-primary text-[12px] icon-fill">check</span>
</div>
<h4 className="font-label-md text-label-md font-bold text-on-surface">Approved by Finance</h4>
<p className="text-[12px] text-on-surface-variant mt-0.5">Oct 24, 2023 • 11:30 AM</p>
</div>
{/* Step 3: Shipped (Current) */}
<div className="relative">
<div className="absolute -left-[26px] w-6 h-6 rounded-full bg-surface border-2 border-primary flex items-center justify-center ring-4 ring-surface shadow-sm">
<div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
</div>
<h4 className="font-label-md text-label-md font-bold text-primary">Shipped</h4>
<p className="text-[12px] text-on-surface-variant mt-0.5">Expected Delivery: Oct 28</p>
<div className="mt-2 p-2 rounded-lg border border-outline-variant/30 bg-surface-container-lowest flex items-center justify-between">
<span className="text-[12px] font-code-sm text-on-surface-variant">FedEx: 1Z9999999999</span>
<button className="text-primary hover:underline text-[12px] font-medium">Track</button>
</div>
</div>
{/* Step 4: Delivered (Pending) */}
<div className="relative">
<div className="absolute -left-6 w-5 h-5 rounded-full bg-surface-variant border border-outline-variant flex items-center justify-center ring-4 ring-surface"></div>
<h4 className="font-label-md text-label-md font-medium text-outline">Delivered</h4>
<p className="text-[12px] text-outline-variant mt-0.5">Pending</p>
</div>
</div>
</div>
{/* Payment Status Card */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm p-lg">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Payment Summary</h3>
<div className="space-y-sm mb-lg border-b border-outline-variant/20 pb-md">
<div className="flex justify-between items-center text-body-md font-body-md text-on-surface-variant">
<span>Subtotal</span>
<span className="font-medium text-on-surface">$11,814.80</span>
</div>
<div className="flex justify-between items-center text-body-md font-body-md text-on-surface-variant">
<span>Shipping (FedEx Ground)</span>
<span className="font-medium text-on-surface">$125.00</span>
</div>
<div className="flex justify-between items-center text-body-md font-body-md text-on-surface-variant">
<span>Estimated Tax (8.5%)</span>
<span className="font-medium text-on-surface">$1,004.25</span>
</div>
</div>
<div className="flex justify-between items-end mb-md">
<span className="font-title-md text-title-md font-semibold text-on-surface">Total</span>
<span className="font-headline-md text-headline-md font-bold text-primary">$12,944.05</span>
</div>
<div className="flex items-center gap-sm mt-lg p-sm rounded-lg bg-surface-container-high">
<span className="material-symbols-outlined text-outline-variant">info</span>
<div className="flex-1">
<p className="font-label-md text-label-md font-medium text-on-surface">Net 30 Terms</p>
<p className="text-[12px] text-on-surface-variant">Due by Nov 23, 2023</p>
</div>
<div className="px-2 py-1 rounded bg-secondary-container/20 text-on-secondary-container border border-secondary-container/30 font-label-md text-[11px] font-bold uppercase">
                                Unpaid
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

export default PurchaseOrderDetails;
