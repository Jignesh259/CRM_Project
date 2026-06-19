import React from 'react';
import '../style/Dashboard.css';

const RegisterCommsync: React.FC = () => {
  return (
    <>
      
 Background Ambient Shapes 
<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-primary-fixed-dim/30 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[40%] bg-secondary-fixed-dim/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
 Main Container 
<main className="w-full max-w-[1000px] flex flex-col md:flex-row bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden z-10 relative border border-outline-variant/20">
{/* Left Side: Branding / Visual (Hidden on smaller screens to match login flow focus) */}
<div className="hidden md:flex md:w-1/2 bg-inverse-surface relative overflow-hidden flex-col justify-between p-2xl">
<div className="absolute inset-0 z-0">
<img alt="Abstract geometric background" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" data-alt="An abstract, modern architectural interior space with sleek lines and geometric forms. The lighting is dramatic and moody, with cool blue and deep navy tones contrasting against stark white illuminated edges. The scene suggests a futuristic, high-tech enterprise environment, embodying themes of structure, connectivity, and cutting-edge technology. The overall aesthetic is highly polished and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJNeGjIK4anDucSKYEwVhC3QoMTYhYSCkCJ3KtUlzPfPilgjacg8g6pqRaU6-L8nvuf0znuDnK_4Omtq88--8TOz9J56ec2uTFsUb0mYcMZ9EbUf-Yn5MtIIig4TudRCWEh_8nPvPiFXtCBogwlhPzdPQO8G-tMfm4p362FDH4upzpqakuahtN80dM7u0Ctsmz13L5vYOtA-UyUS8FkMrD4snYN3LeLsQzz-kRyYdIt66bEOBdqqBUJaH6Z9LrGGrwaYvH2SUqGiA" />
<div className="absolute inset-0 bg-gradient-to-b from-inverse-surface/80 to-inverse-surface"></div>
</div>
<div className="relative z-10">
<div className="flex items-center gap-sm mb-3xl">
<span className="material-symbols-outlined text-primary-fixed text-[32px]">sync</span>
<span className="font-display-lg text-headline-lg font-bold text-surface-lowest tracking-tight">CommSync</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-surface-lowest mb-md">Streamline your enterprise workflow.</h2>
<p className="font-body-lg text-body-lg text-surface-variant max-w-md">Join thousands of organizations using CommSync to centralize operations, optimize inventory, and drive growth.</p>
</div>
<div className="relative z-10 glass-panel rounded-lg p-lg bg-surface-lowest/10 border-surface-lowest/20">
<div className="flex gap-sm items-start">
<span className="material-symbols-outlined text-primary-fixed mt-xs">format_quote</span>
<div>
<p className="font-body-md text-body-md text-surface-variant italic mb-sm">"Implementing CommSync was the turning point for our supply chain visibility. The interface is remarkably intuitive for such a complex system."</p>
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-variant/20 flex items-center justify-center text-surface-lowest font-label-md text-label-md">SJ</div>
<div>
<p className="font-label-md text-label-md text-surface-lowest font-semibold">Sarah Jenkins</p>
<p className="font-label-md text-label-md text-outline-variant/80">Operations Director, NexusCorp</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/* Right Side: Registration Form */}
<div className="w-full md:w-1/2 p-lg md:p-2xl flex flex-col justify-center bg-surface-container-lowest">
{/* Mobile Header (Visible only on mobile) */}
<div className="flex items-center gap-sm mb-xl md:hidden">
<span className="material-symbols-outlined text-primary text-[28px]">sync</span>
<span className="font-display-lg text-headline-md font-bold text-on-surface tracking-tight">CommSync</span>
</div>
<div className="mb-xl">
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-xs">Create an account</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Start optimizing your business operations today.</p>
</div>
<form action="#" className="space-y-md" method="POST">
<div className="flex flex-col md:flex-row gap-md">
{/* Full Name */}
<div className="flex-1">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="fullName">Full Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline-variant text-[20px]">person</span>
</div>
<input className="block w-full pl-xl pr-sm py-[10px] bg-surface border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant/70 input-glow transition-all duration-200 outline-none" id="fullName" name="fullName" placeholder="Jane Doe" required type="text" />
</div>
</div>
{/* Company Name */}
<div className="flex-1">
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="companyName">Company Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline-variant text-[20px]">domain</span>
</div>
<input className="block w-full pl-xl pr-sm py-[10px] bg-surface border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant/70 input-glow transition-all duration-200 outline-none" id="companyName" name="companyName" placeholder="Acme Corp" required type="text" />
</div>
</div>
</div>
{/* Work Email */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="email">Work Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline-variant text-[20px]">mail</span>
</div>
<input className="block w-full pl-xl pr-sm py-[10px] bg-surface border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant/70 input-glow transition-all duration-200 outline-none" id="email" name="email" placeholder="jane@acmecorp.com" required type="email" />
</div>
</div>
{/* Password */}
<div>
<label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="password">Password</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline-variant text-[20px]">lock</span>
</div>
<input className="block w-full pl-xl pr-xl py-[10px] bg-surface border border-outline-variant/50 rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline-variant/70 input-glow transition-all duration-200 outline-none" id="password" name="password" placeholder="••••••••" required type="password" />
<div className="absolute inset-y-0 right-0 pr-sm flex items-center cursor-pointer text-outline-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-[20px]">visibility_off</span>
</div>
</div>
<p className="font-label-md text-label-md text-outline-variant mt-xs">Must be at least 8 characters long.</p>
</div>
{/* Terms & Conditions */}
<div className="flex items-start gap-sm mt-md mb-xl">
<div className="flex items-center h-5">
<input className="w-4 h-4 border border-outline-variant rounded bg-surface text-primary-container focus:ring-primary-container focus:ring-offset-0 focus:ring-2 cursor-pointer transition-colors" id="terms" name="terms" required type="checkbox" />
</div>
<label className="font-body-md text-body-md text-on-surface-variant leading-tight" htmlFor="terms">
                        I agree to the <a className="text-primary hover:text-primary-container font-medium hover:underline transition-colors" href="#">Terms of Service</a> and <a className="text-primary hover:text-primary-container font-medium hover:underline transition-colors" href="#">Privacy Policy</a>.
                    </label>
</div>
{/* Submit Button */}
<button className="w-full h-[40px] flex items-center justify-center gap-sm bg-primary-container text-on-primary rounded-lg font-title-md text-title-md font-medium hover:bg-surface-tint hover:shadow-md transition-all duration-200 group" type="submit">
<span>Create Account</span>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</form>
<div className="mt-xl text-center">
<p className="font-body-md text-body-md text-on-surface-variant">
                    Already have an account? 
                    <a className="text-primary hover:text-primary-container font-medium hover:underline transition-colors" href="#">Log in here</a>
</p>
</div>
</div>
</main>

    </>
  );
};

export default RegisterCommsync;
