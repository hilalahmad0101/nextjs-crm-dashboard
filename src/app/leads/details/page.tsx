import React from 'react';
import Link from 'next/link';

export default function LeadDetailsView() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

{/*  Lead Detail Content  */}
<div className="flex-1 overflow-y-auto p-8">
{/*  Lead Action Header  */}
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div className="flex items-start gap-5">
<div className="size-20 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold border border-primary/20 bg-cover bg-center" data-alt="Portrait of Sarah Jenkins smiling" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCSBBkpsjedP3qhbtnlhW4zc2zQUXWCa-oVlRdUjtbEOLTAWNMn1zdW2XIljh48yU2bfFeCead8tUTOfaATtVo85ptgv2x1RoCcL7emjBiCNjxhwOhJZIVvlE12zk1NXKNQcwHmOxtF38cKRE0aTeZsTQSIVEMSsknN2tXKHeeit-H_2bPKWYg5UgHsfog2C4FR8sCR9LmCC-GphRwp8EIjVdO2YK-eZHkc6vrh-vw_yVQagSu1b_XqowBo3hmMBZ-ffDVCCRNYF1o\')' }}>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-3">
<h1 className="text-3xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h1>
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">Contacted</span>
</div>
<div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">business</span>Product Manager at TechFlow</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-base">schedule</span>Last updated 2 hours ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-all border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-lg">edit</span>
                        Edit
                    </button>
<button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold rounded-lg transition-all border border-slate-200 dark:border-slate-700">
<span className="material-symbols-outlined text-lg">call</span>
                        Log Call
                    </button>
<button className="flex items-center gap-2 px-5 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-lg transition-all shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-lg">mail</span>
                        Send Email
                    </button>
</div>
</div>
{/*  Grid Layout  */}
<div className="grid grid-cols-12 gap-8">
{/*  Left Column: Info Cards  */}
<div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
{/*  Lead Information Card  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-lg">info</span>
                            Lead Information
                        </h3>
<div className="flex flex-col gap-4">
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Email</p>
<p className="text-sm text-slate-700 dark:text-slate-200 truncate">sarah.jenkins@techflow.io</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Phone</p>
<p className="text-sm text-slate-700 dark:text-slate-200">+1 (555) 012-3456</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Company</p>
<p className="text-sm text-slate-700 dark:text-slate-200">TechFlow Inc.</p>
</div>
<div>
<p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Source</p>
<span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-400">LinkedIn Campaign</span>
</div>
</div>
</div>
{/*  Social Profiles  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Social Profiles</h3>
<div className="flex gap-3">
<a className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">link</span>
</a>
<a className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">public</span>
</a>
<a className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
{/*  Tags  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">Tags</h3>
<button className="text-primary hover:underline text-xs font-bold">Add</button>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[11px] font-bold border border-green-500/20">High Potential</span>
<span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-500 text-[11px] font-bold border border-purple-500/20">SaaS</span>
<span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 text-[11px] font-bold border border-amber-500/20">Follow-up</span>
</div>
</div>
</div>
{/*  Center Column: Activity Composer & Timeline  */}
<div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
{/*  Activity Composer  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-1 flex flex-col">
<div className="flex border-b border-slate-200 dark:border-slate-800" id="activity-tabs">
<button className="px-4 py-3 text-sm font-bold text-primary border-b-2 border-primary" data-tab="log-note">Log Note</button>
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300" data-tab="email">Email</button>
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300" data-tab="call">Call</button>
<button className="px-4 py-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300" data-tab="meeting">Meeting</button>
</div>
<div className="p-4 flex-1">
{/*  Log Note Tab  */}
<div className="active" data-tab-content="log-note">
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-500 resize-none" placeholder="Click to log a note about Sarah..." rows="4"></textarea>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
<div className="flex gap-2 text-slate-400">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">attach_file</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">alternate_email</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">format_bold</span></button>
</div>
<button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">Save Note</button>
</div>
</div>
{/*  Email Tab  */}
<div data-tab-content="email">
<div className="flex flex-col gap-3">
<div className="flex items-center border-b border-slate-100 dark:border-slate-700 py-1">
<span className="text-xs font-bold text-slate-400 w-16">To:</span>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 text-slate-700 dark:text-slate-200" type="text" value="sarah.jenkins@techflow.io"/>
</div>
<div className="flex items-center border-b border-slate-100 dark:border-slate-700 py-1">
<span className="text-xs font-bold text-slate-400 w-16">Subject:</span>
<input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-1 text-slate-700 dark:text-slate-200" placeholder="Enter subject..." type="text"/>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-500 resize-none" placeholder="Compose your email..." rows="4"></textarea>
</div>
<div className="flex items-center justify-between mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
<div className="flex gap-2 text-slate-400">
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">auto_awesome</span></button>
<button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">schedule_send</span></button>
</div>
<button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">Send Email</button>
</div>
</div>
{/*  Call Tab  */}
<div data-tab-content="call">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] text-slate-500 uppercase font-bold">Outcome</label>
<select className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs py-2 focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200">
<option>Connected</option>
<option>Busy</option>
<option>Left Voicemail</option>
<option>No Answer</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-[10px] text-slate-500 uppercase font-bold">Duration (min)</label>
<input className="bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-xs py-2 focus:ring-2 focus:ring-primary/50 text-slate-700 dark:text-slate-200" placeholder="e.g. 15" type="number"/>
</div>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-500 resize-none" placeholder="Call summary and highlights..." rows="2"></textarea>
<div className="flex items-center justify-end mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
<button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">Log Call</button>
</div>
</div>
{/*  Meeting Tab  */}
<div data-tab-content="meeting">
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-[10px] text-slate-500 uppercase font-bold">Meeting Type</label>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-primary">Demo</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">Discovery</button>
<button className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">Negotiation</button>
</div>
</div>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-500 resize-none" placeholder="Key decisions and summary..." rows="2"></textarea>
<div className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
<p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Follow-up Tasks</p>
<input className="w-full bg-transparent border-none focus:ring-0 text-xs text-slate-700 dark:text-slate-200 placeholder:text-slate-400" placeholder="+ Add a follow-up item..." type="text"/>
</div>
</div>
<div className="flex items-center justify-end mt-2 pt-3 border-t border-slate-200 dark:border-slate-800">
<button className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-lg">Log Meeting</button>
</div>
</div>
</div>
</div>
{/*  Timeline  */}
<div className="flex flex-col gap-4">
<h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest px-1">Activity Timeline</h3>
{/*  Timeline Entry 1  */}
<div className="relative pl-8 pb-8">
<div className="absolute left-3.5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
<div className="absolute left-0 top-0 size-7 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>mail</span>
</div>
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-sm font-bold text-slate-900 dark:text-white">Email Sent: Proposal Follow-up</p>
<span className="text-xs text-slate-400 font-medium">1 hour ago</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Sent a follow-up email regarding the enterprise pricing deck. Status: Delivered &amp; Opened.</p>
<div className="flex items-center gap-2">
<button className="text-[11px] font-bold text-primary flex items-center gap-1">View Email <span className="material-symbols-outlined text-xs">arrow_forward</span></button>
</div>
</div>
</div>
{/*  Timeline Entry 2  */}
<div className="relative pl-8 pb-8">
<div className="absolute left-3.5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>
<div className="absolute left-0 top-0 size-7 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>call</span>
</div>
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-sm font-bold text-slate-900 dark:text-white">Outbound Call</p>
<span className="text-xs text-slate-400 font-medium">Yesterday, 4:15 PM</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400">Duration: 12 minutes. Discussed the migration timeline. Sarah is concerned about the Q3 deadline.</p>
<div className="mt-3 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">play_circle</span>
<div className="h-1 flex-1 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-primary"></div>
</div>
<span className="text-[10px] font-mono text-slate-500">04:12 / 12:00</span>
</div>
</div>
</div>
{/*  Timeline Entry 3  */}
<div className="relative pl-8">
<div className="absolute left-3.5 top-0 h-10 w-px bg-slate-200 dark:bg-slate-800"></div>
<div className="absolute left-0 top-0 size-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 ring-4 ring-background-light dark:ring-background-dark">
<span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '\'FILL\' 1' }}>notes</span>
</div>
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-4">
<div className="flex items-center justify-between mb-2">
<p className="text-sm font-bold text-slate-900 dark:text-white">Note added by Mark Chen</p>
<span className="text-xs text-slate-400 font-medium">May 12, 11:30 AM</span>
</div>
<p className="text-sm text-slate-600 dark:text-slate-400 italic">"Met Sarah at the TechSummit. She mentioned they are looking to replace their current CRM by end of year. Needs high-priority follow up."</p>
</div>
</div>
</div>
</div>
{/*  Right Column: Context/Side Widgets  */}
<div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
{/*  Next Steps  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2 uppercase tracking-wide">
<span className="material-symbols-outlined text-primary text-lg">checklist</span>
                            Next Steps
                        </h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
<div className="size-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center cursor-pointer"></div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-700 dark:text-slate-200">Prepare Tech Demo</p>
<p className="text-[10px] text-red-500">Due tomorrow</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
<div className="size-5 rounded border border-slate-300 dark:border-slate-600 flex items-center justify-center cursor-pointer"></div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-700 dark:text-slate-200">Review Legal Contract</p>
<p className="text-[10px] text-slate-500">May 20</p>
</div>
</div>
<button className="w-full py-2 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-500 hover:text-primary transition-colors">
                                + Add task
                            </button>
</div>
</div>
{/*  Associated Deals  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Associated Deals</h3>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1 border-b border-slate-200 dark:border-slate-800 pb-3">
<div className="flex items-center justify-between">
<p className="text-xs font-bold text-primary truncate hover:underline cursor-pointer">TechFlow Enterprise Expansion</p>
<p className="text-xs font-bold">$42,000</p>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="h-1.5 flex-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-primary"></div>
</div>
<span className="text-[10px] text-slate-500">Negotiation</span>
</div>
</div>
<button className="text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-sm">add</span> New Deal
                            </button>
</div>
</div>
{/*  Team Members  */}
<div className="bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 p-5">
<h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4 uppercase tracking-wide">Team Assigned</h3>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover" data-alt="Mark Chen sales manager" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAqItXiFWfh7M0oewBhGoCR8n0qBpEQpXbZswk3rWE2B2GLDXQ73jUdcf3MFWkvbt1ISuXUpXyP_ccOS9qgWT1DQVyeg8CnfgeGxFu_DHgfSZtD4QKabfNgxyYGfG9SsjYfA5ZO9IrUg6y8XaG1SbZvASZPYIQIjdtnfh7mN-qigjJCAYz0DOmeGYPjJaJ1Ng3qsoNGvdGawktixR0vvsWhWTCsmHBTy_7bHLJLjWgZvwZzdxirUqlGd-yN1Ujmf_Zk3aJa0JVC-50\')' }}></div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none">Mark Chen</p>
<p className="text-[10px] text-slate-500">Account Executive (Owner)</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="size-8 rounded-full bg-slate-200 bg-cover" data-alt="Jessica Alba solution architect" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDRuoSeZLPn1ijw7SYEGy8eRu52nYLhaZnl_ETQHoGSjX3skQs7RhmrBrB7Ji5DZkYt6xl86fspgeVe6bFoBUuW5QjFaktKw2Ayu9VsuxBRy3Gg_BrdSe-72AxEfGq8qbIam2MAWWIEn-VjDZ18EhA0-6rG0gXyVcDRQJWgkxaroN2jf8-OdvxMFuXPO6VmP1KovCvond4goLXBjmM_3jPTwJJ6_9GRjpQ64JPyW-BL_u13-kEZsTbD0jaSHfTNQBCKmg37NdtC_Xo\')' }}></div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-700 dark:text-slate-200 leading-none">Jessica Alba</p>
<p className="text-[10px] text-slate-500">Solution Architect</p>
</div>
</div>
<button className="flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">person_add</span>
</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
