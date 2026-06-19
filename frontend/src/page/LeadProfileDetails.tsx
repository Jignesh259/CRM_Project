import React from 'react';
import '../style/Dashboard.css';

const LeadProfileDetails: React.FC = () => {
  return (
    <>
      
 TopNavBar (Mobile) 
<header className="md:hidden bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-margin-mobile py-sm">
<div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary dark:text-inverse-primary">CommSync CRM</div>
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined cursor-pointer active:opacity-70 transition-all text-on-surface-variant hover:text-primary" data-icon="notifications">notifications</span>
<span className="material-symbols-outlined cursor-pointer active:opacity-70 transition-all text-on-surface-variant hover:text-primary" data-icon="settings">settings</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30" data-alt="A small circular profile picture of a professional user in a light-mode enterprise CRM setting, featuring a subtle border and clean lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuClki9BBDlaYh5Uua-5l6coNCK7G8vWAU0opNZARSiNcU4rpEDShG7GAcC2BnDytHTXhqTAMOGnR91iU8xmhK7XG0k013lhFWGTzH0YwxsYDoLmtc2XXoJSzRyfAoa7u0q-nsPzbI8UVNfrGiLmFm56ZqKNumpFXcu4M3OCuORhq1soPuZKo5DI4Gm61Udxw2BagE_E3pgT-1jJku5UyTsRbZVujDduMx1WMjAY798PRNiTAV3wh1kF_YzbF4NDovsg9ZvhSswtUik" />
</div>
</header>
 SideNavBar (Desktop) 
<nav className="hidden md:flex bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] z-40 shadow-xl flex-col h-full py-lg px-md duration-200 ease-in-out text-primary-fixed dark:text-primary font-body-md text-body-md font-medium">
<div className="mb-xl flex items-center gap-md px-md">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary font-bold">CC</div>
<div>
<div className="font-title-md text-title-md text-surface-lowest text-white">Lead Manager</div>
<div className="text-surface-variant/70 text-xs">Enterprise Edition</div>
</div>
</div>
<button className="mb-lg w-full bg-primary hover:bg-primary/90 text-on-primary py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span> New Lead
        </button>
<div className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-3 px-md py-2 rounded-lg bg-primary-container/20 text-primary-fixed dark:text-primary border-l-4 border-primary-fixed" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span> Leads
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="view_kanban">view_kanban</span> Pipeline
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="task_alt">task_alt</span> Tasks
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="history">history</span> Activities
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="person">person</span> Contacts
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="handshake">handshake</span> Deals
            </a>
</div>
<div className="mt-auto border-t border-white/10 pt-md flex flex-col gap-1">
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span> Support
            </a>
<a className="flex items-center gap-3 px-md py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="manage_accounts">manage_accounts</span> Account
            </a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] p-margin-mobile md:p-margin-desktop w-full max-w-[container-max] mx-auto flex flex-col gap-lg">
{/* TopAppBar (Desktop Navigation Links Placeholder - Suppressed on transactional/details screens per semantic shell mandate, but showing breadcrumbs/back action) */}
<div className="hidden md:flex justify-between items-center mb-md">
<button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm font-medium">
<span className="material-symbols-outlined text-sm">arrow_back</span> Back to Leads
            </button>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined cursor-pointer active:opacity-70 transition-all text-on-surface-variant hover:text-primary">search</span>
<span className="material-symbols-outlined cursor-pointer active:opacity-70 transition-all text-on-surface-variant hover:text-primary">notifications</span>
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30 ml-sm" data-alt="A small circular profile picture of a professional user in a light-mode enterprise CRM setting, featuring a subtle border and clean lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHxfroGyP6MGgJb__nXPoXKk97heAKzmmGPDv3CiONGdSyPhmUPoGMSzWYN5rknvL0nEuPlNh7vMpdr6rvdmybu_u-MmWiVZrf4VM-TxdSpum3RkqETAjIqT4e1VxDqhz3Z9o5du_af3o9Z7q66m2vs0JSKMgwrqw-_PfXvW_ReVl90BnCDIIJ-FBhqaqCp7qluNvpiHZUiP41JXo0-wy_GKXE9ukFVZCQxHm3GX_GysiMf51l9zitzWMcO-Jsw8_9v_RWUMrWHqI" />
</div>
</div>
{/* Header Section */}
<header className="glass-card rounded-xl p-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-md">
<div className="flex items-center gap-md">
<div className="w-16 h-16 rounded-full bg-surface-container-high border border-outline-variant/20 flex items-center justify-center overflow-hidden flex-shrink-0">
<img alt="Robert Fox" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged man with short hair, wearing a business casual shirt, presented in a circular avatar format suitable for a modern SaaS CRM interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoSB08qRJm72esS_wVBOQSQwLAoqYH7MCMlCSortYrndQ_UfPGTH97uRn06Xd4fOmkgmzsLWAMiS97I6TSutt86rcjwbzHoxGas9fBKpZZD49VXBfZg8nYztCNB8FXMoNa3ZKAGQCVseg0xxdAlHy0EWCQtcKi6uUWofz7v6oO0mgzgkeLfO22HV_jvYzy-6_pnK2-DQ6t-6jR805lzbdrNxJwxQ4Fi5i9Wtvda3hfL1VlB9gxG-nTwPojUuArfB_slc5oSdFkH8E" />
</div>
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-3">
                        Robert Fox
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary-fixed/30 text-on-primary-fixed text-xs font-medium border border-primary-fixed-dim/50">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Qualified
                        </span>
</h1>
<div className="flex items-center gap-4 text-on-surface-variant mt-1">
<span className="flex items-center gap-1 font-body-md text-body-md"><span className="material-symbols-outlined text-[16px]">business</span> TechNova Solutions</span>
<span className="flex items-center gap-1 font-body-md text-body-md"><span className="material-symbols-outlined text-[16px]">location_on</span> San Francisco, CA</span>
</div>
</div>
</div>
<div className="flex flex-row gap-sm w-full md:w-auto mt-4 md:mt-0">
<button className="flex-1 md:flex-none px-4 py-2 rounded-lg border border-outline-variant/50 hover:bg-surface-container transition-colors text-on-surface font-medium flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">edit</span> Edit
                </button>
<button className="flex-1 md:flex-none px-4 py-2 rounded-lg bg-primary hover:bg-primary/90 text-on-primary transition-colors font-medium flex items-center justify-center gap-2 shadow-sm">
                    Convert to Deal
                </button>
</div>
</header>
{/* Two Column Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg items-start">
{/* Left Column: Profile & Activity (Spans 8 cols on desktop) */}
<div className="lg:col-span-8 flex flex-col gap-lg">
{/* Profile & Insights Bento Box */}
<section className="glass-card rounded-xl p-0 overflow-hidden border-t-4 border-t-primary/80">
<div className="px-lg py-md border-b border-outline-variant/20 bg-surface/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person_search</span> Profile &amp; Insights
                        </h2>
</div>
<div className="p-lg grid grid-cols-1 md:grid-cols-2 gap-y-md gap-x-lg">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Email</span>
<a className="text-primary hover:underline font-body-md text-body-md flex items-center gap-2" href="mailto:robert.fox@technova.com">
                                robert.fox@technova.com <span className="material-symbols-outlined text-[14px]">content_copy</span>
</a>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Phone</span>
<a className="text-on-surface font-body-md text-body-md" href="tel:+14155550198">+1 (415) 555-0198</a>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Lead Source</span>
<span className="text-on-surface font-body-md text-body-md inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-surface-variant">campaign</span> Q3 Webinar Campaign
                            </span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Est. Deal Value</span>
<span className="text-on-surface font-title-md text-title-md text-green-700 dark:text-green-400">$45,000</span>
</div>
<div className="md:col-span-2 pt-md mt-sm border-t border-outline-variant/20 flex flex-col gap-2">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Tags</span>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed text-xs font-medium border border-secondary-fixed-dim/30">Enterprise</span>
<span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface text-xs font-medium border border-outline-variant/30">Decision Maker</span>
<span className="px-3 py-1 rounded-full bg-tertiary-fixed/40 text-on-tertiary-fixed text-xs font-medium border border-tertiary-fixed-dim/30">High Priority</span>
</div>
</div>
</div>
</section>
{/* Activity Timeline */}
<section className="glass-card rounded-xl p-0 overflow-hidden">
<div className="px-lg py-md border-b border-outline-variant/20 bg-surface/30 flex justify-between items-center">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-primary">schedule</span> Activity Timeline
                        </h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Log Call">
<span className="material-symbols-outlined text-[18px]">call</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Send Email">
<span className="material-symbols-outlined text-[18px]">mail</span>
</button>
<button className="p-1.5 rounded-md hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Add Note">
<span className="material-symbols-outlined text-[18px]">edit_note</span>
</button>
</div>
</div>
<div className="p-lg">
<div className="relative flex flex-col gap-md">
{/* Timeline Item 1: Email */}
<div className="relative timeline-item pl-10">
<div className="timeline-line"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary-fixed/40 border border-primary-fixed flex items-center justify-center text-primary z-10">
<span className="material-symbols-outlined text-[16px]">mail</span>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-md shadow-sm">
<div className="flex justify-between items-start mb-1">
<div className="font-body-md text-body-md font-medium text-on-surface">Follow-up Email Sent</div>
<div className="text-xs text-on-surface-variant">2 hours ago</div>
</div>
<p className="text-sm text-on-surface-variant mt-1 line-clamp-2">Sent the Q3 product roadmap as discussed. Waiting for their team to review before scheduling the technical deep dive next week.</p>
<div className="mt-2 text-xs text-primary flex items-center gap-1 cursor-pointer">
<span className="material-symbols-outlined text-[14px]">attachment</span> roadmap_q3.pdf
                                    </div>
</div>
</div>
{/* Timeline Item 2: Call */}
<div className="relative timeline-item pl-10">
<div className="timeline-line"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-secondary-fixed/40 border border-secondary-fixed flex items-center justify-center text-secondary z-10">
<span className="material-symbols-outlined text-[16px]">call</span>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-md shadow-sm">
<div className="flex justify-between items-start mb-1">
<div className="font-body-md text-body-md font-medium text-on-surface">Discovery Call</div>
<div className="text-xs text-on-surface-variant">Yesterday</div>
</div>
<p className="text-sm text-on-surface-variant mt-1">Discussed pain points with current legacy system. They are looking to migrate 50 users by Q4. Budget is approved.</p>
<div className="mt-2 flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-surface-container text-on-surface-variant text-[10px] uppercase font-bold">Outcome: Positive</span>
</div>
</div>
</div>
{/* Timeline Item 3: Note */}
<div className="relative timeline-item pl-10">
<div className="timeline-line"></div>
<div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center text-on-surface-variant z-10">
<span className="material-symbols-outlined text-[16px]">edit_note</span>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/20 rounded-lg p-md shadow-sm">
<div className="flex justify-between items-start mb-1">
<div className="font-body-md text-body-md font-medium text-on-surface">Lead Created</div>
<div className="text-xs text-on-surface-variant">Oct 12, 2023</div>
</div>
<p className="text-sm text-on-surface-variant mt-1">Lead imported from Q3 Webinar attendee list via Marketing automation sync.</p>
</div>
</div>
</div>
</div>
</section>
</div>
{/* Right Column: Sidebar Actions & Tasks (Spans 4 cols on desktop) */}
<div className="lg:col-span-4 flex flex-col gap-lg">
{/* Quick Actions Widget */}
<section className="glass-card rounded-xl p-0 overflow-hidden">
<div className="px-md py-sm border-b border-outline-variant/20 bg-surface/30">
<h3 className="font-title-md text-title-md text-on-surface">Quick Actions</h3>
</div>
<div className="p-md flex flex-col gap-sm">
<button className="w-full bg-surface-container-lowest border border-outline-variant/30 hover:border-primary hover:text-primary hover:shadow-md transition-all rounded-lg p-3 flex flex-col items-center justify-center gap-2 group">
<div className="w-10 h-10 rounded-full bg-primary-fixed/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">event</span>
</div>
<span className="font-body-md text-body-md font-medium">Schedule Meeting</span>
</button>
<div className="grid grid-cols-2 gap-sm">
<button className="bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container transition-colors rounded-lg p-2 flex flex-col items-center justify-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-surface-variant text-[20px]">assignment</span>
<span className="text-xs font-medium">New Task</span>
</button>
<button className="bg-surface-container-lowest border border-outline-variant/30 hover:bg-surface-container transition-colors rounded-lg p-2 flex flex-col items-center justify-center gap-1 text-on-surface">
<span className="material-symbols-outlined text-surface-variant text-[20px]">description</span>
<span className="text-xs font-medium">Quote</span>
</button>
</div>
</div>
</section>
{/* Associated Tasks Widget */}
<section className="glass-card rounded-xl p-0 overflow-hidden">
<div className="px-md py-sm border-b border-outline-variant/20 bg-surface/30 flex justify-between items-center">
<h3 className="font-title-md text-title-md text-on-surface">Upcoming Tasks</h3>
<button className="text-primary hover:underline text-sm font-medium">View All</button>
</div>
<div className="p-0">
<div className="flex items-start gap-3 p-md border-b border-outline-variant/10 hover:bg-surface/50 transition-colors cursor-pointer">
<input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<div>
<div className="font-body-md text-body-md font-medium text-on-surface leading-tight">Send pricing proposal</div>
<div className="text-xs text-error mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span> Due Today
                                </div>
</div>
</div>
<div className="flex items-start gap-3 p-md border-b border-outline-variant/10 hover:bg-surface/50 transition-colors cursor-pointer">
<input className="mt-1 rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<div>
<div className="font-body-md text-body-md font-medium text-on-surface leading-tight">Follow up on technical review</div>
<div className="text-xs text-on-surface-variant mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 18, 2023
                                </div>
</div>
</div>
<div className="flex items-start gap-3 p-md hover:bg-surface/50 transition-colors cursor-pointer opacity-60">
<input checked className="mt-1 rounded border-outline-variant text-primary focus:ring-primary w-4 h-4" type="checkbox" />
<div>
<div className="font-body-md text-body-md font-medium text-on-surface leading-tight line-through">Initial discovery call</div>
<div className="text-xs text-on-surface-variant mt-1">Completed</div>
</div>
</div>
</div>
</section>
{/* Company Snippet Widget */}
<section className="glass-card rounded-xl p-0 overflow-hidden opacity-90">
<div className="p-md flex items-center gap-3">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[24px]">domain</span>
</div>
<div>
<h4 className="font-title-md text-title-md text-on-surface text-sm">TechNova Solutions</h4>
<a className="text-xs text-primary hover:underline flex items-center gap-1" href="#">technova.com <span className="material-symbols-outlined text-[12px]">open_in_new</span></a>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
};

export default LeadProfileDetails;
