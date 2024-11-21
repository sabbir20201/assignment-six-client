"use client";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import loginValidationSchema from "@/src/schemas/login.schema";
import RecipeInput from "@/src/components/form/RecipeInput";
import RecipeForm from "@/src/components/form/RecipeForm";
import { useAdminRegistration } from "@/src/hooks/admin.auth.hook";
export interface LoginFormInputs {
  email: string;
  password: string;
  userName: string;
  profileImage: string;
  role: string;
}

const CreateAdminPage = () => {
  const { mutate: handleAdminRegistration } = useAdminRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const adminData = {
      ...data,
    };

    console.log("data from client side register ", adminData);
    handleAdminRegistration(adminData);
  };

  return (
    <div>
      <div>
        Admin Register Page
        <div className="flex lg:w-1/2 flex-wrap md:flex-nowrap gap-4">
          <RecipeForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <RecipeInput label="userName" name="userName" type="userName" />
            <RecipeInput label="Email" name="email" type="email" />
            <RecipeInput label="Password" name="password" type="password" />
            <RecipeInput label="profileImage" name="profileImage" type="text" />
            <Button type="submit">Create a admin</Button>
          </RecipeForm>
        </div>
      </div>
    </div>
  );
};

export default CreateAdminPage;
