import React from 'react';
import '../style/Dashboard.css';

const EditLeadInformation: React.FC = () => {
  return (
    <>
      
 SideNavBar (Predicted Component) 
<nav className="hidden md:flex flex-col fixed left-0 top-0 h-full w-[280px] z-40 bg-inverse-surface dark:bg-surface-container-lowest shadow-lg py-lg px-md">
{/* Brand / Header */}
<div className="flex items-center gap-md mb-xl px-sm">
<div className="w-10 h-10 rounded-lg bg-surface-lowest flex items-center justify-center overflow-hidden shrink-0">
<span className="material-symbols-outlined text-surface-lowest" style={{"fontVariationSettings": "'FILL' 1"}}>hub</span>
</div>
<div>
<h1 className="font-title-md text-title-md text-surface-lowest">Lead Manager</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise Edition</p>
</div>
</div>
{/* CTA */}
<div className="mb-lg px-sm">
<button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container hover:opacity-90 transition-opacity rounded-md py-2 font-body-md font-medium shadow-sm h-[40px]">
<span className="material-symbols-outlined text-[18px]">add</span>
                New Lead
            </button>
</div>
{/* Main Navigation */}
<ul className="flex flex-col gap-sm flex-1">
{/* Active Tab: Leads */}
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md bg-primary-container/20 text-primary-fixed dark:text-primary border-l-4 border-primary-fixed transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">filter_list</span>
<span className="font-body-md text-body-md font-medium">Leads</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">view_kanban</span>
<span className="font-body-md text-body-md font-medium">Pipeline</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">task_alt</span>
<span className="font-body-md text-body-md font-medium">Tasks</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">history</span>
<span className="font-body-md text-body-md font-medium">Activities</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-body-md text-body-md font-medium">Contacts</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">handshake</span>
<span className="font-body-md text-body-md font-medium">Deals</span>
</a>
</li>
</ul>
{/* Footer Navigation */}
<ul className="flex flex-col gap-sm mt-auto pt-md border-t border-white/10">
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-body-md text-body-md font-medium">Support</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-sm py-2 rounded-md text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">manage_accounts</span>
<span className="font-body-md text-body-md font-medium">Account</span>
</a>
</li>
</ul>
</nav>
 Main Workspace Area 
<div className="flex-1 flex flex-col md:ml-[280px] w-full h-full relative">
{/* TopNavBar (Predicted Component) */}
<header className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md sticky top-0 z-30 border-b border-outline-variant/30 shadow-sm">
<div className="flex items-center gap-xl">
{/* Mobile Menu Trigger */}
<button className="md:hidden p-1 text-on-surface-variant cursor-pointer active:opacity-70 transition-all">
<span className="material-symbols-outlined">menu</span>
</button>
<div className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary hidden md:block">
                    CommSync CRM
                </div>
{/* Navigation Links */}
<nav className="hidden md:flex gap-lg">
<a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70" href="#">Dashboard</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70" href="#">Analytics</a>
<a className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors cursor-pointer active:opacity-70" href="#">Reports</a>
</nav>
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-md text-on-surface-variant">
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px]">search</span>
<input className="bg-surface-bright border border-outline-variant rounded-full pl-9 pr-4 py-1.5 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container w-[200px] transition-all" placeholder="Search..." type="text" />
</div>
<button className="p-1 hover:text-primary transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-1 hover:text-primary transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/50 overflow-hidden ml-sm">
<div className="w-full h-full bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
</div>
</div>
</header>
{/* Page Content Canvas */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-background">
{/* Breadcrumbs / Context */}
<div className="max-w-[800px] mx-auto mb-md flex items-center gap-xs font-body-md text-body-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Leads</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface font-medium">Edit Lead</span>
</div>
{/* Centered Modal-like Form Card */}
<div className="max-w-[800px] mx-auto bg-surface rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] border border-outline-variant/30 overflow-hidden relative">
{/* Glassmorphic Header */}
<div className="px-xl py-md border-b border-outline-variant/30 flex items-center justify-between bg-surface/50 backdrop-blur-md">
<div className="flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-title-md font-bold shrink-0">
                            ES
                        </div>
<div>
<h2 className="font-headline-lg-mobile md:font-headline-md text-headline-lg-mobile md:text-headline-md text-on-surface">Eleanor Shellstrop</h2>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-secondary-container inline-block"></span>
                                Qualified Prospect
                            </p>
</div>
</div>
<button className="text-on-surface-variant hover:text-on-surface p-1 rounded-md hover:bg-surface-variant/20 transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Form Body */}
<form className="p-xl grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-lg">
{/* Section: Basic Information */}
<div className="md:col-span-2 pb-sm border-b border-outline-variant/20">
<h3 className="font-title-md text-title-md text-on-surface">Basic Information</h3>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">First Name</label>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="text" value="Eleanor" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">Last Name</label>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="text" value="Shellstrop" />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">Company</label>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="text" value="Tech Solutions Inc." />
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">Job Title</label>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="text" value="Director of Operations" />
</div>
{/* Section: Contact Details */}
<div className="md:col-span-2 pt-md pb-sm border-b border-outline-variant/20 mt-sm">
<h3 className="font-title-md text-title-md text-on-surface">Contact Details</h3>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">mail</span>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md pl-10 pr-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="email" value="eleanor@techsolutions.com" />
</div>
</div>
<div className="space-y-xs">
<label className="font-label-md text-label-md text-on-surface-variant block">Phone Number</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">phone</span>
<input className="w-full bg-surface-bright border border-outline-variant rounded-md pl-10 pr-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px]" type="tel" value="(555) 123-4567" />
</div>
</div>
{/* Section: Pipeline & Notes */}
<div className="md:col-span-2 pt-md pb-sm border-b border-outline-variant/20 mt-sm">
<h3 className="font-title-md text-title-md text-on-surface">Pipeline Status</h3>
</div>
<div className="space-y-xs md:col-span-1">
<label className="font-label-md text-label-md text-on-surface-variant block">Lead Source</label>
<select className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px] appearance-none">
<option>Website Form</option>
<option selected>Inbound Call</option>
<option>Referral</option>
<option>Trade Show</option>
</select>
</div>
<div className="space-y-xs md:col-span-1">
<label className="font-label-md text-label-md text-on-surface-variant block">Pipeline Stage</label>
<select className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all h-[40px] appearance-none">
<option>New</option>
<option>Contacted</option>
<option selected>Qualified</option>
<option>Proposal Sent</option>
<option>Closed Won</option>
</select>
</div>
<div className="space-y-xs md:col-span-2">
<label className="font-label-md text-label-md text-on-surface-variant block">Internal Notes</label>
<textarea className="w-full bg-surface-bright border border-outline-variant rounded-md px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all resize-y" rows={4}>Eleanor called inquiring about the enterprise package. She mentioned they are currently evaluating options and looking to make a decision by Q3. Follow up next week with a tailored demo.</textarea>
</div>
</form>
{/* Footer Actions */}
<div className="px-xl py-md bg-surface-container-low border-t border-outline-variant/30 flex flex-col sm:flex-row justify-between items-center gap-md">
{/* Subtle Danger Action */}
<button className="flex items-center gap-xs font-body-md font-medium text-error hover:bg-error-container/30 px-3 py-2 rounded-md transition-colors w-full sm:w-auto justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">delete</span>
                        Delete Lead
                    </button>
{/* Primary Actions */}
<div className="flex items-center gap-md w-full sm:w-auto justify-end">
<button className="font-body-md font-medium text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/20 px-4 py-2 rounded-md transition-colors h-[40px]" type="button">
                            Cancel
                        </button>
<button className="font-body-md font-medium bg-primary-container text-on-primary-container hover:opacity-90 px-6 py-2 rounded-md shadow-sm transition-all h-[40px] flex items-center gap-xs" type="submit">
<span className="material-symbols-outlined text-[18px]">save</span>
                            Save Changes
                        </button>
</div>
</div>
</div>
{/* Spacer for bottom breathing room */}
<div className="h-12"></div>
</main>
</div>

    </>
  );
};

export default EditLeadInformation;
