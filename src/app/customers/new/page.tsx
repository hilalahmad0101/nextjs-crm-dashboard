import React from 'react';
import Link from 'next/link';

export default function AddNewCustomerForm() {
  return (
    <>
      {/* Screen Content */}
      {/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
<a className="hover:text-primary transition-colors" href="/customers">Customers</a>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">Add New Customer</span>
</nav>
{/*  Page Title  */}
<div className="mb-8">
<h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Add New Customer</h1>
<p className="text-slate-500 dark:text-slate-400">Set up a new customer profile. All fields marked with * are required.</p>
</div>
{/*  Form Container  */}
<form className="space-y-8">
{/*  Section 1: Company Information  */}
<section className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="size-10 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
<span className="material-symbols-outlined">business</span>
</div>
<div>
<h2 className="text-lg font-bold">Company Information</h2>
<p className="text-sm text-slate-500">Essential business identity and scale</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name *</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="e.g. Acme Corporation" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Industry</label>
<select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all">
<option value="">Select Industry</option>
<option value="tech">Technology</option>
<option value="finance">Finance</option>
<option value="healthcare">Healthcare</option>
<option value="retail">Retail</option>
<option value="manufacturing">Manufacturing</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Website URL</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">https://</span>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg pl-16 pr-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="www.example.com" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Size</label>
<select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all">
<option value="">Select Range</option>
<option value="1-10">1-10 employees</option>
<option value="11-50">11-50 employees</option>
<option value="51-200">51-200 employees</option>
<option value="201-500">201-500 employees</option>
<option value="500+">500+ employees</option>
</select>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Headquarters</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="City, Country" type="text"/>
</div>
</div>
</section>
{/*  Section 2: Primary Contact  */}
<section className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
<span className="material-symbols-outlined">person</span>
</div>
<div>
<h2 className="text-lg font-bold">Primary Contact</h2>
<p className="text-sm text-slate-500">Main decision maker or account holder</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name *</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Job Title</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="e.g. Chief Operating Officer" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address *</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
<input className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
</section>
{/*  Section 3: Account Details  */}
<section className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div className="flex items-center gap-3 mb-6">
<div className="size-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center">
<span className="material-symbols-outlined">badge</span>
</div>
<div>
<h2 className="text-lg font-bold">Account Details</h2>
<p className="text-sm text-slate-500">Internal management and subscription settings</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Account Manager</label>
<select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all">
<option value="">Assign Manager</option>
<option value="alex">Alex Rivera</option>
<option value="sarah">Sarah Johnson</option>
<option value="michael">Michael Chen</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subscription Tier</label>
<select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all">
<option value="basic">Basic</option>
<option value="pro">Pro</option>
<option value="enterprise">Enterprise</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Account Status</label>
<select className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary/50 outline-none transition-all">
<option value="active">Active</option>
<option value="pending">Pending</option>
<option value="onboarding">Onboarding</option>
</select>
</div>
</div>
</section>
{/*  Action Buttons  */}
<div className="flex items-center justify-end gap-4 pt-6">
<button className="px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                        Cancel
                    </button>
<button className="px-8 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" type="submit">
                        Add Customer
                    </button>
</div>
</form>
    </>
  );
}
