import React from 'react';
import Link from 'next/link';

export default function Calendar() {
  return (
    <>
      {/* Screen Content */}
      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden h-full flex flex-col">
<div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-700">
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Sun</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Mon</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Tue</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Wed</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Thu</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Fri</div>
<div className="p-3 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Sat</div>
</div>
<div className="flex-1 grid grid-cols-7 grid-rows-5 overflow-auto">
{/*  Row 1  */}
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">24</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">25</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">26</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">27</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">28</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">29</span>
</div>
<div className="p-2 border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-slate-50/50 dark:bg-slate-900/10">
<span className="text-sm text-slate-400">30</span>
</div>
{/*  Row 2  */}
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">1</span>
<div className="mt-1 bg-blue-500/10 border-l-2 border-blue-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-blue-500 truncate">Marketing Sync</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">2</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">3</span>
<div className="mt-1 bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-emerald-500 truncate">Client Onboarding</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">4</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px] bg-primary/5">
<span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white text-xs font-bold">5</span>
<div className="mt-1 bg-orange-500/10 border-l-2 border-orange-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-orange-500 truncate">Q3 Report Deadline</p>
</div>
<div className="mt-1 bg-blue-500/10 border-l-2 border-blue-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-blue-500 truncate">Lead Demo</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">6</span>
</div>
<div className="p-2 border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">7</span>
</div>
{/*  Row 3  */}
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">8</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">9</span>
<div className="mt-1 bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-emerald-500 truncate">Follow-up Call</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">10</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">11</span>
<div className="mt-1 bg-blue-500/10 border-l-2 border-blue-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-blue-500 truncate">Team Lunch</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">12</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">13</span>
</div>
<div className="p-2 border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">14</span>
</div>
{/*  Row 4  */}
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">15</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">16</span>
<div className="mt-1 bg-blue-500/10 border-l-2 border-blue-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-blue-500 truncate">Strategy Planning</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">17</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">18</span>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">19</span>
<div className="mt-1 bg-emerald-500/10 border-l-2 border-emerald-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-emerald-500 truncate">Sales Call</p>
</div>
</div>
<div className="p-2 border-r border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">20</span>
</div>
<div className="p-2 border-b border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">21</span>
</div>
{/*  Row 5  */}
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">22</span>
</div>
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">23</span>
</div>
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">24</span>
<div className="mt-1 bg-orange-500/10 border-l-2 border-orange-500 p-1 rounded-sm">
<p className="text-[10px] font-bold text-orange-500 truncate">Invoice Due</p>
</div>
</div>
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">25</span>
</div>
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">26</span>
</div>
<div className="p-2 border-r border-slate-200 dark:border-slate-700 min-h-[120px]">
<span className="text-sm font-semibold">27</span>
</div>
<div className="p-2 min-h-[120px]">
<span className="text-sm font-semibold">28</span>
</div>
</div>
</div>
    </>
  );
}
