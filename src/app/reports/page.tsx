import React from 'react';
import Link from 'next/link';

export default function AnalyticsReports() {
  return (
    <>
      {/* Screen Content */}
      {/*  Top Header  */}

{/*  Dashboard Content Area  */}
<div className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8">
{/*  Page Header with Date Picker  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Revenue Analytics</h2>
<p className="text-slate-500 dark:text-slate-400 mt-2">Comprehensive performance reports for Q4 2023.</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-1">
<button className="px-4 py-1.5 text-xs font-bold bg-primary text-white rounded-md shadow-sm">Monthly</button>
<button className="px-4 py-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">Quarterly</button>
<button className="px-4 py-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">Yearly</button>
</div>
<div className="flex items-center gap-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 cursor-pointer">
<span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Oct 1 - Oct 31, 2023</span>
<span className="material-symbols-outlined text-slate-400 text-lg">expand_more</span>
</div>
</div>
</div>
{/*  KPI Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Revenue</p>
<h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">$428,500.00</h3>
</div>
<div className="p-2 bg-green-500/10 rounded-lg">
<span className="material-symbols-outlined text-green-500">payments</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="flex items-center text-green-500 text-sm font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span> 15.2%
                            </span>
<span className="text-xs text-slate-500 dark:text-slate-500">vs. last month</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Avg. Deal Value</p>
<h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">$12,450.00</h3>
</div>
<div className="p-2 bg-primary/10 rounded-lg">
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="flex items-center text-red-500 text-sm font-bold">
<span className="material-symbols-outlined text-sm">trending_down</span> 2.1%
                            </span>
<span className="text-xs text-slate-500 dark:text-slate-500">vs. last month</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Conversion Rate</p>
<h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">12.5%</h3>
</div>
<div className="p-2 bg-amber-500/10 rounded-lg">
<span className="material-symbols-outlined text-amber-500">filter_alt</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="flex items-center text-green-500 text-sm font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span> 0.8%
                            </span>
<span className="text-xs text-slate-500 dark:text-slate-500">vs. last month</span>
</div>
</div>
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start">
<div>
<p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">New Leads</p>
<h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">1,240</h3>
</div>
<div className="p-2 bg-purple-500/10 rounded-lg">
<span className="material-symbols-outlined text-purple-500">person_add</span>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="flex items-center text-green-500 text-sm font-bold">
<span className="material-symbols-outlined text-sm">trending_up</span> 12.4%
                            </span>
<span className="text-xs text-slate-500 dark:text-slate-500">vs. last month</span>
</div>
</div>
</div>
{/*  Charts Section  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
{/*  Revenue Growth  */}
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Revenue Trends</h4>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="h-64 relative flex items-end justify-between gap-2 pt-10">
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[40%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[60%] transition-all group-hover:h-[80%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">JUL</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[55%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[45%] transition-all group-hover:h-[65%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">AUG</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[75%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[70%] transition-all group-hover:h-[90%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">SEP</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[90%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[85%] transition-all group-hover:h-[100%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">OCT</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[65%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[55%] transition-all group-hover:h-[75%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">NOV</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary/20 rounded-t-lg h-[80%] relative group">
<div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-lg h-[65%] transition-all group-hover:h-[85%]"></div>
</div>
<span className="text-[10px] font-bold text-slate-400">DEC</span>
</div>
</div>
</div>
{/*  Conversion Funnel  */}
<div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Conversion Funnel</h4>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-600 dark:text-slate-400">New Leads</span>
<span className="font-bold text-slate-900 dark:text-white">1,240 (100%)</span>
</div>
<div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="bg-primary h-full w-full rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-600 dark:text-slate-400">Qualified Leads</span>
<span className="font-bold text-slate-900 dark:text-white">840 (67.7%)</span>
</div>
<div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="bg-primary/80 h-full w-[67.7%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-600 dark:text-slate-400">Negotiations</span>
<span className="font-bold text-slate-900 dark:text-white">320 (25.8%)</span>
</div>
<div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="bg-primary/60 h-full w-[25.8%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-slate-600 dark:text-slate-400">Closed Deals</span>
<span className="font-bold text-slate-900 dark:text-white">155 (12.5%)</span>
</div>
<div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="bg-primary/40 h-full w-[12.5%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Data Tables  */}
<div className="bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Recent Transactions</h4>
<p className="text-sm text-slate-500 dark:text-slate-400">A detailed list of all completed deals this period.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors">
<span className="material-symbols-outlined text-lg">download</span>
                                Export CSV
                            </button>
<button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-200 transition-colors">
<span className="material-symbols-outlined text-lg">picture_as_pdf</span>
                                Export PDF
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 dark:bg-slate-800/80">
<tr>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Transaction ID</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Customer</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Amount</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Status</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Date</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-200">#TRX-9401</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">JD</div>
<div className="text-sm">
<p className="font-bold text-slate-900 dark:text-white">Jordan Davies</p>
<p className="text-slate-500 dark:text-slate-400 text-xs">j.davies@company.com</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">$14,200.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400">
<span className="size-1.5 rounded-full bg-green-500"></span> Completed
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 24, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-200">#TRX-9388</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">SM</div>
<div className="text-sm">
<p className="font-bold text-slate-900 dark:text-white">Sarah Miller</p>
<p className="text-slate-500 dark:text-slate-400 text-xs">sarah@techflow.io</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">$8,500.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
<span className="size-1.5 rounded-full bg-amber-500"></span> Pending
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 22, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td className="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-200">#TRX-9321</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">MK</div>
<div className="text-sm">
<p className="font-bold text-slate-900 dark:text-white">Mark Kendrick</p>
<p className="text-slate-500 dark:text-slate-400 text-xs">m.k@kendrick.co</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-black text-slate-900 dark:text-white">$24,900.00</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400">
<span className="size-1.5 rounded-full bg-green-500"></span> Completed
                                        </span>
</td>
<td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 19, 2023</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
<span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Showing 1 to 3 of 155 entries</span>
<div className="flex gap-2">
<button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="px-3 py-1 bg-primary text-white rounded font-bold text-xs">1</button>
<button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-bold">2</button>
<button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-xs font-bold">3</button>
<button className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
    </>
  );
}
