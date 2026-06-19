import React from 'react';
import '../style/Dashboard.css';

const AddNewLead: React.FC = () => {
  return (
    <>
      
 Intent: Transactional form (Add Lead). Navigation shell suppressed as per rules. 
<main className="w-full max-w-2xl">
{/* Header */}
<div className="mb-lg flex items-center justify-between">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface">Add New Lead</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-sm">Enter the details below to create a new record in CommSync CRM.</p>
</div>
<button aria-label="Close form" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">close</span>
</button>
</div>
{/* Form Card */}
<div className="glass-panel rounded-xl shadow-md p-lg md:p-xl">
<form action="#" className="space-y-xl" method="POST">
{/* Section: Basic Information */}
<section>
<div className="flex items-center gap-sm mb-md border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>person</span>
<h2 className="font-title-md text-title-md text-on-surface">Basic Information</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label className="form-label" htmlFor="firstName">First Name *</label>
<input className="form-input" id="firstName" name="firstName" placeholder="Jane" required type="text" />
</div>
<div>
<label className="form-label" htmlFor="lastName">Last Name *</label>
<input className="form-input" id="lastName" name="lastName" placeholder="Doe" required type="text" />
</div>
<div className="md:col-span-2">
<label className="form-label" htmlFor="email">Email Address *</label>
<input className="form-input" id="email" name="email" placeholder="jane.doe@example.com" required type="email" />
</div>
<div>
<label className="form-label" htmlFor="phone">Phone Number</label>
<input className="form-input" id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
</div>
<div>
<label className="form-label" htmlFor="jobTitle">Job Title</label>
<input className="form-input" id="jobTitle" name="jobTitle" placeholder="Director of Sales" type="text" />
</div>
</div>
</section>
{/* Section: Company Details */}
<section>
<div className="flex items-center gap-sm mb-md border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>domain</span>
<h2 className="font-title-md text-title-md text-on-surface">Company Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div className="md:col-span-2">
<label className="form-label" htmlFor="companyName">Company Name *</label>
<input className="form-input" id="companyName" name="companyName" placeholder="Acme Corp" required type="text" />
</div>
<div>
<label className="form-label" htmlFor="industry">Industry</label>
<select className="form-input" id="industry" name="industry">
<option disabled selected value="">Select Industry</option>
<option value="tech">Technology</option>
<option value="finance">Financial Services</option>
<option value="healthcare">Healthcare</option>
<option value="retail">Retail</option>
<option value="manufacturing">Manufacturing</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="form-label" htmlFor="companySize">Company Size</label>
<select className="form-input" id="companySize" name="companySize">
<option disabled selected value="">Select Size</option>
<option value="1-10">1-10 employees</option>
<option value="11-50">11-50 employees</option>
<option value="51-200">51-200 employees</option>
<option value="201-500">201-500 employees</option>
<option value="501+">501+ employees</option>
</select>
</div>
</div>
</section>
{/* Section: Lead Details */}
<section>
<div className="flex items-center gap-sm mb-md border-b border-outline-variant/30 pb-sm">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings": "'FILL' 1"}}>insights</span>
<h2 className="font-title-md text-title-md text-on-surface">Lead Details</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-md">
<div>
<label className="form-label" htmlFor="leadSource">Lead Source</label>
<select className="form-input" id="leadSource" name="leadSource">
<option disabled selected value="">Select Source</option>
<option value="website">Website Form</option>
<option value="referral">Referral</option>
<option value="conference">Conference/Event</option>
<option value="outbound">Outbound Call</option>
<option value="social">Social Media</option>
</select>
</div>
<div>
<label className="form-label" htmlFor="leadStatus">Initial Status</label>
<select className="form-input" id="leadStatus" name="leadStatus">
<option selected value="new">New</option>
<option value="contacted">Contacted</option>
<option value="qualified">Qualified</option>
</select>
</div>
<div className="md:col-span-2">
<label className="form-label" htmlFor="notes">Internal Notes</label>
<textarea className="form-input resize-none" id="notes" name="notes" placeholder="Add any preliminary context or notes here..." rows={3}></textarea>
</div>
</div>
</section>
{/* Action Bar */}
<div className="pt-md mt-lg border-t border-outline-variant/30 flex justify-end gap-md items-center">
<button className="px-lg py-sm font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" type="button">
                        Cancel
                    </button>
<button className="px-lg py-sm font-label-md text-label-md bg-primary-container text-on-primary-container rounded hover:opacity-90 transition-opacity shadow-sm flex items-center gap-sm" type="submit">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Create Lead
                    </button>
</div>
</form>
</div>
</main>

    </>
  );
};

export default AddNewLead;
