import React from 'react';
import '../style/Dashboard.css';

const PurchaseOrderManagement: React.FC = () => {
  return (
    <>
      
 SideNavBar (Shared Component) 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-xl flex flex-col p-md gap-sm z-50 text-primary-fixed hidden md:flex transition-transform duration-300">
{/* Header / Logo */}
<div className="px-md py-lg mb-4 flex flex-col gap-1">
<h1 className="font-title-md text-title-md font-black text-surface-lowest">Procurement</h1>
<span className="font-label-md text-label-md opacity-70">Enterprise ERP</span>
</div>
{/* CTA */}
<button className="mx-md mb-lg bg-primary hover:opacity-90 text-on-primary py-2 px-4 rounded-lg font-label-md text-label-md shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
            New Request
        </button>
{/* Navigation Links */}
<nav className="flex-1 flex flex-col gap-1 px-sm overflow-y-auto">
{/* Active Tab */}
<a className="flex items-center gap-3 px-3 py-2 bg-primary-container text-on-primary-container rounded-lg font-title-md text-title-md shadow-sm" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>shopping_cart</span>
                Purchase Orders
            </a>
{/* Inactive Tabs */}
<a className="flex items-center gap-3 px-3 py-2 text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">add_shopping_cart</span>
                Create PO
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">receipt_long</span>
                Purchase Details
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md hover:bg-surface-variant/20 transition-all duration-200 active:scale-[0.98]" href="#">
<span className="material-symbols-outlined">history</span>
                Purchase History
            </a>
</nav>
{/* Footer Links */}
<div className="mt-auto pt-4 border-t border-surface-variant/20 flex flex-col gap-1 px-sm">
<a className="flex items-center gap-3 px-3 py-2 text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined">help_outline</span>
                Help Center
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-surface-variant hover:bg-surface-variant/10 rounded-lg font-body-md text-body-md transition-colors" href="#">
<span className="material-symbols-outlined">logout</span>
                Sign Out
            </a>
</div>
</aside>
 Main Content Area 
<main className="flex-1 flex flex-col w-full md:pl-[280px] h-screen overflow-y-auto overflow-x-hidden relative">
{/* Top App Bar (Mobile Only / Simplified) */}
<header className="md:hidden flex items-center justify-between p-margin-mobile bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30 sticky top-0 z-40">
<h1 className="font-title-md text-title-md text-on-surface">Purchase Orders</h1>
<button className="p-2 text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
</header>
<div className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full flex flex-col gap-lg">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 md:mt-0">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Purchase Orders</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage and track all organizational procurement requests.</p>
</div>
<div className="flex items-center gap-3">
<button className="h-10 px-4 rounded-lg border border-outline-variant text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-2 bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export
                    </button>
<button className="h-10 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-opacity shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New PO
                    </button>
</div>
</div>
{/* Filters & Actions Bar (Glassmorphic Card) */}
<div className="bg-surface-container-lowest/90 backdrop-blur-md rounded-xl border border-outline-variant/30 shadow-sm p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
{/* Search */}
<div className="relative w-full md:w-96">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-10 pl-10 pr-4 rounded-lg border border-outline-variant bg-surface text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all font-body-md text-body-md outline-none placeholder:text-outline" placeholder="Search PO #, Vendor, or Item..." type="text" />
</div>
{/* Filters */}
<div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
{/* Date Range */}
<div className="relative flex-shrink-0">
<button className="h-10 px-4 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-md text-body-md hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline">calendar_today</span>
                            Last 30 Days
                            <span className="material-symbols-outlined text-[18px] text-outline ml-1">expand_more</span>
</button>
</div>
{/* Vendor Filter */}
<div className="relative flex-shrink-0">
<button className="h-10 px-4 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-md text-body-md hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline">domain</span>
                            All Vendors
                            <span className="material-symbols-outlined text-[18px] text-outline ml-1">expand_more</span>
</button>
</div>
{/* Status Filter */}
<div className="relative flex-shrink-0">
<button className="h-10 px-4 rounded-lg border border-outline-variant bg-surface text-on-surface font-body-md text-body-md hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-outline">filter_list</span>
                            Status
                            <span className="material-symbols-outlined text-[18px] text-outline ml-1">expand_more</span>
</button>
</div>
</div>
</div>
{/* Data Table Card */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm flex-1 overflow-hidden flex flex-col">
<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant/30 sticky top-0 z-10">
<tr>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap">PO Number</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap">Vendor</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap">Issue Date</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap">Delivery Date</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap text-right">Total Amount</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap">Status</th>
<th className="px-6 py-3 font-label-md text-label-md text-on-surface-variant uppercase tracking-wider font-semibold whitespace-nowrap text-center">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 bg-surface-container-lowest">
{/* Row 1: Pending */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap font-medium">PO-2023-1042</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" data-alt="A macro shot of a sleek, modern corporate office building exterior with glass panels reflecting a clear blue sky. The lighting is bright and high-key, emphasizing a clean, professional, and minimalist light-mode aesthetic. The color palette features crisp whites, deep blues, and subtle silver metallic accents. The mood is corporate, efficient, and technologically advanced." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwv89vUKZ4DZZrYQSE73EzU8ALehQqwUXf9rk9NFAZF1gP9JPRFHliHYQ1IcDPCsrG1M9j7S-0R29lMMu7kFjQrOEKl684VFACO9jn63Y2JsJJINT7IzEDaB7aP_G3XBZ4BPi3rDKkh7MoXJV3fi3j18WGJyetZjQmdQvO3icxgXuqV3FJ3YgmneMszpc2HIbd6NkzYHw3TA4lWHG_7ciCFqzhxcLCkGFCRVMNSA_V4KhJQTfDDw5OpcW_Tp-NOYsizRbF3MV7lio" />
<span className="font-body-md text-body-md text-on-surface font-medium">GlobalTech Supplies</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 12, 2023</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 26, 2023</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap text-right font-medium">$12,450.00</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
                                        Pending
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 2: Approved */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap font-medium">PO-2023-1041</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-title-md text-title-md border border-primary/20">
                                            N
                                        </div>
<span className="font-body-md text-body-md text-on-surface font-medium">Nexus Industries</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 10, 2023</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Nov 01, 2023</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap text-right font-medium">$8,200.50</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-md text-label-md bg-primary-fixed text-on-primary-fixed border border-primary-fixed-dim">
                                        Approved
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 3: Shipped */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap font-medium">PO-2023-1038</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" data-alt="A close-up view of neatly stacked, unmarked cardboard shipping boxes in a brightly lit, sterile warehouse environment. The lighting is artificial but high-key, creating a clean and minimalist aesthetic. The color palette focuses on neutral browns, bright whites, and soft grays, punctuated by a subtle blue hue from the warehouse racking. The mood is highly organized, logistical, and efficient." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx2WGX21yBCtFF1rlmEjS7GAO9wVYrhJ443hXafLkk3JifG9o1_AJfi66ZBjlQ_bk-clC5Da45Q5FgoGswEVAZ3BUITVTNaZYFnIU72hKx37Zj91w3l_IzttTPUSFLQDjIJGvlY5Tev0E6XvhwKdf2jH9oVuHIvcqpgI5eGYh1STYTp2VHS9VsPSTdIT0eapAR3ckdXqmrBb_WlkmyK0sz_L2-SrUEzvvDJmIwIkku9CJ_og2sT0AxVPA-_V8KMqnfiKR1uF9w38A" />
<span className="font-body-md text-body-md text-on-surface font-medium">Apex Logistics</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 05, 2023</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 15, 2023</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap text-right font-medium">$45,000.00</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-md text-label-md bg-secondary-fixed text-on-secondary-fixed border border-secondary-fixed-dim">
                                        Shipped
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 4: Received */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap font-medium">PO-2023-1025</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-title-md text-title-md border border-tertiary/20">
                                            Q
                                        </div>
<span className="font-body-md text-body-md text-on-surface font-medium">Quantum Materials</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Sep 28, 2023</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 02, 2023</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap text-right font-medium">$3,150.75</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-md text-label-md bg-inverse-surface text-inverse-on-surface">
                                        Received
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
{/* Row 5: Pending */}
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap font-medium">PO-2023-1045</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover border border-outline-variant/30" data-alt="An abstract detail shot of a sophisticated computer server rack with gently glowing blue and white LED lights. The setting is a dark, clean server room, but the lighting emphasizes a high-tech, precise aesthetic. The color palette is dominated by deep charcoal, sleek silver, and neon blue. The mood is silent, powerful, and deeply technical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY12bsMC01_yCZI6WneJxqwJa9qhQnMq1ZpPA_iA8DLe8v7hL5LyCxQbszOPp8nSeFBFz3IozNwmIp5PSBCnmsdHq1BqFnHDfAvQ957QlcI-FEwi_YFagicJvIJo3FNzCkjQmvPAt31USnyafQzkn2RX_rYOKaTliJGbt5zMB_uVO1ELnOqnm-XRAUyUtyJbNe3ockmqpXaZh3x_oFaKBGkA1o_j6OKVKntA5ky-q867QBCEgEvrSePzNhz5SVAAP2jlv8aA_E3BI" />
<span className="font-body-md text-body-md text-on-surface font-medium">CyberDyne Systems</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 14, 2023</td>
<td className="px-6 py-4 font-body-md text-body-md text-on-surface-variant whitespace-nowrap">Oct 20, 2023</td>
<td className="px-6 py-4 font-code-sm text-code-sm text-on-surface whitespace-nowrap text-right font-medium">$56,800.00</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-1 rounded-full font-label-md text-label-md bg-surface-variant text-on-surface-variant border border-outline-variant/30">
                                        Pending
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-center">
<button className="text-outline hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="border-t border-outline-variant/30 p-4 bg-surface-container-lowest flex items-center justify-between text-on-surface-variant font-label-md text-label-md">
<span>Showing 1 to 5 of 42 results</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded-md hover:bg-surface-container disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="w-8 h-8 rounded-md bg-primary text-on-primary flex items-center justify-center font-medium">1</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container flex items-center justify-center font-medium">2</button>
<button className="w-8 h-8 rounded-md hover:bg-surface-container flex items-center justify-center font-medium">3</button>
<span className="px-1">...</span>
<button className="w-8 h-8 rounded-md hover:bg-surface-container flex items-center justify-center font-medium">9</button>
<button className="p-1 rounded-md hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default PurchaseOrderManagement;
