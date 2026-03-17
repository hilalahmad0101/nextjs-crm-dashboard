"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800 z-10 w-full shrink-0">
      <div className="flex items-center flex-1 max-w-xl">
        <label className="relative w-full block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            search
          </span>
          <input
            type="text"
            placeholder="Search for leads, deals, or tasks..."
            className="w-full bg-slate-100 dark:bg-slate-800 border-transparent rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-500 transition-all"
          />
        </label>
      </div>

      <div className="flex items-center gap-2 ml-4">
        <button className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
        </button>
        <button className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">mail</span>
        </button>
        <button className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
        {isPending ? (
          <div className="h-8 w-24 bg-slate-200 dark:bg-slate-800 animate-pulse rounded-full"></div>
        ) : session ? (
          <div className="relative group">
            <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <div className="size-8 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center shrink-0 overflow-hidden">
                {session.user.image ? (
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="size-full object-cover"
                  />
                ) : (
                  <div className="size-full flex items-center justify-center text-xs font-bold text-slate-500">
                    {session.user.name?.charAt(0)}
                  </div>
                )}
              </div>
              <span className="text-sm font-semibold hidden sm:inline-block">
                {session.user.name}
              </span>
              <span className="material-symbols-outlined text-slate-400">
                keyboard_arrow_down
              </span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="material-symbols-outlined text-base">
                  logout
                </span>
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="text-sm font-bold text-primary px-4 py-2 rounded-lg border border-primary hover:bg-primary/5 transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}
