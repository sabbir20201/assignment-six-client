import RecipeCart from '@/src/components/allRecipePost/RecipeCart';
import LandingPage from '@/src/components/module/home/Landing';
import RightSide from '@/src/components/module/home/RightSide';
import GetAllRecipePost from '@/src/services/GetAllRecipePost';
import { TRecipe } from '@/src/types';
import React, { Suspense } from 'react';

const recentPage = async () => {
    const AllPost = await GetAllRecipePost()
    console.log('all post from main page =>', AllPost);
    const { data: recipePosts } = AllPost

    return (
        <div>
            {/* <div className="flex">
                <div className='max-w-96 lg:block md:hidden hidden'>
                    <LandingPage></LandingPage>
                </div>
                <div className='mt-3'>
                    <Suspense fallback={<p>all post are loading...</p>}>
                    <div className='grid gap-3'>
                    {
                        recipePosts?.map((item: TRecipe) => <RecipeCart key={item._id} item={item}></RecipeCart>)
                    }
                </div>
                    </Suspense>
                
                </div>
              
                <div className='w-[30%] lg:block md:block hidden'>
                    <RightSide></RightSide>
                </div>
            </div> */}
             <div className="flex mt-6 z-999 gap-3">
                <div className='basis-1/3 lg:block md:hidden sm:hidden hidden z-50'>
                    <LandingPage></LandingPage>
                </div>
                <div className='mt-3'>
                    <Suspense fallback={<p>all post are loading...</p>}>
                        <div className='grid gap-3 lg:mx-0 mx-2'>
                            {
                                recipePosts?.map((item: TRecipe) => <RecipeCart key={item._id} item={item}></RecipeCart>)
                            }
                        </div>
                    </Suspense>
                </div>
                <div className='basis-1/3 lg:block md:block hidden'>
                    <RightSide></RightSide>
                </div>
            </div> 

        </div>

    );
};

export default recentPage;