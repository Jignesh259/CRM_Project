import React from 'react';
import '../style/Dashboard.css';

const ProductDetailedOverview: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-screen w-[280px] fixed left-0 top-0 bg-inverse-surface shadow-md py-lg z-50">
<div className="px-lg mb-8">
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-body-md text-body-md text-primary-fixed-dim opacity-80 mt-1">Enterprise Suite</p>
<button className="mt-6 w-full bg-primary-container text-on-primary-container rounded font-label-md text-label-md py-2 flex items-center justify-center gap-2 hover:bg-primary transition-colors">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>add</span> New Entry
            </button>
</div>
<div className="flex-1 overflow-y-auto space-y-1 px-4">
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">group</span> CRM
            </a>
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">payments</span> Sales
            </a>
<a className="flex items-center gap-3 py-3 pl-4 font-body-md text-body-md text-primary-fixed font-bold border-l-4 border-primary-fixed bg-on-surface-variant rounded-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span> Inventory
            </a>
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">account_balance</span> Finance
            </a>
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">assessment</span> Reports
            </a>
<a className="flex items-center gap-3 py-3 pl-5 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 rounded-md" href="#">
<span className="material-symbols-outlined">settings</span> Settings
            </a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 md:ml-[280px] w-full md:w-[calc(100%-280px)] flex flex-col h-screen overflow-hidden">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm flex justify-between items-center w-full h-16 px-margin-desktop z-40 sticky top-0">
<div className="flex items-center gap-4">
<h2 className="font-title-md text-title-md text-on-surface md:hidden">CommSync</h2>
<div className="hidden md:flex items-center relative focus-within:ring-2 focus-within:ring-primary rounded-md">
<span className="material-symbols-outlined absolute left-3 text-on-surface-variant">search</span>
<input className="bg-surface-container-low border border-outline-variant rounded-md pl-10 pr-4 py-2 text-body-md font-body-md w-64 focus:outline-none focus:border-primary" placeholder="Search inventory..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant" data-alt="A small circular avatar placeholder image showing a generic user portrait, suitable for a professional software interface in a light mode setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4b_ACJN4C2IAzIySCnytyIjohNmfnydUMJDW-_SmnRgKSXHBqG0Mp9RYOIcwuWwdH4xZTMRC47fptrf3XFML1nLTB463lc3jBQTLRf570hV00IgdGcb8jNpbSJDVB54EvksnB98eJIr9t6Nl-lCQ4wuRMoXYZHbVbwaKXkj6GmakWAMQP1nCMfeGlzwHXPvYia27GTIlBbbJ4_mEYO6ZWpbmSEe-z-N-_CF4liCaL8gZJvMsv25A2CMbRtu4zoAqf986mjU9rtw0" />
</div>
</header>
{/* Page Content */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
{/* Breadcrumb & Header Actions */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-lg gap-4">
<nav className="flex items-center space-x-2 text-body-md font-body-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Inventory</a>
<span className="material-symbols-outlined" style={{"fontSize": "16px"}}>chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Networking Gear</a>
<span className="material-symbols-outlined" style={{"fontSize": "16px"}}>chevron_right</span>
<span className="text-on-surface font-medium">CS-RTR-9000</span>
</nav>
<div className="flex gap-3">
<button className="px-4 py-2 border border-outline text-on-surface rounded font-label-md text-label-md hover:bg-surface-container-low transition-colors">Edit Product</button>
<button className="px-4 py-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm">Restock Request</button>
</div>
</div>
{/* Hero Section (Bento Grid Style) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-xl">
{/* Product Image & Primary Info */}
<div className="col-span-1 lg:col-span-8 glass-panel rounded-xl p-lg ambient-shadow flex flex-col md:flex-row gap-lg">
<div className="w-full md:w-1/3 bg-surface-container rounded-lg flex items-center justify-center p-4 aspect-square overflow-hidden relative group">
<img alt="Enterprise Router" className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A sleek, high-end enterprise network router sitting on a clean, minimal surface. The lighting is bright and studio-quality, emphasizing the metallic finish and professional build of the hardware. The aesthetic perfectly matches a modern light-mode tech environment with a focus on pristine whites and subtle shadows." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUmTKL8C728Ky103hKeR_gzw7juI0cNH8R7PCVaANrGKu1Kse6nalh2WBnbLLHPuOHcVnJoyyXByyLaBdDmtrsUXizqlEEvdPqYnjueYOfKEUnIa_yragu78_xYE2fxVFEi6988mEVZvupyboBz40bNDLHef4AL13Xw1OSIP4LjeMrTjEr9luP31WfsHD834vTx-GC_XRd7gcdeFbVF5TQ222wgazpht_zF67SsLnKhfVURkECuaDdK8Gyj2ZYU0Peo0GlZjSl-tA" />
</div>
<div className="flex-1 flex flex-col justify-between py-2">
<div>
<div className="flex justify-between items-start mb-2">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Nexus Enterprise Router 9000</h1>
<span className="bg-surface-container-low border border-primary-fixed text-primary font-label-md text-label-md px-3 py-1 rounded-full flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span> In Stock
                                </span>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-4">High-performance core routing platform designed for scalable data center networks and cloud integrations.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div>
<span className="font-label-md text-label-md text-outline block mb-1">SKU</span>
<span className="font-code-sm text-code-sm text-on-surface bg-surface-container px-2 py-1 rounded">CS-RTR-9000-V2</span>
</div>
<div>
<span className="font-label-md text-label-md text-outline block mb-1">Category</span>
<span className="font-body-md text-body-md text-on-surface">Networking Core</span>
</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-low rounded-md font-label-md text-label-md text-on-surface-variant border border-outline-variant">100GbE Ports</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md font-label-md text-label-md text-on-surface-variant border border-outline-variant">Redundant Power</span>
<span className="px-3 py-1 bg-surface-container-low rounded-md font-label-md text-label-md text-on-surface-variant border border-outline-variant">Rack Mountable</span>
</div>
</div>
</div>
{/* Quick Inventory Stats */}
<div className="col-span-1 lg:col-span-4 flex flex-col gap-gutter">
<div className="glass-panel rounded-xl p-lg ambient-shadow flex-1 hover-lift">
<h3 className="font-title-md text-title-md text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">inventory</span> Inventory Status
                        </h3>
<div className="space-y-4">
<div className="flex justify-between items-end border-b border-surface-variant pb-3">
<div>
<span className="font-label-md text-label-md text-outline block">Available Stock</span>
<span className="font-headline-md text-headline-md text-primary">142</span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Units</span>
</div>
<div className="flex justify-between items-end border-b border-surface-variant pb-3">
<div>
<span className="font-label-md text-label-md text-outline block">Committed (Orders)</span>
<span className="font-title-md text-title-md text-on-surface">28</span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Units</span>
</div>
<div className="flex justify-between items-end">
<div>
<span className="font-label-md text-label-md text-outline block">Total Physical Stock</span>
<span className="font-title-md text-title-md text-on-surface">170</span>
</div>
<span className="font-body-md text-body-md text-on-surface-variant">Units</span>
</div>
</div>
<div className="mt-6">
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width": "83%"}}></div>
</div>
<div className="flex justify-between mt-2">
<span className="font-label-md text-label-md text-outline">Reorder Level: 50</span>
<span className="font-label-md text-label-md text-primary font-medium">Healthy</span>
</div>
</div>
</div>
</div>
</div>
{/* Details Section (Pricing, Specs, Vendor) */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter mb-xl">
{/* Pricing & Economics */}
<div className="glass-panel rounded-xl p-lg ambient-shadow hover-lift">
<h3 className="font-title-md text-title-md text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">payments</span> Economics
                    </h3>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded border border-outline-variant">
<span className="font-body-md text-body-md text-on-surface-variant">Unit Cost</span>
<span className="font-title-md text-title-md text-on-surface">$1,240.00</span>
</div>
<div className="flex justify-between items-center p-3 bg-surface-container-lowest rounded border border-outline-variant">
<span className="font-body-md text-body-md text-on-surface-variant">MSRP</span>
<span className="font-title-md text-title-md text-on-surface">$1,899.00</span>
</div>
<div className="flex justify-between items-center p-3 bg-primary-fixed/30 rounded border border-primary-fixed-dim">
<span className="font-body-md text-body-md text-on-primary-fixed-variant font-medium">Est. Margin</span>
<span className="font-title-md text-title-md text-primary">34.7%</span>
</div>
</div>
</div>
{/* Technical Specs */}
<div className="glass-panel rounded-xl p-lg ambient-shadow hover-lift">
<h3 className="font-title-md text-title-md text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary">settings_applications</span> Specifications
                    </h3>
<ul className="space-y-3">
<li className="flex justify-between border-b border-surface-variant pb-2">
<span className="font-body-md text-body-md text-outline">Form Factor</span>
<span className="font-body-md text-body-md text-on-surface font-medium">1U Rackmount</span>
</li>
<li className="flex justify-between border-b border-surface-variant pb-2">
<span className="font-body-md text-body-md text-outline">Weight</span>
<span className="font-body-md text-body-md text-on-surface font-medium">4.2 kg</span>
</li>
<li className="flex justify-between border-b border-surface-variant pb-2">
<span className="font-body-md text-body-md text-outline">Power Supply</span>
<span className="font-body-md text-body-md text-on-surface font-medium">Dual AC 500W</span>
</li>
<li className="flex justify-between">
<span className="font-body-md text-body-md text-outline">Warranty</span>
<span className="font-body-md text-body-md text-on-surface font-medium">3 Yrs Next Business Day</span>
</li>
</ul>
</div>
{/* Vendor Info */}
<div className="glass-panel rounded-xl p-lg ambient-shadow hover-lift">
<h3 className="font-title-md text-title-md text-on-surface mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant">local_shipping</span> Supplier Details
                    </h3>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center border border-outline-variant">
<span className="font-title-md text-title-md text-primary">NT</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface">NetTech Distributors</h4>
<a className="font-body-md text-body-md text-primary hover:underline" href="#">View Vendor Profile</a>
</div>
</div>
<div className="space-y-2 mt-4">
<div className="flex justify-between">
<span className="font-label-md text-label-md text-outline">Lead Time</span>
<span className="font-body-md text-body-md text-on-surface">14-21 Days</span>
</div>
<div className="flex justify-between">
<span className="font-label-md text-label-md text-outline">MOQ</span>
<span className="font-body-md text-body-md text-on-surface">10 Units</span>
</div>
<div className="flex justify-between">
<span className="font-label-md text-label-md text-outline">Last Ordered</span>
<span className="font-body-md text-body-md text-on-surface">Oct 12, 2023</span>
</div>
</div>
</div>
</div>
{/* Recent Activity Timeline */}
<div className="glass-panel rounded-xl p-lg ambient-shadow">
<h3 className="font-title-md text-title-md text-on-surface mb-6">Recent Activity</h3>
<div className="relative pl-6 border-l-2 border-surface-variant space-y-8">
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
<div>
<p className="font-body-md text-body-md text-on-surface"><span className="font-medium">Stock Allocated:</span> 12 units committed to Order #ORD-8821</p>
<p className="font-label-md text-label-md text-outline mt-1">Initiated by System Auto-Allocation</p>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Today, 10:45 AM</span>
</div>
</div>
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest border-2 border-primary"></div>
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
<div>
<p className="font-body-md text-body-md text-on-surface"><span className="font-medium">Inventory Received:</span> 50 units restocked from PO-2023-144</p>
<p className="font-label-md text-label-md text-outline mt-1">Received by Warehouse Team Alpha</p>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Nov 02, 2:15 PM</span>
</div>
</div>
{/* Timeline Item */}
<div className="relative">
<div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-surface-container-high ring-4 ring-surface-container-lowest border-2 border-outline-variant"></div>
<div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
<div>
<p className="font-body-md text-body-md text-on-surface"><span className="font-medium">Price Update:</span> MSRP updated from $1,850.00 to $1,899.00</p>
<p className="font-label-md text-label-md text-outline mt-1">Updated by Sarah Jenkins (Product Mgr)</p>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Oct 28, 9:00 AM</span>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default ProductDetailedOverview;
