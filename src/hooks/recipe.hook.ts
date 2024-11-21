import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import { postRecipe } from "../services/RecipeServices";

// post a recipe
export const usePostRecipe = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["POST_RECIPE"],
    mutationFn: async (recipePostData) => await postRecipe(recipePostData),
    onSuccess: (data) => {
      // toast.success("a recipe posted successfully")
      const successMessage = data?.message || "Recipe posted successfully";

      toast.success(successMessage);
    },
    onError: (error: any) => {
      const errorMessage = error?.message || error.success;

      toast.error(errorMessage);
    },
  });
};
