import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "../services/AuthService";
import { FieldValue } from "react-hook-form";
import { LoginFormInputs } from "../app/(withCmmonLayout)/register/page";
import { Toaster, toast } from 'sonner'

export const useUserRegistration = ()=>{
   return useMutation<any, Error,LoginFormInputs>({
        mutationKey: ["USER_REGISTRATION"],
        mutationFn:async (userData)=> await registerUser(userData),
        onSuccess: ()=>{
            toast.success("user register success")
        },
        onError: (error)=>{
            toast.error(error.message)
        }
    })
}
export const useUserLogin = ()=>{
   return useMutation<any, Error,LoginFormInputs>({
        mutationKey: ["USER_LOGIN"],
        mutationFn:async (userData)=> await loginUser(userData),
        onSuccess: ()=>{
            toast.success("user login success")
        },
        onError: (error)=>{
            toast.error(error.message)
        }
    })
}


