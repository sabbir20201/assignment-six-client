import DashboardHeader from '@/src/components/DashboardHeader';
import { DashboardNavbar } from '@/src/components/DashboardNavbar';
import DropDown from '@/src/components/DropDown';
import React from 'react';

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className=''>
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
                <div className='w-full border border-red-700'>
                    {children}
                </div>
            </div>
        </div>
             {/* <main className="flex max-w-6xl">
                <div className="w-1/5 border"><UserSidebar></UserSidebar></div>
                <div className="w-full border border-red-700"> {children}</div>
            </main> */}

        </div>
    );
};

export default AdminLayout;