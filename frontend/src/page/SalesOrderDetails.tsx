import React from 'react';
import '../style/Dashboard.css';

const SalesOrderDetails: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-xl z-50">
<div className="px-lg mb-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xl">C</div>
<div>
<div className="font-title-md text-title-md font-bold text-on-primary-fixed text-primary dark:text-inverse-primary">CommSync</div>
<div className="font-body-md text-body-md text-on-surface-variant/80">Sales Module</div>
</div>
</div>
<div className="px-lg mb-lg">
<button className="w-full bg-primary-container text-on-primary-container hover:bg-primary/90 transition-colors duration-200 py-2 px-4 rounded-lg font-title-md text-title-md flex items-center justify-center gap-sm shadow-sm scale-95 active:scale-90 transition-transform">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
                New Quotation
            </button>
</div>
<div className="flex-1 overflow-y-auto px-md space-y-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-primary/10 hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>shopping_cart</span>
<span className="font-body-md text-body-md">Orders</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">add_shopping_cart</span>
<span className="font-body-md text-body-md">Create Order</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">description</span>
<span className="font-body-md text-body-md">Quotations</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">local_shipping</span>
<span className="font-body-md text-body-md">Shipments</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</div>
<div className="px-md mt-auto pt-lg border-t border-outline-variant/10 space-y-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md text-body-md">Support</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-primary/5 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-body-md text-body-md">Account</span>
</a>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] min-h-screen transition-all duration-300 relative">
{/* TopNavBar */}
<header className="docked full-width top-0 border-b border-outline-variant/30 shadow-sm bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 flex justify-between items-center w-full px-lg py-sm z-40 sticky">
<div className="flex items-center gap-lg">
<div className="font-headline-md text-headline-md font-black text-primary md:hidden">CommSync</div>
<div className="hidden md:flex gap-lg font-title-md text-title-md">
<a className="text-primary border-b-2 border-primary pb-1 hover:text-primary transition-all duration-200 ease-in-out" href="#">Dashboard</a>
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Analytics</a>
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out" href="#">Reports</a>
</div>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-full border-none focus:ring-2 focus:ring-primary w-64 text-sm transition-all" placeholder="Search orders..." type="text" />
</div>
<div className="flex items-center gap-sm text-on-surface-variant">
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors"><span className="material-symbols-outlined">apps</span></button>
</div>
<div className="flex items-center gap-sm ml-sm border-l border-outline-variant/30 pl-sm">
<button className="font-label-md text-label-md font-medium text-on-surface-variant hover:text-primary transition-colors px-3 py-1.5 rounded-md hover:bg-surface-variant">Export</button>
<button className="bg-primary text-on-primary font-label-md text-label-md font-medium px-4 py-1.5 rounded-md hover:bg-primary/90 transition-colors shadow-sm">Create</button>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full ml-sm border border-outline-variant/30 cursor-pointer" data-alt="A small, circular profile picture of a professional individual against a clean, light background. The lighting is soft and flattering, suitable for a corporate CRM interface. The image is cropped tightly around the face and shoulders, conveying a sense of approachability and professionalism within a modern digital workspace." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA5EZHL833mf_ygOCJlXCASfoGHHmhYjFStYkXvN8ImDN26RDi1WEUd66r41ZcFfy78tzSlN7m8KMirTxE3LhMi0CFmVyZKT8MqVP2kugEJwhH3oZrD1TEBNbhmUj1ovVu4xDDfYmY-X_nxlJghvZFeWvqCyCkm1mvpZoJJhl-mqd12JGHfI7mSQlr0OQOX5Xiiq20OwK5Opid2H7iGQw_k7c0CGONit4SfeOH3JLhocWyMgLYWjV3KzQGkKtQZPbJC3AtTMg96Y0" />
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-x-hidden">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-lg">
<div>
<div className="flex items-center gap-sm mb-xs">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-sm">arrow_back</span></a>
<span className="font-label-md text-label-md text-on-surface-variant">Orders / ORD-2023-0891</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface flex items-center gap-sm">
                        ORD-2023-0891
                        <span className="bg-primary/10 text-primary font-label-md text-label-md px-2 py-1 rounded-full border border-primary/20 tracking-wide uppercase">Processing</span>
</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Placed on Oct 24, 2023 at 10:42 AM</p>
</div>
<div className="flex flex-wrap gap-sm">
<button className="flex items-center gap-xs px-4 py-2 rounded-lg bg-surface border border-outline-variant hover:bg-surface-variant transition-colors text-on-surface font-title-md text-title-md shadow-sm">
<span className="material-symbols-outlined text-md">print</span>
                        Print Invoice
                    </button>
<button className="flex items-center gap-xs px-4 py-2 rounded-lg bg-surface border border-outline-variant hover:bg-surface-variant transition-colors text-on-surface font-title-md text-title-md shadow-sm">
<span className="material-symbols-outlined text-md">inventory_2</span>
                        Pack Items
                    </button>
<button className="flex items-center gap-xs px-4 py-2 rounded-lg bg-error/10 text-error hover:bg-error/20 transition-colors font-title-md text-title-md">
<span className="material-symbols-outlined text-md">cancel</span>
                        Cancel Order
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Left Column: Order Manifest */}
<div className="lg:col-span-8 space-y-gutter">
<div className="glass-card overflow-hidden">
<div className="p-lg border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright/50">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">list_alt</span>
                                Order Manifest
                            </h2>
<span className="font-label-md text-label-md text-on-surface-variant bg-surface-variant px-2 py-1 rounded-md">3 Items</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse glass-table">
<thead>
<tr>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Product</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">SKU</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Qty</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Unit Price</th>
<th className="p-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider text-right">Total</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">devices</span>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Enterprise Server Rack 42U</div>
<div className="text-on-surface-variant text-xs">Standard Black</div>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant font-code-sm text-code-sm">SR-42U-BLK</td>
<td className="p-md text-right text-on-surface font-title-md text-title-md">2</td>
<td className="p-md text-right text-on-surface-variant">$1,250.00</td>
<td className="p-md text-right font-title-md text-title-md text-on-surface">$2,500.00</td>
</tr>
<tr>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">router</span>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Gigabit Switch 48-Port</div>
<div className="text-on-surface-variant text-xs">Managed, PoE+</div>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant font-code-sm text-code-sm">NW-SW-48P-POE</td>
<td className="p-md text-right text-on-surface font-title-md text-title-md">1</td>
<td className="p-md text-right text-on-surface-variant">$850.00</td>
<td className="p-md text-right font-title-md text-title-md text-on-surface">$850.00</td>
</tr>
<tr>
<td className="p-md">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-md bg-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-outline">cable</span>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Cat6a Patch Cable 2m</div>
<div className="text-on-surface-variant text-xs">Pack of 10, Blue</div>
</div>
</div>
</td>
<td className="p-md text-on-surface-variant font-code-sm text-code-sm">CB-C6A-2M-10PK</td>
<td className="p-md text-right text-on-surface font-title-md text-title-md">5</td>
<td className="p-md text-right text-on-surface-variant">$45.00</td>
<td className="p-md text-right font-title-md text-title-md text-on-surface">$225.00</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md bg-surface-container-low border-t border-outline-variant/10 text-right">
<button className="text-primary font-label-md text-label-md hover:underline inline-flex items-center gap-xs">
<span className="material-symbols-outlined text-sm">add_circle</span> Add Item
                            </button>
</div>
</div>
{/* Internal Notes */}
<div className="glass-card p-lg">
<h3 className="font-title-md text-title-md text-on-surface mb-sm flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant">note_alt</span>
                            Internal Notes
                        </h3>
<div className="bg-surface-container rounded-lg p-md">
<p className="font-body-md text-body-md text-on-surface-variant">Customer requested expedited shipping if possible. Ensure servers are packed with extra corner protection as per previous damage claim.</p>
<div className="mt-sm text-xs text-outline flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">schedule</span> Added by Sarah Jenkins, Oct 24, 11:05 AM
                            </div>
</div>
</div>
</div>
{/* Right Column: Info & Tracking */}
<div className="lg:col-span-4 space-y-gutter">
{/* Customer Information */}
<div className="glass-card p-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center justify-between">
<span className="flex items-center gap-sm"><span className="material-symbols-outlined text-primary">person</span> Customer</span>
<button className="text-primary hover:bg-primary/10 p-1 rounded-md transition-colors"><span className="material-symbols-outlined text-sm">edit</span></button>
</h3>
<div className="flex items-center gap-md mb-md">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-md text-headline-md">
                                T
                            </div>
<div>
<div className="font-title-md text-title-md text-on-surface">TechCorp Solutions</div>
<div className="font-body-md text-body-md text-on-surface-variant">Acct #10482</div>
</div>
</div>
<div className="space-y-sm font-body-md text-body-md">
<div className="flex items-start gap-sm">
<span className="material-symbols-outlined text-outline text-sm mt-1">mail</span>
<div>
<a className="text-primary hover:underline" href="mailto:purchasing@techcorp.com">purchasing@techcorp.com</a>
<div className="text-on-surface-variant text-xs">Main Contact: Alex Rivera</div>
</div>
</div>
<div className="flex items-start gap-sm">
<span className="material-symbols-outlined text-outline text-sm mt-1">call</span>
<span className="text-on-surface-variant">+1 (555) 019-8472</span>
</div>
<div className="border-t border-outline-variant/10 pt-sm mt-sm">
<div className="text-xs text-outline mb-1 uppercase tracking-wider">Shipping Address</div>
<div className="flex items-start gap-sm">
<span className="material-symbols-outlined text-outline text-sm mt-1">location_on</span>
<span className="text-on-surface-variant">1042 Silicon Ave, Suite 300<br />San Jose, CA 95131<br />United States</span>
</div>
</div>
</div>
</div>
{/* Payment Summary */}
<div className="glass-card p-lg">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary">payments</span>
                            Payment Summary
                        </h3>
<div className="space-y-2 font-body-md text-body-md">
<div className="flex justify-between text-on-surface-variant">
<span>Subtotal</span>
<span>$3,575.00</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Shipping (FedEx Ground)</span>
<span>$125.00</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span>Tax (8.25%)</span>
<span>$305.25</span>
</div>
<div className="border-t border-outline-variant/20 pt-2 mt-2 flex justify-between font-headline-md text-headline-md text-on-surface">
<span>Total</span>
<span>$4,005.25</span>
</div>
</div>
<div className="mt-md bg-surface-container-low p-sm rounded-lg flex items-center justify-between border border-outline-variant/10">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-green-600">check_circle</span>
<span className="font-label-md text-label-md text-on-surface">Paid via Credit Card</span>
</div>
<span className="text-xs text-outline font-code-sm">...4242</span>
</div>
</div>
{/* Order Tracking Timeline */}
<div className="glass-card p-lg">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-tertiary">local_shipping</span>
                            Tracking
                        </h3>
<div className="relative pl-sm">
{/* Ordered */}
<div className="timeline-item relative pb-md flex gap-md">
<div className="timeline-line absolute"></div>
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-surface">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Ordered</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm">Oct 24, 10:42 AM</div>
</div>
</div>
{/* Paid */}
<div className="timeline-item relative pb-md flex gap-md">
<div className="timeline-line absolute"></div>
<div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-surface">
<span className="material-symbols-outlined text-[14px]">check</span>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Paid</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm">Oct 24, 10:45 AM</div>
</div>
</div>
{/* Packed */}
<div className="timeline-item relative pb-md flex gap-md">
<div className="timeline-line absolute"></div>
<div className="w-6 h-6 rounded-full bg-surface border-2 border-primary text-primary flex items-center justify-center shrink-0 z-10 ring-4 ring-surface animate-pulse">
<div className="w-2 h-2 rounded-full bg-primary"></div>
</div>
<div>
<div className="font-title-md text-title-md text-primary">Packing</div>
<div className="font-body-md text-body-md text-on-surface-variant text-sm">In progress at Warehouse A</div>
</div>
</div>
{/* Shipped */}
<div className="timeline-item relative pb-md flex gap-md">
<div className="timeline-line absolute"></div>
<div className="w-6 h-6 rounded-full bg-surface-variant border-2 border-outline-variant text-outline-variant flex items-center justify-center shrink-0 z-10 ring-4 ring-surface">
</div>
<div>
<div className="font-title-md text-title-md text-outline">Shipped</div>
<div className="font-body-md text-body-md text-outline/50 text-sm">Pending</div>
</div>
</div>
{/* Delivered */}
<div className="timeline-item relative flex gap-md">
<div className="timeline-line absolute"></div>
<div className="w-6 h-6 rounded-full bg-surface-variant border-2 border-outline-variant text-outline-variant flex items-center justify-center shrink-0 z-10 ring-4 ring-surface">
</div>
<div>
<div className="font-title-md text-title-md text-outline">Delivered</div>
<div className="font-body-md text-body-md text-outline/50 text-sm">Pending</div>
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

export default SalesOrderDetails;
