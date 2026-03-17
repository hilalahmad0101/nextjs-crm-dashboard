"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getPipelineStats, updateLeadStatus } from "@/app/actions/pipeline";
import { LeadStatus } from "@prisma/client";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const STAGE_MAP: Record<
  string,
  { label: string; progress: string; stageNum: number }
> = {
  NEW: { label: "Discovery", progress: "20%", stageNum: 1 },
  QUALIFIED: { label: "Qualified", progress: "40%", stageNum: 2 },
  PROPOSAL: { label: "Proposal", progress: "60%", stageNum: 3 },
  NEGOTIATION: { label: "Negotiation", progress: "80%", stageNum: 4 },
  CLOSED: { label: "Closing", progress: "95%", stageNum: 5 },
};

export default function SalesPipeline() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "kanban">("list");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const stats = await getPipelineStats();
      setData(stats);
    } catch (error) {
      console.error("Failed to fetch pipeline stats:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusUpdate = async (id: string, newStatus: LeadStatus) => {
    // Optimistic update
    const previousData = JSON.parse(JSON.stringify(data));

    // Find lead and move it locally
    const allLeads = [...data.allActiveLeads];
    const leadIdx = allLeads.findIndex((l) => l.id === id);
    if (leadIdx > -1) {
      allLeads[leadIdx].status = newStatus;
      // Refresh local pipeline stats (simplified)
      const updatedPipelineData = data.pipelineData.map((stage: any) => {
        const stageLeads = allLeads.filter((l) => l.status === stage.key);
        return {
          ...stage,
          count: stageLeads.length,
          value: stageLeads.reduce((sum, l) => sum + (l.value || 0), 0),
          leads: stageLeads,
        };
      });
      setData({
        ...data,
        allActiveLeads: allLeads,
        pipelineData: updatedPipelineData,
      });
    }

    const result = await updateLeadStatus(id, newStatus);
    if (!result.success) {
      alert("Failed to update status");
      setData(previousData); // Rollback
    } else {
      fetchData(); // Sync with server truly
    }
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    handleStatusUpdate(draggableId, destination.droppableId as LeadStatus);
  };

  if (loading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center space-y-4">
          <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Analyzing Funnel Velocity...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto w-full bg-background-light dark:bg-background-dark">
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* Summary Stats & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase">
              Sales Pipeline
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Real-time strategic funnel analysis and deal progression matrix.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-sm">
                download
              </span>
              Export Report
            </button>
          </div>
        </div>

        {/* Funnel Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Global Pipeline Value
                </p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  ${data.totalPipelineValue.toLocaleString()}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 uppercase tracking-widest">
                  Active Growth +12%
                </span>
              </div>
            </div>

            <div className="flex h-48 gap-3">
              {data.pipelineData.map((stage: any, idx: number) => {
                const opacity = 1 - idx * 0.15;
                return (
                  <div
                    key={stage.key}
                    className="flex-1 flex flex-col justify-end group"
                  >
                    <div className="text-center mb-2">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">
                        {stage.label}
                      </p>
                      <p className="text-sm font-black text-slate-900 dark:text-white">
                        ${(stage.value / 1000).toFixed(0)}K
                      </p>
                    </div>
                    <div
                      className="w-full bg-primary rounded-xl transition-all duration-700 ease-out group-hover:brightness-110 shadow-sm"
                      style={{
                        height: `${Math.min(100, 30 + (4 - idx) * 15)}%`,
                        opacity: opacity,
                      }}
                    >
                      <div className="p-3 text-center">
                        <span className="text-[10px] font-black text-white/40">
                          {stage.count} Deals
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex mt-4">
              {data.conversionRates.map((rate: any, i: number) => (
                <div
                  key={i}
                  className="flex-1 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest"
                >
                  {Math.round(rate.rate)}% Conversion
                </div>
              ))}
              <div className="flex-1"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Avg. Pipeline Velocity
              </p>
              <div className="mt-4">
                <h4 className="text-3xl font-black text-slate-900 dark:text-white">
                  18 Days
                </h4>
                <p className="text-[10px] text-rose-500 font-bold flex items-center gap-1 mt-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">
                    trending_down
                  </span>
                  Slowing 2%
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Conversion Win Rate
              </p>
              <div className="mt-4">
                <h4 className="text-3xl font-black text-slate-900 dark:text-white">
                  42%
                </h4>
                <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1 mt-2 uppercase tracking-widest">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  Optimal Range
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Progression Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              Deal Progression Matrix
            </h3>
            <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                <span className="material-symbols-outlined text-sm">
                  view_list
                </span>
              </button>
              <button
                onClick={() => setViewMode("kanban")}
                className={`p-2 rounded-lg transition-all ${viewMode === "kanban" ? "bg-white dark:bg-slate-700 text-primary shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                <span className="material-symbols-outlined text-sm">
                  view_kanban
                </span>
              </button>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden text-nowrap">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/30 text-[10px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-200 dark:border-slate-800">
                    <th className="px-8 py-5">Prospect & Organization</th>
                    <th className="px-8 py-5">Current Stage</th>
                    <th className="px-8 py-5">Value Progression</th>
                    <th className="px-8 py-5">Estimated Value</th>
                    <th className="px-8 py-5">Age</th>
                    <th className="px-8 py-5">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {data.allActiveLeads.map((lead: any) => {
                    const stage = STAGE_MAP[lead.status] || {
                      label: "Unknown",
                      progress: "0%",
                      stageNum: 0,
                    };
                    const ageInDays = Math.floor(
                      (new Date().getTime() -
                        new Date(lead.createdAt).getTime()) /
                        (1000 * 3600 * 24),
                    );
                    return (
                      <tr
                        key={lead.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all group"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-4">
                            <div className="size-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-black uppercase tracking-tighter">
                              {lead.name.charAt(0)}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                {lead.name}
                              </p>
                              <p className="text-[10px] text-slate-500 font-medium">
                                {lead.company || "Individual Opportunity"}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5">
                          <select
                            className="px-3 py-1 text-[10px] font-black rounded-lg bg-primary/10 text-primary border border-primary/20 uppercase tracking-widest outline-none cursor-pointer hover:bg-primary/20 transition-all"
                            value={lead.status}
                            onChange={(e) =>
                              handleStatusUpdate(
                                lead.id,
                                e.target.value as LeadStatus,
                              )
                            }
                          >
                            {Object.keys(STAGE_MAP).map((s) => (
                              <option key={s} value={s}>
                                {STAGE_MAP[s].label}
                              </option>
                            ))}
                            <option value="LOST">Lost</option>
                          </select>
                        </td>
                        <td className="px-8 py-5">
                          <div className="w-36">
                            <div className="flex justify-between text-[10px] mb-1.5 font-black uppercase tracking-tighter text-primary">
                              <span>{stage.progress} Complete</span>
                              <span className="text-slate-400">
                                #0{stage.stageNum}
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-primary transition-all duration-1000 shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                                style={{ width: stage.progress }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-5 font-black text-sm text-slate-900 dark:text-white">
                          ${(lead.value || 0).toLocaleString()}
                        </td>
                        <td className="px-8 py-5 text-sm font-bold text-slate-700 dark:text-slate-300">
                          {ageInDays} Days
                        </td>
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                            <div
                              className={`size-2 rounded-full ${lead.priority === "HIGH" ? "bg-rose-500" : lead.priority === "MEDIUM" ? "bg-amber-500" : "bg-emerald-500 animate-pulse"}`}
                            ></div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                              {lead.priority}
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <div className="flex gap-6 overflow-x-auto pb-6 custom-scrollbar min-h-[600px] -mx-8 px-8">
                {data.pipelineData.map((stage: any) => (
                  <Droppable key={stage.key} droppableId={stage.key}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="flex-shrink-0 w-[340px] flex flex-col gap-5 bg-slate-50/50 dark:bg-slate-900/40 p-4 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800"
                      >
                        <div className="flex items-center justify-between px-2">
                          <div className="flex items-center gap-2">
                            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                              {stage.label}
                            </h4>
                            <span className="text-[9px] font-black bg-white dark:bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                              {stage.count}
                            </span>
                          </div>
                          <span className="text-[10px] font-black text-primary">
                            ${(stage.value / 1000).toFixed(0)}K
                          </span>
                        </div>

                        <div className="flex flex-col gap-4 min-h-[400px]">
                          {stage.leads.map((lead: any, index: number) => (
                            <Draggable
                              key={lead.id}
                              draggableId={lead.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`bg-white dark:bg-slate-900 border p-5 rounded-2xl shadow-sm transition-all group ${snapshot.isDragging ? "border-primary ring-4 ring-primary/10 shadow-2xl scale-105 z-50" : "border-slate-200 dark:border-slate-800 hover:border-primary/40"}`}
                                >
                                  <div className="flex items-start justify-between mb-4">
                                    <div
                                      className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest ${lead.priority === "HIGH" ? "bg-rose-500/10 text-rose-500" : lead.priority === "MEDIUM" ? "bg-amber-500/10 text-amber-500" : "bg-emerald-500/10 text-emerald-500"}`}
                                    >
                                      {lead.priority}
                                    </div>
                                    <span className="text-[9px] font-black text-slate-300 uppercase">
                                      #{lead.id.slice(-4)}
                                    </span>
                                  </div>
                                  <h5 className="text-sm font-black text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                                    {lead.name}
                                  </h5>
                                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-5">
                                    {lead.company || "Individual Opportunity"}
                                  </p>

                                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/50">
                                    <span className="text-sm font-black text-slate-900 dark:text-white">
                                      ${(lead.value || 0).toLocaleString()}
                                    </span>
                                    <div className="flex items-center gap-1.5 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                                      <span className="material-symbols-outlined text-sm">
                                        drag_indicator
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      </div>
                    )}
                  </Droppable>
                ))}
              </div>
            </DragDropContext>
          )}
        </div>

        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 flex gap-5 shadow-sm">
            <div className="bg-primary/20 p-4 rounded-2xl h-fit text-primary">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                Leakage Analysis
              </h4>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                Higher than average drop-off detected at the 'Proposal' stage.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 flex gap-5 shadow-sm">
            <div className="bg-emerald-500/20 p-4 rounded-2xl h-fit text-emerald-500">
              <span className="material-symbols-outlined">auto_graph</span>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                Velocity Insight
              </h4>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                Qualified to Proposal speed has increased by 14% this month.
              </p>
            </div>
          </div>
          <div className="p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20 flex gap-5 shadow-sm">
            <div className="bg-amber-500/20 p-4 rounded-2xl h-fit text-amber-500">
              <span className="material-symbols-outlined">priority_high</span>
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-tight text-slate-900 dark:text-white">
                Risk Advisory
              </h4>
              <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                72% of pipeline value concentrated in 3 major accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
