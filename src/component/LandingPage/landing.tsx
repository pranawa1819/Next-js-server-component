"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./button";
import { deletePost } from "@/lib/getPost";

interface LandingPageClientProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
  user: {
    name: string;
  };
  dog: {
    message: string;
  };
}

export default function LandingPageClient({
  post,
  user,
  dog,
}: LandingPageClientProps) {
  const [open, setOpen] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await deletePost(post.id);

      console.log("Post deleted");

      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div className="flex flex-col flex-1 gap-2 bg-zinc-50 font-sans text-black p-6">
      <h1>Hello This the demo data fetch</h1>

      {open && (
        <Image
          src={dog.message}
          alt="dog"
          width={300}
          height={300}
          className="rounded"
        />
      )}

      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
      <p>User Name: {user.name}</p>

      <Button
        buttonName="Show Dog"
        className="border p-4 cursor-pointer"
        onClick={() => setOpen(true)}
      />
       <Button
        buttonName="Delete Post"
        className="border p-4 cursor-pointer bg-red-500 text-white"
        onClick={handleDelete}
      />
    </div>
  );
}