import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import {
  changePassword,
  loginUser,
  registerUser,
  updateUserInformation,
} from "../services/AuthService";

export const useUserRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_REGISTRATION"],
    mutationFn: async (userData) => await registerUser(userData),
    onSuccess: () => {
      toast.success("user register success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("user login success");
    },
    onError: (error: any) => {},
  });
};

// change user password
export const useChangePassword = (id: string) => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATED_PASSWORD"],
    mutationFn: async (updatedPassword) =>
      await changePassword(id, updatedPassword),
    onSuccess: (data) => {
      console.log(data);

      const successMessage =
        data?.message || "Change password updated successfully";

      if (data.success) {
        toast.success(successMessage);
      } else {
        toast.error("failed to changed password");
      }
    },
    onError: (error: any) => {
      console.log("from chabge password", error);

      const errorMessage = error?.message || error.success;

      toast.error(errorMessage);
    },
  });
};

export const useUpdatedUserInformation = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["UPDATE_USER_IN_FO"],
    mutationFn: async (updatedUserInfo) =>
      await updateUserInformation(updatedUserInfo),
    onSuccess: (data) => {
      const successMessage = data?.message || "user updated successfully";

      toast.success(successMessage);
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error.success;

      toast.error(errorMessage);
    },
  });
};
