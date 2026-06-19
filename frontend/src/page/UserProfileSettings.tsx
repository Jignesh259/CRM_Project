import React from 'react';
import '../style/Dashboard.css';

const UserProfileSettings: React.FC = () => {
  return (
    <>
      
 SideNavBar (Hidden on Mobile, Visible on Desktop) 
<nav className="hidden md:flex flex-col h-screen py-lg px-md fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest border-r border-outline-variant/10 shadow-md z-50">
{/* Brand Header */}
<div className="flex items-center gap-md px-md mb-xl">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container">domain</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md text-surface-container-lowest dark:text-primary">CommSync</h1>
<p className="font-label-md text-label-md text-surface-variant">Enterprise ERP</p>
</div>
</div>
{/* Main Navigation Links */}
<ul className="flex flex-col gap-xs flex-1">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">insights</span>
<span>Analytics</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">group</span>
<span>Customers</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">leaderboard</span>
<span>Sales Pipeline</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span>Inventory</span>
</a>
</li>
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">description</span>
<span>Reports</span>
</a>
</li>
</ul>
{/* Footer Navigation Links */}
<ul className="flex flex-col gap-xs mt-auto pt-lg border-t border-white/10">
<li>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">contact_support</span>
<span>Support</span>
</a>
</li>
<li>
{/* Active State Applied Here: "Settings" */}
<a className="flex items-center gap-md px-md py-sm bg-primary-container text-on-primary-container rounded-lg active:translate-x-1 font-label-md text-label-md" href="#">
<span className="material-symbols-outlined icon-fill">settings</span>
<span>Settings</span>
</a>
</li>
</ul>
</nav>
 Main Content Wrapper 
<div className="flex-1 flex flex-col md:ml-[280px] h-full overflow-hidden">
{/* TopNavBar */}
<header className="flex justify-between items-center px-lg w-full sticky top-0 z-40 backdrop-blur-md bg-surface/80 dark:bg-inverse-surface/80 border-b border-outline-variant dark:border-outline shadow-sm h-16">
{/* Mobile Brand (Visible only on mobile since sidebar hides) */}
<div className="md:hidden flex items-center gap-sm">
<span className="text-title-md font-title-md text-primary dark:text-primary-fixed-dim">CommSync</span>
</div>
{/* Search Area (Placeholder for structure alignment) */}
<div className="hidden md:flex flex-1 max-w-md mx-md">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-10 pl-10 pr-4 rounded-full border border-outline-variant bg-surface-container-lowest focus:border-primary focus:ring-1 focus:ring-primary outline-none font-body-md text-body-md transition-all" placeholder="Search across enterprise..." type="text" />
</div>
</div>
{/* Trailing Actions & Profile */}
<div className="flex items-center gap-sm ml-auto">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95">
<span className="material-symbols-outlined">help</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary dark:text-primary-fixed-dim hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 md:hidden">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-[1px] h-6 bg-outline-variant mx-sm hidden md:block"></div>
<button className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant ml-sm shrink-0 cursor-pointer active:scale-95 ring-2 ring-transparent hover:ring-primary/30 transition-all">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A close-up professional headshot of a person looking directly at the camera. The lighting is soft and studio-quality, emphasizing a modern, trustworthy corporate aesthetic. The background is a clean, neutral gray to ensure the subject stands out clearly, fitting a high-end enterprise software profile picture placeholder." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRYT2K-QW4KOJG1VeyXEZMRDJHnvTjlJwc2S6v6foQndFj2qhvTxfQt1AGciw9ZIb70V-xvTz0s3rfUSSBieEj1dO2cuVvpriT_4pxKWvJpHfRJZp4MnF5RAsXCMwdvh5tINiyn_jlFVoY1VsLFLqg6u0FdldLyhdqGsWrzp2KTFw2tI35j9xbEAFqwUjwM8MV76Vqxpb01KrxhfRg7MGCg9Irw65CU4mCd8ew7WwUYt-jNbK2I944yZMKFdfXDo-1FMIEiZ3vln4" />
</button>
</div>
</header>
{/* Page Content Canvas */}
<main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop">
<div className="max-w-[1024px] mx-auto w-full">
{/* Page Header */}
<div className="mb-xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-xs">Profile Settings</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Manage your personal information, contact details, and security preferences.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
{/* Left Column: Profile & Info */}
<div className="lg:col-span-8 flex flex-col gap-lg">
{/* Profile Photo Card */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] overflow-hidden">
{/* Banner Area */}
<div className="h-32 w-full bg-gradient-to-r from-primary-container to-surface-tint relative">
<div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]"></div>
</div>
{/* Card Body */}
<div className="px-xl pb-xl relative">
{/* Avatar Upload */}
<div className="relative w-24 h-24 -mt-12 mb-lg group">
<img alt="Profile" className="w-full h-full rounded-full object-cover border-4 border-surface-container-lowest shadow-sm" data-alt="A detailed professional headshot of a user, formatted as a circular profile avatar. The subject is well-lit with natural, flattering light against a subtle gradient background. The overall style is clean, modern, and aligned with a premium enterprise application interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUdP26WiiSVSprNlJEs05VWEpGAKDph1lbrDyJBVzluvJmK3UdtGzFuL45_tEMVq2dglfnhEinJU5NonBfO4kV2jg3G0vrcPP63zTdXVYr6ruT4izmJuwUlMWP4q5jVX0ZGV2OzGsxohU1-7JaCrGoaVWTaAVcP_R_F99x2Krs5IdPOTgtsr1SqjXLcYgb9HDrkBrw-fiE8sNB-qqng9b6h_yA5Hh_qrTtbyVZ_IrIJOq6un1NgcRkd_POd1ycybs7YR1s61J_M2E" />
<label className="absolute inset-0 bg-inverse-surface/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity backdrop-blur-sm border-4 border-transparent">
<input accept="image/*" className="hidden" type="file" />
<span className="material-symbols-outlined text-white">photo_camera</span>
</label>
{/* Online Status Indicator */}
<div className="absolute bottom-1 right-1 w-5 h-5 bg-[#10b981] border-2 border-surface-container-lowest rounded-full"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-title-md text-title-md text-on-surface">Alex Mercer</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Senior Operations Manager</p>
</div>
<button className="h-[32px] px-md rounded-lg border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-xs">
<span className="material-symbols-outlined text-[18px]">upload</span>
                                        Update Photo
                                    </button>
</div>
</div>
</section>
{/* Personal Information Form Card */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-xl">
<div className="mb-lg border-b border-outline-variant/30 pb-sm">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">person</span>
                                    Personal Information
                                </h3>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-lg">
{/* Full Name */}
<div className="col-span-1 md:col-span-2">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Full Name</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" type="text" value="Alex Mercer" />
</div>
{/* Job Title */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Job Title</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" type="text" value="Senior Operations Manager" />
</div>
{/* Phone Number */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Phone Number</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" type="tel" value="+1 (555) 123-4567" />
</div>
{/* Email with Verification Badge */}
<div className="col-span-1 md:col-span-2">
<div className="flex justify-between items-end mb-xs">
<label className="block font-label-md text-label-md text-on-surface-variant">Email Address</label>
<span className="inline-flex items-center gap-xs px-sm py-0.5 rounded-full bg-primary/10 text-primary font-label-md text-[11px] leading-tight">
<span className="material-symbols-outlined text-[14px] icon-fill">verified</span>
                                            Verified
                                        </span>
</div>
<input className="w-full h-[40px] px-md rounded-lg border border-outline-variant bg-surface-container text-on-surface-variant cursor-not-allowed font-body-md text-body-md outline-none" readOnly type="email" value="alex.mercer@enterprise.com" />
<p className="font-body-md text-[12px] text-on-surface-variant mt-xs">Email address cannot be changed directly. Contact IT support to request a modification.</p>
</div>
</form>
</section>
</div>
{/* Right Column: Security & Actions */}
<div className="lg:col-span-4 flex flex-col gap-lg">
{/* Security Card */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-xl">
<div className="mb-lg border-b border-outline-variant/30 pb-sm">
<h3 className="font-title-md text-title-md text-on-surface flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">shield_lock</span>
                                    Security
                                </h3>
</div>
{/* Password Section */}
<div className="space-y-md mb-xl">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Current Password</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" placeholder="••••••••" type="password" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">New Password</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" placeholder="Enter new password" type="password" />
</div>
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs">Confirm New Password</label>
<input className="w-full h-[40px] px-md rounded-lg border border-outline bg-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none font-body-md text-body-md text-on-surface transition-all" placeholder="Confirm new password" type="password" />
</div>
</div>
{/* 2FA Section */}
<div className="bg-surface-container-low p-md rounded-lg border border-outline-variant/50">
<div className="flex items-center justify-between">
<div>
<h4 className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-xs">
                                            Two-Factor Authentication
                                            <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
</h4>
<p className="font-body-md text-[12px] text-on-surface-variant mt-0.5">Adds an extra layer of security.</p>
</div>
{/* Custom Toggle Switch */}
<label className="relative inline-flex items-center cursor-pointer">
<input checked className="sr-only peer" type="checkbox" value="" />
<div className="w-11 h-6 bg-outline-variant rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-outline after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</section>
{/* Action Buttons (Sticky on mobile, static on desktop) */}
<section className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] p-md flex flex-col sm:flex-row gap-md justify-end mt-auto sticky bottom-margin-mobile md:static">
<button className="h-[40px] px-lg rounded-lg border border-outline text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors w-full sm:w-auto font-semibold">
                                Cancel
                            </button>
<button className="h-[40px] px-lg rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:shadow-md transition-all w-full sm:w-auto font-semibold">
                                Save Changes
                            </button>
</section>
</div>
</div>
{/* Bottom Spacer for mobile scrolling */}
<div className="h-24 md:h-8 w-full"></div>
</div>
</main>
</div>

    </>
  );
};

export default UserProfileSettings;
