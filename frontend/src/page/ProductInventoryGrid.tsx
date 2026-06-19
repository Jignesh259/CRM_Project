import React from 'react';
import '../style/Dashboard.css';

const ProductInventoryGrid: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] shadow-md z-20 flex flex-col py-lg hidden md:flex">
<div className="px-lg mb-xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-headline-md">C</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary">CommSync</h1>
<p className="text-surface-variant font-label-md text-label-md opacity-70">Enterprise Suite</p>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-sm mt-md">
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-body-md text-body-md">CRM</span>
</a>
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-body-md text-body-md">Sales</span>
</a>
<a className="flex items-center gap-md py-3 text-primary-fixed font-bold border-l-4 border-primary-fixed pl-4 bg-on-surface-variant/20 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>inventory_2</span>
<span className="font-body-md text-body-md">Inventory</span>
</a>
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-body-md text-body-md">Finance</span>
</a>
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
<a className="flex items-center gap-md py-3 text-surface-variant opacity-70 hover:opacity-100 hover:bg-on-surface-variant transition-colors duration-200 pl-5 rounded-r-full mr-sm mt-auto" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</div>
<div className="px-lg mt-lg">
<button className="w-full bg-primary-container text-on-primary-container hover:bg-primary transition-colors py-2 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add</span> New Entry
            </button>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] w-full md:w-[calc(100%-280px)] h-screen overflow-hidden">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md dark:bg-surface-dim/80 docked full-width top-0 border-b border-outline-variant shadow-sm z-10 flex justify-between items-center w-full h-16 px-margin-desktop shrink-0">
<div className="flex items-center gap-lg">
{/* Mobile Menu Toggle */}
<button className="md:hidden text-on-surface-variant p-2 -ml-2 rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="font-headline-md text-headline-md text-primary font-bold hidden md:block">CommSync</div>
<div className="relative max-w-md w-full ml-xl hidden lg:block focus-within:ring-2 focus-within:ring-primary rounded-lg transition-shadow">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-highest border-none rounded-lg text-body-md text-on-surface placeholder-outline focus:ring-0 focus:outline-none bg-opacity-50" placeholder="Search inventory..." type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<div className="w-8 h-8 rounded-full bg-secondary-container overflow-hidden ml-2 border border-outline-variant cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1-9B1mT_MgP_hBDdDTbUTT2XxqVO98x4437gSQXNDhg-eSRGhBKhxY8yUXmSrJ8O-oPtEvrB6Jd72hfTN19uLXpvF7RWxXktGM3itV6H99FMs6ydX8oCXGctJkk9lyPeSTBWaoranvMLFl7ViYkaZj8gMbjgOuj5hzn4IloXQa_gb9jHktY1Pp-_ELt3Z1INjS8AUlkgpyjgHbzb_VY4RSQfL6c1l7J3ViF_jLsKr48Ql8_90nHvwDCCWQhrej-3PWZOLJHt7Y8" />
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 overflow-y-auto bg-surface-container-low p-margin-mobile md:p-margin-desktop custom-scrollbar relative">
{/* Page Header & Actions */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-md mb-xl">
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Product Inventory</h2>
<p className="font-body-md text-body-md text-outline mt-1">Manage and track your products across all warehouses.</p>
</div>
<div className="flex flex-wrap items-center gap-sm">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">filter_list</span>
<select className="pl-9 pr-8 py-2 bg-surface border border-outline-variant rounded-lg text-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary appearance-none">
<option>All Categories</option>
<option>Electronics</option>
<option>Furniture</option>
<option>Office Supplies</option>
</select>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-outline-variant rounded-lg text-body-md font-medium text-on-surface hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">sort</span> Sort
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary-container text-on-primary-container rounded-lg text-body-md font-medium hover:bg-primary transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">add</span> Add Product
                    </button>
</div>
</div>
{/* Bento Grid / High Density List */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter pb-xl">
{/* Product Card 1 */}
<div className="bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-3 shadow-sm card-hover relative group">
<div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
<button className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary shadow-sm"><span className="material-symbols-outlined text-[18px]">edit</span></button>
<button className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-error shadow-sm"><span className="material-symbols-outlined text-[18px]">delete</span></button>
</div>
<div className="w-full h-40 bg-surface-container-highest rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A sleek, modern smart watch presented against a crisp white background, shot with high-key studio lighting to emphasize its premium metallic finish and clean minimalist design. The object embodies cutting-edge technology typical of high-end enterprise electronics. The overall aesthetic is crisp, technical, and impeccably clean." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAriTukL4roMobEFMd93KnA2H2zcjka6yR5EJ-C4mhzepkSEmVuah6SYFouE2I7QdBadTyPtzxz_2OzEypZvytoF25RzuxjoIzPYqR_VJYcrfnpv5iZ2Q4I2NnsJeFRX7fU_myRoNOThlNxh1jUvBpBgAuvLX8gyNKgA2nFSzE5ZYBovMh2eiFFOaibn-diwLYxZ9lI-4DZWcS-DeQ9hzV1QMqdHdBM3qDhJzQF7-_tF6_GT39CbBzAjxrfFgTR2d0AUrQwmz3OgjU" />
<div className="absolute bottom-2 left-2 px-2 py-1 bg-surface/80 backdrop-blur rounded text-label-md font-label-md text-on-surface">SKU-8924</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">Electronics</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">$299.00</span>
</div>
<h3 className="font-title-md text-body-lg font-medium text-on-background line-clamp-2">Quantum Smart Watch Gen 4</h3>
<div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-surface-tint">inventory_2</span>
<span className="font-body-md text-body-md text-sm">In Stock: 142</span>
</div>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>
</div>
{/* Product Card 2 (Low Stock) */}
<div className="bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-3 shadow-sm card-hover relative group">
<div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
<button className="w-8 h-8 rounded-full bg-surface/90 backdrop-blur border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary shadow-sm"><span className="material-symbols-outlined text-[18px]">edit</span></button>
</div>
<div className="w-full h-40 bg-surface-container-highest rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A pair of premium over-ear headphones isolated on a soft neutral gray background. The lighting highlights the matte textures and plush ear cushions, suggesting comfort and high audio fidelity. The composition is highly centered and balanced, reflecting an organized, high-end product catalog approach." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp6F23RGP5-nuP-WQcblmqPzj641hmbTmz3XqnnEhJruKKHSVVGNV0MQT1_SzLRP9NqM78JWxzP71QgRbIeGA4OO1bqxmATX082yivNT_Gma3vTQForoslTh5VeEdnKArGvR_pD5lpEpJqwtg7ctkO_ASxxKQOX_KdUyxm9g6aorUfnz8Q0X82SQ5MHh5Q005RS-1U7P1RtULILSbTz4ErUuedWF-eJ5ui9nO8gP9p0vUIiWFlUkscLrHcULdPWvp9ppyU49_5iEM" />
<div className="absolute bottom-2 left-2 px-2 py-1 bg-surface/80 backdrop-blur rounded text-label-md font-label-md text-on-surface">SKU-4412</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">Audio</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">$149.50</span>
</div>
<h3 className="font-title-md text-body-lg font-medium text-on-background line-clamp-2">AeroNoise Cancelling Headphones</h3>
<div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-1 text-error">
<span className="material-symbols-outlined text-[16px]">warning</span>
<span className="font-body-md text-body-md text-sm font-medium">Low Stock: 4</span>
</div>
<span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
</div>
</div>
</div>
{/* Product Card 3 */}
<div className="bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-3 shadow-sm card-hover relative group">
<div className="w-full h-40 bg-surface-container-highest rounded-lg overflow-hidden relative">
<div className="w-full h-full bg-surface-container-high flex items-center justify-center text-outline-variant">
<span className="material-symbols-outlined text-3xl">chair</span>
</div>
<div className="absolute bottom-2 left-2 px-2 py-1 bg-surface/80 backdrop-blur rounded text-label-md font-label-md text-on-surface">SKU-9001</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">Furniture</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">$850.00</span>
</div>
<h3 className="font-title-md text-body-lg font-medium text-on-background line-clamp-2">ErgoPro Executive Task Chair</h3>
<div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-surface-tint">inventory_2</span>
<span className="font-body-md text-body-md text-sm">In Stock: 28</span>
</div>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>
</div>
{/* Product Card 4 */}
<div className="bg-surface rounded-xl border border-outline-variant p-4 flex flex-col gap-3 shadow-sm card-hover relative group">
<div className="w-full h-40 bg-surface-container-highest rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover" data-alt="A modern, high-tech smart display or tablet resting on a clean wooden desk surface, next to a subtle plant, shot with natural soft lighting. The image conveys productivity and seamless integration into a modern workspace. The scene is bright, optimistic, and aligned with a minimalist enterprise environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_lSKvB0nTp_wudgJ1EbDt6qYCHumnJk8EOA2ovCuaFwKZl_PtH9Y0D14afyCzZkRGp0lJBOfjRftY-JrTk4ucDVfRGGvpCu1zFsgIAN79TS-W2HKkzr4AAfZUelYw5hkfHvcIyoClh5eZ4Zg7ooZFwtlaKVjqFYFfOuzC9EGOxGG08fo2iwGivDo7TI_5Hz32ct7p68Oobg2a4Ft3LSAwKcMmFJpomHCYbvrlj_Bp4oCxruixkeASao2RMhiZzC93STY_hjnew2s" />
<div className="absolute bottom-2 left-2 px-2 py-1 bg-surface/80 backdrop-blur rounded text-label-md font-label-md text-on-surface">SKU-1123</div>
</div>
<div className="flex-1 flex flex-col">
<div className="flex justify-between items-start mb-1">
<span className="px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-md text-[10px] uppercase tracking-wider">Electronics</span>
<span className="font-title-md text-title-md text-on-surface font-semibold">$599.00</span>
</div>
<h3 className="font-title-md text-body-lg font-medium text-on-background line-clamp-2">Nexus Connect Display 15"</h3>
<div className="mt-auto pt-3 border-t border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-surface-tint">inventory_2</span>
<span className="font-body-md text-body-md text-sm">In Stock: 85</span>
</div>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>
</div>
</div>
{/* Pagination */}
<div className="flex items-center justify-between border-t border-outline-variant pt-lg mt-auto pb-lg">
<p className="font-body-md text-sm text-on-surface-variant hidden sm:block">Showing 1 to 4 of 120 results</p>
<div className="flex items-center gap-2 w-full sm:w-auto justify-center">
<button className="px-3 py-1 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
<button className="px-3 py-1 border border-primary bg-primary-container text-on-primary-container rounded font-medium text-sm">1</button>
<button className="px-3 py-1 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant text-sm">2</button>
<button className="px-3 py-1 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant text-sm">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-3 py-1 border border-outline-variant rounded bg-surface text-on-surface hover:bg-surface-variant"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
</div>
</div>
</main>
</div>

    </>
  );
};

export default ProductInventoryGrid;
