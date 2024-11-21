"use server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

import axiosInstance from "../lib/AxiosInstance";
export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/signup", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/api/auth/login", userData, {
      withCredentials: true,
    });

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    return {
      _id: decodedToken._id,
      email: decodedToken.email,
      password: decodedToken.password,
      userName: decodedToken.userName,
      profileImage: decodedToken.profileImage,
      role: decodedToken.role,
      followers: decodedToken.followers,
      following: decodedToken.following,
    };
  }

  return decodedToken;
};

export const changePassword = async (
  id: string,
  updatedPassword: FieldValues,
) => {
  try {
    const { data } = await axiosInstance.put(
      `/api/auth/changePassword/${id}`,
      updatedPassword,
    );

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    toast.error(error.response?.data || error.message);
  }
};
export const updateUserInformation = async (updatedUserInfo: FieldValues) => {
  try {
    const { data } = await axiosInstance.put(
      `/api/auth/userUpdate`,
      updatedUserInfo,
    );

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
