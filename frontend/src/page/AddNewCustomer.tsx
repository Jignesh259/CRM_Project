import React from 'react';
import '../style/Dashboard.css';

const AddNewCustomer: React.FC = () => {
  return (
    <>
      
 Background Texture Overlay 
<div className="absolute inset-0 bg-pattern pointer-events-none"></div>
 Modal Container (Level 2 Elevation) 
<main className="relative w-full max-w-[800px] bg-surface-container-lowest rounded-xl shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] border border-outline-variant/30 flex flex-col max-h-[921px] z-10 overflow-hidden">
{/* Header */}
<header className="flex items-center justify-between px-xl py-lg border-b border-outline-variant/20 bg-surface/50 backdrop-blur-md">
<div className="flex items-center gap-sm text-primary">
<span className="material-symbols-outlined icon-fill text-title-md">person_add</span>
<h1 className="font-headline-md text-headline-md text-on-surface">Add New Customer</h1>
</div>
<button aria-label="Close modal" className="p-sm rounded-full text-on-surface-variant hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</header>
{/* Scrollable Form Body */}
<div className="overflow-y-auto px-xl py-lg flex-1">
<form className="flex flex-col gap-xl" id="add-customer-form">
{/* Section 1: Basic Information */}
<section className="flex flex-col gap-md">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">badge</span>
                        Basic Information
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="firstName">First Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="firstName" placeholder="e.g. Jane" type="text" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="lastName">Last Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="lastName" placeholder="e.g. Doe" type="text" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">Email Address</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-md text-outline/70 pointer-events-none text-[20px]">mail</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg pl-[44px] pr-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="email" placeholder="jane.doe@example.com" type="email" />
</div>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="phone">Phone Number</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-md text-outline/70 pointer-events-none text-[20px]">call</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg pl-[44px] pr-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
</div>
</div>
</div>
</section>
<hr className="border-outline-variant/20" />
{/* Section 2: Company Details */}
<section className="flex flex-col gap-md">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">domain</span>
                        Company Details
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="flex flex-col gap-xs md:col-span-2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="companyName">Company Name</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="companyName" placeholder="Acme Corporation" type="text" />
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="industry">Industry</label>
<div className="relative">
<select className="appearance-none w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-md py-sm pr-xl font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-[40px]" id="industry">
<option disabled selected value="">Select an industry</option>
<option value="tech">Technology</option>
<option value="finance">Finance</option>
<option value="healthcare">Healthcare</option>
<option value="retail">Retail</option>
<option value="other">Other</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
<div className="flex flex-col gap-xs">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="website">Website</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-md text-outline/70 pointer-events-none text-[20px]">language</span>
<input className="w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg pl-[44px] pr-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-outline/50 h-[40px]" id="website" placeholder="https://www.example.com" type="url" />
</div>
</div>
</div>
</section>
<hr className="border-outline-variant/20" />
{/* Section 3: Account Settings */}
<section className="flex flex-col gap-md">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">manage_accounts</span>
                        Account Settings
                    </h2>
<div className="flex flex-col gap-sm">
<span className="font-label-md text-label-md text-on-surface-variant">Plan Type</span>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
{/* Plan Option 1 */}
<label className="cursor-pointer relative group">
<input className="peer sr-only" name="planType" type="radio" value="starter" />
<div className="p-md rounded-lg border border-outline-variant/40 bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col gap-sm h-full">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-on-surface-variant peer-checked:text-primary group-hover:text-primary transition-colors text-[24px]">rocket_launch</span>
<div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Starter</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-xs">Up to 5 users</div>
</div>
</div>
</label>
{/* Plan Option 2 */}
<label className="cursor-pointer relative group">
<input checked className="peer sr-only" name="planType" type="radio" value="professional" />
<div className="p-md rounded-lg border border-outline-variant/40 bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col gap-sm h-full">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-on-surface-variant peer-checked:text-primary group-hover:text-primary transition-colors text-[24px]">work</span>
<div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Professional</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-xs">Advanced CRM tools</div>
</div>
</div>
</label>
{/* Plan Option 3 */}
<label className="cursor-pointer relative group">
<input className="peer sr-only" name="planType" type="radio" value="enterprise" />
<div className="p-md rounded-lg border border-outline-variant/40 bg-surface hover:bg-surface-container-low peer-checked:border-primary peer-checked:bg-primary-fixed/20 transition-all flex flex-col gap-sm h-full">
<div className="flex items-center justify-between">
<span className="material-symbols-outlined text-on-surface-variant peer-checked:text-primary group-hover:text-primary transition-colors text-[24px]">corporate_fare</span>
<div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary peer-checked:bg-primary flex items-center justify-center transition-colors">
<div className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest opacity-0 peer-checked:opacity-100"></div>
</div>
</div>
<div>
<div className="font-title-md text-title-md text-on-surface">Enterprise</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-xs">Custom workflows</div>
</div>
</div>
</label>
</div>
</div>
<div className="flex flex-col gap-xs mt-sm w-full md:w-1/2">
<label className="font-label-md text-label-md text-on-surface-variant" htmlFor="assignedManager">Assigned Account Manager</label>
<div className="relative">
<select className="appearance-none w-full bg-surface-container-lowest border border-outline-variant/60 rounded-lg px-md py-sm pr-xl font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all h-[40px]" id="assignedManager">
<option value="unassigned">Unassigned</option>
<option value="sarah_j">Sarah Jenkins</option>
<option value="mike_r">Mike Ross</option>
<option value="david_c">David Chen</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 text-outline pointer-events-none">expand_more</span>
</div>
</div>
</section>
</form>
</div>
{/* Footer Actions */}
<footer className="px-xl py-lg border-t border-outline-variant/20 bg-surface-container/30 flex justify-end gap-sm items-center">
<button className="px-lg h-[40px] rounded-lg font-label-md text-label-md text-primary hover:bg-primary-container/10 transition-colors flex items-center justify-center" type="button">
                Cancel
            </button>
<button className="px-lg h-[40px] rounded-lg font-label-md text-label-md text-on-primary bg-primary hover:bg-surface-tint shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-xs" form="add-customer-form" type="submit">
                Create Customer
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</footer>
</main>

    </>
  );
};

export default AddNewCustomer;
