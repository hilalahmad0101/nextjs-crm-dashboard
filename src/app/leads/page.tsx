"use client";

import React, { useState, useEffect, useCallback, useTransition } from "react";
import Link from "next/link";
import {
  getLeads,
  deleteLead,
  getLeadStats,
  convertLeadToCustomer,
} from "@/app/actions/leads";
import { LeadStatus, Priority } from "@prisma/client";

const STATUS_COLORS: Record<string, string> = {
  NEW: "bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400",
  QUALIFIED:
    "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400",
  PROPOSAL:
    "bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400",
  NEGOTIATION:
    "bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400",
  CLOSED:
    "bg-slate-100 dark:bg-slate-500/10 text-slate-800 dark:text-slate-400",
  LOST: "bg-red-100 dark:bg-red-500/10 text-red-800 dark:text-red-400",
};

const PRIORITY_COLORS: Record<string, string> = {
  HIGH: "text-rose-500",
  MEDIUM: "text-amber-500",
  LOW: "text-emerald-500",
};

export default function LeadsDirectory() {
  const [leads, setLeads] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalCount: 0,
    newLeads: 0,
    qualifiedLeads: 0,
    totalValue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "">("");
  const [isPending, startTransition] = useTransition();

  const fetchData = useCallback(
    async (
      pageNum: number,
      searchVal: string,
      statusVal: any,
      isNewSearch: boolean,
    ) => {
      if (isNewSearch) setLoading(true);
      else setLoadingMore(true);

      try {
        const data = await getLeads({
          page: pageNum,
          search: searchVal,
          status: statusVal || undefined,
          pageSize: 15,
        });

        if (isNewSearch) {
          setLeads(data.leads);
        } else {
          setLeads((prev) => [...prev, ...data.leads]);
        }

        setTotalPages(data.totalPages);

        if (isNewSearch) {
          const statsData = await getLeadStats();
          setStats(statsData);
        }
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchData(1, search, statusFilter, true);
    }, 400);
    return () => clearTimeout(timer);
  }, [search, statusFilter, fetchData]);

  const handleScroll = (e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    if (
      scrollHeight - scrollTop <= clientHeight + 100 &&
      !loadingMore &&
      page < totalPages
    ) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchData(nextPage, search, statusFilter, false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      const result = await deleteLead(id);
      if (result.success) {
        fetchData(1, search, statusFilter, true);
      } else {
        alert(result.error);
      }
    }
  };

  const handleConvert = async (id: string) => {
    if (confirm("Convert this lead to a customer?")) {
      startTransition(async () => {
        const result = await convertLeadToCustomer(id);
        if (result.success) {
          alert("Lead successfully converted to customer!");
          fetchData(1, search, statusFilter, true);
        } else {
          alert(result.error);
        }
      });
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto p-6 space-y-6 bg-background-light dark:bg-background-dark"
    >
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Leads Pipeline
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 font-medium">
              Manage {stats.totalCount} active leads in your sales funnel.
            </p>
          </div>
          <Link
            href="/leads/new"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Create Lead
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-primary/20 transition-all">
            <div className="size-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                filter_alt
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Pipeline Value
              </p>
              <h3 className="text-xl font-black dark:text-white">
                ${stats.totalValue.toLocaleString()}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-primary/20 transition-all">
            <div className="size-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                bolt
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Qualified Leads
              </p>
              <h3 className="text-xl font-black dark:text-white">
                {stats.qualifiedLeads} Active
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 group hover:border-primary/20 transition-all">
            <div className="size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                new_releases
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">
                New Today
              </p>
              <h3 className="text-xl font-black dark:text-white">
                +{stats.newLeads} Incoming
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-4 bg-slate-50/50 dark:bg-slate-800/20">
            <div className="flex-1 w-full relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                type="text"
                placeholder="Search by lead name, company or email..."
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none font-medium text-slate-700 dark:text-slate-200"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <select
                className="flex-1 md:w-48 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold uppercase tracking-widest outline-none transition-all"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
              >
                <option value="">All Statuses</option>
                {Object.keys(LeadStatus).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                <tr>
                  <th className="px-6 py-5">Lead Contact</th>
                  <th className="px-6 py-5">Company</th>
                  <th className="px-6 py-5">Status</th>
                  <th className="px-6 py-5">Value</th>
                  <th className="px-6 py-5">Priority</th>
                  <th className="px-6 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                      <div className="size-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-20 text-center text-slate-400 font-medium italic"
                    >
                      No leads found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group"
                    >
                      <td className="px-6 py-4">
                        <Link
                          href={`/leads/${lead.id}`}
                          className="flex items-center gap-3"
                        >
                          <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black uppercase tracking-tighter">
                            {lead.name.charAt(0)}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                              {lead.name}
                            </span>
                            <span className="text-[10px] font-medium text-slate-500">
                              {lead.email}
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {lead.company || "Individual"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${STATUS_COLORS[lead.status]}`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-black text-slate-900 dark:text-white">
                          ${(lead.value || 0).toLocaleString()}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`material-symbols-outlined text-[18px] ${PRIORITY_COLORS[lead.priority]}`}
                          >
                            priority_high
                          </span>
                          <span className="text-xs font-bold uppercase tracking-tight text-slate-500">
                            {lead.priority}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleConvert(lead.id)}
                            className="p-2 text-slate-400 hover:text-emerald-500 transition-colors"
                            title="Convert to Customer"
                          >
                            <span className="material-symbols-outlined text-sm">
                              person_add
                            </span>
                          </button>
                          <Link
                            href={`/leads/${lead.id}`}
                            className="p-2 text-slate-400 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">
                              visibility
                            </span>
                          </Link>
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 text-slate-400 hover:text-rose-500 transition-colors"
                          >
                            <span className="material-symbols-outlined text-sm">
                              delete
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {loadingMore && (
            <div className="p-8 text-center border-t border-slate-100 dark:border-slate-800">
              <div className="inline-block size-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
