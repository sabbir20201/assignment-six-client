'use client'
import React from 'react';
// import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from "@nextui-org/avatar";
import { TRecipe } from '@/src/types';

const RecipeDetails = ({ recipeData }: {recipeData: TRecipe}) => {
    const [isFollowed, setIsFollowed] = React.useState(false);
    console.log('images', recipeData?.data.data);

    return (
        <div>
            <Card className="rounded-sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        {/* <Avatar isBordered radius="full" size="md" src={recipe?.image} /> */}
                        <Avatar src={recipeData?.data?.image} />
                        {/* <Image src={recipe.image} /> */}
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">    { }</h4>
                            <h5 className="text-small tracking-tight text-default-400">{ }</h5>
                        </div>
                    </div>
                    <div>

                    </div>
                    <Button
                        className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                        color="primary"
                        radius="full"
                        size="sm"
                        variant={isFollowed ? "bordered" : "solid"}
                        onPress={() => setIsFollowed(!isFollowed)}
                    >
                        {isFollowed ? "Unfollow" : "Follow"}
                    </Button>
                </CardHeader>
                <CardBody className="px-3 py-0 text-small text-default-700">
                    {/* <CardBody className="overflow-visible py-2"> */}
                    <Image
                        alt="Card background"
                        className="object-cover rounded-md"
                        src={recipeData?.data?.image}
                        width={650}
                        height={250}
                        style={{ height: '250px' }}
                    />
                    {/* </CardBody> */}

                    {/* <h1 className='font-semibold pt-2'>{title}</h1> */}
                    <h1 className='font-semibold pt-2'>Description: {recipeData?.data?.description}</h1>
                    <h1 className='font-semibold pt-2'>Ingredients: {recipeData?.data?.ingredients}</h1>
                    <h1 className='font-semibold pt-2'>Tag: {recipeData?.data?.tag}</h1>
                    <h1 className='font-semibold pt-2'>CookingTime: {recipeData?.data?.cookingTime}</h1>
                </CardBody>
                <CardFooter className="gap-3">
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">4</p>
                        <p className=" text-default-400 text-small">Following</p>
                    </div>
                    <div className="flex gap-1">
                        <p className="font-semibold text-default-400 text-small">97.1K</p>
                        <p className="text-default-400 text-small">Followers</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default RecipeDetails;