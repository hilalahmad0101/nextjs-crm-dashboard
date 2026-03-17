"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
} from "@/app/actions/users";
import RoleSelector from "@/components/RoleSelector";

export default function UserDirectory() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [search, setSearch] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Create user form state
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserRole, setNewUserRole] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  // Edit user state
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [editName, setEditName] = useState("");
  const [editRoleId, setEditRoleId] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const listEndRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(
    async (pageNum: number, searchVal: string, isNewSearch: boolean) => {
      if (isNewSearch) setLoading(true);
      else setLoadingMore(true);

      try {
        const userData = await getUsers({
          page: pageNum,
          search: searchVal,
          pageSize: 20,
        });

        if (isNewSearch) {
          setUsers(userData.users);
        } else {
          setUsers((prev) => [...prev, ...userData.users]);
        }

        setTotalPages(userData.totalPages);
        setTotalCount(userData.totalCount);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [],
  );

  // Initial fetch and search fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchData(1, search, true);
    }, 400);
    return () => clearTimeout(timer);
  }, [search, fetchData]);

  // Infinite scroll listener
  useEffect(() => {
    const handleScroll = (e: any) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (
        scrollHeight - scrollTop <= clientHeight + 100 &&
        !loadingMore &&
        page < totalPages
      ) {
        const nextPage = page + 1;
        setPage(nextPage);
        fetchData(nextPage, search, false);
      }
    };

    const scrollContainer = document.getElementById("users-scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [page, totalPages, loadingMore, search, fetchData]);

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      await createUser({
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword,
        roleId: newUserRole || undefined,
      });
      setShowCreateModal(false);
      // Reset form
      setNewUserName("");
      setNewUserEmail("");
      setNewUserRole("");
      setNewUserPassword("");
      setPage(1);
      fetchData(1, search, true);
    } catch (error: any) {
      console.error("Error creating user:", error);
      alert(error.message);
    } finally {
      setIsCreating(false);
    }
  };

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    setIsUpdating(true);
    try {
      await updateUser(editingUser.id, {
        name: editName,
        roleId: editRoleId || undefined,
      });
      setShowEditModal(false);
      fetchData(1, search, true);
    } catch (error: any) {
      console.error("Error updating user:", error);
      alert(error.message);
    } finally {
      setIsUpdating(false);
    }
  };

  const openEditModal = (user: any) => {
    setEditingUser(user);
    setEditName(user.name || "");
    setEditRoleId(user.roleId || "");
    setShowEditModal(true);
  };

  const handleDeleteUser = async (id: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      setPage(1);
      fetchData(1, search, true);
    }
  };

  const formatDate = (date: Date | string) => {
    if (!date) return "Never";
    return new Date(date).toLocaleDateString();
  };

  return (
    <div
      id="users-scroll-container"
      className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Title & Action */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Team Members
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Manage your team accounts and permissions.
            </p>
          </div>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-xl">
              person_add
            </span>
            <span>Add New User</span>
          </button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Total Users
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  {totalCount.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-50">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Active Now
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  -
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm opacity-50">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Pending Invitations
                </p>
                <p className="text-2xl font-bold text-slate-900 dark:text-white">
                  -
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 md:w-96">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Search members by name or email..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* User Table */}
        <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-[#0b1018] border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Joined Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {loading ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-10 text-center text-slate-400"
                    >
                      Loading team members...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-6 py-10 text-center text-slate-400"
                    >
                      No members found.
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
                            {user.image ? (
                              <img
                                src={user.image}
                                alt={user.name}
                                className="size-full object-cover"
                              />
                            ) : (
                              user.name?.charAt(0) || "U"
                            )}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-900 dark:text-white">
                              {user.name}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              {user.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                          {user.role?.name || "No Role"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {formatDate(user.createdAt)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => openEditModal(user)}
                            className="p-2 text-slate-400 hover:text-primary transition-all"
                          >
                            <span className="material-symbols-outlined text-sm">
                              edit
                            </span>
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="p-2 text-slate-400 hover:text-red-500 transition-all text-sm"
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
            <div className="p-4 text-center border-t border-slate-100 dark:border-slate-800">
              <div className="inline-block size-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
            </div>
          )}

          {!loadingMore && page < totalPages && (
            <div className="p-4 text-center border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => {
                  const nextPage = page + 1;
                  setPage(nextPage);
                  fetchData(nextPage, search, false);
                }}
                className="text-xs font-bold text-primary hover:underline"
              >
                Load More members
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Create User Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">Add New Team Member</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleCreateUser} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="e.g. Sarah Johnson"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="sarah.j@company.com"
                  value={newUserEmail}
                  onChange={(e) => setNewUserEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Temporary Password
                </label>
                <input
                  required
                  type="password"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="••••••••"
                  value={newUserPassword}
                  onChange={(e) => setNewUserPassword(e.target.value)}
                />
              </div>

              {/* Optimized Role Selector */}
              <RoleSelector value={newUserRole} onChange={setNewUserRole} />

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isCreating}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {isCreating ? "Creating..." : "Create User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 className="text-xl font-bold">Edit Team Member</h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleUpdateUser} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                  placeholder="e.g. Sarah Johnson"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-slate-500">
                  Email Address (Read-only)
                </label>
                <input
                  disabled
                  type="email"
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm opacity-60 cursor-not-allowed"
                  value={editingUser?.email || ""}
                />
              </div>

              {/* Optimized Role Selector */}
              <RoleSelector value={editRoleId} onChange={setEditRoleId} />

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {isUpdating ? "Updating..." : "Update User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
