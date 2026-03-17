import React from "react";
import Link from "next/link";

export default function SalesPipeline() {
  return (
    <>
      {/* Screen Content */}
      {/*  Top Header  */}

      {/*  Content Area  */}
      <div className="p-8 space-y-8">
        {/*  Summary Stats & Header  */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
              Strategic Pipeline Funnel
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              Analyze conversion rates and deal flow across quarterly stages
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-1">
              <button className="px-4 py-1.5 text-xs font-semibold rounded-md bg-primary text-white shadow-sm">
                Monthly
              </button>
              <button className="px-4 py-1.5 text-xs font-semibold rounded-md text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                Quarterly
              </button>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              Export Report
            </button>
          </div>
        </div>
        {/*  Pipeline Visualizer  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/*  Main Funnel Graphic  */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Conversion Funnel
                </p>
                <h3 className="text-2xl font-bold">$4.2M Total Value</h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded">
                  +12% vs last month
                </span>
              </div>
            </div>
            {/*  CSS Funnel Representation  */}
            <div className="flex h-40 gap-1 overflow-hidden rounded-lg">
              <div className="flex-1 bg-primary/20 dark:bg-primary/10 flex flex-col justify-end p-4 border-r border-slate-200 dark:border-slate-800/50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Discovery
                </div>
                <div className="h-3/4 bg-primary rounded-t-sm w-full relative group">
                  <div className="absolute -top-6 left-0 text-xs font-bold">
                    $1.8M
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-primary/20 dark:bg-primary/10 flex flex-col justify-end p-4 border-r border-slate-200 dark:border-slate-800/50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Qualified
                </div>
                <div className="h-2/3 bg-primary/80 rounded-t-sm w-full relative">
                  <div className="absolute -top-6 left-0 text-xs font-bold">
                    $1.2M
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-primary/20 dark:bg-primary/10 flex flex-col justify-end p-4 border-r border-slate-200 dark:border-slate-800/50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Proposal
                </div>
                <div className="h-1/2 bg-primary/60 rounded-t-sm w-full relative">
                  <div className="absolute -top-6 left-0 text-xs font-bold">
                    $840K
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-primary/20 dark:bg-primary/10 flex flex-col justify-end p-4 border-r border-slate-200 dark:border-slate-800/50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Negotiation
                </div>
                <div className="h-1/3 bg-primary/40 rounded-t-sm w-full relative">
                  <div className="absolute -top-6 left-0 text-xs font-bold">
                    $420K
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-primary/20 dark:bg-primary/10 flex flex-col justify-end p-4">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">
                  Closing
                </div>
                <div className="h-1/5 bg-primary/20 rounded-t-sm w-full relative">
                  <div className="absolute -top-6 left-0 text-xs font-bold">
                    $140K
                  </div>
                </div>
              </div>
            </div>
            {/*  Conversion Labels  */}
            <div className="flex mt-2 px-1">
              <div className="flex-1 text-center py-2 text-[10px] font-bold text-slate-400">
                68% Drop
              </div>
              <div className="flex-1 text-center py-2 text-[10px] font-bold text-slate-400">
                45% Drop
              </div>
              <div className="flex-1 text-center py-2 text-[10px] font-bold text-slate-400">
                32% Drop
              </div>
              <div className="flex-1 text-center py-2 text-[10px] font-bold text-slate-400">
                18% Drop
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
          {/*  Secondary Stats  */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase">
                Avg. Velocity
              </p>
              <div>
                <h4 className="text-2xl font-black">14 Days</h4>
                <p className="text-xs text-rose-500 font-bold flex items-center mt-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_down
                  </span>
                  -2% from prev month
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/50 p-5 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <p className="text-xs font-bold text-slate-500 uppercase">
                Win Rate
              </p>
              <div>
                <h4 className="text-2xl font-black">64%</h4>
                <p className="text-xs text-emerald-500 font-bold flex items-center mt-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  +5.2% Overall
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  Pipeline Progress Board  */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Deal Progression Matrix</h3>
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                <span className="material-symbols-outlined">view_kanban</span>
              </button>
              <button className="p-2 text-primary bg-primary/10 rounded">
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Deal &amp; Client
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Current Stage
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Stagnancy
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Health
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {/*  Deal 1  */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                        TS
                      </div>
                      <div>
                        <p className="text-sm font-bold">
                          TechSolutions Enterprise
                        </p>
                        <p className="text-xs text-slate-500">
                          Cloud Migration Project
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      Negotiation
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] mb-1 font-bold">
                        <span>80%</span>
                        <span className="text-slate-400">Stage 4 of 5</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold">$245,000</p>
                    <p className="text-[10px] text-slate-400">
                      Expected Nov 20
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">2 Days</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Stable
                      </span>
                    </div>
                  </td>
                </tr>
                {/*  Deal 2  */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                        GM
                      </div>
                      <div>
                        <p className="text-sm font-bold">Global Media Group</p>
                        <p className="text-xs text-slate-500">
                          Ad-Tech Integration
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                      Proposal
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] mb-1 font-bold">
                        <span>60%</span>
                        <span className="text-slate-400">Stage 3 of 5</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold">$112,000</p>
                    <p className="text-[10px] text-slate-400">
                      Expected Dec 05
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-rose-500 font-bold">14 Days</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        At Risk
                      </span>
                    </div>
                  </td>
                </tr>
                {/*  Deal 3  */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                        AP
                      </div>
                      <div>
                        <p className="text-sm font-bold">
                          Apex Pharmaceuticals
                        </p>
                        <p className="text-xs text-slate-500">
                          CRM Implementation
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      Discovery
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] mb-1 font-bold">
                        <span>20%</span>
                        <span className="text-slate-400">Stage 1 of 5</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold">$85,000</p>
                    <p className="text-[10px] text-slate-400">
                      Expected Jan 15
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">4 Days</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        Early
                      </span>
                    </div>
                  </td>
                </tr>
                {/*  Deal 4  */}
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold">
                        ZL
                      </div>
                      <div>
                        <p className="text-sm font-bold">Zenith Logistics</p>
                        <p className="text-xs text-slate-500">
                          Fleet Management System
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      Closing
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="w-32">
                      <div className="flex justify-between text-[10px] mb-1 font-bold">
                        <span>95%</span>
                        <span className="text-slate-400">Stage 5 of 5</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: "95%" }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold">$42,000</p>
                    <p className="text-[10px] text-slate-400">
                      Expected Oct 31
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm">1 Day</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        High Confidence
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*  Funnel Insights Cards  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-primary/5 border border-primary/20 flex gap-4">
            <div className="bg-primary/20 p-3 rounded-lg h-fit text-primary">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Leakage Point Detected</h4>
              <p className="text-xs text-slate-500 mt-1">
                45% of deals are stalling at 'Proposal' stage for more than 14
                days. Consider revising proposal templates.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex gap-4">
            <div className="bg-emerald-500/20 p-3 rounded-lg h-fit text-emerald-500">
              <span className="material-symbols-outlined">auto_graph</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Velocity Improving</h4>
              <p className="text-xs text-slate-500 mt-1">
                Average time in 'Discovery' has decreased by 3 days since last
                quarter. Sales training is showing ROI.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
            <div className="bg-amber-500/20 p-3 rounded-lg h-fit text-amber-500">
              <span className="material-symbols-outlined">priority_high</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">Value Concentration</h4>
              <p className="text-xs text-slate-500 mt-1">
                60% of total pipeline value is held in top 3 accounts. High
                dependency risk for Q4 targets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
