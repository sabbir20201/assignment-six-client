"use server";
import { cookies } from "next/headers";
import axiosInstance from "../lib/AxiosInstance";
import { LoginFormInputs } from "../app/(withCmmonLayout)/register/page";
import { jwtDecode } from "jwt-decode";
import { FieldValues } from "react-hook-form";
export const registerUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/api/auth/signup", userData)

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken)
            cookies().set("refreshToken", data?.data?.refreshToken)
        }
        return data
    } catch (error: any) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data || error.message);
    }
}
export const loginUser = async (userData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/api/auth/login", userData, {
            withCredentials: true
        })

        if (data.success) {
            cookies().set("accessToken", data?.data?.accessToken)
            cookies().set("refreshToken", data?.data?.refreshToken)

        }
        return data
    } catch (error: any) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data || error.message);
    }
}
export const logout = () => {
    cookies().delete('accessToken');
    cookies().delete('refreshToken');
}
export const getCurrentUser = async () => {
    const accessToken = cookies().get("accessToken")?.value;
    // console.log('from getCurrentUser user', accessToken);

    let decodedToken = null;
    if (accessToken) {
        decodedToken = await jwtDecode(accessToken)
        // console.log('decoded user', decodedToken);

        return {
            _id: decodedToken._id,
            email: decodedToken.email,
            password: decodedToken.password,
            userName: decodedToken.userName,
            profileImage: decodedToken.profileImage,
            role: decodedToken.role,
        }
    }
    return decodedToken
}

export const postRecipe = async (recipePostData: FieldValues) => {
    try {
        const { data } = await axiosInstance.post("/api/recipe", recipePostData)
        return data
    } catch (error: any) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data || error.message);
    }
}


export const changePassword = async (updatedPassword: string) => {
    try {
        const { data } = await axiosInstance.put(`/api/auth/changePassword`, updatedPassword)
        return data
    } catch (error: any) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data || error.message);
    }
}
export const updateUserInformation = async (updatedUserInfo: string) => {
    try {
        const { data } = await axiosInstance.put(`/api/auth/userUpdate`, updatedUserInfo)
        return data
    } catch (error: any) {
        console.error("Axios error:", error.response?.data || error.message);
        throw new Error(error.response?.data || error.message);
    }
}