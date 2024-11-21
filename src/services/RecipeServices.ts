import { FieldValues } from "react-hook-form";

import axiosInstance from "../lib/AxiosInstance";

import envConfig from "@/src/config/envConfig";

export const GetAllRecipePost = async () => {
  console.log(envConfig.baseApi);

  const res = await fetch(
    `http://localhost:5000/api/recipe`,
    {
      next: {
        revalidate: 5,
      },
    },
  );

  return res.json();
};

export const postRecipe = async (recipePostData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/api/recipe", recipePostData);

    return data;
  } catch (error: any) {
    console.error("Axios error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
