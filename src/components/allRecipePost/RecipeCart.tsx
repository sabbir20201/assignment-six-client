"use client"
import React from 'react';
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from 'next/image';
import Link from 'next/link';
import { TRecipe } from '@/src/types';
import RecipeForm from '../form/RecipeForm';
import RecipeInput from '../form/RecipeInput';
import { useUser } from '@/src/context/user.provider';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useRecipeComment } from '@/src/hooks/comment.hook';

const RecipeCart = ({ item }: { item: TRecipe }) => {

    const [isFollowed, setIsFollowed] = React.useState(false);
    const {setLoading: userLoading, user} = useUser()
    
    const { mutate: handleRecipeComment, isPending, isSuccess } = useRecipeComment()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const commentData = {
            ...data,
        }
        console.log('data from client comment data ', commentData);
        handleRecipeComment({recipeId: item._id,commentData});
        
        userLoading(true)
    }
    return (
        <div>
            <div className='relative p-[2px] rounded-md bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500'>
                <div>
                    <Card className="rounded-md" >
                        <CardHeader className="justify-between">
                            <div className="flex gap-5">
                                {/* <Avatar isBordered radius="full" size="md" src={item.profileImage} /> */}
                                <Avatar className='relative p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500' src={item.user?.profileImage} />
                                {/* <Image src={} /> */}
                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-small font-semibold leading-none text-default-600">    {item?.user?.userName}</h4>
                                    <h5 className="text-small tracking-tight text-default-400">{item?.user?.email}</h5>
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
                            <Link href={`/recipe-details/${item._id}`} passHref>
                                <Image
                                    alt="Card background"
                                    className="object-cover rounded-md"
                                    src={item?.image}
                                    width={700}
                                    height={250}
                                    style={{ height: '250px' }}
                                />

                                {/* </CardBody> */}

                                {/* <h1 className='font-semibold pt-2'>{title}</h1> */}

                                <h1 className='font-semibold font-serif text-lg pt-2 cursor-pointer text-indigo-600 hover:text-indigo-800'>{item.title}</h1>
                            </Link>
                            <h1 className='font-semibold pt-2'>{item.description}</h1>
                        </CardBody>
                        <CardFooter className="gap-3">
                            <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">4</p>
                                <p className=" text-default-400 text-small">Following</p>
                            </div>
                            {/* <div className="flex gap-1">
                                <p className="font-semibold text-default-400 text-small">97.1K</p>
                                <p className="text-default-400 text-small">Followers</p>
                            </div> */}
                            <div className="flex gap-1 items-center">

                                <div>
                                    <p className="font-semibold text-default-400 text-small">97.1K</p>

                                </div>
                                <div>
                                    <RecipeForm onSubmit={onSubmit}>
                                        <RecipeInput name='comment' label='Comment' type='text'></RecipeInput>
                                        <Button className='bg-black text-white' type='submit'>submit</Button>
                                    </RecipeForm>

                                </div>
                            </div>
                        </CardFooter>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default RecipeCart;