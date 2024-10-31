import RecipeDetails from '@/src/components/allRecipePost/RecipeDetails';
import GetSingleRecipeDetails from '@/src/services/GetSingleRecipeDetails';
import React from 'react';

const RecipeDetailsPage = async({params}: {params: {id: string}}) => {
    const id = params.id
    const recipeData = await GetSingleRecipeDetails(id)

    return (
        <div>
          <RecipeDetails recipeData={recipeData}></RecipeDetails>
        </div>
    );
};

export default RecipeDetailsPage;