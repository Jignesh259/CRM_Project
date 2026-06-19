import React from 'react';
import '../style/Dashboard.css';

const CustomerProfileDetails: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest text-primary dark:text-primary-fixed-dim font-body-md text-body-md shadow-xl flex flex-col h-screen py-md transition-all duration-300 ease-in-out z-50 hidden md:flex">
{/* Header */}
<div className="px-lg pb-md mb-md border-b border-surface-variant/10">
<div className="flex items-center gap-sm mb-xs">
<div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-on-primary font-bold">
<span className="material-symbols-outlined text-title-md">sync</span>
</div>
<h1 className="font-title-md text-title-md font-bold text-surface-lowest dark:text-on-surface">CommSync</h1>
</div>
<p className="text-outline text-label-md">Enterprise ERP</p>
</div>
{/* CTA */}
<div className="px-md mb-md">
<button className="w-full bg-primary-container text-on-primary-container hover:bg-primary-container/80 transition-colors py-sm px-md rounded-lg font-title-md text-body-md flex items-center justify-center gap-sm shadow-sm">
<span className="material-symbols-outlined text-title-md">add</span>
                New Record
            </button>
</div>
{/* Navigation Links */}
<div className="flex-1 overflow-y-auto">
<ul className="space-y-xs px-xs">
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md bg-primary-container text-on-primary-container font-title-md rounded-lg mx-2 shadow-sm" href="#">
<span className="material-symbols-outlined" data-icon="group">group</span>
<span>CRM</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Sales</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
<span>Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<span>Finance</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span>Reports</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span>Settings</span>
</a>
</li>
</ul>
</div>
{/* Footer Links */}
<div className="mt-auto px-xs pt-md border-t border-surface-variant/10">
<ul className="space-y-xs">
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span>Support</span>
</a>
</li>
<li>
<a className="flex items-center gap-md py-sm px-md text-on-surface-variant hover:text-on-primary transition-colors mx-2 hover:bg-primary-container/20 rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="info">info</span>
<span>Help Center</span>
</a>
</li>
</ul>
</div>
</nav>
 TopNavBar 
<header className="fixed top-0 right-0 w-[calc(100%-280px)] bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-xl text-primary font-title-md text-title-md shadow-sm backdrop-blur-md flex justify-between items-center h-16 px-lg z-40 hidden md:flex border-b-0">
{/* Search / Left Area */}
<div className="flex items-center gap-md flex-1">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-body-md focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none h-[32px]" placeholder="Search..." type="text" />
</div>
<h2 className="font-display-lg text-headline-md font-black text-primary ml-lg hidden lg:block">CommSync CRM</h2>
</div>
{/* Right Actions */}
<div className="flex items-center gap-md">
<button className="bg-primary-container/10 text-primary hover:bg-primary-container/20 px-4 py-1.5 rounded-full text-body-md font-medium transition-colors border border-primary/20 flex items-center gap-2 h-[32px]">
<span className="material-symbols-outlined text-sm">auto_awesome</span>
                AI Insights
            </button>
<div className="flex items-center gap-sm border-l border-outline-variant/30 pl-md ml-xs">
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-variant">
<span className="material-symbols-outlined" data-icon="contrast">contrast</span>
</button>
<button className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-sm cursor-pointer">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a business user in a modern office setting, bright lighting, high quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr0BAI2uxhSf58LvdWdDRi-J-ls1ZfPHSVBgqjXla6iqdBuNWdes-oq7stKR-KXFwcoD2SjWSzNkDbLjHKU2ed61g7b8MfScP_cUH8AwgQG3pagfvtCHfCWMgsfOvjpDwnL_F4LNSlmKQxuF2EqBZlafcjTGu4DkaHMvFdEY9GDbbQrIH-1ruEgy3qiszLGJx019YywEoeMKYRvsgugQGmZGAIz58izMjs-L3o3d8Oou8EUjhMPq598t0amZ_ghcmTV74wPWn41aY" />
</button>
</div>
</div>
</header>
 Main Content Area 
<main className="md:ml-[280px] pt-20 px-margin-mobile md:px-margin-desktop pb-2xl max-w-container-max mx-auto">
{/* Profile Header Bento */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-lg mb-lg">
{/* Main Identity Card */}
<div className="md:col-span-8 glass-panel rounded-xl p-lg relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
<div className="absolute top-0 right-0 p-md">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-label-md font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">star</span>
                        Key Account
                    </span>
</div>
<div className="flex flex-col sm:flex-row gap-lg items-start sm:items-center">
<div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-primary to-secondary">
<img alt="Sarah Jenkins" className="w-full h-full rounded-full border-4 border-surface-container-lowest object-cover" data-alt="A professional headshot of a female executive in a well-lit modern corporate environment, high resolution." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1gKFBTNq_gz4CcwhDYogJqUXtRAab1az_ok2rGkMEZJGr_Jp1mZYTJhvs78OUf3qim5umlNTPtCB9BEhdvL-9BxsLbUTI_NPY0PWfDyJhMH17kJYhKWIhavCsOSqVuIA_ghx7qXrww6d8hEIoCt7oEaEQN-rGIlIPXj-_mVeWTtCM9HR2lfb5rq6SHXK0WnmTiGLwENP6Vpeygj7p9YhpF4kt76rZoJQnfcxZaUm-H7eq0MFb2lFtsHKXAHwHNkYwT1aDB1hsH8" />
<div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-surface-container-lowest rounded-full"></div>
</div>
<div className="flex-1">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Sarah Jenkins</h1>
<p className="font-body-md text-body-md text-on-surface-variant mb-md">VP of Procurement @ TechFlow Industries</p>
<div className="flex flex-wrap gap-sm">
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">location_on</span> Austin, TX
                            </span>
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Enterprise
                            </span>
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">schedule</span> Customer since 2021
                            </span>
</div>
</div>
</div>
</div>
{/* Health Score Card */}
<div className="md:col-span-4 glass-panel rounded-xl p-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-md">
<h3 className="font-title-md text-title-md text-on-surface">Account Health</h3>
<button className="text-outline hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div className="flex items-end gap-md">
<div className="text-[48px] font-bold text-primary leading-none tracking-tighter">94</div>
<div className="pb-1 text-body-md text-on-surface-variant">/100</div>
</div>
<div className="mt-auto pt-md">
<div className="w-full bg-surface-container-highest rounded-full h-2 mb-2">
<div className="bg-primary h-2 rounded-full" style={{"width": "94%"}}></div>
</div>
<p className="text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-green-600">trending_up</span>
<span className="text-green-600">+2 pts</span> from last month
                    </p>
</div>
</div>
</div>
{/* Main Content Layout Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
{/* Left Column: Primary Data Canvas */}
<div className="lg:col-span-8 space-y-lg">
{/* Quick Stats Row */}
<div className="grid grid-cols-2 sm:grid-cols-3 gap-md">
<div className="glass-panel p-md rounded-xl shadow-sm border-t-4 border-t-primary hover:-translate-y-1 transition-transform">
<p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total MRR</p>
<p className="font-headline-md text-headline-md text-on-surface">$12,450</p>
</div>
<div className="glass-panel p-md rounded-xl shadow-sm border-t-4 border-t-secondary hover:-translate-y-1 transition-transform">
<p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Active Licenses</p>
<p className="font-headline-md text-headline-md text-on-surface">145</p>
</div>
<div className="glass-panel p-md rounded-xl shadow-sm border-t-4 border-t-tertiary-container hidden sm:block hover:-translate-y-1 transition-transform">
<p className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Support Tickets</p>
<p className="font-headline-md text-headline-md text-on-surface">2 <span className="text-label-md text-outline font-normal">open</span></p>
</div>
</div>
{/* Order History Table */}
<div className="glass-panel rounded-xl shadow-sm overflow-hidden border border-outline-variant/30">
<div className="p-md border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-lowest/50">
<h3 className="font-title-md text-title-md text-on-surface">Recent Orders</h3>
<button className="text-primary text-label-md font-medium hover:underline flex items-center gap-1">
                            View All <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-label-md text-on-surface-variant uppercase tracking-wider border-b border-outline-variant/30">
<th className="p-md font-medium">Order ID</th>
<th className="p-md font-medium">Date</th>
<th className="p-md font-medium">Status</th>
<th className="p-md font-medium text-right">Amount</th>
<th className="p-md font-medium w-10"></th>
</tr>
</thead>
<tbody className="text-body-md text-on-surface divide-y divide-outline-variant/10">
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
<td className="p-md font-medium text-primary">#ORD-2023-089</td>
<td className="p-md text-on-surface-variant">Oct 24, 2023</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">Fulfilled</span>
</td>
<td className="p-md text-right font-medium">$4,200.00</td>
<td className="p-md text-right text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</td>
</tr>
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
<td className="p-md font-medium text-primary">#ORD-2023-042</td>
<td className="p-md text-on-surface-variant">Sep 12, 2023</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">Fulfilled</span>
</td>
<td className="p-md text-right font-medium">$3,850.00</td>
<td className="p-md text-right text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</td>
</tr>
<tr className="hover:bg-primary-container/5 transition-colors group cursor-pointer">
<td className="p-md font-medium text-primary">#ORD-2023-015</td>
<td className="p-md text-on-surface-variant">Aug 05, 2023</td>
<td className="p-md">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">Processing</span>
</td>
<td className="p-md text-right font-medium">$1,200.00</td>
<td className="p-md text-right text-outline opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Activity Timeline */}
<div className="glass-panel rounded-xl shadow-sm p-lg border border-outline-variant/30">
<h3 className="font-title-md text-title-md text-on-surface mb-lg">Recent Activity</h3>
<div className="relative border-l-2 border-outline-variant/30 ml-3 space-y-lg pb-md">
{/* Timeline Item 1 */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
<h4 className="font-title-md text-body-md font-medium text-on-surface">Q3 Review Call Completed</h4>
<span className="text-label-md text-on-surface-variant">2 hours ago</span>
</div>
<p className="text-body-md text-on-surface-variant mb-2">Discussed upcoming renewal and expansion opportunities for the European team.</p>
<div className="bg-surface-container-low p-sm rounded-md border border-outline-variant/20 inline-block">
<span className="text-label-md text-primary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">description</span> Q3_Notes_SarahJ.pdf
                                </span>
</div>
</div>
{/* Timeline Item 2 */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-surface-variant ring-4 ring-surface-container-lowest border border-outline"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
<h4 className="font-title-md text-body-md font-medium text-on-surface">Support Ticket #892 Resolved</h4>
<span className="text-label-md text-on-surface-variant">Yesterday</span>
</div>
<p className="text-body-md text-on-surface-variant">Issue with SSO integration was resolved by the engineering team.</p>
</div>
{/* Timeline Item 3 */}
<div className="relative pl-lg">
<div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
<h4 className="font-title-md text-body-md font-medium text-on-surface">Contract Renewed</h4>
<span className="text-label-md text-on-surface-variant">Oct 15, 2023</span>
</div>
<p className="text-body-md text-on-surface-variant">Annual enterprise license renewed for 145 seats.</p>
</div>
</div>
</div>
</div>
{/* Right Column: Context & Actions Context Sidebar */}
<div className="lg:col-span-4 space-y-lg">
{/* Quick Actions */}
<div className="glass-panel rounded-xl shadow-sm p-md border border-outline-variant/30 flex flex-col gap-sm">
<button className="w-full bg-primary text-on-primary hover:bg-primary/90 transition-colors py-2 px-4 rounded-md font-medium text-body-md flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">mail</span>
                        Log Email
                    </button>
<div className="grid grid-cols-2 gap-sm">
<button className="bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors py-2 px-3 rounded-md font-medium text-body-md border border-outline-variant/50 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">call</span>
                            Call
                        </button>
<button className="bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors py-2 px-3 rounded-md font-medium text-body-md border border-outline-variant/50 flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">event</span>
                            Meeting
                        </button>
</div>
</div>
{/* Contact Info */}
<div className="glass-panel rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden">
<div className="p-md border-b border-outline-variant/20 bg-surface-container-lowest/50">
<h3 className="font-title-md text-title-md text-on-surface">Contact Information</h3>
</div>
<div className="p-md space-y-md">
<div>
<p className="text-label-md text-on-surface-variant mb-1">Email Address</p>
<div className="flex items-center justify-between group">
<a className="font-body-md text-body-md text-primary hover:underline" href="mailto:sarah.j@techflow.io">sarah.j@techflow.io</a>
<button className="text-outline opacity-0 group-hover:opacity-100 hover:text-on-surface transition-all">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</div>
<div>
<p className="text-label-md text-on-surface-variant mb-1">Phone Number</p>
<div className="flex items-center justify-between group">
<a className="font-body-md text-body-md text-on-surface" href="tel:+15550198234">+1 (555) 019-8234</a>
<button className="text-outline opacity-0 group-hover:opacity-100 hover:text-on-surface transition-all">
<span className="material-symbols-outlined text-[16px]">content_copy</span>
</button>
</div>
</div>
<div>
<p className="text-label-md text-on-surface-variant mb-1">LinkedIn</p>
<a className="font-body-md text-body-md text-primary hover:underline flex items-center gap-1" href="#">
                                linkedin.com/in/sarahjenkins <span className="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
</div>
{/* Private Notes */}
<div className="glass-panel rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden flex flex-col h-[300px]">
<div className="p-md border-b border-outline-variant/20 bg-surface-container-lowest/50 flex justify-between items-center">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">edit_note</span> Notes
                        </h3>
<button className="text-primary text-label-md font-medium hover:underline">Edit</button>
</div>
<div className="p-md flex-1 overflow-y-auto bg-yellow-50/30 dark:bg-yellow-900/10">
<p className="font-body-md text-body-md text-on-surface-variant whitespace-pre-line">
                            Prefers communication via email. 
                            
                            Is a key decision maker for the upcoming Q4 expansion into the APAC region. 
                            
                            Make sure to highlight the new compliance reporting features in the next sync, as that was a major pain point previously.
                        </p>
</div>
<div className="p-2 border-t border-outline-variant/20 bg-surface-container-lowest">
<input className="w-full bg-transparent border-none text-body-md focus:ring-0 px-2 py-1 placeholder-outline" placeholder="Add a quick note..." type="text" />
</div>
</div>
</div>
</div>
</main>

    </>
  );
};

export default CustomerProfileDetails;
