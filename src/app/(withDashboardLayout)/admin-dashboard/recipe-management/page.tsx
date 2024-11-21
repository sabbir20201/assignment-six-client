"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";
import Image from "next/image";
import { Button } from "@nextui-org/button";

import { TRecipe } from "@/src/types";
import { UseUser } from "@/src/context/user.provider";
import {
  useDeleteRecipeByAdmin,
  useGetAllRecipes,
} from "@/src/hooks/userHooks/user.single.recipe.hook";

const columns = [
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "title",
    label: "TITLE",
  },
  {
    key: "update",
    label: "UPDATE",
  },
  {
    key: "delete",
    label: "DELETE",
  },
];

const RecipeManagementPage = () => {
  const { setLoading, isLoading: isALoading } = UseUser();
  const { data: userRecipe, isLoading } = useGetAllRecipes();
  const { mutate: handleDeleteSingleUserRecipe } = useDeleteRecipeByAdmin();

  if (isLoading) {
    return <p>single users recipe loading..</p>;
  }
  const handleDelete = (recipeId: string) => {
    handleDeleteSingleUserRecipe({ id: recipeId });
    setLoading(true);
    isLoading;
  };

  return (
    <div>
      <div className="text-2xl p-3">
        Total Recipes : {userRecipe?.data?.length || 0}
      </div>

      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={userRecipe?.data}>
          {(item: TRecipe) => (
            <TableRow key={item?._id}>
              <TableCell>
                {item?.image ? (
                  <Image
                    alt="recipe img"
                    className="rounded-full"
                    height={30}
                    src={item?.image}
                    width={30}
                  />
                ) : (
                  "no image"
                )}
              </TableCell>
              <TableCell>{item?.title}</TableCell>
              <TableCell> UPDATE</TableCell>
              <TableCell>
                {" "}
                <Button className="" onClick={() => handleDelete(item?._id)}>
                  DELETE{" "}
                </Button>{" "}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecipeManagementPage;
