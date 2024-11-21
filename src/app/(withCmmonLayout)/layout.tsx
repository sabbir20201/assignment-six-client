import React from "react";

import { Navbar } from "@/src/components/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-6xl">{children}</main>
    </div>
  );
};

export default layout;
