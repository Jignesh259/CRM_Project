import React from 'react';
import '../style/Dashboard.css';

const OrganizationalActivityFeed: React.FC = () => {
  return (
    <>
      
 SideNavBar Component 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md flex flex-col py-lg px-md z-50">
{/* Header / Logo */}
<div className="mb-xl px-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center shadow-sm">
<span className="material-symbols-outlined text-on-primary text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>sync</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md text-surface-bright font-bold">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise Suite</p>
</div>
</div>
</div>
{/* Navigation Links */}
<div className="flex flex-col gap-1 flex-1 overflow-y-auto scroll-hidden">
{/* Active Tab */}
<a className="flex items-center gap-3 px-sm py-2 rounded-lg bg-surface-variant/10 text-primary-fixed-dim font-bold transition-colors" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
{/* Inactive Tabs */}
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-body-md text-body-md">CRM</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Sales</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-body-md text-body-md">Inventory</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md text-body-md">Finance</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
</div>
{/* Bottom Actions */}
<div className="mt-auto pt-lg border-t border-surface-variant/10">
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-surface-variant/70 font-medium hover:bg-surface-variant/10 transition-colors scale-95 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
</div>
</nav>
 TopNavBar Component 
<header className="fixed docked full-width top-0 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full h-16 px-xl ml-[280px] max-w-[calc(100%-280px)] z-40">
{/* Search Bar */}
<div className="flex-1 max-w-md">
<div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-full focus-within:ring-2 focus-within:ring-primary border border-outline-variant/30 transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:outline-none font-body-md text-body-md text-on-surface w-full placeholder:text-on-surface-variant/70" placeholder="Search activities, users, or modules..." type="text" />
</div>
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-4">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant">
<span className="material-symbols-outlined">dark_mode</span>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-all text-on-surface-variant relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
</button>
<div className="h-6 w-px bg-outline-variant/30 mx-2"></div>
<button className="flex items-center gap-2 hover:bg-surface-container-high py-1 px-2 rounded-full transition-all">
<img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant/30 object-cover" data-alt="A professional headshot of a business executive in a modern office environment, clear lighting, sharp focus, corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbY3sl2lMEH4v7BoAsg8ytc5rN2gL-uEMMibDcPJk1jNkLDOLpDkXM80D2Rk9-EIafJjK_k5n_OYd5NivvCngVeW8oxYwi14wehbTEru8ahiZ9mDIi1zI044rmGmzqGhTUx9MzjTsu0f2e8UyS_2n5I3Rpn_CdaiqGzuvpytOoFSvnfB6tOhsPxSZYzLJ5xm0vL8cWESWnQCPYEzYSyJQz1rLFAu89NOPVcC535QnsyjR2y0ZwQxkKk1ctGI3vFemVEhDJPO4YhQQ" />
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">expand_more</span>
</button>
</div>
</header>
 Main Content Canvas 
<main className="ml-[280px] mt-16 p-margin-desktop min-h-[calc(100vh-64px)] flex gap-lg">
{/* Central Feed Area */}
<section className="flex-1 max-w-[800px]">
<div className="mb-xl flex items-end justify-between">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Activity Stream</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time overview of organization events.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 text-sm font-label-md text-primary bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">Mark all read</button>
</div>
</div>
{/* Timeline Structure */}
<div className="relative pl-10 border-l-2 border-surface-container-high space-y-xl before:absolute before:top-0 before:bottom-0 before:-left-[1px] before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-surface-container-high before:to-transparent">
{/* Activity Card 1 (Sales) */}
<div className="relative group">
{/* Timeline Node */}
<div className="absolute -left-[53px] top-1 w-10 h-10 rounded-full bg-surface border-2 border-primary-container flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-primary-container text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>sell</span>
</div>
{/* Card Content */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm p-lg hover:shadow-md hover:border-primary/30 transition-all duration-200">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded-full border border-outline-variant/30 object-cover" data-alt="A professional headshot of a female sales executive, smiling slightly, well-lit, corporate background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF-tdFgoBo09IqN9HGZuXNm56j69WULQullNpnJH1a5BNzFkj4XlWQ-7JPWWUkxy65emKTlXw6HY44ljJMn-TigHCgTkXAlORmI_pZRKtjwuCo3tSM-jB3yRCmMahxfAZ1ietaQSCGqUQ120cqc_GCTpoRhVpVqbc404nxI-wUvo9t_ZnYP9Dj-xW9NA6V-0kAQg60qv_41yC_HjTZRcVoIlcfBP-f3H5uzzXUJyQpXh_3KK_K5iyzFMcFbcTVbw9doD5elHeDUbI" />
<div>
<p className="font-body-md text-body-md text-on-surface"><span className="font-bold">Sarah Jenkins</span> closed a <span className="font-bold text-primary-container">$50k deal</span></p>
<p className="font-label-md text-label-md text-on-surface-variant mt-0.5">Acme Corp Enterprise License</p>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">10 mins ago</span>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-secondary-container/20 text-on-secondary-container font-label-md text-[10px] uppercase tracking-wider">Sales</span>
<span className="px-2 py-1 rounded bg-surface-container text-on-surface-variant font-label-md text-[10px] uppercase tracking-wider">High Priority</span>
</div>
<a className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline" href="#">
                                View Details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/* Activity Card 2 (CRM) */}
<div className="relative group">
<div className="absolute -left-[53px] top-1 w-10 h-10 rounded-full bg-surface border-2 border-tertiary flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-tertiary text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>person_add</span>
</div>
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm p-lg hover:shadow-md hover:border-tertiary/30 transition-all duration-200">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary font-bold font-title-md">
                                    MS
                                </div>
<div>
<p className="font-body-md text-body-md text-on-surface">New lead assigned to <span className="font-bold">Michael Scott</span></p>
<p className="font-label-md text-label-md text-on-surface-variant mt-0.5">From Web form: Enterprise Inquiry</p>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">1 hour ago</span>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-tertiary/10 text-tertiary font-label-md text-[10px] uppercase tracking-wider">CRM</span>
</div>
<a className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline" href="#">
                                View Lead <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
{/* Activity Card 3 (System) */}
<div className="relative group">
<div className="absolute -left-[53px] top-1 w-10 h-10 rounded-full bg-surface border-2 border-outline flex items-center justify-center shadow-sm z-10 transition-transform group-hover:scale-110">
<span className="material-symbols-outlined text-outline text-[20px]" style={{"fontVariationSettings": "'FILL' 1"}}>update</span>
</div>
<div className="glass-panel rounded-xl shadow-sm p-lg hover:shadow-md hover:border-outline/50 transition-all duration-200">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">dns</span>
</div>
<div>
<p className="font-body-md text-body-md text-on-surface font-bold">System update completed</p>
<p className="font-label-md text-label-md text-on-surface-variant mt-0.5">v2.4.1 deployed successfully without downtime.</p>
</div>
</div>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">3 hours ago</span>
</div>
<div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-md text-[10px] uppercase tracking-wider">System</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-lg text-center">
<button className="px-6 py-2 rounded-full border border-outline-variant/50 text-on-surface-variant font-label-md hover:bg-surface-container hover:text-on-surface transition-colors shadow-sm">Load More Activity</button>
</div>
</section>
{/* Right Sidebar (Filters & Widgets) */}
<aside className="w-[320px] shrink-0 flex flex-col gap-lg sticky top-[88px] h-[calc(100vh-120px)]">
{/* Real-time Pulse Widget (Bento Grid Style) */}
<div className="bg-inverse-surface text-surface-bright rounded-2xl p-lg shadow-md relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/30 blur-3xl rounded-full"></div>
<div className="relative z-10">
<h3 className="font-title-md text-title-md flex items-center gap-2 mb-md text-primary-fixed">
<span className="material-symbols-outlined animate-pulse text-[20px]">sensors</span>
                        Real-time Pulse
                    </h3>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-4 border border-surface-bright/10">
<p className="font-label-md text-label-md text-surface-variant/70 mb-1">Live Users</p>
<p className="font-display-lg text-display-lg leading-none">142</p>
<div className="mt-2 flex items-center gap-1 text-[12px] text-green-400">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +12%
                            </div>
</div>
<div className="bg-surface-container-lowest/10 backdrop-blur-sm rounded-xl p-4 border border-surface-bright/10">
<p className="font-label-md text-label-md text-surface-variant/70 mb-1">Active Sessions</p>
<p className="font-headline-lg text-headline-lg leading-none mt-2">1,084</p>
<div className="mt-2 flex items-center gap-1 text-[12px] text-surface-variant/70">
                                Across 4 regions
                            </div>
</div>
</div>
</div>
</div>
{/* Filters Component */}
<div className="bg-surface rounded-2xl border border-outline-variant/30 shadow-sm p-lg flex-1 overflow-y-auto scroll-hidden">
<div className="flex items-center justify-between mb-lg">
<h3 className="font-title-md text-title-md text-on-surface">Filters</h3>
<button className="font-label-md text-label-md text-primary hover:underline">Reset</button>
</div>
{/* Filter Category: Action Type */}
<div className="mb-xl">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Action Type</h4>
<div className="flex flex-col gap-2">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Sales</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">CRM (Leads/Accounts)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">System Notifications</span>
</label>
</div>
</div>
{/* Filter Category: Priority */}
<div className="mb-xl">
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Priority</h4>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-lg border border-primary text-primary bg-primary/5 font-label-md text-label-md transition-colors">High</button>
<button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md">Medium</button>
<button className="px-3 py-1.5 rounded-lg border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container transition-colors font-label-md text-label-md">Low</button>
</div>
</div>
{/* Filter Category: User */}
<div>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-3">Specific User</h4>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">person_search</span>
<input className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-on-surface placeholder:text-on-surface-variant/70" placeholder="Search team members..." type="text" />
</div>
{/* Quick User Chips */}
<div className="mt-3 flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-2 py-1 bg-surface-container rounded-full border border-outline-variant/20">
<img alt="Sarah J." className="w-4 h-4 rounded-full" data-alt="Small avatar of a female executive." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzHh3AAAl8hnhJWVaWxpLhxdDKUF5g2ER4OUMBozr2h8FxOHaLAP-wdJAT694ZsLRRcKL6KBIBkIxKUwp__2P-6V0T2hn78jhBgq9qSqDTrGarhmns8GhjtvDqbVoXOMaGXPEHWqHYgZANBlt28dAztn_mlKgU8AuiqesrcaIDMwuPUNw-TEJU-fAFOBLr9Tc__T92IfgxKoBOqvX9Xc1Gpi7GoKZkfwraMGz9bQeceWmDJlzIu4b1jFP2_4vAnPCn6zXzVBkuvKY" />
<span className="text-[11px] font-medium">Sarah J.</span>
<span className="material-symbols-outlined text-[12px] cursor-pointer hover:text-error">close</span>
</div>
</div>
</div>
</div>
</aside>
</main>

    </>
  );
};

export default OrganizationalActivityFeed;
