import RecipeDetails from '@/src/components/allRecipePost/RecipeDetails';
import { getComment } from '@/src/services/getAllComment';
import GetSingleRecipeDetails from '@/src/services/GetSingleRecipeDetails';
import { TRecipe } from '@/src/types';
import React from 'react';

const RecipeDetailsPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id
  const data = await GetSingleRecipeDetails(id)
  const { data:recipeData } = data
  console.log('FROM RECIPE DETAIL PAGE',recipeData);


  return (
    <div>
      THIS IS DETAILS PAGE
      {id}
      <div>
        
       <RecipeDetails recipeData={recipeData} id={id}></RecipeDetails>
        
      </div>
      
    </div>
  );
};

export default RecipeDetailsPage;