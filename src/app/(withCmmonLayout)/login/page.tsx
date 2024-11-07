"use client"
import RecipeForm from '@/src/components/form/RecipeForm';
import RecipeInput from '@/src/components/form/RecipeInput';
import { Button } from '@nextui-org/button';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import loginValidationSchema from '@/src/schemas/login.schema';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useUserLogin } from '@/src/hooks/auth.hook';
import Loading from '@/src/components/ui/Loading';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@/src/context/user.provider';

const LoginPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const {setLoading: userLoading} = useUser()
    const redirect = searchParams.get("redirect")

    console.log(redirect);
    
    const { mutate: handleUserRegistration, isPending, isSuccess } = useUserLogin()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = {
            ...data
        }
        console.log('data from client side login ', userData);
        handleUserRegistration(userData);
        userLoading(true)
    }
useEffect(()=>{
    if(!isPending && isSuccess){
        if(redirect){
            router.push(redirect);
        }else{
            router.push("/")
        }
    }
},[isPending,isSuccess])
  

    return (
       <>
       {
        isPending && <Loading />
       }
             <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <RecipeForm onSubmit={onSubmit}>
                    <RecipeInput name='email' label='Email' type='email'></RecipeInput>
                    <RecipeInput name='password' label='Password' type='password'></RecipeInput>
                    <Button className='bg-black text-white' type='submit'>submit</Button>
                </RecipeForm>

            </div>
       </>
      

    );
};

export default LoginPage;