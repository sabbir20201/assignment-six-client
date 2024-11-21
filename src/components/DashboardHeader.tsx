"use client";
import React from "react";

import DropDown from "./DropDown";
import NavbarDropdown from "./ui/NavbarDropdown";
const DashboardHeader = () => {
  return (
    <div className="bg-cyan-700 text-white py-5 flex justify-between">
      <div className="lg:hidden sm:block">
        <DropDown />
      </div>
      <div>
        <NavbarDropdown />
      </div>
    </div>
  );
};

export default DashboardHeader;
