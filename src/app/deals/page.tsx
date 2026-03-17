"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  getDeals,
  updateDealStatus,
  deleteDeal,
  createDeal,
} from "@/app/actions/deals";
import { getCustomers } from "@/app/actions/customers";
import { DealStatus } from "@prisma/client";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function SalesDeals() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "kanban">("kanban");
  const [hasMounted, setHasMounted] = useState(false);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customers, setCustomers] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    value: 0,
    customerId: "",
    status: DealStatus.OPEN,
  });

  const fetchData = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const result = await getDeals();
      if (result.success) {
        setData(result);
      }

      const custResult = await getCustomers({ pageSize: 100 });
      setCustomers(custResult.customers);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setHasMounted(true);
    fetchData();
  }, [fetchData]);

  const handleStatusUpdate = async (id: string, newStatus: DealStatus) => {
    // Optimistic Update
    const previousData = JSON.parse(JSON.stringify(data));
    const allDeals = [...data.deals];
    const dealIdx = allDeals.findIndex((d) => d.id === id);
    if (dealIdx > -1) {
      allDeals[dealIdx].status = newStatus;
      setData({ ...data, deals: allDeals });
    }

    const result = await updateDealStatus(id, newStatus);
    if (!result.success) {
      alert("Failed to update status");
      setData(previousData);
    } else {
      fetchData(true); // Silent Sync
    }
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    handleStatusUpdate(draggableId, destination.droppableId as DealStatus);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this deal?")) return;
    const result = await deleteDeal(id);
    if (result.success) {
      fetchData();
    } else {
      alert("Failed to delete deal");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.customerId) return alert("Please select a customer");

    const result = await createDeal({
      ...formData,
      value: Number(formData.value),
    });

    if (result.success) {
      setIsModalOpen(false);
      setFormData({
        title: "",
        value: 0,
        customerId: "",
        status: DealStatus.OPEN,
      });
      fetchData();
    } else {
      alert("Failed to create deal");
    }
  };

  if (loading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center space-y-4">
          <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Accessing Deal Vault...
          </p>
        </div>
      </div>
    );
  }

  const { deals, stats } = data;

  return (
    <div className="flex-1 overflow-y-auto w-full bg-background-light dark:bg-background-dark relative">
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              Deal Console
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Unified operational view of active contracts and commercial
              relationships.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === "list" ? "bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-600" : "text-slate-500 hover:text-slate-700"}`}
              >
                <span className="material-symbols-outlined text-sm">
                  view_list
                </span>
                List
              </button>
              <button
                onClick={() => setViewMode("kanban")}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${viewMode === "kanban" ? "bg-white dark:bg-slate-700 text-primary shadow-sm ring-1 ring-slate-200 dark:ring-slate-600" : "text-slate-500 hover:text-slate-700"}`}
              >
                <span className="material-symbols-outlined text-sm">
                  view_kanban
                </span>
                Kanban
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all shadow-xl shadow-primary/30"
            >
              <span className="material-symbols-outlined text-sm">
                handshake
              </span>
              Originate Deal
            </button>
          </div>
        </div>

        {/* Intelligence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-7 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Portfolio Value
              </p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                ${stats.totalValue.toLocaleString()}
              </h3>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">
                  Global AUM View
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-primary/5 group-hover:text-primary/10 transition-colors">
              <span className="material-symbols-outlined text-9xl">
                payments
              </span>
            </div>
          </div>

          <div className="p-7 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Active Pipeline
              </p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                {stats.activeDeals}
              </h3>
              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">
                  In-Progress Units
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-blue-500/5 group-hover:text-blue-500/10 transition-colors">
              <span className="material-symbols-outlined text-9xl">sync</span>
            </div>
          </div>

          <div className="p-7 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Unit Yield
              </p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                ${stats.avgDealSize.toLocaleString()}
              </h3>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Per-transaction avg
                </span>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 text-slate-400/5 group-hover:text-slate-400/10 transition-colors">
              <span className="material-symbols-outlined text-9xl">
                equalizer
              </span>
            </div>
          </div>

          <div className="p-7 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                Capture Rate
              </p>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                {stats.winRate.toFixed(1)}%
              </h3>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-5 overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
                <div
                  className="bg-primary h-full rounded-full transition-all duration-[2000ms] shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                  style={{ width: `${stats.winRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content View */}
        {viewMode === "list" ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-slate-200 dark:border-slate-800 text-nowrap">
                  <th className="px-10 py-6">Instrument Identity</th>
                  <th className="px-10 py-6">Stakeholder</th>
                  <th className="px-10 py-6 text-right">Valuation</th>
                  <th className="px-10 py-6">lifecycle State</th>
                  <th className="px-10 py-6">Command</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {deals.map((deal: any) => (
                  <tr
                    key={deal.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-all group"
                  >
                    <td className="px-10 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                          {deal.title}
                        </span>
                        <span className="text-[9px] font-bold text-slate-400 uppercase mt-1">
                          Ref: {deal.id.slice(-8)}
                        </span>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-primary">
                          {deal.customer.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                            {deal.customer.name}
                          </p>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            {deal.customer.company || "Individual Account"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <span className="text-sm font-black text-slate-900 dark:text-white">
                        ${deal.value.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <span
                        className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm ${
                          deal.status === "WON"
                            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                            : deal.status === "LOST"
                              ? "bg-rose-500/10 text-rose-500 border-rose-500/20"
                              : "bg-blue-500/10 text-blue-500 border-blue-500/20"
                        }`}
                      >
                        {deal.status}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex gap-2">
                        {deal.status === "OPEN" && (
                          <>
                            <button
                              onClick={() =>
                                handleStatusUpdate(deal.id, DealStatus.WON)
                              }
                              className="size-8 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-emerald-500/10"
                            >
                              <span className="material-symbols-outlined text-sm">
                                done_all
                              </span>
                            </button>
                            <button
                              onClick={() =>
                                handleStatusUpdate(deal.id, DealStatus.LOST)
                              }
                              className="size-8 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-rose-500/10"
                            >
                              <span className="material-symbols-outlined text-sm">
                                close
                              </span>
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => handleDelete(deal.id)}
                          className="size-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all group/del shadow-sm border border-slate-200 dark:border-slate-700"
                        >
                          <span className="material-symbols-outlined text-sm">
                            delete
                          </span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : hasMounted ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["OPEN", "WON", "LOST"].map((status) => {
                const columnDeals = deals.filter(
                  (d: any) => d.status === status,
                );
                const columnValue = columnDeals.reduce(
                  (sum: number, d: any) => sum + d.value,
                  0,
                );

                return (
                  <Droppable key={status} droppableId={status}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`flex flex-col gap-6 p-6 rounded-[2.5rem] border border-dashed transition-all duration-500 min-h-[500px] ${
                          snapshot.isDraggingOver
                            ? "bg-primary/[0.05] border-primary shadow-inner scale-[1.01]"
                            : status === "WON"
                              ? "bg-emerald-500/[0.03] border-emerald-500/20"
                              : status === "LOST"
                                ? "bg-rose-500/[0.03] border-rose-500/20"
                                : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between px-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`size-2 rounded-full ${
                                status === "WON"
                                  ? "bg-emerald-500"
                                  : status === "LOST"
                                    ? "bg-rose-500"
                                    : "bg-blue-500 animate-pulse"
                              }`}
                            ></div>
                            <h4
                              className={`text-[12px] font-black uppercase tracking-[0.3em] ${
                                status === "WON"
                                  ? "text-emerald-500"
                                  : status === "LOST"
                                    ? "text-rose-500"
                                    : "text-slate-900 dark:text-white"
                              }`}
                            >
                              {status} STATE
                            </h4>
                            <span className="text-[10px] font-black bg-white dark:bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                              {columnDeals.length}
                            </span>
                          </div>
                          <span className="text-[11px] font-black text-slate-500">
                            ${(columnValue / 1000).toFixed(0)}K
                          </span>
                        </div>

                        <div className="flex flex-col gap-5 flex-1">
                          {columnDeals.map((deal: any, index: number) => (
                            <Draggable
                              key={deal.id}
                              draggableId={deal.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`bg-white dark:bg-slate-900 border p-6 rounded-[2rem] shadow-sm transition-all group overflow-hidden relative ${
                                    snapshot.isDragging
                                      ? "shadow-2xl ring-4 ring-primary/10 border-primary scale-105 z-50"
                                      : "border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1"
                                  }`}
                                >
                                  <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                        {status === "OPEN"
                                          ? "In Negotiation"
                                          : "Archived Result"}
                                      </span>
                                      <span className="text-[9px] font-black text-primary bg-primary/5 px-2 py-0.5 rounded-lg border border-primary/10 uppercase">
                                        #{deal.id.slice(-4)}
                                      </span>
                                    </div>
                                    <h5 className="text-base font-black text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-all leading-tight">
                                      {deal.title}
                                    </h5>
                                    <div className="flex items-center gap-2 mb-6">
                                      <div className="size-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-black">
                                        {deal.customer.name.charAt(0)}
                                      </div>
                                      <p className="text-[11px] text-slate-500 font-bold uppercase tracking-tighter">
                                        {deal.customer.company ||
                                          deal.customer.name}
                                      </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-5 border-t border-slate-50 dark:border-slate-800/50">
                                      <div className="flex flex-col">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">
                                          Valuation
                                        </span>
                                        <span className="text-base font-black text-slate-900 dark:text-white">
                                          ${deal.value.toLocaleString()}
                                        </span>
                                      </div>
                                      <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-all">
                                        <span className="material-symbols-outlined text-lg text-slate-400">
                                          drag_indicator
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  {/* Abstract background shape */}
                                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-primary/20 transition-all duration-1000"></div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                          {columnDeals.length === 0 &&
                            !snapshot.isDraggingOver && (
                              <div className="flex-1 flex flex-col items-center justify-center text-slate-300 dark:text-slate-800 opacity-50 py-20 pointer-events-none">
                                <span className="material-symbols-outlined text-5xl mb-2">
                                  inbox
                                </span>
                                <p className="text-[10px] font-black uppercase tracking-widest">
                                  Available Space
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    )}
                  </Droppable>
                );
              })}
            </div>
          </DragDropContext>
        ) : (
          <div className="flex-1 flex items-center justify-center p-20">
            <div className="size-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Origin Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in duration-300">
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Originate New Deal
                  </h2>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Industrial Scale Transaction Entry
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-all"
                >
                  <span className="material-symbols-outlined text-sm">
                    close
                  </span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div className="group relative">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block group-focus-within:text-primary transition-colors">
                      Instrument Title
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Enterprise Q4 Cloud Expansion"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-inner"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
                        Face Valuation ($)
                      </label>
                      <input
                        required
                        type="number"
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all"
                        value={formData.value}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            value: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
                        Stakeholder
                      </label>
                      <select
                        required
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all"
                        value={formData.customerId}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            customerId: e.target.value,
                          })
                        }
                      >
                        <option value="">Select Account</option>
                        {customers.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name} ({c.company || "Individual"})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="pt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                  >
                    Abort
                  </button>
                  <button
                    type="submit"
                    className="flex-[2] bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20"
                  >
                    Execute Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
