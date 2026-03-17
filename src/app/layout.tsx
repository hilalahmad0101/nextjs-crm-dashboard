import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import AppLayout from "@/components/AppLayout";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "Enterprise Edition CRM Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-slate-100">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark font-display antialiased">
        <StoreProvider>
          <AppLayout>{children}</AppLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
