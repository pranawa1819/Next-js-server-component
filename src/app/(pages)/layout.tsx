"use client";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Navbar } from "@/component/Ecommerce/Navbar/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
      <>
        <Navbar />
        <NuqsAdapter>{children}</NuqsAdapter>
      </>
    </div>
  );
}
