'use client'
import React from 'react';
import Image from 'next/image';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Button } from '@nextui-org/button';
import { Avatar } from "@nextui-org/avatar";
import { useComments } from '@/src/services/getAllComment';
import RecipeForm from '../form/RecipeForm';
import RecipeInput from '../form/RecipeInput';
import { useDeleteComment, useUpdatedRecipeComment } from '@/src/hooks/comment.hook';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { TRecipe } from '@/src/types';
import { useUser } from '@/src/context/user.provider';
interface TRecipeDetailsProps {
    recipeData: TRecipe;
    id: string
}
const RecipeDetails: React.FC<TRecipeDetailsProps> = ({ recipeData: singleRecipe, id }) => {

    console.log('from recipe details page',singleRecipe);
    
    const user = useUser()
    const [isFollowed, setIsFollowed] = React.useState(false);
    const { data: allComments, isLoading, isError } = useComments(id);
    const {mutate:handleUpdateRecipeComment} = useUpdatedRecipeComment()
    
    const onSubmit: SubmitHandler<FieldValues> = (data, commentId) => {
        const userData = {
            ...data
        }
        handleUpdateRecipeComment({commentId,updatedCommentData:userData})
    }

    const { mutate: handleDeleteComment } = useDeleteComment()
    const handleDelete = (commentId: string) => {
        handleDeleteComment({ id: commentId })
    }
    return (
        <div>
            <Card className="rounded-sm">
                <CardHeader className="justify-between">
                    <div className="flex gap-5">
                        {/* <Avatar isBordered radius="full" size="md" src={recipe?.image} /> */}
                        <Avatar src={singleRecipe?.image} />
                        {/* <Image src={recipe.image} /> */}
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600"></h4>
                            <h5 className="text-small tracking-tight text-default-400"></h5>
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
                        className="object-cover h-[500] rounded-md"
                        src={singleRecipe?.image || ''}
                        width={650}
                        height={250}
                    />
                    {/* <h1 className='font-semibold pt-2'>{title}</h1> */}
                    <h1 className='font-semibold pt-2'>Description: {singleRecipe?.description}</h1>
                    <h1 className='font-semibold pt-2'>Ingredients: {singleRecipe?.ingredients}</h1>
                    <h1 className='font-semibold pt-2'>Tag: {singleRecipe?.tag}</h1>
                    <h1 className='font-semibold pt-2'>CookingTime: {singleRecipe?.cookingTime}</h1>
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
            <div className='ml-20'>
                comments
                <div>
                    <div className="flex gap-5">
                        <div className="flex flex-col gap-1 items-start justify-center">
                            <h4 className="text-small font-semibold leading-none text-default-600">    { }</h4>
                            <h5 className="text-small tracking-tight text-default-400">all cooments{allComments?.length}</h5>
                            <h5 className="text-small tracking-tight text-default-400">{allComments?.data?.map((item:any) => (
                                <div key={item._id} className='gap-5'>
                                    <div className='flex gap-1 items-center'>
                                    <Avatar className='mb-1' src={user?.user?.profileImage} />
                                    <p>{item?.user?.userName}</p>
                                    <p>{item?.user?.email}</p>
                                    </div>
                                       <h1 className='border-2 border-indigo-700 rounded-lg p-2 mb-2'>
                                       {item.comment}
                                       </h1>
                                    <div>
                                    {
                                        user?.user?._id === item?.user?._id ? ( <div className='gap-3'>
                                              <RecipeForm onSubmit={(data) => onSubmit(data,item._id)}>
                                                <RecipeInput name='comment' label='UpdatedComment' type='text'></RecipeInput>
                                                <Button className='bg-black text-white' type='submit'>Update Comment</Button>
                                            </RecipeForm>
                                            <Button onClick={() => handleDelete(item._id)}>Delete</Button>
                                          
                                        </div>) : ('')
                                    }
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