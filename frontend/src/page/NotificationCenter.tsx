import React from 'react';
import '../style/Dashboard.css';

const NotificationCenter: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col bg-inverse-surface text-surface-variant fixed left-0 top-0 h-full w-[280px] shadow-xl py-lg space-y-sm z-50">
<div className="px-lg pb-md flex items-center gap-sm">
<img alt="Company Logo" className="rounded-lg w-10 h-10 object-cover" data-alt="A modern, abstract company logo for a tech enterprise, utilizing primary blue and sharp geometric shapes to convey precision and reliability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbc8g34oG3BR2MREZzMj-T4rXdTnj-UynZz9c9XXwA4WEzNvO387FvLjgTJypbN0WgC0JUijzOFRSZy5jFJ6Bg1BkEZhnay3zb8FRwd5Mef32IUca6STSAVSwnD7BZuesESt9kxTiWJzz7p-FVSTmQgF2o9U65iKWdcevAKmqfGZTI3SaRqjda_H5tRvSCnLHhXzHWmAQxvB7ny9ruhBvq8FTxDgdTCkKYv8Cjporqxh_TYboQdKcCvrPh4SqWk_QpsV9gkQAQtt8" />
<div>
<h1 className="font-headline-md text-headline-md font-extrabold text-white">CommSync</h1>
<p className="font-label-md text-label-md opacity-80">Enterprise Suite</p>
</div>
</div>
<div className="px-md pb-sm">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-title-md text-title-md py-sm rounded-lg transition-colors flex items-center justify-center gap-xs shadow-md">
<span className="material-symbols-outlined text-sm">add</span> New Record
            </button>
</div>
<div className="flex-1 overflow-y-auto px-xs space-y-xs">
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-title-md text-title-md">Dashboard</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-title-md text-title-md">CRM</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-title-md text-title-md">Sales</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-title-md text-title-md">Inventory</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-title-md text-title-md">Finance</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-title-md text-title-md">Reports</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all group-hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-title-md text-title-md">Settings</span>
</a>
</div>
<div className="px-xs pt-sm border-t border-surface-variant/20 space-y-xs">
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-sm px-md py-sm rounded-lg text-surface-variant hover:text-white hover:bg-white/10 transition-all" href="#">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-md text-label-md">Feedback</span>
</a>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col min-h-screen md:ml-[280px]">
{/* TopNavBar */}
<header className="sticky top-0 z-40 flex justify-between items-center w-full px-lg h-16 bg-surface/80 backdrop-blur-xl shadow-sm">
<div className="flex items-center gap-md lg:hidden">
<button className="p-sm rounded-full hover:bg-primary/5 transition-colors text-on-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md font-bold text-primary">CommSync</h1>
</div>
<div className="hidden lg:flex items-center bg-surface-container-low rounded-full px-md py-xs border border-outline-variant focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all w-96">
<span className="material-symbols-outlined text-on-surface-variant mr-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70" placeholder="Search..." type="text" />
</div>
<div className="flex items-center gap-sm">
<button className="p-sm rounded-full hover:bg-primary/5 transition-colors text-primary relative cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined" style={{"fontVariationSettings": "'FILL' 1"}}>notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-sm rounded-full hover:bg-primary/5 transition-colors text-on-surface-variant cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined">help</span>
</button>
<button className="p-sm rounded-full hover:bg-primary/5 transition-colors text-on-surface-variant cursor-pointer active:scale-95 duration-150">
<span className="material-symbols-outlined">apps</span>
</button>
<div className="ml-sm">
<img alt="User avatar" className="rounded-full w-8 h-8 object-cover cursor-pointer border border-outline-variant" data-alt="A professional headshot of a corporate user, smiling subtly against a neutral light grey background, representing an enterprise software user profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5-jwpilt40oiyaMM3eXF97X-AaatJ8MMZL2fvGkfQuE7jlEggGz5rbBH83uvd2eICfrKHpSQ2csXxCV_HpyY7_i_lXv9rUXxjqgpJRx1ufbJFlyV4esnNKoVlCawsRO5bvvGTVWiMUIjQbQnEQ9RbFV1iD2RMt9y9ZxM56_0b8iYR0buBjhIV25L8fhPR5Zo76JOqkS1HF-OzaVYT4YPEEFQDuaOycYPHApNDzP7YbpxHoe8ncJGgWvNGeU6oKtE0mOhlgeXBFUY" />
</div>
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
<div className="max-w-[1000px] mx-auto">
{/* Header */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-lg gap-md">
<div>
<h2 className="font-display-lg text-headline-lg md:text-display-lg text-on-background">Notifications</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-xs">Manage your alerts and activities.</p>
</div>
<div className="flex items-center gap-sm">
<button className="px-md py-sm bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded-lg transition-colors border border-outline-variant/30 flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">done_all</span> Mark all as read
                        </button>
</div>
</div>
{/* Filters */}
<div className="flex items-center gap-sm mb-lg overflow-x-auto pb-xs hide-scrollbar border-b border-surface-variant">
<button className="px-md py-sm font-title-md text-title-md text-primary border-b-2 border-primary whitespace-nowrap">All</button>
<button className="px-md py-sm font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Unread (3)</button>
<button className="px-md py-sm font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">Mentions</button>
<button className="px-md py-sm font-title-md text-title-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap">System</button>
</div>
{/* Notification List */}
<div className="space-y-sm">
{/* Unread Item: Mention */}
<div className="bg-surface p-md rounded-xl border border-primary/20 shadow-sm flex items-start gap-md relative overflow-hidden group hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0 text-primary">
<span className="material-symbols-outlined">person</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-sm mb-xs">
<h4 className="font-title-md text-title-md text-on-surface truncate">Sarah Jenkins mentioned you</h4>
<span className="font-label-md text-label-md text-primary whitespace-nowrap">2m ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">"Can you review the latest Q3 pipeline numbers in the Sales dashboard? We need to finalize before the all-hands."</p>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-xs text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Unread Item: System */}
<div className="bg-surface p-md rounded-xl border border-error/20 shadow-sm flex items-start gap-md relative overflow-hidden group hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
<div className="w-10 h-10 rounded-full bg-error-container flex items-center justify-center shrink-0 text-on-error-container">
<span className="material-symbols-outlined">warning</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-sm mb-xs">
<h4 className="font-title-md text-title-md text-on-surface truncate">API Rate Limit Exceeded</h4>
<span className="font-label-md text-label-md text-error whitespace-nowrap">15m ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">The synchronization service hit the external API rate limit. Service will resume in 45 minutes.</p>
<div className="mt-sm">
<button className="px-sm py-xs border border-outline text-on-surface-variant font-label-md text-label-md rounded hover:bg-surface-container transition-colors">View Logs</button>
</div>
</div>
<div className="shrink-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-xs text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
{/* Read Item: Task */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-sm flex items-start gap-md group hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined">task</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-sm mb-xs">
<h4 className="font-title-md text-title-md text-on-surface truncate opacity-80">Inventory Audit Completed</h4>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">2h ago</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 opacity-80">The automated Q3 inventory audit has finished successfully with 0 critical variances found.</p>
</div>
</div>
{/* Read Item: Update */}
<div className="bg-surface-container-lowest p-md rounded-xl border border-surface-variant shadow-sm flex items-start gap-md group hover:shadow-md hover:-translate-y-[1px] transition-all duration-200">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined">update</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-sm mb-xs">
<h4 className="font-title-md text-title-md text-on-surface truncate opacity-80">System Update 2.4.1</h4>
<span className="font-label-md text-label-md text-on-surface-variant whitespace-nowrap">Yesterday</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 opacity-80">CommSync has been updated. This release includes performance improvements for the Reports module.</p>
</div>
</div>
</div>
{/* Empty State (Hidden by default in this mockup, but here for completeness) */}
{/* <div className="flex flex-col items-center justify-center py-3xl text-center">
                    <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center text-outline mb-lg">
                        <span className="material-symbols-outlined text-[48px]">notifications_paused</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">All caught up!</h3>
                    <p className="font-body-lg text-body-lg text-on-surface-variant max-w-sm">You don't have any new notifications right now. Check back later for updates.</p>
                </div> */}
</div>
</main>
</div>


    </>
  );
};

export default NotificationCenter;
