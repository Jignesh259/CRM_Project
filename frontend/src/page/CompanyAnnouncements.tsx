import React from 'react';
import '../style/Dashboard.css';

const CompanyAnnouncements: React.FC = () => {
  return (
    <>
      
 SideNavBar 
<nav className="hidden md:flex flex-col h-screen py-lg space-y-sm bg-inverse-surface text-primary-fixed font-body-md text-body-md fixed left-0 top-0 w-[280px] shadow-xl z-50">
<div className="px-md mb-xl flex items-center space-x-sm">
<div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary">corporate_fare</span>
</div>
<div>
<h1 className="font-headline-md text-headline-md font-extrabold text-white">CommSync</h1>
<p className="text-surface-variant text-xs opacity-70">Enterprise Suite</p>
</div>
</div>
<button className="mx-md mb-lg bg-primary-container text-on-primary-container py-2 rounded-lg font-title-md text-sm hover:opacity-90 transition-opacity flex justify-center items-center space-x-2">
<span className="material-symbols-outlined text-sm">add</span>
<span>New Record</span>
</button>
<div className="flex-1 overflow-y-auto space-y-2">
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">groups</span>
                CRM
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">payments</span>
                Sales
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">account_balance</span>
                Finance
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">analytics</span>
                Reports
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">settings</span>
                Settings
            </a>
<a className="flex items-center px-lg py-3 bg-primary text-on-primary rounded-lg mx-md group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">campaign</span>
                Announcements
            </a>
</div>
<div className="mt-auto pt-lg border-t border-outline/20">
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">contact_support</span>
                Support
            </a>
<a className="flex items-center px-lg py-3 mx-md text-surface-variant hover:text-white hover:bg-white/10 transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined mr-sm group-hover:translate-x-1 duration-200">chat_bubble</span>
                Feedback
            </a>
</div>
</nav>
 Main Content Wrapper 
<div className="flex-1 md:ml-[280px] flex flex-col min-h-screen relative">
{/* TopNavBar (Mobile mainly, but structural for web) */}
<header className="sticky top-0 z-40 flex justify-between items-center w-full px-lg h-16 bg-surface/80 backdrop-blur-xl shadow-sm md:hidden">
<div className="flex items-center space-x-md">
<button className="text-on-surface md:hidden">
<span className="material-symbols-outlined">menu</span>
</button>
<span className="font-headline-md text-headline-md font-bold text-primary">CommSync</span>
</div>
<div className="flex items-center space-x-sm">
<span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 duration-150 p-2 hover:bg-primary/5 rounded-full">search</span>
<span className="material-symbols-outlined text-primary cursor-pointer active:scale-95 duration-150 p-2 hover:bg-primary/5 rounded-full">notifications</span>
<img alt="User avatar" className="w-8 h-8 rounded-full border border-outline/20" data-alt="A small, professional circular avatar portrait of a business user. Crisp white background, professional attire, soft lighting. Corporate minimal aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDID1LKIOSv20n3zyM5ZtfBiUUTvQv7x7bWvDUPrFTn2Kznq2rHXeELEHZMkF6vVgUneInflx8L9q9oHsGlbnNOdRjmVEBjCnui7PPCpRvKgKueqAaC3pZZvse_AnBXRDEH7v6_CiBRdtAzDH1ym-iE15DJXdL-qOx4bGMHLWsfQfNhE_8ZSkblXte0Ewq6SmkN-6Hbgcrbqgax46DlC5ou80KS1Sdqtl6H1cHJGcIDYK5OsqMyx9ONryxXZC3JBE6zMfMCcqWfW5U" />
</div>
</header>
{/* Canvas */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
<div className="max-w-container-max mx-auto">
{/* Page Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-xl pb-md border-b border-outline/10">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface mb-xs">Announcements</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Stay updated with the latest news, maintenance, and policy changes.</p>
</div>
<div className="mt-md md:mt-0 flex bg-surface-container-high rounded-lg p-xs">
<button className="px-md py-2 bg-surface text-primary rounded-md font-title-md text-sm shadow-sm">Active</button>
<button className="px-md py-2 text-on-surface-variant hover:text-on-surface rounded-md font-title-md text-sm transition-colors">Archive</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Main Feed Column */}
<div className="lg:col-span-8 xl:col-span-9 space-y-xl">
{/* Featured Hero Card */}
<div className="glass-panel rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer border-t-4 border-t-primary-container">
<div className="h-64 bg-surface-container-highest relative overflow-hidden">
<img alt="Featured announcement banner" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" data-alt="A wide hero image depicting a sleek, modern corporate office building interior bathed in bright, soft natural light. Large glass windows, clean lines, and a minimalist aesthetic with subtle blue architectural accents. The scene conveys progress, clarity, and professionalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc1IowEjWczq6bGHNtSZrJUKuthHf0rhCYUggLSkijPn8W7Y-1u0WdpAT5PqO82N4ttCetVwIz6ne9hCSQ3xAPOux0ZHDDR0PS66HgDuGE-p6FbSnaBEiDlHuZddowPn7j5OAgctk-z8ktAnCnWLK1zH2mpTSio5Ws6oMbpGucxJ7pn9XI6GNVIWIRAljXcl88mucEDdLPayrgdJTnWm7NiApag_l4qkdUMGk-QKCt2PKuVRZI8uXn3GpySaPRBlngO3JiAthyeTc" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-lg w-full">
<span className="inline-block px-3 py-1 bg-primary text-on-primary rounded-full font-label-md text-label-md mb-sm uppercase tracking-wider backdrop-blur-md bg-opacity-80">Company News</span>
<h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-2 shadow-sm">Q3 Enterprise Expansion &amp; Strategy Overview</h3>
</div>
</div>
<div className="p-lg bg-surface">
<div className="flex items-center space-x-3 mb-md">
<img alt="Author" className="w-10 h-10 rounded-full border border-outline/20" data-alt="A circular headshot of a female executive in a well-lit office environment. Crisp focus, professional demeanor, corporate minimalism." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9i0rOrnCd8DqKmVzwRvBigYBnDbp3F1dw7SLYMk9oceI0YiloxPFx5TEs0n_nq59ePx0U1258h6JC4qfne_ywdk7Eir-6qtQ-hOawrY07tZP_l6xtxf_ozHeaRi-sQabCFyDLKO7bRzu20mHOPfV7S329OFfagvp0lJXiRWwN3ReP_Va_JYXBE3J3IUVvxOtYP9XEoXgqjfUr3Cp60xjw07zWPssqrP5ZeATgHmhIbja2qqAz1kzh5NQHjZu100WE8YhmHF-6Eag" />
<div>
<p className="font-title-md text-sm text-on-surface">Sarah Jenkins</p>
<p className="font-body-md text-xs text-on-surface-variant">CEO • Oct 24, 2023</p>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant line-clamp-3 mb-md">
                                    As we close out an exceptional Q2, I am thrilled to share our strategic roadmap for the upcoming quarter. We are expanding our enterprise infrastructure to support the unprecedented growth in our EMEA region. This update includes details on upcoming product rollouts, structural reorganizations to better support key accounts, and our renewed commitment to zero-downtime deployments.
                                </p>
<a className="inline-flex items-center text-primary-container font-title-md text-sm hover:underline" href="#">
                                    Read Full Announcement <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
{/* Feed List */}
<div className="space-y-md">
<h4 className="font-title-md text-title-md text-on-surface border-b border-outline/10 pb-sm">Recent Updates</h4>
{/* Card 1 */}
<div className="glass-panel rounded-xl p-md flex flex-col sm:flex-row gap-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-full sm:w-48 h-32 bg-surface-container rounded-lg overflow-hidden shrink-0 hidden sm:block">
<img alt="System Maintenance" className="w-full h-full object-cover" data-alt="Close up of a computer screen displaying abstract data visualizations and code. The scene is lit with a cool, professional blue tint, representing technology, systems maintenance, and secure infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeY9qRgqaRaI2ZKmlBlRJoOrrHFmSmubDzA8E4B2V73CuTXRYuI23iiT_C837EJDvvqSgks1xXHr8VY_LxiUNZGR5z-NSEZfQSop_B3n0zC7yHuYJYsVukTUJWtFOo791nQSP7ND4G80CfDlaf3GHcUEaN0kfZHjmbdqoKkHLh1YqsnKliHitCSWIH-MKyuJESEmQ0CCstrEGGPNEWAO4EFEnWOulvrlNWFsRngmGYhEK9xLivK4jopxfmhCSFhOOzFEpORcQ81iw" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<span className="inline-block px-2 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded font-label-md text-[10px] uppercase tracking-wider">System Maintenance</span>
<span className="font-body-md text-xs text-on-surface-variant">Oct 20, 2023</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface mb-2">Scheduled Database Migration (US-East)</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Please be advised that we will be performing a scheduled database migration on Sunday, Oct 22nd from 2:00 AM to 4:00 AM EST. CommSync CRM access may be briefly interrupted.</p>
</div>
<a className="text-primary hover:text-primary-container font-title-md text-sm mt-sm inline-block" href="#">Read Details</a>
</div>
</div>
{/* Card 2 */}
<div className="glass-panel rounded-xl p-md flex flex-col sm:flex-row gap-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-full sm:w-48 h-32 bg-surface-container rounded-lg overflow-hidden shrink-0 hidden sm:block">
<img alt="Product Update" className="w-full h-full object-cover" data-alt="A clean, modern desk setup showing hands typing on a laptop with a smartphone nearby. The setting is bright and professional, illustrating productivity, new software features, and product updates. Minimalist white and gray tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkELjN-BHCAMGgv5yykY4PB3E9UQRzQfv4TCwGdcgLlkU5f_ZSVKruEjiCRLd_kp4RAhlToirw-5yRO3UiXIAegQMYGsviabwujW0OPMMVH2O_SiK1WWBEtNQb8Zde8d_xkYhXNjnbViNVW_FefBQoav-TyKBUCQ5wuDGQRkGwpFNWXF4MTvN2pC7uuYkx4jLib4BLN75woys-VqzqGPTSROXoKttPoSZW0yaIca4HgAD8oRtfaXPBgHoeN4Gai0OXuH-kZNzGeGQ" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<span className="inline-block px-2 py-1 bg-secondary-fixed text-on-secondary-fixed rounded font-label-md text-[10px] uppercase tracking-wider">Product Update</span>
<span className="font-body-md text-xs text-on-surface-variant">Oct 18, 2023</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface mb-2">CommSync v4.2 Release: Enhanced Reporting</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">The latest version of CommSync introduces drag-and-drop widget customization for the Analytics dashboard, along with new export formats for end-of-month financial summaries.</p>
</div>
<a className="text-primary hover:text-primary-container font-title-md text-sm mt-sm inline-block" href="#">View Release Notes</a>
</div>
</div>
{/* Card 3 */}
<div className="glass-panel rounded-xl p-md flex flex-col sm:flex-row gap-md hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-full sm:w-48 h-32 bg-surface-container rounded-lg overflow-hidden shrink-0 hidden sm:block">
<img alt="HR Update" className="w-full h-full object-cover" data-alt="A group of diverse professionals having a collaborative discussion in a bright, modern glass-walled meeting room. The image conveys teamwork, human resources, and company culture in a crisp, clean light-mode style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5oKF59vtJgaCKIPlSezgsfLk7WzuqK2-qsDC9zLm0fIY9odJaREO86AvNWs8DeiSkDbJPh7K_HxAU0HlYcAbA9XHq-iPTgZrrPxhV6WVVkIbSlXxaj1RQeNiA87xu-Ba2_cjdmekqGpa8gkAgUwnW7u0lId1jhcVjTQcT0uxFUe9_nnoyaU4RZzYFaepjTEohMyc58ynOJHm5lriWKfLxbt3-ACh1_Y_nwHBlY_nv_CreH-K-l6Rhl9fLyz39pQfWiVFTNps_AVw" />
</div>
<div className="flex-1 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-1">
<span className="inline-block px-2 py-1 bg-surface-container-highest text-on-surface rounded font-label-md text-[10px] uppercase tracking-wider">HR &amp; Policy</span>
<span className="font-body-md text-xs text-on-surface-variant">Oct 15, 2023</span>
</div>
<h4 className="font-title-md text-title-md text-on-surface mb-2">Updated 2024 Remote Work Guidelines</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">HR has finalized the updated guidelines regarding hybrid schedules, core hours, and remote equipment stipends for the upcoming calendar year.</p>
</div>
<a className="text-primary hover:text-primary-container font-title-md text-sm mt-sm inline-block" href="#">Read Policy</a>
</div>
</div>
</div>
<div className="flex justify-center pt-md">
<button className="px-lg py-2 border border-outline/30 rounded-lg text-primary font-title-md text-sm hover:bg-primary/5 transition-colors">Load More Announcements</button>
</div>
</div>
{/* Sidebar Widget Column */}
<div className="lg:col-span-4 xl:col-span-3 space-y-md">
<div className="glass-panel rounded-xl p-md">
<h4 className="font-title-md text-title-md text-on-surface mb-md flex items-center">
<span className="material-symbols-outlined mr-2 text-primary-container">link</span> Quick Links
                            </h4>
<ul className="space-y-sm">
<li>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group" href="#">
<span className="font-body-md text-on-surface-variant group-hover:text-primary">Employee Handbook</span>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">open_in_new</span>
</a>
</li>
<li>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group" href="#">
<span className="font-body-md text-on-surface-variant group-hover:text-primary">IT Support Portal</span>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">open_in_new</span>
</a>
</li>
<li>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group" href="#">
<span className="font-body-md text-on-surface-variant group-hover:text-primary">Expense Reporting</span>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">open_in_new</span>
</a>
</li>
<li>
<a className="flex items-center justify-between p-2 rounded-lg hover:bg-surface-container transition-colors group" href="#">
<span className="font-body-md text-on-surface-variant group-hover:text-primary">Brand Assets</span>
<span className="material-symbols-outlined text-sm text-outline group-hover:text-primary">open_in_new</span>
</a>
</li>
</ul>
</div>
<div className="glass-panel rounded-xl p-md">
<h4 className="font-title-md text-title-md text-on-surface mb-md flex items-center">
<span className="material-symbols-outlined mr-2 text-primary-container">folder_open</span> Recent Documents
                            </h4>
<ul className="space-y-3">
<li className="flex items-start space-x-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-error-container text-on-error-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">picture_as_pdf</span>
</div>
<div>
<p className="font-body-md text-sm text-on-surface group-hover:text-primary transition-colors">Q3_Townhall_Deck.pdf</p>
<p className="font-body-md text-xs text-on-surface-variant">Added 2 days ago</p>
</div>
</li>
<li className="flex items-start space-x-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">description</span>
</div>
<div>
<p className="font-body-md text-sm text-on-surface group-hover:text-primary transition-colors">2024_Holiday_Schedule.docx</p>
<p className="font-body-md text-xs text-on-surface-variant">Added last week</p>
</div>
</li>
<li className="flex items-start space-x-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-sm">table_view</span>
</div>
<div>
<p className="font-body-md text-sm text-on-surface group-hover:text-primary transition-colors">Benefits_Comparison_Matrix.xlsx</p>
<p className="font-body-md text-xs text-on-surface-variant">Added Oct 12</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default CompanyAnnouncements;
