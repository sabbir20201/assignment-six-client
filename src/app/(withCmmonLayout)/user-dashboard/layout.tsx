import { Navbar } from "@/src/components/navbar";
import UserSidebar from "@/src/components/userSidebar/UserSidebar";
import React from "react";


const userLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <main className="flex max-w-6xl">
                <div className="w-1/5 border"><UserSidebar></UserSidebar></div>
                <div className="w-full border border-red-700"> {children}</div>
            </main>

        </div>
    );
};

export default userLayout;