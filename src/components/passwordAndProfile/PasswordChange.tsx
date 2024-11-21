"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import RecipeForm from "../form/RecipeForm";
import RecipeInput from "../form/RecipeInput";

import { useChangePassword } from "@/src/hooks/auth.hook";
import { UseUser } from "@/src/context/user.provider";

const PasswordChange = () => {
  const { user } = UseUser();
  const id = user?._id;
  const { mutate: handleChangePassword } = useChangePassword(id as string);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedPassword = {
      ...data,
    };

    handleChangePassword(updatedPassword, {
      onError: (error: any) => {
        toast.error(error?.message);
      },
    });
  };

  return (
    <div>
      <div className="lg:mx-10 md:mx-6 mx-3">
        <div className="mt-2 w-full relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
          <h1 className="bg-white text-xl font-bold text-center py-1">
            Change your password
          </h1>
        </div>
        <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4">
          <RecipeForm onSubmit={onSubmit}>
            <RecipeInput
              label="oldPassword"
              name="oldPassword"
              type="password"
            />
            <RecipeInput
              label="newPassword"
              name="newPassword"
              type="password"
            />

            <Button
              className="text-white bg-gradient-to-r bg-indigo-600"
              type="submit"
            >
              submit
            </Button>
          </RecipeForm>
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
