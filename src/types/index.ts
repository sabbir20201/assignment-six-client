import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type TUser = {
  _id: string;
  userName: string;
  email: string;
  profileImage: string;
  role: string;
  followers: string[];
  following: string[];
};

export type TRecipe = {
  [x: string]: any;
  _id: string;
  user: TUser;
  image: string;
  title: string;
  description: string;
  ingredients: string;
  tag: string;
  cookingTime: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
