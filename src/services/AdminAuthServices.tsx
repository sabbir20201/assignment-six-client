"use server";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

import axiosInstance from "../lib/AxiosInstance";

export const registerAdmin = async (adminData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post(
      "/api/auth/admin/signup",
      adminData,
    );

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
