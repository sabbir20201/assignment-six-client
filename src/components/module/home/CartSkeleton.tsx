"use server"
import { Avatar } from '@nextui-org/avatar';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Skeleton } from '@nextui-org/skeleton';
import Image from 'next/image';
import React from 'react';

const CartSkeleton = () => {

    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <Skeleton>
         
                <Card className="rounded-sm">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            {/* <Avatar isBordered radius="full" size="md" src={item.profileImage} /> */}
                            <Avatar />
                            {/* <Image src={} /> */}
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">    </h4>
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
                        <h1 className='font-semibold pt-2 cursor-pointer'></h1>
                        <h1 className='font-semibold pt-2'></h1>
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
           
        </Skeleton>
    );
};

export default CartSkeleton;