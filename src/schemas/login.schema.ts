import { z } from "zod";
const loginValidationSchema = z.object({
    email: z.string().trim().email("please enter a valid email"),
    password: z.string().trim()
})

export default loginValidationSchema