"use client"
import { ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

interface formConfig {
    defaultValues?: Record<string, any>;
     resolver?: any
}
interface IProps extends formConfig {
    children: ReactNode;
    onSubmit: SubmitHandler<any>
}


const RecipeForm = ({ children, onSubmit, defaultValues, resolver }: IProps) => {
    const formConfig: formConfig = {}
    if (!!defaultValues) {
        formConfig["defaultValues"] = formConfig
    }
    if (!!resolver) {
        formConfig["defaultValues"] = resolver
    }
    // const methods = useForm();
    const methods = useForm({ defaultValues, resolver });
    const submitHandler = methods.handleSubmit
    return (
        <FormProvider {...methods}>
            <form onSubmit={submitHandler(onSubmit)} className="w-full gap-2">
                {children}
            </form>
        </FormProvider>
    );
};

export default RecipeForm;