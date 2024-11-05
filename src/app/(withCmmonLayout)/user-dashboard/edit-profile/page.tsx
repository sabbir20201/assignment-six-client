import PasswordChange from '@/src/components/passwordAndProfile/PasswordChange';
import ProfileCustomization from '@/src/components/passwordAndProfile/ProfileCustomization';
import React from 'react';

const EditProfile = () => {
    return (
        <div>

            <PasswordChange></PasswordChange>
            <ProfileCustomization></ProfileCustomization>
        </div>
    );
};

export default EditProfile;