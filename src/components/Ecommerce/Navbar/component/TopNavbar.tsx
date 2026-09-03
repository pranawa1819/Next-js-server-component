"use client";

import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import Link from "next/link";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaUserLarge } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import { DropDown } from "../../DropDown/DropDown";
import { HiHeart } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { NavRoutes } from "./NavbarRoutes";

export const TopNav = () => {
  const [searchData, setSearchData] = useState("");
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full bg-white flex justify-between px-5 lg:px-10 items-center py-5 border-b ">
      <NavRoutes />

      <div className="gap-4 items-center hidden md:flex">
        <div className="relative w-100 hidden lg:flex ">
          <Input
            type="text"
            value={searchData}
            placeholder="What are you looking for....."
            onChange={(e) => setSearchData(e.target.value)}
            aria-label="Product name"
            className=" h-12 rounded-3xl pr-24 hover:cursor-text text-black"
          />
          <Button aria-label="Search">
            <BiSearch
              className="rounded-3xl absolute right-2 top-1/2 -translate-y-1/2 mr-3 cursor-pointer"
              size={16}
              color="black"
            />
          </Button>
        </div>
        <HiHeart size={20} className="text-black cursor-pointer" />

        <DropDown
          open={profileOpen}
          onOpenChange={setProfileOpen}
          side="bottom"
          align="end"
          sideOffset={25}
          alignOffset={-10}
          className="p-0"
          trigger={
            <FaUserLarge size={19} className="text-black cursor-pointer" />
          }
        >
          <div className="w-full flex flex-col z-90 bg-white">
            <div
              className="flex items-center gap-2 text-sm p-2 text-black cursor-pointer border-b "
              onClick={() => {
                setProfileOpen(false);
                router.push("/profile");
              }}
            >
              <FaUserLarge size={16} className="text-black" />
              My Profile
            </div>

            <button className="flex items-center gap-2 text-sm rounded p-2 cursor-pointer text-black">
              <IoLogOut size={16} className="text-black" />
              Logout
            </button>
          </div>
        </DropDown>

        <Link href="/login">
          <Button className="rounded-sm p-2 bg-[#4ea674] cursor-pointer">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};
