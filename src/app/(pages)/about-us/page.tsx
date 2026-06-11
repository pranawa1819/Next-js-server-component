import { FeatureFlagEnabled } from "@/component/LandingPage/feature-flag-enabled";
import LandingPageForm from "@/component/LandingPage/landing-page-form";
import SWR from "@/component/LandingPage/SWR";

export default function AboutUsPage() {
  return (
    <>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans text-black">
        Hello This is about us page
      </div>
      <SWR id={2} />
      {/* <Form/> */}
      <FeatureFlagEnabled featureFlag="ADVANCED_FLAG">
        <LandingPageForm />
      </FeatureFlagEnabled>
    </>
  );
}
