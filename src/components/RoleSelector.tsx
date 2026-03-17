"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { getRoles } from "@/app/actions/roles";

interface RoleSelectorProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function RoleSelector({
  value,
  onChange,
  error,
}: RoleSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [roles, setRoles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [selectedRoleName, setSelectedRoleName] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Fetch roles
  const fetchRolesList = useCallback(
    async (pageNum: number, searchVal: string, isNewSearch: boolean) => {
      if (loading) return;
      setLoading(true);
      try {
        const data = await getRoles({
          page: pageNum,
          pageSize: 20,
          search: searchVal,
        });
        if (isNewSearch) {
          setRoles(data.roles);
        } else {
          setRoles((prev) => [...prev, ...data.roles]);
        }
        setHasMore(data.roles.length === 20);

        // If we have a value but no name yet, try to find it
        if (value && !selectedRoleName) {
          const found = data.roles.find((r: any) => r.id === value);
          if (found) setSelectedRoleName(found.name);
        }
      } catch (err) {
        console.error("Failed to fetch roles:", err);
      } finally {
        setLoading(false);
      }
    },
    [loading, value, selectedRoleName],
  );

  // Initial fetch and search fetch
  useEffect(() => {
    const timer = setTimeout(() => {
      setPage(1);
      fetchRolesList(1, search, true);
    }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  // Infinite scroll
  const handleScroll = () => {
    if (!listRef.current || loading || !hasMore) return;
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    if (scrollHeight - scrollTop <= clientHeight + 50) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchRolesList(nextPage, search, false);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (role: any) => {
    onChange(role.id);
    setSelectedRoleName(role.name);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-1 block">
        Assign Role
      </label>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-slate-50 dark:bg-slate-800 border ${isOpen ? "border-primary ring-2 ring-primary/20" : "border-slate-200 dark:border-slate-700"} rounded-lg p-3 text-sm flex items-center justify-between cursor-pointer transition-all`}
      >
        <span
          className={
            selectedRoleName
              ? "text-slate-900 dark:text-white"
              : "text-slate-400"
          }
        >
          {selectedRoleName || "Select a role..."}
        </span>
        <span className="material-symbols-outlined text-slate-400">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-[60] mt-2 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
          {/* Search bar inside dropdown */}
          <div className="p-2 border-b border-slate-100 dark:border-slate-800">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                autoFocus
                type="text"
                placeholder="Search roles..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-xs focus:ring-1 focus:ring-primary outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* List */}
          <div
            ref={listRef}
            onScroll={handleScroll}
            className="max-h-60 overflow-y-auto"
          >
            {roles.length === 0 && !loading ? (
              <div className="p-4 text-center text-xs text-slate-500">
                No roles found
              </div>
            ) : (
              roles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => handleSelect(role)}
                  className={`px-4 py-2.5 text-sm cursor-pointer transition-colors flex items-center justify-between ${value === role.id ? "bg-primary/10 text-primary font-bold" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                >
                  <span>{role.name}</span>
                  {value === role.id && (
                    <span className="material-symbols-outlined text-sm">
                      check
                    </span>
                  )}
                </div>
              ))
            )}
            {loading && (
              <div className="p-3 text-center">
                <div className="inline-block size-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
