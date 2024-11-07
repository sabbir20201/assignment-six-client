// import { cookies } from "next/headers"
// import axiosInstance from "../lib/AxiosInstance"
// import { FieldValues } from "react-hook-form"

// export const registerAdmin = async (userData: FieldValues) => {
//     try {
//         const { data } = await axiosInstance.post("/api/auth/admin-signup", userData)

//         if (data.success) {
//             cookies().set("accessToken", data?.data?.accessToken)
//             cookies().set("refreshToken", data?.data?.refreshToken)
//         }
//         return data
//     } catch (error: any) {
//         console.error("Axios error:", error.response?.data || error.message);
//         throw new Error(error.response?.data || error.message);
//     }
// }