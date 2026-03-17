import React from 'react';
import Link from 'next/link';

export default function AddNewUserForm() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-4xl mx-auto">
<div className="mb-8">
<nav className="flex mb-4 text-sm text-slate-500 gap-2">
<a className="hover:text-primary transition-colors" href="#">Team</a>
<span>/</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">Add New Member</span>
</nav>
<h2 className="text-3xl font-bold tracking-tight">Add New Team Member</h2>
<p className="text-slate-500 dark:text-slate-400 mt-2">Invite a colleague to join your organization and collaborate on projects.</p>
</div>
<form className="space-y-6">
<section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">person</span>
<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Personal Info</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary placeholder:text-slate-500 text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary placeholder:text-slate-500 text-sm" placeholder="Doe" type="text"/>
</div>
<div className="md:col-span-2 space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary placeholder:text-slate-500 text-sm" placeholder="john.doe@company.com" type="email"/>
</div>
</div>
</section>
<section className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex items-center gap-2 mb-6 text-primary">
<span className="material-symbols-outlined">manage_accounts</span>
<h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Account Settings</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary text-sm">
<option value="">Select a role</option>
<option value="admin">Administrator</option>
<option value="manager">Manager</option>
<option value="editor">Editor</option>
<option value="viewer">Viewer</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
<select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 focus:ring-primary focus:border-primary text-sm">
<option value="">Select department</option>
<option value="sales">Sales</option>
<option value="marketing">Marketing</option>
<option value="engineering">Engineering</option>
<option value="support">Customer Support</option>
</select>
</div>
</div>
</section>
<section className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-xl">
<div className="flex items-start gap-4">
<div className="p-2 bg-primary/20 rounded-lg text-primary">
<span className="material-symbols-outlined">shield_person</span>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold mb-1">Permissions Preview</h3>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Based on the selected role, this user will have access to lead management, reporting dashboards, and team collaboration tools.</p>
<a className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1" href="#">
                                        View full permission set
                                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
</div>
</section>
<div className="flex items-center justify-end gap-4 pt-4">
<button className="px-6 py-2.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors" type="button">
                                Cancel
                            </button>
<button className="px-8 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center gap-2" type="submit">
<span className="material-symbols-outlined text-lg">send</span>
                                Send Invitation
                            </button>
</div>
</form>
</div>
    </>
  );
}
