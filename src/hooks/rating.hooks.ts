import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { ratingRecipe } from "../services/ratingServices/RatingServices";
import { toast } from "sonner";

export const useRatingRecipe = () => {
    // final
    return useMutation<
    any,
      Error,
      { ratingId: string; ratingData: FieldValues }
    >({
      mutationKey: ["RECIPE_RATING"],
      mutationFn: async ({ ratingId, ratingData }) =>
        await ratingRecipe(ratingId, ratingData),
      onSuccess: (data) => {
        const successMessage = data?.message || "Rating posted successfully";
  
        toast.success(successMessage);
      },
      onError: (error: any) => {
        const errorMessage = error?.message || error.message;
  
        toast.error(errorMessage);
      },
    });
  };