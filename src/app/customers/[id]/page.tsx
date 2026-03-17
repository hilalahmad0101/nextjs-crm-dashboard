import React from "react";
import Link from "next/link";
import { getCustomer } from "@/app/actions/customers";
import { notFound } from "next/navigation";

const STATUS_COLORS: Record<string, string> = {
  Active:
    "bg-emerald-100 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400",
  Priority: "bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400",
  Risk: "bg-amber-100 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400",
  Inactive:
    "bg-slate-100 dark:bg-slate-500/10 text-slate-800 dark:text-slate-400",
};

export default async function CustomerDetailsView({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await getCustomer(id);

  if (!customer) {
    notFound();
  }

  const totalLtv = customer.deals.reduce((sum, deal) => sum + deal.value, 0);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
          <Link
            className="hover:text-primary transition-colors"
            href="/customers"
          >
            Customers
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-medium">
            {customer.name}
          </span>
        </nav>

        {/* Customer Profile Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="size-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl font-black shadow-sm">
              {customer.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  {customer.name}
                </h2>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${STATUS_COLORS[customer.status]}`}
                >
                  {customer.status}
                </span>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-2 text-sm font-medium">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                {customer.address || "No address provided"} • Joined{" "}
                {new Date(customer.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 transition-all shadow-sm">
              Edit Profile
            </button>
            <button className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Create Deal
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-primary/20 group">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
              Lifetime Value
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                ${totalLtv.toLocaleString()}
              </h3>
              <span className="material-symbols-outlined text-emerald-500 text-xl">
                trending_up
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-primary/20 group">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
              Existing Deals
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                {customer.deals.length}
              </h3>
              <span className="material-symbols-outlined text-blue-500 text-xl">
                handshake
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-primary/20 group">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
              Industry
            </p>
            <div className="flex items-end justify-between mt-2 overflow-hidden">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                {customer.industry || "N/A"}
              </h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all hover:border-primary/20 group">
            <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
              Company Scale
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {customer.companySize || "N/A"}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Info & Contacts */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Profile Information
                </h4>
                <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                  Edit
                </button>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Full Name / Contact
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.name}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Job Title
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.jobTitle || "Not Specified"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Email Address
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.email || "No email"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Phone Number
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.phone || "No phone"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Company
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.company || "Individual"}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Website
                  </p>
                  <a
                    href={`https://${customer.website}`}
                    target="_blank"
                    className="text-sm font-semibold text-primary mt-1 hover:underline"
                  >
                    {customer.website || "N/A"}
                  </a>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Address
                  </p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-1">
                    {customer.address || "N/A"}
                  </p>
                </div>
              </div>
            </div>

            {/* Deals Section */}
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/20">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Active Deals
                </h4>
                <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                  View All
                </button>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {customer.deals.length === 0 ? (
                  <div className="p-12 text-center">
                    <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300 mx-auto mb-4">
                      <span className="material-symbols-outlined text-4xl">
                        folder_off
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium">
                      No deals recorded for this customer yet.
                    </p>
                    <button className="mt-4 text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                      Create a Deal
                    </button>
                  </div>
                ) : (
                  customer.deals.map((deal) => (
                    <div
                      key={deal.id}
                      className="p-6 flex items-center justify-between hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                          <span className="material-symbols-outlined text-xl">
                            payments
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                            {deal.title}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {deal.status}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-slate-900 dark:text-white">
                          ${deal.value.toLocaleString()}
                        </p>
                        <p className="text-[10px] text-slate-400 uppercase mt-1">
                          Updated{" "}
                          {new Date(deal.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm h-full">
              <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
                <h4 className="font-black text-slate-900 dark:text-white uppercase tracking-tight">
                  Timeline Activity
                </h4>
              </div>
              <div className="p-8 relative">
                <div className="absolute left-11 top-8 bottom-8 w-px bg-slate-100 dark:bg-slate-800"></div>
                <div className="space-y-10">
                  <div className="relative flex gap-5">
                    <div className="z-10 size-8 rounded-full bg-primary flex items-center justify-center ring-4 ring-white dark:ring-slate-900 border border-white/20">
                      <span className="material-symbols-outlined text-white text-[16px]">
                        person_add
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        Customer Profile Created
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        Initial account setup completed via CRM.
                      </p>
                      <p className="text-[10px] text-slate-400 uppercase font-black mt-3 tracking-widest">
                        {new Date(customer.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-10 py-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-all text-center bg-slate-50/50 dark:bg-background-dark/30 rounded-xl border border-slate-100 dark:border-slate-800">
                  Record New Activity
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
