import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};




interface TComment {
    user: string;
    comment: string;
    createdAt?: Date;
}

export type TRecipe = {
    _id: string;
    user:string;
    image: string;
    title: string;
    description :string;
    ingredients: string;
    tag: string;
    cookingTime: string;
    // comments?:TComment[];
    // rating?: number;
    // ratingCount?: number;
    // upVotes?: string; 
    // downVotes?:string;
    // createdAt: Date; 
    // updatedAt: Date; 
}       
export type TUser =  {
  _id: string;
  email: string;
  password: string;
  role: string;
  userName: string;
  profileImage: string;
  iat?: number
  exp?: number
}


