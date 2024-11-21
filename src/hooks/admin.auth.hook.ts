import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { registerAdmin } from "../services/AdminAuthServices";

export const useAdminRegistration = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["ADMIN_REGISTRATION"],
    mutationFn: async (userData) => await registerAdmin(userData),
    onSuccess: () => {
      toast.success("user register success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
