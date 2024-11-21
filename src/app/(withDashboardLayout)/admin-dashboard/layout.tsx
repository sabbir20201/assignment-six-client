import React from "react";

import DashboardHeader from "@/src/components/DashboardHeader";
import { DashboardNavbar } from "@/src/components/DashboardNavbar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <DashboardHeader />
        <div className="flex">
          <div className="border">
            <div className="lg:block hidden bg-yellow-500">
              <DashboardNavbar />
            </div>
          </div>
          <div className="w-full border border-red-700">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
