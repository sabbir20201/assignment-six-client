"use client";
import { Button } from "@nextui-org/button";
import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

import RecipeForm from "@/src/components/form/RecipeForm";
import RecipeInput from "@/src/components/form/RecipeInput";
import { usePostRecipe } from "@/src/hooks/recipe.hook";

const CreateRecipePage = () => {
  const { mutate: handleRecipePost } = usePostRecipe();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const recipeData = {
      ...data,
    };

    console.log("recipe data from FROM CREATE POST RECIPE", recipeData);
    handleRecipePost(recipeData);
  };

  return (
    <div className="lg:mx-10 md:mx-6 mx-3">
      <div className="mt-2 lg:w-1/3 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
        <h1 className="bg-white text-xl font-bold text-center py-1">
          Post Your Recipe
        </h1>
      </div>
      <div className="flex lg:w-1/2 justify-center flex-wrap md:flex-nowrap gap-4">
        <RecipeForm onSubmit={onSubmit}>
          <RecipeInput label="image" name="image" type="text" />
          <RecipeInput label="title" name="title" type="text" />
          <RecipeInput
            label="description"
            name="description"
            type="description"
          />
          <RecipeInput label="ingredients" name="ingredients" type="text" />
          <RecipeInput label="tag" name="tag" type="text" />
          <RecipeInput label="cookingTime" name="cookingTime" type="text" />
          <Button
            className="text-white bg-gradient-to-r bg-indigo-600"
            type="submit"
          >
            submit
          </Button>
        </RecipeForm>
      </div>
    </div>
  );
};

export default CreateRecipePage;
