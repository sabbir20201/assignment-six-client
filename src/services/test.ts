import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/src/lib/AxiosInstance';

// Fetch follower count and follow status
// export const useFollowStatus = (userId: string) => {
//   return useQuery(['followStatus', userId], async () => {
//     const { data } = await axiosInstance.get(`/api/auth/follow-status/${userId}`);
//     return data;
//   });
// };

// Follow mutation
// export const useFollowUser = () => {
//   const queryClient = useQueryClient();
//   return useMutation(async (id: string) => {
//       const { data } = await axiosInstance.put('/api/auth/follow', { id });
//       return data;
//     },
//     {
//       onSuccess: (_, id) => {
//         queryClient.invalidateQueries({queryKey: ['followStatus', id]});
//       },
//     }
//   );
// };

// Unfollow mutation
export const useUnfollowUser = () => {
  const queryClient = useQueryClient();
  return useMutation(async (id: string) => {
      const { data } = await axiosInstance.put('/api/auth/unFollow', { id });
      return data;
    },
    {
      onSuccess: (id) => {
        queryClient.invalidateQueries({queryKey:['followStatus', id]});
      },
    }
  );
};
