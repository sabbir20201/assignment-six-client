"use client"
import RecipeForm from '@/src/components/form/RecipeForm';
import RecipeInput from '@/src/components/form/RecipeInput';
import { Button } from '@nextui-org/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import loginValidationSchema from '@/src/schemas/login.schema';
import {FieldValues, SubmitHandler } from 'react-hook-form';
import { registerUser } from '@/src/services/AuthService';
import { useMutation } from '@tanstack/react-query';
import { useUserRegistration } from '@/src/hooks/auth.hook';
export interface LoginFormInputs {
    email: string;
    password: string;
    userName: string;
    profileImage: string;
    role: string;
}
const RegisterPage = () => {


   const {mutate: handleUserRegistration, isPending} = useUserRegistration()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = {
            ...data
        }
         console.log('data from client side register ', userData);
        handleUserRegistration(userData)
    }

    return (
        <div>
          Please Register Page
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <RecipeForm onSubmit={onSubmit} resolver={zodResolver(loginValidationSchema)}>
                    <RecipeInput name='userName' label='userName' type='userName'></RecipeInput>
                    <RecipeInput name='email' label='Email' type='email'></RecipeInput>
                    <RecipeInput name='password' label='Password' type='password'></RecipeInput>
                    <RecipeInput name='profileImage' label='profileImage' type='text'></RecipeInput>
                    <RecipeInput name='role' label='role' type='text'></RecipeInput>
                    <Button type='submit'>submit</Button>
                </RecipeForm>

            </div>
        </div>
    );
};

export default RegisterPage;