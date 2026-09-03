import ButtonAnimation from "@/components/Animation/buttonAnimation";
import Demo from "@/components/Animation/scrollAnimation";
import { Navbar } from "@/components/Ecommerce/Navbar/Navbar";

export default function ContactPage() {
  return (
    <>
      {/* <Hero />

      <Suspense fallback={<UsersSkeleton />}>
        <LatestUsers />
      </Suspense> */}
      {/* <Animation/> */}
      <Navbar />
      <ButtonAnimation/>
      <Demo/>

    </>
  );
}
