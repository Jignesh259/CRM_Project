import React from 'react';
import '../style/Dashboard.css';

const VerifyOtpCommsync: React.FC = () => {
  return (
    <>
      
 Decorative Background Elements 
<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
<div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
<div className="absolute top-40 -left-40 w-[500px] h-[500px] bg-secondary-fixed rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
</div>
 Main Container 
<main className="w-full max-w-[480px] px-margin-mobile md:px-0 z-10">
{/* Brand Logo */}
<div className="flex justify-center mb-xl">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md">
<span className="material-symbols-outlined text-on-primary" style={{"fontVariationSettings": "'FILL' 1"}}>hub</span>
</div>
<span className="font-display-lg text-headline-md text-primary tracking-tight">CommSync</span>
</div>
</div>
{/* Glassmorphism Card */}
<div className="glass-panel rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] p-lg md:p-xl relative overflow-hidden">
{/* Subtle top accent line */}
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
{/* Header */}
<div className="text-center mb-xl">
<div className="w-16 h-16 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-md shadow-sm border border-outline-variant/30">
<span className="material-symbols-outlined text-primary text-[32px]">lock_person</span>
</div>
<h1 className="font-headline-lg text-headline-lg mb-sm text-on-surface">Check your email</h1>
<p className="font-body-md text-body-md text-on-surface-variant">
                    We've sent a 6-digit verification code to<br />
<span className="font-label-md text-label-md text-on-surface font-semibold">admin@enterprise.com</span>
</p>
</div>
{/* Form */}
<form className="flex flex-col gap-xl" id="otp-form">
{/* OTP Inputs */}
<div className="flex justify-between gap-xs sm:gap-sm" id="otp-inputs">
<input autoComplete="one-time-code" autoFocus className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
<input className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" disabled inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
<input className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" disabled inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
<input className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" disabled inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
<input className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" disabled inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
<input className="otp-input w-12 h-14 sm:w-14 sm:h-16 text-center font-headline-md text-headline-md rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface transition-all duration-200 outline-none" disabled inputMode="numeric" maxLength={1} pattern="[0-9]" required type="number" />
</div>
{/* Action Button */}
<button className="w-full h-12 bg-primary-container text-on-primary-container font-label-md text-label-md rounded-lg shadow-sm hover:shadow-md hover:bg-primary transition-all duration-200 flex items-center justify-center gap-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled id="verify-btn" type="submit">
                    Verify Account
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</form>
{/* Footer / Resend */}
<div className="mt-lg text-center">
<p className="font-body-md text-body-md text-on-surface-variant flex items-center justify-center gap-xs">
                    Didn't receive the code? 
                    <button className="font-label-md text-label-md text-primary hover:text-primary-container transition-colors disabled:text-outline disabled:cursor-not-allowed" disabled id="resend-btn" type="button">
                        Resend in <span id="timer">00:59</span>
</button>
</p>
</div>
{/* Back to login link */}
<div className="mt-md text-center">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-primary flex items-center justify-center gap-xs transition-colors" href="#">
<span className="material-symbols-outlined text-[16px]">arrow_back</span>
                    Back to log in
                </a>
</div>
</div>
</main>


    </>
  );
};

export default VerifyOtpCommsync;
