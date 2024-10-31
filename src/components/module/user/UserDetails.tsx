"use client"
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/dropdown";
// import {PlusIcon} from "./PlusIcon.jsx";
import { User } from "@nextui-org/user";
import { Button } from '@nextui-org/button';
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
const UserDetails = ({recipeUserData}: {recipeUserData: string}) => {
    console.log('from user detail', recipeUserData);
    
    return (
        <div>
            <section className=" bg-[#071e34] flex font-medium items-center justify-center py-5">

                <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">2d ago</span>
                        <span className="text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                            </svg>
                        </span>
                    </div>
                    <div className="mt-6 w-fit mx-auto">
                        <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" className="rounded-full w-28 " alt="profile picture" />
                    </div>

                    <div className="mt-8 ">
                        <h2 className="text-white font-bold text-2xl tracking-wide">{recipeUserData?.data?.email}</h2>
                    </div>
                    <p className="text-emerald-400 font-semibold mt-2.5" >
                        Active
                    </p>

                    <div className="h-1 w-full bg-black mt-8 rounded-full">
                        <div className="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
                    </div>
                    <div className="mt-3 text-white text-sm">
                        <span className="text-gray-400 font-semibold">Storage:</span>
                        <span>40%</span>
                    </div>

                </section>


            </section>
        </div>
        // <div className='py-5 flex justify-end'>

        //     <div>

        //             <DropdownMenu
        //                 aria-label="Custom item styles"
        //                 disabledKeys={["profile"]}
        //                 className="p-3"
        //                 itemClasses={{
        //                     base: [
        //                         "rounded-md",
        //                         "text-default-500",
        //                         "transition-opacity",
        //                         "data-[hover=true]:text-foreground",
        //                         "data-[hover=true]:bg-default-100",
        //                         "dark:data-[hover=true]:bg-default-50",
        //                         "data-[selectable=true]:focus:bg-default-50",
        //                         "data-[pressed=true]:opacity-70",
        //                         "data-[focus-visible=true]:ring-default-500",
        //                     ],
        //                 }}
        //             >
        //                 <DropdownSection aria-label="Profile & Actions" showDivider>
        //                     <DropdownItem
        //                         isReadOnly
        //                         key="profile"
        //                         className="h-14 gap-2"
        //                     // className="opacity-100"
        //                     >

        //                         <User
        //       name="Junior Garcia"
        //       description="@jrgarciadev"
        //       classNames={{
        //         name: "text-default-600",
        //         description: "text-default-500",
        //       }}
        //       avatarProps={{
        //         size: "sm",
        //         src: "https://avatars.githubusercontent.com/u/30373425?v=4",
        //       }}
        //     />
        //                     </DropdownItem>
        //                     <DropdownItem key="dashboard">
        //                         Dashboard
        //                     </DropdownItem>
        //                     <DropdownItem key="settings">Settings</DropdownItem>
        //                     {/* <DropdownItem
        //     key="new_project"
        //     endContent={<PlusIcon className="text-large" />}
        //   >
        //     New Project
        //   </DropdownItem> */}
        //                 </DropdownSection>

        //                 <DropdownSection aria-label="Preferences" showDivider>
        //                     <DropdownItem key="quick_search" shortcut="⌘K">
        //                         Quick search
        //                     </DropdownItem>
        //                     <DropdownItem
        //                         isReadOnly
        //                         key="theme"
        //                         className="cursor-default"
        //                         endContent={
        //                             <select
        //                                 className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
        //                                 id="theme"
        //                                 name="theme"
        //                             >
        //                                 <option>System</option>
        //                                 <option>Dark</option>
        //                                 <option>Light</option>
        //                             </select>
        //                         }
        //                     >
        //                         Theme
        //                     </DropdownItem>
        //                 </DropdownSection>

        //                 <DropdownSection aria-label="Help & Feedback">
        //                     <DropdownItem key="help_and_feedback">
        //                         Help & Feedback
        //                     </DropdownItem>
        //                     <DropdownItem key="logout">Log Out</DropdownItem>
        //                 </DropdownSection>
        //             </DropdownMenu>

        //     </div>
        // </div>
    );
};

export default UserDetails;