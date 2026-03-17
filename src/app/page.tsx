import React from 'react';
import Link from 'next/link';

export default function DashboardOverview() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-[1600px] mx-auto space-y-8">
{/*  KPI Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> 12.5%
                                </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Revenue</p>
<h3 className="text-2xl font-bold mt-1">$128,430.00</h3>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">person_add</span>
</div>
<span className="text-rose-500 text-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_down</span> 2.1%
                                </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Leads</p>
<h3 className="text-2xl font-bold mt-1">1,240</h3>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">conversion_path</span>
</div>
<span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> 0.4%
                                </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Conversion Rate</p>
<h3 className="text-2xl font-bold mt-1">3.2%</h3>
</div>
<div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-primary/10 rounded-lg text-primary">
<span className="material-symbols-outlined">assignment_turned_in</span>
</div>
<span className="text-emerald-500 text-sm font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-sm">trending_up</span> 5.0%
                                </span>
</div>
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Open Deals</p>
<h3 className="text-2xl font-bold mt-1">45</h3>
</div>
</div>
{/*  Middle Section: Main Chart and Activity Feed  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Sales Chart  */}
<div className="lg:col-span-2 bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-bold">Monthly Revenue Trend</h2>
<p className="text-sm text-slate-500">Financial performance overview for the current year</p>
</div>
<select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm px-4 py-2 focus:ring-primary">
<option>Last 12 Months</option>
<option>Last 6 Months</option>
</select>
</div>
<div className="h-64 relative">
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
<defs>
<linearGradient id="grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{ stopColor: 'rgba(13, 108, 242, 0.2)', stopOpacity: '1' }}></stop>
<stop offset="100%" style={{ stopColor: 'rgba(13, 108, 242, 0)', stopOpacity: '1' }}></stop>
</linearGradient>
</defs>
<path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,30 V100 H0 Z" fill="url(#grad)"></path>
<path d="M0,80 Q10,75 20,60 T40,40 T60,50 T80,20 T100,30" fill="none" stroke="#0d6cf2" strokeWidth="2"></path>
</svg>
<div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-slate-400 px-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
</div>
</div>
{/*  Activity Feed Sidebar  */}
<div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
<h2 className="text-lg font-bold mb-6">Activity Feed</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="relative">
<div className="size-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">check_circle</span>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-200 dark:bg-slate-800"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Deal Closed: Acme Corp</p>
<p className="text-xs text-slate-500 mt-1">2 hours ago by Sarah Smith</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person_add</span>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-200 dark:bg-slate-800"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">New Lead: Globex Ltd</p>
<p className="text-xs text-slate-500 mt-1">4 hours ago by Marketing</p>
</div>
</div>
<div className="flex gap-4">
<div className="relative">
<div className="size-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">mail</span>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-slate-200 dark:bg-slate-800"></div>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Email opened: Solar proposal</p>
<p className="text-xs text-slate-500 mt-1">6 hours ago by TechNova</p>
</div>
</div>
<div className="flex gap-4">
<div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">call</span>
</div>
<div className="flex-1">
<p className="text-sm font-semibold">Meeting scheduled</p>
<p className="text-xs text-slate-500 mt-1">Yesterday by Alex Rivera</p>
</div>
</div>
</div>
</div>
</div>
{/*  Bottom Section: Table and Tasks  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
{/*  Recent Deals Table  */}
<div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h2 className="text-lg font-bold">Recent Deals</h2>
<button className="text-primary text-sm font-semibold hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Value</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Owner</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">A</div>
<div>
<p className="text-sm font-semibold">Acme Corporation</p>
<p className="text-xs text-slate-500">Cloud Infrastructure</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">$24,500</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400">WON</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-xs">Sarah S.</span>
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Female sales agent avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBRHVhwcY1lU1tRwl3IZuPFJ8XJ47aAoWWSkYweJ5X9L1sfeAR2wBHARTwAw-Iou4ywrBy2CIFjsvUKIS6L2APYgi9IyG3qOewCAvEdmbhdIWRBar6vNlp8fOUXZNXzMXTilIsvPktPUmBLzmy6UsnwAVyCVWpIPfXbL2C0F6Oqbk1GyZRmVHEPTOf_WnkbjsQqCQBYnmu4C94x0KA8wksCWB8uBSw-alWpxr-MesI5hd5oDtwASOGtIBI5KfK9TzmyTTSrn7Gp1AY\')' }}></div>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">G</div>
<div>
<p className="text-sm font-semibold">Globex Security</p>
<p className="text-xs text-slate-500">Cybersecurity Pack</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">$12,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">NEGOTIATION</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-xs">John D.</span>
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Male sales agent avatar" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBMUmzKHVf137M_iJf86zLomWrnA2cPDcIYiQLLLiwmp7JR2Q4lGg1DEUblg16zFB-HcH-Yn7afNE3cK8roGEsJvZpb8T-Fq62wful4vNohJyC7DICjrXT0YF7KKoDLSKzRwpygS7m25F7MTKcT4ZnKdgoWya9b-7Q9bLN04TuS8oXJY3yTBWTQYtVPdlXmHDvja6sqhkyXfS9XoNPgp8XjjmwbJukWBurzQKVxWIr3sFvEV-xUzJampL72TS3peFAQKD-Ca6InoNI\')' }}></div>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">U</div>
<div>
<p className="text-sm font-semibold">Umbrella Corp</p>
<p className="text-xs text-slate-500">BioTech Licensing</p>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm font-medium">$50,000</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">PROPOSAL</span>
</td>
<td className="px-6 py-4 text-right">
<div className="flex items-center justify-end gap-2">
<span className="text-xs">Alex R.</span>
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Profile avatar for Alex Rivera" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuBWaROLlP6CGCJOYz7g8E-KOUiYU1i6FtnhxHKSYXZaPXFjs_YuaIzhh8Jo8vROfp3Tp3JOlmtY2pq5KQXuMGWBK4_4Si_IuJVmc4aChqWqBfLj_8bvnlair3tGS0PJ-vaJP10A39rKTaxJgAmb4XPY-Gfq3mjdrYiJwlnQnpKaj2Zyx15cnErAtD1v-I46N40O0tJ9v5OUok_KX8Cjcc4hfMrCBVhOZ3ehkR3L7IG0nFCtrgAwqC1fwr4KPj5_TsyEX-lX85dKKUM\')' }}></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Upcoming Tasks  */}
<div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-bold">Upcoming Tasks</h2>
<button className="p-1 rounded-md bg-primary text-white">
<span className="material-symbols-outlined text-sm leading-none">add</span>
</button>
</div>
<div className="space-y-4">
<div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<div className="flex-1">
<p className="text-sm font-semibold">Follow up with TechNova</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400 px-1.5 py-0.5 rounded font-bold uppercase">High</span>
<span className="text-xs text-slate-500">Due in 2h</span>
</div>
</div>
</div>
</div>
<div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<div className="flex-1">
<p className="text-sm font-semibold">Prepare Q4 Review</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400 px-1.5 py-0.5 rounded font-bold uppercase">Medium</span>
<span className="text-xs text-slate-500">Tomorrow</span>
</div>
</div>
</div>
</div>
<div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-3">
<input className="rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-primary bg-transparent" type="checkbox"/>
<div className="flex-1">
<p className="text-sm font-semibold">Update CRM documentation</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-400 px-1.5 py-0.5 rounded font-bold uppercase">Low</span>
<span className="text-xs text-slate-500">Dec 15</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
