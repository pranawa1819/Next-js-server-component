import { Navbar } from "@/components/Ecommerce/Navbar/Navbar";
import { FeatureFlagEnabled } from "@/components/LandingPage/feature-flag-enabled";
import LandingPageForm from "@/components/LandingPage/landing-page-form";
import SWR from "@/components/LandingPage/SWR";
import UseLayoutEffectDemo from "@/components/UseLayoutEffectExample/demo";
import UseDeferredValueExample from "@/components/UseLayoutEffectExample/useDeferredValueExample";

export default function AboutUsPage() {
  return (
    <>
        <Navbar />
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans text-black">
        Hello This is about us page
      </div>
      <SWR id={2} />
      {/* <Form/> */}
      <FeatureFlagEnabled featureFlag="ADVANCED_FLAG">
        <LandingPageForm />
      </FeatureFlagEnabled>
      <UseLayoutEffectDemo/>
      <UseDeferredValueExample />
    </>
  );
}
