import { z } from "zod";
const loginValidationSchema = z.object({
    email: z.string().trim().email("please enter a valid email"),
    password: z.string(),
    role: z.string(),
    profileImage: z.string(),
    userName: z.string(),
})

export default loginValidationSchema