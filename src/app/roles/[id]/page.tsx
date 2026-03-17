"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getRole, updateRole, getPermissions } from "@/app/actions/roles";

export default function EditRole({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const { id } = use(params);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [availablePermissions, setAvailablePermissions] = useState<any[]>([]);
  const [selectedPermissionIds, setSelectedPermissionIds] = useState<string[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const [role, perms] = await Promise.all([
          getRole(id),
          getPermissions(),
        ]);

        if (role) {
          setName(role.name);
          setDescription(role.description || "");
          setSelectedPermissionIds(role.permissionIds);
        }
        setAvailablePermissions(perms);
      } catch (error) {
        console.error("Failed to load data:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return alert("Role name is required");

    setSaving(true);
    try {
      await updateRole(id, {
        name,
        description,
        permissionIds: selectedPermissionIds,
      });
      router.push("/roles");
    } catch (error) {
      console.error("Failed to update role:", error);
      alert("Error updating role");
    } finally {
      setSaving(false);
    }
  };

  const togglePermission = (pid: string) => {
    setSelectedPermissionIds((prev) =>
      prev.includes(pid) ? prev.filter((p) => p !== pid) : [...prev, pid],
    );
  };

  const groupedPermissions = availablePermissions.reduce((acc: any, p) => {
    if (!acc[p.module]) acc[p.module] = [];
    acc[p.module].push(p);
    return acc;
  }, {});

  if (loading)
    return (
      <div className="p-8 text-center text-slate-500">
        Loading role details...
      </div>
    );

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
          <Link className="hover:text-primary transition-colors" href="/">
            Dashboard
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <Link className="hover:text-primary transition-colors" href="/roles">
            Roles
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            Edit Role
          </span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Edit Role: {name}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Update permissions and details for this user role.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden"
        >
          <div className="p-8 space-y-8">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-1">General Details</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Basic identification for this administrative role.
                </p>
              </div>
              <div className="col-span-2 space-y-6">
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    htmlFor="role-name"
                  >
                    Role Name
                  </label>
                  <input
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                    id="role-name"
                    placeholder="e.g. Regional Sales Manager"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                    htmlFor="role-desc"
                  >
                    Description
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none resize-none"
                    id="role-desc"
                    placeholder="Briefly describe the purpose and scope of this role..."
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </section>

            <hr className="border-slate-200 dark:border-slate-800" />

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="col-span-1">
                <h3 className="text-lg font-semibold mb-1">Access Levels</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Control what users assigned to this role can see and do.
                </p>
              </div>
              <div className="col-span-2 space-y-8">
                {Object.keys(groupedPermissions).map((module) => (
                  <div key={module} className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                      {module}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {groupedPermissions[module].map((p: any) => (
                        <div
                          key={p.id}
                          className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary/30 transition-colors cursor-pointer"
                          onClick={() => togglePermission(p.id)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary text-xl">
                              {p.module === "Analytics"
                                ? "analytics"
                                : p.module === "Sales"
                                  ? "group_add"
                                  : "settings"}
                            </span>
                            <div>
                              <p className="text-sm font-medium">{p.name}</p>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                {p.description ||
                                  `Manage ${p.name.toLowerCase()}`}
                              </p>
                            </div>
                          </div>
                          <label
                            className="relative inline-flex items-center cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={selectedPermissionIds.includes(p.id)}
                              onChange={() => togglePermission(p.id)}
                            />
                            <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/30 px-8 py-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-end gap-4">
            <Link
              href="/roles"
              className="px-6 py-2 rounded-lg border border-slate-300 dark:border-slate-600 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all shadow-sm disabled:opacity-50"
            >
              {saving ? "Saving..." : "Update Role"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
