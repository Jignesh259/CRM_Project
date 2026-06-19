import React from 'react';
import '../style/Dashboard.css';

const LeadPipelineKanban: React.FC = () => {
  return (
    <>
      
 SideNavBar (Hidden on Mobile) 
<nav className="hidden md:flex flex-col bg-inverse-surface dark:bg-surface-container-lowest text-primary-fixed dark:text-primary font-body-md text-body-md font-medium fixed left-0 top-0 h-full w-[280px] z-40 shadow-xl shadow-lg py-lg px-md duration-200 ease-in-out">
{/* Header */}
<div className="flex items-center gap-sm mb-xl">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center overflow-hidden shrink-0">
<img alt="CRM Workspace Logo" className="w-full h-full object-cover" data-alt="A clean, abstract geometric logo featuring interlocking blue and white shapes on a dark background, representing an enterprise CRM system. High contrast, professional light mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApEK3yODm96LCGSo9HbbsiizwgmmQDcWCvU_j1dpnMsylNI4MlZ0CMqieV-8-4Q0OJGzWYmgdErhsK637-oDTpUxpV8sOqI9LiKEl-f31qEWlFIZrsn2Y_0q9svM7BLpr5Za4hhsf57mE4hNHAGtwezBPZGQlsfhUqFx_Ei8WcQlZNTUogpKkO-2uihr1vvyAG5aBCmbkpRVsnllAfRIUhMrChmxGQg3BA8bXUkkWCTD9WoOOuPJq_m_l3DAV2ghPZOCs3BZmh1Cw" />
</div>
<div>
<h1 className="font-title-md text-title-md text-surface-lowest">Lead Manager</h1>
<p className="font-label-md text-label-md text-surface-variant/70">Enterprise Edition</p>
</div>
</div>
{/* CTA */}
<button className="w-full bg-primary hover:bg-primary/90 text-on-primary py-2 px-4 rounded-lg flex items-center justify-center gap-sm mb-lg transition-colors shadow-sm">
<span className="material-symbols-outlined" data-icon="add" style={{"fontVariationSettings": "'FILL' 1"}}>add</span>
            New Lead
        </button>
{/* Main Nav */}
<div className="flex-1 overflow-y-auto">
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                        Leads
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg bg-primary-container/20 text-primary-fixed dark:text-primary border-l-4 border-primary-fixed hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="view_kanban">view_kanban</span>
                        Pipeline
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="task_alt">task_alt</span>
                        Tasks
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="history">history</span>
                        Activities
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
                        Contacts
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="handshake">handshake</span>
                        Deals
                    </a>
</li>
</ul>
</div>
{/* Footer Nav */}
<div className="pt-md mt-md border-t border-white/10">
<ul className="space-y-sm">
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
                        Support
                    </a>
</li>
<li>
<a className="flex items-center gap-md px-3 py-2 rounded-lg text-surface-variant/70 hover:text-surface-variant hover:bg-white/5 transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="manage_accounts">manage_accounts</span>
                        Account
                    </a>
</li>
</ul>
</div>
</nav>
 Main Content Area 
<div className="flex-1 flex flex-col md:ml-[280px] h-full overflow-hidden relative">
{/* Ambient Shader Background (Subtle) */}
<div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
</div>
{/* TopNavBar */}
<header className="bg-surface/80 dark:bg-inverse-surface/80 backdrop-blur-md text-primary dark:text-inverse-primary font-body-md text-body-md docked full-width top-0 sticky z-50 border-b border-outline-variant/30 shadow-sm cursor-pointer transition-all flex justify-between items-center w-full px-margin-desktop py-sm relative z-10">
{/* Left: Brand/Logo */}
<div className="flex items-center gap-md">
<div className="font-headline-md text-headline-md font-bold text-primary dark:text-inverse-primary hidden md:block">
                    CommSync CRM
                </div>
{/* Mobile Menu Toggle (Simplified) */}
<button className="md:hidden p-2 hover:bg-surface-variant rounded-full transition-colors">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
{/* Center: Navigation Links (Hidden on mobile) */}
<nav className="hidden md:flex items-center gap-lg h-full">
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center" href="#">Dashboard</a>
<a className="text-primary dark:text-inverse-primary border-b-2 border-primary pb-1 h-full flex items-center hover:text-primary dark:hover:text-inverse-primary transition-colors" href="#">Pipeline View</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center" href="#">Analytics</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors h-full flex items-center" href="#">Reports</a>
</nav>
{/* Right: Search & Actions */}
<div className="flex items-center gap-sm md:gap-md">
{/* Search Bar (on_left relative to actions) */}
<div className="relative hidden sm:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container rounded-full border border-outline-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/20 text-body-md w-48 lg:w-64 transition-all" placeholder="Search..." type="text" />
</div>
{/* Trailing Icons */}
<button className="p-2 text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors rounded-full hover:bg-surface-variant/50">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="p-2 text-on-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-colors rounded-full hover:bg-surface-variant/50">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
{/* Profile */}
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant ml-2 shrink-0">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a smiling man with short brown hair, wearing a dark blue suit and white shirt, set against a soft blurred background. Professional corporate portrait lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3iQ9wsiaEopu0yfIHiD4Mr3ClXP51GYYfd6jF2btzR5-6sAAMpuqiSpwg8Al9DcM7NgWwinSkWlck7LpCBKet6tvO4_2hRB2xW6e9285J7jYrZNkBIlIEzk_O2MA-_Y8h6STTA3TCrWi0zP1ATNXLNUyrcb4kdNYHkou8Yk7dfweHi70PXC-JZ26S8laYWgi4sqJaS_NkP3RHi1HZtvRvwN8BCxwQajB-vPXWaAISefyoCQLaAC5rTg5Hz4bv5delmxW6WBbV-ps" />
</div>
</div>
</header>
{/* Kanban Board Container */}
<main className="flex-1 overflow-x-auto overflow-y-hidden p-gutter relative z-10 kanban-scroll flex gap-gutter">
{/* Column: New */}
<div className="kanban-column flex flex-col h-full bg-surface-container-highest/30 rounded-xl p-sm border border-outline-variant/20 shadow-sm backdrop-blur-sm shrink-0">
<div className="flex justify-between items-center px-2 py-3 mb-2 border-b border-outline-variant/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
                        New
                    </h2>
<span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded-full">3</span>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-sm kanban-scroll">
{/* Card 1 */}
<div className="glass-card rounded-lg p-3 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="bg-tertiary-container/10 text-tertiary font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wide">Inbound</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-md text-body-md font-medium text-on-surface mb-1">Acme Corp Redesign</h3>
<p className="font-body-md text-[13px] text-on-surface-variant mb-3 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Acme Corp
                        </p>
<div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span className="font-label-md text-label-md text-on-surface font-medium">$12,500</span>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface object-cover" data-alt="A small professional headshot of a young woman with dark hair smiling gently, suitable for an avatar icon." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdFSB8v2M7EqSoICH9OI-zEBX045yebFJYzp_Ieeg3gDt9K1hYq_6rKyLjMUhp1N5G9rFrQPfqCEt15vMndvGcK_1ilryGrtW7bZTiHA7zARi55dsZ041hs16vsD2zHGwW5sYfpXYndM5f3Fh2jUGpnCrWhlA78w4kATZG3Oda3uzGGT8vboLqgkYkJ02Sen85aY4MmzcSxC5Vj1R06nkLGB__dXWAX_cPMA8uWO0AFRHlpZwQsRuJRgG3Mu6zs0zr96zsoN5Ugqw" />
</div>
</div>
</div>
{/* Card 2 */}
<div className="glass-card rounded-lg p-3 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="bg-error-container/30 text-error font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wide">Hot</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-md text-body-md font-medium text-on-surface mb-1">Q3 Marketing Campaign</h3>
<p className="font-body-md text-[13px] text-on-surface-variant mb-3 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Globex Inc
                        </p>
<div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span className="font-label-md text-label-md text-on-surface font-medium">$8,200</span>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-surface bg-secondary-container flex items-center justify-center text-on-secondary-container text-[10px] font-bold">JD</div>
</div>
</div>
</div>
</div>
<button className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span> Add Card
                </button>
</div>
{/* Column: Contacted */}
<div className="kanban-column flex flex-col h-full bg-surface-container-highest/30 rounded-xl p-sm border border-outline-variant/20 shadow-sm backdrop-blur-sm shrink-0">
<div className="flex justify-between items-center px-2 py-3 mb-2 border-b border-outline-variant/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
                        Contacted
                    </h2>
<span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded-full">2</span>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-sm kanban-scroll">
{/* Card 3 */}
<div className="glass-card rounded-lg p-3 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="bg-surface-variant text-on-surface-variant font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wide">Follow Up</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-md text-body-md font-medium text-on-surface mb-1">Software License Renewal</h3>
<p className="font-body-md text-[13px] text-on-surface-variant mb-3 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Initech
                        </p>
<div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span className="font-label-md text-label-md text-on-surface font-medium">$45,000</span>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface object-cover" data-alt="Small avatar of a man with short hair and glasses on a light background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIsUEtBs_b5hbksd6qJi5j_mRvD97A9gG9glIhSpoSIEhJdhWycA3bT-8A67VSXcKzLstqXnI4TheSB3I2wkq3DNXco-B2PEjuHbZd4CXbF-RU7lW_dWQsLrkS5ix0jIYz1UHU_gx3eNa2YBk2eV7fIjFEgJDOI5361xYiLEovm7GcS7WgxJOTSvk2cjyZUBB8YX5kgIJCIFx1sTnllIh_C83edtHXyKS6LkyfImMY--IL_RTzKQJtuHBWsmUMEtDesQYguDdJuuI" />
</div>
</div>
</div>
</div>
<button className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span> Add Card
                </button>
</div>
{/* Column: Interested */}
<div className="kanban-column flex flex-col h-full bg-surface-container-highest/30 rounded-xl p-sm border border-outline-variant/20 shadow-sm backdrop-blur-sm shrink-0">
<div className="flex justify-between items-center px-2 py-3 mb-2 border-b border-outline-variant/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-tertiary"></span>
                        Interested
                    </h2>
<span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded-full">1</span>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-sm kanban-scroll">
{/* Card 4 */}
<div className="glass-card rounded-lg p-3 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-primary/50 transition-all group">
<div className="flex justify-between items-start mb-2">
<span className="bg-primary-container/20 text-primary-fixed-variant font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wide">Demo Scheduled</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-md text-body-md font-medium text-on-surface mb-1">Enterprise Migration</h3>
<p className="font-body-md text-[13px] text-on-surface-variant mb-3 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Stark Industries
                        </p>
<div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span className="font-label-md text-label-md text-on-surface font-medium">$120,000</span>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface object-cover" data-alt="Avatar portrait of a professional man with a slight smile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz4_CxMwM8dPfDdaAG5KStp0ythoPMdw05ePAUknw4DX348T8R1T675mj2TtvYQR1vVT8f18hLgT5pri-eHoytrzpTNsJvCoS16ihLrJOh_w1BI3x9wIOJS9aR-WfU8oEyLkVt1SGYWs4E5yTrvxgBRMwSDdDLBi2TI2W7WIpDa2ww0fwOgDpurltR6ysgYYT-c3TaCs7025JLnQakaneMZUgglp4geFSQAJiR-i7eOlv0PbSRM7dlRMhFrIZ6WEXwMZemwbQcwNM" />
</div>
</div>
</div>
</div>
<button className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span> Add Card
                </button>
</div>
{/* Column: Proposal Sent */}
<div className="kanban-column flex flex-col h-full bg-surface-container-highest/30 rounded-xl p-sm border border-outline-variant/20 shadow-sm backdrop-blur-sm shrink-0">
<div className="flex justify-between items-center px-2 py-3 mb-2 border-b border-outline-variant/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#ba5b00]"></span>
                        Proposal Sent
                    </h2>
<span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded-full">0</span>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-sm kanban-scroll flex items-center justify-center">
<p className="text-on-surface-variant/50 font-body-md text-sm italic text-center px-4">No proposals pending.</p>
</div>
<button className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span> Add Card
                </button>
</div>
{/* Column: Converted */}
<div className="kanban-column flex flex-col h-full bg-surface-container-highest/30 rounded-xl p-sm border border-outline-variant/20 shadow-sm backdrop-blur-sm shrink-0">
<div className="flex justify-between items-center px-2 py-3 mb-2 border-b border-outline-variant/30">
<h2 className="font-title-md text-title-md text-on-surface flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-[#004786]"></span>
                        Converted
                    </h2>
<span className="bg-surface-container text-on-surface-variant font-label-md text-label-md px-2 py-0.5 rounded-full">1</span>
</div>
<div className="flex-1 overflow-y-auto pr-1 space-y-sm kanban-scroll">
{/* Card 5 */}
<div className="glass-card rounded-lg p-3 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-primary/50 transition-all group opacity-80">
<div className="flex justify-between items-start mb-2">
<span className="bg-[#004786]/10 text-[#004786] font-label-md text-[10px] px-2 py-0.5 rounded uppercase tracking-wide flex items-center gap-1"><span className="material-symbols-outlined text-[12px]">check_circle</span> Won</span>
<button className="text-outline hover:text-on-surface opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-[18px]">more_horiz</span></button>
</div>
<h3 className="font-body-md text-body-md font-medium text-on-surface mb-1 strike-through line-through text-on-surface-variant">Q2 Retainer</h3>
<p className="font-body-md text-[13px] text-on-surface-variant mb-3 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">domain</span> Wayne Ent.
                        </p>
<div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
<span className="font-label-md text-label-md text-on-surface font-medium">$55,000</span>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-surface object-cover" data-alt="Avatar of a young professional woman smiling." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcl6bHDi0FUDn6Z_xLN2Ra-E4jV8QvjZJC1SkHO5-GQgAA0Q5CRJxwFldK7jXWipFJiXvq4Ig6wu75cnyCvqdlvxA00EiftRoRO48N6ybYvS4oLNj_iEQ9ErcftBQRrz7VfyqvFjB0e2t6gIHtcO8DiUZgWUoDWri9zJ6zKXkl3IMSRJa0g1g4OdnVFfwrw0LQ_EKAIOJixDM3FLWSVawxR2jz1MCJ_-2e_Qt9IEmFBAIYIuEbjHAtJmzyypiu3zKqcVmDlIkGPM" />
</div>
</div>
</div>
</div>
<button className="w-full mt-2 py-2 flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded-lg transition-colors font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">add</span> Add Card
                </button>
</div>
{/* Spacer for horizontal scroll breathing room */}
<div className="w-4 shrink-0"></div>
</main>
</div>

    </>
  );
};

export default LeadPipelineKanban;
