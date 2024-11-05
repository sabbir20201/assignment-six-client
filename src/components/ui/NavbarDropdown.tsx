"use client"
import { User } from '@nextui-org/user';
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { useUser } from '@/src/context/user.provider';
import { logout } from '@/src/services/AuthService';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const NavbarDropdown = () => {
    const router = useRouter()
    const { user, setLoading:userLoading  } = useUser()


    const handleLogout = () => {
        logout()
        userLoading(true)
        router.push("/")
        toast.success("user logout success")
    }
    const handleNavigation = (pathName: string) => {
        router.push(pathName)
    }
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <User
                        name="Jane Doe"
                        className='cursor-pointer'
                        description={`${user?.email} role:${user?.role} `}
                        avatarProps={{
                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                        }}
                    />
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Custom item styles"
                    disabledKeys={["profile"]}
                    className="p-3"
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
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        {/* <DropdownItem isReadOnly key="profile" className="h-14 gap-2 opacity-100"> </DropdownItem> */}
                        <DropdownItem onClick={() => handleNavigation('/user-dashboard')} key="dashboard">User Dashboard</DropdownItem>
                        <DropdownItem key="settings">Settings</DropdownItem>
                    </DropdownSection>

                    <DropdownSection aria-label="Preferences" showDivider>
                        <DropdownItem key="quick_search" shortcut="⌘K">
                            Quick search
                        </DropdownItem>
                        <DropdownItem isReadOnly key="theme" className="cursor-default">
                            Theme
                        </DropdownItem>
                    </DropdownSection>

                    <DropdownSection aria-label="Help & Feedback">
                        <DropdownItem key="help_and_feedback">Help & Feedback </DropdownItem>
                        <DropdownItem onClick={handleLogout} key="logout">Log Out</DropdownItem>
                    </DropdownSection>
                </DropdownMenu>



            </Dropdown>

        </div>
    );
};

export default NavbarDropdown;