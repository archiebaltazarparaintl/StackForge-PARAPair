import { z } from 'zod';

export const registerSchema = z.object({
  fullname: z.string().min(2),
  username: z.string().regex(/^[a-zA-Z0-9_]{3,20}$/),
  email: z.string().email(),
  birthDate: z.string().min(1),

  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[^A-Za-z0-9]/),

  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: "Passwords don't match",
});