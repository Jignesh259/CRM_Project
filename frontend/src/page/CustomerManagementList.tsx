import React from 'react';
import '../style/Dashboard.css';

const CustomerManagementList: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col p-md z-50 fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest shadow-xl">
{/* Header */}
<div className="mb-xl flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container" data-icon="sync">sync</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-black text-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-outline-variant/70">Enterprise Suite</p>
</div>
</div>
{/* CTA */}
<button className="mb-lg w-full bg-primary text-on-primary hover:bg-primary/90 h-10 rounded-lg font-title-md text-title-md flex items-center justify-center gap-2 transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="add">add</span>
            Create New
        </button>
{/* Main Navigation */}
<div className="flex-1 overflow-y-auto space-y-1">
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-title-md text-title-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 text-primary-fixed-dim bg-white/10 rounded-lg font-medium transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="group" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>group</span>
<span className="font-title-md text-title-md">CRM</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-title-md text-title-md">Sales</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span className="font-title-md text-title-md">Inventory</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-title-md text-title-md">Finance</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span className="font-title-md text-title-md">Reports</span>
</a>
</div>
{/* Footer Navigation */}
<div className="mt-auto space-y-1 pt-4 border-t border-white/10">
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-title-md text-title-md">Settings</span>
</a>
<a className="flex items-center gap-3 px-sm py-2 rounded-lg text-outline-variant/70 hover:text-primary-fixed-dim hover:bg-white/5 transition-all hover:translate-x-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="contact_support">contact_support</span>
<span className="font-title-md text-title-md">Support</span>
</a>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] flex flex-col min-h-screen">
{/* TopNavBar */}
<header className="sticky top-0 z-40 flex justify-between items-center px-lg py-sm w-full bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-xl border-b border-outline-variant/30 dark:border-outline/20 shadow-sm h-16">
{/* Mobile Menu Button (Visible only on mobile) */}
<button className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
{/* Search Bar (Left aligned per JSON) */}
<div className="flex-1 flex items-center max-w-md hidden md:flex">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-body-md font-body-md transition-all placeholder:text-outline" placeholder="Search across CommSync..." type="text" />
</div>
</div>
<div className="md:hidden flex-1 flex justify-center">
<h2 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed-dim">CommSync</h2>
</div>
{/* Trailing Actions */}
<div className="flex items-center gap-2">
<button className="p-2 text-on-surface-variant dark:text-outline hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant dark:text-outline hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150 hidden sm:block">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
<button className="p-2 text-on-surface-variant dark:text-outline hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors rounded-full active:scale-95 duration-150 hidden sm:block">
<span className="material-symbols-outlined" data-icon="help">help</span>
</button>
<div className="h-8 w-px bg-outline-variant/30 mx-2 hidden sm:block"></div>
<button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/30 hover:border-primary transition-colors active:scale-95 duration-150 shrink-0">
<img alt="User profile avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a business user in a modern office environment. The lighting is bright and even, casting soft shadows. The user is wearing a dark blue suit jacket. The background is slightly blurred, showing a modern glass-walled office. The overall style is clean, corporate, and high-quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmAORqmDKrzoEOf5pn73qeieBTdmoId9yu0yQYLdGX2BpmFEoNrTXn8ZdDYzw5CCiqs7yVyoWPoUfJ3toSOZBFNmQaZg_mDC8YU22WMDIONvh2txwUJN2HIgfcI8Jcx9VLBtB0TzBCaizpD-PxL1DWxdSsWoGyfMMwrTQP7sGvv1yDNlRasyzPWZCA47YsVhHixZ8QcIazaUBESHorOOZpkAkbygNYWp9DQXuCRjmpLEt-Y5mmsDZbj-2-RNX-qxoMSWY8njGhHEI" />
</button>
</div>
</header>
{/* Page Content */}
<div className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface-container-lowest">
{/* Page Header */}
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-lg">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Customers</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Manage your client relationships and MRR.</p>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-outline-variant/50 rounded-lg text-on-surface font-title-md text-title-md hover:bg-surface-container-low transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
                        Filter
                    </button>
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-title-md text-title-md hover:bg-primary/90 transition-colors shadow-sm">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                        New Customer
                    </button>
</div>
</div>
{/* Mobile Search (Visible only on mobile) */}
<div className="md:hidden mb-lg relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface border border-outline-variant/30 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-body-md font-body-md" placeholder="Search customers..." type="text" />
</div>
{/* Data Table Card */}
<div className="bg-surface rounded-xl border border-outline-variant/20 shadow-sm overflow-hidden flex flex-col">
{/* Table Controls / Tabs */}
<div className="px-lg py-sm border-b border-outline-variant/20 bg-surface/50 backdrop-blur-md flex gap-6 overflow-x-auto no-scrollbar">
<button className="font-title-md text-title-md text-primary border-b-2 border-primary pb-2 whitespace-nowrap">All Customers</button>
<button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-2 whitespace-nowrap">Active</button>
<button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-2 whitespace-nowrap">Pending</button>
<button className="font-title-md text-title-md text-on-surface-variant hover:text-on-surface pb-2 whitespace-nowrap">Churned</button>
</div>
{/* Table Wrapper for scrolling */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/20 bg-surface-container-lowest">
<th className="py-3 px-lg font-title-md text-title-md text-on-surface-variant font-medium">Customer Name</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium">Company</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium">MRR</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium">Status</th>
<th className="py-3 px-4 font-title-md text-title-md text-on-surface-variant font-medium">Last Order</th>
<th className="py-3 px-lg text-right font-title-md text-title-md text-on-surface-variant font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10 bg-surface">
{/* Row 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-lg">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant/20" data-alt="A portrait of a young professional woman with dark hair, smiling slightly. The lighting is soft and natural. She is wearing a light-colored blouse. The background is a blurred office environment. High-quality corporate headshot style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TY_SOGsX9MA1itJVbev2iKKjIPiFp03kNMcjt5CKamUJyPc49nccDX32XeUOK9ywjBzJcD8tPHz2NNstkH-wAeeQ6pmWBi-_i233f5LgoCbhKRllflYHTGremlMx2SVdSoa2i7vHorUuOinJr75_WNZ7xkYx1ve_XThgMKDDTtTODL5gia-HYgag5jW-mq6ujsIfgogjsJJcJW-AaJvTO0Srg8qT0q_uA2ZJXPAuqeT403Q8GeD1kp7zIsVduMqF05h1aUmxZ2k" />
<div>
<p className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Sarah Jenkins</p>
<p className="font-body-md text-label-md text-outline">sarah.j@acmecorp.com</p>
</div>
</div>
</td>
<td className="py-3 px-4 text-on-surface font-body-md">Acme Corp</td>
<td className="py-3 px-4 text-on-surface font-body-md font-medium">$4,500</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100/50 text-emerald-800 font-label-md text-label-md border border-emerald-200/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></span>
                                        Active
                                    </span>
</td>
<td className="py-3 px-4 text-on-surface-variant font-body-md">Oct 24, 2023</td>
<td className="py-3 px-lg text-right">
<button className="p-1.5 text-outline-variant hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-title-md font-bold text-[14px]">
                                            MR
                                        </div>
<div>
<p className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Marcus Reynolds</p>
<p className="font-body-md text-label-md text-outline">m.reynolds@techflow.io</p>
</div>
</div>
</td>
<td className="py-3 px-4 text-on-surface font-body-md">TechFlow</td>
<td className="py-3 px-4 text-on-surface font-body-md font-medium">$12,000</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-100/50 text-amber-800 font-label-md text-label-md border border-amber-200/50">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600 mr-1.5"></span>
                                        Pending
                                    </span>
</td>
<td className="py-3 px-4 text-on-surface-variant font-body-md">Oct 22, 2023</td>
<td className="py-3 px-lg text-right">
<button className="p-1.5 text-outline-variant hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-lg">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant/20" data-alt="A close-up portrait of a middle-aged man with a short beard and glasses. He is wearing a grey sweater. The background is a solid light grey. The lighting is bright and even, highlighting his features. Professional and approachable style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLGx49b1postaz3hzeeGDfT95HbR6_I6Dc_dg1u4uq6Xs4LJRTMwIlW_auhuxGmo2nmhfAsuV9gqtpE1_IYt8y4p_OrdtgBPgyNBhkQMXoTjn7JNbJbDlriJ_UiDbQu2XcuGPgcMgYGQmi8-_egHthAXqAl-AeujOw1ywnVpK5SGAC2GGBkblzdRruEDkGuHfDYk0FTMSM3v3czvMeHI_u513OQiKsmE5-YZUZQGZN2Arx1-ALva-JrdEf2emZ1GlisNMefqhA7-I" />
<div>
<p className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">David Chen</p>
<p className="font-body-md text-label-md text-outline">david@horizon.net</p>
</div>
</div>
</td>
<td className="py-3 px-4 text-on-surface font-body-md">Horizon Networks</td>
<td className="py-3 px-4 text-on-surface font-body-md font-medium">$850</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-slate-700 font-label-md text-label-md border border-slate-200">
<span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1.5"></span>
                                        Inactive
                                    </span>
</td>
<td className="py-3 px-4 text-on-surface-variant font-body-md">Sep 15, 2023</td>
<td className="py-3 px-lg text-right">
<button className="p-1.5 text-outline-variant hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-3 px-lg">
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-outline-variant/20" data-alt="A portrait of an older professional woman with short grey hair and glasses. She is smiling warmly. She is wearing a black blazer. The background is a bright, modern office with plants. The lighting is soft and flattering. High-quality corporate headshot." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIi40jmlw8JMUIxvwTLgJq8iX2QK4ME9G1iXmvtvKVonvQX4XrYakNqBmtq67UMW6w5CPC1vw2PH0zYyEwRztulVLFxf8BYMH8QNox5qcgXyI7vvP_BfyNohHxSO6-whOLKRO3yDKWYe-jtMX35309yM79B2PYsz28nhfCdyUVILX_vjQyV7q8lhMEcJRI7IpOkltclVkMwOajOa84UiPBphja0i5GHaJBFxPkY13nu155p9GjkenUICuct6LaUtO2dwW4uKxFOLY" />
<div>
<p className="font-title-md text-title-md text-on-surface font-semibold group-hover:text-primary transition-colors cursor-pointer">Elena Rodriguez</p>
<p className="font-body-md text-label-md text-outline">elena.r@globaltrade.co</p>
</div>
</div>
</td>
<td className="py-3 px-4 text-on-surface font-body-md">Global Trade Co.</td>
<td className="py-3 px-4 text-on-surface font-body-md font-medium">$22,400</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-100/50 text-emerald-800 font-label-md text-label-md border border-emerald-200/50">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-1.5"></span>
                                        Active
                                    </span>
</td>
<td className="py-3 px-4 text-on-surface-variant font-body-md">Oct 26, 2023</td>
<td className="py-3 px-lg text-right">
<button className="p-1.5 text-outline-variant hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="px-lg py-3 border-t border-outline-variant/20 bg-surface-container-lowest flex items-center justify-between">
<span className="font-body-md text-label-md text-outline-variant">Showing 1 to 4 of 128 entries</span>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-outline-variant hover:bg-surface-container-low transition-colors disabled:opacity-50" disabled>
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_left">chevron_left</span>
</button>
<button className="w-8 h-8 rounded bg-primary-container text-on-primary-container font-title-md text-title-md flex items-center justify-center">1</button>
<button className="w-8 h-8 rounded text-on-surface-variant hover:bg-surface-container-low font-title-md text-title-md flex items-center justify-center transition-colors">2</button>
<button className="w-8 h-8 rounded text-on-surface-variant hover:bg-surface-container-low font-title-md text-title-md flex items-center justify-center transition-colors">3</button>
<span className="text-outline-variant px-1">...</span>
<button className="p-1 rounded text-outline-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[20px]" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerManagementList;
