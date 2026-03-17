import React from 'react';
import Link from 'next/link';

export default function Tasks() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-3xl font-black tracking-tight mb-1">Tasks</h2>
<p className="text-slate-500 dark:text-slate-400">Manage and track your sales activities</p>
</div>
</div>
{/*  Tabs  */}
<div className="flex border-b border-slate-200 dark:border-slate-800 mb-6">
<button className="px-6 py-3 text-sm font-bold text-primary border-b-2 border-primary">All Tasks</button>
<button className="px-6 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">My Tasks</button>
<button className="px-6 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Completed</button>
</div>
{/*  Task List Table  */}
<div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="p-4 w-12 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Task Details</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Priority</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Due Date</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Associated Contact</th>
<th className="p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
{/*  Task 1  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Follow up with lead regarding Q4 proposal</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Project: Enterprise Expansion</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                                                High
                                            </span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                                            Oct 24, 2023
                                        </td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="John Doe contact photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeD00M23WKngdms0CdMy6dcXCFB_xOy6_Ij213VQr9BJhI982jQL0GtuyMCAU1qzjV3AfNz0F2YERjfJA-C7dmsgnvG4XOOU3U_yvxEr7li489RNSMRNTu7qslT0n3rveIveQaj3On6ghx4oCJ-l7zIP-qlBI6E2A3Snyf11EuMuyVKFxz4d-T6Xq2xpalw6oPf9IFa-eihdklnY0p-dNrHl5e3XnK5kpwRuobj-jBIHeX84RB1cG5xDLHBD9gr10qcJ9u-nAjjhM"/>
</div>
<span className="text-sm font-medium">John Doe</span>
</div>
</td>
<td className="p-4 text-right">
<button className="p-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/*  Task 2  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Send revised pricing table</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Project: SaaS Integration</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                                                Medium
                                            </span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                                            Oct 25, 2023
                                        </td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Sarah Smith contact photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkxKfX2vHDLQ5sse7qKQ0LaeT3jpZh_R9td1-m5-THfa3sFGmsXEJUjQh4LvLD5UdnfyhgZ5mi-3sVMPzZ4fvljpDEJIQrOoC9nZWql8FnSAKkKhPFQl_tPxJtAXT2H9OzDuyFvwLxWZ_pY1Frpv1dzmoebQmwq8ItbJf3gtOYeNjPGEey6rvjd2JFpRuyt1nfeswVZ4foEeJvD330_0Bs0j7KqtUFvF0htGNcm28_YLTEjWovOlCOuQcmBd1Q9EtXRdED70yFM2o"/>
</div>
<span className="text-sm font-medium">Sarah Smith</span>
</div>
</td>
<td className="p-4 text-right">
<button className="p-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/*  Task 3  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Initial product demo</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Project: New Lead Nurture</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                                                High
                                            </span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                                            Oct 26, 2023
                                        </td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
<span className="text-[10px] font-bold text-primary">TC</span>
</div>
<span className="text-sm font-medium">TechCorp Inc</span>
</div>
</td>
<td className="p-4 text-right">
<button className="p-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/*  Task 4  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Quarterly review document prep</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Project: Account Maintenance</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                                                Low
                                            </span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                                            Oct 27, 2023
                                        </td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="James Wilson contact photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIFeAKfR_reRFBpibYFstapYug4dFh5ds6bUQfIJ80aUSnWSWj1Rrwit1I7QAtzXIRSxiO60c_8qlajM5Dz8OMxM9n6VpKEwbryG_nb5_z4NdUTZCqcVvOI-3PEFzbvnGQFxPD76KPmE4MCHGFM87Oxwxt_z7ROIklmXoYzLnq3gwBFbcD17uQAolQXOVHtX5gdewFKcn5XvLRd3rd31uDc7osBrT7XdmevQG_xj4OMj6HTPpa6KrQULtN2lM84R7TaaWUk1A7vVc"/>
</div>
<span className="text-sm font-medium">James Wilson</span>
</div>
</td>
<td className="p-4 text-right">
<button className="p-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
{/*  Task 5  */}
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="p-4 text-center">
<input className="rounded border-slate-300 dark:border-slate-700 bg-transparent text-primary focus:ring-primary" type="checkbox"/>
</td>
<td className="p-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Check-in call with stakeholders</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Project: Retail Modernization</span>
</div>
</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300">
                                                Medium
                                            </span>
</td>
<td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                                            Oct 28, 2023
                                        </td>
<td className="p-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Maria Garcia contact photo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsWDuuHpK2XGNjQCgI2kEKIog_Ix6zlXOXPE1xwDI1eHR0J4DvzXZTKkrTeX8-js709lqDe2od9vlwCAEfNRkjv30LTgxdCfzWcgfB0U6zYqzp7vsP3NraISNjXfRNFrG1d7wDEqY8Kc-rrF-mV9R4MwQmYiDoZS09tY-bu5F7No9tsFAE-Kq05-B8jlkkV2QSnK7wKUU8pw5LvF0HstQ3odcD_3zv9ky4C6k-3hHepO8A7E3G0Omq6piCm8EiewfVn6GKjnj-RAw"/>
</div>
<span className="text-sm font-medium">Maria Garcia</span>
</div>
</td>
<td className="p-4 text-right">
<button className="p-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
{/*  Pagination/Footer  */}
<div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<span className="text-sm text-slate-500 dark:text-slate-400">Showing 5 of 24 tasks</span>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled="">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-bold">1</button>
<button className="px-3 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">2</button>
<button className="px-3 py-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium transition-colors">3</button>
<button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
    </>
  );
}
