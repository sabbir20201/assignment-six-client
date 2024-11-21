"use client";
import { Input } from "@nextui-org/input";
import React from "react";
import { useFormContext } from "react-hook-form";
interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}
const RecipeInput = ({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) => {
  const {
    register,
    formState: { errors },
    getValues,
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      className="size-11 lg:w-full my-2"
      defaultValue={getValues(name)}
      label={label}
      required={required}
      size={size}
      type={type}
      variant={variant}
      isInvalid={!!errors[name]}
      // errorMessage={errors[name] ? (errors[name].message as string) : ""}
      errorMessage={(errors[name]?.message as string) || ""}
    />
  );
};

export default RecipeInput;
