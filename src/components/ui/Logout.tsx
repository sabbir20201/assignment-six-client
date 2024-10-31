"use client"
import { logout } from '@/src/services/AuthService';
import { Button } from '@nextui-org/button';
import React from 'react';
import { useUser } from '@/src/context/user.provider';

const Logout = () => {
    const { user } = useUser()
    console.log('user data', user);

    const handleLogout = () => {
        logout()
    }
    return (
        <div>
            <Button onClick={handleLogout}>

                {
                    user?.email ? user.email : ""
                }
                <p>logout </p>

            </Button>
        </div>
    );
};

export default Logout;