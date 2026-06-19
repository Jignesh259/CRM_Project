import React from 'react';
import '../style/Dashboard.css';

const CreateNewSalesOrder: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-xl shadow-xl flex flex-col h-full py-lg z-50">
<div className="px-lg pb-xl border-b border-white/10 mb-sm">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container filled">sync</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-bold text-on-primary-fixed text-white">CommSync</h1>
<p className="font-label-md text-label-md text-on-surface-variant/80 text-white/60 mt-xs">Sales Module</p>
</div>
</div>
</div>
<div className="px-lg py-sm">
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary font-title-md text-body-md py-sm px-md rounded-lg flex items-center justify-center gap-sm transition-colors shadow-sm mb-lg">
<span className="material-symbols-outlined">add</span>
                New Quotation
            </button>
</div>
<div className="flex-1 px-sm space-y-xs overflow-y-auto">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
<span className="font-body-md text-body-md">Orders</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim font-bold bg-primary/10 text-white scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined filled">add_shopping_cart</span>
<span className="font-body-md text-body-md">Create Order</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">description</span>
<span className="font-body-md text-body-md">Quotations</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">local_shipping</span>
<span className="font-body-md text-body-md">Shipments</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</div>
<div className="mt-auto px-sm pt-md border-t border-white/10 space-y-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md text-body-md">Support</span>
</a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant/80 font-medium hover:bg-white/5 text-white/80 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-body-md text-body-md">Account</span>
</a>
</div>
</nav>
 Main Canvas 
<main className="flex-1 md:ml-[280px] min-h-screen flex flex-col relative">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 text-primary dark:text-inverse-primary font-title-md text-title-md docked full-width top-0 border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-lg py-sm sticky z-40">
<div className="flex items-center gap-lg">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-xl pr-sm py-[6px] rounded-lg border border-outline-variant/50 bg-surface focus:border-primary input-glow font-body-md text-body-md transition-colors" placeholder="Search orders, clients..." type="text" />
</div>
</div>
<div className="flex items-center gap-xl">
<nav className="hidden lg:flex gap-lg">
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out font-title-md text-body-md" href="#">Dashboard</a>
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out font-title-md text-body-md" href="#">Analytics</a>
<a className="text-on-surface-variant hover:text-primary transition-all duration-200 ease-in-out font-title-md text-body-md" href="#">Reports</a>
</nav>
<div className="flex items-center gap-md">
<button className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-8 h-8 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="h-6 w-px bg-outline-variant/30 mx-xs"></div>
<button className="text-primary font-title-md text-body-md hover:bg-primary/5 px-md py-xs rounded-lg transition-colors">Export</button>
<button className="bg-primary hover:bg-primary/90 text-on-primary font-title-md text-body-md px-md py-xs rounded-lg transition-colors shadow-sm">Create</button>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full ml-sm border border-outline-variant/20 object-cover" data-alt="A small, circular avatar portrait of a professional individual against a clean background, used as a user profile picture in a sleek light-mode UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFp6eXwqn5v4_GUYaKBpuVHhAIm6S7B39XKDHzkoxZDc3gSvBqZiwxCxJe0O9pGVryHoUlZNVmDeaFxbKMQ8ATVkiPYVXvCYnavzLE4oCAZfe4k63g2fzkXORz_qDVpOkNj187FoptAOXT-cttjO6tfHPOT4WndM-rcOYnkUnEyJURdo6oljNjIu3T-PzdS5ZFDJjg-II2el0gFfbaBZ6yQ9VeFFPlly5alTzBfHTBUsTAFxzcw0NZklSA97JSTUnoD2_joHrK7Pw" />
</div>
</div>
</header>
{/* Page Content */}
<div className="p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex-1">
<div className="mb-lg">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Create Sales Order</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Draft a new sales order, add line items, and configure shipping details.</p>
</div>
<form className="space-y-xl pb-3xl">
{/* Section 1: Customer & Order Details */}
<section className="glass-panel rounded-xl shadow-sm overflow-hidden">
<div className="glass-header px-lg py-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">person</span>
<h3 className="font-title-md text-title-md text-on-surface">Customer &amp; Order Details</h3>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg bg-surface-bright">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Customer Selection <span className="text-error">*</span></label>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-xl pr-sm py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" placeholder="Search customer name or ID..." type="text" />
</div>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Reference Number</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" placeholder="e.g. PO-2023-441" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Expected Ship Date</label>
<div className="relative">
<input className="w-full pl-md pr-xl py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="date" />
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none">calendar_today</span>
</div>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Sales Rep</label>
<select className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface appearance-none">
<option>Sarah Jenkins</option>
<option>Michael Chen</option>
<option>Elena Rodriguez</option>
</select>
</div>
</div>
</section>
{/* Section 2: Line Items */}
<section className="glass-panel rounded-xl shadow-sm overflow-hidden">
<div className="glass-header px-lg py-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">inventory_2</span>
<h3 className="font-title-md text-title-md text-on-surface">Line Items</h3>
</div>
<button className="text-primary font-title-md text-body-md hover:bg-primary/5 px-sm py-xs rounded transition-colors flex items-center gap-xs" type="button">
<span className="material-symbols-outlined text-[18px]">add</span> Add Product
                        </button>
</div>
<div className="bg-surface-bright overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md bg-surface-container-low/50">
<th className="px-lg py-md w-12"></th>
<th className="px-lg py-md">Product / Service</th>
<th className="px-lg py-md w-32">Quantity</th>
<th className="px-lg py-md w-40">Unit Price</th>
<th className="px-lg py-md w-24">Tax</th>
<th className="px-lg py-md w-40 text-right">Line Total</th>
<th className="px-lg py-md w-16"></th>
</tr>
</thead>
<tbody>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="px-lg py-sm text-outline-variant cursor-grab"><span className="material-symbols-outlined text-[20px]">drag_indicator</span></td>
<td className="px-lg py-sm">
<input className="w-full bg-transparent border-0 focus:ring-0 p-0 font-body-md text-body-md text-on-surface font-medium" type="text" value="Enterprise Server Rack 42U" />
<input className="w-full bg-transparent border-0 focus:ring-0 p-0 font-code-sm text-code-sm text-on-surface-variant mt-1" type="text" value="SKU: SR-42U-ENT" />
</td>
<td className="px-lg py-sm">
<input className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface text-center" type="number" value="2" />
</td>
<td className="px-lg py-sm">
<div className="flex items-center">
<span className="text-on-surface-variant mr-1">$</span>
<input className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" value="1250.00" />
</div>
</td>
<td className="px-lg py-sm">
<select className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface appearance-none">
<option>Standard (8%)</option>
<option>Exempt</option>
</select>
</td>
<td className="px-lg py-sm text-right font-code-sm text-body-md font-medium text-on-surface">$2,500.00</td>
<td className="px-lg py-sm text-right">
<button className="text-outline hover:text-error transition-colors opacity-0 group-hover:opacity-100 p-1" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group">
<td className="px-lg py-sm text-outline-variant cursor-grab"><span className="material-symbols-outlined text-[20px]">drag_indicator</span></td>
<td className="px-lg py-sm">
<input className="w-full bg-transparent border-0 focus:ring-0 p-0 font-body-md text-body-md text-on-surface" placeholder="Type to search products..." type="text" />
</td>
<td className="px-lg py-sm">
<input className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface text-center" type="number" value="1" />
</td>
<td className="px-lg py-sm">
<div className="flex items-center">
<span className="text-on-surface-variant mr-1">$</span>
<input className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface" placeholder="0.00" type="text" />
</div>
</td>
<td className="px-lg py-sm">
<select className="w-full px-sm py-[6px] rounded border border-outline-variant/50 bg-surface input-glow font-body-md text-body-md text-on-surface appearance-none">
<option>Standard (8%)</option>
<option>Exempt</option>
</select>
</td>
<td className="px-lg py-sm text-right font-code-sm text-body-md font-medium text-on-surface-variant">$0.00</td>
<td className="px-lg py-sm text-right">
<button className="text-outline hover:text-error transition-colors opacity-0 group-hover:opacity-100 p-1" type="button">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* Section 3: Shipping & Billing */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/* Billing Address */}
<div className="glass-panel rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="glass-header px-lg py-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">receipt_long</span>
<h3 className="font-title-md text-title-md text-on-surface">Billing Address</h3>
</div>
</div>
<div className="p-lg bg-surface-bright flex-1 space-y-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Street Address</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">City</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">State/Province</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Postal Code</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Country</label>
<select className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface appearance-none">
<option>United States</option>
<option>Canada</option>
</select>
</div>
</div>
</div>
</div>
{/* Shipping Address */}
<div className="glass-panel rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="glass-header px-lg py-md flex items-center justify-between">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<h3 className="font-title-md text-title-md text-on-surface">Shipping Address</h3>
</div>
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="font-label-md text-label-md text-on-surface-variant">Same as Billing</span>
</label>
</div>
<div className="p-lg bg-surface-bright flex-1 space-y-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Street Address</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">City</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">State/Province</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Postal Code</label>
<input className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface" type="text" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant">Country</label>
<select className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface appearance-none">
<option>United States</option>
<option>Canada</option>
</select>
</div>
</div>
</div>
</div>
</section>
{/* Order Summary & Actions */}
<section className="glass-panel rounded-xl shadow-sm overflow-hidden mt-xl">
<div className="p-lg bg-surface-bright flex flex-col md:flex-row justify-between items-end gap-lg">
<div className="w-full md:w-1/2 space-y-sm">
<label className="font-label-md text-label-md text-on-surface-variant">Notes / Terms</label>
<textarea className="w-full px-md py-sm rounded-lg border border-outline-variant bg-surface input-glow font-body-md text-body-md text-on-surface resize-none" placeholder="Add internal notes or terms for the customer..." rows={3}></textarea>
</div>
<div className="w-full md:w-80 space-y-sm">
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Subtotal</span>
<span className="font-code-sm text-on-surface font-medium">$2,500.00</span>
</div>
<div className="flex justify-between items-center text-body-md">
<span className="text-on-surface-variant">Tax (8%)</span>
<span className="font-code-sm text-on-surface font-medium">$200.00</span>
</div>
<div className="flex justify-between items-center text-body-md pb-sm border-b border-outline-variant/30">
<span className="text-on-surface-variant">Shipping</span>
<span className="font-code-sm text-on-surface font-medium">$45.00</span>
</div>
<div className="flex justify-between items-center pt-xs">
<span className="font-title-md text-title-md text-on-surface font-bold">Grand Total</span>
<span className="font-code-sm text-headline-md font-bold text-primary">$2,745.00</span>
</div>
</div>
</div>
<div className="glass-header px-lg py-md flex justify-end gap-md">
<button className="px-lg py-sm rounded-lg font-title-md text-body-md border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors" type="button">
                            Save as Draft
                        </button>
<button className="px-lg py-sm rounded-lg font-title-md text-body-md bg-primary text-on-primary hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-xs" type="button">
                            Confirm Order <span className="material-symbols-outlined text-[18px]">check</span>
</button>
</div>
</section>
</form>
</div>
</main>

    </>
  );
};

export default CreateNewSalesOrder;
