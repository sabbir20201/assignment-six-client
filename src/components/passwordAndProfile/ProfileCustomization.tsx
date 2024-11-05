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
    const { mutate: handleUserInfo } = useUpdatedUserInformation()
    const user = useUser()
    console.log('from profile', user?.user?.userName);
    
    // const onSubmit: SubmitHandler<FieldValues> = (data) => {
    //     const updatedUserInfo = {
    //         ...data
    //     }
    //     console.log('updated Password =>', updatedUserInfo);
    //     handleChangePassword(updatedUserInfo)
    //     console.log(data);
    // }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        const userData = {
            userName: data.userName,
            profileImage: data.profileImage,
            // number: data.number,
            // address: data.address,
        }
        handleUserInfo(userData)
    };
   
    return (
        <div>
            <div className='lg:mx-10 md:mx-6 mx-3'>
                <div className='mt-2 w-1/3 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500'>
                    <h1 className='bg-white text-xl font-bold text-center py-1'>Update your Info</h1>
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    {/* <RecipeForm onSubmit={onSubmit} defaultValues={defaultValues}> */}
                    <form  onSubmit={handleSubmit(onSubmit)}>
                    {/* onSubmit={handleSubmit(onSubmit)} */}
                    <Input  {...register("userName")} name='userName' className='mb-2' defaultValue={user?.user?.userName} label='userName' type='userName'></Input>
                    <Input {...register("profileImage")} name='profileImage' className='mb-2' defaultValue={user?.user?.profileImage} label='profileImage' type='text'></Input>
                    {/* <Input {...register("number")} name='number' className='mb-2' label='number' type='text'></Input>
                    <Input {...register("address")} name='address' className='mb-2' label='address' type='text'></Input> */}
                    <Button className='text-white bg-gradient-to-r bg-indigo-600' type='submit'>submit</Button>
                    </form>
                    {/* <RecipeInput name='address' label='Address' type='text'></RecipeInput>
                    <RecipeInput name='phone' label='Phone' type='text'></RecipeInput> */}
                    {/* </RecipeForm> */}
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user?.user?.userName} {...register("userName")} />
      <input defaultValue={user?.user?.profileImage} {...register("profileImage")} />
      <input {...register("number")} />
      <input {...register("address")} />
      <input type="submit" />
    </form> */}
 
                </div>
            </div>
        </div>
    );
};

export default ProfileCustomization;