import React from 'react';
import '../style/Dashboard.css';

const OnboardNewVendor: React.FC = () => {
  return (
    <>
      
 Nav Shell Suppressed for Task-Focused Flow (Add Vendor is a linear workflow) 
<main className="flex-1 flex flex-col min-w-0 bg-surface">
{/* Top App Bar (Task-Focused Version) */}
<header className="bg-surface/80 backdrop-blur-xl docked full-width top-0 sticky z-40 border-b border-outline-variant/30 flex justify-between items-center w-full px-xl py-sm max-w-container-max mx-auto shadow-sm">
<div className="flex items-center gap-md">
<button className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined">close</span>
</button>
<div className="flex flex-col">
<span className="font-headline-md text-headline-md font-black text-on-surface">Add Vendor</span>
<span className="font-label-md text-label-md text-on-surface-variant">CommSync Vendor Management</span>
</div>
</div>
<div className="flex items-center gap-md">
<button className="px-lg py-sm rounded border border-outline text-primary font-label-md text-label-md hover:bg-surface-variant transition-colors">Save Draft</button>
<button className="px-lg py-sm rounded bg-primary-container text-on-primary-container font-label-md text-label-md hover:bg-primary-fixed-variant transition-colors flex items-center gap-sm">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings": "'FILL' 1"}}>check_circle</span>
                    Onboard Vendor
                </button>
</div>
</header>
{/* Canvas */}
<div className="flex-1 overflow-auto py-margin-desktop px-gutter">
<div className="max-w-4xl mx-auto space-y-xl">
{/* Progress Indicator */}
<div className="flex items-center justify-between mb-xl px-lg">
<div className="flex flex-col items-center gap-sm flex-1">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md text-label-md font-bold">1</div>
<span className="font-label-md text-label-md text-primary font-medium">Basic Info</span>
</div>
<div className="h-px bg-outline-variant flex-1 mx-md"></div>
<div className="flex flex-col items-center gap-sm flex-1">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md">2</div>
<span className="font-label-md text-label-md text-on-surface-variant">Contacts</span>
</div>
<div className="h-px bg-outline-variant flex-1 mx-md"></div>
<div className="flex flex-col items-center gap-sm flex-1">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md">3</div>
<span className="font-label-md text-label-md text-on-surface-variant">Financials</span>
</div>
<div className="h-px bg-outline-variant flex-1 mx-md"></div>
<div className="flex flex-col items-center gap-sm flex-1">
<div className="w-8 h-8 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center font-label-md text-label-md">4</div>
<span className="font-label-md text-label-md text-on-surface-variant">Compliance</span>
</div>
</div>
<form className="space-y-xl">
{/* Basic Information Section */}
<section className="glass-panel rounded-xl shadow-sm overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/30 bg-surface-container-lowest/50">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">domain</span>
                                Basic Information
                            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Primary details for the vendor record.</p>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg bg-surface-container-lowest">
<div className="space-y-sm col-span-1 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface font-medium">Legal Company Name *</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="e.g. Acme Corporation" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Doing Business As (DBA)</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="Optional" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Vendor Category *</label>
<div className="relative">
<select className="w-full h-10 px-md pr-10 rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md appearance-none">
<option disabled selected value="">Select category...</option>
<option value="software">Software &amp; IT Services</option>
<option value="hardware">Hardware &amp; Equipment</option>
<option value="consulting">Professional Consulting</option>
<option value="facilities">Facilities &amp; Maintenance</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Tax ID / EIN *</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="XX-XXXXXXX" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Website</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="https://" type="url" />
</div>
</div>
</section>
{/* Contact Details Section */}
<section className="glass-panel rounded-xl shadow-sm overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/30 bg-surface-container-lowest/50 flex justify-between items-center">
<div>
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">contacts</span>
                                    Contact Details
                                </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Primary points of contact.</p>
</div>
<button className="text-primary font-label-md text-label-md hover:text-primary-fixed-dim transition-colors flex items-center gap-xs" type="button">
<span className="material-symbols-outlined text-[18px]">add</span> Add Contact
                            </button>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-lg bg-surface-container-lowest">
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Primary Contact Name *</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="Jane Doe" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Role/Title</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="Account Executive" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Email Address *</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="jane@example.com" type="email" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Phone Number</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="+1 (555) 000-0000" type="tel" />
</div>
<div className="col-span-1 md:col-span-2 pt-md border-t border-outline-variant/30 mt-sm">
<h3 className="font-label-md text-label-md text-on-surface font-semibold mb-md">Headquarters Address</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-sm col-span-1 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface font-medium">Street Address</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="123 Main St" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">City</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="City" type="text" />
</div>
<div className="grid grid-cols-2 gap-md">
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">State/Province</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="State" type="text" />
</div>
<div className="space-y-sm">
<label className="font-label-md text-label-md text-on-surface font-medium">Postal Code</label>
<input className="w-full h-10 px-md rounded border border-outline-variant bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-body-md text-body-md" placeholder="Zip" type="text" />
</div>
</div>
</div>
</div>
</div>
</section>
</form>
</div>
</div>
</main>

    </>
  );
};

export default OnboardNewVendor;
