import { useQuery } from "@tanstack/react-query";

import GetSingleUserRecipe from "../services/GetSingleUserRecipe";

export const useGetSingleUserRecipes = (id: string | any) => {
  return useQuery({
    queryKey: ["GET_SINGLE_USERS_RECIPES", id],
    queryFn: () => GetSingleUserRecipe(id),
  });
};

// export const useComments = (id: string) => {
//     return useQuery({
//         queryKey: ['comments', id],
//         queryFn: () => getComment(id),
//     })
// }

// export const useSingleRecipeQuery = (id: string) => {
//     return useQuery({
//         queryKey: ['singleRecipe', id], // Include the id in the query key
//         queryFn: ({ queryKey }) => {
//             const recipeId = queryKey[1] as string; // Extract the id from the query key
//             return getSingleRecipeByUserId(recipeId);
//         },
//         enabled: !!id, // Only run the query if `id` is provided
//     });
// };
