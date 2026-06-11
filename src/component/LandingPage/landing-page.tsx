import {  deletePost, getDogImage, getPost, getUserData } from "@/lib/getPost";
import LandingPageClient from "./landing";
import LandingPageForm from "./landing-page-form";

interface LandingPageProps {
  id: number;
}

export default async function LandingPageComponent({
  id,
}: LandingPageProps) {
  const [post, user, dog] = await Promise.all([
    getPost(id),
    getUserData(id),
    getDogImage(),
    deletePost(id),
  ]);
  console.log(post, user, dog);

  return (
    <>
    <LandingPageClient
      post={post}
      user={user}
      dog={dog}
    />
    </>
  );
}