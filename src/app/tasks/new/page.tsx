import React from 'react';
import Link from 'next/link';

export default function AddNewTaskForm() {
  return (
    <>
      {/* Screen Content */}
      <div className="max-w-4xl mx-auto">
{/*  Page Header  */}
<div className="mb-8">
<div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-2">
<span>Tasks</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">Add New Task</span>
</div>
<h2 className="text-3xl font-bold tracking-tight">Add New Task</h2>
<p className="text-slate-500 dark:text-slate-400 mt-1">Configure and assign a new task to your team member or yourself.</p>
</div>
{/*  Form Card  */}
<div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<form className="p-6 space-y-6">
{/*  Title  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="task-title">Task Title</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" id="task-title" placeholder="e.g. Follow up on Q4 Proposal" type="text"/>
</div>
{/*  Description  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="task-desc">Description</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600" id="task-desc" placeholder="Briefly describe the task objectives..." rows="4"></textarea>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Priority  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Priority Level</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none text-sm appearance-none cursor-pointer">
<option value="low">Low Priority</option>
<option selected="" value="medium">Medium Priority</option>
<option value="high">High Priority</option>
</select>
</div>
{/*  Due Date  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Due Date</label>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">calendar_today</span>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none text-sm" type="date"/>
</div>
</div>
{/*  Associated Contact  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Associated Contact</label>
<div className="relative">
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-lg">search</span>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none text-sm appearance-none cursor-pointer">
<option value="">Select a contact</option>
<option value="1">Sarah Connor - Skynet Inc.</option>
<option value="2">Arthur Morgan - Van der Linde Co.</option>
<option value="3">Ellie Williams - Firefly Tech</option>
</select>
</div>
</div>
{/*  Task Category  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Task Category</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none text-sm appearance-none cursor-pointer">
<option value="call">Call</option>
<option value="email">Email</option>
<option value="meeting">Meeting</option>
<option value="followup">Follow-up</option>
<option value="preparation">Preparation</option>
</select>
</div>
{/*  Status  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Status</label>
<div className="flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm">
<span className="w-2 h-2 rounded-full bg-slate-400"></span>
                                        To Do (Default)
                                    </div>
</div>
{/*  Assignee  */}
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Assignee</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 focus:ring-2 focus:ring-primary outline-none text-sm appearance-none cursor-pointer">
<option value="me">Assigned to Me</option>
<option value="user1">Jessica Lee</option>
<option value="user2">Michael Chen</option>
<option value="user3">David Miller</option>
</select>
</div>
</div>
{/*  Form Actions  */}
<div className="pt-6 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
<button className="px-6 py-2.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" type="button">
                                    Cancel
                                </button>
<button className="px-8 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all" type="submit">
                                    Create Task
                                </button>
</div>
</form>
</div>
{/*  Side Info Tips  */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
<span className="material-symbols-outlined text-primary mb-2">event_available</span>
<h4 className="text-sm font-bold mb-1">Due Dates</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Tasks without due dates won't appear on the team calendar view.</p>
</div>
<div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
<span className="material-symbols-outlined text-primary mb-2">group_work</span>
<h4 className="text-sm font-bold mb-1">Collaboration</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Assigned members will receive a notification and email alert.</p>
</div>
<div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/10">
<span className="material-symbols-outlined text-primary mb-2">link</span>
<h4 className="text-sm font-bold mb-1">Associations</h4>
<p className="text-xs text-slate-500 dark:text-slate-400">Linking a contact allows you to track task history on their profile.</p>
</div>
</div>
</div>
    </>
  );
}
