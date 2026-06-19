import React from 'react';
import '../style/Dashboard.css';

const CustomerProfileOverview: React.FC = () => {
  return (
    <>
      
 Shared Component: SideNavBar 
<nav className="fixed left-0 top-0 h-full w-[280px] hidden md:flex flex-col p-md z-50 shadow-xl bg-inverse-surface dark:bg-surface-container-lowest">
{/* Header */}
<div className="flex items-center gap-sm mb-xl px-sm pt-sm">
<div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-headline-md font-black">
                C
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-black text-primary-fixed dark:text-primary">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant/70">Enterprise Suite</p>
</div>
</div>
{/* Create Button */}
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md py-sm px-md rounded-lg flex items-center justify-center gap-xs mb-lg transition-colors">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
            Create New
        </button>
{/* Navigation Tabs */}
<div className="flex-1 overflow-y-auto space-y-xs">
{/* Dashboard */}
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-title-md text-title-md">Dashboard</span>
</a>
{/* CRM (Active) */}
<a className="flex items-center gap-sm px-md py-sm text-primary-fixed-dim bg-white/10 rounded-lg font-medium transition-all duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>group</span>
<span className="font-title-md text-title-md">CRM</span>
</a>
{/* Sales */}
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-title-md text-title-md">Sales</span>
</a>
{/* Inventory */}
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-title-md text-title-md">Inventory</span>
</a>
{/* Finance */}
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-title-md text-title-md">Finance</span>
</a>
{/* Reports */}
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="font-title-md text-title-md">Reports</span>
</a>
</div>
{/* Footer Tabs */}
<div className="pt-md border-t border-white/10 mt-auto space-y-xs">
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-title-md text-title-md">Settings</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span className="font-title-md text-title-md">Support</span>
</a>
</div>
</nav>
 Main Content Area 
<div className="md:ml-[280px] min-h-screen flex flex-col relative bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-low via-background to-background">
{/* Shared Component: TopNavBar */}
<header className="sticky top-0 z-40 flex justify-between items-center px-lg py-sm w-full bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
{/* Left Side: Search/Breadcrumbs */}
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md hidden sm:block">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant/50 rounded-full py-[6px] pl-2xl pr-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary-fixed-dim outline-none transition-all" placeholder="Search profiles, orders..." type="text" />
</div>
</div>
{/* Right Side: Actions */}
<div className="flex items-center gap-sm">
<button className="p-sm rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="p-sm rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined">settings</span>
</button>
<button className="p-sm rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors active:scale-95 duration-150 hidden sm:block">
<span className="material-symbols-outlined">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/30 mx-sm hidden sm:block"></div>
<img alt="User profile avatar" className="w-8 h-8 rounded-full border border-outline-variant/30 cursor-pointer hover:ring-2 hover:ring-primary-fixed-dim transition-all" data-alt="A professional headshot of a middle-aged corporate executive. He has short salt-and-pepper hair and a warm smile. He is wearing a crisp white dress shirt with no tie. The background is slightly blurred out, suggesting a bright, modern office environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7GztwTvQmPXZcLqu9Nqb-eZAU2mCMk_eck--WvqMf1wz0kIoCqqqcufnf-Nddrpiwh6NqWh50fyJ0fcX0pnxx4rTNmC0nanPd_ag8uh-BYE3QRr8lHUxlx-na5c84gQgIYuxFwLCNxdZZMEyryQ76aHtVPF1d02FyCOa6Uk14D2K47wDlBd2uYTB39nqC8OTD73EmkjNZyIwrYi10x1URdwNvjk7TWAvW4hK8pZ1MOuiuhTlAcyBt8uuJJwCqy1OM5BeQNcijgoc" />
</div>
</header>
{/* Main Workspace Padding */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop">
{/* Breadcrumb Navigation */}
<nav className="flex items-center gap-xs text-outline mb-lg">
<a className="hover:text-primary transition-colors font-label-md text-label-md" href="#">CRM</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<a className="hover:text-primary transition-colors font-label-md text-label-md" href="#">Customers</a>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
<span className="text-on-surface font-label-md text-label-md font-medium">Eleanor Vance</span>
</nav>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* 1. Customer Header Profile (Span 12) */}
<div className="col-span-1 md:col-span-12 glass-card rounded-xl p-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-lg transition-all duration-300">
<div className="flex items-center gap-lg">
<div className="relative">
<img alt="Eleanor Vance Profile Picture" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-surface shadow-sm" data-alt="A high-quality professional headshot of a mature woman in her late 40s. She has shoulder-length brown hair and a confident, approachable expression. She is wearing a modern navy blue blazer over a light blouse. The background is a sophisticated, softly lit modern corporate office space, adhering to a premium light-mode visual aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl92kwsywWHn6geYAgrFnGG1VFMIYYoZfftFEeVJLvV_-86GlnvVQv5en-54Mz7o475VGC2CRpeYJSYrs3LIExgTQwoK9COm5gI7D_lGopgtc7ggTyuEyYuBmIctQr8wCpWRrhaLTkMNea1-iDV-ZFzQuWLcj6iaGnFh5WX1AX52ApPu8jJ7ltlvjXv2vzwW7xABb62kVn3zcMdFUMeT4PitZiM098FiHJH8IRTp96-N2eL_AnhiA0ERknb3C9jB1Bj60xQkxUG9Y" />
<span className="absolute bottom-1 right-1 w-4 h-4 bg-[#10b981] border-2 border-surface rounded-full"></span>
</div>
<div>
<div className="flex items-center gap-sm mb-xs">
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">Eleanor Vance</h2>
<span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed rounded-full font-label-md text-label-md uppercase tracking-wider">Key Account</span>
</div>
<p className="font-title-md text-title-md text-on-surface-variant flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">domain</span>
                                VP of Procurement at <span className="font-bold text-primary">Acme Corp</span>
</p>
<p className="font-body-md text-body-md text-outline mt-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                                San Francisco, CA (PST)
                            </p>
</div>
</div>
<div className="flex items-center gap-sm w-full md:w-auto">
<button className="flex-1 md:flex-none px-md py-sm border border-outline-variant rounded-lg font-title-md text-title-md text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[20px]">edit</span>
                            Edit
                        </button>
<button className="flex-1 md:flex-none px-md py-sm bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary-container shadow-sm hover:shadow transition-all flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[20px]">add_call</span>
                            Log Activity
                        </button>
</div>
</div>
{/* 2. Key Metrics Card (Span 4) */}
<div className="col-span-1 md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">monitoring</span>
                        Account Health
                    </h3>
<div className="space-y-lg">
<div>
<p className="font-label-md text-label-md text-outline-variant mb-xs">Lifetime Value (LTV)</p>
<p className="font-display-lg text-display-lg text-on-surface tracking-tight">$845k</p>
<p className="font-label-md text-label-md text-[#10b981] flex items-center gap-xs mt-xs">
<span className="material-symbols-outlined text-[14px]">trending_up</span>
                                +12% vs last year
                            </p>
</div>
<div>
<div className="flex justify-between items-end mb-xs">
<p className="font-label-md text-label-md text-outline-variant">Health Score</p>
<p className="font-title-md text-title-md text-[#10b981]">92 / 100 (Excellent)</p>
</div>
<div className="w-full bg-surface-variant rounded-full h-2">
<div className="bg-[#10b981] h-2 rounded-full" style={{"width": "92%"}}></div>
</div>
</div>
</div>
</div>
{/* 3. Contact Information (Span 4) */}
<div className="col-span-1 md:col-span-4 glass-card rounded-xl p-lg transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary">contact_page</span>
                        Contact Information
                    </h3>
<ul className="space-y-md mt-md">
<li className="flex items-start gap-md group cursor-pointer hover:bg-surface-container-low p-xs rounded-lg -mx-xs transition-colors">
<span className="material-symbols-outlined text-outline mt-xs">mail</span>
<div>
<p className="font-label-md text-label-md text-outline-variant">Email</p>
<p className="font-body-md text-body-md text-primary group-hover:underline">eleanor.vance@acmecorp.com</p>
</div>
</li>
<li className="flex items-start gap-md group cursor-pointer hover:bg-surface-container-low p-xs rounded-lg -mx-xs transition-colors">
<span className="material-symbols-outlined text-outline mt-xs">call</span>
<div>
<p className="font-label-md text-label-md text-outline-variant">Work Phone</p>
<p className="font-body-md text-body-md text-on-surface">+1 (415) 555-0198</p>
</div>
</li>
<li className="flex items-start gap-md group cursor-pointer hover:bg-surface-container-low p-xs rounded-lg -mx-xs transition-colors">
<span className="material-symbols-outlined text-outline mt-xs">link</span>
<div>
<p className="font-label-md text-label-md text-outline-variant">LinkedIn</p>
<p className="font-body-md text-body-md text-primary group-hover:underline">linkedin.com/in/evance</p>
</div>
</li>
</ul>
</div>
{/* 4. Quick Actions / Links (Span 4) */}
<div className="col-span-1 md:col-span-4 glass-card rounded-xl p-lg transition-all duration-300 flex flex-col">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary">bolt</span>
                        Quick Actions
                    </h3>
<div className="grid grid-cols-2 gap-sm mt-md flex-1">
<button className="flex flex-col items-center justify-center gap-sm p-md bg-surface border border-outline-variant/30 rounded-lg hover:border-primary hover:text-primary transition-all text-on-surface-variant group">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">receipt_long</span>
<span className="font-label-md text-label-md">View Invoices</span>
</button>
<button className="flex flex-col items-center justify-center gap-sm p-md bg-surface border border-outline-variant/30 rounded-lg hover:border-primary hover:text-primary transition-all text-on-surface-variant group">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">shopping_cart</span>
<span className="font-label-md text-label-md">Active Orders</span>
</button>
<button className="flex flex-col items-center justify-center gap-sm p-md bg-surface border border-outline-variant/30 rounded-lg hover:border-primary hover:text-primary transition-all text-on-surface-variant group">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">support_agent</span>
<span className="font-label-md text-label-md">Support Tickets</span>
</button>
<button className="flex flex-col items-center justify-center gap-sm p-md bg-surface border border-outline-variant/30 rounded-lg hover:border-primary hover:text-primary transition-all text-on-surface-variant group">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">description</span>
<span className="font-label-md text-label-md">Contracts</span>
</button>
</div>
</div>
{/* 5. Recent Activity Timeline (Span 8) */}
<div className="col-span-1 md:col-span-8 glass-card rounded-xl p-lg transition-all duration-300">
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-sm mb-lg">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">history</span>
                            Recent Activity
                        </h3>
<button className="text-primary font-label-md text-label-md hover:underline">View All</button>
</div>
<div className="relative pl-sm">
{/* Timeline Line */}
<div className="absolute left-[15px] top-2 bottom-0 w-px bg-outline-variant/50"></div>
{/* Activity Item 1 */}
<div className="relative flex items-start gap-md mb-lg">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-sm">
<span className="material-symbols-outlined text-on-primary-fixed text-[16px]">call</span>
</div>
<div className="bg-surface border border-outline-variant/30 rounded-lg p-md flex-1">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-title-md text-title-md text-on-surface">Discovery Call Completed</h4>
<span className="font-label-md text-label-md text-outline">Today, 10:30 AM</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Discussed Q3 procurement needs. Eleanor mentioned they are looking to expand their vendor list for hardware components.</p>
<div className="mt-sm flex gap-sm">
<span className="px-2 py-1 bg-surface-container-high text-on-surface-variant rounded font-label-md text-label-md text-[10px]">Logged by: Sarah J.</span>
</div>
</div>
</div>
{/* Activity Item 2 */}
<div className="relative flex items-start gap-md mb-lg">
<div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-sm">
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">mail</span>
</div>
<div className="bg-surface border border-outline-variant/30 rounded-lg p-md flex-1">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-title-md text-title-md text-on-surface">Email Sent: Proposal Draft</h4>
<span className="font-label-md text-label-md text-outline">Yesterday, 4:15 PM</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Sent the initial draft for the Enterprise license renewal proposal.</p>
</div>
</div>
{/* Activity Item 3 */}
<div className="relative flex items-start gap-md">
<div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center shrink-0 z-10 border-4 border-surface shadow-sm">
<span className="material-symbols-outlined text-[#10b981] text-[16px]">check_circle</span>
</div>
<div className="bg-surface border border-outline-variant/30 rounded-lg p-md flex-1">
<div className="flex justify-between items-start mb-xs">
<h4 className="font-title-md text-title-md text-on-surface">Invoice #INV-2023-089 Paid</h4>
<span className="font-label-md text-label-md text-outline">Oct 12, 2023</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-xs">
                                    Payment received for $45,000.00 via Wire Transfer.
                                </p>
</div>
</div>
</div>
</div>
{/* 6. Tags & Attributes (Span 4) */}
<div className="col-span-1 md:col-span-4 glass-card rounded-xl p-lg transition-all duration-300">
<h3 className="font-title-md text-title-md text-on-surface mb-md flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary">sell</span>
                        Tags &amp; Segments
                    </h3>
<div className="flex flex-wrap gap-sm mt-md">
<span className="px-sm py-1 bg-surface-container border border-outline-variant/50 rounded-full font-label-md text-label-md text-on-surface">Enterprise</span>
<span className="px-sm py-1 bg-surface-container border border-outline-variant/50 rounded-full font-label-md text-label-md text-on-surface">West Coast Region</span>
<span className="px-sm py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md text-label-md">High Priority</span>
<span className="px-sm py-1 bg-surface-container border border-outline-variant/50 rounded-full font-label-md text-label-md text-on-surface">Hardware Tech</span>
<button className="px-sm py-1 border border-dashed border-outline hover:border-primary text-outline hover:text-primary rounded-full font-label-md text-label-md flex items-center gap-xs transition-colors">
<span className="material-symbols-outlined text-[14px]">add</span> Add Tag
                        </button>
</div>
<h3 className="font-title-md text-title-md text-on-surface mt-xl mb-md flex items-center gap-sm border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary">notes</span>
                        Internal Notes
                    </h3>
<p className="font-body-md text-body-md text-on-surface-variant italic bg-surface-container-low p-sm rounded-lg border border-outline-variant/20">
                        "Eleanor prefers concise email updates over long calls. Make sure all hardware specs are attached upfront in future proposals."
                    </p>
</div>
</div>
</main>
</div>

    </>
  );
};

export default CustomerProfileOverview;
