import React from "react";

import UserSidebar from "@/src/components/userSidebar/UserSidebar";

const userLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main className="flex max-w-6xl">
        <div className="w-1/5 border">
          <UserSidebar />
        </div>
        <div className="w-full border-2 border-indigo-700"> {children}</div>
      </main>
    </div>
  );
};

export default userLayout;
