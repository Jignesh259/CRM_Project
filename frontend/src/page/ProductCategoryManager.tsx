import React from 'react';
import '../style/Dashboard.css';

const ProductCategoryManager: React.FC = () => {
  return (
    <>
      
 JSON Component: SideNavBar 
<aside className="bg-inverse-surface dark:bg-surface-container-lowest font-body-md text-body-md fixed left-0 top-0 h-full w-[280px] shadow-md z-30">
<div className="flex flex-col h-full py-lg">
{/* Brand Logo */}
<div className="px-lg mb-xl">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{"fontVariationSettings": "'FILL' 1"}}>widgets</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-primary-fixed-dim opacity-80">Enterprise Suite</p>
</div>
</div>
</div>
{/* Global Action CTA */}
<div className="px-lg mb-lg">
<button className="w-full bg-primary-container hover:bg-primary text-on-primary-container font-label-md text-label-md py-sm rounded-DEFAULT flex items-center justify-center gap-sm transition-colors duration-200 Active: scale-[0.99] transition-transform">
<span className="material-symbols-outlined text-[18px]">add</span>
                    New Entry
                </button>
</div>
{/* Navigation Links */}
<nav className="flex-1 overflow-y-auto custom-scrollbar">
<ul className="flex flex-col gap-xs px-md">
{/* Tab 1 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">dashboard</span>
                            Dashboard
                        </a>
</li>
{/* Tab 2 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">group</span>
                            CRM
                        </a>
</li>
{/* Tab 3 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">payments</span>
                            Sales
                        </a>
</li>
{/* Tab 4 (Active based on intent: Category Management -> Inventory) */}
<li>
<a className="text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 py-sm rounded-r-md flex items-center gap-md bg-on-surface-variant/20 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                            Inventory
                        </a>
</li>
{/* Tab 5 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
                            Finance
                        </a>
</li>
{/* Tab 6 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">assessment</span>
                            Reports
                        </a>
</li>
{/* Tab 7 */}
<li>
<a className="text-surface-variant opacity-70 hover:opacity-100 pl-5 py-sm rounded-md flex items-center gap-md hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
                            Settings
                        </a>
</li>
</ul>
</nav>
</div>
</aside>
 Main Content Wrapper 
<div className="flex-1 flex flex-col h-screen w-[calc(100%-280px)] ml-[280px]">
{/* JSON Component: TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 text-primary font-title-md text-title-md docked full-width top-0 border-b border-outline-variant shadow-sm z-20 flex justify-between items-center w-full h-16 px-margin-desktop sticky">
{/* Left Side: Search Context */}
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline-variant group-focus-within:text-primary transition-colors">search</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-full py-xs pl-xl pr-md font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus-within:ring-2 focus-within:ring-primary focus:border-primary transition-all" placeholder="Search categories, products..." type="text" />
</div>
</div>
{/* Right Side: Actions & Profile */}
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">help_outline</span>
</button>
</div>
<div className="h-8 w-[1px] bg-outline-variant"></div>
<button className="flex items-center gap-sm hover:opacity-80 transition-opacity">
<img alt="User Profile Avatar" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A professional headshot of a young male executive with short brown hair, wearing a dark blazer over a light blue shirt. He has a slight, confident smile and is positioned against a clean, light grey studio background. The lighting is soft and flattering, highlighting modern corporate professionalism suitable for an enterprise software user avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGJFrjJImC7ZcsJcF8bqi2bdY98g2vfdnBJ42fJhk0fB0LtPuGUV-lqO7_j3rdlUi-_c7p1ortQFHlLEryXC4k4S-EC6tGQkRLtN3SZK72zfjowOSZwgNcvOVR-elYq046rDllAk0I5yFz0xuO_4bvllMkAV5gF3vrQgaANlCQ8mLx7ADOznG1NRr8Zij1aJwqotyaghCmF6JobOkydd0xmzlGToIA074ieRkI2QaUI4XsmZCK7JOtApxLwGiGnGiHxOcJstwwF8c" />
<span className="material-symbols-outlined text-outline-variant">expand_more</span>
</button>
</div>
</header>
{/* Page Content Canvas */}
<main className="flex-1 overflow-auto bg-surface-container-lowest p-margin-desktop">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-xl gap-md">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Category Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Organize and structure your product catalog taxonomy.</p>
</div>
<div className="flex items-center gap-sm">
<button className="px-md py-sm border border-outline-variant rounded-DEFAULT font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">download</span>
                        Export List
                    </button>
{/* Trigger for Add Category (Mobile/Smaller screens might use this to open the right panel) */}
<button className="px-md py-sm bg-primary hover:bg-primary-container text-on-primary rounded-DEFAULT font-label-md text-label-md transition-colors shadow-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Category
                    </button>
</div>
</div>
{/* Main Layout: Grid -> Table + Right Sidebar Action Panel */}
<div className="flex flex-col lg:flex-row gap-gutter items-start">
{/* Center Canvas: Data Table Card */}
<div className="flex-1 w-full bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">
{/* Table Toolbar */}
<div className="p-md border-b border-outline-variant bg-surface flex items-center justify-between">
<div className="flex items-center gap-sm">
<button className="px-sm py-xs bg-surface-container rounded font-label-md text-label-md text-on-surface flex items-center gap-xs hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
                                Filter
                            </button>
<span className="text-outline-variant">|</span>
<span className="font-body-md text-body-md text-on-surface-variant text-sm">Showing 42 categories</span>
</div>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">view_list</span>
</button>
<button className="w-8 h-8 rounded flex items-center justify-center text-outline-variant hover:text-on-surface hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</button>
</div>
</div>
{/* Table Container */}
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-bright border-b border-outline-variant">
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap">Category Name</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap">Description</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap">Products</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap">Status</th>
<th className="py-sm px-md font-label-md text-label-md text-on-surface-variant font-semibold whitespace-nowrap text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-surface-container">
{/* Row 1 */}
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
<td className="py-md px-md w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-[18px]">laptop_mac</span>
</div>
<span className="font-semibold">Hardware &amp; Devices</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant truncate max-w-[200px]">Physical computing equipment and peripherals.</td>
<td className="py-md px-md">1,245</td>
<td className="py-md px-md">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-container/10 text-primary font-label-md text-label-md gap-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Active
                                        </span>
</td>
<td className="py-md px-md text-right">
<button className="p-xs text-outline-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-xs text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer bg-surface/50">
<td className="py-md px-md w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-[18px]">dns</span>
</div>
<span className="font-semibold">Software Licenses</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant truncate max-w-[200px]">Digital products, subscriptions, and SaaS.</td>
<td className="py-md px-md">842</td>
<td className="py-md px-md">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary-container/10 text-primary font-label-md text-label-md gap-xs">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            Active
                                        </span>
</td>
<td className="py-md px-md text-right">
<button className="p-xs text-outline-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-xs text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
<td className="py-md px-md w-12">
<input className="rounded border-outline-variant text-primary focus:ring-primary/20" type="checkbox" />
</td>
<td className="py-md px-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-[18px]">desk</span>
</div>
<span className="font-semibold text-on-surface">Office Furniture</span>
</div>
</td>
<td className="py-md px-md text-on-surface-variant truncate max-w-[200px]">Desks, ergonomic chairs, and storage units.</td>
<td className="py-md px-md">156</td>
<td className="py-md px-md">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-md text-label-md gap-xs">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                                            Draft
                                        </span>
</td>
<td className="py-md px-md text-right">
<button className="p-xs text-outline-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">edit</span>
</button>
<button className="p-xs text-outline-variant hover:text-error transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 rounded hover:bg-surface-container">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer / Pagination */}
<div className="p-md border-t border-outline-variant bg-surface-bright flex items-center justify-between">
<span className="font-body-md text-body-md text-on-surface-variant">Showing 1 to 3 of 42 entries</span>
<div className="flex items-center gap-xs">
<button className="px-sm py-xs border border-outline-variant rounded text-outline-variant hover:bg-surface-container transition-colors disabled:opacity-50" disabled>Previous</button>
<button className="px-sm py-xs bg-primary text-on-primary rounded font-label-md text-label-md">1</button>
<button className="px-sm py-xs hover:bg-surface-container rounded text-on-surface font-label-md text-label-md transition-colors">2</button>
<button className="px-sm py-xs hover:bg-surface-container rounded text-on-surface font-label-md text-label-md transition-colors">3</button>
<button className="px-sm py-xs border border-outline-variant rounded text-on-surface hover:bg-surface-container transition-colors">Next</button>
</div>
</div>
</div>
{/* Right Canvas: Action Panel (Add/Edit Category) */}
{/* Utilizing a card design for the side panel to integrate cleanly into the layout */}
<aside className="w-full lg:w-[380px] shrink-0 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] flex flex-col sticky top-[100px]">
{/* Panel Header (Glassmorphic implication) */}
<div className="p-lg border-b border-outline-variant bg-surface/80 backdrop-blur-sm rounded-t-xl flex justify-between items-center">
<div>
<h3 className="font-title-md text-title-md text-on-background">Edit Category</h3>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">Hardware &amp; Devices</p>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-outline hover:bg-surface-container hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
{/* Form Body */}
<div className="p-lg flex flex-col gap-lg overflow-y-auto custom-scrollbar flex-1">
{/* Input Group: Name */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="cat-name">Category Name <span className="text-error">*</span></label>
<input className="w-full bg-surface border border-outline-variant rounded-md py-sm px-md font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" id="cat-name" type="text" value="Hardware &amp; Devices" />
</div>
{/* Input Group: Parent Category */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="parent-cat">Parent Category</label>
<div className="relative">
<select className="w-full appearance-none bg-surface border border-outline-variant rounded-md py-sm pl-md pr-xl font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm cursor-pointer" id="parent-cat">
<option value="">None (Top Level)</option>
<option value="1">Electronics</option>
<option value="2">IT Infrastructure</option>
</select>
<span className="material-symbols-outlined absolute right-sm top-1/2 -translate-y-1/2 text-outline-variant pointer-events-none">expand_more</span>
</div>
</div>
{/* Input Group: Description */}
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="cat-desc">Description</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-md py-sm px-md font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm resize-none custom-scrollbar" id="cat-desc" rows={3}>Physical computing equipment and peripherals.</textarea>
<p className="font-label-md text-label-md text-outline-variant text-right">43/200</p>
</div>
{/* Input Group: Status toggle (using styling to mimic switch) */}
<div className="flex items-center justify-between py-sm border-t border-b border-surface-container">
<div>
<h4 className="font-body-md text-body-md font-medium text-on-surface">Category Status</h4>
<p className="font-label-md text-label-md text-on-surface-variant">Visible to sales team</p>
</div>
<button className="w-11 h-6 bg-primary rounded-full relative transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-surface" type="button">
<span className="absolute left-1 top-1 bg-on-primary w-4 h-4 rounded-full translate-x-5 transition-transform"></span>
</button>
</div>
</div>
{/* Panel Footer */}
<div className="p-lg bg-surface-bright rounded-b-xl border-t border-outline-variant flex justify-end gap-sm">
<button className="px-md py-sm border border-outline-variant rounded-DEFAULT font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors shadow-sm">
                            Cancel
                        </button>
<button className="px-md py-sm bg-primary hover:bg-primary-container text-on-primary rounded-DEFAULT font-label-md text-label-md transition-colors shadow-sm">
                            Save Changes
                        </button>
</div>
</aside>
</div>
</main>
</div>

    </>
  );
};

export default ProductCategoryManager;
