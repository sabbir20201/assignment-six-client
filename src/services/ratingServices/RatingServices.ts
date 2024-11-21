/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/src/lib/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FieldValues } from "react-hook-form";

export const getRating= async (id: string) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/recipe/allRating/${id}`,
    );

    return res.data;
  } catch (error: any) {
    console.error("Error from fetching all ratings", error);
  }
};
export const useRatings = (id: string) => {
  return useQuery({
    queryKey: ["ratings", id],
    queryFn: () => getRating(id),
  });
};
export const ratingRecipe = async (
    ratingId: string,
  ratingData: FieldValues,
) => {
  try {
    const { data } = await axiosInstance.post(
      `/api/recipe/rating/${ratingId}`,
      ratingData,
    );

    return data;
  } catch (error: any) {
    console.error(
      "axios error from rating services",
      error?.response?.data || error.message,
    );
  }
};

// export const deleteComment = async (id: string) => {
//   try {
//     const res = await axios.delete(
//       `http://localhost:5000/api/recipe/allComment/${id}`,
//     );

//     return res.data;
//   } catch (error: any) {
//     console.error("Error from delete comment", error);
//   }
// };

// export const commentRecipe = async (
//   recipeId: string,
//   commentData: FieldValues,
// ) => {
//   try {
//     const { data } = await axiosInstance.post(
//       `/api/recipe/comment/${recipeId}`,
//       commentData,
//     );

//     return data;
//   } catch (error: any) {
//     console.error(
//       "axios error from comment services",
//       error?.response?.data || error.message,
//     );
//   }
// };

// export const updatedRecipeData = async (
//   commentId: string,
//   updatedCommentData: FieldValues,
// ) => {
//   try {
//     console.log("updatedCommentData", updatedCommentData, commentId);

//     const { data } = await axiosInstance.put(
//       `/api/recipe/allComment/${commentId}`,
//       updatedCommentData,
//     );

//     return data;
//   } catch (error: any) {
//     console.error(
//       "axios error from comment services",
//       error?.response?.data || error.message,
//     );
//   }
// };
