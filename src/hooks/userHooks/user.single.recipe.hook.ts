import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  deleteSingleRecipeByAdminId,
  deleteSingleRecipeByUserId,
  deleteSingleUserByAdminId,
  getAllRecipe,
  getAllUser,
  getSingleRecipeByUserId,
} from "@/src/services/UserServices/userServices";

export const useGetSingleUserRecipes = (id: string | any) => {
  return useQuery({
    queryKey: ["SINGLE_RECIPE", id],
    queryFn: () => getSingleRecipeByUserId(id),
  });
};

export const useDeleteSingleRecipe = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_SINGLE_RECIPE"],
    mutationFn: async ({ id }) => await deleteSingleRecipeByUserId(id),
    onSuccess: (data) => {
      const successMessage =
        data?.message || "Single Recipe deleted successfully";

      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: ["SINGLE_RECIPE"] });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error.message;

      toast.error(errorMessage);
    },
  });
};

export const useGetAllRecipes = () => {
  return useQuery({
    queryKey: ["ALL_RECIPE"],
    queryFn: () => getAllRecipe(),
  });
};

export const useDeleteRecipeByAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_SINGLE_RECIPE_BY_ADMIN"],
    mutationFn: async ({ id }) => await deleteSingleRecipeByAdminId(id),
    onSuccess: (data) => {
      const successMessage =
        data?.message || "Single Recipe deleted successfully";

      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: ["ALL_RECIPE"] });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error.message;

      toast.error(errorMessage);
    },
  });
};
export const useDeleteUserByAdmin = () => {
  const queryClient = useQueryClient();

  return useMutation<any, Error, { id: string }>({
    mutationKey: ["DELETE_SINGLE_RECIPE_BY_ADMIN"],
    mutationFn: async ({ id }) => await deleteSingleUserByAdminId(id),
    onSuccess: (data) => {
      const successMessage =
        data?.message || "Single Recipe deleted successfully";

      toast.success(successMessage);
      queryClient.invalidateQueries({ queryKey: ["ALL_USER"] });
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error.message;

      toast.error(errorMessage);
    },
  });
};

export const useGetAllUser = () => {
  return useQuery({
    queryKey: ["ALL_USER"],
    queryFn: () => getAllUser(),
  });
};
