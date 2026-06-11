import Hero from "@/component/PPR/Hero";
import LatestUsers from "@/component/PPR/LatestUsers";
import UsersSkeleton from "@/component/PPR/UsersSkeleton";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <>
      <Hero />

      <Suspense fallback={<UsersSkeleton />}>
        <LatestUsers />
      </Suspense>
    </>
  );
}
