"use client";
import { User } from "@nextui-org/user";
import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { UseUser } from "@/src/context/user.provider";
import { logout } from "@/src/services/AuthService";
const NavbarDropdown = () => {
  const router = useRouter();
  const { user, setLoading: userLoading } = UseUser();
  const [isClient, setIsClient] = useState(false);

  // console.log('from navbar', user?.following.length);
  console.log("from navbar", user);
  const userName = user?.userName;
  const role = user?.role;
  const followers = user?.followers?.length;
  const email = user?.email;
  const following = user?.following?.length;

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    logout();
    userLoading(true);
    router.push("/");
    toast.success("user logout success");
  };
  const handleNavigation = (pathName: string) => {
    router.push(pathName);
  };

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <User
            avatarProps={{
              src: user?.profileImage,
            }}
            className="cursor-pointer"
            description={`followers: ${followers ? followers : "0"} | following: ${following ? following : "0"}`}
            name={`${userName ? userName : ""}  ${email ? email : ""}`}
          />
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Custom item styles"
          className="p-3"
          disabledKeys={["profile"]}
          itemClasses={{
            base: [
              "rounded-md",
              "text-default-700",
              "transition-opacity",
              "data-[hover=true]:text-foreground",
              "data-[hover=true]:bg-default-100",
              "dark:data-[hover=true]:bg-default-50",
              "data-[selectable=true]:focus:bg-default-50",
              "data-[pressed=true]:opacity-70",
              "data-[focus-visible=true]:ring-default-500",
            ],
          }}
        >
          <DropdownSection showDivider aria-label="Profile & Actions">
            {user?.role === "user" ? (
              <DropdownItem
                key="dashboard"
                onClick={() => handleNavigation("/user-dashboard")}
              >
                User Dashboard
              </DropdownItem>
            ) : user?.role === "admin" ? (
              <DropdownItem
                key="admin-dashboard"
                onClick={() => handleNavigation("/admin-dashboard")}
              >
                Admin Dashboard
              </DropdownItem>
            ) : (
              <DropdownItem
                key="register"
                onClick={() => handleNavigation("/register")}
              >
                Register
              </DropdownItem>
            )}
          </DropdownSection>

          <DropdownSection showDivider aria-label="Preferences">
            <DropdownItem key="quick_search" shortcut="⌘K">
              Quick search
            </DropdownItem>
            <DropdownItem
              key="about"
              onClick={() => handleNavigation("/about")}
            >
              About
            </DropdownItem>
          </DropdownSection>

          <DropdownSection aria-label="Help & Feedback">
            <DropdownItem
              key="contact"
              onClick={() => handleNavigation("/contact-us")}
            >
              Contact
            </DropdownItem>

            {user ? (
              <DropdownItem key="logout" onClick={handleLogout}>
                Log Out
              </DropdownItem>
            ) : (
              <DropdownItem
                key="logout"
                onClick={() => handleNavigation("/login")}
              >
                Login
              </DropdownItem>
            )}
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default NavbarDropdown;
