"use server";
import axiosInstance from "../lib/AxiosInstance";

export const userFollowServices = async (followingUserId: string) => {
  try {
    const { data } = await axiosInstance.put("/api/auth/follow", {
      id: followingUserId,
    });

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export const userUnFollowServices = async (followingUserId: string) => {
  try {
    const { data } = await axiosInstance.put("/api/auth/unFollow", {
      id: followingUserId,
    });

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
