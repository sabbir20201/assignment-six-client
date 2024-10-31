"use client"
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import Link from 'next/link';
import React from 'react';

const DropDown = () => {
    // const items = [
    //     {
    //         key: "new",
    //         label: "New file",
    //     },
    //     {
    //         key: "copy",
    //         label: "Copy link",
    //     },
    //     {
    //         key: "edit",
    //         label: "Edit file",
    //     },
    //     {
    //         key: "delete",
    //         label: "Delete file",
    //     }
    // ];
 const items =[
        {
          label: "Home",
          href: "/",
          key: "new1",
        },
        {
          label: "create-recipe",
          href: "/dashboard/user/create-recipe",
          key: "new2",
        },
        {
          label: "dashboard",
          href: "/dashboard",
          key: "new3",
        },
      ]
    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                    >
                        Open Menu
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions" items={items}>
                    {(item) => (
                        <DropdownItem
                            key={item.key}
                            color={item.key === "delete" ? "danger" : "default"}
                            className={item.key === "delete" ? "text-danger" : ""}
                        >
                            {item.label}
                        </DropdownItem>
                    )}
               
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default DropDown;