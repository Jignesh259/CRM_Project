import React from 'react';
import '../style/Dashboard.css';

const PurchaseHistoryLedger: React.FC = () => {
  return (
    <>
      
 SideNavBar (from JSON) 
<nav aria-label="Sidebar Navigation" className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-lg z-40 p-md gap-sm">
{/* Header */}
<div className="flex items-center gap-md px-md py-lg mb-lg">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary" data-weight="fill">hub</span>
</div>
<div>
<h1 className="font-title-md text-title-md font-black text-surface-container-lowest">Procurement</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise ERP</p>
</div>
</div>
{/* CTA */}
<button className="flex items-center justify-center gap-sm w-full py-md px-lg bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md mb-lg hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]">
<span className="material-symbols-outlined">add</span>
            New Request
        </button>
{/* Navigation Links */}
<div className="flex flex-col gap-sm flex-grow">
{/* Inactive */}
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">shopping_cart</span>
                Purchase Orders
            </a>
{/* Inactive */}
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">add_shopping_cart</span>
                Create PO
            </a>
{/* Inactive */}
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">receipt_long</span>
                Purchase Details
            </a>
{/* Active Tab */}
<a aria-current="page" className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined" data-weight="fill">history</span>
                Purchase History
            </a>
</div>
{/* Footer Links */}
<div className="flex flex-col gap-sm mt-auto border-t border-outline-variant/20 pt-lg">
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">help_outline</span>
                Help Center
            </a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">logout</span>
                Sign Out
            </a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex flex-col min-h-screen w-full md:pl-[280px]">
{/* TopNavBar (from JSON) */}
<header className="flex justify-between items-center w-full px-margin-desktop h-16 sticky top-0 z-30 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-xl">
{/* Brand Logo */}
<div className="font-display-lg text-display-lg font-bold text-primary md:hidden">
                    CommSync
                </div>
{/* Navigation Links (Hidden on mobile as per rules, using Bottom nav usually, but not rendering bottom nav here as instructed by focus on desktop ERP) */}
<nav className="hidden md:flex gap-lg h-full items-end">
{/* None perfectly match "Purchase History", leaving all inactive per logic mapping */}
<a className="text-on-surface-variant font-title-md text-title-md pb-4 hover:text-primary transition-colors active:opacity-80" href="#">Dashboard</a>
<a className="text-on-surface-variant font-title-md text-title-md pb-4 hover:text-primary transition-colors active:opacity-80" href="#">Inventory</a>
<a className="text-on-surface-variant font-title-md text-title-md pb-4 hover:text-primary transition-colors active:opacity-80 border-b-2 border-transparent" href="#">Reports</a>
</nav>
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-md">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant/50">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant/50">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center ml-sm border border-outline-variant">
<span className="font-title-md text-title-md text-on-primary-fixed">JD</span>
</div>
</div>
</header>
{/* Main Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface-container-low">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Purchase History</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Archived procurement ledger and spend analysis.</p>
</div>
<div className="flex items-center gap-sm">
<button className="flex items-center gap-xs px-md py-2 border border-outline-variant bg-surface rounded-md font-label-md text-label-md text-on-surface hover:border-primary transition-colors">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>calendar_today</span>
                        This Year
                        <span className="material-symbols-outlined" style={{"fontSize": "18px"}}>expand_more</span>
</button>
<button className="flex items-center gap-xs px-md py-2 bg-surface rounded-md font-label-md text-label-md text-primary border border-outline-variant hover:bg-primary/5 transition-colors">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>download</span>
                        Export
                    </button>
</div>
</div>
{/* Bento Grid Content */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-lg">
{/* Spend Analysis Chart (Span 8 columns) */}
<div className="md:col-span-8 bg-surface rounded-xl p-lg card-elevation-1">
<div className="flex justify-between items-center mb-xl">
<div>
<h3 className="font-title-md text-title-md text-on-surface">Spend Analysis</h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Total volume evaluated over 12 months</p>
</div>
<div className="font-headline-md text-headline-md text-primary">
                            $2.4M
                        </div>
</div>
{/* Chart Placeholder */}
<div className="bar-chart-container relative">
{/* Y-axis labels */}
<div className="absolute left-0 top-0 h-full flex flex-col justify-between text-on-surface-variant font-label-md text-label-md pb-8 w-12 text-right pr-2 border-r border-outline-variant/30">
<span>$400k</span>
<span>$300k</span>
<span>$200k</span>
<span>$100k</span>
<span>$0</span>
</div>
<div className="flex justify-between items-end w-full h-full pl-14 pb-1">
<div className="bar-col"><div className="bar" style={{"height": "30%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Jan</span></div>
<div className="bar-col"><div className="bar" style={{"height": "45%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Feb</span></div>
<div className="bar-col"><div className="bar" style={{"height": "60%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Mar</span></div>
<div className="bar-col"><div className="bar" style={{"height": "35%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Apr</span></div>
<div className="bar-col"><div className="bar" style={{"height": "80%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">May</span></div>
<div className="bar-col"><div className="bar" style={{"height": "50%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Jun</span></div>
<div className="bar-col"><div className="bar" style={{"height": "65%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Jul</span></div>
<div className="bar-col"><div className="bar" style={{"height": "40%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Aug</span></div>
<div className="bar-col"><div className="bar bar-active" style={{"height": "95%"}}></div><span className="font-label-md text-label-md text-primary font-bold mt-2">Sep</span></div>
<div className="bar-col"><div className="bar" style={{"height": "70%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Oct</span></div>
<div className="bar-col"><div className="bar" style={{"height": "55%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Nov</span></div>
<div className="bar-col"><div className="bar" style={{"height": "85%"}}></div><span className="font-label-md text-label-md text-on-surface-variant mt-2">Dec</span></div>
</div>
</div>
</div>
{/* Metrics Column (Span 4 columns) */}
<div className="md:col-span-4 flex flex-col gap-gutter">
{/* Metric Card 1 */}
<div className="bg-surface rounded-xl p-lg card-elevation-1 flex-1 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] opacity-5">
<span className="material-symbols-outlined" style={{"fontSize": "120px"}}>receipt_long</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Completed Transactions</h4>
<div className="font-display-lg text-display-lg text-on-surface mb-xs">1,482</div>
<div className="flex items-center gap-xs text-primary font-label-md text-label-md">
<span className="material-symbols-outlined" style={{"fontSize": "16px"}}>trending_up</span>
                            +12% vs last year
                        </div>
</div>
{/* Metric Card 2 */}
<div className="bg-surface rounded-xl p-lg card-elevation-1 flex-1 flex flex-col justify-center relative overflow-hidden">
<div className="absolute right-[-20px] top-[-20px] opacity-5">
<span className="material-symbols-outlined" style={{"fontSize": "120px"}}>account_balance_wallet</span>
</div>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">Average PO Value</h4>
<div className="font-headline-lg text-headline-lg text-on-surface mb-xs">$1,619.43</div>
<div className="flex items-center gap-xs text-outline font-label-md text-label-md">
<span className="material-symbols-outlined" style={{"fontSize": "16px"}}>horizontal_rule</span>
                            Stable
                        </div>
</div>
</div>
</div>
{/* Ledger Table Section */}
<div className="bg-surface rounded-xl card-elevation-1 overflow-hidden">
{/* Table Header/Toolbar */}
<div className="flex flex-col sm:flex-row justify-between items-center p-md border-b border-outline-variant/30 gap-md bg-surface/80 backdrop-blur-md">
<div className="flex items-center gap-md w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/50 rounded-md font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search POs, suppliers..." type="text" />
</div>
<button className="p-2 border border-outline-variant/50 rounded-md text-on-surface hover:bg-surface-variant/20 transition-colors">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>filter_list</span>
</button>
</div>
<div className="flex items-center gap-sm font-label-md text-label-md text-on-surface-variant">
<span>Showing 1-10 of 1,482</span>
</div>
</div>
{/* Data Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/50 bg-surface-container-lowest">
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold">PO Number</th>
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Completion Date</th>
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Supplier</th>
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Category</th>
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold text-right">Total Amount</th>
<th className="py-sm px-lg font-label-md text-label-md text-on-surface-variant font-semibold text-center">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors">
<td className="py-md px-lg font-code-sm text-code-sm text-primary">PO-2023-8942</td>
<td className="py-md px-lg">Sep 28, 2023</td>
<td className="py-md px-lg font-medium">Acme Corp Electronics</td>
<td className="py-md px-lg text-on-surface-variant">IT Hardware</td>
<td className="py-md px-lg font-code-sm text-code-sm text-right">$45,200.00</td>
<td className="py-md px-lg text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">
                                        Fulfilled
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors">
<td className="py-md px-lg font-code-sm text-code-sm text-primary">PO-2023-8941</td>
<td className="py-md px-lg">Sep 25, 2023</td>
<td className="py-md px-lg font-medium">Global Office Supplies</td>
<td className="py-md px-lg text-on-surface-variant">Office Consumables</td>
<td className="py-md px-lg font-code-sm text-code-sm text-right">$1,240.50</td>
<td className="py-md px-lg text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">
                                        Fulfilled
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors">
<td className="py-md px-lg font-code-sm text-code-sm text-primary">PO-2023-8938</td>
<td className="py-md px-lg">Sep 19, 2023</td>
<td className="py-md px-lg font-medium">Nexus Cloud Services</td>
<td className="py-md px-lg text-on-surface-variant">Software License</td>
<td className="py-md px-lg font-code-sm text-code-sm text-right">$12,000.00</td>
<td className="py-md px-lg text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-[10px] uppercase tracking-wider">
                                        Archived
                                    </span>
</td>
</tr>
<tr className="border-b border-outline-variant/20 table-row-hover transition-colors">
<td className="py-md px-lg font-code-sm text-code-sm text-primary">PO-2023-8935</td>
<td className="py-md px-lg">Sep 14, 2023</td>
<td className="py-md px-lg font-medium">Delta Logistics</td>
<td className="py-md px-lg text-on-surface-variant">Freight</td>
<td className="py-md px-lg font-code-sm text-code-sm text-right">$8,450.75</td>
<td className="py-md px-lg text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">
                                        Fulfilled
                                    </span>
</td>
</tr>
<tr className="table-row-hover transition-colors">
<td className="py-md px-lg font-code-sm text-code-sm text-primary">PO-2023-8931</td>
<td className="py-md px-lg">Sep 02, 2023</td>
<td className="py-md px-lg font-medium">Apex Machinery</td>
<td className="py-md px-lg text-on-surface-variant">Capital Equipment</td>
<td className="py-md px-lg font-code-sm text-code-sm text-right">$145,000.00</td>
<td className="py-md px-lg text-center">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-[10px] uppercase tracking-wider">
                                        Archived
                                    </span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Pagination Footer */}
<div className="flex items-center justify-between p-md border-t border-outline-variant/30 bg-surface-container-lowest">
<button className="flex items-center gap-xs px-3 py-1 rounded text-on-surface-variant hover:bg-surface-variant/20 transition-colors font-label-md text-label-md disabled:opacity-50" disabled>
<span className="material-symbols-outlined" style={{"fontSize": "16px"}}>chevron_left</span>
                        Previous
                    </button>
<div className="flex gap-1">
<button className="w-8 h-8 rounded bg-primary-container text-on-primary-container font-label-md text-label-md flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-variant/20 text-on-surface transition-colors font-label-md text-label-md flex items-center justify-center">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-variant/20 text-on-surface transition-colors font-label-md text-label-md flex items-center justify-center">3</button>
<span className="w-8 h-8 flex items-center justify-center text-outline">...</span>
<button className="w-8 h-8 rounded hover:bg-surface-variant/20 text-on-surface transition-colors font-label-md text-label-md flex items-center justify-center">149</button>
</div>
<button className="flex items-center gap-xs px-3 py-1 rounded text-on-surface hover:bg-surface-variant/20 transition-colors font-label-md text-label-md">
                        Next
                        <span className="material-symbols-outlined" style={{"fontSize": "16px"}}>chevron_right</span>
</button>
</div>
</div>
</main>
</div>

    </>
  );
};

export default PurchaseHistoryLedger;
