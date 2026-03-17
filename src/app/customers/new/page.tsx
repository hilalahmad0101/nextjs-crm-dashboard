"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createCustomer } from "@/app/actions/customers";

export default function AddNewCustomerForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    industry: "",
    website: "",
    companySize: "",
    headquarters: "",
    jobTitle: "",
    email: "",
    phone: "",
    status: "Active",
    source: "Direct",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      // Remove headquarters from the payload and map it to address
      const { headquarters, ...rest } = formData;
      const result = await createCustomer({
        ...rest,
        address: headquarters,
      });
      if (result.success) {
        router.push(`/customers/${result.customer?.id}`);
      } else {
        alert(result.error || "Failed to create customer");
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8 bg-background-light dark:bg-background-dark">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium">
          <Link
            className="hover:text-primary transition-colors"
            href="/customers"
          >
            Customers
          </Link>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-slate-900 dark:text-slate-100 font-bold">
            Add New Customer
          </span>
        </nav>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
            Add New Customer
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Set up a full business profile with detailed contact and
            organization mapping.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section 1: Company Information */}
          <section className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center border border-blue-500/20">
                <span className="material-symbols-outlined text-2xl">
                  business
                </span>
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Organization Profile
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  Business identity and industry classification
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Company Name *
                </label>
                <input
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="e.g. Acme Corporation"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Industry
                </label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Website URL
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-bold">
                    https://
                  </span>
                  <input
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl pl-16 pr-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                    placeholder="www.example.com"
                    type="text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Scale
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                >
                  <option value="">Select Range</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Headquarters Address
                </label>
                <input
                  name="headquarters"
                  value={formData.headquarters}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="Full street address..."
                  type="text"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Primary Contact */}
          <section className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20">
                <span className="material-symbols-outlined text-2xl">
                  person
                </span>
              </div>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight">
                  Contact Person
                </h2>
                <p className="text-sm text-slate-500 font-medium">
                  Main decision maker for this account
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Full Name *
                </label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="e.g. John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Job Title
                </label>
                <input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="e.g. Account Executive"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Email Address *
                </label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="contact@company.com"
                  type="email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Phone Number
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/50 outline-none transition-all font-medium"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                />
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-4 pt-6">
            <Link
              href="/customers"
              className="px-8 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-bold"
            >
              Cancel
            </Link>
            <button
              className="px-10 py-3 rounded-xl bg-primary text-white text-sm font-black uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Configuring..." : "Add Customer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
