import React from 'react';
import Link from 'next/link';

export default function CreateNewTicketForm() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

{/*  Form Content  */}
<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-4xl mx-auto">
<div className="mb-8">
<h3 className="text-2xl font-bold">New Support Request</h3>
<p className="text-slate-500 dark:text-slate-400 mt-1">Fill out the form below to register a new customer issue in the system.</p>
</div>
<form className="space-y-8">
{/*  Section 1: Ticket Overview  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">info</span>
<h4 className="font-bold uppercase tracking-wide text-xs">Ticket Overview</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2">Ticket Subject</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary" placeholder="e.g. Unable to process payment at checkout" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Priority Level</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary">
<option>Low</option>
<option selected="">Medium</option>
<option>High</option>
<option>Urgent</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Category</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary">
<option>Bug</option>
<option>Feature Request</option>
<option>Billing</option>
<option selected="">General Inquiry</option>
</select>
</div>
</div>
</section>
{/*  Section 2: Customer Information  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">person_search</span>
<h4 className="font-bold uppercase tracking-wide text-xs">Customer Information</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">Select Customer</label>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary" placeholder="Search by name or company..." type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2">Contact Email</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary" placeholder="customer@example.com" type="email"/>
</div>
</div>
</section>
{/*  Section 3: Description & Attachments  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">description</span>
<h4 className="font-bold uppercase tracking-wide text-xs">Description &amp; Evidence</h4>
</div>
<div className="space-y-6">
<div>
<label className="block text-sm font-medium mb-2">Detailed Issue Description</label>
<textarea className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary resize-none" placeholder="Provide as much detail as possible about the issue..." rows="6"></textarea>
</div>
<div>
<label className="block text-sm font-medium mb-2">Attachments</label>
<div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 dark:bg-slate-800/30 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
<span className="material-symbols-outlined text-4xl text-slate-400 group-hover:text-primary transition-colors">cloud_upload</span>
<p className="mt-4 text-sm font-medium">Click to upload or drag and drop</p>
<p className="mt-1 text-xs text-slate-500">PNG, JPG or PDF (max. 10MB)</p>
</div>
</div>
</div>
</section>
{/*  Section 4: Assignment & Tags  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">assignment_ind</span>
<h4 className="font-bold uppercase tracking-wide text-xs">Assignment &amp; Tags</h4>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">Assign to Team/Agent</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-primary focus:border-primary">
<option>Technical Support Team</option>
<option>Success Management</option>
<option>Sales Engineering</option>
<option>Unassigned</option>
</select>
</div>
<div>
<label className="block text-sm font-medium mb-2">Tags</label>
<div className="flex flex-wrap gap-2 p-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg min-h-[46px]">
<span className="inline-flex items-center gap-1 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                                            Priority
                                            <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
</span>
<span className="inline-flex items-center gap-1 bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase">
                                            v2.4-stable
                                            <span className="material-symbols-outlined text-xs cursor-pointer">close</span>
</span>
<input className="bg-transparent border-none p-0 text-sm focus:ring-0 placeholder:text-slate-500 w-24" placeholder="Add tag..." type="text"/>
</div>
</div>
</div>
</section>
{/*  Action Buttons  */}
<div className="flex items-center justify-end gap-4 pt-4 pb-12">
<button className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors" type="button">
                                Cancel
                            </button>
<button className="px-8 py-2.5 rounded-lg text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center gap-2" type="submit">
<span className="material-symbols-outlined text-sm">check_circle</span>
                                Create Ticket
                            </button>
</div>
</form>
</div>
</div>
    </>
  );
}
