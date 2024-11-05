'use client'
import React from 'react';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from "@nextui-org/avatar";
import {  useComments } from '@/src/services/getAllComment';
import RecipeForm from '../form/RecipeForm';
import RecipeInput from '../form/RecipeInput';
import { useDeleteComment } from '@/src/hooks/comment.hook';
import { FieldValues, SubmitHandler } from 'react-hook-form';
const RecipeDetails = ({ recipeData,id}) => {

    const [isFollowed, setIsFollowed] = React.useState(false);
    const { data: allComments, isLoading, isError } = useComments(id);

    const onSubmit: SubmitHandler<FieldValues> = (data, id) => {
        const userData = {
            ...data
        }
         console.log('data from client side comment ', userData, id);
        // handleUserRegistration(userData)
    }




    const {mutate: handleDeleteComment} = useDeleteComment()
    const handleDelete = (commentId: string)=>{
        handleDeleteComment({id: commentId})
    }
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
                    // style={{ width: '100%', height: 'auto' }}
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
            <div>
                comments
                <div>
                    <div className="flex gap-5">
                        {/* <Avatar isBordered radius="full" size="md" src={recipe?.image} /> */}
                        <Avatar src={recipeData?.data?.image} />
                        {/* <Image src={recipe.image} /> */}
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">    { }</h4>
                            <h5 className="text-small tracking-tight text-default-400">all cooments{allComments?.length}</h5>
                            <h5 className="text-small tracking-tight text-default-400">{allComments?.data?.map((item) => (
                                <div className='flex gap-5 items-center'>
                                    <Avatar className='mb-3' src={recipeData?.data?.image} />
                                    <h1 className='mb-3'>{item.comment}</h1>
                                    <div className='flex gap-3'>
                                        <Button onClick={()=> handleDelete(item._id)}>Delete</Button>
                                        <RecipeForm onSubmit={(data) => onSubmit(data, item._id)}>
                                            <RecipeInput name='comment' label='UpdatedComment' type='text'></RecipeInput>
                                            <Button className='bg-black text-white' type='submit'>Update Comment</Button>
                                        </RecipeForm>
                                    </div>
                                </div>
                            ))}</h5>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default RecipeDetails;