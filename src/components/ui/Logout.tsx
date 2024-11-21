"use client";
import { Button } from "@nextui-org/button";
import React from "react";

import { logout } from "@/src/services/AuthService";
import { UseUser } from "@/src/context/user.provider";

const Logout = () => {
  const { user } = UseUser();

  console.log("user data", user);

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <Button onClick={handleLogout}>
        {user?.email ? user.email : ""}
        <p>logout </p>
      </Button>
    </div>
  );
};

export default Logout;
