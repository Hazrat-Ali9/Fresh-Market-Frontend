import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full md:px-6 px-3 h-[200vh]">{children}</div>
      </div>
    </>
  );
};

export default CommonLayout;
