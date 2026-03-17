"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CustomerDetailsRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      router.replace(`/customers/${id}`);
    } else {
      router.replace("/customers");
    }
  }, [id, router]);

  return (
    <div className="flex-1 flex items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="text-center space-y-4">
        <div className="size-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
        <p className="text-slate-500 font-medium animate-pulse">
          Navigating to customer profile...
        </p>
      </div>
    </div>
  );
}
