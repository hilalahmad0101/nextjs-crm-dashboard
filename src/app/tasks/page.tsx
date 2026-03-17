"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "@/app/actions/tasks";
import { getUsers } from "@/app/actions/users";
import { TaskStatus, Priority } from "@prisma/client";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function TasksPage() {
  const [data, setData] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"list" | "kanban">("list");
  const [hasMounted, setHasMounted] = useState(false);

  // Modal & Form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    status: TaskStatus.TODO,
    priority: Priority.MEDIUM,
    dueDate: "",
    userId: "",
  });

  const fetchData = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const [taskResult, userResult] = await Promise.all([
        getTasks(),
        getUsers({ pageSize: 100 }),
      ]);

      if (taskResult.success) setData(taskResult);
      if (userResult.users) setUsers(userResult.users);
    } catch (error) {
      console.error("Failed to fetch tasks context:", error);
    } finally {
      if (!silent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    setHasMounted(true);
    fetchData();
  }, [fetchData]);

  const handleStatusUpdate = async (id: string, newStatus: TaskStatus) => {
    // Optimistic Update
    const previousData = JSON.parse(JSON.stringify(data));
    const allTasks = [...data.tasks];
    const taskIdx = allTasks.findIndex((t) => t.id === id);
    if (taskIdx > -1) {
      allTasks[taskIdx].status = newStatus;
      setData({ ...data, tasks: allTasks });
    }

    const result = await updateTask(id, { status: newStatus });
    if (!result.success) {
      alert("Failed to update task status");
      setData(previousData);
    } else {
      fetchData(true);
    }
  };

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId) return;

    handleStatusUpdate(draggableId, destination.droppableId as TaskStatus);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this operational task?")) return;
    const result = await deleteTask(id);
    if (result.success) {
      fetchData();
    } else {
      alert("Failed to delete task");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userId) return alert("Assignee required");

    const result = await createTask({
      ...formData,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : null,
    });

    if (result.success) {
      setIsModalOpen(false);
      setFormData({
        title: "",
        status: TaskStatus.TODO,
        priority: Priority.MEDIUM,
        dueDate: "",
        userId: "",
      });
      fetchData();
    } else {
      alert("Failed to create task");
    }
  };

  if (loading || !data) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="text-center space-y-4">
          <div className="size-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
            Loading Workflows...
          </p>
        </div>
      </div>
    );
  }

  const { tasks, stats } = data;

  return (
    <div className="flex-1 overflow-y-auto w-full bg-background-light dark:bg-background-dark relative">
      <div className="p-8 space-y-8 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white uppercase transition-all">
              Task Matrix
            </h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">
              Operational task management and workflow coordination.
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
                Board
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.1em] transition-all shadow-xl shadow-primary/30"
            >
              <span className="material-symbols-outlined text-sm">
                add_task
              </span>
              Dispatch Task
            </button>
          </div>
        </div>

        {/* Operational Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Active Nodes",
              val: stats.total,
              color: "primary",
              icon: "stacks",
            },
            {
              label: "Completed",
              val: stats.completed,
              color: "emerald",
              icon: "task_alt",
            },
            {
              label: "Pending",
              val: stats.pending,
              color: "amber",
              icon: "pending_actions",
            },
            {
              label: "Critical Priority",
              val: stats.highPriority,
              color: "rose",
              icon: "error",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-7 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
            >
              <div className="relative z-10">
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">
                  {stat.label}
                </p>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  {stat.val}
                </h3>
              </div>
              <div
                className={`absolute -right-4 -bottom-4 text-${stat.color}-500/5 group-hover:text-${stat.color}-500/10 transition-colors`}
              >
                <span className="material-symbols-outlined text-9xl">
                  {stat.icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Task View Area */}
        {viewMode === "list" ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] border-b border-slate-200 dark:border-slate-800 text-nowrap">
                  <th className="px-10 py-6">Operational Task</th>
                  <th className="px-10 py-6">Assigned Intel</th>
                  <th className="px-10 py-6">Priority</th>
                  <th className="px-10 py-6">Due Date</th>
                  <th className="px-10 py-6">Status</th>
                  <th className="px-10 py-6 text-right">Command</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {tasks.map((task: any) => (
                  <tr
                    key={task.id}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/30 transition-all group"
                  >
                    <td className="px-10 py-6 max-w-md">
                      <span className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors block truncate">
                        {task.title}
                      </span>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-primary/10 flex flex-shrink-0 items-center justify-center text-[10px] font-black text-primary">
                          {task.user.name.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate max-w-[120px]">
                          {task.user.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <span
                        className={`px-3 py-1 rounded text-[9px] font-black uppercase tracking-widest ${
                          task.priority === "HIGH"
                            ? "bg-rose-500/10 text-rose-500"
                            : task.priority === "MEDIUM"
                              ? "bg-amber-500/10 text-amber-500"
                              : "bg-slate-500/10 text-slate-500"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>
                    <td className="px-10 py-6 text-xs font-bold text-slate-500">
                      {task.dueDate
                        ? new Date(task.dueDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "N/A"}
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                        {Object.values(TaskStatus).map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusUpdate(task.id, status)}
                            className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-tighter border transition-all ${
                              task.status === status
                                ? "bg-primary text-white border-primary shadow-sm"
                                : "bg-transparent text-slate-400 border-slate-200 dark:border-slate-800 hover:border-primary/30"
                            }`}
                          >
                            {status.replace("_", " ")}
                          </button>
                        ))}
                      </div>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="size-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-rose-500 hover:text-white flex items-center justify-center transition-all shadow-sm border border-slate-200 dark:border-slate-700 ml-auto"
                      >
                        <span className="material-symbols-outlined text-sm">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : hasMounted ? (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.values(TaskStatus).map((status) => {
                const columnTasks = tasks.filter(
                  (t: any) => t.status === status,
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
                            : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <div className="flex items-center justify-between px-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`size-2 rounded-full ${
                                status === TaskStatus.DONE
                                  ? "bg-emerald-500"
                                  : status === TaskStatus.IN_PROGRESS
                                    ? "bg-amber-500 animate-pulse"
                                    : "bg-slate-400"
                              }`}
                            ></div>
                            <h4 className="text-[12px] font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">
                              {status.replace("_", " ")}
                            </h4>
                            <span className="text-[10px] font-black bg-white dark:bg-slate-800 text-slate-400 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                              {columnTasks.length}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col gap-4 flex-1">
                          {columnTasks.map((task: any, index: number) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`bg-white dark:bg-slate-900 border p-6 rounded-[2rem] shadow-sm transition-all group relative ${
                                    snapshot.isDragging
                                      ? "shadow-2xl ring-4 ring-primary/10 border-primary scale-105 z-50"
                                      : "border-slate-200 dark:border-slate-800 hover:shadow-xl"
                                  }`}
                                >
                                  <div className="absolute top-6 right-6">
                                    <div
                                      className={`size-2 rounded-full ${
                                        task.priority === "HIGH"
                                          ? "bg-rose-500"
                                          : task.priority === "MEDIUM"
                                            ? "bg-amber-500"
                                            : "bg-slate-300"
                                      }`}
                                    ></div>
                                  </div>
                                  <h5 className="text-sm font-black text-slate-900 dark:text-white mb-4 pr-6 leading-tight group-hover:text-primary transition-colors">
                                    {task.title}
                                  </h5>

                                  <div className="flex items-center justify-between pt-4 border-t border-slate-50 dark:border-slate-800/50">
                                    <div className="flex items-center gap-2">
                                      <div className="size-6 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[8px] font-black text-primary">
                                        {task.user.name.charAt(0)}
                                      </div>
                                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest truncate max-w-[80px]">
                                        {task.user.name}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-slate-300">
                                      <span className="material-symbols-outlined text-sm">
                                        calendar_month
                                      </span>
                                      <span className="text-[9px] font-bold">
                                        {task.dueDate
                                          ? new Date(
                                              task.dueDate,
                                            ).toLocaleDateString("en-US", {
                                              month: "short",
                                              day: "numeric",
                                            })
                                          : "--"}
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

      {/* Task Dispatch Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in duration-300">
            <div className="p-10">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Dispatch Operative
                  </h2>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mt-1">
                    Assign functional objectives to resources
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
                  <div className="group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block group-focus-within:text-primary transition-colors">
                      Objective Title
                    </label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Define the functional outcome..."
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all resize-none shadow-inner"
                      value={formData.title}
                      onChange={(e) =>
                        setFormData({ ...formData, title: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
                        Resource Alpha
                      </label>
                      <select
                        required
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all"
                        value={formData.userId}
                        onChange={(e) =>
                          setFormData({ ...formData, userId: e.target.value })
                        }
                      >
                        <option value="">Select Assignee</option>
                        {users.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
                        Target Date
                      </label>
                      <input
                        type="date"
                        className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl px-5 py-4 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:border-primary transition-all shadow-inner"
                        value={formData.dueDate}
                        onChange={(e) =>
                          setFormData({ ...formData, dueDate: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 block">
                      Priority Escalation
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.values(Priority).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, priority: p })
                          }
                          className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                            formData.priority === p
                              ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                              : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
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
                    Dispatch Objective
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
