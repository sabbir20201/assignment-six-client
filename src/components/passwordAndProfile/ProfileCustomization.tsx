"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";

import RecipeForm from "../form/RecipeForm";
import RecipeInput from "../form/RecipeInput";

import { useUpdatedUserInformation } from "@/src/hooks/auth.hook";
import { UseUser } from "@/src/context/user.provider";

const ProfileCustomization = () => {
  const { user } = UseUser();

  const { mutate: handleUpdateUserInfo } = useUpdatedUserInformation();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const updatedUserInfo = {
      ...data,
    };

    console.log("updated Password =>", updatedUserInfo);
    handleUpdateUserInfo(updatedUserInfo);
    console.log(data);
  };

  return (
    <div>
      <div className="lg:mx-10 md:mx-6 mx-3">
        <div className="mt-2 w-1/2 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
          <h1 className="bg-white text-xl font-bold text-center py-1">
            Update your Info
          </h1>
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <RecipeForm onSubmit={onSubmit}>
            <RecipeInput
              label="type a new userName"
              name="userName"
              type="userName"
            />
            <RecipeInput
              label="insert a new profileImage link"
              name="profileImage"
              type="text"
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

export default ProfileCustomization;
