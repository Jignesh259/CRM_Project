import React from 'react';
import '../style/Dashboard.css';

const ReceiveInventoryStockIn: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav aria-label="Sidebar" className="hidden md:flex flex-col h-full py-lg bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] shadow-md z-20">
<div className="px-lg mb-xl">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold">
                    C
                </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-70">Enterprise Suite</p>
</div>
</div>
<button className="mt-lg w-full bg-primary-container text-on-primary-container h-10 rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Entry
            </button>
</div>
<ul className="flex-1 space-y-sm overflow-y-auto">
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                    Sales
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 font-body-md text-body-md bg-on-surface-variant/10" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
                    Finance
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
                    Reports
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                    Settings
                </a>
</li>
</ul>
</nav>
 Main Content Canvas 
<div className="flex-1 flex flex-col md:ml-[280px] w-full min-h-screen relative overflow-hidden">
{/* Subtle Background Decor */}
<div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-primary-fixed/20 to-transparent -z-10 blur-3xl pointer-events-none"></div>
{/* TopNavBar */}
<header className="flex justify-between items-center w-full h-16 px-margin-desktop bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm z-10 sticky top-0 border-b-0">
<div className="flex items-center gap-lg">
{/* Mobile menu toggle placeholder */}
<button className="md:hidden text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="hidden md:flex font-headline-md text-headline-md text-primary font-bold tracking-tight">
                    Stock In
                </div>
</div>
<div className="flex items-center gap-md">
<div className="relative hidden sm:block focus-within:ring-2 focus-within:ring-primary rounded-full transition-shadow">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="h-10 pl-10 pr-4 rounded-full bg-surface-container-high border-none text-body-md font-body-md text-on-surface w-64 focus:outline-none focus:bg-surface" placeholder="Search inventory..." type="text" />
</div>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-high">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden border border-outline-variant cursor-pointer ml-sm">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A small, circular profile picture of a professional individual against a bright, modern office background. The lighting is soft and natural, suggesting a corporate yet approachable aesthetic. The image fits perfectly within a light-mode enterprise UI dashboard header." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE8jX-NNSXPoFK3xjwO2L_4y11_xx7MpvinBLj-rzf5Extd21AMJBsf-jfB5QTiDCI1BvQUmFZT6Y5Jqq2r7vXsUcxogcdCuXp14xgfAbsy1vb6K8Mb3gQFHEHYeU6cvaRAYqJim0tGSLOpU6DHCmZn5wbT450PFYSzd2aIufvc7XF0uB_O0qxkSrnBuOf28U9e-uw-F9ViBMV2Mvhc4ioIDXJo-fRdRF1ymWAw5ZrOE112LzcUMnIYdTHYJVN0kU8t7XNtmjium4" />
</div>
</div>
</header>
{/* Canvas Area */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop pb-24">
<div className="max-w-[1200px] mx-auto">
{/* Header Section */}
<div className="mb-xl flex flex-col sm:flex-row sm:items-end justify-between gap-md">
<div>
<h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-on-background mb-xs">Receive Inventory</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Log new stock arrivals, verify quantities, and update warehouse records.</p>
</div>
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface-variant">Status:</span>
<span className="px-2 py-1 rounded-full bg-primary-fixed/30 text-primary font-label-md text-label-md border border-primary-fixed">Draft</span>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Left Column: Primary Details (8 cols) */}
<div className="lg:col-span-8 flex flex-col gap-lg">
{/* Receipt Details Card */}
<div className="glass-panel rounded-xl p-lg shadow-sm hover:shadow-md transition-shadow duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-md border-b border-outline-variant pb-xs flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[20px]">local_shipping</span>
                                Receipt Details
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label className="form-label">Purchase Order Number *</label>
<input className="form-input" placeholder="e.g. PO-2023-4589" type="text" value="PO-2023-4589" />
</div>
<div>
<label className="form-label">Supplier *</label>
<div className="relative">
<select className="form-input appearance-none">
<option>TechComponents Inc.</option>
<option>Global Logistics Solutions</option>
<option>Prime Manufacturing</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">arrow_drop_down</span>
</div>
</div>
<div>
<label className="form-label">Warehouse Location *</label>
<div className="relative">
<select className="form-input appearance-none">
<option>Main Hub - Zone A</option>
<option>Secondary Facility - East</option>
<option>Cold Storage Unit 3</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">arrow_drop_down</span>
</div>
</div>
<div>
<label className="form-label">Expected Date</label>
<input className="form-input" type="date" value="2023-10-24" />
</div>
</div>
</div>
{/* Items List Card */}
<div className="glass-panel rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-lg pb-sm flex justify-between items-center border-b border-outline-variant bg-surface-container-lowest/50">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                                    Received Items
                                </h3>
<button className="text-primary font-label-md text-label-md hover:bg-primary-fixed/20 px-3 py-1.5 rounded transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">add</span>
                                    Add Line Item
                                </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">
<th className="p-md font-medium w-10"></th>
<th className="p-md font-medium">Item Details</th>
<th className="p-md font-medium text-right w-32">Expected</th>
<th className="p-md font-medium text-right w-32">Received</th>
<th className="p-md font-medium text-right w-32">Unit Cost</th>
<th className="p-md font-medium w-12"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/50">
{/* Row 1 */}
<tr className="hover:bg-primary-fixed/5 transition-colors group">
<td className="p-md align-top">
<div className="w-8 h-8 bg-surface-variant rounded flex items-center justify-center text-on-surface-variant text-xs">1</div>
</td>
<td className="p-md align-top">
<input className="form-input mb-2 border-transparent hover:border-outline-variant focus:bg-white" type="text" value="ThinkPad T14 Gen 3" />
<div className="flex items-center gap-sm">
<span className="text-xs text-on-surface-variant bg-surface-container py-0.5 px-2 rounded">SKU: LNV-T14-G3</span>
</div>
</td>
<td className="p-md align-top text-right">
<span className="inline-block py-2 text-on-surface-variant">50</span>
</td>
<td className="p-md align-top">
<input className="form-input text-right font-medium text-primary" type="number" value="50" />
</td>
<td className="p-md align-top">
<input className="form-input text-right" type="text" value="$1,240.00" />
</td>
<td className="p-md align-top text-right">
<button className="text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-opacity p-2">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary-fixed/5 transition-colors group">
<td className="p-md align-top">
<div className="w-8 h-8 bg-surface-variant rounded flex items-center justify-center text-on-surface-variant text-xs">2</div>
</td>
<td className="p-md align-top">
<input className="form-input mb-2 border-transparent hover:border-outline-variant focus:bg-white" type="text" value="Dell UltraSharp 27 Monitor" />
<div className="flex items-center gap-sm">
<span className="text-xs text-on-surface-variant bg-surface-container py-0.5 px-2 rounded">SKU: DEL-U2722D</span>
<span className="text-[10px] text-tertiary-container bg-tertiary-fixed/30 py-0.5 px-1.5 rounded border border-tertiary-fixed font-medium">Partial</span>
</div>
</td>
<td className="p-md align-top text-right">
<span className="inline-block py-2 text-on-surface-variant">100</span>
</td>
<td className="p-md align-top">
<input className="form-input text-right font-medium text-tertiary-container border-tertiary-fixed focus:border-tertiary" type="number" value="85" />
</td>
<td className="p-md align-top">
<input className="form-input text-right" type="text" value="$350.00" />
</td>
<td className="p-md align-top text-right">
<button className="text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-opacity p-2">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-md bg-surface-container-low border-t border-outline-variant flex justify-end">
<div className="text-right">
<div className="font-label-md text-label-md text-on-surface-variant mb-1">Total Estimated Value</div>
<div className="font-title-md text-title-md text-on-surface">$91,750.00</div>
</div>
</div>
</div>
</div>
{/* Right Column: Secondary Details & Actions (4 cols) */}
<div className="lg:col-span-4 flex flex-col gap-lg">
{/* Inspection Notes */}
<div className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
                                Inspection Notes
                            </h3>
<div className="mb-md">
<label className="form-label">Condition upon arrival</label>
<div className="flex gap-sm mt-xs">
<label className="flex-1 cursor-pointer">
<input checked className="peer sr-only" name="condition" type="radio" />
<div className="text-center py-2 border border-outline-variant rounded-lg peer-checked:bg-primary-fixed/30 peer-checked:border-primary peer-checked:text-primary font-label-md text-label-md transition-colors">
                                            Excellent
                                        </div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="condition" type="radio" />
<div className="text-center py-2 border border-outline-variant rounded-lg peer-checked:bg-tertiary-fixed/30 peer-checked:border-tertiary peer-checked:text-tertiary font-label-md text-label-md transition-colors">
                                            Damaged
                                        </div>
</label>
</div>
</div>
<div>
<label className="form-label">Additional Comments</label>
<textarea className="form-input h-24 py-2 resize-none" placeholder="Enter any discrepancies, damage reports, or delivery notes here..."></textarea>
</div>
<div className="mt-md border-t border-outline-variant pt-md">
<label className="form-label mb-xs">Attachments</label>
<div className="border-2 border-dashed border-outline-variant rounded-lg p-md text-center hover:bg-surface-container-low hover:border-primary transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary text-[24px] mb-1">upload_file</span>
<div className="font-label-md text-label-md text-on-surface-variant group-hover:text-on-surface">Drop files or click to upload</div>
<div className="text-[10px] text-outline mt-1">Images, PDF docs (Max 5MB)</div>
</div>
</div>
</div>
{/* Action Card Sticky */}
<div className="glass-panel rounded-xl p-lg shadow-sm sticky top-20 border-t-4 border-t-primary">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Summary</h3>
<div className="space-y-sm mb-lg">
<div className="flex justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Items Received:</span>
<span className="font-medium">135 units</span>
</div>
<div className="flex justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Discrepancies:</span>
<span className="font-medium text-tertiary-container">-15 units</span>
</div>
<div className="flex justify-between font-body-md text-body-md">
<span className="text-on-surface-variant">Assigned To:</span>
<span className="font-medium">Main Hub - Zone A</span>
</div>
</div>
<button className="w-full bg-primary text-on-primary h-12 rounded-lg font-title-md text-title-md hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-sm">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
                                Confirm Receipt
                            </button>
<button className="w-full mt-sm border border-outline-variant text-on-surface h-10 rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors">
                                Save as Draft
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

export default ReceiveInventoryStockIn;
