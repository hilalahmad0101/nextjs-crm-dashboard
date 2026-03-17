import React from 'react';
import Link from 'next/link';

export default function AddNewLeadForm() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-4xl mx-auto">
{/*  Title Section  */}
<div className="mb-8">
<h1 className="text-3xl font-black text-slate-100 tracking-tight">Add New Lead</h1>
<p className="text-neutral-text-muted mt-1">Enter the details to add a new potential customer to your pipeline.</p>
</div>
{/*  Form Content  */}
<form className="space-y-6">
{/*  Section 1: Lead Information  */}
<div className="bg-neutral-surface/40 border border-neutral-border rounded-xl p-6">
<h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">badge</span>
                                Lead Information
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Full Name</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="John Doe" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Job Title</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="Sales Manager" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Company Name</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="Acme Corp" type="text"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Industry</span>
<select className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary appearance-none">
<option value="">Select Industry</option>
<option>Technology</option>
<option>Healthcare</option>
<option>Finance</option>
<option>Manufacturing</option>
<option>Retail</option>
</select>
</label>
</div>
</div>
{/*  Section 2: Contact Details  */}
<div className="bg-neutral-surface/40 border border-neutral-border rounded-xl p-6">
<h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">contact_mail</span>
                                Contact Details
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Email Address</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="john.doe@company.com" type="email"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Phone Number</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="+1 (555) 000-0000" type="tel"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Website URL</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="https://acmecorp.com" type="url"/>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">LinkedIn Profile</span>
<input className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted" placeholder="linkedin.com/in/johndoe" type="text"/>
</label>
</div>
</div>
{/*  Section 3: Lead Source & Assignment  */}
<div className="bg-neutral-surface/40 border border-neutral-border rounded-xl p-6">
<h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assignment_ind</span>
                                Source &amp; Assignment
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Lead Source</span>
<select className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary">
<option>Website</option>
<option>Referral</option>
<option>Cold Call</option>
<option>LinkedIn</option>
</select>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Status</span>
<select className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary">
<option>New</option>
<option>Contacted</option>
<option>In Progress</option>
</select>
</label>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Assigned Sales Rep</span>
<select className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary">
<option>Sarah Jenkins</option>
<option>Michael Scott</option>
<option>Jim Halpert</option>
<option>Unassigned</option>
</select>
</label>
</div>
</div>
{/*  Section 4: Additional Notes  */}
<div className="bg-neutral-surface/40 border border-neutral-border rounded-xl p-6">
<h3 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">description</span>
                                Additional Notes
                            </h3>
<label className="flex flex-col gap-2">
<span className="text-sm font-medium text-slate-100">Description / Background Info</span>
<textarea className="bg-neutral-surface border border-neutral-border rounded-lg p-3 text-slate-100 focus:ring-primary focus:border-primary placeholder:text-neutral-text-muted resize-none" placeholder="Enter any specific details about the lead's needs or history..." rows="4"></textarea>
</label>
</div>
</form>
{/*  Spacing for bottom fixed bar  */}
<div className="h-24"></div>
</div>
    </>
  );
}
