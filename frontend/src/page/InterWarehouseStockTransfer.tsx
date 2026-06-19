import React from 'react';
import '../style/Dashboard.css';

const InterWarehouseStockTransfer: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component) 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md flex flex-col h-full py-lg z-20 hidden md:flex">
<div className="px-lg mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">CS</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-70">Enterprise Suite</p>
</div>
</div>
<button className="mx-lg mb-6 bg-primary text-on-primary font-title-md text-title-md h-10 rounded-lg flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant transition-colors shadow-sm">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
            New Entry
        </button>
<ul className="flex flex-col gap-2 flex-grow overflow-y-auto custom-scrollbar">
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">group</span>
<span className="font-body-md text-body-md">CRM</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Sales</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-body-md text-body-md">Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md text-body-md">Finance</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
</li>
<li>
<a className="flex items-center gap-4 py-3 text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</li>
</ul>
</nav>
 Main Content Area 
<main className="flex-1 flex flex-col min-h-screen md:ml-[280px] w-full md:w-[calc(100%-280px)]">
{/* TopNavBar (Shared Component) */}
<header className="docked full-width top-0 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant flex justify-between items-center w-full h-16 px-margin-desktop sticky z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="relative focus-within:ring-2 focus-within:ring-primary rounded-lg">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container rounded-lg border-none text-body-md font-body-md focus:outline-none w-64 md:w-96 transition-all" placeholder="Search inventory..." type="text" />
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm cursor-pointer border border-outline-variant">
                    JD
                </div>
</div>
</header>
{/* Canvas */}
<div className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto custom-scrollbar relative">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<div className="flex items-center gap-2 text-on-surface-variant mb-1">
<span className="font-label-md text-label-md">Inventory</span>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="font-label-md text-label-md text-primary">Stock Transfer</span>
</div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">New Stock Transfer</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Move inventory between regional warehouses.</p>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 border border-outline rounded-lg text-on-surface font-title-md text-title-md hover:bg-surface-container transition-colors h-10">
                        Save Draft
                    </button>
<button className="flex-1 md:flex-none px-4 py-2 bg-primary text-on-primary rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 hover:bg-on-primary-fixed-variant transition-colors shadow-sm h-10">
<span className="material-symbols-outlined text-sm">send</span>
                        Initiate Transfer
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
{/* Transfer Details Panel (Left/Top) */}
<div className="xl:col-span-1 space-y-6">
{/* Logistics Card */}
<div className="glass-panel rounded-xl p-6">
<div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-4">
<span className="material-symbols-outlined text-primary">local_shipping</span>
<h3 className="font-title-md text-title-md text-on-surface">Logistics Details</h3>
</div>
<div className="space-y-5">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Source Warehouse</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface">
<option disabled selected value="">Select origin...</option>
<option>WH-NY-01 (New York Main)</option>
<option>WH-TX-02 (Dallas Hub)</option>
<option>WH-CA-03 (Los Angeles)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
<div className="flex items-center justify-center py-2 text-outline-variant relative">
<div className="absolute w-full h-[1px] bg-outline-variant z-0"></div>
<div className="bg-white rounded-full p-1 z-10 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant transform rotate-90 md:rotate-0">swap_horiz</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Destination Warehouse</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface">
<option disabled selected value="">Select destination...</option>
<option>WH-NY-01 (New York Main)</option>
<option>WH-TX-02 (Dallas Hub)</option>
<option>WH-CA-03 (Los Angeles)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
</div>
</div>
{/* Scheduling Card */}
<div className="glass-panel rounded-xl p-6">
<div className="flex items-center gap-2 mb-6 border-b border-outline-variant pb-4">
<span className="material-symbols-outlined text-primary">calendar_month</span>
<h3 className="font-title-md text-title-md text-on-surface">Schedule &amp; Notes</h3>
</div>
<div className="space-y-5">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Transfer Date</label>
<div className="relative">
<input className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface" type="date" value="2023-10-25" />
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Reference Number (Optional)</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface" placeholder="e.g. TRQ-8821" type="text" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-1.5">Transfer Notes</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-lg px-3 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md text-on-surface h-24 resize-none" placeholder="Add any special instructions..."></textarea>
</div>
</div>
</div>
</div>
{/* Items Manifest Panel (Right/Bottom) */}
<div className="xl:col-span-2">
<div className="glass-panel rounded-xl flex flex-col h-full min-h-[500px]">
{/* Panel Header */}
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container/30 rounded-t-xl">
<div>
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">category</span>
                                    Transfer Manifest
                                </h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Add items to move between locations.</p>
</div>
<button className="px-3 py-1.5 bg-surface-container hover:bg-surface-variant text-on-surface border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-1.5 transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
                                Add Row
                            </button>
</div>
{/* Scan Input Area */}
<div className="p-4 bg-surface border-b border-outline-variant flex gap-3">
<div className="relative flex-1">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">barcode_scanner</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container rounded-lg border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body-md text-body-md" placeholder="Scan or search SKU..." type="text" />
</div>
<button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md font-bold hover:opacity-90 transition-opacity">
                                Quick Add
                            </button>
</div>
{/* Data Table Container */}
<div className="flex-1 overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead className="bg-surface-container-low font-label-md text-label-md text-on-surface-variant">
<tr>
<th className="py-3 px-4 w-12"></th>
<th className="py-3 px-4 font-medium">SKU / Item Name</th>
<th className="py-3 px-4 font-medium text-right w-32">Source Avail.</th>
<th className="py-3 px-4 font-medium w-40">Transfer Qty</th>
<th className="py-3 px-4 font-medium w-32">Unit</th>
<th className="py-3 px-4 w-12"></th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/50 bg-white">
{/* Row 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-center">
<span className="material-symbols-outlined text-outline-variant cursor-move">drag_indicator</span>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-bold">EL-9002-A</span>
<span className="text-on-surface-variant font-label-md text-[11px]">Industrial Power Supply V2</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface text-[12px] font-medium border border-outline-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                                1,240
                                            </span>
</td>
<td className="py-3 px-4">
<input className="w-full bg-surface border border-outline-variant rounded p-1.5 focus:outline-none focus:border-primary text-right" type="number" value="150" />
</td>
<td className="py-3 px-4 text-on-surface-variant text-[13px]">
                                            Units
                                        </td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-error transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-4 text-center">
<span className="material-symbols-outlined text-outline-variant cursor-move">drag_indicator</span>
</td>
<td className="py-3 px-4">
<div className="flex flex-col">
<span className="font-bold">CB-1044-X</span>
<span className="text-on-surface-variant font-label-md text-[11px]">Cat6 Shielded Cable (50m roll)</span>
</div>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface text-[12px] font-medium border border-outline-variant">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                                45
                                            </span>
</td>
<td className="py-3 px-4">
<input className="w-full bg-surface border border-outline-variant rounded p-1.5 focus:outline-none focus:border-primary text-right" type="number" value="20" />
</td>
<td className="py-3 px-4 text-on-surface-variant text-[13px]">
                                            Rolls
                                        </td>
<td className="py-3 px-4 text-center">
<button className="text-outline hover:text-error transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Empty State / Add Row Placeholder */}
<tr>
<td className="py-4 text-center border-t border-dashed border-outline-variant" colSpan={6}>
<button className="text-primary hover:text-on-primary-fixed-variant font-label-md text-label-md flex items-center justify-center gap-1 mx-auto transition-colors">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
                                                Add another item
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Footer Totals */}
<div className="p-4 bg-surface-container-low border-t border-outline-variant rounded-b-xl flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant">2 Unique Items</span>
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Total Transfer Quantity:</span>
<span className="font-title-md text-title-md text-on-surface">170</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default InterWarehouseStockTransfer;
