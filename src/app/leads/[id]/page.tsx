import React from "react";
import Link from "next/link";
import { getLead } from "@/app/actions/leads";
import { notFound } from "next/navigation";
import { LeadStatus } from "@prisma/client";

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border-blue-200",
  QUALIFIED:
    "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 border-emerald-200",
  PROPOSAL:
    "bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400 border-purple-200",
  NEGOTIATION:
    "bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 border-amber-200",
  CLOSED:
    "bg-slate-100 dark:bg-slate-500/10 text-slate-800 dark:text-slate-400 border-slate-200",
  LOST: "bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400 border-red-200",
};

export default async function LeadDetailsView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lead = await getLead(id);

  if (!lead) {
    notFound();
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
          <Link
            className="hover:text-primary transition-colors font-medium"
            href="/leads"
          >
            Leads Pipeline
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-black uppercase tracking-tight text-xs">
            {lead.name}
          </span>
        </nav>

        {/* Lead Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl font-black shadow-sm">
              {lead.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {lead.name}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${STATUS_COLORS[lead.status]}`}
                >
                  {lead.status}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">
                  business
                </span>
                {lead.company || "Individual Prospect"} • Created{" "}
                {new Date(lead.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-[10px] font-black uppercase tracking-widest rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm">
              Edit Lead
            </button>
            <button className="px-6 py-2.5 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Convert to Customer
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Est. Deal Value
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                ${(lead.value || 0).toLocaleString()}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Priority
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {lead.priority}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Source
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                {lead.source || "N/A"}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Assignee
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                {lead.user.name || "Unassigned"}
              </h3>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Contact Information
                </h4>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Email Address
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {lead.email || "No email"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Phone Number
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {lead.phone || "No phone"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Company
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {lead.company || "Individual"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Last Updated
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 mt-1">
                    {new Date(lead.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                <h5 className="font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                  Conversion Strategy
                </h5>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                This lead is currently in the{" "}
                <span className="text-primary font-black uppercase tracking-widest">
                  {lead.status}
                </span>{" "}
                stage. Based on the priority level of{" "}
                <span className="text-amber-600 font-bold">
                  {lead.priority}
                </span>
                , we recommend following up within 24 hours to maximize
                conversion potential into a paying customer.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Lead Activity
                </h4>
              </div>
              <div className="p-8 relative">
                <div className="absolute left-11 top-8 bottom-8 w-px bg-slate-100 dark:bg-slate-800"></div>
                <div className="space-y-10">
                  <div className="relative flex gap-5">
                    <div className="z-10 size-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-slate-900">
                      <span className="material-symbols-outlined text-white text-[16px]">
                        add_task
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white uppercase">
                        Pipeline entry
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase font-black tracking-widest">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
