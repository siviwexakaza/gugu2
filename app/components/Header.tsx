"use client";
import { User } from "@prisma/client";
import React from "react";
import { Menu } from "@headlessui/react";
type Props = {
  user: User;
};
function Header({ user }: Props) {
  return (
    <div className="bg-[#231F20] w-full h-24 flex flex-row justify-between">
      <picture>
        <img className="w-44 h-24" src="/images/logo.PNG" />
      </picture>
      <div className="flex flex-row justify-around items-center px-10">
        <p className="text-white font-semibold text-lg">
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    </div>
  );
}

export default Header;
