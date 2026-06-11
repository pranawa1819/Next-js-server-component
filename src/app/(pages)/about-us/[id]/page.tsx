import LandingPageComponent from "@/component/LandingPage/landing-page";
import SWRDemo from "@/component/LandingPage/SWR";
interface PageProps {
  params: {
    id: number;
  };
}
// Because in Next.js 15, params itself is now a Promise.
// So before using id, you must first resolve that Promise.
//

export default async function AboutUsPageWithID({params}:PageProps){
    const { id } = await params; //1.Wait for params Promise to finish 2.Extract id from the resolved object
  return (
    <>
      <LandingPageComponent id={id} />
      {/* <SWRDemo id={id}/> */}
    </>
  );
};
