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
  useDeleteUserByAdmin,
  useGetAllUser,
} from "@/src/hooks/userHooks/user.single.recipe.hook";

const columns = [
  {
    key: "image",
    label: "IMAGE",
  },
  {
    key: "email",
    label: "email",
  },
  {
    key: "role",
    label: "Role",
  },
  {
    key: "delete",
    label: "DELETE",
  },
];

const UserManagementPage = () => {
  const { user, setLoading, isLoading: isALoading } = UseUser();
  const id = user?._id;
  const { data: allUser, isLoading } = useGetAllUser();
  const { mutate: handleDeleteSingleUser } = useDeleteUserByAdmin();

  if (isLoading) {
    return <p>single users loading..</p>;
  }
  const handleDelete = (recipeId: string) => {
    handleDeleteSingleUser({ id: recipeId });
    setLoading(true);
    isLoading;
  };

  console.log(allUser);

  return (
    <div>
      <div className="text-2xl p-3">
        Total Users : {allUser?.data?.length || 0}
      </div>

      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>

        <TableBody items={allUser?.data}>
          {(item: TRecipe) => (
            <TableRow key={item?._id}>
              <TableCell>
                {item?.profileImage ? (
                  <Image
                    alt="recipe img"
                    className="rounded-full"
                    height={30}
                    src={item?.profileImage}
                    width={30}
                  />
                ) : (
                  "no image"
                )}
              </TableCell>
              <TableCell>{item?.userName}</TableCell>
              <TableCell> {item?.role}</TableCell>
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

export default UserManagementPage;
