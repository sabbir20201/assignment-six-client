"use client";
import { Button } from "@nextui-org/button";
import React, { useEffect } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/ui/Loading";
import { UseUser } from "@/src/context/user.provider";
import RecipeInput from "@/src/components/form/RecipeInput";
import RecipeForm from "@/src/components/form/RecipeForm";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { setLoading: userLoading } = UseUser();
  const redirect = searchParams.get("redirect");

  console.log(redirect);

  const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const userData = {
      ...data,
    };

    handleUserLogin(userData, {
      onError: () => {
        const errorMessage = "Login failed";

        toast.error(errorMessage);
      },
    });
    userLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    }
  }, [isPending, isSuccess]);

  useEffect(() => {
    if (!isPending && isSuccess) {
      router.push(redirect || "/");
    }
  }, [isPending, isSuccess, redirect, router]);

  return (
    <>
      {isPending && <Loading />}
      <div className="relative p-1 mx-auto w-1/2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
        <h1 className="bg-white rounded-lg p-2 text-center">Login here</h1>
      </div>
      <div className="mx-auto w-1/2 flex-wrap md:flex-nowrap gap-4">
        <RecipeForm onSubmit={onSubmit}>
          <RecipeInput label="Email" name="email" type="email" />
          <RecipeInput label="Password" name="password" type="password" />
          <Button className="bg-indigo-600 text-white" type="submit">
            Login
          </Button>
        </RecipeForm>
        <p>
          Do not have an account? PLease{" "}
          <div
            className="text-indigo-800 font-bold cursor-pointer inline-block"
            onClick={() => router.push("/register")}
          >
            Register{" "}
          </div>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
