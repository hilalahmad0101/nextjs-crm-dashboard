import React from 'react';
import Link from 'next/link';

export default function SalesPipelineDeals() {
  return (
    <>
      {/* Screen Content */}
      {/*  Summary Metrics  */}
<div className="flex flex-wrap gap-4 mb-8">
<div className="flex-1 min-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Pipeline Value</span>
<span className="material-symbols-outlined text-primary">payments</span>
</div>
<p className="text-2xl font-bold">$1,452,000</p>
<p className="text-xs text-green-500 font-medium flex items-center mt-1">
<span className="material-symbols-outlined text-sm">trending_up</span> +12.5% this month
                        </p>
</div>
<div className="flex-1 min-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Active Deals</span>
<span className="material-symbols-outlined text-primary">analytics</span>
</div>
<p className="text-2xl font-bold">48</p>
<p className="text-xs text-green-500 font-medium flex items-center mt-1">
<span className="material-symbols-outlined text-sm">add</span> 4 new today
                        </p>
</div>
<div className="flex-1 min-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avg. Deal Size</span>
<span className="material-symbols-outlined text-primary">leaderboard</span>
</div>
<p className="text-2xl font-bold">$30,250</p>
<p className="text-xs text-slate-500 font-medium flex items-center mt-1">
<span className="material-symbols-outlined text-sm">remove</span> Same as last week
                        </p>
</div>
<div className="flex-1 min-w-[200px] p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Win Rate</span>
<span className="material-symbols-outlined text-primary">verified</span>
</div>
<p className="text-2xl font-bold">64.2%</p>
<div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mt-2">
<div className="bg-primary h-full rounded-full w-[64%]"></div>
</div>
</div>
</div>
{/*  Kanban Board Section  */}
<div className="flex gap-4 h-full pb-20 items-start overflow-x-auto">
{/*  Discovery Column  */}
<div className="kanban-column flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-bold">Discovery</span>
<span className="bg-slate-200 dark:bg-slate-800 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400">12</span>
</div>
<button className="material-symbols-outlined text-slate-400 hover:text-primary">add</button>
</div>
<div className="space-y-3 overflow-y-auto pr-1">
{/*  Card  */}
<div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-grab active:cursor-grabbing">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">Cloud Infrastructure</h4>
<span className="text-xs font-semibold text-primary">$45,000</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">TechSolutions Inc.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCOOUJNhXwu9loW814byGgr2NHt-styIoeylbn4B7x5q802srT_e6xpvtqenBQdOpkUxt8F1kVKCaK3FoHCPzGHdz5FP6nwW8HUSV2Pvv3ow6-zrPXvpyx9ucDylQBqiV1cAfNkHyi2z2mEMAp3WQ8K34aftdy0s_H1kc7cWzSRlRokfK4ho1pOfxoSfb1mEpiBNdAQ3FLjYqUOkcrFRD0jK3QB4T8ZvPZPmJUH11KN8UcAMIi8Mmhs7JipczEABq4u_mMeUysP6kc\')' }}></div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
<span className="material-symbols-outlined text-sm">calendar_today</span> Oct 24, 2023
                                    </div>
</div>
</div>
{/*  Card  */}
<div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-grab">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">ERP Implementation</h4>
<span className="text-xs font-semibold text-primary">$120,000</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Global Logistics Group</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuD-cNDCkHDSzVt6FM5luFQwVoTwNZRnkj5EKCW87hyjOJxU3GjNR_S1u7iaxtl80Hj-q-Fztk0iVGwMnRzXvGLZ59P1vTicQJft_t5gF62IHRHO5NKhc9D09Mm1E3jPBkzMfQsXpXgEM9pGCaDjqGzLmuwzkaUC0F0Zt1_hJ454gsok9kwe8UzMfI3S4TVi2DYMDQSgXjdQdQu3K6Cl_lyBGmMaJ3yPmLmT4ifNwh9VxlpL7k1Vm9t2ocCI4v-ED_ljJfIrFd8xhJI\')' }}></div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
<span className="material-symbols-outlined text-sm text-red-400">warning</span> Nov 02, 2023
                                    </div>
</div>
</div>
</div>
</div>
{/*  Qualified Column  */}
<div className="kanban-column flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-bold">Qualified</span>
<span className="bg-slate-200 dark:bg-slate-800 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400">8</span>
</div>
<button className="material-symbols-outlined text-slate-400 hover:text-primary">add</button>
</div>
<div className="space-y-3 overflow-y-auto pr-1">
<div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-grab">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">Cybersecurity Audit</h4>
<span className="text-xs font-semibold text-primary">$18,500</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">FinTech Partners</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDSbraTrPbJSvHqbXZdmbXLvBS67gdEhBFA0EVqVInpthtxW01qUC61NqhXUbM5zVVAB6O52JoDZDRMh-6bPcVLPiNri3HYZDjLoatgGiitpni4SPCFGuvPwvRy-TZohTgEYFD43D0ZkZ3CxrgwHArOIM9KKhOGqUNGVUTQoP5luPpZza5wF3ZbHV0bS8w-PVNvBkbftZPuoxma3A9qashZ_Jkv6C73ZUEriKyC-0yMn1v9kRlEuxfS03MNTgXYJLbBbEUwntbE_TY\')' }}></div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
<span className="material-symbols-outlined text-sm">calendar_today</span> Oct 30, 2023
                                    </div>
</div>
</div>
</div>
</div>
{/*  Proposal Column  */}
<div className="kanban-column flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-bold">Proposal</span>
<span className="bg-slate-200 dark:bg-slate-800 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400">14</span>
</div>
<button className="material-symbols-outlined text-slate-400 hover:text-primary">add</button>
</div>
<div className="space-y-3 overflow-y-auto pr-1">
<div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-grab">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">API Integration</h4>
<span className="text-xs font-semibold text-primary">$32,000</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Streamline Retail</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuANHazvk98CqBnqrglR7KhWoA8c-DJsZApgqlCf1GjpqTPpaQiOGDFh2pZGCN9eo9-QkWf5FDLT6fr_qS_yiLVQA893rUUmOEWsEbZzz4uBTXnU08eHJ_QS8m_AnRVDfSBp2kJd1qmjB6aDDmJaYny-E6jJ3ODNSInLkikfprOV9S53V5b8yev9pkAGVUwFD7OUyYMsLvBoMOssVwDE-s3DsccJjYnmcnX1h5E20VVUHJZcIoknFPNqRnFqL5wJg49nkvdXrlAr4b8\')' }}></div>
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAJk4eOBxZnvWRsYAA_hoYd06IwjgvzFJgs4dCoRrE1CAhWPEX8l8nFBIYyE9pL808Gg0IyFTlyAI907_ngCEwgy-g_ANA_6A12i-hL5YwC4C1XhMZua8e4OGpveEF2JQFizOqhGrPKcxb8XxU3nRUJdATpPFhochwRHrBL6n-cWtUXrf5UWr43pxwkpYipR0b9hxEXEAEii7xdLZ51l1YS4_j58tsOalsaMvfF1fdqSzNF_FsdtIdzXAXU08upB3LpNV6HnpsFQYI\')' }}></div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
<span className="material-symbols-outlined text-sm">calendar_today</span> Oct 21, 2023
                                    </div>
</div>
</div>
</div>
</div>
{/*  Negotiation Column  */}
<div className="kanban-column flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-bold">Negotiation</span>
<span className="bg-slate-200 dark:bg-slate-800 text-xs px-2 py-0.5 rounded-full text-slate-600 dark:text-slate-400">6</span>
</div>
<button className="material-symbols-outlined text-slate-400 hover:text-primary">add</button>
</div>
<div className="space-y-3 overflow-y-auto pr-1">
<div className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 hover:border-primary transition-all cursor-grab">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">SaaS Expansion</h4>
<span className="text-xs font-semibold text-primary">$210,000</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">BlueHorizon Corp</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300" data-alt="Team member avatar thumbnail" style={{ backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCVKOjMyCn4rbBIrO9s1EOKW7GRLHykAYWhnmAny9MoRQ7ej9OtA6ivAwFuhG0RxXN-zSjinpf97KPRUTdYwreuqlVcpgGYQmEYmwbmuHNBqatoaw4kGN58zi82RpJ-FPT49sflk_P1HBRNzvIEqIMoVecdwvlLxQyuy7WJ5ejpwkPTMeSGEehZoBspzzPXCNYHBjrBxvjNyyfSjUUj4zMRgH-wbGzi2RUZTCxiBuWBjzXlZsLAmaVH0W7usRQFgQt-sKNQEC-dBBc\')' }}></div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-orange-500">
<span className="material-symbols-outlined text-sm">schedule</span> In Review
                                    </div>
</div>
</div>
</div>
</div>
{/*  Closed Won Column  */}
<div className="kanban-column flex flex-col h-full bg-slate-100/50 dark:bg-slate-900/30 rounded-xl p-3 border border-slate-200 dark:border-slate-800">
<div className="flex items-center justify-between mb-4 px-2">
<div className="flex items-center gap-2">
<span className="text-sm font-bold">Closed Won</span>
<span className="bg-green-100 dark:bg-green-900/30 text-green-600 text-xs px-2 py-0.5 rounded-full">24</span>
</div>
</div>
<div className="space-y-3 overflow-y-auto pr-1">
<div className="bg-green-50/50 dark:bg-green-900/10 p-4 rounded-lg shadow-sm border border-green-200 dark:border-green-900/30 hover:border-green-400 transition-all cursor-grab">
<div className="flex justify-between items-start mb-2">
<h4 className="text-sm font-bold">App Development</h4>
<span className="text-xs font-semibold text-green-600">$85,000</span>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Venture Group</p>
<div className="flex items-center justify-between">
<span className="px-2 py-0.5 bg-green-100 dark:bg-green-900 text-[10px] font-bold text-green-700 dark:text-green-300 rounded uppercase">Success</span>
<div className="flex items-center gap-1 text-[10px] font-medium text-slate-500">
<span className="material-symbols-outlined text-sm">task_alt</span> Closed Oct 15
                                    </div>
</div>
</div>
</div>
</div>
</div>
    </>
  );
}
