"use client";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Navbar } from "@/components/Ecommerce/Navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <>
        <NuqsAdapter>{children}</NuqsAdapter>
      </>
    </div>
  );
}
