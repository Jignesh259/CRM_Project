import React from 'react';
import '../style/Dashboard.css';

const CoreSystemConfiguration: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-screen py-lg px-md bg-inverse-surface dark:bg-surface-container-lowest text-primary-fixed dark:text-primary fixed left-0 top-0 h-full w-[280px] border-r border-outline-variant/10 shadow-md z-50">
<div className="flex items-center gap-sm mb-xl px-sm">
<span className="material-symbols-outlined text-[32px] text-surface-container-lowest dark:text-primary" data-icon="hub">hub</span>
<div>
<h1 className="text-headline-md font-headline-md text-surface-container-lowest dark:text-primary">CommSync</h1>
<p className="text-label-md font-label-md text-surface-variant opacity-80">Enterprise ERP</p>
</div>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span className="font-label-md text-label-md">Customers</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="leaderboard">leaderboard</span>
<span className="font-label-md text-label-md">Sales Pipeline</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-label-md text-label-md">Inventory</span>
</a>
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="font-label-md text-label-md">Reports</span>
</a>
</div>
<div className="mt-auto pt-md border-t border-outline-variant/10 flex flex-col gap-xs">
<a className="flex items-center gap-md px-md py-sm text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg active:translate-x-1" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] flex flex-col h-screen overflow-hidden">
{/* TopNavBar */}
<header className="flex justify-between items-center px-lg w-full sticky top-0 z-40 backdrop-blur-md bg-surface dark:bg-inverse-surface w-full h-16 border-b border-outline-variant dark:border-outline shadow-sm">
<div className="flex items-center gap-md md:hidden">
<button className="text-on-surface-variant hover:bg-surface-container-low p-sm rounded-full transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<span className="text-title-md font-title-md text-primary dark:text-primary-fixed-dim">CommSync</span>
</div>
<div className="hidden md:flex flex-1 max-w-md mx-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search settings..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-sm rounded-full cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-sm rounded-full cursor-pointer active:scale-95">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<button className="text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors p-sm rounded-full cursor-pointer active:scale-95 md:hidden">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<div className="ml-sm w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant cursor-pointer">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a person with a neutral expression, suitable for an enterprise software avatar. The image should be clear, well-lit, and represent a typical corporate user in a modern CRM interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyZQjK2olF-LzgcorvBxla8nqU4pvorLfGH-9_6j15yxgd7jDoq2hbruzOfFFGwnX42Ot6VZwM5sTNw8R5dzVp0x95no__j1FHCYliiGdZwQfMajdZudzW7TfVbQrFG8I70ZGq_Nv2VASlzdBLCW55tG3ArQ8shMKfxTonIwdrMakwNHuJfO5h9pPZinhAiVrbBlgKjKMf0c_r_dm1Dhvi7Nccro7MuNuTlvx73kRNg4PKqJvi18W9qRuMBT3dHwGCtCvp8_YLap4" />
</div>
</div>
</header>
{/* Canvas */}
<div className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-background custom-scrollbar">
<div className="max-w-container-max mx-auto space-y-xl">
{/* Page Header */}
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-background">System Configuration</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Manage core application behavior, modules, and data integrations.</p>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* General Settings Card */}
<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant/30 glass-panel">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary" data-icon="tune">tune</span>
<h3 className="font-title-md text-title-md text-on-background">General Settings</h3>
</div>
</div>
<div className="p-lg flex-1 grid grid-cols-1 md:grid-cols-2 gap-lg">
<div className="space-y-xs">
<label className="block font-label-md text-label-md text-on-surface-variant">Default Dashboard View</label>
<select className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
<option>Sales Pipeline</option>
<option>Global Analytics</option>
<option>Customer Overview</option>
</select>
</div>
<div className="space-y-xs">
<label className="block font-label-md text-label-md text-on-surface-variant">Auto-save Interval</label>
<select className="w-full bg-surface border border-outline-variant rounded-lg px-md py-sm font-body-md text-body-md focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
<option>Every 1 minute</option>
<option selected>Every 5 minutes</option>
<option>Every 10 minutes</option>
<option>Manual only</option>
</select>
</div>
<div className="space-y-xs md:col-span-2">
<label className="block font-label-md text-label-md text-on-surface-variant">Session Timeout (Minutes)</label>
<div className="flex items-center gap-sm">
<input className="flex-1 h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer accent-primary" max="120" min="15" type="range" value="60" />
<span className="w-12 text-right font-code-sm text-code-sm text-on-surface-variant">60m</span>
</div>
</div>
</div>
</div>
{/* Data Management Card */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant/30 glass-panel">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-tertiary" data-icon="database">database</span>
<h3 className="font-title-md text-title-md text-on-background">Data Management</h3>
</div>
</div>
<div className="p-lg flex-1 flex flex-col justify-center space-y-md">
<p className="font-body-md text-body-md text-on-surface-variant mb-sm">Export system data or perform routine maintenance.</p>
<button className="w-full flex items-center justify-center gap-sm px-md py-sm border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-on-background font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                                Export All Data (CSV/JSON)
                            </button>
<button className="w-full flex items-center justify-center gap-sm px-md py-sm bg-error/10 text-error border border-error/20 rounded-lg hover:bg-error/20 transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]" data-icon="delete_sweep">delete_sweep</span>
                                Clear System Cache
                            </button>
</div>
</div>
{/* Module Management Card */}
<div className="lg:col-span-5 bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant/30 glass-panel">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-secondary" data-icon="view_module">view_module</span>
<h3 className="font-title-md text-title-md text-on-background">Module Management</h3>
</div>
</div>
<div className="p-lg flex-1">
<ul className="space-y-sm">
<li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container border border-outline-variant/30 rounded-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="group">group</span>
</div>
<span className="font-body-md text-body-md text-on-background">CRM Core</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary transition-all duration-300 z-10" id="toggle-crm" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer transition-all duration-300" htmlFor="toggle-crm"></label>
</div>
</li>
<li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container border border-outline-variant/30 rounded-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="inventory_2">inventory_2</span>
</div>
<span className="font-body-md text-body-md text-on-background">Inventory System</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary transition-all duration-300 z-10" id="toggle-inv" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer transition-all duration-300" htmlFor="toggle-inv"></label>
</div>
</li>
<li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container border border-outline-variant/30 rounded-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="leaderboard">leaderboard</span>
</div>
<span className="font-body-md text-body-md text-on-background">Sales Engine</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-primary transition-all duration-300 z-10" id="toggle-sales" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer transition-all duration-300" htmlFor="toggle-sales"></label>
</div>
</li>
<li className="flex items-center justify-between p-sm hover:bg-surface-container-low rounded-lg transition-colors opacity-70">
<div className="flex items-center gap-md">
<div className="p-xs bg-surface-container border border-outline-variant/30 rounded-md">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]" data-icon="account_balance">account_balance</span>
</div>
<span className="font-body-md text-body-md text-on-background">Finance Integration</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer transition-all duration-300 z-10" id="toggle-fin" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-surface-variant cursor-pointer transition-all duration-300" htmlFor="toggle-fin"></label>
</div>
</li>
</ul>
</div>
</div>
{/* API Access Card */}
<div className="lg:col-span-7 bg-surface-container-lowest rounded-xl border border-outline-variant/50 shadow-sm overflow-hidden flex flex-col">
<div className="px-lg py-md border-b border-outline-variant/30 glass-panel flex justify-between items-center">
<div className="flex items-center gap-sm">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="api">api</span>
<h3 className="font-title-md text-title-md text-on-background">API Access</h3>
</div>
<button className="bg-primary-container text-on-primary-container px-md py-sm rounded-lg font-label-md text-label-md hover:bg-primary-container/90 transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                                Generate New Key
                            </button>
</div>
<div className="p-lg flex-1">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant/30 text-on-surface-variant font-label-md text-label-md">
<th className="pb-sm font-medium">Name</th>
<th className="pb-sm font-medium">Key Prefix</th>
<th className="pb-sm font-medium">Last Used</th>
<th className="pb-sm font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant/10 hover:bg-primary-container/5 transition-colors">
<td className="py-md text-on-background font-medium">Production Sync</td>
<td className="py-md font-code-sm text-code-sm text-on-surface-variant">pk_live_8f92...</td>
<td className="py-md text-on-surface-variant">Today, 10:42 AM</td>
<td className="py-md text-right">
<button className="text-on-surface-variant hover:text-error transition-colors p-xs rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant/10 hover:bg-primary-container/5 transition-colors">
<td className="py-md text-on-background font-medium">Staging Env</td>
<td className="py-md font-code-sm text-code-sm text-on-surface-variant">pk_test_3a1b...</td>
<td className="py-md text-on-surface-variant">Oct 12, 2023</td>
<td className="py-md text-right">
<button className="text-on-surface-variant hover:text-error transition-colors p-xs rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
</button>
</td>
</tr>
<tr className="hover:bg-primary-container/5 transition-colors">
<td className="py-md text-on-background font-medium opacity-50">Legacy Integration</td>
<td className="py-md font-code-sm text-code-sm text-on-surface-variant opacity-50">pk_live_00x4...</td>
<td className="py-md text-on-surface-variant opacity-50">Never</td>
<td className="py-md text-right">
<button className="text-on-surface-variant hover:text-error transition-colors p-xs rounded hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]" data-icon="delete">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CoreSystemConfiguration;
