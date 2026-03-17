import React from 'react';
import Link from 'next/link';

export default function UserProfileDetails() {
  return (
    <>
      {/* Screen Content */}
      {/*  Header  */}

<div className="flex-1 overflow-y-auto p-6 space-y-8">
{/*  User Header Section  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-6">
<div className="relative group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-xl">
<img alt="Alex Rivera" className="w-full h-full object-cover" data-alt="Large detailed portrait of Alex Rivera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7gkSbdCXEvvEpCGGxAFwFR50aYy9p3h1olMWbk5klV26rYBHvMkMTx5E-t9NuL-y3o3KTRPWemS8z2IncCOiqFC2MaOophRJVm6X0y72R7CNDW5DE9vHdBCJWBJCTy-Cji6QkCIAZ19S2AhRKKoEQNiUPGfudf5KenSWXmOJeG1pI8lc6KDC6-QFvkZIfYct1C1QWxpm8oz8uic-bKkoIABBPYjmAtLky1uPtQv8YF6Sux4KgNHpwljKjGrwAz-nbsRHdibRykVk"/>
</div>
<button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg">
<span className="material-symbols-outlined text-sm">photo_camera</span>
</button>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3">
<h3 className="text-2xl md:text-3xl font-bold">Alex Rivera</h3>
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">Admin</span>
</div>
<p className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
<span className="material-symbols-outlined text-base">location_on</span>
                                San Francisco, CA
                            </p>
<div className="flex items-center gap-4 pt-2">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-background-dark bg-slate-300 dark:bg-slate-700"></div>
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-background-dark bg-slate-400 dark:bg-slate-600"></div>
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-background-dark bg-slate-500 dark:bg-slate-500"></div>
</div>
<span className="text-xs text-slate-500">Working on 3 active deals</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 md:flex-none px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Message
                        </button>
<button className="flex-1 md:flex-none px-6 py-2 bg-primary text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">edit</span>
                            Edit User
                        </button>
</div>
</div>
{/*  Tabs  */}
<div className="border-b border-slate-200 dark:border-slate-800 flex gap-8">
<button className="pb-4 text-sm font-semibold text-primary border-b-2 border-primary">Overview</button>
<button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Activity</button>
<button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Permissions</button>
<button className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">Security</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Left Column: Details  */}
<div className="lg:col-span-2 space-y-8">
{/*  Stats Grid  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs text-slate-500 mb-1">Deals Closed</p>
<p className="text-2xl font-bold">124</p>
<div className="mt-2 text-[10px] text-green-500 font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> +12% this month
                                </div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs text-slate-500 mb-1">Leads Handled</p>
<p className="text-2xl font-bold">842</p>
<div className="mt-2 text-[10px] text-slate-400">Lifetime total</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs text-slate-500 mb-1">Conversion Rate</p>
<p className="text-2xl font-bold">14.8%</p>
<div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full">
<div className="bg-primary w-3/4 h-full rounded-full"></div>
</div>
</div>
<div className="p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
<p className="text-xs text-slate-500 mb-1">Avg. Response</p>
<p className="text-2xl font-bold">1.2h</p>
<div className="mt-2 text-[10px] text-blue-500 font-bold">Top 5% in team</div>
</div>
</div>
{/*  Info Sections  */}
<div className="space-y-6 bg-white dark:bg-slate-800/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
<div>
<h4 className="text-sm font-bold mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">person</span>
                                    About Alex
                                </h4>
<p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Experienced CRM administrator with a focus on enterprise sales workflows and lead lifecycle management. Currently leading the West Coast sales operations team and responsible for optimizing automated nurturing sequences.
                                </p>
</div>
<hr className="border-slate-200 dark:border-slate-800"/>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Information</h5>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">mail</span>
                                            alex.rivera@company.com
                                        </div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">call</span>
                                            +1 (555) 123-4567
                                        </div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">corporate_fare</span>
                                            Enterprise Sales
                                        </div>
</div>
</div>
<div className="space-y-4">
<h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Account Details</h5>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">calendar_today</span>
                                            Joined March 12, 2022
                                        </div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">schedule</span>
                                            Last Active: 2 minutes ago
                                        </div>
<div className="flex items-center gap-3 text-sm">
<span className="material-symbols-outlined text-slate-400 text-base">verified</span>
                                            Identity Verified
                                        </div>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Recent Activity Feed  */}
<div className="space-y-6">
<div className="flex items-center justify-between">
<h4 className="text-sm font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-lg">history</span>
                                Recent Activity
                            </h4>
<button className="text-xs text-primary font-semibold">View All</button>
</div>
<div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-slate-200 dark:before:bg-slate-800">
{/*  Activity Item 1  */}
<div className="relative pl-10">
<div className="absolute left-2 top-0.5 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-background-dark z-10"></div>
<div className="space-y-1">
<p className="text-sm font-medium">Closed Deal: <span className="text-primary font-bold">Acme Corp</span></p>
<p className="text-xs text-slate-500">Alex successfully converted the enterprise lead from nurture to closed-won.</p>
<p className="text-[10px] text-slate-400 pt-1">Today, 2:45 PM</p>
</div>
</div>
{/*  Activity Item 2  */}
<div className="relative pl-10">
<div className="absolute left-2 top-0.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-background-dark z-10"></div>
<div className="space-y-1">
<p className="text-sm font-medium">Lead Status Update</p>
<p className="text-xs text-slate-500">Updated <span className="font-bold">Global Tech Inc.</span> from Discovery to Proposal stage.</p>
<p className="text-[10px] text-slate-400 pt-1">Today, 10:15 AM</p>
</div>
</div>
{/*  Activity Item 3  */}
<div className="relative pl-10">
<div className="absolute left-2 top-0.5 w-4 h-4 rounded-full bg-slate-300 dark:bg-slate-600 border-4 border-white dark:border-background-dark z-10"></div>
<div className="space-y-1">
<p className="text-sm font-medium">Logged Meeting</p>
<p className="text-xs text-slate-500">Completed "Q3 Strategic Review" with the Operations team at Stellar Logistics.</p>
<p className="text-[10px] text-slate-400 pt-1">Yesterday, 4:30 PM</p>
</div>
</div>
{/*  Activity Item 4  */}
<div className="relative pl-10">
<div className="absolute left-2 top-0.5 w-4 h-4 rounded-full bg-orange-400 border-4 border-white dark:border-background-dark z-10"></div>
<div className="space-y-1">
<p className="text-sm font-medium">Security Alert</p>
<p className="text-xs text-slate-500">Exported 500+ records to CSV file. Requires review by regional manager.</p>
<p className="text-[10px] text-slate-400 pt-1">Oct 24, 11:20 AM</p>
</div>
</div>
</div>
{/*  Assigned Deals Card  */}
<div className="mt-8 bg-primary/5 border border-primary/20 p-4 rounded-xl">
<h5 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">Direct Reports</h5>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<img alt="Team Member" data-alt="Avatar of team member Sarah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1dnlxNR648mYwniQRr9ldKgAnGmAlrMdF81msZk3M1uwtWOuMtH2euxejxpGV-zNO87RJCTuWSBZQAm78RG_O-wWcVXtarm6weI_71ctsX-3-zPWBqt4jXEdZHcs4q54PiwBPziEl069uN4hrniKiRnmqtRpcjYv80Pe-tN60tQO-vw-S7SXbZ5A1rME90YZ_axRqydx0Fh72hucJHLhbbWZBsy0ALcQyiMLjoE8DQR4eKX1eCxcjNYKdAet78inhU7PrpOTKWPI"/>
</div>
<div className="flex-1">
<p className="text-xs font-bold">Sarah Jenkins</p>
<p className="text-[10px] text-slate-500">Sales Specialist</p>
</div>
<span className="material-symbols-outlined text-slate-400 text-sm">open_in_new</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
<img alt="Team Member" data-alt="Avatar of team member Mike" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYLJvPf5W7UnVJ_FJPQM8YmZ1eZUPRPTYyzYW_Tm67xGcTDMPzY34BPk2mEpdK-LsHAHmMFj5pJ5FSzUlfclfz0P8WpDPMNz0hmP7_BAcwSD3WKYmQBCWpO9J5xj528C9-G7ys-idX36pj8W6AAZASXL-aIK4QEYrIMhN104bkyrpTQip4lWGi51OPGyqKhRHblAQMn3Wtc7QTEqJ1Q0GAUO5MaKmIHedcD5Bd_TozxCb-YYYJblLQKZKJflbOgeXpt0niF69JqX0"/>
</div>
<div className="flex-1">
<p className="text-xs font-bold">Mike Thompson</p>
<p className="text-[10px] text-slate-500">Account Executive</p>
</div>
<span className="material-symbols-outlined text-slate-400 text-sm">open_in_new</span>
</div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
