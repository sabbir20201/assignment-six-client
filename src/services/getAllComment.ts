import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FieldValue, FieldValues } from "react-hook-form";
import axiosInstance from "../lib/AxiosInstance";

export const getComment = async (id: string) => {
    try {
        const res = await axios.get(`http://localhost:5000/api/recipe/allComment/${id}`)
        return res.data
    } catch (error: any) {
        console.error("Error from fetching comment", error)
    }
}
export const useComments = (id: string) => {
    return useQuery({
        queryKey: ['comments', id],
        queryFn: () => getComment(id),
    })
}

export const deleteComment = async (id: string) => {
    try {
        const res = await axios.delete(`http://localhost:5000/api/recipe/allComment/${id}`)
        return res.data
    } catch (error: any) {
        console.error("Error from delete comment", error)
    }
}


export const commentRecipe = async (recipeId: string, commentData: FieldValues) => {
    // final 
    try {
        const { data } = await axiosInstance.post(`/api/recipe/comment/${recipeId}`, commentData)
        return data
    } catch (error: any) {
        console.error('axios error from comment services', error?.response?.data || error.message);
    }
}

export const updatedRecipeData = async (commentId: string, updatedCommentData: FieldValues) => {
    // final 
    try {
        console.log('updatedCommentData',updatedCommentData, commentId);
        
        const { data } = await axiosInstance.put(`/api/recipe/allComment/${commentId}`, updatedCommentData)
        return data
    } catch (error: any) {
        console.error('axios error from comment services', error?.response?.data || error.message);

    }
}

