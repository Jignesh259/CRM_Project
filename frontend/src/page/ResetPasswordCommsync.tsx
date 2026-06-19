import React from 'react';
import '../style/Dashboard.css';

const ResetPasswordCommsync: React.FC = () => {
  return (
    <>
      
 Content Canvas 
<main className="w-full max-w-[440px] relative z-10">
{/* Brand Header */}
<div className="text-center mb-xl">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-on-primary mb-md shadow-md">
<span className="material-symbols-outlined" data-icon="sync" style={{"fontVariationSettings": "'FILL' 1"}}>sync</span>
</div>
<h1 className="font-display-lg text-headline-md font-black text-primary tracking-tight">CommSync</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-xs">Enterprise ERP</p>
</div>
{/* Auth Card */}
<div className="glass-panel rounded-xl p-lg md:p-xl">
<div className="mb-gutter">
<h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Reset Password</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Please create a new strong password for your account.</p>
</div>
<form className="space-y-md">
{/* New Password Input */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="new_password">New Password</label>
<div className="relative input-focus-ring rounded-lg border border-outline-variant bg-surface-container-lowest transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="lock">lock</span>
</div>
<input className="w-full pl-xl pr-xl py-sm bg-transparent border-none rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-0" id="new_password" placeholder="••••••••" type="password" />
<button className="absolute inset-y-0 right-0 pr-sm flex items-center text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">visibility_off</span>
</button>
</div>
{/* Password Strength Meter */}
<div className="mt-sm space-y-xs">
<div className="flex gap-xs h-1 w-full rounded-full overflow-hidden bg-surface-container-highest">
<div className="h-full bg-primary w-1/4 rounded-full transition-all duration-300"></div>
<div className="h-full bg-primary w-1/4 rounded-full transition-all duration-300 opacity-20"></div>
<div className="h-full bg-primary w-1/4 rounded-full transition-all duration-300 opacity-20"></div>
<div className="h-full bg-primary w-1/4 rounded-full transition-all duration-300 opacity-20"></div>
</div>
<p className="font-label-md text-label-md text-on-surface-variant text-right">Weak</p>
</div>
</div>
{/* Confirm Password Input */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-xs" htmlFor="confirm_password">Confirm New Password</label>
<div className="relative input-focus-ring rounded-lg border border-outline-variant bg-surface-container-lowest transition-all duration-200">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]" data-icon="lock_reset">lock_reset</span>
</div>
<input className="w-full pl-xl pr-xl py-sm bg-transparent border-none rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:ring-0" id="confirm_password" placeholder="••••••••" type="password" />
<button className="absolute inset-y-0 right-0 pr-sm flex items-center text-on-surface-variant hover:text-primary transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="visibility_off">visibility_off</span>
</button>
</div>
</div>
{/* Submit Button */}
<button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container hover:bg-primary-container/90 transition-colors duration-300 rounded-lg py-[10px] px-md font-title-md text-title-md shadow-sm mt-lg" type="button">
<span className="material-symbols-outlined text-[20px]" data-icon="save">save</span>
                    Save New Password
                </button>
</form>
<div className="mt-gutter text-center">
<a className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[16px]" data-icon="arrow_back">arrow_back</span>
                    Back to Login
                </a>
</div>
</div>
{/* Footer Links */}
<div className="mt-lg flex justify-center gap-md font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Help Center</a>
<span>•</span>
<a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
</div>
</main>


    </>
  );
};

export default ResetPasswordCommsync;
