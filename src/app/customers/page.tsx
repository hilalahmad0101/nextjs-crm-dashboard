import React from 'react';
import Link from 'next/link';

export default function CustomerDirectory() {
  return (
    <>
      {/* Screen Content */}
      
<div className="flex-1 overflow-y-auto p-6 space-y-6">
<section>
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-bold text-slate-900 dark:text-white">Customer Directory</h2>
<p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage your relationship with 1,284 active clients.</p>
</div>
<button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]">add</span>
                            Add Customer
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
<div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>stars</span>
</div>
<div>
<p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Top LTV</p>
<h3 className="text-lg font-bold dark:text-white">$1.2M Total</h3>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
<div className="size-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>group_add</span>
</div>
<div>
<p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">New This Month</p>
<h3 className="text-lg font-bold dark:text-white">+48 Customers</h3>
</div>
</div>
<div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center gap-4">
<div className="size-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: '\'FILL\' 1' }}>trending_up</span>
</div>
<div>
<p className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">Avg. Deal Size</p>
<h3 className="text-lg font-bold dark:text-white">$24,500</h3>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
<h3 className="font-bold text-slate-900 dark:text-white">Active Customers</h3>
<div className="flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
<span className="material-symbols-outlined text-[20px]">filter_list</span>
</button>
<button className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs font-semibold uppercase tracking-wider">
<tr>
<th className="px-6 py-3">Customer</th>
<th className="px-6 py-3">Company</th>
<th className="px-6 py-3 text-right">Lifetime Value</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200 dark:divide-slate-700">
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Michael Chen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD22Sx4uFvDYr0BHNDdNCf12mDCoewjZPo1dsa33Pwr-JDAJFLpTIJnD2G4uvtqURqKeM9m0imL2P_fspDvKJ3UoHpsW64MfsTv1msM3GWjT-YwTJW49mJ5LsLP2SfA9AAHfQLZv9K05nzaYx0A60wbJiTPD71q7QJCinDVOP1pCpFzliv4MdIOgESHy9OeFRL9YBWUmdQOVLzQFZVHL381g12actt4f-EJFNiC6Ywa7jckDcoxuzmZy972pCyPrMA6ASP-0PQzVYA"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Michael Chen</span>
<span className="text-xs text-slate-500">m.chen@innovate.com</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-slate-600 dark:text-slate-400">Innovate Ltd</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-sm font-bold text-slate-900 dark:text-white">$31,500</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400">
                                                        Active
                                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Sarah Williams" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYroDs3utPmNL6Kb-V9MeyYVr1XwWu2EefyBVDoq5RSBMjzw8-5Ml0WGVMP-Nz9RzNF_ABJMYiE9xEJQT2P_SJMxSFU_D8W_BeurlQDjbrWQjvKZNrzqs3S5BUZJUQIKkXUy8eg_yU6Ry0DEAt2b087rM2yPbyHlcD5Hq6If5o2fFZJWR3N0xu2iV_kOpnOEIG1k2k3BhrlzHxsSHpKvTh4tzdNmXvHUiBpejwVJoCibniG3keB2qYEVwj_e_Ni6xhQ3oNHnf2JNQ"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Williams</span>
<span className="text-xs text-slate-500">sarah.w@global.co</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-slate-600 dark:text-slate-400">Global Solutions</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-sm font-bold text-slate-900 dark:text-white">$38,200</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400">
                                                        Active
                                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Alex Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqEuEkEpYEJIyte-DktEVTs5S7ETviIPqRry5V1Mrc7SJk7R8fq3RZw49_LoM9MptHE6WXQiZ7wrttWfXORCetmCniIlmLvql6hXx4mLWhC2NqBBdyeVcHVLdWj0lcs4AuHxR31Y3i17KpKK4zmZr_4PelZPPXNJ7ayLr2N3w6q_F6bSQuUbc4OEJSCYfx5_w85eS3kFmQpY7ZUy66z7upm7WZ5v52YiSqYhA0_RXKgCOuewxBVev0ltdhpxgwytZChU8oP_1oDfA"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Alex Johnson</span>
<span className="text-xs text-slate-500">alex@techcorp.io</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-slate-600 dark:text-slate-400">TechCorp Inc.</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-sm font-bold text-slate-900 dark:text-white">$45,000</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400">
                                                        Priority
                                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
<tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Portrait of Emily Davis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7j040mSc_9TheO5mb_OWer7jZp4JNh5s-DJ5KAP_8m0Q9zAQJsWnzXe7M15HkABbCziOFqA41L50uosGOXqOgRz527C6bNE-AjKFPYj13fg5CMZDjwzXV_3SAGtIWXU24vvXSJ1SjJGbRrpmnpuBjwfDytcbwi49YN-8hQ6n0OFI_hvQlw73dFoHQUZoE6gbXvH2cx41Bzh0WTfvfWO9N7GUFMVYsBkq-yzmXgUqZBxo4apVJddtCrfDt4armI6l3itVyK3tzIf4"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900 dark:text-white">Emily Davis</span>
<span className="text-xs text-slate-500">emily.d@nexustech.com</span>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="text-sm text-slate-600 dark:text-slate-400">Nexus Tech</span>
</td>
<td className="px-6 py-4 text-right">
<span className="text-sm font-bold text-slate-900 dark:text-white">$12,400</span>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400">
                                                        Risk
                                                    </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-slate-400 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
<span className="text-xs text-slate-500">Showing 4 of 1,284 customers</span>
<div className="flex gap-2">
<button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Previous</button>
<button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Next</button>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h3 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center justify-between">
                                    Top Profile
                                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded uppercase tracking-widest font-black">VIP</span>
</h3>
<div className="flex flex-col items-center text-center">
<div className="size-24 rounded-full p-1 border-2 border-primary border-dashed mb-4">
<img className="w-full h-full object-cover rounded-full" data-alt="Close-up of Alex Johnson" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEun20Es4Grr12a193_PMe5RbxS7PZUDS2dp77-Muidq32l9mYvzknsjC-m1gfxhUYeTphoLLFpAOQU5ZfEf6O8H4HLsD5j3f2z9Wv_mxcl_lqfHBoLBz12--TlmgCJ-LpAT4ccWewkdOyN9is5VAKMsb8uiWG0lT0Vquil9usqeV3qotAGac6ZmvlsgSpV8Li-kh-N5D7U4zQBt_T9OMIb8256bC21SArij9W6GdxnmnwAKhNgmoAsgzotBhiPVMsyefCcVY1qRc"/>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Alex Johnson</h4>
<p className="text-sm text-slate-500">CEO, TechCorp Inc.</p>
<div className="mt-6 grid grid-cols-2 w-full gap-4">
<div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
<p className="text-[10px] uppercase font-bold text-slate-400">Lifetime Value</p>
<p className="text-base font-bold text-slate-900 dark:text-white">$45,000</p>
</div>
<div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg">
<p className="text-[10px] uppercase font-bold text-slate-400">Avg. Monthly</p>
<p className="text-base font-bold text-slate-900 dark:text-white">$3,850</p>
</div>
</div>
<button className="w-full mt-6 py-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                                        View Full Profile
                                    </button>
</div>
</div>
<div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
<h3 className="font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
<div className="space-y-6">
<div className="flex gap-4 relative">
<div className="absolute left-[13px] top-6 bottom-[-24px] w-0.5 bg-slate-100 dark:bg-slate-700"></div>
<div className="size-7 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 flex-shrink-0 z-10">
<span className="material-symbols-outlined text-[16px]">call</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Meeting with TechCorp</p>
<p className="text-xs text-slate-500 mt-0.5">Follow up on Q3 subscription renewal</p>
<span className="text-[10px] text-slate-400 mt-2 block">2 hours ago</span>
</div>
</div>
<div className="flex gap-4 relative">
<div className="absolute left-[13px] top-6 bottom-[-24px] w-0.5 bg-slate-100 dark:bg-slate-700"></div>
<div className="size-7 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 flex-shrink-0 z-10">
<span className="material-symbols-outlined text-[16px]">payments</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Payment Received</p>
<p className="text-xs text-slate-500 mt-0.5">Innovate Ltd paid $5,400 invoice</p>
<span className="text-[10px] text-slate-400 mt-2 block">5 hours ago</span>
</div>
</div>
<div className="flex gap-4">
<div className="size-7 rounded-full bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 flex-shrink-0 z-10">
<span className="material-symbols-outlined text-[16px]">mail</span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Email Sent</p>
<p className="text-xs text-slate-500 mt-0.5">Onboarding guide sent to Global Solutions</p>
<span className="text-[10px] text-slate-400 mt-2 block">Yesterday</span>
</div>
</div>
</div>
<button className="w-full mt-8 text-xs font-bold text-primary hover:underline">View All Activities</button>
</div>
</div>
</div>
</section>
</div>
    </>
  );
}
