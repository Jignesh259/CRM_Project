import React from 'react';
import '../style/Dashboard.css';

const ForgotPasswordCommsync: React.FC = () => {
  return (
    <>
      
 Main Container 
<main className="w-full max-w-[440px] relative z-10">
{/* Logo / Brand Header */}
<div className="text-center mb-xl">
<h1 className="font-display-lg text-display-lg text-primary">CommSync</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-sm">Enterprise ERP</p>
</div>
{/* Glassmorphic Card */}
<div className="glass-card rounded-xl p-xl">
{/* Header */}
<div className="mb-lg text-center">
<span className="material-symbols-outlined text-primary text-4xl mb-sm" style={{"fontVariationSettings": "'FILL' 1"}}>lock_reset</span>
<h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Forgot Password</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
</div>
{/* Form */}
<form action="#" className="space-y-md" method="POST">
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs ml-xs" htmlFor="email">Email Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-sm top-1/2 transform -translate-y-1/2 text-outline">mail</span>
<input className="w-full h-10 pl-xl pr-sm bg-surface-container-lowest border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 outline-none" id="email" name="email" placeholder="name@company.com" required type="email" />
</div>
</div>
<button className="w-full h-10 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg flex items-center justify-center gap-sm hover:bg-primary transition-colors duration-200 shadow-sm hover:shadow-md" type="submit">
<span>Send Reset Link</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
{/* Footer Links */}
<div className="mt-lg pt-md border-t border-outline-variant/30 text-center">
<a className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined text-[16px] group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    Back to Login
                </a>
</div>
</div>
{/* Background Decorative Elements */}
<div className="absolute -top-3xl -left-3xl w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute -bottom-3xl -right-3xl w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
</main>

    </>
  );
};

export default ForgotPasswordCommsync;
