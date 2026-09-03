"use client";

import useSWR from "swr";

// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

interface SWRDemoProps {
  id: number;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function SWRDemo({id}:SWRDemoProps) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    fetcher,
  );

  if (error) {
    return <div>Failed to load</div>;
  }
  console.log(data)
  return (
    <div className="flex flex-col flex-1 gap-2 bg-zinc-50 font-sans text-black p-6">
      <h1 className="text-2xl font-bold">
        Hello This the demo data useSWR fetch
      </h1>

      {/* {data?.map((item) => (
        <div key={item.id} className="p-3 bg-white rounded shadow">
          {item.title}
        </div>
      ))} */}
      <div>Title: {data?.title}</div>
      <div>Body: {data?.body}</div>

    </div>
  );
}
