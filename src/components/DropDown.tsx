"use client"
import { Button } from '@nextui-org/button';
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown';
import Link from 'next/link';
import React from 'react';

const DropDown = () => {
     const items = [
   {
        label: "Home",
        href: "/",
        key: '1',
    
      },
      {
        label: "create-recipe",
        href: "/admin-dashboard/create-recipe",
        key: '2',
      },
      {
        label: "dashboard",
        href: "/dashboard",
        key: '3',
      },
    ];
//  const items =[
//         {
//           label: "Home",
//           href: "/",
      
//         },
//         {
//           label: "create-recipe",
//           href: "/dashboard/user/create-recipe",
      
//         },
//         {
//           label: "dashboard",
//           href: "/dashboard",
     
//         },
//       ]
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