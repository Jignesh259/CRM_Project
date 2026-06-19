import React from 'react';
import '../style/Dashboard.css';

const UserManagementDirectory: React.FC = () => {
  return (
    <>
      
 Shared Component: SideNavBar 
<aside className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface shadow-md flex flex-col py-lg z-50">
{/* Header */}
<div className="px-gutter mb-xl flex items-center gap-md">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center overflow-hidden">
<img alt="Organization Logo" className="w-full h-full object-cover" data-alt="A clean, abstract geometric logo mark featuring interconnected blue and white 3D shapes representing an enterprise suite. The lighting is bright and modern, creating a professional and technological aesthetic suitable for a high-end software product." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQS07ugiETnqPhAtDilvdQ2Sm1nBf83UL4UrVjnlN0zJiN_r8_rgb7CHboK_H3I9gB8T1AoIlHWH09meNl5h6I4JHZ8UQguVOgvuWKDLEGHKtG3euXV61m9YDy-kCq1CFPiFJi6L5xSDs7frLg7-FnneOMKM53TuHySc6DcAnhWpyfV10X3goFSbxLHUdS3gkA6IlfIk1vAns-B5pm-bVvES4IsFunZyowe5rZRC9-N9YP4ThZ70LxxOSAeJuSokMJmgZXIPCtvt4" />
</div>
<div>
<h1 className="font-headline-md text-headline-md font-bold text-on-primary-fixed">CommSync</h1>
<p className="font-label-md text-label-md text-inverse-on-surface opacity-80">Enterprise Suite</p>
</div>
</div>
{/* CTA */}
<div className="px-md mb-lg">
<button className="w-full bg-primary text-on-primary font-label-md text-label-md py-sm rounded-lg flex items-center justify-center gap-xs cursor-pointer transition-all active:scale-95 hover:bg-primary/90">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>add</span> New Entry
            </button>
</div>
{/* Navigation Tabs */}
<nav className="flex flex-col h-full font-body-md text-body-md">
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span>Dashboard</span>
</a>
{/* Active State: CRM matches User Management intent */}
<a className="flex items-center gap-md bg-primary text-on-primary rounded-lg mx-2 my-1 px-md py-sm transition-colors cursor-pointer active:scale-95 shadow-sm" href="#">
<span className="material-symbols-outlined">groups</span>
<span className="font-medium">CRM</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Sales</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span>Inventory</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span>Finance</span>
</a>
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">assessment</span>
<span>Reports</span>
</a>
<div className="mt-auto">
<a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface mx-2 my-1 px-md py-sm rounded-lg hover:bg-surface-variant/10 transition-colors cursor-pointer active:scale-95" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
</div>
</nav>
</aside>
 Main Content Canvas 
<div className="ml-[280px] flex-1 flex flex-col min-h-screen relative">
{/* Shared Component: TopNavBar */}
<header className="docked full-width top-0 sticky z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm flex justify-between items-center px-margin-desktop h-16 duration-200 ease-in-out transition-all">
<div className="flex items-center gap-lg w-full max-w-2xl">
<div className="font-headline-md text-headline-md font-black text-primary">CommSync</div>
{/* Search on Left */}
<div className="relative flex-1 hidden md:block">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" style={{"fontSize": "20px"}}>search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-xl pr-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-on-surface-variant/60" placeholder="Global search..." type="text" />
</div>
</div>
<div className="flex items-center gap-sm">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">help</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200 ease-in-out overflow-hidden border border-outline-variant/30 ml-xs">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a smiling male executive wearing a casual suit. The background is a blurred modern office environment with natural light. The mood is approachable and professional, fitting an enterprise software profile picture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4FDJxYTeaI5qf4pPz_FcvJY9BdPCrKJFheVRdJwTyAHEHIB6nKZT30Yh97NTI_HdkOnE9pqjhDZC5KaCwmXbOLN-V_HX2UYav_iPV29Qzz3PtBpAffdK3_nAKtPMTNzcwOwzbvmXJILiBVRt0GvUC6KrlQ5rH_ut34n2bllYU5cyMKzaVDeReH6NIH3lYDwDHqO1lqaPe4dNrERxyH8JmeH-XLxm52EprovFMCTD0xC1g3hrgrT7SiQUPZV1xTsPUwCKFyySc7bc" />
</button>
</div>
</header>
{/* Page Specific Content */}
<main className="flex-1 p-margin-desktop flex flex-col gap-lg overflow-x-hidden">
{/* Action Header */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md border-b border-outline-variant/30 pb-lg">
<div>
<h2 className="font-display-lg text-display-lg text-on-surface tracking-tight">User Management</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs max-w-xl">
                        Oversee team members, assign organizational roles, and monitor system access levels across your workspace.
                    </p>
</div>
<div className="flex items-center gap-md mt-md md:mt-0">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-md top-1/2 -translate-y-1/2 text-on-surface-variant" style={{"fontSize": "20px"}}>search</span>
<input className="w-full h-[40px] bg-surface border border-outline-variant rounded-lg py-xs pl-xl pr-md font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-on-surface-variant/60 shadow-sm" placeholder="Search users by name or email" type="text" />
</div>
<button className="h-[40px] px-lg bg-primary text-on-primary font-label-md text-label-md font-medium rounded-lg shadow-sm hover:shadow-md hover:bg-primary/90 transition-all flex items-center gap-xs whitespace-nowrap active:scale-95">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>person_add</span> Add User
                    </button>
</div>
</div>
{/* Data Table Card (Level 1 Surface -> Level 2 Header) */}
<div className="bg-surface rounded-xl border border-outline-variant/30 shadow-sm flex-1 flex flex-col overflow-hidden relative">
{/* Ambient Top Edge Gradient for depth */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent"></div>
<div className="overflow-x-auto flex-1">
<table className="w-full text-left border-collapse min-w-[800px]">
<thead>
<tr className="bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-10">
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Member Details</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Email Contact</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Assigned Role</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Account Status</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold">Last Session</th>
<th className="py-md px-lg font-label-md text-label-md text-on-surface-variant font-semibold text-right">Manage</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-outline-variant/20 bg-surface">
{/* Row 1 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-sm px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 overflow-hidden flex-shrink-0">
<img alt="Sarah Jenkins" className="w-full h-full object-cover" data-alt="A bright, high-key portrait of a female professional smiling warmly. She is wearing a light gray blazer. The background is a clean, minimal office setting flooded with natural daylight. The aesthetic is modern, approachable, and highly polished, suitable for an enterprise user avatar." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-NOqvpoINrTmW94WjD8E2EmgjPFBnL2wDj5yjkZPH7jdGp08WJYuDQ-ge2LhHfdBAyfSqVDMb-yzm17isG-md2d1cHAnoUfSpxiFNNymwdJGDGlBSIFlwdu0nknOgHWZvK-nI7ZJbsO9gHQ4zoKI2GbzyZjbBCPzHhMzmbHW3vm5EGQ07vtVYmJSZZ0TVh_0PrG5w4w06-tPpse6ZEDEdAxwJ2n1mAQTDYOS03gDH93lI5zmzVa5iK5AvhGOLWpa2QbP_L08fkqU" />
</div>
<div>
<div className="font-medium text-on-surface">Sarah Jenkins</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Product Design Lead</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface-variant">sarah.j@commsync.io</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-primary-fixed text-on-primary-fixed">Admin</span>
</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                    </span>
</td>
<td className="py-sm px-lg text-on-surface-variant">Today, 09:41 AM</td>
<td className="py-sm px-lg text-right">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-sm px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 overflow-hidden flex-shrink-0">
<img alt="David Chen" className="w-full h-full object-cover" data-alt="A close-up portrait of a male professional with short dark hair and a slight beard, wearing a crisp white shirt. The lighting is soft and even, highlighting his thoughtful expression. The background is completely out of focus with subtle cool tones, fitting a modern software interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfU8rwBR3p2mYMEOp0M-i9uaMSQuMwCy1VUwE0fycivgFN4XC-pwkjWCYBPz9lXf0crYeM299YVLbL8O5xmNooknB06P31YL-mhH7TpCRnzgwppGkIgNBGLhbE74ejWUIeP_2IPMumhBzVLberN46DuepFynX9Z-9dn4GXdfVisVgEVEWpX7KnaOshwa9O5BueU7WuWsm6_Lt34ie-4LFwI4ACkHtwZ4Bez9azHQ9OjnYDCitnk_Zjq_n52XUC8NCYTgTXjlntMWs" />
</div>
<div>
<div className="font-medium text-on-surface">David Chen</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Senior Engineer</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface-variant">d.chen@commsync.io</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-secondary-fixed text-on-secondary-fixed">Editor</span>
</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                    </span>
</td>
<td className="py-sm px-lg text-on-surface-variant">Yesterday, 14:22 PM</td>
<td className="py-sm px-lg text-right">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-sm px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant/30 flex-shrink-0 text-on-surface-variant font-bold">
                                            AM
                                        </div>
<div>
<div className="font-medium text-on-surface">Amanda Miller</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Marketing Specialist</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface-variant">amanda.m@commsync.io</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-variant text-on-surface-variant">Viewer</span>
</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface-variant">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Offline
                                    </span>
</td>
<td className="py-sm px-lg text-on-surface-variant">Oct 12, 2023</td>
<td className="py-sm px-lg text-right">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-primary/5 transition-colors group bg-error/5">
<td className="py-sm px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 overflow-hidden flex-shrink-0 opacity-60 grayscale">
<img alt="Elena Rodriguez" className="w-full h-full object-cover" data-alt="A corporate portrait of a female executive with glasses. The lighting is slightly muted and desaturated. The background is a non-descript architectural wall. The image represents a deactivated or historical user profile in a database system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQalP7Omzi5KvhcyMOxBCRpbHJuMfgQe6uJk88zCf0iqlh1MZpOXxY0orud26c3jDYh0duu0DnYygf0I3BCXxttog_RmzxqO8PopfkZXSN405p6HQAMGqiTUBms8ZvrtvhjutPcvcD7nsfKve7YoM0rXdnjPMLJv6Rl3-CIRaaXcSFvmbZqTV6WNrZx5orsAGIAZcx0gZmKE4JLuj7uy_wXL0jB6AH7MJwXtAzQUqvPn4W0p_aYesvZw55IYlNPQb65GY-MZsYlok" />
</div>
<div>
<div className="font-medium text-on-surface opacity-80">Elena Rodriguez</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-0.5 opacity-80">Former Consultant</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface-variant opacity-80">elena.r@external.io</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-variant text-on-surface-variant opacity-80">Viewer</span>
</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-error-container text-on-error-container">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Suspended
                                    </span>
</td>
<td className="py-sm px-lg text-on-surface-variant opacity-80">Sep 01, 2023</td>
<td className="py-sm px-lg text-right">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>more_vert</span>
</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-primary/5 transition-colors group">
<td className="py-sm px-lg">
<div className="flex items-center gap-md">
<div className="w-10 h-10 rounded-full bg-surface-container-high border border-outline-variant/30 overflow-hidden flex-shrink-0">
<img alt="Marcus Johnson" className="w-full h-full object-cover" data-alt="A portrait of a young male creative professional with glasses and a casual button-down shirt. The lighting is warm and inviting with a soft studio backdrop. The aesthetic conveys a modern, tech-forward startup environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASxvzb9rv3R_P2qdKTdlK3Gwh4Ywv0j8ps_Yro_CGsL2HFbr0362c2x0mgtdymGXj9A4yHirkvoj3eyR9wZN7QKRME70JflVXV_jPLz2aIWShqy9G-1c7MZkeJogrY_oMEMXqG4HDnNlUqazn9CB3uFZEs3nAJGNIHRtgpGv8QaVO8_mTJL0xjiI0nfKmBtMgRwK9mC9WPXqtjDlq09mke_XzYLzVOEWKCMMB-LJdTRaleoG-RtXFnztFrlhzKb_8WN58aDUeC3B0" />
</div>
<div>
<div className="font-medium text-on-surface">Marcus Johnson</div>
<div className="font-label-md text-label-md text-on-surface-variant mt-0.5">Frontend Developer</div>
</div>
</div>
</td>
<td className="py-sm px-lg text-on-surface-variant">m.johnson@commsync.io</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-secondary-fixed text-on-secondary-fixed">Editor</span>
</td>
<td className="py-sm px-lg">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-md text-label-md bg-surface-container-high text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Active
                                    </span>
</td>
<td className="py-sm px-lg text-on-surface-variant">Today, 11:05 AM</td>
<td className="py-sm px-lg text-right">
<button className="w-8 h-8 inline-flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-variant/50 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined" style={{"fontSize": "20px"}}>more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Pagination/Footer (Level 1 Surface) */}
<div className="bg-surface border-t border-outline-variant/30 py-sm px-lg flex items-center justify-between text-on-surface-variant">
<span className="font-label-md text-label-md">Showing 1 to 5 of 42 entries</span>
<div className="flex items-center gap-xs">
<button className="w-8 h-8 rounded border border-outline-variant/50 flex items-center justify-center hover:bg-surface-container-high hover:text-on-surface transition-colors cursor-not-allowed opacity-50">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>chevron_left</span>
</button>
<button className="w-8 h-8 rounded border border-outline-variant/50 flex items-center justify-center hover:bg-surface-container-high hover:text-on-surface transition-colors">
<span className="material-symbols-outlined" style={{"fontSize": "18px"}}>chevron_right</span>
</button>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default UserManagementDirectory;
