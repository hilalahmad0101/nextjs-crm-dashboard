import React from 'react';
import Link from 'next/link';

export default function CustomerDetailsView() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-6xl mx-auto space-y-8">
{/*  Customer Profile Header  */}
<div className="flex flex-col @[520px]:flex-row @[520px]:items-center justify-between gap-6">
<div className="flex items-start gap-5">
<div className="size-20 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center overflow-hidden">
<img alt="TechSolutions Logo" className="w-12 h-12 object-contain" data-alt="TechSolutions Enterprise company logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-HSIC_OS9Z_xz4IGzr0SCyDso6tHXWzQvs8WIBfUKv12ZqELzuL2GkOYo9GfutKRhMpsJf_nmNzSiIAb9t89qjLoUYvnnoxZZZl2OZLHr8nNrWGlh3gCScOb7J9-uQO23ZimlAnTiGqiK0Ik2qc8swhljIqByPuCT181lvZrIdy5YTAhuZBpWh-dBa45_8c8a6Quzpe3IGmTzMHyZrGo6ncXPYc9r7IJKfN_B7c9HMFTq-zOQ5XbXaFJ95uTArhdf3SEywLxsm3Y"/>
</div>
<div>
<div className="flex items-center gap-3">
<h2 className="text-2xl font-bold text-slate-900 dark:text-white">TechSolutions Enterprise</h2>
<span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/30">Platinum Account</span>
</div>
<p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2">
<span className="material-symbols-outlined text-sm">location_on</span>
                                    San Francisco, CA • Customer since June 2021
                                </p>
</div>
</div>
<div className="flex flex-wrap gap-3">
<button className="px-4 py-2 bg-slate-200 dark:bg-card-dark text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">Edit Profile</button>
<button className="px-4 py-2 bg-slate-200 dark:bg-card-dark text-slate-700 dark:text-slate-200 text-sm font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">New Ticket</button>
<button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-colors">Create Deal</button>
</div>
</div>
{/*  Key Metrics  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Lifetime Value</p>
<div className="flex items-end justify-between mt-2">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white">$124,500</h3>
<span className="text-emerald-500 text-sm font-medium flex items-center">
<span className="material-symbols-outlined text-xs">trending_up</span> 12%
                                </span>
</div>
</div>
<div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Subscriptions</p>
<div className="flex items-end justify-between mt-2">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white">3</h3>
<span className="text-slate-400 text-sm font-medium">0% change</span>
</div>
</div>
<div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Health Score</p>
<div className="flex items-end justify-between mt-2">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white">92/100</h3>
<span className="text-emerald-500 text-sm font-medium flex items-center">
<span className="material-symbols-outlined text-xs">trending_up</span> 5%
                                </span>
</div>
</div>
<div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-slate-200 dark:border-border-dark">
<p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Last Contact</p>
<div className="flex items-end justify-between mt-2">
<h3 className="text-2xl font-bold text-slate-900 dark:text-white">2 days ago</h3>
<span className="text-rose-500 text-sm font-medium flex items-center">
<span className="material-symbols-outlined text-xs">trending_down</span> 1%
                                </span>
</div>
</div>
</div>
{/*  Tabbed Navigation  */}
<div className="border-b border-slate-200 dark:border-border-dark">
<nav className="flex gap-8 overflow-x-auto pb-px">
<a className="pb-4 text-sm font-bold text-primary border-b-2 border-primary whitespace-nowrap" href="/">Overview</a>
<a className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition-colors" href="#">Activity</a>
<a className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition-colors" href="#">Subscriptions</a>
<a className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition-colors" href="/support-tickets">Support Tickets</a>
<a className="pb-4 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 whitespace-nowrap transition-colors" href="#">Documents</a>
</nav>
</div>
{/*  Overview Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Left Column: Info & Contacts  */}
<div className="lg:col-span-2 space-y-8">
{/*  Company Information  */}
<div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark flex justify-between items-center">
<h4 className="font-bold text-slate-900 dark:text-white">Company Information</h4>
<button className="text-primary text-sm font-medium hover:underline">Edit</button>
</div>
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industry</p>
<p className="text-sm text-slate-900 dark:text-slate-100 mt-1">Enterprise Software</p>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Company Size</p>
<p className="text-sm text-slate-900 dark:text-slate-100 mt-1">500 - 1,000 employees</p>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Website</p>
<a className="text-sm text-primary mt-1 hover:underline" href="#">www.techsolutions.ent</a>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</p>
<p className="text-sm text-slate-900 dark:text-slate-100 mt-1">123 Innovation Dr, San Francisco</p>
</div>
</div>
</div>
{/*  Primary Contacts  */}
<div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark flex justify-between items-center">
<h4 className="font-bold text-slate-900 dark:text-white">Primary Contacts</h4>
<button className="text-primary text-sm font-medium hover:underline">Add Contact</button>
</div>
<div className="divide-y divide-slate-100 dark:divide-border-dark">
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Contact avatar Sarah Miller" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCIqqRAqy8Fr0slgAg9IKlvOpG8iDw3IgIQH7WOMuDYZkNCj6Cz1AaSOCE4sYcxhNc3E5_lDFVNHmLnPTgaUsZhfWPkbhR-gpoKCAh3sedkbenYHU2xxpd8ZQNorwiY1CxihiV-5NfhXTKzQLMslcg-RfzEzdBscYHMVceifkDlKcU_uqsKSSS3V-BqTQVeVQRqe50Yn14bxEMps1whK90GkceSAsZdJqZsMHQfXKehLxa9tYzBmJTLJLCd12KmYjy7Hpu_LONbfN4\')' }}></div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Miller</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Chief Technology Officer</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">mail</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">phone</span>
</button>
</div>
</div>
<div className="p-6 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" data-alt="Contact avatar David Chen" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCRM9R3hTRByPpcrpcn4z5ZpO_YQPyx6Kape3mWk6vjBhGPU-R3Hwq17Le35pAkQfkCLrKRo_7_pwoy5dkMVmH_hK-Ba1sLHV1FdxYSrHZikwdWxvaeiT_QzIXmaiXTtpqeuL8ocWg2Pvpx4fVXzJfwdSh4K4aqxoPK1toIpEmN63Yf0LnZRpM39qrqA3zM9PcyXwqs85lWiDAwg9Kt1lk-B2_kg14VM7biphxl1pvoqe7Cv8vgjyIWbf4XlWT7PYWeJu2eM3fzmQs\')' }}></div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">David Chen</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Procurement Manager</p>
</div>
</div>
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">mail</span>
</button>
<button className="p-2 text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-xl">phone</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Right Column: Timeline  */}
<div className="lg:col-span-1">
<div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden h-full">
<div className="px-6 py-4 border-b border-slate-200 dark:border-border-dark">
<h4 className="font-bold text-slate-900 dark:text-white">Recent Activity</h4>
</div>
<div className="p-6 relative">
<div className="absolute left-9 top-6 bottom-6 w-px bg-slate-200 dark:bg-border-dark"></div>
<div className="space-y-8">
<div className="relative flex gap-4">
<div className="z-10 size-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-card-dark">
<span className="material-symbols-outlined text-white text-[14px]">call</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Call with Sarah Miller</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Discussed Q3 expansion strategy</p>
<p className="text-[10px] text-slate-400 uppercase mt-1">2 hours ago</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="z-10 size-6 rounded-full bg-slate-500 flex items-center justify-center ring-4 ring-white dark:ring-card-dark">
<span className="material-symbols-outlined text-white text-[14px]">mail</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Email Sent</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Contract renewal proposal attached</p>
<p className="text-[10px] text-slate-400 uppercase mt-1">Yesterday</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="z-10 size-6 rounded-full bg-amber-500 flex items-center justify-center ring-4 ring-white dark:ring-card-dark">
<span className="material-symbols-outlined text-white text-[14px]">confirmation_number</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">Ticket Resolved</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">API Integration issue fix confirmed</p>
<p className="text-[10px] text-slate-400 uppercase mt-1">3 days ago</p>
</div>
</div>
<div className="relative flex gap-4">
<div className="z-10 size-6 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-white dark:ring-card-dark">
<span className="material-symbols-outlined text-white text-[14px]">shopping_cart</span>
</div>
<div>
<p className="text-sm font-bold text-slate-900 dark:text-white">New Subscription Added</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Analytics Pro (100 Seats)</p>
<p className="text-[10px] text-slate-400 uppercase mt-1">1 week ago</p>
</div>
</div>
</div>
<button className="w-full mt-8 py-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors text-center bg-slate-50 dark:bg-background-dark/50 rounded-lg">View All Activity</button>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
