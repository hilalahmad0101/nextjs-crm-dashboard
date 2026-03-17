import React from 'react';
import Link from 'next/link';

export default function PlatformSettings() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-5xl mx-auto space-y-8">
<div>
<h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Account Settings</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Manage your professional profile and CRM workspace configurations.</p>
</div>
{/*  User Profile Settings  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person</span>
                                User Profile
                            </h3>
<button className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors">Save Changes</button>
</div>
<div className="p-6 space-y-8">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="flex flex-col items-center gap-4">
<div className="relative group">
<img alt="Profile large" className="h-32 w-32 rounded-full border-4 border-slate-100 dark:border-slate-800 object-cover" data-alt="Large user profile avatar for editing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwimyWUuiua-vdfZtWawHvc3ZFdgkYLpeHiM-_ZjGYF_9vwaLG6vZGPJ1GP_2CBHmaHHcGfOSwdqJbyaLINHBvW8QR-nI0oYrqd8C5gdTLNPd81b_UT1AsnwMEqhJ-cCOE_a5n0ZL3qosK2iaWbGxrr4fvyMoE8x9RY-4f3MmlpqFaNE0ge6qL2QpXl5bobDHXoUEazAqyP4Nu7ZLStpQwGsn6BpaE3DPLfu8MQOuTOKxtckyhLIovO01h_TkSNzozZ1k3byh4Kh4"/>
<button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full border-4 border-white dark:border-slate-900 shadow-lg">
<span className="material-symbols-outlined text-sm leading-none">photo_camera</span>
</button>
</div>
<p className="text-xs text-slate-400">JPG, GIF or PNG. 1MB Max.</p>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white" type="text" value="Alex Johnson"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white" type="email" value="alex.johnson@example.com"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
<div className="relative">
<input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white" type="password" value="********"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary">
<span className="material-symbols-outlined text-sm">visibility</span>
</button>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Job Title</label>
<input className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary dark:text-white" type="text" value="Senior Sales Manager"/>
</div>
</div>
</div>
</div>
</section>
{/*  CRM Preferences  */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">notifications_active</span>
                                    Notifications
                                </h3>
</div>
<div className="p-6 space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Email Alerts</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Receive lead updates via email</p>
</div>
<div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors focus:outline-none">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Browser Notifications</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Real-time alerts in your browser</p>
</div>
<div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-slate-200 dark:bg-slate-700 transition-colors focus:outline-none">
<span className="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-4">
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Weekly Reports</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Summary of sales pipeline</p>
</div>
<div className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors focus:outline-none">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</div>
</div>
</section>
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">key</span>
                                    API &amp; Team
                                </h3>
</div>
<div className="p-6 space-y-6">
<div className="space-y-2">
<label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Product API Key</label>
<div className="flex gap-2">
<input className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm dark:text-slate-300 font-mono" readonly="" type="text" value="pk_live_51M8jF9LqG..."/>
<button className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-lg hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">content_copy</span>
</button>
</div>
</div>
<div className="space-y-3">
<p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Active Team Members</p>
<div className="flex -space-x-3 overflow-hidden">
<img alt="Team 1" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" data-alt="Team member avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI1gtxuAht8y-jSoZ21oU6WRp5lAx76S-5AUXyhMuAt8VjOu7ZDjQu1rrS_2x9wjDyBUU3ipCP1eawFzMw_cQt6xceZONKj-QBQdsv-ZlpoF8dz_RPBEaNYLh38tJv1VOLjWPhPVOqvtNhtqUNJ-PWk5VgSCQUQl3JnarbEm0YsYWvOA7QVKJtvbQg_CAM5p5x1yNtmdKqRVPxkoJ9kPZixNqNysDvLQpRF7fq1mifzj9CtYcc699B717cC012zHRT_yXmnjGv4qk"/>
<img alt="Team 2" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" data-alt="Team member avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6w6G00yPqcOkDl0RPIY09a_xSyKn7WrfTcfypDrbdwnT9TjH9ZujbyRh-4ZdeKO34H9OjHQpue3uqezJYprWT4lZqEVgxhMp8c9ueqKFjIzVWPNyGuFgYk6auIwf7q9s8COjjLIW8RludydGtctTB5jUIv6-GjDo9VLT2MsKZ0yXCXS5AENv0RjPPdKpoYjE2Qt47dhXdk_vVlRQhaArtWhaWe6SqEDnE_RHsSAKnG0h2OhldKWjzArCNgrnywYq5xQLIV9_jS98"/>
<img alt="Team 3" className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-slate-900" data-alt="Team member avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT6ugxArbeVM4adHkC8nIGZOGLmCuwr2QqkbJ-HP13P2k1a-i4PCpG4HC7I693eRXfh0_uF3rVsBKpMe2Yv9yVgfWrHzPTT8SBbd8_ZBTX0WwAYUGc71UmPTZqWUyJ8SjLDP021cLA9jdDJFhIw31OYB_fmQgaqZ8ltl-d8bjv0K8v8mkZyxlDLISb9QGZOyUytShLyi5P28G2kPFchqXRtU6F1naZjYK-WVd-RNOUkn2JHDWfcK76RcfRVJIiLtirJb_v-FckIsQ"/>
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] font-bold text-slate-500 ring-2 ring-white dark:ring-slate-900">+12</div>
</div>
<button className="text-sm text-primary font-semibold hover:underline">Manage Team Permissions</button>
</div>
</div>
</section>
</div>
{/*  Subscription/Billing Status  */}
<section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span className="material-symbols-outlined text-primary">credit_card</span>
                                Billing &amp; Subscription
                            </h3>
<span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-full uppercase tracking-wider">Active</span>
</div>
<div className="p-6 flex flex-col md:flex-row gap-8">
<div className="md:w-1/3 bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-100 dark:border-slate-700">
<p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Current Plan</p>
<h4 className="text-2xl font-black text-primary mt-1">Enterprise</h4>
<p className="text-sm text-slate-900 dark:text-white font-bold mt-4">$499 <span className="text-slate-400 font-normal">/ month</span></p>
<button className="w-full mt-6 px-4 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">
                                    Change Plan
                                </button>
</div>
<div className="flex-1 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Payment Method</p>
<div className="flex items-center gap-3 mt-2">
<div className="h-8 w-12 bg-slate-100 dark:bg-slate-800 rounded flex items-center justify-center">
<span className="material-symbols-outlined text-slate-400">credit_card</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Visa ending in 4242</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Expires 12/26</p>
</div>
</div>
</div>
<div>
<p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Next Invoice</p>
<p className="text-sm font-semibold text-slate-900 dark:text-white mt-2">August 15, 2024</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Amount: $499.00</p>
</div>
</div>
<div className="pt-6 border-t border-slate-100 dark:border-slate-800">
<button className="flex items-center gap-2 text-sm text-primary font-bold hover:underline">
<span className="material-symbols-outlined text-lg">download</span>
                                        Download Last Invoice
                                    </button>
</div>
</div>
</div>
</section>
</div>
    </>
  );
}
