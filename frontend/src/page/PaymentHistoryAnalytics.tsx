import React from 'react';
import '../style/Dashboard.css';

const PaymentHistoryAnalytics: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component) 
<nav className="hidden md:flex bg-inverse-surface dark:bg-inverse-surface fixed left-0 top-0 h-screen w-[280px] shadow-xl flex-col py-6 z-50">
{/* Header */}
<div className="px-gutter mb-xl">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined icon-fill text-[20px]">sync</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-surface-lowest text-white tracking-tight">CommSync</h1>
<p className="font-Inter text-label-md font-label-md text-outline-variant opacity-80">Enterprise ERP</p>
</div>
</div>
</div>
{/* CTA */}
<div className="px-gutter mb-lg">
<button className="w-full bg-primary hover:bg-primary-fixed-variant text-on-primary font-label-md text-label-md py-3 rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] transition-all flex items-center justify-center gap-2 group">
<span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform">add</span>
                New Record
            </button>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto custom-scrollbar px-sm">
<div className="flex flex-col gap-1">
{/* Dashboard */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
<span className="font-body-md text-body-md font-medium">Dashboard</span>
</a>
{/* CRM */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]">contacts</span>
<span className="font-body-md text-body-md font-medium">CRM</span>
</a>
{/* Sales */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]">monetization_on</span>
<span className="font-body-md text-body-md font-medium">Sales</span>
</a>
{/* Inventory */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]">inventory_2</span>
<span className="font-body-md text-body-md font-medium">Inventory</span>
</a>
{/* Finance (ACTIVE) */}
<a className="text-on-primary bg-primary rounded-lg mx-2 my-1 px-4 py-3 hover:bg-primary/90 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]" href="#">
<span className="material-symbols-outlined icon-fill text-[20px]">account_balance_wallet</span>
<span className="font-body-md text-body-md font-medium">Finance</span>
</a>
{/* Reports */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3" href="#">
<span className="material-symbols-outlined text-[20px]">assessment</span>
<span className="font-body-md text-body-md font-medium">Reports</span>
</a>
{/* Settings */}
<a className="text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 scale-95 active:transition-transform flex items-center gap-3 mt-auto border-t border-outline-variant/10" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="font-body-md text-body-md font-medium">Settings</span>
</a>
</div>
</div>
</nav>
 TopAppBar (Shared Component) 
<header className="hidden md:flex fixed top-0 right-0 left-[280px] h-16 bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm z-40 justify-between items-center px-gutter transition-all">
{/* Left: Search */}
<div className="flex items-center flex-1 max-w-md">
<div className="relative w-full group focus-within:ring-2 focus-within:ring-primary/50 rounded-lg transition-all">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary text-[20px]">search</span>
<input className="w-full bg-surface-container-highest/30 border-none rounded-lg pl-10 pr-4 py-2 text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:outline-none focus:ring-0 focus:bg-surface-container-lowest transition-colors" placeholder="Search invoices, clients, or amounts..." type="text" />
</div>
</div>
{/* Right: Actions & Profile */}
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant relative">
<span className="material-symbols-outlined text-[20px]">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
</button>
<button className="w-10 h-10 rounded-full hover:bg-surface-container-high transition-all flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">help</span>
</button>
</div>
<div className="w-px h-8 bg-outline-variant/30"></div>
<button className="flex items-center gap-3 hover:bg-surface-container-high transition-all p-1.5 rounded-lg pr-3">
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant/20">
<img alt="A professional headshot of a corporate user, neutral lighting, minimalist background." className="w-full h-full object-cover" data-alt="A professional headshot portrait of a confident male executive in a modern corporate setting. The lighting is soft and neutral, typical of a high-end enterprise environment. The background is a clean, minimalist blurred office interior with subtle cool tones, complementing a high-velocity business UI aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY7AZn2teWd7soE5H_qp3DsJiH4nJKyissVVoN4oSrsTu-_PYUx9EUuW83QowcuwK5zZ-68ulZHf0P7gHEy-Po-9YBoWtcCR0hFKbMryLfF1ghJgSb9aHBchfUaNv8ADZLCWf3A_R9lOLA61AU8n0QWC7Qp0_amaH5A8jcIDXzblNyjxcmArAAMAbRTtTR6Ud26kuDBM_af6JErJI2srJPIDDNJClBueeHa4eK-rHbcmE5xzF2rOMahbICL9mnTghVjODwAvyGDmA" />
</div>
<div className="hidden lg:block text-left">
<p className="font-label-md text-label-md text-on-surface font-semibold">Alex Mercer</p>
<p className="font-code-sm text-[11px] text-outline-variant leading-tight">Admin</p>
</div>
</button>
</div>
</header>
 Main Content Canvas 
<main className="md:ml-[280px] md:mt-[64px] min-h-[calc(100vh-64px)] p-margin-mobile md:p-margin-desktop bg-surface-bright pb-2xl">
<div className="max-w-container-max mx-auto space-y-lg">
{/* Page Header & Global Actions */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/20 pb-lg">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">Payment History &amp; Archive</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Review historical transactions and analyze collection trends.</p>
</div>
<div className="flex items-center gap-sm">
<button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant hover:border-primary hover:text-primary text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-2 transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export CSV
                    </button>
<button className="h-10 px-4 bg-surface-container-lowest border border-outline-variant hover:border-primary hover:text-primary text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-2 transition-all shadow-sm">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                        Export PDF
                    </button>
</div>
</div>
{/* Analytics Chart Card (Level 1 Elevation) */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-lowest/50 backdrop-blur-md">
<h3 className="font-title-md text-title-md text-on-surface font-semibold flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">bar_chart</span>
                        Payment Volume (Last 12 Months)
                    </h3>
<div className="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
<span className="flex items-center gap-1"><div className="w-3 h-3 rounded-sm bg-primary"></div> Collected</span>
<span className="flex items-center gap-1 ml-2"><div className="w-3 h-3 rounded-sm bg-surface-variant border border-outline-variant/50"></div> Pending</span>
</div>
</div>
<div className="p-lg h-[320px] w-full flex items-end gap-2 md:gap-4 pb-12 relative">
{/* Y-Axis Labels (Simulated) */}
<div className="absolute left-lg top-lg bottom-12 w-12 flex flex-col justify-between text-code-sm font-code-sm text-outline-variant items-end pr-2 border-r border-outline-variant/20">
<span>$150k</span>
<span>$100k</span>
<span>$50k</span>
<span>$0</span>
</div>
{/* Chart Bars Container */}
<div className="ml-14 flex-1 h-full flex items-end justify-between gap-1 md:gap-3 group">
{/* Horizontal Grid Lines */}
<div className="absolute inset-0 ml-14 mb-12 pointer-events-none flex flex-col justify-between">
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/10"></div>
<div className="w-full h-px bg-outline-variant/20"></div>
</div>
{/* Bar 1 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[10%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[40%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Jan</span>
{/* Tooltip */}
<div className="absolute -top-10 bg-inverse-surface text-on-primary text-label-md px-2 py-1 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20 shadow-md">
                                $65,400 Total
                            </div>
</div>
{/* Bar 2 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[5%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[55%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Feb</span>
</div>
{/* Bar 3 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[15%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[35%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Mar</span>
</div>
{/* Bar 4 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[8%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[60%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Apr</span>
</div>
{/* Bar 5 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[12%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[75%] transition-all shadow-[0_0_10px_rgba(0,93,172,0.3)]"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant font-bold text-primary">May</span>
</div>
{/* Bar 6 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[5%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[45%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Jun</span>
</div>
{/* Bar 7 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[20%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[50%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Jul</span>
</div>
{/* Bar 8 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[10%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[65%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Aug</span>
</div>
{/* Bar 9 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[5%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[85%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Sep</span>
</div>
{/* Bar 10 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[8%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[55%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Oct</span>
</div>
{/* Bar 11 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[15%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[40%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Nov</span>
</div>
{/* Bar 12 */}
<div className="flex-1 flex flex-col justify-end items-center group/bar cursor-pointer h-full relative z-10">
<div className="w-full bg-surface-variant border border-outline-variant/20 rounded-t-sm h-[25%] transition-all"></div>
<div className="w-full bg-primary hover:bg-primary-fixed-variant rounded-t-sm h-[25%] transition-all"></div>
<span className="absolute -bottom-8 text-label-md font-label-md text-on-surface-variant">Dec</span>
</div>
</div>
</div>
</div>
{/* Data Table Card (Archive) */}
<div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
{/* Table Header/Toolbar */}
<div className="p-lg border-b border-outline-variant/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-surface-container-lowest/80 backdrop-blur-md">
<div>
<h3 className="font-title-md text-title-md text-on-surface font-semibold">Historical Archive</h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Records older than 90 days. Fully searchable.</p>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-[18px]">filter_list</span>
<input className="w-full bg-surface border border-outline-variant/50 rounded-lg pl-10 pr-4 py-2 text-body-md font-body-md text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-all h-10" placeholder="Filter by client or ID..." type="text" />
</div>
</div>
</div>
{/* Table Content */}
<div className="overflow-x-auto custom-scrollbar w-full">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container/50 border-b border-outline-variant/30">
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium whitespace-nowrap">Date Paid</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium whitespace-nowrap">Reference ID</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium whitespace-nowrap">Client Entity</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium whitespace-nowrap">Payment Method</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium text-right whitespace-nowrap">Amount</th>
<th className="py-3 px-lg font-label-md text-label-md text-on-surface-variant font-medium whitespace-nowrap">Status</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface">
{/* Row 1 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-4 px-lg text-on-surface-variant whitespace-nowrap">Oct 12, 2022</td>
<td className="py-4 px-lg font-code-sm text-code-sm text-outline group-hover:text-primary transition-colors">INV-2022-8493</td>
<td className="py-4 px-lg font-medium">Acme Corp Logistics</td>
<td className="py-4 px-lg text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">account_balance</span> Wire Transfer
                                </td>
<td className="py-4 px-lg text-right font-medium text-on-surface">$24,500.00</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-label-md font-semibold bg-surface-variant text-on-surface-variant border border-outline-variant/20">Archived</span>
</td>
</tr>
{/* Row 2 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-4 px-lg text-on-surface-variant whitespace-nowrap">Sep 28, 2022</td>
<td className="py-4 px-lg font-code-sm text-code-sm text-outline group-hover:text-primary transition-colors">INV-2022-8410</td>
<td className="py-4 px-lg font-medium">Globex Manufacturing</td>
<td className="py-4 px-lg text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">credit_card</span> Corporate Card
                                </td>
<td className="py-4 px-lg text-right font-medium text-on-surface">$8,250.00</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-label-md font-semibold bg-surface-variant text-on-surface-variant border border-outline-variant/20">Archived</span>
</td>
</tr>
{/* Row 3 */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-4 px-lg text-on-surface-variant whitespace-nowrap">Sep 15, 2022</td>
<td className="py-4 px-lg font-code-sm text-code-sm text-outline group-hover:text-primary transition-colors">INV-2022-8355</td>
<td className="py-4 px-lg font-medium">Stark Industries</td>
<td className="py-4 px-lg text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">account_balance</span> Wire Transfer
                                </td>
<td className="py-4 px-lg text-right font-medium text-on-surface">$145,000.00</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-label-md font-semibold bg-surface-variant text-on-surface-variant border border-outline-variant/20">Archived</span>
</td>
</tr>
{/* Row 4 (Warning state simulation for visual variety) */}
<tr className="border-b border-outline-variant/10 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-4 px-lg text-on-surface-variant whitespace-nowrap">Aug 30, 2022</td>
<td className="py-4 px-lg font-code-sm text-code-sm text-outline group-hover:text-primary transition-colors">INV-2022-8290</td>
<td className="py-4 px-lg font-medium">Wayne Enterprises</td>
<td className="py-4 px-lg text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">receipt_long</span> Cheque
                                </td>
<td className="py-4 px-lg text-right font-medium text-on-surface">$12,400.00</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-label-md font-semibold bg-tertiary-container/20 text-tertiary border border-tertiary-container/30">Disputed - Closed</span>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-4 px-lg text-on-surface-variant whitespace-nowrap">Aug 12, 2022</td>
<td className="py-4 px-lg font-code-sm text-code-sm text-outline group-hover:text-primary transition-colors">INV-2022-8105</td>
<td className="py-4 px-lg font-medium">Initech Corp</td>
<td className="py-4 px-lg text-on-surface-variant flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-outline">account_balance</span> ACH Direct
                                </td>
<td className="py-4 px-lg text-right font-medium text-on-surface">$4,500.00</td>
<td className="py-4 px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-label-md font-semibold bg-surface-variant text-on-surface-variant border border-outline-variant/20">Archived</span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="px-lg py-md border-t border-outline-variant/20 bg-surface-container-lowest flex justify-between items-center text-label-md font-label-md text-on-surface-variant">
<span>Showing 1-5 of 1,248 archived records</span>
<div className="flex items-center gap-1">
<button className="w-8 h-8 rounded hover:bg-surface-container flex items-center justify-center transition-colors disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary-container text-on-primary-container font-medium flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface transition-colors flex items-center justify-center">2</button>
<button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface transition-colors flex items-center justify-center">3</button>
<span className="px-1">...</span>
<button className="w-8 h-8 rounded hover:bg-surface-container text-on-surface transition-colors flex items-center justify-center">250</button>
<button className="w-8 h-8 rounded hover:bg-surface-container flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default PaymentHistoryAnalytics;
