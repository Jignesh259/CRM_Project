import React from 'react';
import '../style/Dashboard.css';

const ScheduleLeadFollowUp: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex bg-inverse-surface dark:bg-surface-container-lowest fixed left-0 top-0 h-full w-[280px] z-40 shadow-xl flex-col py-lg px-md duration-200 ease-in-out">
<div className="flex items-center gap-sm mb-xl px-sm">
<div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-on-primary font-bold">C</div>
<div>
<h1 className="font-title-md text-title-md text-surface-lowest text-white">Lead Manager</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise Edition</p>
</div>
</div>
<button className="mb-xl w-full flex items-center justify-center gap-xs bg-primary-container text-on-primary-container font-label-md text-label-md h-[40px] rounded-lg hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
            New Lead
        </button>
<div className="flex-1 flex flex-col gap-xs">
{/* Active Tab: Leads */}
<a className="flex items-center gap-md px-md py-sm rounded-r-full bg-primary-container/20 text-primary-fixed border-l-4 border-primary-fixed duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="filter_list">filter_list</span>
<span className="font-body-md text-body-md font-medium">Leads</span>
</a>
<a className="flex items-center gap-md px-md py-sm border-l-4 border-transparent text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="view_kanban">view_kanban</span>
<span className="font-body-md text-body-md font-medium">Pipeline</span>
</a>
<a className="flex items-center gap-md px-md py-sm border-l-4 border-transparent text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="task_alt">task_alt</span>
<span className="font-body-md text-body-md font-medium">Tasks</span>
</a>
<a className="flex items-center gap-md px-md py-sm border-l-4 border-transparent text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="history">history</span>
<span className="font-body-md text-body-md font-medium">Activities</span>
</a>
<a className="flex items-center gap-md px-md py-sm border-l-4 border-transparent text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="person">person</span>
<span className="font-body-md text-body-md font-medium">Contacts</span>
</a>
<a className="flex items-center gap-md px-md py-sm border-l-4 border-transparent text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="handshake">handshake</span>
<span className="font-body-md text-body-md font-medium">Deals</span>
</a>
</div>
<div className="mt-auto flex flex-col gap-xs pt-md border-t border-white/10">
<a className="flex items-center gap-md px-md py-sm text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="help_outline">help_outline</span>
<span className="font-body-md text-body-md font-medium">Support</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined text-[20px]" data-icon="manage_accounts">manage_accounts</span>
<span className="font-body-md text-body-md font-medium">Account</span>
</a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col min-h-screen md:ml-[280px] w-full bg-surface-bright">
{/* TopNavBar */}
<header className="bg-surface/80 backdrop-blur-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-sm">
<div className="flex items-center gap-md w-1/3">
<div className="relative w-full max-w-xs">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">search</span>
<input className="w-full h-[36px] pl-10 pr-4 bg-surface-container border border-outline-variant/50 rounded-full font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search leads, contacts..." type="text" />
</div>
</div>
<nav className="hidden lg:flex items-center gap-xl">
<a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 transition-all font-body-md text-body-md font-medium" href="#">Dashboard</a>
<a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 transition-all font-body-md text-body-md font-medium" href="#">Analytics</a>
<a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer active:opacity-70 transition-all font-body-md text-body-md font-medium" href="#">Reports</a>
</nav>
<div className="flex items-center justify-end gap-sm w-1/3">
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors relative">
<span className="material-symbols-outlined text-[24px]" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors hidden sm:block">
<span className="material-symbols-outlined text-[24px]" data-icon="settings">settings</span>
</button>
<div className="w-9 h-9 rounded-full bg-surface-dim ml-sm overflow-hidden border border-outline-variant/30">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkvTRlLsRJ_RU9AsgkieN8Vr1oWzQWxDyZhi_L83YDKxI9kaHfE0trGQFLn2v3vB9oZ_5Zz9e7vdxUf3r5n1o6cD4OiDqazA3S0SXGTMmbQ5Be9JrLRao11RK1KoXshan5rYxvtWvUJW1-HuCcbMJwkgPCHiKze5GLmmtrVT8eAIlKIQq_rtrcWaedRcA-ptFHR7op19oBMY7mUb22mrf-3ZK_a_oLeh-qXhR8gZNlHw_b6utRRiQ0pwPoOZHZvqZhzU8Fy3BZqfU" />
</div>
</div>
</header>
{/* Page Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop w-full max-w-[1200px] mx-auto">
{/* Context Header */}
<div className="mb-lg">
<div className="flex items-center gap-sm text-on-surface-variant font-label-md text-label-md mb-xs">
<a className="hover:text-primary transition-colors" href="#">Leads</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Acme Corp</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface">Schedule</span>
</div>
<div className="flex items-center justify-between">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">Schedule Follow-up</h2>
<button className="text-on-surface-variant hover:text-on-surface flex items-center gap-xs font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">close</span>
<span className="hidden sm:inline">Cancel Workflow</span>
</button>
</div>
</div>
{/* Main Form Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
{/* Left Column: Scheduling Tools (7 cols) */}
<div className="lg:col-span-7 flex flex-col gap-md">
{/* Follow-up Type Glass Card */}
<div className="bg-surface border border-outline-variant/30 rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="bg-surface-container-low/50 backdrop-blur-md px-lg py-md border-b border-outline-variant/20">
<h3 className="font-title-md text-title-md text-on-surface">Interaction Type</h3>
</div>
<div className="p-lg grid grid-cols-2 sm:grid-cols-4 gap-sm">
{/* Type Option: Call */}
<label className="relative cursor-pointer group">
<input checked className="peer sr-only" name="followup_type" type="radio" />
<div className="h-24 flex flex-col items-center justify-center gap-sm rounded-xl border border-outline-variant/50 bg-surface hover:bg-surface-container transition-colors peer-checked:border-primary peer-checked:bg-primary-fixed/30 peer-checked:text-primary">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">call</span>
<span className="font-label-md text-label-md font-medium">Call</span>
</div>
<div className="absolute top-2 right-2 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
<span className="material-symbols-outlined text-[16px]" data-weight="fill">check_circle</span>
</div>
</label>
{/* Type Option: Email */}
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="followup_type" type="radio" />
<div className="h-24 flex flex-col items-center justify-center gap-sm rounded-xl border border-outline-variant/50 bg-surface hover:bg-surface-container transition-colors peer-checked:border-primary peer-checked:bg-primary-fixed/30 peer-checked:text-primary text-on-surface-variant">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">mail</span>
<span className="font-label-md text-label-md font-medium">Email</span>
</div>
</label>
{/* Type Option: Meeting */}
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="followup_type" type="radio" />
<div className="h-24 flex flex-col items-center justify-center gap-sm rounded-xl border border-outline-variant/50 bg-surface hover:bg-surface-container transition-colors peer-checked:border-primary peer-checked:bg-primary-fixed/30 peer-checked:text-primary text-on-surface-variant">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">groups</span>
<span className="font-label-md text-label-md font-medium">Meeting</span>
</div>
</label>
{/* Type Option: Task */}
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="followup_type" type="radio" />
<div className="h-24 flex flex-col items-center justify-center gap-sm rounded-xl border border-outline-variant/50 bg-surface hover:bg-surface-container transition-colors peer-checked:border-primary peer-checked:bg-primary-fixed/30 peer-checked:text-primary text-on-surface-variant">
<span className="material-symbols-outlined text-[28px] group-hover:scale-110 transition-transform">task</span>
<span className="font-label-md text-label-md font-medium">Task</span>
</div>
</label>
</div>
</div>
{/* Date & Time Selector Card */}
<div className="bg-surface border border-outline-variant/30 rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-lg flex flex-col md:flex-row gap-xl">
{/* Mini Calendar */}
<div className="flex-1">
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Select Date</h3>
<div className="flex gap-1">
<button className="p-1 text-on-surface-variant hover:bg-surface-container rounded-md"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
<span className="font-label-md text-label-md px-2 py-1">October 2023</span>
<button className="p-1 text-on-surface-variant hover:bg-surface-container rounded-md"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-label-md text-label-md mb-2 text-on-surface-variant">
<div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
</div>
<div className="grid grid-cols-7 gap-1 text-center font-body-md text-body-md">
{/* Ghost days */}
<div className="p-2 text-outline-variant/50">26</div><div className="p-2 text-outline-variant/50">27</div><div className="p-2 text-outline-variant/50">28</div><div className="p-2 text-outline-variant/50">29</div><div className="p-2 text-outline-variant/50">30</div>
{/* Active days */}
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">1</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">2</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">3</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">4</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">5</div>
<div className="p-2 bg-primary text-on-primary rounded-full cursor-pointer shadow-md">6</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">7</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">8</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">9</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">10</div>
{/* ... more days omitted for brevity, adding a few more for structure */}
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">11</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">12</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">13</div>
<div className="p-2 hover:bg-surface-container rounded-full cursor-pointer">14</div>
</div>
</div>
{/* Divider (desktop) */}
<div className="hidden md:block w-[1px] bg-outline-variant/30 self-stretch my-2"></div>
{/* Time Selector */}
<div className="md:w-[200px]">
<h3 className="font-title-md text-title-md text-on-surface mb-md">Time</h3>
<div className="flex flex-col gap-sm">
<label className="block">
<span className="sr-only">Select Time</span>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">schedule</span>
<select className="w-full h-[44px] pl-10 pr-8 bg-surface border border-outline-variant rounded-lg font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary appearance-none outline-none">
<option>09:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>12:00 PM</option>
<option>01:00 PM</option>
<option selected>02:30 PM</option>
<option>03:00 PM</option>
<option>04:00 PM</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px] pointer-events-none">expand_more</span>
</div>
</label>
<div className="flex items-center gap-2 mt-2">
<span className="text-on-surface-variant font-label-md text-label-md">Duration:</span>
<div className="flex bg-surface-container rounded-md p-1 gap-1">
<button className="px-2 py-1 rounded text-xs font-medium hover:bg-surface transition-colors">15m</button>
<button className="px-2 py-1 rounded bg-surface shadow-sm text-xs font-medium text-primary">30m</button>
<button className="px-2 py-1 rounded text-xs font-medium hover:bg-surface transition-colors">1h</button>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Right Column: Context & Notes (5 cols) */}
<div className="lg:col-span-5 flex flex-col gap-md h-full">
{/* Context Card */}
<div className="bg-surface border border-outline-variant/30 rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-md flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-tertiary-container/20 text-tertiary font-bold flex items-center justify-center text-lg">
                            AC
                        </div>
<div className="flex-1">
<h4 className="font-title-md text-title-md text-on-surface leading-tight">Acme Corporation</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Sarah Jenkins • VP of Engineering</p>
</div>
<button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
<span className="material-symbols-outlined text-[20px]">open_in_new</span>
</button>
</div>
{/* Notes Area */}
<div className="bg-surface border border-outline-variant/30 rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] flex flex-col flex-1 min-h-[300px]">
<div className="px-lg py-md border-b border-outline-variant/20 flex justify-between items-center">
<h3 className="font-title-md text-title-md text-on-surface">Interaction Notes</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">format_list_bulleted</span>
</button>
</div>
<div className="p-md flex-1 flex flex-col">
<textarea className="flex-1 w-full resize-none border-none bg-transparent font-body-md text-body-md text-on-surface focus:ring-0 placeholder:text-outline-variant/70 p-2" placeholder="What is the objective of this follow-up? Note any specific talking points or required preparations here..."></textarea>
<div className="mt-4 flex gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container text-xs font-medium text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">attach_file</span> Attach
                                </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container text-xs font-medium text-on-surface-variant">
<span className="material-symbols-outlined text-[14px]">smart_toy</span> AI Draft
                                </span>
</div>
</div>
</div>
{/* Action Bar */}
<div className="mt-auto pt-sm flex items-center justify-end gap-md">
<button className="px-lg h-[40px] font-label-md text-label-md font-medium text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">
                            Save as Draft
                        </button>
<button className="px-xl h-[40px] font-label-md text-label-md font-semibold bg-primary-container text-on-primary-container rounded-lg shadow-sm hover:shadow-md hover:opacity-95 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                            Schedule Follow-up
                        </button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default ScheduleLeadFollowUp;
