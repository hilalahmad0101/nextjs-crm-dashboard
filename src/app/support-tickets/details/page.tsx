import React from 'react';
import Link from 'next/link';

export default function TicketDetailsView() {
  return (
    <>
      {/* Screen Content */}
      {/*  Top Navbar  */}

{/*  Scrollable Content  */}
<div className="flex-1 overflow-y-auto p-8">
{/*  Breadcrumbs  */}
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a className="hover:text-primary transition-colors" href="/support-tickets">Support Tickets</a>
<span className="material-symbols-outlined text-sm">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">#TK-1024</span>
</nav>
{/*  Ticket Header  */}
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
<div className="space-y-3">
<div className="flex items-center gap-3 flex-wrap">
<h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">Login issue on mobile app</h1>
<div className="flex gap-2">
<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Open</span>
<span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-bold rounded-full uppercase tracking-wider">High Priority</span>
</div>
</div>
<p className="text-slate-500 dark:text-slate-400">Submitted by <span className="text-slate-900 dark:text-slate-200 font-medium">Alice Johnson</span> • 2 hours ago via Mobile App</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg">person_add</span>
                            Assign
                        </button>
<button className="px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-lg">edit</span>
                            Edit
                        </button>
<button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">check_circle</span>
                            Close Ticket
                        </button>
</div>
</div>
{/*  Two Column Layout  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/*  Left Column: Thread  */}
<div className="lg:col-span-8 space-y-6">
{/*  Message 1  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="size-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
<img alt="Alice Johnson" data-alt="Customer avatar Alice Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEdD4H-TYtnhQel3qGlTvIYBx-6xK1aAy4-WzXhfrgf5A9inUIXGx4_WFKQ8_eMPvYvsv1rvSRDJOE8aQ8fkVOWgDpA_p9Z8EZZsLbVenGeef7cnRYfr7y--gQkSzn6O_bZuuVT4LVBWX5fvSz8VQ_MxlFf6dZUyh6dtjEnXsbU9WkQwURRv4S722YwK0o5QE3VrkSnOQunKAQEd2EuWH82UF0SOqR2Os3zUnmE_rqs_UxyiAjzX_2YxTAGb9ZLy3lUnioPx0gpuA"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h4 className="font-bold text-slate-900 dark:text-slate-100">Alice Johnson</h4>
<span className="text-xs text-slate-500">Oct 24, 2023 at 10:30 AM</span>
</div>
<div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
<p>Hi team, I'm having trouble logging into the mobile app on my iPhone 14. Every time I enter my credentials, the app just spins for a while and then shows a "Network Error" message, even though my internet connection is perfectly fine.</p>
<p>I've tried reinstalling the app but the issue persists. Could you please look into this? It's blocking my workflow.</p>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<div className="px-3 py-2 bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-lg flex items-center gap-2 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span className="material-symbols-outlined text-slate-400">image</span>
<span className="text-xs font-medium">screenshot_error.png</span>
</div>
</div>
</div>
</div>
</div>
{/*  Message 2 (Internal Note)  */}
<div className="bg-amber-50/50 dark:bg-amber-900/10 rounded-xl border border-amber-200/50 dark:border-amber-900/30 p-4 border-dashed">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-amber-600 dark:text-amber-500 text-sm">sticky_note_2</span>
<span className="text-xs font-bold text-amber-800 dark:text-amber-500 uppercase tracking-widest">Internal Note</span>
<span className="text-[10px] text-amber-700/60 dark:text-amber-500/60">Only visible to agents</span>
</div>
<div className="flex items-start gap-4">
<div className="size-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">JS</div>
<div className="flex-1">
<p className="text-sm text-amber-900 dark:text-amber-200/80 italic">"Checked the logs, seeing some 401 timeouts specifically from the iOS client during the OAuth handshake. Might be related to the recent auth update." — <span className="font-bold">John Smith</span></p>
</div>
</div>
</div>
{/*  Message 3 (Agent Reply)  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<h4 className="font-bold text-slate-900 dark:text-slate-100">Alex Rivera</h4>
<span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">Agent</span>
</div>
<span className="text-xs text-slate-500">Oct 24, 2023 at 11:15 AM</span>
</div>
<div className="text-slate-700 dark:text-slate-300 leading-relaxed">
<p>Hello Alice, thank you for reaching out and providing those details. I'm sorry for the frustration this is causing.</p>
<p className="mt-3">Our engineering team is currently investigating a similar report. Could you please let me know which version of the app you are running? You can find this at the bottom of the login screen.</p>
<p className="mt-3">Best regards,<br/>Alex</p>
</div>
</div>
</div>
</div>
{/*  Rich Text Editor  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark shadow-lg overflow-hidden">
<div className="flex border-b border-slate-200 dark:border-border-dark">
<button className="px-6 py-3 text-sm font-bold text-primary border-b-2 border-primary">Public Reply</button>
<button className="px-6 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Internal Note</button>
</div>
<div className="p-4 bg-slate-50 dark:bg-background-dark/30 flex gap-2 border-b border-slate-200 dark:border-border-dark">
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-surface-dark rounded text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xl">format_bold</span></button>
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-surface-dark rounded text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xl">format_italic</span></button>
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-surface-dark rounded text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xl">link</span></button>
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-surface-dark rounded text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xl">format_list_bulleted</span></button>
<div className="flex-1"></div>
<button className="p-1.5 hover:bg-slate-200 dark:hover:bg-surface-dark rounded text-slate-600 dark:text-slate-400"><span className="material-symbols-outlined text-xl">attach_file</span></button>
</div>
<div className="p-4">
<textarea className="w-full h-32 bg-transparent border-none focus:ring-0 text-slate-700 dark:text-slate-300 resize-none" placeholder="Type your message here..." spellcheck="false"></textarea>
</div>
<div className="p-4 bg-slate-50 dark:bg-background-dark/30 border-t border-slate-200 dark:border-border-dark flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Discard</button>
<button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors">Send Reply</button>
</div>
</div>
</div>
{/*  Right Column: Sidebar  */}
<div className="lg:col-span-4 space-y-6">
{/*  Ticket Info Card  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ticket Details</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 dark:text-slate-400">Ticket ID</span>
<span className="font-mono text-slate-900 dark:text-slate-100">#TK-1024</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 dark:text-slate-400">Created</span>
<span className="text-slate-900 dark:text-slate-100">Oct 24, 2023, 10:30 AM</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 dark:text-slate-400">Last Activity</span>
<span className="text-slate-900 dark:text-slate-100">22 mins ago</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500 dark:text-slate-400">Channel</span>
<div className="flex items-center gap-1.5 text-slate-900 dark:text-slate-100">
<span className="material-symbols-outlined text-base">smartphone</span>
<span>Mobile App</span>
</div>
</div>
</div>
</div>
{/*  Customer Profile Card  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Customer Profile</h3>
<a className="text-primary text-xs font-bold hover:underline" href="#">View Profile</a>
</div>
<div className="flex items-center gap-4 mb-4">
<div className="size-12 rounded-full bg-slate-200 overflow-hidden">
<img alt="Alice Johnson" data-alt="Customer Alice Johnson profile thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNEEg2lnEmXkD2hy-dVHS25fuLG7wv8TGE1d0-GmTVjDU7HAnK6IL_koxv8UuvtqLQSwA9NFmHJ_WWLDECSp1sjFxwRcCn4oaj9-dODAEeL6PTHjwA_1oC4vZXXzfwX5p93m2LHVk65bsMgn3bHsZ_CSq-gW73AqMvQLMfX0nI62fl7Lz0Du_pyAnb58rebwpOhHfqou6H6_g08q1HtUrtnvGNXAQJenfXbTQjlXQBJOvkg1ZkcHoD7xxiLz7MFmlgWhbPqBl1hOk"/>
</div>
<div>
<p className="font-bold text-slate-900 dark:text-slate-100">Alice Johnson</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Product Manager at Acme Corp</p>
</div>
</div>
<div className="space-y-3 pt-4 border-t border-slate-100 dark:border-border-dark">
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400">mail</span>
<span className="text-slate-600 dark:text-slate-400">alice.j@acmecorp.com</span>
</div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400">call</span>
<span className="text-slate-600 dark:text-slate-400">+1 (555) 0123-4567</span>
</div>
</div>
</div>
{/*  Assigned Agent Card  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Assigned Agent</h3>
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white">AR</div>
<div className="flex-1">
<p className="text-sm font-bold text-slate-900 dark:text-slate-100">Alex Rivera</p>
<p className="text-[11px] text-slate-500">Tier 2 Support Specialist</p>
</div>
<button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">sync</button>
</div>
</div>
{/*  Tags Card  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Tags</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-border-dark">MOBILE</span>
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-border-dark">BUG</span>
<span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold rounded-lg border border-slate-200 dark:border-border-dark">AUTHENTICATION</span>
<button className="px-2.5 py-1 border border-dashed border-slate-300 dark:border-border-dark text-slate-400 dark:text-slate-500 text-[11px] font-bold rounded-lg hover:border-primary hover:text-primary transition-colors">+ ADD TAG</button>
</div>
</div>
{/*  Related Items  */}
<div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 shadow-sm">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Previous Tickets (2)</h3>
<div className="space-y-4">
<div className="group cursor-pointer">
<p className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-1">#TK-0952: Billing cycle question</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-500">Sept 12, 2023</span>
<span className="size-1 bg-slate-300 rounded-full"></span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Resolved</span>
</div>
</div>
<div className="group cursor-pointer">
<p className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors line-clamp-1">#TK-0841: API key rotation issue</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-slate-500">Aug 05, 2023</span>
<span className="size-1 bg-slate-300 rounded-full"></span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Resolved</span>
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
