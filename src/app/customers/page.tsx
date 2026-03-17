"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useTransition,
} from "react";
import Link from "next/link";
import {
  getCustomers,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomerStats,
} from "@/app/actions/customers";

const STATUS_COLORS: Record<string, string> = {
  Active:
    "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400",
  Priority: "bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400",
  Risk: "bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400",
  Inactive:
    "bg-slate-100 dark:bg-slate-500/10 text-slate-800 dark:text-slate-400",
};

export default function CustomerDirectory() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [stats, setStats] = useState<any>({
    totalCount: 0,
    activeCount: 0,
    newThisMonth: 0,
    totalLtv: 0,
    avgDealSize: 0,
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState<any>(null);
  const [isPending, startTransition] = useTransition();

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    status: "Active",
    source: "",
  });

  const fetchData = useCallback(
    async (pageNum: number, searchVal: string, isNewSearch: boolean) => {
      if (isNewSearch) setLoading(true);
      else setLoadingMore(true);

      try {
        const data = await getCustomers({
          page: pageNum,
          search: searchVal,
          pageSize: 15,
        });

        if (isNewSearch) {
          setCustomers(data.customers);
        } else {
          setCustomers((prev) => [...prev, ...data.customers]);
        }

        setTotalPages(data.totalPages);

        // Fetch stats only on initial load or search refresh
        if (isNewSearch) {
          const statsData = await getCustomerStats();
          setStats(statsData);
        }
      } catch (error) {
        console.error("Failed to fetch customers:", error);
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
      fetchData(1, search, true);
    }, 400);
    return () => clearTimeout(timer);
  }, [search, fetchData]);

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

  const handleOpenModal = (customer: any = null) => {
    if (customer) {
      setEditingCustomer(customer);
      setFormData({
        name: customer.name || "",
        email: customer.email || "",
        phone: customer.phone || "",
        company: customer.company || "",
        address: customer.address || "",
        status: customer.status || "Active",
        source: customer.source || "",
      });
    } else {
      setEditingCustomer(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        status: "Active",
        source: "",
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      let result;
      if (editingCustomer) {
        result = await updateCustomer(editingCustomer.id, formData);
      } else {
        result = await createCustomer(formData);
      }

      if (result.success) {
        setShowModal(false);
        fetchData(1, search, true);
      } else {
        alert(result.error);
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this customer?")) {
      const result = await deleteCustomer(id);
      if (result.success) {
        fetchData(1, search, true);
      } else {
        alert(result.error);
      }
    }
  };

  return (
    <div
      id="customers-scroll-container"
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto p-6 space-y-6 bg-background-light dark:bg-background-dark"
    >
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Customer Directory
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              Manage your relationship with {stats.totalCount.toLocaleString()}{" "}
              active clients.
            </p>
          </div>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-[20px]">add</span>
            Add Customer
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[32px]">
                stars
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                Total LTV
              </p>
              <h3 className="text-xl font-black dark:text-white">
                ${stats.totalLtv.toLocaleString()}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <span className="material-symbols-outlined text-[32px]">
                group_add
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                New Clients
              </p>
              <h3 className="text-xl font-black dark:text-white">
                +{stats.newThisMonth} This Month
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
            <div className="size-14 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
              <span className="material-symbols-outlined text-[32px]">
                analytics
              </span>
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                Avg Deal Size
              </p>
              <h3 className="text-xl font-black dark:text-white">
                ${Math.round(stats.avgDealSize).toLocaleString()}
              </h3>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/20">
                <div className="flex-1 max-w-md relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search by name, email or company..."
                    className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900/80 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Company</th>
                      <th className="px-6 py-4 text-right">LTV</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-12 text-center text-slate-400"
                        >
                          Loading customers...
                        </td>
                      </tr>
                    ) : customers.length === 0 ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-12 text-center text-slate-400"
                        >
                          No customers found.
                        </td>
                      </tr>
                    ) : (
                      customers.map((customer) => (
                        <tr
                          key={customer.id}
                          className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group cursor-pointer"
                        >
                          <td className="px-6 py-4">
                            <Link
                              href={`/customers/${customer.id}`}
                              className="flex items-center gap-3"
                            >
                              <div className="size-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">
                                {customer.name.charAt(0)}
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                                  {customer.name}
                                </span>
                                <span className="text-xs text-slate-500">
                                  {customer.email}
                                </span>
                              </div>
                            </Link>
                          </td>
                          <td className="px-6 py-4">
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {customer.company || "Individual"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">
                              ${customer.ltv.toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${STATUS_COLORS[customer.status] || STATUS_COLORS.Active}`}
                            >
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Link
                                href={`/customers/${customer.id}`}
                                className="p-2 text-slate-400 hover:text-primary"
                              >
                                <span className="material-symbols-outlined text-sm">
                                  visibility
                                </span>
                              </Link>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleOpenModal(customer);
                                }}
                                className="p-2 text-slate-400 hover:text-primary"
                              >
                                <span className="material-symbols-outlined text-sm">
                                  edit
                                </span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleDelete(customer.id);
                                }}
                                className="p-2 text-slate-400 hover:text-red-500"
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
                <div className="p-4 text-center">
                  <div className="inline-block size-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Recent Activity Mockup or Real if available */}
            <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-white mb-6">
                Recent Activity
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 relative">
                  <div className="absolute left-[13px] top-6 bottom-[-24px] w-0.5 bg-slate-100 dark:bg-slate-800"></div>
                  <div className="size-7 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 flex-shrink-0 z-10">
                    <span className="material-symbols-outlined text-[16px]">
                      person_add
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Customer Sync
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Database refreshed successfully
                    </p>
                    <span className="text-[10px] text-slate-400 mt-2 block">
                      Just now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRUD Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden scale-in">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="text-xl font-bold">
                {editingCustomer ? "Edit Customer" : "Add New Customer"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Status
                  </label>
                  <select
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="Active">Active</option>
                    <option value="Priority">Priority</option>
                    <option value="Risk">Risk</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-500 uppercase">
                    Address
                  </label>
                  <textarea
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/50 outline-none transition-all h-20 resize-none"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData({ ...formData, address: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex-1 px-4 py-3 rounded-xl bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                  {isPending
                    ? "Processing..."
                    : editingCustomer
                      ? "Update Customer"
                      : "Create Customer"}
                </button>
              </div>

              {!editingCustomer && (
                <div className="mt-4 text-center">
                  <Link
                    href="/customers/new"
                    className="text-xs font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    Switch to detailed creation form
                  </Link>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
