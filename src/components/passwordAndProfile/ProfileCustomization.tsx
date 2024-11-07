"use client"
import React from 'react';
import RecipeForm from '../form/RecipeForm';
import RecipeInput from '../form/RecipeInput';
import { Button } from '@nextui-org/button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useUpdatedUserInformation } from '@/src/hooks/auth.hook';
import { useUser } from '@/src/context/user.provider';
import { Input } from '@nextui-org/input';
type Inputs = {
    userName: string,
    profileImage: string,
    number: string,
    address: string,
};
const ProfileCustomization = () => {
    const {user} = useUser()
    // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    // const onSubmit: SubmitHandler<Inputs> = (data) => {
    //     console.log(data);
    //     const userData = {
    //        ...data
    //         // number: data.number,
    //         // address: data.address,
    //     }
    //     console.log('from profile ',userData);

    //     handleUserInfo(userData)
    // };
    const { mutate: handleUpdateUserInfo } = useUpdatedUserInformation(user._id)
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const updatedUserInfo = {
            ...data
        }
        console.log('updated Password =>', updatedUserInfo);
        handleUpdateUserInfo(updatedUserInfo)
        console.log(data);
    }

    return (
        <div>
            <div className='lg:mx-10 md:mx-6 mx-3'>
                <div className='mt-2 w-1/3 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500'>
                    <h1 className='bg-white text-xl font-bold text-center py-1'>Update your Info</h1>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <RecipeForm onSubmit={onSubmit}>
                        <RecipeInput name='userName' label='type a new userName' type='userName'></RecipeInput>
                        <RecipeInput name='profileImage' label='insert a new profileImage link' type='text'></RecipeInput>

                        <Button className='text-white bg-gradient-to-r bg-indigo-600' type='submit'>submit</Button>
                    </RecipeForm>
                </div>
            </div>
        </div>
    );
};

export default ProfileCustomization;