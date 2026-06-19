import React from 'react';
import '../style/Dashboard.css';

const LoginCommsync: React.FC = () => {
  return (
    <>
      
<div className="w-full max-w-md">
{/* Brand Header */}
<div className="text-center mb-xl">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary-container text-on-primary-container mb-md shadow-lg">
<span className="material-symbols-outlined text-3xl" style={{"fontVariationSettings": "'FILL' 1"}}>sync</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">CommSync</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Enterprise Data Intelligence</p>
</div>
{/* Login Card */}
<div className="glass-panel rounded-xl p-xl md:p-[40px]">
<h2 className="font-headline-md text-headline-md text-on-surface mb-lg">Sign In</h2>
<form action="#" className="space-y-md" method="POST">
<div className="floating-input bg-surface-container-low rounded-lg border border-outline-variant focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<input className="w-full bg-transparent border-none outline-none text-on-surface font-body-md focus:ring-0" id="email" name="email" placeholder=" " required type="email" />
<label className="font-body-md" htmlFor="email">Work Email</label>
</div>
<div className="floating-input bg-surface-container-low rounded-lg border border-outline-variant focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
<input className="w-full bg-transparent border-none outline-none text-on-surface font-body-md focus:ring-0" id="password" name="password" placeholder=" " required type="password" />
<label className="font-body-md" htmlFor="password">Password</label>
</div>
<div className="flex items-center justify-between pt-sm">
<label className="flex items-center space-x-sm cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 rounded border border-outline-variant group-hover:border-primary bg-surface-container-lowest transition-colors">
<input className="peer absolute opacity-0 w-full h-full cursor-pointer" type="checkbox" />
<span className="material-symbols-outlined text-[16px] text-on-primary opacity-0 peer-checked:opacity-100 transition-opacity z-10" style={{"fontVariationSettings": "'FILL' 1"}}>check</span>
<div className="absolute inset-0 bg-primary rounded opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">Remember me</span>
</label>
<a className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors" href="#">Forgot Password?</a>
</div>
<div className="pt-lg">
<button className="w-full h-10 flex items-center justify-center bg-primary-container text-on-primary-container font-title-md text-title-md rounded-lg shadow-md hover:shadow-lg hover:bg-primary transition-all active:scale-[0.98]" type="submit">
                        Sign In
                        <span className="material-symbols-outlined ml-sm text-xl">arrow_forward</span>
</button>
</div>
</form>
<div className="mt-xl text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                    Need system access? <a className="text-primary font-medium hover:underline" href="#">Contact IT Support</a>
</p>
</div>
</div>
{/* Footer / Legal */}
<div className="text-center mt-xl">
<p className="font-label-md text-label-md text-outline">
                © 2024 CommSync Technologies. All rights reserved.
            </p>
<div className="flex items-center justify-center gap-md mt-sm">
<a className="font-label-md text-label-md text-outline hover:text-on-surface-variant transition-colors" href="#">Privacy</a>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<a className="font-label-md text-label-md text-outline hover:text-on-surface-variant transition-colors" href="#">Terms</a>
</div>
</div>
</div>

    </>
  );
};

export default LoginCommsync;
