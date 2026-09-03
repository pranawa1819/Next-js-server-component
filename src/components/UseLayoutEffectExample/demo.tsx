"use client"
import { Button } from "@/ui/button";
import { useEffect, useLayoutEffect, useState } from "react";

const userIds = [1, 2];
const UseLayoutEffectDemo = () => {
  const [userId, setUserId] = useState(userIds[0]);
  const [isAdmin, setIsAdmin] = useState(true);

  let now = performance.now();
  while (performance.now() - now < 200) {};

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0]);
  }, [userId]);

  const handleClick=()=>{
    const otherId = userIds.find((id)=> id != userId)!;
    setUserId(otherId);
  }
  return (
  <div className="flex flex-col gap-2 p-4">
    <p>userId: {userId}</p>
    <p>Admin: {isAdmin? 'true':'false'}</p>
    <Button className="w-100" variant='secondary' onClick={handleClick}>Change User</Button>

  </div>)
  ;
};

export default UseLayoutEffectDemo;
