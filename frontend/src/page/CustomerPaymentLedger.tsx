import React from 'react';
import '../style/Dashboard.css';

const CustomerPaymentLedger: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-full py-6 fixed left-0 top-0 h-screen w-[280px] bg-inverse-surface shadow-xl z-50">
<div className="px-6 mb-8 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-on-primary font-bold text-xl">C</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-surface-lowest leading-tight">CommSync</h1>
<p className="text-outline font-label-md text-label-md">Enterprise ERP</p>
</div>
</div>
<div className="px-4 mb-6">
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary font-body-md text-body-md py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors scale-95 active:transition-transform">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>add</span>
                New Record
            </button>
</div>
<ul className="flex-1 overflow-y-auto px-2 space-y-1 font-Inter text-body-md font-body-md">
<li>
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>dashboard</span>
                    Dashboard
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>contacts</span>
                    CRM
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>monetization_on</span>
                    Sales
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>inventory_2</span>
                    Inventory
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-on-primary bg-primary rounded-lg mx-2 my-1 px-4 py-3 transition-colors duration-200 shadow-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>account_balance_wallet</span>
                    Finance
                </a>
</li>
<li>
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>assessment</span>
                    Reports
                </a>
</li>
</ul>
<div className="px-4 mt-auto pt-4 border-t border-outline/20">
<a className="flex items-center gap-3 text-outline-variant hover:text-on-primary-fixed-variant mx-2 my-1 px-4 py-3 rounded-lg hover:bg-primary/10 transition-colors duration-200 font-Inter text-body-md font-body-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>settings</span>
                Settings
            </a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-hidden bg-surface relative">
{/* TopAppBar */}
<header className="flex justify-between items-center px-gutter h-16 w-full fixed top-0 right-0 md:left-[280px] bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm z-40">
<div className="flex items-center w-full max-w-md focus-within:ring-2 focus-within:ring-primary/50 rounded-lg overflow-hidden transition-all bg-surface-container-low border border-outline-variant/50">
<span className="material-symbols-outlined text-on-surface-variant pl-3 py-2" style={{"fontVariationSettings": "'FILL' 0"}}>search</span>
<input className="w-full bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-outline py-2 px-3" placeholder="Search payments by ID or Customer..." type="text" />
</div>
<div className="flex items-center gap-4 ml-auto">
<button className="text-on-surface-variant hover:bg-surface-container-high transition-all p-2 rounded-full relative">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-high transition-all p-2 rounded-full">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>help</span>
</button>
<div className="h-8 w-px bg-outline-variant/50 mx-2"></div>
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/30 cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a corporate user, clean lighting, light mode UI aesthetic, subtle corporate background, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKSrgI_KksOB3hme3776Dh3WeNiT6W2Om7oQSOq59a0YQi15V3n72mXWgdw1CR1kw_ixIFhPVz86Mz05AJ0ceDRtuGC0DpZq67T-WdlIxF3-OaQ0WWS2eSIvVLCfqPtsWKTOVTQSr9_E89AoOKG2jmWEzXnWXLrr6T9CxSW8fNzBp8vpM6B1Gf3QsS1LW2toAA-2d27xob8KPIy_GIVq0qd6N0ZTEXxWFh90OiCkR10whvDM_aIgQ1m0KIqPracqz2VgMnPX9MyIg" />
</div>
</div>
</header>
{/* Page Content */}
<div className="flex-1 overflow-y-auto mt-16 p-margin-mobile md:p-margin-desktop lg:p-gutter pt-8">
<div className="max-w-container-max mx-auto">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-1">Payments</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Central ledger for all customer transactions.</p>
</div>
<button className="bg-primary-container hover:bg-primary-container/90 text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 transition-all ambient-shadow-sm hover:ambient-shadow-md">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>add_card</span>
                        Record Payment
                    </button>
</div>
{/* KPI Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="font-body-md text-body-md text-on-surface-variant">Total Collected (MTD)</h3>
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>payments</span>
</div>
</div>
<p className="font-headline-lg text-headline-lg text-on-surface">$1.24M</p>
<p className="font-label-md text-label-md text-primary flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 0"}}>trending_up</span>
                            +12.5% from last month
                        </p>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="font-body-md text-body-md text-on-surface-variant">Pending Settlements</h3>
<div className="p-2 bg-surface-tint/10 rounded-lg text-surface-tint">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>pending_actions</span>
</div>
</div>
<p className="font-headline-lg text-headline-lg text-on-surface">$84,500</p>
<p className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1 mt-2">
                            24 transactions processing
                        </p>
</div>
<div className="bg-surface-container-lowest rounded-xl p-6 ambient-shadow-sm border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<h3 className="font-body-md text-body-md text-on-surface-variant">Overdue Invoices</h3>
<div className="p-2 bg-error/10 rounded-lg text-error">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>warning</span>
</div>
</div>
<p className="font-headline-lg text-headline-lg text-on-surface">$32,100</p>
<p className="font-label-md text-label-md text-error flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 0"}}>error</span>
                            Requires immediate action
                        </p>
</div>
</div>
{/* Main Data Section */}
<div className="glass-panel rounded-xl ambient-shadow-md overflow-hidden flex flex-col">
{/* Toolbar & Filters */}
<div className="p-4 border-b border-outline-variant/30 bg-surface-container-lowest/50 flex flex-wrap gap-4 items-center justify-between">
<div className="flex items-center gap-3 flex-wrap">
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 rounded-lg text-body-md font-body-md text-on-surface-variant hover:bg-surface-container transition-colors bg-surface-container-lowest">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>calendar_month</span>
                                Last 30 Days
                                <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>arrow_drop_down</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 rounded-lg text-body-md font-body-md text-on-surface-variant hover:bg-surface-container transition-colors bg-surface-container-lowest">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>credit_card</span>
                                Payment Method
                                <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>arrow_drop_down</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 border border-outline-variant/50 rounded-lg text-body-md font-body-md text-on-surface-variant hover:bg-surface-container transition-colors bg-surface-container-lowest">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>filter_list</span>
                                Status
                                <span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": "'FILL' 0"}}>arrow_drop_down</span>
</button>
</div>
<div className="flex gap-2">
<button className="p-1.5 text-outline hover:text-on-surface bg-surface-container-lowest border border-outline-variant/30 rounded-md transition-colors" title="Export">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>download</span>
</button>
<button className="p-1.5 text-outline hover:text-on-surface bg-surface-container-lowest border border-outline-variant/30 rounded-md transition-colors" title="View Options">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>view_column</span>
</button>
</div>
</div>
{/* Data Table */}
<div className="overflow-x-auto bg-surface-container-lowest">
<table className="w-full text-left whitespace-nowrap">
<thead className="bg-surface-container/30 text-label-md font-label-md text-on-surface-variant uppercase tracking-wider">
<tr>
<th className="px-6 py-4 font-medium"><div className="flex items-center gap-2 cursor-pointer hover:text-on-surface">Payment ID <span className="material-symbols-outlined text-[14px]" style={{"fontVariationSettings": "'FILL' 0"}}>arrow_downward</span></div></th>
<th className="px-6 py-4 font-medium">Customer</th>
<th className="px-6 py-4 font-medium">Date</th>
<th className="px-6 py-4 font-medium">Amount</th>
<th className="px-6 py-4 font-medium">Method</th>
<th className="px-6 py-4 font-medium">Status</th>
<th className="px-6 py-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md text-on-surface">
{/* Row 1 */}
<tr>
<td className="px-6 py-4 font-code-sm text-outline">#PAY-9824</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/30">
<img alt="Acme Corp" className="w-full h-full object-cover" data-alt="Corporate logo or avatar placeholder for a tech company, light clean background, subtle blue hues, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg8zbaHP3z6EvSbvYShqEBDToMy4H_FWKhq60n2mqEs-gZD5E8PFoCFQ4zmgT0bIz17OjejydOylgQP5aE23cO48iHFdPTptuQCfxSRXDaNHj798UVLJ6qK3Ew99zKDVCkpJxZJgl32lcgqmjabvmzLsC7pRhM6rzERX4h3KrAydQygpKLIDC3H8qo8O-DZhKPMSAwa2V9Rhp4eENJKXE6SxY43-P9xS2iKHzP4H53DMPN-qSOpsSgWaJ4Z1ob_VPbj9RvmWEeFwg" />
</div>
<span className="font-medium">Acme Corp</span>
</div>
</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 24, 2023 <span className="text-outline text-sm ml-1">10:42 AM</span></td>
<td className="px-6 py-4 font-medium">$12,450.00</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>account_balance</span>
                                            Wire Transfer
                                        </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium status-completed">Completed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span></button>
</td>
</tr>
{/* Row 2 */}
<tr>
<td className="px-6 py-4 font-code-sm text-outline">#PAY-9825</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/30">
<img alt="Globex Inc" className="w-full h-full object-cover" data-alt="Corporate logo or avatar placeholder for a manufacturing company, light clean background, subtle orange hues, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcMAFv5Q-eCvyHDqt_s370qjlvAmbsC8RnWjwZ6NMgv-QV-bk_qZfz6EBKflNd43zDJ4OVaYsw9c3rMi0UjSd6Nb5RZ2m9Fte6gGaBRgHjQdtpCM31l-AMLHJymklssO-ogeLXhOSUjLKeo6h2YIVVQclPEdpDG-aVzBNiwrtQ5C_9tAXNMa9EptjXDgSBuJIQyNvk8_H2pkJ2fZ_0essJ9qvDtykCRi3dyphiWw7vdMMzOpFxZdLg3e1zjblsL8EaSTM8E8Ak2vA" />
</div>
<span className="font-medium">Globex Inc</span>
</div>
</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 24, 2023 <span className="text-outline text-sm ml-1">09:15 AM</span></td>
<td className="px-6 py-4 font-medium">$3,200.50</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>credit_card</span>
                                            Credit Card
                                        </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium status-processing">Processing</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span></button>
</td>
</tr>
{/* Row 3 */}
<tr>
<td className="px-6 py-4 font-code-sm text-outline">#PAY-9826</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold border border-outline-variant/30">
                                                S
                                            </div>
<span className="font-medium">Stark Industries</span>
</div>
</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 23, 2023 <span className="text-outline text-sm ml-1">16:30 PM</span></td>
<td className="px-6 py-4 font-medium">$45,000.00</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>account_balance</span>
                                            ACH
                                        </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium status-completed">Completed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span></button>
</td>
</tr>
{/* Row 4 */}
<tr>
<td className="px-6 py-4 font-code-sm text-outline">#PAY-9827</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-primary font-bold border border-outline-variant/30">
                                                W
                                            </div>
<span className="font-medium">Wayne Enterprises</span>
</div>
</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 22, 2023 <span className="text-outline text-sm ml-1">11:05 AM</span></td>
<td className="px-6 py-4 font-medium">$8,900.00</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>credit_card</span>
                                            Credit Card
                                        </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium status-failed">Failed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span></button>
</td>
</tr>
{/* Row 5 */}
<tr>
<td className="px-6 py-4 font-code-sm text-outline">#PAY-9828</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden border border-outline-variant/30">
<img alt="Cyberdyne" className="w-full h-full object-cover" data-alt="Corporate logo or avatar placeholder for a robotics company, light clean background, subtle silver hues, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkEnuIVr8o1ew226lN2iB5soF0HuLAjgkObawKZZeQpPvk_NMIG_dMx2Xnjm9JF8BvvsSzvrErkLkr9ll9us08HPClRthzCghb3f4Lx6bvbQbhE5_zK79WgfFrV-6f7ibfnMSrNKXJpb1rr1ERSEtUSrfS3P0yOmBdLzeCSK7hwG0JuXXC2LuDc5wT_8UXne6ZNNvVxrhpqwXJ0mET8xUjRg5kcAm2rwK28Z1FQ4YGru9XuaF40WmUSqehyGPcWMNBtjTqUkjxrXk" />
</div>
<span className="font-medium">Cyberdyne Sys</span>
</div>
</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 21, 2023 <span className="text-outline text-sm ml-1">14:20 PM</span></td>
<td className="px-6 py-4 font-medium">$150,000.00</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 0"}}>account_balance</span>
                                            Wire Transfer
                                        </div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[12px] font-medium status-completed">Completed</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-outline hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination */}
<div className="p-4 border-t border-outline-variant/30 bg-surface-container-lowest flex items-center justify-between">
<span className="text-body-md font-body-md text-on-surface-variant">Showing 1 to 5 of 248 entries</span>
<div className="flex items-center gap-1">
<button className="p-1.5 rounded-md border border-outline-variant/30 text-outline-variant cursor-not-allowed">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary/10 text-primary font-medium text-body-md">1</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface font-medium text-body-md transition-colors">2</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface font-medium text-body-md transition-colors">3</button>
<span className="px-1 text-outline">...</span>
<button className="w-8 h-8 rounded-md hover:bg-surface-container text-on-surface font-medium text-body-md transition-colors">50</button>
<button className="p-1.5 rounded-md border border-outline-variant/30 text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 0"}}>chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerPaymentLedger;
