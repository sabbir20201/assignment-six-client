import RecipeDetails from '@/src/components/allRecipePost/RecipeDetails';
import { getComment } from '@/src/services/getAllComment';
import GetSingleRecipeDetails from '@/src/services/GetSingleRecipeDetails';
import React from 'react';

const RecipeDetailsPage = async({params}: {params: {id: string}}) => {
    const id = params.id
    const recipeData = await GetSingleRecipeDetails(id)
    // const allComments =await getComment(id)


    return (
        <div>
          <RecipeDetails recipeData={recipeData} id={id}></RecipeDetails>
        </div>
    );
};

export default RecipeDetailsPage;