"use client"
import { User } from '@nextui-org/user';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
import { useUser } from '@/src/context/user.provider';
import { logout } from '@/src/services/AuthService';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
const NavbarDropdown = () => {
    const router = useRouter()
    const { user, setLoading: userLoading } = useUser()
    const [isClient, setIsClient] = useState(false)
    // console.log('from navbar', user?.following.length);
    console.log('from navbar', user);
    const userName = user?.userName
    const role = user?.role
    const followers = user?.followers?.length
    const email = user?.email
    const following = user?.following.length
    useEffect(() => {
        setIsClient(true)
    }, [])

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
                        name={`${userName ? userName : ''}  ${email ? email : ''}`}
                        className='cursor-pointer'
                        description={`following: ${followers ? followers : '0'} | following: ${following ? following : '0'}`}
                        avatarProps={{
                            src: user?.profileImage
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
                        {user?.role === 'user' ? (<DropdownItem onClick={() => handleNavigation('/user-dashboard')} key="dashboard">User Dashboard</DropdownItem>)
                            : user?.role === 'admin' ? (<DropdownItem onClick={() => handleNavigation('/admin-dashboard')} key="admin-dashboard">Admin Dashboard</DropdownItem>)

                                : (
                                    <DropdownItem onClick={() => handleNavigation('/register')} key="register">Register</DropdownItem>
                                )
                        }
                    </DropdownSection>

                    <DropdownSection aria-label="Preferences" showDivider>
                        <DropdownItem key="quick_search" shortcut="⌘K">
                            Quick search
                        </DropdownItem>
                        <DropdownItem onClick={() => handleNavigation('/about')} key="about">About</DropdownItem>
                    </DropdownSection>

                    <DropdownSection aria-label="Help & Feedback">

                        <DropdownItem onClick={() => handleNavigation('/contact-us')} key="contact">Contact</DropdownItem>

                        {user ? (<DropdownItem onClick={handleLogout} key="logout">Log Out</DropdownItem>) : (<DropdownItem onClick={() => handleNavigation('/login')} key="logout">Login</DropdownItem>)}
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>

        </div>
    );
};

export default NavbarDropdown;