import React from "react";

import RecipeDetails from "@/src/components/allRecipePost/RecipeDetails";
import GetSingleRecipeDetails from "@/src/services/GetSingleRecipeDetails";
// import { getComment } from "@/src/services/getAllComment";

const RecipeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const data = await GetSingleRecipeDetails(id);
  const { data: recipeData } = data;


  return (
    <div>
      THIS IS DETAILS PAGE
      <div>
        <RecipeDetails id={id} recipeData={recipeData} />
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
