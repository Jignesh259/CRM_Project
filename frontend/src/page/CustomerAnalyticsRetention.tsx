import React from 'react';
import '../style/Dashboard.css';

const CustomerAnalyticsRetention: React.FC = () => {
  return (
    <>
      
 SideNavBar (Predicted Component) 
<nav className="bg-inverse-surface dark:bg-on-background w-[280px] h-screen fixed left-0 top-0 shadow-sm shadow-md flex flex-col h-full py-lg px-md hidden md:flex z-50">
{/* Brand Header */}
<div className="mb-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-lg shadow-sm">
                CS
            </div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-surface-container-lowest">CommSync</h1>
<p className="text-surface-variant font-body-md opacity-80 text-xs">Enterprise Suite</p>
</div>
</div>
{/* Navigation Tabs */}
<div className="flex-1 space-y-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
                CRM
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
                Financials
            </a>
{/* Active Tab: Reports aligns best with "Insights Report" */}
<a className="flex items-center gap-md px-md py-sm rounded-lg text-primary-fixed-dim bg-white/5 backdrop-blur-md border-r-4 border-primary-container hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="analytics" data-weight="fill" style={{"fontVariationSettings": "'FILL' 1"}}>analytics</span>
                Reports
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant font-medium hover:bg-white/10 transition-colors duration-200 active:scale-95 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
                Settings
            </a>
</div>
{/* CTA */}
<div className="mt-auto pt-lg border-t border-white/10">
<button className="w-full bg-primary-container text-on-primary-container py-sm rounded-lg font-title-md flex items-center justify-center gap-sm hover:bg-primary transition-colors">
<span className="material-symbols-outlined">add</span>
                New Report
            </button>
</div>
</nav>
 Main Content Area 
<main className="flex-1 md:ml-[280px] min-h-screen flex flex-col">
{/* TopNavBar (Predicted Component) */}
<header className="bg-surface/80 dark:bg-surface-container/80 backdrop-blur-xl docked full-width top-0 sticky border-b border-outline-variant/30 shadow-sm flex justify-between items-center px-xl h-16 z-40">
<div className="flex items-center gap-md">
<h2 className="font-headline-md text-headline-md font-black text-primary">CommSync Reports</h2>
</div>
<div className="flex items-center gap-lg">
{/* Search */}
<div className="relative hidden sm:block focus-within:ring-2 focus-within:ring-primary-container rounded-lg transition-all">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-xl pr-md py-sm rounded-lg border border-outline-variant bg-surface-container-lowest focus:outline-none focus:border-primary font-body-md w-64" placeholder="Search reports..." type="text" />
</div>
{/* Actions */}
<div className="flex items-center gap-sm">
<button className="p-sm text-on-surface-variant font-medium hover:text-primary transition-all rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-sm text-on-surface-variant font-medium hover:text-primary transition-all rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
</button>
<button className="p-sm text-on-surface-variant font-medium hover:text-primary transition-all rounded-full hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="dark_mode">dark_mode</span>
</button>
</div>
{/* Profile */}
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant cursor-pointer">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="A professional headshot of a business user in a bright, modern corporate environment. The image should be clean, high-resolution, and convey trust and competence, fitting for an enterprise software profile avatar. Subtle office lighting in the background, out of focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEn7knCk8Dx1nucTwvXe-TaL-mjXPqF4TOHPZwcOgOQlqboGgbfLJbS2I0uZuGoYkEnFag_NbgqYOpR7_P9xr5SlE-iTgPOIsWDidhqpHexF3kwg7F766gGK8K0pHC1cchsAa-rgH40xDNjyjxqT1k1p19qR1uX2rmeWX6YoGbSLRH9ZI7WM1aWAZCPwBucf5lXTJZKcTFy_wHcbCBsu2_R6PEHaBfWJlBDqFE6tb_NPRdRx8Rvnj_HHrNRRjhzravbfkWE_FEsmI" />
</div>
</div>
</header>
{/* Page Content: Customer Insights */}
<div className="p-margin-desktop space-y-xl max-w-container-max mx-auto w-full">
{/* Header Section */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
<div>
<div className="flex items-center gap-sm mb-xs">
<span className="px-sm py-xs bg-primary-container/10 text-primary rounded-full font-label-md">Q3 2023</span>
<span className="text-outline font-body-md">Updated 2 hours ago</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-background">Customer Insights</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Comprehensive overview of acquisition, retention, and lifetime value metrics.</p>
</div>
<div className="flex gap-sm">
<button className="px-md py-sm border border-outline-variant rounded-lg font-title-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[20px]">download</span>
                        Export
                    </button>
<button className="px-md py-sm bg-primary-container text-on-primary-container rounded-lg font-title-md hover:bg-primary transition-colors flex items-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filter Data
                    </button>
</div>
</div>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/* KPI Cards (Row 1) */}
<div className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div>
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface-variant">Total Customers</h3>
<span className="material-symbols-outlined text-primary bg-primary/10 p-sm rounded-lg">group</span>
</div>
<div className="font-display-lg text-display-lg text-on-background">24,592</div>
</div>
<div className="flex items-center gap-xs mt-md">
<span className="material-symbols-outlined text-[16px] text-[#059669]">trending_up</span>
<span className="font-label-md text-[#059669] bg-[#059669]/10 px-xs py-[2px] rounded">+12.5%</span>
<span className="font-body-md text-outline ml-xs">vs last quarter</span>
</div>
</div>
<div className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div>
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface-variant">Avg Retention Rate</h3>
<span className="material-symbols-outlined text-tertiary-container bg-tertiary-container/10 p-sm rounded-lg">autorenew</span>
</div>
<div className="font-display-lg text-display-lg text-on-background">87.2%</div>
</div>
<div className="flex items-center gap-xs mt-md">
<span className="material-symbols-outlined text-[16px] text-[#059669]">trending_up</span>
<span className="font-label-md text-[#059669] bg-[#059669]/10 px-xs py-[2px] rounded">+2.1%</span>
<span className="font-body-md text-outline ml-xs">vs last quarter</span>
</div>
</div>
<div className="md:col-span-4 glass-card rounded-xl p-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
<div>
<div className="flex justify-between items-center mb-md">
<h3 className="font-title-md text-title-md text-on-surface-variant">Avg LTV</h3>
<span className="material-symbols-outlined text-secondary bg-secondary/10 p-sm rounded-lg">monetization_on</span>
</div>
<div className="font-display-lg text-display-lg text-on-background">$4,250</div>
</div>
<div className="flex items-center gap-xs mt-md">
<span className="material-symbols-outlined text-[16px] text-error">trending_down</span>
<span className="font-label-md text-error bg-error/10 px-xs py-[2px] rounded">-1.4%</span>
<span className="font-body-md text-outline ml-xs">vs last quarter</span>
</div>
</div>
{/* Acquisition Trends (Large Chart Area) */}
<div className="md:col-span-8 glass-card rounded-xl p-lg shadow-sm flex flex-col min-h-[400px]">
<div className="flex justify-between items-center mb-lg">
<h3 className="font-headline-md text-headline-md text-on-background">Acquisition Trends</h3>
<select className="bg-surface-container border border-outline-variant rounded-lg px-md py-sm font-body-md text-on-surface focus:border-primary outline-none">
<option>Last 12 Months</option>
<option>Year to Date</option>
<option>All Time</option>
</select>
</div>
{/* Simplified CSS Bar Chart for Demonstration */}
<div className="flex-1 relative chart-grid mt-md rounded-lg overflow-hidden flex items-end justify-between px-md pt-lg pb-md">
{/* Y-Axis Labels */}
<div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-outline font-label-md pl-sm py-sm">
<span>4k</span>
<span>3k</span>
<span>2k</span>
<span>1k</span>
<span>0</span>
</div>
{/* Bars */}
<div className="w-full h-full flex items-end justify-around pl-xl pr-sm gap-2">
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-fixed-dim/40 rounded-t-sm h-[30%] bar-hover relative group-hover:bg-primary-fixed-dim transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">1,200</div>
</div>
<span className="font-label-md text-outline">Jan</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-fixed-dim/40 rounded-t-sm h-[45%] bar-hover relative group-hover:bg-primary-fixed-dim transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">1,800</div>
</div>
<span className="font-label-md text-outline">Feb</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-container rounded-t-sm h-[60%] bar-hover relative shadow-[0_0_10px_rgba(25,118,210,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">2,400</div>
</div>
<span className="font-label-md text-on-surface font-bold">Mar</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-fixed-dim/40 rounded-t-sm h-[50%] bar-hover relative group-hover:bg-primary-fixed-dim transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">2,000</div>
</div>
<span className="font-label-md text-outline">Apr</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-fixed-dim/40 rounded-t-sm h-[75%] bar-hover relative group-hover:bg-primary-fixed-dim transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">3,000</div>
</div>
<span className="font-label-md text-outline">May</span>
</div>
<div className="w-full flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-full bg-primary-fixed-dim/40 rounded-t-sm h-[85%] bar-hover relative group-hover:bg-primary-fixed-dim transition-colors">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-on-tertiary px-sm py-xs rounded font-label-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-md">3,400</div>
</div>
<span className="font-label-md text-outline">Jun</span>
</div>
</div>
</div>
</div>
{/* Geographic Distribution Map Area */}
<div className="md:col-span-4 glass-card rounded-xl p-lg shadow-sm flex flex-col min-h-[400px]">
<div className="flex justify-between items-center mb-md">
<h3 className="font-headline-md text-headline-md text-on-background">Distribution</h3>
<button className="p-xs hover:bg-surface-container rounded-full text-outline hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
{/* Map Placeholder Image */}
<div className="flex-1 rounded-lg overflow-hidden relative bg-surface-container border border-outline-variant/30">
<img alt="World Map Visualization" className="w-full h-full object-cover opacity-80" data-alt="A stylized, modern data visualization map of the world or North America. The map should be depicted in a sleek, minimalist style with light gray and subtle blue tones, fitting a light-mode enterprise UI. Abstract glowing dots or markers should indicate high concentrations of data points in major global regions. The overall feel is analytical, clean, and high-tech without being overly dark or sci-fi." data-location="Global" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASwQsHgYEDrfUZzl9ee_rJoULy_DM44iTwn2PN0M2y_xQ1O_c8JvfmOD-jKkdYgN0q-h1M-3oMgYcynjVpBzXarDFUJMszndLVKaOByXqWo1SINKK-cxSo0mVEB1wmcSasleYn_YszRUpXg2X7ZX_mcz2MkxvzdAqFePTnfCdiW3-xeUMkvcVaV70qmV6sycL_Rgg1OH3z6oEXbYsvHhDUM5IbQrdZdKYQBmskjDd-ZhYHz4ueQ5aBiDQXzIXWB6aGz-BmxBP_IXQ" />
{/* Overlay Legend */}
<div className="absolute bottom-sm left-sm bg-surface/90 backdrop-blur-sm p-sm rounded-lg border border-outline-variant/50 shadow-sm">
<ul className="space-y-xs">
<li className="flex items-center gap-sm font-label-md"><span className="w-3 h-3 rounded-full bg-primary"></span> North America (45%)</li>
<li className="flex items-center gap-sm font-label-md"><span className="w-3 h-3 rounded-full bg-tertiary-container"></span> Europe (30%)</li>
<li className="flex items-center gap-sm font-label-md"><span className="w-3 h-3 rounded-full bg-secondary"></span> APAC (25%)</li>
</ul>
</div>
</div>
</div>
{/* Top Customers Table */}
<div className="md:col-span-12 glass-card rounded-xl p-lg shadow-sm overflow-hidden">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-lg gap-md">
<h3 className="font-headline-md text-headline-md text-on-background">Top Customers by LTV</h3>
<div className="relative w-full sm:w-auto">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline text-[18px]">search</span>
<input className="pl-xl pr-md py-xs rounded-md border border-outline-variant bg-surface focus:outline-none focus:border-primary font-body-md w-full sm:w-64" placeholder="Search customers..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="border-b border-outline-variant/50 text-outline font-title-md">
<th className="py-sm px-md font-medium">Customer / Company</th>
<th className="py-sm px-md font-medium">Industry</th>
<th className="py-sm px-md font-medium">Join Date</th>
<th className="py-sm px-md font-medium">Status</th>
<th className="py-sm px-md font-medium text-right">Lifetime Value</th>
</tr>
</thead>
<tbody className="font-body-md text-on-surface">
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">AC</div>
<div>
<div className="font-bold">Acme Corp</div>
<div className="text-outline text-xs">Enterprise Plan</div>
</div>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Technology</td>
<td className="py-md px-md text-on-surface-variant">Jan 12, 2021</td>
<td className="py-md px-md">
<span className="px-sm py-xs bg-[#059669]/10 text-[#059669] rounded-full font-label-md inline-flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-[#059669]"></span> Active
                                        </span>
</td>
<td className="py-md px-md text-right font-bold">$124,500</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xs">GI</div>
<div>
<div className="font-bold">Global Industries</div>
<div className="text-outline text-xs">Pro Plan</div>
</div>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Manufacturing</td>
<td className="py-md px-md text-on-surface-variant">Mar 05, 2022</td>
<td className="py-md px-md">
<span className="px-sm py-xs bg-[#059669]/10 text-[#059669] rounded-full font-label-md inline-flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-[#059669]"></span> Active
                                        </span>
</td>
<td className="py-md px-md text-right font-bold">$89,200</td>
</tr>
<tr className="border-b border-outline-variant/20 hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-secondary text-on-secondary flex items-center justify-center font-bold text-xs">S</div>
<div>
<div className="font-bold">Starkware</div>
<div className="text-outline text-xs">Enterprise Plan</div>
</div>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Finance</td>
<td className="py-md px-md text-on-surface-variant">Nov 28, 2021</td>
<td className="py-md px-md">
<span className="px-sm py-xs bg-tertiary-container/10 text-tertiary-container rounded-full font-label-md inline-flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span> At Risk
                                        </span>
</td>
<td className="py-md px-md text-right font-bold">$76,450</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
<td className="py-md px-md">
<div className="flex items-center gap-md">
<div className="w-8 h-8 rounded bg-surface-dim border border-outline-variant text-on-surface-variant flex items-center justify-center font-bold text-xs">N</div>
<div>
<div className="font-bold">Nexus Dynamics</div>
<div className="text-outline text-xs">Basic Plan</div>
</div>
</div>
</td>
<td className="py-md px-md text-on-surface-variant">Healthcare</td>
<td className="py-md px-md text-on-surface-variant">Aug 14, 2023</td>
<td className="py-md px-md">
<span className="px-sm py-xs bg-[#059669]/10 text-[#059669] rounded-full font-label-md inline-flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-[#059669]"></span> Active
                                        </span>
</td>
<td className="py-md px-md text-right font-bold">$42,100</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-md flex justify-between items-center text-outline font-label-md pt-sm border-t border-outline-variant/20">
<span>Showing 4 of 245 records</span>
<div className="flex gap-sm">
<button className="px-sm py-xs rounded hover:bg-surface-container disabled:opacity-50" disabled>Prev</button>
<button className="px-sm py-xs rounded bg-primary-container text-on-primary-container">1</button>
<button className="px-sm py-xs rounded hover:bg-surface-container">2</button>
<button className="px-sm py-xs rounded hover:bg-surface-container">Next</button>
</div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerAnalyticsRetention;
