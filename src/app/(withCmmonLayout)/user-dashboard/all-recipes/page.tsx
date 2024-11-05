"use client"
import { useUser } from '@/src/context/user.provider';
import GetSingleUserRecipe from '@/src/services/GetSingleUserRecipe';
import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { User } from '@nextui-org/user';
import Image from 'next/image';

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
  

const AllRecipePage = async () => {

    const { user } = useUser()
    const userRecipe = await GetSingleUserRecipe(user?._id)
    // console.log('all data', userRecipe?.data);


    return (
        <div>
            data:{userRecipe?.data?.length || 0}

            <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>

      <TableBody items={userRecipe?.data}>
        {(item) => (
          <TableRow key={item?._id || []}>
                 <TableCell>{item?.image ? (<Image src={item?.image} height={30} alt='recipe img' width={30} />): ("no image")}</TableCell>
                 <TableCell>{item?.title || 'no title'}</TableCell>
                 <TableCell> UPDATE</TableCell>
                 <TableCell>DELETE</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
        </div>
    );
};

export default AllRecipePage;
{/* <User
            avatarProps={{radius: "lg", src: user?.profileImage}}
            description={user?.email}
            name={user?.name}
          >
            {user?.email}
          </User> */}