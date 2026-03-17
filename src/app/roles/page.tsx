"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getRoles, deleteRole } from "@/app/actions/roles";

export default function UserRolesList() {
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const fetchRoles = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getRoles({ page, search, pageSize: 10 });
      setRoles(data.roles);
      setTotalPages(data.totalPages);
      setTotalCount(data.totalCount);
    } catch (error) {
      console.error("Failed to fetch roles:", error);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchRoles();
    }, 300);
    return () => clearTimeout(timer);
  }, [fetchRoles]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this role?")) {
      await deleteRole(id);
      fetchRoles();
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            User Roles
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Manage and define permissions for your team members.
          </p>
        </div>
        <Link
          href="/roles/new"
          className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-primary/20 whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-base">add</span>
          Create New Role
        </Link>
      </div>

      {/* Role Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-slate-800/50 p-5 border border-slate-200 dark:border-slate-700/50 rounded-xl">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Total Roles
          </p>
          <p className="text-2xl font-bold mt-1">{totalCount}</p>
        </div>
        {/* Placeholder stats */}
        <div className="bg-white dark:bg-slate-800/50 p-5 border border-slate-200 dark:border-slate-700/50 rounded-xl">
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Total Users
          </p>
          <p className="text-2xl font-bold mt-1">
            {roles.reduce((acc, r) => acc + (r.userCount || 0), 0)}
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="relative max-w-sm">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <span className="material-symbols-outlined text-sm">search</span>
          </span>
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Role Name
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Number of Users
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Last Updated
                </th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-slate-400"
                  >
                    Loading roles...
                  </td>
                </tr>
              ) : roles.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-slate-400"
                  >
                    No roles found.
                  </td>
                </tr>
              ) : (
                roles.map((role) => (
                  <tr
                    key={role.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group"
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-base">
                            manage_accounts
                          </span>
                        </div>
                        <span className="text-sm font-bold">{role.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xs truncate">
                        {role.description}
                      </p>
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {role.userCount} users
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {formatDate(role.updatedAt)}
                      </p>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/roles/${role.id}`}
                          className="p-2 text-slate-400 hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">
                            edit
                          </span>
                        </Link>
                        <button
                          onClick={() => handleDelete(role.id)}
                          className="p-2 text-slate-400 hover:text-red-500 transition-colors"
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

        {/* Pagination */}
        <div className="px-6 py-4 flex items-center justify-between bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing {roles.length} of {totalCount.toLocaleString()} roles
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                chevron_left
              </span>
            </button>

            {(() => {
              const pages = [];
              const startPage = Math.max(1, page - 2);
              const endPage = Math.min(totalPages, page + 2);

              if (startPage > 1) {
                pages.push(
                  <button
                    key={1}
                    onClick={() => setPage(1)}
                    className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-xs"
                  >
                    1
                  </button>,
                );
                if (startPage > 2)
                  pages.push(
                    <span key="dots1" className="px-2">
                      ...
                    </span>,
                  );
              }

              for (let i = startPage; i <= endPage; i++) {
                pages.push(
                  <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`px-3 py-1 rounded text-xs font-bold ${
                      page === i
                        ? "bg-primary text-white"
                        : "border border-slate-200 dark:border-slate-700 text-slate-500"
                    }`}
                  >
                    {i}
                  </button>,
                );
              }

              if (endPage < totalPages) {
                if (endPage < totalPages - 1)
                  pages.push(
                    <span key="dots2" className="px-2">
                      ...
                    </span>,
                  );
                pages.push(
                  <button
                    key={totalPages}
                    onClick={() => setPage(totalPages)}
                    className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded text-xs"
                  >
                    {totalPages}
                  </button>,
                );
              }
              return pages;
            })()}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 border border-slate-200 dark:border-slate-700 rounded hover:bg-white dark:hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
