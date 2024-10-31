import { Navbar } from "@/src/components/navbar";
import UserSidebar from "@/src/components/userSidebar/UserSidebar";
import React from "react";


const userLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <main className="flex max-w-6xl">
                <div className="max-w-xs border"><UserSidebar></UserSidebar></div>
                <div> {children}</div>
            </main>

        </div>
    );
};

export default userLayout;