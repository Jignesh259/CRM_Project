import React from 'react';
import '../style/Dashboard.css';

const CreateNewCustomerInvoice: React.FC = () => {
  return (
    <>
      
 Desktop SideNavBar (Hidden on Mobile) 
<nav className="hidden md:flex flex-col h-full w-[280px] fixed left-0 top-0 z-40 bg-inverse-surface shadow-xl py-md gap-base">
{/* Header */}
<div className="px-margin-desktop mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-surface-bright" data-icon="hub" style={{"fontVariationSettings": "'FILL' 1", "fontSize": "32px"}}>hub</span>
<div>
<h1 className="font-headline-md text-headline-md font-black text-surface-bright">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-80">Enterprise Suite</p>
</div>
</div>
{/* Create New CTA */}
<div className="px-md mb-md">
<button className="w-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-sm transition-all shadow-md">
<span className="material-symbols-outlined" data-icon="add">add</span>
                Create New
            </button>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto px-xs flex flex-col gap-xs">
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="person_search">person_search</span>
<span className="font-body-md text-body-md">CRM</span>
</a>
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-body-md text-body-md">Inventory</span>
</a>
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
<span className="font-body-md text-body-md">Purchase</span>
</a>
{/* Active State for Invoices */}
<a className="flex items-center gap-md py-sm px-md bg-primary-container text-on-primary-container rounded-lg mx-2 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="font-body-md text-body-md font-medium">Invoices</span>
</a>
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-body-md text-body-md">Analytics</span>
</a>
</div>
{/* Footer Links */}
<div className="px-xs mt-auto flex flex-col gap-xs pt-md border-t border-surface-variant/20">
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="support_agent">support_agent</span>
<span className="font-body-md text-body-md">Support</span>
</a>
<a className="flex items-center gap-md py-sm px-md text-surface-variant hover:bg-surface-variant/10 rounded-lg mx-2 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
<span className="font-body-md text-body-md">Account</span>
</a>
</div>
</nav>
 Main Content Canvas 
<main className="flex-1 w-full md:ml-[280px] min-h-screen flex flex-col">
{/* Mobile TopAppBar (Visible only on Mobile) */}
<header className="md:hidden flex items-center justify-between px-margin-mobile h-16 w-full bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md font-bold text-primary">CommSync</h1>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="notifications">notifications</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALBconU4xE1d1Yi4BZt71EXqsoJKAGpCokejhVyu-qdvSQsbMSvJ0bQkPjkYID7hs02_u3Jh9Bj8VNPZjlbmfCEZ4oofKTgdZ6KKWwnnsg_JH4_oZUwyECuQYKganErPPofBDQZBQkASJeqry_6986boTgoxLks3GIxoUOgophYHAXL-QNSNcwPBwcUfeVsI2LC-ut6dHCAjN-kP-7D8PFs0mg-TKV_YouzeDa4wRNCi7pYz9OarcmnF4r6I_v7bXTR3rZfBXJ9CM" />
</div>
</header>
{/* Desktop Top Context Bar */}
<div className="hidden md:flex items-center justify-between px-margin-desktop h-16 w-full bg-surface/80 backdrop-blur-md sticky top-0 z-30 shadow-sm">
<div className="flex items-center gap-md text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors" data-icon="arrow_back">arrow_back</span>
<span className="font-title-md text-title-md text-on-surface">Create New Invoice</span>
</div>
<div className="flex items-center gap-gutter">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors" data-icon="notifications">notifications</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30 cursor-pointer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHi3UwSVeSgTViKCWr-AUTWLhpQnH2i8rVxWxLfPKlLYR8NKIo936lmPCZsXsgI9UBtR7oIUz4cEL328Kp7fuwWONIzPvhne51a08Iy22A6HrPhCPyL-S_XurBym_8zyyGNVuIKEJvGmJOEA_xGswZlw4XQ_YZT6WaavGCjNzj2Ohvu1_VicjhWqlPt-p_1zyyC84cbbim0yyQm20REBcG_yr37DwDFfiqEPtIyTNLYRa6bvLwIhlXE60AOscpTA4X8sycI_pkmJE" />
</div>
</div>
{/* Mobile Context Header */}
<div className="md:hidden px-margin-mobile py-md bg-surface border-b border-outline-variant/20 flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="arrow_back">arrow_back</span>
<h2 className="font-title-md text-title-md">Create Invoice</h2>
</div>
{/* Page Content */}
<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-lg">
<form action="#" className="w-full flex flex-col gap-lg" method="POST">
{/* Top Row: Customer & Invoice Details */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-lg">
{/* Section 1: Customer Selection */}
<div className="lg:col-span-2 bg-surface-container-lowest rounded-xl border border-outline-variant/30 ambient-shadow overflow-hidden">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant/20 flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="person">person</span>
<h3 className="font-title-md text-title-md">Customer Details</h3>
</div>
<div className="p-md md:p-lg grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="md:col-span-2 relative">
<label className="comm-label" htmlFor="customer-search">Select Customer</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="comm-input pl-[36px]" id="customer-search" placeholder="Search customer name or ID..." type="text" />
</div>
</div>
<div>
<label className="comm-label" htmlFor="billing-name">Billing Name</label>
<input className="comm-input bg-surface-container-low text-on-surface-variant" id="billing-name" readOnly type="text" value="Acme Corp" />
</div>
<div>
<label className="comm-label" htmlFor="billing-email">Billing Email</label>
<input className="comm-input bg-surface-container-low text-on-surface-variant" id="billing-email" readOnly type="email" value="billing@acmecorp.com" />
</div>
<div className="md:col-span-2">
<label className="comm-label" htmlFor="billing-address">Billing Address</label>
<textarea className="comm-input bg-surface-container-low text-on-surface-variant" id="billing-address" readOnly rows={2}>123 Innovation Drive, Tech Park
San Francisco, CA 94105</textarea>
</div>
</div>
</div>
{/* Section 2: Invoice Details */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 ambient-shadow overflow-hidden">
<div className="bg-surface-container-low px-md py-sm border-b border-outline-variant/20 flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="receipt">receipt</span>
<h3 className="font-title-md text-title-md">Invoice Info</h3>
</div>
<div className="p-md flex flex-col gap-md">
<div>
<label className="comm-label" htmlFor="invoice-number">Invoice #</label>
<div className="flex items-center gap-xs">
<span className="text-surface-variant font-code-sm text-code-sm">INV-</span>
<input className="comm-input font-code-sm text-code-sm" id="invoice-number" type="text" value="2023-0891" />
</div>
</div>
<div>
<label className="comm-label" htmlFor="invoice-date">Date of Issue</label>
<input className="comm-input" id="invoice-date" type="date" />
</div>
<div>
<label className="comm-label" htmlFor="due-date">Due Date</label>
<input className="comm-input" id="due-date" type="date" />
</div>
<div>
<label className="comm-label" htmlFor="po-number">PO / Reference # (Optional)</label>
<input className="comm-input" id="po-number" placeholder="e.g. PO-54321" type="text" />
</div>
</div>
</div>
</div>
{/* Section 3: Line Items (Bento-style Grid structure for the table area to feel modern) */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 ambient-shadow overflow-hidden">
<div className="glass-panel px-md py-sm border-b border-outline-variant/20 flex justify-between items-center">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="list_alt">list_alt</span>
<h3 className="font-title-md text-title-md">Line Items</h3>
</div>
<button className="text-primary hover:text-primary-container font-label-md text-label-md flex items-center gap-xs transition-colors" type="button">
<span className="material-symbols-outlined" data-icon="add_circle" style={{"fontSize": "18px"}}>add_circle</span>
                            Add Item
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead>
<tr className="bg-surface-container text-on-surface-variant font-label-md text-label-md border-b border-outline-variant/30">
<th className="p-sm pl-md font-medium w-1/2">Description</th>
<th className="p-sm font-medium w-24 text-right">Qty</th>
<th className="p-sm font-medium w-32 text-right">Unit Price</th>
<th className="p-sm font-medium w-24 text-right">Tax (%)</th>
<th className="p-sm font-medium w-32 text-right">Total</th>
<th className="p-sm font-medium w-12 text-center pr-md"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-sm pl-md">
<input className="comm-input border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" type="text" value="Enterprise Software License - Annual" />
</td>
<td className="p-sm text-right">
<input className="comm-input text-right border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" min="1" type="number" value="1" />
</td>
<td className="p-sm text-right">
<div className="relative">
<span className="absolute left-2 top-1/2 -translate-y-1/2 text-outline-variant text-sm">$</span>
<input className="comm-input text-right pl-6 border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" step="0.01" type="number" value="12000.00" />
</div>
</td>
<td className="p-sm text-right">
<input className="comm-input text-right border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" max="100" min="0" type="number" value="0" />
</td>
<td className="p-sm text-right font-medium text-on-surface">
                                        $12,000.00
                                    </td>
<td className="p-sm text-center pr-md">
<button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100" type="button">
<span className="material-symbols-outlined" data-icon="delete" style={{"fontSize": "20px"}}>delete</span>
</button>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="p-sm pl-md">
<input className="comm-input border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" type="text" value="Implementation &amp; Onboarding Support" />
</td>
<td className="p-sm text-right">
<input className="comm-input text-right border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" min="1" type="number" value="40" />
</td>
<td className="p-sm text-right">
<div className="relative">
<span className="absolute left-2 top-1/2 -translate-y-1/2 text-outline-variant text-sm">$</span>
<input className="comm-input text-right pl-6 border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" step="0.01" type="number" value="150.00" />
</div>
</td>
<td className="p-sm text-right">
<input className="comm-input text-right border-transparent bg-transparent hover:border-outline-variant/50 focus:bg-surface-container-lowest focus:border-primary" max="100" min="0" type="number" value="5" />
</td>
<td className="p-sm text-right font-medium text-on-surface">
                                        $6,300.00
                                    </td>
<td className="p-sm text-center pr-md">
<button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100" type="button">
<span className="material-symbols-outlined" data-icon="delete" style={{"fontSize": "20px"}}>delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Section 4: Summary & Actions */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
{/* Notes area */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-md ambient-shadow flex flex-col gap-sm">
<label className="comm-label flex items-center gap-xs" htmlFor="internal-notes">
<span className="material-symbols-outlined text-outline" data-icon="notes" style={{"fontSize": "16px"}}>notes</span>
                            Internal Notes (Not visible to customer)
                        </label>
<textarea className="comm-input flex-1 resize-none" id="internal-notes" placeholder="Add any private notes regarding this invoice..." rows={4}></textarea>
</div>
{/* Totals and Buttons */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-md ambient-shadow flex flex-col justify-between">
<div className="flex flex-col gap-sm mb-lg">
<div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
<span>Subtotal</span>
<span>$18,000.00</span>
</div>
<div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
<span>Tax (Calculated)</span>
<span>$300.00</span>
</div>
<div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
<span>Discount</span>
<div className="w-24">
<div className="relative">
<span className="absolute left-2 top-1/2 -translate-y-1/2 text-outline-variant text-sm">$</span>
<input className="comm-input text-right pl-6 h-8 text-sm" step="0.01" type="number" value="0.00" />
</div>
</div>
</div>
<div className="h-px w-full bg-outline-variant/30 my-xs"></div>
<div className="flex justify-between items-center font-title-md text-title-md text-on-surface">
<span>Grand Total</span>
<span className="text-primary font-bold">$18,300.00</span>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-col sm:flex-row justify-end gap-sm pt-md border-t border-outline-variant/20 mt-auto">
<button className="px-lg py-sm border border-outline-variant text-on-surface hover:bg-surface-container rounded-lg font-label-md text-label-md transition-colors flex items-center justify-center gap-xs" type="button">
<span className="material-symbols-outlined" data-icon="save" style={{"fontSize": "18px"}}>save</span>
                                Save Draft
                            </button>
<button className="px-lg py-sm bg-primary text-on-primary hover:bg-primary-container rounded-lg font-label-md text-label-md transition-colors shadow-md flex items-center justify-center gap-xs" type="submit">
<span className="material-symbols-outlined" data-icon="send" style={{"fontSize": "18px"}}>send</span>
                                Send Invoice
                            </button>
</div>
</div>
</div>
</form>
</div>
</main>
 Mobile Bottom Navigation (Visible only on Mobile) 
<nav className="md:hidden fixed bottom-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant/20 z-50 flex justify-around items-center h-16 pb-safe">
<a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-[10px] mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-primary border-t-2 border-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long" style={{"fontVariationSettings": "'FILL' 1"}}>receipt_long</span>
<span className="font-label-md text-[10px] mt-1 font-bold">Invoices</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-[10px] mt-1">Reports</span>
</a>
<a className="flex flex-col items-center justify-center w-full h-full text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-[10px] mt-1">Settings</span>
</a>
</nav>

    </>
  );
};

export default CreateNewCustomerInvoice;
