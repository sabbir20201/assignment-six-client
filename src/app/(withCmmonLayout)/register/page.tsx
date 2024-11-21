"use client";
import { Button } from "@nextui-org/button";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useUserRegistration } from "@/src/hooks/auth.hook";
import loginValidationSchema from "@/src/schemas/login.schema";
import RecipeInput from "@/src/components/form/RecipeInput";
import RecipeForm from "@/src/components/form/RecipeForm";

export interface LoginFormInputs {
  email: string;
  password: string;
  userName: string;
  profileImage: string;
  role: string;
}
const RegisterPage = () => {
  const router = useRouter();
  const { mutate: handleUserRegistration } = useUserRegistration();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };

    handleUserRegistration(userData);
  };
  const handleNavigate = () => {
    router.push("/login");
  };

  return (
    <div className="">
      <div className="relative p-1 w-1/2 mx-auto rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
        <h1 className="bg-white rounded-lg p-2 text-center">Register here</h1>
      </div>
      <div className="w-1/2 flex-wrap mx-auto md:flex-nowrap gap-4">
        <RecipeForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={onSubmit}
        >
          <RecipeInput label="userName" name="userName" type="userName" />
          <RecipeInput label="Email" name="email" type="email" />
          <RecipeInput label="Password" name="password" type="password" />
          <RecipeInput label="profileImage" name="profileImage" type="text" />
          <Button className="bg-indigo-600 text-white" type="submit">
            Register
          </Button>
        </RecipeForm>
        <p>
          Already have an account? PLease{" "}
          <div
            className="text-indigo-800 font-bold cursor-pointer inline-block"
            onClick={() => handleNavigate()}
          >
            Login{" "}
          </div>{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
