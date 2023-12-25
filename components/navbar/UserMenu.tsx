"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItems from "./MenuItems";
const UserMenu = () => {
  const [isopen, setIsOpen] = useState(false);

  const onToggle = useCallback(() => {
    setIsOpen((value) => {
      return !value;
    });
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-9">
        <div className="text-white hidden md:block rounded-lg px-2 py-2 transition hover:bg-neutral-800 cursor-pointer">
          <FaShoppingCart size={24}/>
        </div>
        <div
          onClick={onToggle}
          className="flex flex-row items-center gap-3 rounded-full border-[1px] p-4 md:py-1 md:px-2 transition cursor-pointer bg-white"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
        {isopen && (
          <div className="absolute rounded-xl shadow-sm w-full md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm ">
            <div className="flex flex-col cursor-pointer">
              <MenuItems label="Login" onClick={() => {}} />
              <MenuItems label="Sign up" onClick={() => {}} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
