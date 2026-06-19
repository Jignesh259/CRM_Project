import React from 'react';
import '../style/Dashboard.css';

const CreatePurchaseOrder: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component) 
<nav className="hidden md:flex flex-col h-full p-md gap-sm fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-xl z-50">
{/* Header */}
<div className="flex items-center gap-md px-md py-lg mb-lg">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-on-primary icon-fill" data-icon="domain">domain</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-black text-surface-lowest">Procurement</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise ERP</p>
</div>
</div>
{/* CTA */}
<div className="px-sm mb-lg">
<button className="w-full flex items-center justify-center gap-sm bg-primary hover:bg-surface-tint text-on-primary font-title-md text-title-md py-2.5 px-4 rounded-lg shadow-sm transition-colors">
<span className="material-symbols-outlined" data-icon="add">add</span>
                New Request
            </button>
</div>
{/* Navigation Links */}
<div className="flex-1 flex flex-col gap-xs font-body-md text-body-md">
{/* Inactive */}
<a className="flex items-center gap-md px-4 py-3 text-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                Purchase Orders
            </a>
{/* Active (Create PO) */}
<a className="flex items-center gap-md px-4 py-3 bg-primary-container text-on-primary-container rounded-lg font-title-md transition-all duration-200 active:scale-[0.98] shadow-sm" href="#">
<span className="material-symbols-outlined icon-fill" data-icon="add_shopping_cart">add_shopping_cart</span>
                Create PO
            </a>
{/* Inactive */}
<a className="flex items-center gap-md px-4 py-3 text-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                Purchase Details
            </a>
{/* Inactive */}
<a className="flex items-center gap-md px-4 py-3 text-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
                Purchase History
            </a>
</div>
{/* Footer Links */}
<div className="flex flex-col gap-xs mt-auto pt-lg border-t border-surface-variant/20 font-body-md text-body-md">
<a className="flex items-center gap-md px-4 py-3 text-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                Help Center
            </a>
<a className="flex items-center gap-md px-4 py-3 text-surface-variant hover:bg-surface-variant/10 rounded-lg transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
                Sign Out
            </a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] pb-[100px] flex flex-col relative w-full">
{/* Top App Bar equivalent for spacing/title */}
<header className="w-full px-margin-desktop py-lg sticky top-0 z-30 glass-card border-b-0 border-x-0 border-t-0 rounded-none bg-surface/60">
<div className="max-w-container-max mx-auto flex justify-between items-end">
<div>
<p className="font-label-md text-label-md text-primary font-semibold mb-1 uppercase tracking-wider">Drafting</p>
<h2 className="font-headline-lg text-headline-lg font-bold text-on-surface">Create Purchase Order</h2>
</div>
<div className="flex items-center gap-md">
<span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-md text-label-md rounded-full border border-outline-variant/30 shadow-sm">
                        PO-2024-0891
                    </span>
</div>
</div>
</header>
<div className="px-margin-mobile md:px-margin-desktop py-lg max-w-container-max mx-auto w-full flex flex-col gap-lg flex-1">
{/* Top Row Grid: Vendor & Details */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Section 1: Vendor Selection */}
<section className="lg:col-span-7 glass-card rounded-xl p-lg flex flex-col gap-md">
<div className="flex items-center gap-sm text-primary mb-sm">
<span className="material-symbols-outlined" data-icon="storefront">storefront</span>
<h3 className="font-title-md text-title-md text-on-surface">Vendor Selection</h3>
</div>
<div className="relative w-full group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input font-body-md text-body-md text-on-surface placeholder:text-outline w-full" placeholder="Search by vendor name, ID, or category..." type="text" value="Acme Industrial Supplies" />
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer bg-primary/10 rounded-full p-1" data-icon="close" style={{"fontSize": "16px"}}>close</span>
</div>
{/* Selected Vendor Card (Mock state) */}
<div className="mt-2 p-md rounded-lg bg-surface-container-low border border-outline-variant/40 flex items-start justify-between">
<div className="flex items-start gap-md">
<div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md shrink-0">
                                AI
                            </div>
<div>
<h4 className="font-title-md text-title-md text-on-surface mb-1">Acme Industrial Supplies</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-1">ID: VND-7734 • Net 30 Terms</p>
<p className="font-label-md text-label-md text-outline flex items-center gap-1">
<span className="material-symbols-outlined" data-icon="location_on" style={{"fontSize": "14px"}}>location_on</span>
                                    124 Factory Row, Chicago, IL
                                </p>
</div>
</div>
<button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
<span className="material-symbols-outlined" data-icon="edit">edit</span>
</button>
</div>
</section>
{/* Section 2: PO Details */}
<section className="lg:col-span-5 glass-card rounded-xl p-lg flex flex-col gap-md">
<div className="flex items-center gap-sm text-primary mb-sm">
<span className="material-symbols-outlined" data-icon="info">info</span>
<h3 className="font-title-md text-title-md text-on-surface">Order Details</h3>
</div>
<div className="flex flex-col gap-md">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Expected Delivery Date</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary pointer-events-none" data-icon="calendar_month">calendar_month</span>
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg glass-input font-body-md text-body-md text-on-surface" type="date" />
</div>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Destination Warehouse</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary pointer-events-none" data-icon="warehouse">warehouse</span>
<select className="w-full pl-10 pr-10 py-2.5 rounded-lg glass-input font-body-md text-body-md text-on-surface appearance-none">
<option disabled selected value="">Select facility...</option>
<option selected value="1">WH-01: Main Distribution (NY)</option>
<option value="2">WH-02: Overflow (NJ)</option>
<option value="3">WH-03: West Coast Hub (CA)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
</section>
</div>
{/* Section 3: Line Items */}
<section className="glass-card rounded-xl flex flex-col w-full overflow-hidden">
<div className="p-lg border-b border-outline-variant/30 flex justify-between items-center bg-surface/40">
<div className="flex items-center gap-sm text-primary">
<span className="material-symbols-outlined" data-icon="list_alt">list_alt</span>
<h3 className="font-title-md text-title-md text-on-surface">Line Items</h3>
</div>
<button className="flex items-center gap-xs font-label-md text-label-md text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors border border-primary/20">
<span className="material-symbols-outlined" data-icon="add" style={{"fontSize": "18px"}}>add</span>
                        Bulk Add
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container/50 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant/30">
<th className="py-3 px-4 font-medium w-12">#</th>
<th className="py-3 px-4 font-medium w-48">SKU</th>
<th className="py-3 px-4 font-medium min-w-[250px]">Item Description</th>
<th className="py-3 px-4 font-medium w-32 text-right">Quantity</th>
<th className="py-3 px-4 font-medium w-40 text-right">Unit Cost</th>
<th className="py-3 px-4 font-medium w-40 text-right">Line Total</th>
<th className="py-3 px-4 font-medium w-16 text-center"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
{/* Row 1 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-outline">1</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1 font-code-sm text-code-sm" type="text" value="ACT-992-A" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1" type="text" value="Heavy Duty Conveyor Belt Assembly" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1 text-right" type="number" value="5" />
</td>
<td className="py-3 px-4 relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">$</span>
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 pl-4 pr-0 py-1 text-right" type="text" value="1,250.00" />
</td>
<td className="py-3 px-4 text-right font-medium text-primary">
                                    $6,250.00
                                </td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-outline">2</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1 font-code-sm text-code-sm" type="text" value="MTR-045-X" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1" type="text" value="Industrial Servo Motor (15kW)" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 px-0 py-1 text-right" type="number" value="2" />
</td>
<td className="py-3 px-4 relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline">$</span>
<input className="w-full bg-transparent border-0 border-b border-transparent focus:border-primary focus:ring-0 pl-4 pr-0 py-1 text-right" type="text" value="3,400.00" />
</td>
<td className="py-3 px-4 text-right font-medium text-primary">
                                    $6,800.00
                                </td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-error opacity-0 group-hover:opacity-100 transition-all">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</button>
</td>
</tr>
{/* Empty Row for New Entry */}
<tr className="hover:bg-primary/5 transition-colors focus-within:bg-primary/5">
<td className="py-3 px-4 text-outline">3</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-dashed border-outline-variant focus:border-solid focus:border-primary focus:ring-0 px-0 py-1 font-code-sm text-code-sm" placeholder="Enter SKU" type="text" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-dashed border-outline-variant focus:border-solid focus:border-primary focus:ring-0 px-0 py-1" placeholder="Item description" type="text" />
</td>
<td className="py-3 px-4">
<input className="w-full bg-transparent border-0 border-b border-dashed border-outline-variant focus:border-solid focus:border-primary focus:ring-0 px-0 py-1 text-right" placeholder="0" type="number" />
</td>
<td className="py-3 px-4 relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-outline/50">$</span>
<input className="w-full bg-transparent border-0 border-b border-dashed border-outline-variant focus:border-solid focus:border-primary focus:ring-0 pl-4 pr-0 py-1 text-right" placeholder="0.00" type="text" />
</td>
<td className="py-3 px-4 text-right font-medium text-outline-variant">
                                    $0.00
                                </td>
<td className="py-3 px-4 text-center"></td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface/30">
<button className="w-full flex items-center justify-center gap-sm py-2 border border-dashed border-outline-variant rounded-lg text-on-surface-variant hover:text-primary hover:border-primary hover:bg-primary/5 transition-all font-label-md text-label-md">
<span className="material-symbols-outlined" data-icon="add_circle" style={{"fontSize": "18px"}}>add_circle</span>
                        Add Another Item
                    </button>
</div>
</section>
</div>
</main>
 Sticky Summary Footer 
<footer className="fixed bottom-0 right-0 w-full md:w-[calc(100%-280px)] glass-card rounded-none border-x-0 border-b-0 border-t border-outline-variant/40 p-lg flex flex-col sm:flex-row justify-between items-center z-40 bg-surface/90 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.05)]">
<div className="flex items-center gap-xl mb-4 sm:mb-0">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Total Items</p>
<p className="font-title-md text-title-md text-on-surface">2 (7 Units)</p>
</div>
<div className="h-8 w-px bg-outline-variant/40"></div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Estimated Total</p>
<p className="font-headline-md text-headline-md font-bold text-primary">$13,050.00</p>
</div>
</div>
<div className="flex items-center gap-md w-full sm:w-auto">
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface font-title-md text-title-md hover:bg-surface-variant/50 transition-colors">
                Save Draft
            </button>
<button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-primary text-on-primary font-title-md text-title-md hover:bg-surface-tint shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Submit for Approval
                <span className="material-symbols-outlined" data-icon="send" style={{"fontSize": "20px"}}>send</span>
</button>
</div>
</footer>

    </>
  );
};

export default CreatePurchaseOrder;
