// import { useQuery } from "@tanstack/react-query";
// import { toast } from "sonner";
// import { getAllRecipe } from "../adminServices/GetAllRecipe";
// import { TRecipe } from "../types";


// export const useGetAllRecipes = () => {
//     return useQuery<TRecipe[], Error>({
//         queryKey: ["GET_ALL_RECIPES"],
//         queryFn: async () => await getAllRecipe(),
//         onSuccess: (data: TRecipe) => {
//             const successMessage = data?.message || 'All-recipes fetched successfully';
//             toast.success(successMessage);
//         },
//         onError: (error: any) => {
//             const errorMessage = error?.message || 'failed to fetch all-recipe';
//             toast.error(errorMessage);
//         }
//     })
// }


