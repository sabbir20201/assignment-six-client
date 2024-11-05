"use client"
import React from 'react';
import RecipeForm from '../form/RecipeForm';
import RecipeInput from '../form/RecipeInput';
import { Button } from '@nextui-org/button';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useChangePassword, usePostRecipe } from '@/src/hooks/auth.hook';

const PasswordChange = () => {
    
    const { mutate: handleChangePassword } =useChangePassword()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const updatedPassword = {
            ...data
        }
        console.log('updated Password =>', updatedPassword);
        handleChangePassword(updatedPassword)
        console.log(data);
    }
 
    return (
        <div>
        <div className='lg:mx-10 md:mx-6 mx-3'>
            <div className='mt-2 w-1/3 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500'>
                <h1 className='bg-white text-xl font-bold text-center py-1'>Change your password</h1>
            </div>
            <div className="flex w-full justify-center flex-wrap md:flex-nowrap gap-4">
                <RecipeForm onSubmit={onSubmit}>
                    <RecipeInput name='oldPassword' label='oldPassword' type='password'></RecipeInput>
                    <RecipeInput name='newPassword' label='newPassword' type='password'></RecipeInput>
                 
                    <Button className='text-white bg-gradient-to-r bg-indigo-600' type='submit'>submit</Button>
                </RecipeForm>
           

            </div>
        </div>
 

        </div>
    );
};

export default PasswordChange;