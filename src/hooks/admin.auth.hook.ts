// import { useMutation } from "@tanstack/react-query"
// import { registerAdmin } from "../services/AdminAuthServices"
// import { FieldValues } from "react-hook-form"
// import { toast } from "sonner"

// export const useUserRegistration = () => {
//     return useMutation<any, Error, FieldValues>({
//         mutationKey: ["USER_REGISTRATION"],
//         mutationFn: async (userData) => await registerAdmin(userData),
//         onSuccess: () => {
//             toast.success("user register success")
//         },
//         onError: (error) => {
//             toast.error(error.message)
//         }
//     })
// }
