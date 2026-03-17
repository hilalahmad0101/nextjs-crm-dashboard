"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", icon: "dashboard", label: "Dashboard" },
    { href: "/leads", icon: "target", label: "Leads" },
    { href: "/customers", icon: "group", label: "Customers" },
    { href: "/sales-pipeline", icon: "account_tree", label: "Sales Pipeline" },
    { href: "/deals", icon: "handshake", label: "Deals" },
    { href: "/tasks", icon: "check_box", label: "Tasks" },
    { href: "/calendar", icon: "calendar_today", label: "Calendar" },
    { href: "/messages", icon: "chat_bubble", label: "Messages" },
    { href: "/reports", icon: "bar_chart", label: "Reports" },
    { href: "/users", icon: "manage_accounts", label: "Users" },
    { href: "/roles", icon: "shield_person", label: "Roles & Permissions" },
  ];

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col h-full overflow-y-auto">
      <div className="p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary size-10 rounded-lg flex flex-shrink-0 items-center justify-center text-white">
            <span className="material-symbols-outlined">dataset</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight">
              CRM Admin
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">
              Enterprise Edition
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "sidebar-active text-primary"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
              pathname === "/settings"
                ? "sidebar-active text-primary"
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
