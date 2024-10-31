'use client'
import DashboardHeader from '@/src/components/DashboardHeader';
import { DashboardNavbar } from '@/src/components/DashboardNavbar';
import DropDown from '@/src/components/DropDown';
import React from 'react';

// import {PlusIcon} from "./PlusIcon.jsx";
const DashboardLayout = ({ children, }: { children: React.ReactNode; }) => {
    return (
        <div>
            <DashboardHeader></DashboardHeader>
            <div className='flex'>
                <div className='border'>
                    <div className='lg:hidden sm:block'>
                        <DropDown></DropDown>
                    </div>
                    <div className='lg:block hidden bg-yellow-500'>
                        <DashboardNavbar></DashboardNavbar>
                    </div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;