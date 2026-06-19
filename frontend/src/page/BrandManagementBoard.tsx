import React from 'react';
import '../style/Dashboard.css';

const BrandManagementBoard: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-md flex flex-col py-lg z-20">
<div className="px-lg mb-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-headline-md text-headline-md font-bold">
                C
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant opacity-70">Enterprise Suite</p>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">
<ul className="flex flex-col gap-1">
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>dashboard</span>
                        Dashboard
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>group</span>
                        CRM
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>payments</span>
                        Sales
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 bg-inverse-surface" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
                        Inventory
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>account_balance</span>
                        Finance
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>assessment</span>
                        Reports
                    </a>
</li>
<li>
<a className="flex items-center gap-3 py-3 font-body-md text-body-md text-surface-variant opacity-70 hover:opacity-100 pl-5 hover:bg-on-surface-variant transition-colors duration-200 Active: scale-[0.99] transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 0"}}>settings</span>
                        Settings
                    </a>
</li>
</ul>
</div>
<div className="px-lg mt-auto pt-4 border-t border-inverse-surface/10">
<button className="w-full flex items-center justify-center gap-2 bg-primary-fixed-dim text-on-primary-fixed-variant font-label-md text-label-md py-2.5 rounded-DEFAULT hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Entry
            </button>
</div>
</nav>
 Main Content Canvas 
<main className="flex-1 flex flex-col ml-[280px] w-[calc(100%-280px)] h-screen overflow-hidden">
{/* TopNavBar */}
<header className="docked full-width top-0 bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 shadow-sm border-b border-outline-variant flex justify-between items-center w-full h-16 px-margin-desktop z-10">
<div className="flex items-center gap-4 flex-1">
<div className="relative w-64 focus-within:ring-2 focus-within:ring-primary rounded-DEFAULT bg-surface-container-lowest">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-transparent border-outline-variant text-on-surface font-body-md text-body-md pl-10 pr-4 py-2 rounded-DEFAULT focus:outline-none focus:border-transparent focus:ring-0" placeholder="Search across CommSync..." type="text" />
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container border border-outline-variant overflow-hidden cursor-pointer ml-2">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A generic user profile avatar displaying initials on a solid colored background, used in enterprise software interfaces to denote the currently logged-in user. The aesthetic is clean, minimal, and flat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSyeL2AwCmeY1Dz3ZLhE5rthH27PMwah7RECIzd8X4P3PC2JJX0QYzvEHlPgU-w9T0Ha-EFWE7mFUvPAneKImOHlhJtt09pAIC572UQVAdELsSkww3_aGgfsNIOorAqoOlMFN31gPoEpp1RVmzenvRN2YIJc_MWnFwvt31fGS_zGaxEYIzEAAbQJK3bB9YqgN3LjOmFVGvq-vApKenY64U9jzx8GtRwI90sRQHqOcVGhFxVCxvmNMyTkfWky1OG0gs61c5WmlWHvE" />
</div>
</div>
</header>
{/* Scrollable Content Area */}
<div className="flex-1 overflow-y-auto custom-scrollbar p-margin-desktop bg-background">
{/* Page Header */}
<div className="flex justify-between items-end mb-8">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md mb-2">
<span>Inventory</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-primary font-medium">Brands</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-background">Brand Management</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage partner brands, view product distributions, and toggle active status.</p>
</div>
<button className="flex items-center gap-2 bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-DEFAULT hover:opacity-90 transition-opacity shadow-sm" id="openPanelBtn">
<span className="material-symbols-outlined text-[18px]">add_business</span>
                    Add Brand
                </button>
</div>
{/* Toolbar / Filters */}
<div className="flex items-center justify-between mb-6 bg-surface-container-lowest p-2 rounded-lg border border-outline-variant shadow-sm">
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors">All Brands</button>
<button className="px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors">Active</button>
<button className="px-4 py-1.5 rounded-DEFAULT font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors">Archived</button>
</div>
<div className="flex items-center gap-3">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-md text-label-md px-2 py-1">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filter
                    </button>
<div className="h-4 w-px bg-outline-variant"></div>
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1 font-label-md text-label-md px-2 py-1">
<span className="material-symbols-outlined text-[18px]">sort</span> Sort
                    </button>
</div>
</div>
{/* Bento Grid of Brands */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
{/* Brand Card 1 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative hover:-translate-y-1">
<div className="absolute top-4 right-4">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-16 h-16 rounded-lg border border-outline-variant bg-surface flex items-center justify-center overflow-hidden shrink-0">
<img alt="TechNova Logo" className="w-full h-full object-cover" data-alt="A modern, abstract geometric logo design inside a square frame. The aesthetic is clean, corporate, and minimalist, typical of high-end enterprise software brands. Lighting is flat to emphasize the graphic shape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc0ldxIOicBHxOsnciVphJEG-23bXYFDbjuK9Aj8sJNGL2_8RZoXEipW3CyRfOnnRoj17l3zcrlcwgQ1hvtlDB2kjHjBzz4a96OMPeCG0wop4V_7n9FaXHmxN2aFwauyH-J_FuuYZEFGvgocmTinpKZTFL-9ijYBfv7ASo0D1onO6_f8ioyLYfbHYaqAkmk7eftiGRmyJP5n6ISU1HjisKHPvh57bFpJRO9ol_-HekKYqOrlfjtJRFLcOoP4dLK15UfMoWY-SKNbk" />
</div>
<div className="pt-1">
<h3 className="font-title-md text-title-md text-on-surface">TechNova</h3>
<div className="mt-1 flex items-center gap-2">
<span className="bg-primary-container/20 text-primary-container px-2 py-0.5 rounded-full font-label-md text-label-md text-[10px] uppercase tracking-wider">Active</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Products</p>
<p className="font-title-md text-title-md text-on-surface mt-1">1,240</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Last Restock</p>
<p className="font-body-md text-body-md text-on-surface mt-1">2d ago</p>
</div>
</div>
</div>
{/* Brand Card 2 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative hover:-translate-y-1">
<div className="absolute top-4 right-4">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-16 h-16 rounded-lg border border-outline-variant bg-surface flex items-center justify-center overflow-hidden shrink-0 p-2">
<img alt="AeroDynamics Logo" className="w-full h-full object-contain" data-alt="A sleek, aerodynamic inspired corporate logo mark consisting of flowing lines. The aesthetic is modern and industrial, suitable for a manufacturing or high-tech hardware brand within a clean UI environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_WcxMZ7w6J-hEg9o8OsDHd10aQ4iVwXxwrE_XgKNeaK2YDXIwZ-QlgipWaKFJ3FvOPGT3jnb96ODHUt7UpkjybfmlwqCx6CFUmg8k5BTKguY7k24cmcTun28JDTq-SYgubXmOwHRJIpUAnL-ip9R1f9kp8FNJ6HDCIWK7s8es1Q74nUB57tMt9HIQXqrfr3z3BBk5Xs39qTHiDypkmTnW73wcgZXr7vxdBYcfHJHpv9c-mUk7xi5jB47A1yime4dQHkSvYAopRUA" />
</div>
<div className="pt-1">
<h3 className="font-title-md text-title-md text-on-surface">AeroDynamics</h3>
<div className="mt-1 flex items-center gap-2">
<span className="bg-primary-container/20 text-primary-container px-2 py-0.5 rounded-full font-label-md text-label-md text-[10px] uppercase tracking-wider">Active</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Products</p>
<p className="font-title-md text-title-md text-on-surface mt-1">84</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Last Restock</p>
<p className="font-body-md text-body-md text-on-surface mt-1">5h ago</p>
</div>
</div>
</div>
{/* Brand Card 3 (Inactive) */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative hover:-translate-y-1 opacity-75">
<div className="absolute top-4 right-4">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex items-start gap-4 mb-4 grayscale">
<div className="w-16 h-16 rounded-lg border border-outline-variant bg-surface flex items-center justify-center overflow-hidden shrink-0">
<img alt="Legacy Systems Logo" className="w-full h-full object-cover" data-alt="A slightly dated, traditional corporate logo featuring strong serif typography or solid geometric shapes, rendered in grayscale to indicate an inactive state within a modern UI dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKD5Rs3aulZNafr3AUSa60LprQ94urAw8eWGDhKoHDvOY_3oK8AWCcUcq1yOo58j7enddYXGgYJRnb6avD7DnCMf5ldG5YslJc4rGQrOKFF3ow63MggA_MNwMRQK3HLHKAVhipNy_BZ2vu2pqjUAZ10TGlERtUXfP11zW-cF-Du6g2kJxuYF-N_lQ_TqlA0OD0jalrhYCb0g8Xg4clGSihOC-fMvOD_WzojG31L12eaDUsGqrZJ4-H6NwwgGOtMlP4ar7wk7Xa0zg" />
</div>
<div className="pt-1">
<h3 className="font-title-md text-title-md text-on-surface">Legacy Systems</h3>
<div className="mt-1 flex items-center gap-2">
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-full font-label-md text-label-md text-[10px] uppercase tracking-wider">Inactive</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Products</p>
<p className="font-title-md text-title-md text-on-surface mt-1">0</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Last Restock</p>
<p className="font-body-md text-body-md text-on-surface mt-1">1yr ago</p>
</div>
</div>
</div>
{/* Brand Card 4 */}
<div className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative hover:-translate-y-1">
<div className="absolute top-4 right-4">
<button className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex items-start gap-4 mb-4">
<div className="w-16 h-16 rounded-lg border border-outline-variant bg-surface flex items-center justify-center overflow-hidden shrink-0 p-3">
<img alt="Nexus Connect Logo" className="w-full h-full object-contain filter hue-rotate-90" data-alt="A vibrant, interconnected nodes logo graphic representing a digital network or communications brand. It is displayed inside a clean, light-mode container typical of an enterprise inventory management system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfQWwGdJbJjak4qUK3LHOJFPygwZhhUBLL4mJ4S3OdThvRSaSmxDmGqsBW9UJ5TbpSh7xF5bYIgg7YOwww9FyWNvi-i4KncWNsZV2UjEF_rzoF0SWNKrmLGnCWYEBdqDxrnRZNruMkoHYf0la7tu_1x-x0A1jvu2824fnQAtoAtFgPL2RHndLc6xSe6lX9njGRLIe9iNb43lYfNE6QmqckI4jcEdSgM0dJQyGQ0WSG3Y7g2hv7Bl5gd0ilbf4Q6V05pxv2rtaCUVY" />
</div>
<div className="pt-1">
<h3 className="font-title-md text-title-md text-on-surface">Nexus Connect</h3>
<div className="mt-1 flex items-center gap-2">
<span className="bg-primary-container/20 text-primary-container px-2 py-0.5 rounded-full font-label-md text-label-md text-[10px] uppercase tracking-wider">Active</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/30">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Products</p>
<p className="font-title-md text-title-md text-on-surface mt-1">412</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Last Restock</p>
<p className="font-body-md text-body-md text-on-surface mt-1">Today</p>
</div>
</div>
</div>
{/* Add New Brand Placeholder Card */}
<button className="group bg-surface border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center min-h-[200px] hover:border-primary hover:bg-surface-container-lowest transition-all duration-300" id="addCardBtn">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-3 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors text-on-surface-variant">
<span className="material-symbols-outlined text-[24px]">add</span>
</div>
<h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">Register New Brand</h3>
<p className="font-body-md text-body-md text-on-surface-variant text-center mt-2 max-w-[200px]">Add a new manufacturer or partner to your inventory system.</p>
</button>
</div>
<div className="h-12"></div> {/* Bottom padding */}
</div>
</main>
 Side Panel Overlay & Content 
<div className="fixed inset-0 bg-on-surface/20 glass-panel z-40 opacity-0 pointer-events-none transition-opacity duration-300" id="sidePanelBackdrop"></div>
<div className="fixed top-0 right-0 h-full w-[400px] bg-surface-container-lowest shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col border-l border-outline-variant" id="sidePanel">
{/* Panel Header */}
<div className="flex items-center justify-between p-6 border-b border-outline-variant">
<div>
<h2 className="font-title-md text-title-md text-on-surface">Add New Brand</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Enter details for the new partner brand.</p>
</div>
<button className="text-on-surface-variant hover:text-on-surface transition-colors rounded-full p-1 hover:bg-surface-container" id="closePanelBtn">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Panel Form Content */}
<div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
<form className="flex flex-col gap-6">
{/* Logo Upload */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2">Brand Logo</label>
<div className="border-2 border-dashed border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center hover:bg-surface-container transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-[32px] text-outline mb-2 group-hover:text-primary transition-colors">cloud_upload</span>
<p className="font-body-md text-body-md text-on-surface">Drag &amp; drop or click to upload</p>
<p className="font-label-md text-label-md text-on-surface-variant mt-1">SVG, PNG, JPG (max 2MB)</p>
</div>
</div>
{/* Brand Name */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="brandName">Brand Name <span className="text-error">*</span></label>
<input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="brandName" placeholder="e.g. Acme Corp" type="text" />
</div>
{/* Website */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="brandWeb">Website</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-outline font-body-md">https://</span>
<input className="w-full bg-surface border border-outline-variant rounded-DEFAULT pl-16 pr-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" id="brandWeb" placeholder="www.example.com" type="text" />
</div>
</div>
{/* Description */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="brandDesc">Internal Notes</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none" id="brandDesc" placeholder="Add any details regarding supply chain or contact info..." rows={4}></textarea>
</div>
{/* Status Toggle */}
<div className="flex items-center justify-between py-2 border-t border-outline-variant/30 mt-2">
<div>
<h4 className="font-title-md text-title-md text-on-surface text-[14px]">Active Status</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-[12px]">Brand will be available for product assignment.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-surface-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-primary-container peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</form>
</div>
{/* Panel Footer */}
<div className="p-6 border-t border-outline-variant bg-surface-container-lowest flex justify-end gap-3">
<button className="px-4 py-2 rounded-DEFAULT font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" id="cancelPanelBtn">Cancel</button>
<button className="px-4 py-2 rounded-DEFAULT bg-primary text-on-primary font-label-md text-label-md hover:bg-primary/90 transition-colors shadow-sm">Save Brand</button>
</div>
</div>
 Micro-interaction Scripts 


    </>
  );
};

export default BrandManagementBoard;
