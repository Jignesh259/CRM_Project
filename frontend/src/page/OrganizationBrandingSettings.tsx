import React from 'react';
import '../style/Dashboard.css';

const OrganizationBrandingSettings: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col bg-inverse-surface text-primary-fixed font-label-md text-label-md fixed left-0 top-0 h-full w-[280px] border-r border-outline-variant/10 shadow-md py-lg px-md z-50">
<div className="mb-xl flex items-center gap-md px-md">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl">rocket_launch</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md text-surface-container-lowest">CommSync</h1>
<p className="text-surface-variant text-xs opacity-80">Enterprise ERP</p>
</div>
</div>
<div className="flex-1 overflow-y-auto space-y-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">insights</span>
                Analytics
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">group</span>
                Customers
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">leaderboard</span>
                Sales Pipeline
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">description</span>
                Reports
            </a>
</div>
<div className="mt-auto pt-lg border-t border-outline-variant/10 space-y-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">contact_support</span>
                Support
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container text-on-primary-container active:translate-x-1" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] min-h-screen">
{/* TopNavBar */}
<header className="bg-surface w-full h-16 border-b border-outline-variant shadow-sm flex justify-between items-center px-lg sticky top-0 z-40 backdrop-blur-md">
<div className="flex items-center gap-md">
<span className="md:hidden text-title-md font-title-md text-primary">CommSync</span>
<div className="hidden md:flex items-center bg-surface-container-low rounded-full px-md py-xs border border-outline-variant/30">
<span className="material-symbols-outlined text-on-surface-variant mr-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant/70 w-64" placeholder="Search settings..." type="text" />
</div>
</div>
<div className="flex items-center gap-md">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined">help</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary font-bold border-b-2 border-primary hover:bg-surface-container-low transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden ml-sm border border-outline-variant/20">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a business executive in a well-lit modern office setting. The individual has a confident, approachable expression, wearing smart-casual business attire. The lighting is soft and natural, creating a high-quality corporate aesthetic. The background is slightly blurred, featuring subtle architectural elements in a light-mode color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgPYQZxNd3tsgkcguWwnUMSy9mMbW9QoG5cy3cUT619mFEpYEZ-eTM5fz-qEKnNvBMtuWTawD5xPGBJjIQAORQ86zm7zuYY7TUugNb1U0nV5lRrjKhgIYiq0iL4rHOaNZd4qpOp89sdkJARgrul7VGan-PuEpSRbjqXZntIj8j8rFwYgCIlRrjQWF8tJaXoVKtETZ7Yf1ICrqaYB1vfzKcXHh7dgjPXR39PgQuBqMHXSyLnc6O4ME11ILwlk-Auk9EBT-m9GdC9Ts" />
</div>
</div>
</header>
{/* Page Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface-container-lowest relative overflow-hidden">
{/* Decorative Background Element */}
<div className="absolute top-0 right-0 w-1/2 h-96 bg-gradient-to-bl from-primary-container/10 to-transparent rounded-bl-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="mb-xl">
<h2 className="text-headline-lg font-headline-lg text-on-background mb-xs">Company Settings</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">Manage your organization's identity, localization, and core information.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Settings Navigation (Bento Grid Style) */}
<div className="md:col-span-1 space-y-md">
<div className="glass-panel rounded-xl p-md">
<nav className="space-y-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg bg-surface-container-low text-primary font-label-md text-label-md font-semibold" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>domain</span>
                                    Organization Info
                                </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">public</span>
                                    Localization
                                </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">group_add</span>
                                    Team &amp; Roles
                                </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">credit_card</span>
                                    Billing
                                </a>
</nav>
</div>
</div>
{/* Main Form Area */}
<div className="md:col-span-2 space-y-lg">
{/* Logo Upload Section */}
<div className="glass-panel rounded-xl p-lg">
<h3 className="text-title-md font-title-md text-on-surface mb-md">Company Logo</h3>
<div className="flex items-start gap-lg">
<div className="w-24 h-24 rounded-lg bg-surface-container border border-outline-variant/50 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm relative group">
<span className="material-symbols-outlined text-outline text-3xl group-hover:hidden">image</span>
<div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center cursor-pointer transition-all">
<span className="material-symbols-outlined text-white">upload</span>
</div>
</div>
<div>
<p className="text-body-md font-body-md text-on-surface-variant mb-md">Upload your organization's logo. This will be visible on invoices, reports, and team portals.</p>
<div className="flex gap-md">
<button className="bg-surface-container-low text-on-surface border border-outline-variant hover:bg-surface-container-high px-md py-sm rounded-lg font-label-md text-label-md transition-colors">
                                            Upload Image
                                        </button>
<button className="text-error hover:bg-error-container/20 px-md py-sm rounded-lg font-label-md text-label-md transition-colors">
                                            Remove
                                        </button>
</div>
<p className="text-label-md font-label-md text-outline mt-sm">Recommended: 512x512px, PNG or SVG.</p>
</div>
</div>
</div>
{/* General Info Form */}
<div className="glass-panel rounded-xl p-lg">
<h3 className="text-title-md font-title-md text-on-surface mb-md">General Information</h3>
<form className="space-y-md">
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label className="form-label">Organization Name</label>
<input className="input-field" placeholder="Enter company name" type="text" value="Acme Corporation" />
</div>
<div>
<label className="form-label">Industry</label>
<select className="input-field appearance-none">
<option>Technology &amp; Software</option>
<option>Manufacturing</option>
<option>Financial Services</option>
<option>Healthcare</option>
</select>
</div>
</div>
<div>
<label className="form-label">Tax ID / VAT Number</label>
<input className="input-field" placeholder="e.g. GB123456789" type="text" value="US-123456789" />
</div>
<div>
<label className="form-label">Headquarters Address</label>
<textarea className="input-field resize-none" placeholder="Enter full address" rows={3}>123 Innovation Drive
Tech Park, Suite 400
San Francisco, CA 94105</textarea>
</div>
</form>
</div>
{/* Localization */}
<div className="glass-panel rounded-xl p-lg">
<h3 className="text-title-md font-title-md text-on-surface mb-md">Localization</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label className="form-label">Primary Language</label>
<select className="input-field appearance-none">
<option>English (US)</option>
<option>English (UK)</option>
<option>Spanish</option>
<option>French</option>
</select>
</div>
<div>
<label className="form-label">Base Currency</label>
<select className="input-field appearance-none">
<option>USD - US Dollar</option>
<option>EUR - Euro</option>
<option>GBP - British Pound</option>
</select>
</div>
<div className="md:col-span-2">
<label className="form-label">Timezone</label>
<select className="input-field appearance-none">
<option>(GMT-08:00) Pacific Time (US &amp; Canada)</option>
<option>(GMT-05:00) Eastern Time (US &amp; Canada)</option>
<option>(GMT+00:00) Greenwich Mean Time</option>
</select>
</div>
</div>
</div>
{/* Actions */}
<div className="flex justify-end gap-md pt-md border-t border-outline-variant/30">
<button className="px-lg py-sm rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-low font-label-md text-label-md transition-colors h-10">
                                Discard Changes
                            </button>
<button className="px-lg py-sm rounded-lg bg-[#1976D2] text-white hover:bg-primary hover:shadow-md font-label-md text-label-md transition-all duration-200 h-10">
                                Update Organization
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default OrganizationBrandingSettings;
