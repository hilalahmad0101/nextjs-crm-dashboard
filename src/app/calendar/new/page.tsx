import React from "react";
import Link from "next/link";

export default function AddNewEventForm() {
  return (
    <>
      {/* Screen Content */}

      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-sm">
            <a
              className="text-slate-500 hover:text-primary transition-colors"
              href="/calendar"
            >
              Calendar
            </a>
            <span className="material-symbols-outlined text-xs text-slate-400">
              chevron_right
            </span>
            <span className="text-slate-900 dark:text-slate-100 font-medium">
              Add New Event
            </span>
          </nav>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Add New Event
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Event Details
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Event Title
                    </label>
                    <input
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                      placeholder="e.g. Q4 Strategy Sync"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Event Type
                    </label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white">
                      <option>Meeting</option>
                      <option>Call</option>
                      <option>Deadline</option>
                      <option>Task</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Description
                    </label>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white resize-none"
                      placeholder="Describe the purpose of this event..."
                      rows="4"
                    ></textarea>
                  </div>
                </div>
              </section>
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Time &amp; Date
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Start Date &amp; Time
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                          type="datetime-local"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        End Date &amp; Time
                      </label>
                      <div className="relative">
                        <input
                          className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                          type="datetime-local"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400">
                        schedule
                      </span>
                      <div>
                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                          All Day Event
                        </p>
                        <p className="text-xs text-slate-500">
                          Event lasts the entire day
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input className="sr-only peer" type="checkbox" />
                      <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Repeat
                    </label>
                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white">
                      <option>None</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                </div>
              </section>
            </div>
            <div className="space-y-8">
              <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm h-fit">
                <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Participants &amp; Location
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Attendees
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        person_add
                      </span>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                        placeholder="Search team or customers..."
                        type="text"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full border border-primary/20">
                        Sarah Chen
                        <span className="material-symbols-outlined text-[14px] cursor-pointer">
                          close
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full border border-primary/20">
                        Mike Johnson
                        <span className="material-symbols-outlined text-[14px] cursor-pointer">
                          close
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Location
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        location_on
                      </span>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white"
                        placeholder="Room 402 or Meeting Link"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Reminder/Alert
                    </label>
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
                        notifications_active
                      </span>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary outline-none text-slate-900 dark:text-white appearance-none">
                        <option>15 mins before</option>
                        <option>30 mins before</option>
                        <option>1 hour before</option>
                        <option>1 day before</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>
              <div className="flex flex-col gap-3">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-xl">
                    add_circle
                  </span>
                  Create Event
                </button>
                <button className="w-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold py-3 px-6 rounded-lg transition-all">
                  Cancel
                </button>
              </div>
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="text-primary font-bold text-sm mb-2">
                  Syncing Calendar
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  This event will be automatically synced with your connected
                  Google and Outlook calendars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
