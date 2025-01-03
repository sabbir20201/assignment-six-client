import React, { Suspense } from "react";

import RecipeCart from "@/src/components/allRecipePost/RecipeCart";
import LandingPage from "@/src/components/module/home/Landing";
import RightSide from "@/src/components/module/home/RightSide";
import GetAllRecipePost from "@/src/services/GetAllRecipePost";
import { TRecipe } from "@/src/types";

const recentPage = async () => {
  const AllPost = await GetAllRecipePost();
  const { data: recipePosts } = AllPost;

  return (
    <div>
      <div className="flex mt-6 gap-3">
        <div className="basis-1/4 lg:block md:hidden hidden">
          <LandingPage />
        </div>
        <div className="mt-3 lg:basis-2/4 basis-full">
          <Suspense fallback={<p>all post are loading...</p>}>
            <div className="grid gap-3 lg:mx-0 mx-2">
              <h1></h1>
              {recipePosts?.map((item: TRecipe) => (
                <RecipeCart key={item._id} item={item} />
              ))}
            </div>
          </Suspense>
        </div>
        <div className="basis-1/4 lg:block md:block hidden">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default recentPage;
