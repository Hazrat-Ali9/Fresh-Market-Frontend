"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";

import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";

const Sidebar = () => {
  const menus = [
    { name: "All Products", path: "/dashboard/all-products", icon: MdOutlineDashboard },
    { name: "Home", path: "/", icon: FaHome },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] h-screen sticky top-0 left-0  ${
          open ? "md:w-72 w-48" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-3 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link href={menu?.path} key={i}>
              <span
                className={` ${
                  menu && "mt-3"
                } group flex items-center   gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h6
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h6>
                <h6
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h6>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
