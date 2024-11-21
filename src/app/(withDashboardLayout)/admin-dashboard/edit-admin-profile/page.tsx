import React from "react";

import PasswordChange from "@/src/components/passwordAndProfile/PasswordChange";
import ProfileCustomization from "@/src/components/passwordAndProfile/ProfileCustomization";

const EditAdminPage = () => {
  return (
    <div className="lg:w-1/2">
      <PasswordChange />
      <ProfileCustomization />
    </div>
  );
};

export default EditAdminPage;
