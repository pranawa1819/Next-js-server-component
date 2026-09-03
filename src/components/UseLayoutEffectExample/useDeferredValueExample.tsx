"use client";
import { useDeferredValue, useEffect, useState } from "react";
import SlowList from "./SlowList";

const UseDeferredValueExample = () => {
  const [query, setQuery] = useState("test");
  const deferredQuery = useDeferredValue(query);

  useEffect(()=>{
    console.log("query", query);
    console.log("deferredQuery", deferredQuery);    
    console.log("---End of the query---")
  }, [query, deferredQuery])

  return (
    <div className="flex flex-col gap-2 p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search.."
        className="w-100 h-8 border-2 border-black px-2 rounded-md text-black"
      />
      <SlowList text={deferredQuery}/>
    </div>
  );
};

export default UseDeferredValueExample;
