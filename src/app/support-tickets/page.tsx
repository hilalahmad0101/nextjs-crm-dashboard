import React from 'react';
import Link from 'next/link';

export default function SupportTickets() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

{/*  Page Content  */}
<div className="p-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-3xl font-bold tracking-tight">Support Tickets</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Manage, prioritize and resolve incoming customer requests.</p>
</div>
<button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95">
<span className="material-symbols-outlined">add</span>
                        Create New Ticket
                    </button>
</div>
{/*  Filters  */}
<div className="flex flex-wrap items-center gap-3 mb-6">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
<span className="text-xs font-semibold text-slate-500 uppercase">Status:</span>
<span className="text-sm font-medium">All Tickets</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
<span className="text-xs font-semibold text-slate-500 uppercase">Priority:</span>
<span className="text-sm font-medium">All Priority</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg cursor-pointer hover:border-primary transition-colors">
<span className="text-xs font-semibold text-slate-500 uppercase">Assigned to:</span>
<span className="text-sm font-medium">Everyone</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
<div className="ml-auto flex items-center gap-2">
<span className="text-sm text-slate-500">Showing 24 of 128 tickets</span>
</div>
</div>
{/*  Tickets Table  */}
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Ticket ID</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Customer</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Priority</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Last Updated</th>
<th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-800">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#TK-1024</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Login issue on mobile app</span>
<span className="text-xs text-slate-500 line-clamp-1">User reports 404 error after entering MFA code...</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">AJ</div>
<span className="text-sm">Alice Johnson</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
<span className="size-1.5 rounded-full bg-blue-500"></span> Open
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">HIGH</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 mins ago</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#TK-1025</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">API Rate limit exceeded for production env</span>
<span className="text-xs text-slate-500 line-clamp-1">Client reaching limits twice daily on dashboard endpoints...</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2">
<img className="size-6 rounded" data-alt="TechCorp company logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXhF4fYayvbV6yuAIuk_GA16crYrJiL9nzpCWra7FokjcadZ54Op5xm3wMlCd_JtTX3VGavGYu9LExpNgm4nY9rO9iPpf_fNo79Rrrfw7XCs-NyS72WuU9wkJEPCaDunhh91U46vuV1hJH7XeBb9GT8epBupZ5fImQUymzn21qgQodAe6PYC8Ohec9LCb2svons3pPBxeqhaKgTQtoGeYCOSnSC0iUWojPMvMB9GHfTR8xDxfjlryWe4K5h-TCFnvJLue88Pv2CUk"/>
<span className="text-sm">TechCorp Systems</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
<span className="size-1.5 rounded-full bg-amber-500"></span> In Progress
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">HIGH</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">15 mins ago</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#TK-1026</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Invoice clarification for Jan 2024</span>
<span className="text-xs text-slate-500 line-clamp-1">User needs breakdown of professional service hours...</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">BS</div>
<span className="text-sm">Bob Smith</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
<span className="size-1.5 rounded-full bg-green-500"></span> Resolved
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300">MEDIUM</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">2 hours ago</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#TK-1027</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Feature request: Custom dashboard themes</span>
<span className="text-xs text-slate-500 line-clamp-1">Wants to be able to set brand colors for clients...</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">SL</div>
<span className="text-sm">Sarah Lee</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
<span className="size-1.5 rounded-full bg-blue-500"></span> Open
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-400">LOW</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">5 hours ago</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">#TK-1028</td>
<td className="px-6 py-4">
<div className="flex flex-col">
<span className="text-sm font-semibold">Integrations failing with Salesforce</span>
<span className="text-xs text-slate-500 line-clamp-1">Webhooks returning 500 when syncing new leads...</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-2">
<div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">DM</div>
<span className="text-sm">David Miller</span>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
<span className="size-1.5 rounded-full bg-amber-500"></span> In Progress
                                        </span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">HIGH</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">6 hours ago</td>
<td className="px-6 py-4 whitespace-nowrap text-right">
<button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-sm disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1 bg-primary text-white rounded text-sm">1</button>
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-sm">2</button>
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-sm">3</button>
<button className="px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded text-sm">Next</button>
</div>
<div className="text-sm text-slate-500">
                            Page 1 of 6
                        </div>
</div>
</div>
</div>
    </>
  );
}
