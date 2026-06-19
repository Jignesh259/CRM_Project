import React from 'react';
import '../style/Dashboard.css';

const DispatchInventoryStockOut: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-lg bg-inverse-surface fixed left-0 top-0 h-full w-[280px] shadow-md z-40">
<div className="px-lg mb-xl">
<h1 className="font-headline-md text-headline-md font-bold text-on-primary tracking-tight">CommSync</h1>
<p className="text-surface-variant opacity-70 font-label-md text-label-md mt-xs">Enterprise Suite</p>
</div>
<button className="mx-lg mb-xl bg-primary-container text-on-primary font-label-md text-label-md h-10 rounded-lg shadow flex items-center justify-center gap-sm hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">add</span>
            New Entry
        </button>
<ul className="flex-1 flex flex-col gap-sm">
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">group</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">payments</span>
                    Sales
                </a>
</li>
<li className="relative">
<a className="flex items-center gap-md py-sm pl-4 text-primary-fixed font-bold border-l-4 border-primary-fixed font-body-md text-body-md w-full group bg-on-surface-variant/20" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">account_balance</span>
                    Finance
                </a>
</li>
<li>
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">assessment</span>
                    Reports
                </a>
</li>
<li className="mt-auto">
<a className="flex items-center gap-md py-sm pl-5 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 font-body-md text-body-md w-full relative group" href="#">
<span className="material-symbols-outlined group-active:scale-[0.99] transition-transform">settings</span>
                    Settings
                </a>
</li>
</ul>
<div className="px-lg mt-lg pt-lg border-t border-on-surface-variant/30 flex items-center gap-md">
<img alt="CommSync Logo" className="w-8 h-8 rounded-full border border-surface-variant/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpQ68B8nvy25SCCEQU-zFNnldZImmap9jTZgJHvHA-dA-Ueu_6D8PW27VBeHVvNw8ba1_RzfhGBgWcpltdLDZ7TFwss1ECZIdj8JBNOnjTLC99oad9Pe9d8B_zdHrvg8hSGFhtQWB1MKLS1vgeDj84F6shqpp72LHSVBECS-stQ_A2Sw8v4Ki4_3CQjSfZ0WX6aYpOWKvI0ukueN-Rfj9xULsfk2jHEjSSkxQQ6LejbNt6u6SlBzchDikay1gzDFg-SSQqfmSFujI" />
<div className="flex-1 min-w-0">
<p className="text-surface-variant font-label-md text-label-md truncate">admin@commsync.io</p>
</div>
</div>
</nav>
 Main Content Area Wrapper 
<div className="flex-1 md:ml-[280px] w-full md:w-[calc(100%-280px)] flex flex-col min-h-screen">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 border-b border-outline-variant shadow-sm flex justify-between items-center w-full h-16 px-margin-desktop z-30 sticky">
<div className="flex items-center gap-lg flex-1">
<div className="md:hidden">
<span className="material-symbols-outlined text-primary text-[24px]">menu</span>
</div>
<div className="hidden md:flex items-center gap-sm text-surface-variant">
<span className="font-title-md text-title-md text-on-surface font-semibold">Inventory</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="font-body-md text-body-md text-primary font-medium">Stock Out (Dispatch)</span>
</div>
</div>
{/* Search Bar: on_left */}
<div className="hidden md:flex flex-1 max-w-md mx-lg focus-within:ring-2 focus-within:ring-primary rounded-lg transition-all bg-surface-container-low border border-outline-variant items-center px-md h-10">
<span className="material-symbols-outlined text-outline mr-sm text-[20px]">search</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder-outline-variant p-0" placeholder="Search orders, SKUs..." type="text" />
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors p-sm rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-sm rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="h-8 w-8 rounded-full overflow-hidden border border-outline-variant ml-sm cursor-pointer hover:border-primary transition-colors">
<img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqW_NhkvydluCOUGe5ouuO_Hv1XbI_J_0NYl1FtooMSHm9r3k7HI_kc33TzM2Yyawm6pkvDFDOxWkwpLq1AsApYnik3qYl9hVGsLPV9zB_7gqVJWfk31VrRE0XnQv-DgBYiYD4ZBG1oexqX_IBbmc6CHqfOr57IWe5BcztacnfomaptP4YvbRfY7zQfrAqpKN8NxGAw4r_TebuYa0fAzslM584XjgRyoL32-1zJiNmOKyogKk3fcZgZ-uPU7ib9DnoTV0fAge4pjY" />
</div>
</div>
</header>
{/* Main Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop w-full max-w-container-max mx-auto overflow-y-auto">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-xl gap-md">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Dispatch Shipment</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Log inventory leaving the warehouse facility.</p>
</div>
<div className="flex items-center gap-sm">
<button className="h-10 px-md rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md bg-surface hover:bg-surface-container transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[18px]">print</span>
                        Print Slip
                    </button>
<button className="h-10 px-md rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[18px]">local_shipping</span>
                        Confirm Dispatch
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Left Column: Details */}
<div className="lg:col-span-4 flex flex-col gap-lg">
{/* Dispatch Information Card */}
<div className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="font-title-md text-title-md text-on-background mb-lg flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>info</span>
                            Dispatch Details
                        </h3>
<div className="space-y-md">
{/* Field: Sales Order */}
<div className="input-glow rounded-lg border border-outline-variant bg-surface overflow-hidden transition-all">
<label className="block px-md pt-sm text-xs font-label-md text-on-surface-variant uppercase tracking-wider">Sales Order #</label>
<input className="w-full px-md pb-sm pt-1 bg-transparent border-none focus:ring-0 text-body-lg font-body-lg text-on-background outline-none" type="text" value="SO-2023-8941" />
</div>
{/* Field: Customer/Destination */}
<div className="input-glow rounded-lg border border-outline-variant bg-surface overflow-hidden transition-all">
<label className="block px-md pt-sm text-xs font-label-md text-on-surface-variant uppercase tracking-wider">Destination / Customer</label>
<div className="flex items-center px-md pb-sm pt-1">
<span className="material-symbols-outlined text-outline-variant text-[18px] mr-sm">domain</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-body-lg font-body-lg text-on-background outline-none p-0" type="text" value="Acme Corp Logistics Center" />
</div>
</div>
{/* Field: Reason */}
<div className="input-glow rounded-lg border border-outline-variant bg-surface overflow-hidden transition-all relative">
<label className="block px-md pt-sm text-xs font-label-md text-on-surface-variant uppercase tracking-wider">Reason for Dispatch</label>
<select className="w-full px-md pb-sm pt-1 bg-transparent border-none focus:ring-0 text-body-lg font-body-lg text-on-background outline-none appearance-none cursor-pointer">
<option selected value="sale">Fulfillment (Sale)</option>
<option value="transfer">Internal Transfer</option>
<option value="return">Return to Vendor</option>
<option value="damage">Write-off (Damage)</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/4 text-outline-variant pointer-events-none">arrow_drop_down</span>
</div>
{/* Field: Date */}
<div className="input-glow rounded-lg border border-outline-variant bg-surface overflow-hidden transition-all">
<label className="block px-md pt-sm text-xs font-label-md text-on-surface-variant uppercase tracking-wider">Dispatch Date</label>
<div className="flex items-center px-md pb-sm pt-1">
<span className="material-symbols-outlined text-outline-variant text-[18px] mr-sm">calendar_today</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-body-lg font-body-lg text-on-background outline-none p-0 text-left" type="date" value="2023-10-27" />
</div>
</div>
</div>
</div>
{/* Scan Trigger Card */}
<div className="glass-panel rounded-xl p-lg shadow-sm bg-gradient-to-br from-surface to-surface-container-low border-primary/20 border">
<div className="flex items-center justify-between mb-md">
<h3 className="font-title-md text-title-md text-on-background">Quick Entry</h3>
<span className="material-symbols-outlined text-primary-container">qr_code_scanner</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">Connect scanner or use device camera to log items instantly.</p>
<button className="w-full h-10 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-outline-variant/30 transition-colors flex items-center justify-center gap-sm border border-outline-variant">
<span className="material-symbols-outlined text-[18px]">barcode_scanner</span>
                            Scan Barcode
                        </button>
</div>
</div>
{/* Right Column: Item List */}
<div className="lg:col-span-8 flex flex-col h-full">
<div className="glass-panel rounded-xl flex flex-col flex-1 shadow-sm overflow-hidden border border-outline-variant">
{/* Table Header Actions */}
<div className="p-lg border-b border-outline-variant bg-surface-container-lowest/50 flex justify-between items-center">
<h3 className="font-title-md text-title-md text-on-background flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>list_alt</span>
                                Outbound Items
                            </h3>
<button className="text-primary text-label-md font-label-md flex items-center gap-xs hover:underline">
<span className="material-symbols-outlined text-[16px]">add</span>
                                Add Row manually
                            </button>
</div>
{/* Table Wrapper */}
<div className="flex-1 overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="border-b border-outline-variant/50 bg-surface-container-low/30">
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium">Item / SKU</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right">Location</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right w-32">Qty Out</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-medium text-right w-32">Remaining</th>
<th className="py-sm px-md w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
{/* Row 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[20px]">dns</span>
</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Enterprise Router X-Series</p>
<p className="font-code-sm text-code-sm text-on-surface-variant">SKU: NET-RTR-X900</p>
</div>
</div>
</td>
<td className="py-md px-md text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-md text-[10px] tracking-widest border border-outline-variant/50">Aisle 4, Rack B</span>
</td>
<td className="py-md px-md text-right">
<input className="w-20 text-right bg-surface border border-outline-variant rounded px-2 py-1 focus:ring-2 focus:ring-primary focus:border-primary text-body-md font-body-md text-on-background" type="number" value="12" />
</td>
<td className="py-md px-md text-right">
<div className="flex flex-col items-end">
<span className="font-body-md text-body-md text-on-background">148</span>
<span className="text-[10px] text-surface-tint font-medium bg-primary/10 px-1 rounded">Post-dispatch</span>
</div>
</td>
<td className="py-md px-md text-right">
<button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded bg-surface-container border border-outline-variant/50 flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[20px]">cable</span>
</div>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Cat6a Shielded Patch Cable (3m)</p>
<p className="font-code-sm text-code-sm text-on-surface-variant">SKU: CBL-C6A-3M-BLU</p>
</div>
</div>
</td>
<td className="py-md px-md text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-md text-[10px] tracking-widest border border-outline-variant/50">Bin 12-C</span>
</td>
<td className="py-md px-md text-right">
<input className="w-20 text-right bg-surface border border-outline-variant rounded px-2 py-1 focus:ring-2 focus:ring-primary focus:border-primary text-body-md font-body-md text-on-background" type="number" value="50" />
</td>
<td className="py-md px-md text-right">
<div className="flex flex-col items-end">
<span className="font-body-md text-body-md text-error font-medium">15</span>
<span className="text-[10px] text-error font-medium bg-error/10 px-1 rounded flex items-center gap-1"><span className="material-symbols-outlined text-[10px]">warning</span>Low Stock</span>
</div>
</td>
<td className="py-md px-md text-right">
<button className="text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 p-1">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Empty State Row (Hidden by default, shown for UX completeness in design) */}
<tr className="hidden">
<td className="py-xl text-center" colSpan={5}>
<div className="flex flex-col items-center justify-center text-outline-variant">
<span className="material-symbols-outlined text-[48px] mb-sm font-light">inventory_2</span>
<p className="font-body-md text-body-md">No items added yet. Scan a barcode to begin.</p>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer / Summary */}
<div className="p-md bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
<span className="font-body-sm text-on-surface-variant text-sm">Showing 2 items</span>
<div className="flex items-center gap-md">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Qty:</span>
<span className="font-title-md text-title-md text-on-background font-bold">62</span>
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

export default DispatchInventoryStockOut;
