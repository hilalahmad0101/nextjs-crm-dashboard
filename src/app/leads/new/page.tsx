"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createLead } from "@/app/actions/leads";
import { LeadStatus, Priority } from "@prisma/client";
import { authClient } from "@/lib/auth-client";

export default function CreateNewLead() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const { data: session } = authClient.useSession();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    status: LeadStatus.NEW,
    priority: Priority.MEDIUM,
    source: "Direct",
    value: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session?.user) return alert("You must be logged in to create a lead");

    startTransition(async () => {
      const result = await createLead({
        ...formData,
        value: Number(formData.value),
        userId: session.user.id,
      });

      if (result.success) {
        router.push("/leads");
      } else {
        alert(result.error);
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
          <Link className="hover:text-primary transition-colors" href="/leads">
            Leads
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            Create New Lead
          </span>
        </nav>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
            Create New Lead
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">
            Initialize a new prospect into the sales funnel for tracking and
            nurturing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Lead Identity */}
          <section className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                <span className="material-symbols-outlined text-2xl">
                  person_search
                </span>
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Lead Identity
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  Basic contact information and prospect details
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Prospect Name *
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-bold text-sm text-slate-700 dark:text-slate-100"
                  placeholder="e.g. Michael Smith"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Company Name
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-bold text-sm text-slate-700 dark:text-slate-100"
                  placeholder="e.g. Acme Innovations"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-bold text-sm text-slate-700 dark:text-slate-100"
                  placeholder="michael@acme.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-bold text-sm text-slate-700 dark:text-slate-100"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Pipeline Settings */}
          <section className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
                <span className="material-symbols-outlined text-2xl">
                  timeline
                </span>
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Pipeline & Value
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  Sales stage and estimated deal value
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Initial Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none transition-all font-bold text-sm uppercase tracking-wide"
                >
                  {Object.keys(LeadStatus).map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Priority Level
                </label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 outline-none transition-all font-bold text-sm uppercase tracking-wide"
                >
                  {Object.keys(Priority).map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Estimated Value ($)
                </label>
                <input
                  name="value"
                  value={formData.value}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-black text-sm text-slate-900 dark:text-white"
                  placeholder="0.00"
                  type="number"
                />
              </div>
              <div className="md:col-span-3 space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Lead Source
                </label>
                <input
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-bold text-sm text-slate-700 dark:text-slate-100"
                  placeholder="e.g. LinkedIn, Referral, Web Inquiry..."
                  type="text"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6">
            <Link
              href="/leads"
              className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-black text-slate-400"
            >
              Discard
            </Link>
            <button
              className="px-12 py-3 rounded-xl bg-primary text-white text-[10px] font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Creating..." : "Save Lead"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
