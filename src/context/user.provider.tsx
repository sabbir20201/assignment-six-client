"use client"
import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { TUser } from '../types';
import { getCurrentUser } from '../services/AuthService';

interface TUserProviderValues {
    user: TUser | null;
    isLoading: boolean;
    setUser: (user: TUser) => void;
    setLoading: Dispatch<SetStateAction<boolean>>;
}

const UserContext = createContext<TUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<TUser | null>(null);
    const [isLoading, setLoading] = useState(true);

    const handleUser = async () => {
        const user = await getCurrentUser();
        setUser(user)
        setLoading(false)
    }

    useEffect(() => {
        handleUser();
    }, [isLoading])

    return (
        <UserContext.Provider value={{ user, setUser, isLoading, setLoading }}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context == undefined) {
        throw new Error("useUser must be used the userPROVIDER CONTEXT")
    }
    return context
}

export default UserProvider;