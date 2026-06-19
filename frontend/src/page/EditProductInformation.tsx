import React from 'react';
import '../style/Dashboard.css';

const EditProductInformation: React.FC = () => {
  return (
    <>
      
 Main Content Area 
<main className="flex-1 flex flex-col min-h-screen pb-xl">
{/* Header Actions */}
<header className="flex justify-between items-center w-full h-16 px-margin-desktop bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm sticky top-0 z-10">
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined">arrow_back</span>
<span className="font-label-md text-label-md">Back to Inventory</span>
</button>
</div>
<div className="flex items-center gap-md">
<button className="px-md py-sm rounded border border-outline-variant text-on-surface hover:bg-surface-variant transition-colors font-label-md text-label-md h-[40px]">
                    Cancel
                </button>
<button className="px-md py-sm rounded bg-[#1976D2] text-on-primary hover:bg-primary-container/90 transition-colors font-label-md text-label-md h-[40px] flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]">save</span>
                    Save Changes
                </button>
</div>
</header>
<div className="px-margin-desktop py-lg max-w-[1000px] mx-auto w-full">
<div className="mb-lg">
<h1 className="font-headline-lg text-headline-lg text-on-surface">Edit Product</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm">Update product details, specifications, and inventory levels.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* Left Column: Main Info */}
<div className="md:col-span-8 flex flex-col gap-gutter">
{/* General Info Card */}
<section className="glass-card rounded-[16px] p-lg">
<h2 className="font-title-md text-title-md text-on-surface mb-md">General Information</h2>
<div className="space-y-md">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Product Name</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="Enterprise Server Rack 42U" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Description</label>
<textarea className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface resize-none" rows={4}>High-capacity 42U server rack designed for enterprise data centers. Includes advanced cable management and thermal optimization features.</textarea>
</div>
<div className="grid grid-cols-2 gap-md">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">SKU</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="SR-42U-ENT-001" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Category</label>
<select className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]">
<option>Infrastructure</option>
<option>Networking</option>
<option>Storage</option>
</select>
</div>
</div>
</div>
</section>
{/* Specifications Card */}
<section className="glass-card rounded-[16px] p-lg">
<h2 className="font-title-md text-title-md text-on-surface mb-md">Specifications</h2>
<div className="space-y-md">
<div className="grid grid-cols-2 gap-md">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Dimensions (HxWxD)</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="2000 x 600 x 1000 mm" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Weight</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="120 kg" />
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Material</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="Cold-rolled steel" />
</div>
</div>
</section>
</div>
{/* Right Column: Sidebar Actions */}
<div className="md:col-span-4 flex flex-col gap-gutter">
{/* Stock Management */}
<section className="glass-card rounded-[16px] p-lg">
<h2 className="font-title-md text-title-md text-on-surface mb-md">Stock Management</h2>
<div className="space-y-md">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Current Stock</label>
<div className="flex items-center gap-sm">
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="number" value="45" />
<span className="px-sm py-xs bg-surface-container-low text-on-surface-variant rounded font-label-md text-label-md border border-outline-variant">Units</span>
</div>
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Reorder Point</label>
<input className="form-input w-full rounded p-sm bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="number" value="10" />
</div>
<div className="pt-sm border-t border-outline-variant">
<label className="flex items-center gap-sm cursor-pointer">
<input checked className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface">Track Inventory</span>
</label>
</div>
</div>
</section>
{/* Pricing */}
<section className="glass-card rounded-[16px] p-lg">
<h2 className="font-title-md text-title-md text-on-surface mb-md">Pricing</h2>
<div className="space-y-md">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Base Price</label>
<div className="relative">
<span className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant font-body-md text-body-md">$</span>
<input className="form-input w-full rounded p-sm pl-xl bg-surface font-body-md text-body-md text-on-surface h-[40px]" type="text" value="1,299.00" />
</div>
</div>
</div>
</section>
{/* Danger Zone */}
<section className="glass-card rounded-[16px] p-lg border-error-container bg-error-container/10">
<h2 className="font-title-md text-title-md text-error mb-sm flex items-center gap-sm">
<span className="material-symbols-outlined">warning</span>
                            Danger Zone
                        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-md text-sm">Archiving this product will hide it from active inventory views.</p>
<button className="w-full px-md py-sm rounded border border-error text-error hover:bg-error hover:text-on-error transition-colors font-label-md text-label-md h-[40px]">
                            Archive Product
                        </button>
</section>
</div>
</div>
</div>
</main>

    </>
  );
};

export default EditProductInformation;
