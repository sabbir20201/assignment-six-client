"use client";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import React from "react";

const DropDown = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      key: "1",
    },
    {
      label: "create-recipe",
      href: "/admin-dashboard/create-recipe",
      key: "2",
    },
    {
      label: "dashboard",
      href: "/dashboard",
      key: "3",
    },
  ];

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Open Menu</Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Dynamic Actions" items={items}>
          {(item) => (
            <DropdownItem
              key={item.key}
              className={item.key === "delete" ? "text-danger" : ""}
              color={item.key === "delete" ? "danger" : "default"}
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
