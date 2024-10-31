import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
// import {PlusIcon} from "./PlusIcon.jsx";
import {User} from "@nextui-org/user";
import { Button } from '@nextui-org/button';
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
const DashboardHeader = () => {
    return (
        <div className='bg-cyan-700 text-white py-5 flex justify-end'>

            <div>
                <Dropdown
                    showArrow
                    radius="sm"
                    classNames={{
                        base: "before:bg-default-200", // change arrow background
                        content: "p-0 border-small border-divider bg-background",
                    }}
                >
                    <DropdownTrigger className='bg-amber-500 cursor-pointer rounded-2xl'>
                        <div className="flex gap-5">
                            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600"> sabbir</h4>
                                <h5 className="text-small tracking-tight text-default-400">sabbir2gmail.com</h5>
                            </div>
                        </div>
                        {/* <Button variant="ghost" disableRipple>Open Menu</Button> */}
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Custom item styles"
                        disabledKeys={["profile"]}
                        className="p-3"
                        itemClasses={{
                            base: [
                                "rounded-md",
                                "text-default-500",
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
                            <DropdownItem
                                isReadOnly
                                key="profile"
                                className="h-14 gap-2"
                            // className="opacity-100"
                            >

                                <User
              name="Junior Garcia"
              description="@jrgarciadev"
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              avatarProps={{
                size: "sm",
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
              }}
            />
                            </DropdownItem>
                            <DropdownItem key="dashboard">
                                Dashboard
                            </DropdownItem>
                            <DropdownItem key="settings">Settings</DropdownItem>
                            {/* <DropdownItem
            key="new_project"
            endContent={<PlusIcon className="text-large" />}
          >
            New Project
          </DropdownItem> */}
                        </DropdownSection>

                        <DropdownSection aria-label="Preferences" showDivider>
                            <DropdownItem key="quick_search" shortcut="⌘K">
                                Quick search
                            </DropdownItem>
                            <DropdownItem
                                isReadOnly
                                key="theme"
                                className="cursor-default"
                                endContent={
                                    <select
                                        className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                                        id="theme"
                                        name="theme"
                                    >
                                        <option>System</option>
                                        <option>Dark</option>
                                        <option>Light</option>
                                    </select>
                                }
                            >
                                Theme
                            </DropdownItem>
                        </DropdownSection>

                        <DropdownSection aria-label="Help & Feedback">
                            <DropdownItem key="help_and_feedback">
                                Help & Feedback
                            </DropdownItem>
                            <DropdownItem key="logout">Log Out</DropdownItem>
                        </DropdownSection>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
};

export default DashboardHeader;