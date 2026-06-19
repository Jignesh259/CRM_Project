import React from 'react';
import '../style/Dashboard.css';

const VisualThemeCustomization: React.FC = () => {
  return (
    <>
      
 SideNavBar (Suppressed FAB as per instruction for Settings screens) 
<nav className="fixed left-0 top-0 h-full w-[280px] bg-inverse-surface dark:bg-surface-container-lowest text-primary-fixed dark:text-primary font-label-md text-label-md border-r border-outline-variant/10 shadow-md flex flex-col py-lg px-md z-50 hidden md:flex">
<div className="mb-xl flex flex-col items-start px-sm">
<div className="h-10 w-10 bg-primary-container rounded-lg flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-on-primary-container" style={{"fontVariationSettings": "'FILL' 1"}}>dashboard</span>
</div>
<h1 className="text-headline-md font-headline-md text-surface-container-lowest dark:text-primary">CommSync</h1>
<p className="text-surface-variant mt-xs">Enterprise ERP</p>
</div>
<div className="flex-grow overflow-y-auto space-y-sm pr-xs">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">insights</span>
                Analytics
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">group</span>
                Customers
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">leaderboard</span>
                Sales Pipeline
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">inventory_2</span>
                Inventory
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">description</span>
                Reports
            </a>
</div>
<div className="mt-auto pt-lg border-t border-white/10 space-y-sm">
<a className="flex items-center gap-md px-md py-sm rounded-lg text-surface-variant hover:text-surface-bright hover:bg-white/5 transition-all duration-200 active:translate-x-1" href="#">
<span className="material-symbols-outlined">contact_support</span>
                Support
            </a>
<a className="flex items-center gap-md px-md py-sm rounded-lg bg-primary-container text-on-primary-container active:translate-x-1" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
</nav>
 Main Content Canvas 
<div className="flex-1 flex flex-col md:ml-[280px] min-h-screen">
{/* TopNavBar */}
<header className="bg-surface dark:bg-inverse-surface text-primary dark:text-primary-fixed-dim font-body-md text-body-md w-full h-16 border-b border-outline-variant dark:border-outline shadow-sm flex justify-between items-center px-lg sticky top-0 z-40 backdrop-blur-md">
<div className="flex items-center gap-md md:hidden">
<button className="p-sm rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 text-on-surface-variant dark:text-surface-variant">
<span className="material-symbols-outlined">menu</span>
</button>
<h2 className="text-title-md font-title-md text-primary dark:text-primary-fixed-dim">CommSync</h2>
</div>
<div className="hidden md:flex items-center flex-1 max-w-md ml-lg relative">
<span className="material-symbols-outlined absolute left-md text-outline">search</span>
<input className="w-full pl-[40px] pr-md py-sm bg-surface-container-low dark:bg-inverse-on-surface border border-transparent focus:border-primary rounded-lg focus:ring-2 focus:ring-primary/20 transition-all text-on-surface outline-none" placeholder="Search across enterprise..." type="text" />
</div>
<div className="flex items-center gap-sm">
<button className="p-sm rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 text-on-surface-variant dark:text-surface-variant relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
</button>
<button className="p-sm rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 text-on-surface-variant dark:text-surface-variant">
<span className="material-symbols-outlined">help</span>
</button>
<button className="p-sm rounded-full hover:bg-surface-container-low dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:scale-95 text-primary font-bold border-b-2 border-primary">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="h-8 w-8 rounded-full bg-surface-variant overflow-hidden ml-sm cursor-pointer border border-outline-variant">
<img alt="User profile photo" className="w-full h-full object-cover" data-alt="A professional headshot of a young male executive smiling subtly. He is wearing a tailored grey suit jacket over a crisp white shirt. The background is a slightly blurred modern corporate office interior with cool, diffused lighting. The image evokes a clean, high-end enterprise aesthetic consistent with a modern minimal UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZuV-GAaASf_BJpaTacv3wkUYQ4uB-C7Y_R14ZkXH3WC9n4a88BaAQRplCYNrSzWUjbyHHwOiNd3I0kxYi889SxkJkgACL6nTfJW5KrKmvMcljonH_SWuld2LmXEwLPkVWO16ZxNMJi1eP4UwVX8cuffyS8WjkdgIkukCqAFIaowurWYjeS7JgDcQdMGEmP7UbIwPniTVIwEXtuYRRBN5pijYQo-NOhm44Fh1ZqhgXUUaBC1lekDeBNRjiUTnwwpTBJoLHV_gmwQw" />
</div>
</div>
</header>
{/* Settings Content */}
<main className="flex-1 p-margin-mobile md:p-margin-desktop overflow-y-auto">
<div className="max-w-4xl mx-auto">
<div className="mb-xl">
<h2 className="text-headline-lg font-headline-lg md:font-headline-lg text-on-background mb-xs">Theme Settings</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant">Customize your workspace appearance and density.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/* Main Settings Column */}
<div className="lg:col-span-2 space-y-lg">
{/* Mode Selection */}
<section className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="text-title-md font-title-md mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">light_mode</span>
                                Appearance Mode
                            </h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
{/* Light Mode Card */}
<button className="group flex flex-col items-center gap-sm p-sm rounded-lg border-2 border-primary bg-primary/5 transition-all">
<div className="w-full h-24 bg-surface rounded shadow-sm border border-outline-variant flex flex-col overflow-hidden">
<div className="h-6 bg-surface-container border-b border-outline-variant flex items-center px-2"><div className="w-12 h-2 bg-outline-variant rounded"></div></div>
<div className="flex-1 flex p-2 gap-2">
<div className="w-8 h-full bg-surface-container rounded"></div>
<div className="flex-1 bg-surface-container-lowest rounded border border-outline-variant"></div>
</div>
</div>
<span className="text-label-md font-label-md text-primary font-bold">Light</span>
</button>
{/* Dark Mode Card */}
<button className="group flex flex-col items-center gap-sm p-sm rounded-lg border-2 border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="w-full h-24 bg-inverse-surface rounded shadow-sm border border-surface-variant flex flex-col overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
<div className="h-6 bg-gray-800 border-b border-gray-700 flex items-center px-2"><div className="w-12 h-2 bg-gray-600 rounded"></div></div>
<div className="flex-1 flex p-2 gap-2">
<div className="w-8 h-full bg-gray-800 rounded"></div>
<div className="flex-1 bg-gray-900 rounded border border-gray-700"></div>
</div>
</div>
<span className="text-label-md font-label-md text-on-surface-variant">Dark</span>
</button>
{/* System Mode Card */}
<button className="group flex flex-col items-center gap-sm p-sm rounded-lg border-2 border-transparent hover:border-outline-variant transition-all cursor-pointer">
<div className="w-full h-24 rounded shadow-sm border border-outline-variant flex flex-col overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity relative" style={{"background": "linear-gradient(135deg, #f9f9ff 50%, #2d3037 50%)"}}>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-outline bg-surface rounded-full p-1 shadow">devices</span>
</div>
</div>
<span className="text-label-md font-label-md text-on-surface-variant">System</span>
</button>
</div>
</section>
{/* Density & Typography Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
{/* Density */}
<section className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="text-title-md font-title-md mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">view_compact</span>
                                    Sidebar Density
                                </h3>
<div className="space-y-sm">
<label className="flex items-center justify-between p-md rounded-lg border border-primary bg-primary/5 cursor-pointer">
<div className="flex flex-col">
<span className="text-body-md font-body-md font-semibold text-on-surface">Comfortable</span>
<span className="text-label-md font-label-md text-on-surface-variant">Standard 24px spacing</span>
</div>
<div className="h-5 w-5 rounded-full border-2 border-primary flex items-center justify-center">
<div className="h-2.5 w-2.5 rounded-full bg-primary"></div>
</div>
</label>
<label className="flex items-center justify-between p-md rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex flex-col">
<span className="text-body-md font-body-md text-on-surface">Compact</span>
<span className="text-label-md font-label-md text-on-surface-variant">Dense 12px spacing</span>
</div>
<div className="h-5 w-5 rounded-full border-2 border-outline-variant"></div>
</label>
</div>
</section>
{/* Typography */}
<section className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="text-title-md font-title-md mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">text_format</span>
                                    Typography Scale
                                </h3>
<div className="space-y-md">
<input className="w-full h-2 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" max="3" min="1" type="range" value="2" />
<div className="flex justify-between text-label-md font-label-md text-on-surface-variant">
<span>Small</span>
<span className="text-primary font-bold">Medium</span>
<span>Large</span>
</div>
<div className="p-sm bg-surface-container-low rounded border border-outline-variant mt-sm">
<p className="text-body-md font-body-md text-on-surface">The quick brown fox jumps over the lazy dog.</p>
</div>
</div>
</section>
</div>
</div>
{/* Right Sidebar: Color & Actions */}
<div className="space-y-lg">
{/* Brand Color */}
<section className="glass-panel rounded-xl p-lg shadow-sm">
<h3 className="text-title-md font-title-md mb-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">palette</span>
                                Brand Color
                            </h3>
<p className="text-label-md font-label-md text-on-surface-variant mb-md">Select a primary accent color for active states and primary buttons.</p>
<div className="grid grid-cols-4 gap-sm mb-md">
<button aria-label="Default Blue" className="color-swatch active relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#1976D2"}}></button>
<button aria-label="Purple" className="color-swatch relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#9A25AE"}}></button>
<button aria-label="Teal" className="color-swatch relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#00897B"}}></button>
<button aria-label="Red" className="color-swatch relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#E53935"}}></button>
<button aria-label="Orange" className="color-swatch relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#F57C00"}}></button>
<button aria-label="Slate" className="color-swatch relative w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer" style={{"backgroundColor": "#455A64"}}></button>
{/* Custom Color Picker Trigger */}
<button aria-label="Custom Color" className="w-full aspect-square rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer border border-outline-variant flex items-center justify-center bg-surface-container">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">add</span>
</button>
</div>
<div className="mt-md p-sm rounded bg-surface-container-low border border-outline-variant flex items-center justify-between">
<span className="text-code-sm font-code-sm text-on-surface-variant">HEX</span>
<span className="text-body-md font-body-md font-semibold text-on-surface">#1976D2</span>
</div>
</section>
{/* Action Panel */}
<section className="glass-panel rounded-xl p-lg shadow-sm flex flex-col gap-md">
<button className="w-full py-2 px-4 bg-primary text-on-primary rounded-lg text-body-md font-body-md font-semibold hover:bg-surface-tint shadow-sm hover:shadow-md transition-all active:scale-95">
                                Apply Theme
                            </button>
<button className="w-full py-2 px-4 bg-transparent border border-outline-variant text-on-surface rounded-lg text-body-md font-body-md font-semibold hover:bg-surface-container-low transition-all active:scale-95">
                                Reset to Default
                            </button>
</section>
</div>
</div>
</div>
</main>
</div>

    </>
  );
};

export default VisualThemeCustomization;
