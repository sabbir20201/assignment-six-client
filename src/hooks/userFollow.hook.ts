import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  userFollowServices,
  userUnFollowServices,
} from "../services/FollowUserServices";

export const useUserFollowing = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["USER_FOLLOWING"],
    mutationFn: async (followingId) => await userFollowServices(followingId),
    onSuccess: () => {
      toast.success("user following success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
export const useUserUnFollowing = () => {
  return useMutation<any, Error, string>({
    mutationKey: ["USER_UN_FOLLOWING"],
    mutationFn: async (followingId) => await userUnFollowServices(followingId),
    onSuccess: () => {
      toast.success("user un-following  success");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
