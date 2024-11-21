"use client";
import { Avatar } from "@nextui-org/avatar";

import { UseUser } from "@/src/context/user.provider";

const UserPage = () => {
  const { user } = UseUser();

  return (
    <div>
      <div className="m-2">
        <div className="mt-2 lg:w-1/3 relative p-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 via-indigo-600 via-red-700 to-pink-500">
          <div className="bg-slate-50">
            <Avatar src={user?.profileImage} />
          </div>
          <h1 className="bg-white">Welcome to MR: {user?.userName}</h1>
          <h1 className="bg-white">Email: {user?.email}</h1>
          <h1 className="bg-white">role: {user?.role}</h1>
          <h1 className="bg-white">followers: {user?.followers.length}</h1>
          <h1 className="bg-white">following: {user?.following.length}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
