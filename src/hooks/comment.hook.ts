import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FieldValues } from "react-hook-form";
import { commentRecipe, deleteComment, updatedRecipeData } from "../services/getAllComment";


export const useRecipeComment = () => {
    // final 
    return useMutation<any, Error, { recipeId: string, commentData: FieldValues }>({
        mutationKey: ["RECIPE_COMMENT"],
        mutationFn: async ({ recipeId, commentData }) => await commentRecipe(recipeId, commentData),
        onSuccess: (data) => {
            const successMessage = data?.message || 'Recipe posted successfully'
            toast.success(successMessage)
        },
        onError: (error: any) => {
            const errorMessage = error?.message || error.message;
            toast.error(errorMessage)
        }
    })
}

export const useUpdatedRecipeComment = () => {
    // final 
    const queryClient = useQueryClient()
    return useMutation<any, Error,FieldValues, string>({
        mutationKey: ["UPDATED_RECIPE_COMMENT"],
        mutationFn: async ({ commentId, updatedCommentData }) => await updatedRecipeData(commentId, updatedCommentData),
        onSuccess: (data) => {
            const successMessage = data?.message || 'Comment updated successfully'
            toast.success(successMessage)
            queryClient.invalidateQueries({ queryKey: ['comments'] })
        },
        onError: (error: any) => {
            const errorMessage = error?.message || error.message;
            toast.error(errorMessage)
        }
    })
}

export const useDeleteComment = () => {
    // final 
    const queryClient = useQueryClient()
    return useMutation<any, Error, { id: string }>({
        mutationKey: ["DELETE_RECIPE_COMMENT"],
        mutationFn: async ({ id }) => await deleteComment(id),
        onSuccess: (data) => {
            const successMessage = data?.message || 'Comment deleted successfully'
            toast.success(successMessage)
            queryClient.invalidateQueries({ queryKey: ['comments'] })
        },
        onError: (error: any) => {
            const errorMessage = error?.message || error.message;
            toast.error(errorMessage)
        }
    })
}

