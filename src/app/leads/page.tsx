import React from 'react';
import Link from 'next/link';

export default function LeadManagement() {
  return (
    <>
      {/* Screen Content */}
      {/*  Top Navbar  */}

{/*  Page Body  */}
<div className="flex-1 overflow-y-auto p-8">
{/*  Page Header & Actions  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl font-bold tracking-tight">Leads</h2>
<p className="text-slate-500 dark:text-slate-400">Manage and track your potential customers</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-800 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-[18px]">upload</span>
                            Export
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
<span className="material-symbols-outlined text-[18px]">add</span>
                            Add New Lead
                        </button>
</div>
</div>
{/*  Filters Bar  */}
<div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-6 shadow-sm">
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer">
<span className="text-slate-500">Source:</span>
<span>All Channels</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer">
<span className="text-slate-500">Status:</span>
<span>Active Leads</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer">
<span className="text-slate-500">Rep:</span>
<span>Team Alpha</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 text-xs font-medium cursor-pointer">
<span className="text-slate-500">Last Contact:</span>
<span>Last 30 Days</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="ml-auto flex items-center gap-2 text-xs font-medium text-primary cursor-pointer hover:underline">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
                            More Filters
                        </div>
</div>
</div>
{/*  Leads Table  */}
<div className="bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Lead Name</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Source</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Sales Rep</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Last Contact</th>
<th className="px-6 py-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
{/*  Row 1  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">person</span>
</div>
<div>
<p className="text-sm font-semibold">Sarah Jenkins</p>
<p className="text-xs text-slate-500">sarah.j@techflow.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                            Website
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-green-500"></div>
<span className="text-sm font-medium">Contacted</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-orange-500 text-[10px] text-white flex items-center justify-center font-bold">MK</div>
<span className="text-sm">Marcus K.</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm">Oct 24, 2023</p>
<p className="text-xs text-slate-500">2:45 PM</p>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">person</span>
</div>
<div>
<p className="text-sm font-semibold">David Chen</p>
<p className="text-xs text-slate-500">d.chen@apexcorp.io</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                            LinkedIn
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-amber-500"></div>
<span className="text-sm font-medium">In Progress</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-blue-500 text-[10px] text-white flex items-center justify-center font-bold">SL</div>
<span className="text-sm">Sophia L.</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm">Oct 23, 2023</p>
<p className="text-xs text-slate-500">10:15 AM</p>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">person</span>
</div>
<div>
<p className="text-sm font-semibold">Emma Thompson</p>
<p className="text-xs text-slate-500">emma.t@brightside.net</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            Referral
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-slate-300 dark:bg-slate-600"></div>
<span className="text-sm font-medium">New</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-indigo-500 text-[10px] text-white flex items-center justify-center font-bold">JT</div>
<span className="text-sm">James T.</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm text-slate-400">Never</p>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">person</span>
</div>
<div>
<p className="text-sm font-semibold">Robert Miller</p>
<p className="text-xs text-slate-500">robert@miller-dev.com</p>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                            Cold Call
                                        </span>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-2 rounded-full bg-red-500"></div>
<span className="text-sm font-medium">Lost</span>
</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-orange-500 text-[10px] text-white flex items-center justify-center font-bold">MK</div>
<span className="text-sm">Marcus K.</span>
</div>
</td>
<td className="px-6 py-4">
<p className="text-sm">Oct 20, 2023</p>
<p className="text-xs text-slate-500">04:30 PM</p>
</td>
<td className="px-6 py-4">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination  */}
<div className="px-6 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<p className="text-xs text-slate-500 font-medium">Showing 1 to 4 of 120 leads</p>
<div className="flex items-center gap-2">
<button className="p-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 disabled:opacity-50">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="px-3 py-1 rounded border border-primary bg-primary text-white text-xs font-bold">1</button>
<button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700">2</button>
<button className="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700">3</button>
<button className="p-1 rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/*  Footer Summary Cards  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary">trending_up</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Conversion Rate</p>
<p className="text-xl font-bold">24.5%</p>
</div>
</div>
<div className="p-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center gap-4">
<div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center">
<span className="material-symbols-outlined text-green-500">add_task</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">New Leads (Today)</p>
<p className="text-xl font-bold">18</p>
</div>
</div>
<div className="p-4 bg-white dark:bg-background-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm flex items-center gap-4">
<div className="size-12 rounded-full bg-amber-500/10 flex items-center justify-center">
<span className="material-symbols-outlined text-amber-500">schedule</span>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Avg. Response Time</p>
<p className="text-xl font-bold">2h 15m</p>
</div>
</div>
</div>
</div>
    </>
  );
}
