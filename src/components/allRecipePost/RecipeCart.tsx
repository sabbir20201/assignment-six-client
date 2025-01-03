"use client";
import React, { useState } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import RecipeForm from "../form/RecipeForm";
import RecipeInput from "../form/RecipeInput";
import { TRecipe } from "@/src/types";
import { UseUser } from "@/src/context/user.provider";
import { useRecipeComment } from "@/src/hooks/comment.hook";
import {
  useUserFollowing,
  useUserUnFollowing,
} from "@/src/hooks/userFollow.hook";
import { useRatingRecipe } from "@/src/hooks/rating.hooks";


const RecipeCart = ({ item }: { item: TRecipe }) => {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const { setLoading: userLoading } = UseUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { mutate: handleRecipeComment } = useRecipeComment();
  const { mutate: handleRatingRecipe } = useRatingRecipe();
  const { mutate: handleFollow } = useUserFollowing();
  const { mutate: handleUnFollow } = useUserUnFollowing();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const commentData = {
      ...data,
    };

    handleRecipeComment({ recipeId: item?._id, commentData });
    userLoading(true);
  };
  const onSubmitRating: SubmitHandler<FieldValues> = (data) => {
    const ratingData = {
      ...data,
    };
    console.log(ratingData);

    handleRatingRecipe({ ratingId: item?._id, ratingData });
    userLoading(true);
  };

  const handleFollowToggle = async (id: string) => {
    setIsLoading(true);
    try {
      if (isFollowing) {
        await handleUnFollow(id);
      } else {
        await handleFollow(id);
      }
      const newIsFollowing = !isFollowing;

      setIsFollowing(newIsFollowing);
    } catch (error) {
      console.error("error from following", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="relative p-[2px] rounded-md bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
        <div>
          <Card className="rounded-md">
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                {/* <Avatar isBordered radius="full" size="md" src={item.profileImage} /> */}
                <Avatar
                  className="relative p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500"
                  src={item.user?.profileImage}
                />
                {/* <Image src={} /> */}
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {" "}
                    {item?.user?.userName}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {item?.user?.email}
                  </h5>
                </div>
              </div>
              <div />
              <Button
                className={
                  isFollowed
                    ? "bg-transparent text-foreground border-default-200"
                    : ""
                }
                color="primary"
                disabled={isLoading}
                radius="full"
                size="sm"
                variant={isFollowed ? "bordered" : "solid"}
                onClick={() => handleFollowToggle(item?.user?._id)}
                onPress={() => setIsFollowed(!isFollowed)}
              >
                {isLoading ? "Loading..." : isFollowing ? `Unfollow` : "Follow"}
              </Button>
            </CardHeader>

            <CardBody className="px-3 py-0 text-small text-default-700">
              {/* <CardBody className="overflow-visible py-2"> */}
              <Link href={`/recipe-details/${item?._id}`}>
                <Image
                  priority
                  alt="Card background"
                  className="object-cover rounded-md h-80"
                  height={250}
                  src={item?.image}
                  width={700}
                />
                <h1 className="font-semibold font-serif text-lg pt-2 cursor-pointer text-indigo-600 hover:text-indigo-800">
                  {item?.title}
                </h1>
              </Link>
              <h1 className="font-semibold pt-2">{item?.description}</h1>
            </CardBody>
            <CardFooter className="gap-2">
              <div className="flex gap-1">
                <div className="flex w-36 flex-wrap md:flex-nowrap gap-4">
                  <RecipeForm onSubmit={onSubmitRating}>
                    <div className="flex gap-1 items-center">
                      <div className="w-full">
                        <RecipeInput
                          label="Rating"
                          name="rating"
                          type="text"
                        />
                      </div>
                      <div>
                        <Button
                          className="bg-black text-white border-4"
                          type="submit"
                        >
                          Rating
                        </Button>
                      </div>
                    </div>
                  </RecipeForm>
                </div>
                {/* <p className=" text-default-400 text-small">Rating</p> */}
              </div>
              <div className="flex items-center">
                <div>
                  <p className="font-semibold text-default-400 text-small">
                    UpVote 
                  </p>
                </div>
                <div className="">
                  <RecipeForm onSubmit={onSubmit}>
                    <div className="flex items-center">
                      <div>
                        <RecipeInput
                          label="Comment"
                          name="comment"
                          type="text"
                        />
                      </div>
                      <div>
                        <Button
                          className="bg-black text-white border-4"
                          type="submit"
                        >
                          Comment
                        </Button>
                      </div>
                    </div>
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
