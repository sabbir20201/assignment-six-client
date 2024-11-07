"use client"

import React from 'react';
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { TRecipe } from '@/src/types';

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

const AllRecipeManagement = ({allRecipe}: {allRecipe:TRecipe[]}) => {


    console.log('all reeicpe', allRecipe);
    
    return (
        <div>
            <div>
    

                <Table aria-label="Example table with dynamic content">
                    {/* <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader> */}

                    {/* <TableBody items={userRecipe?.data}>
                        {(item) => (
                            <TableRow key={item?._id || []}>
                                <TableCell>{item?.image ? (<Image src={item?.image} height={30} alt='recipe img' width={30} />) : ("no image")}</TableCell>
                                <TableCell>{item?.title || 'no title'}</TableCell>
                                <TableCell> UPDATE</TableCell>
                                <TableCell>DELETE</TableCell>
                            </TableRow>
                        )}
                    </TableBody> */}
                </Table>
            </div>
        </div>
    );
};

export default AllRecipeManagement


