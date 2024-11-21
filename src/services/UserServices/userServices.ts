import axios from "axios";
export const getSingleRecipeByUserId = async (id: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/recipe/user/${id}`,
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
export const getAllRecipe = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/recipe",
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
export const getAllUser = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/auth",
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
export const deleteSingleRecipeByUserId = async (id: string) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/recipe/${id}`,
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
export const deleteSingleRecipeByAdminId = async (id: string) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/recipe/admin/${id}`,
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
export const deleteSingleUserByAdminId = async (id: string) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/auth/admin/${id}`,
    );

    return data;
  } catch (error: any) {
    console.error("Error from fetching all-recipe", error);
  }
};
