import React from 'react';
import Link from 'next/link';

export default function RolePermissionsManagement() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

{/*  Breadcrumbs & Title Area  */}
<div className="px-8 pt-6">
<nav className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
<a className="hover:text-primary transition-colors" href="/settings">Settings</a>
<span className="material-symbols-outlined text-[10px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="/roles">User Roles</a>
<span className="material-symbols-outlined text-[10px]">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100">Sales Rep Permissions</span>
</nav>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h2 className="text-2xl font-bold">Role Permissions: <span className="text-primary">Sales Rep</span></h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Configure access levels for the core Sales Representative team members.</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-semibold border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-all">
                            Reset Defaults
                        </button>
<button className="px-6 py-2 text-sm font-semibold bg-primary text-white hover:bg-primary/90 rounded-lg shadow-lg shadow-primary/20 transition-all">
                            Save Changes
                        </button>
</div>
</div>
</div>
{/*  Tabs  */}
<div className="px-8 mt-6">
<div className="flex border-b border-slate-200 dark:border-slate-800 gap-8">
<button className="pb-3 text-sm font-bold border-b-2 border-primary text-primary">Modules</button>
<button className="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Team Access</button>
<button className="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">API Permissions</button>
<button className="pb-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Audit Log</button>
</div>
</div>
{/*  Content Area  */}
<div className="flex-1 overflow-y-auto px-8 py-6 custom-scrollbar">
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
<th className="px-6 py-4">Module Name</th>
<th className="px-6 py-4 text-center">View</th>
<th className="px-6 py-4 text-center">Create</th>
<th className="px-6 py-4 text-center">Edit</th>
<th className="px-6 py-4 text-center">Delete</th>
<th className="px-6 py-4">Scope</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
{/*  Leads  */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person_add</span>
</div>
<span className="font-medium">Leads</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4">
<select className="text-xs bg-slate-100 dark:bg-slate-800 border-none rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
<option>Owned Records</option>
<option>Team Records</option>
<option>All Records</option>
</select>
</td>
</tr>
{/*  Deals  */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-sm">payments</span>
</div>
<span className="font-medium">Deals</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4">
<select className="text-xs bg-slate-100 dark:bg-slate-800 border-none rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
<option>Owned Records</option>
<option>Team Records</option>
<option>All Records</option>
</select>
</td>
</tr>
{/*  Customers  */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-sm">groups</span>
</div>
<span className="font-medium">Customers</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4">
<select className="text-xs bg-slate-100 dark:bg-slate-800 border-none rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
<option>All Records</option>
<option>Team Records</option>
<option>Owned Records</option>
</select>
</td>
</tr>
{/*  Reports  */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-sm">bar_chart</span>
</div>
<span className="font-medium">Reports</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4">
<select className="text-xs bg-slate-100 dark:bg-slate-800 border-none rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
<option>Team Reports</option>
<option>Personal Only</option>
<option>All Reports</option>
</select>
</td>
</tr>
{/*  Tasks  */}
<tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-sm">checklist</span>
</div>
<span className="font-medium">Tasks</span>
</div>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4 text-center">
<input checked="" className="size-4 rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
</td>
<td className="px-6 py-4">
<select className="text-xs bg-slate-100 dark:bg-slate-800 border-none rounded py-1 px-2 focus:ring-1 focus:ring-primary outline-none">
<option>Owned Records</option>
<option>All Records</option>
</select>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Secondary Section  */}
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
<h3 className="font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">security</span>
                            Administrative Override
                        </h3>
<div className="space-y-4">
<label className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer">
<div>
<p className="text-sm font-semibold">Bulk Export Data</p>
<p className="text-xs text-slate-500">Allow user to export list views to CSV</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
<label className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer">
<div>
<p className="text-sm font-semibold">Merge Records</p>
<p className="text-xs text-slate-500">Allow merging duplicate records</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
<h3 className="font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">visibility</span>
                            Advanced Visibility
                        </h3>
<div className="space-y-4">
<label className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer">
<div>
<p className="text-sm font-semibold">View Deleted Records</p>
<p className="text-xs text-slate-500">Access to the recycling bin</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
<label className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg cursor-pointer">
<div>
<p className="text-sm font-semibold">API Access</p>
<p className="text-xs text-slate-500">Allow external integration access</p>
</div>
<div className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</div>
</label>
</div>
</div>
</div>
</div>
    </>
  );
}
