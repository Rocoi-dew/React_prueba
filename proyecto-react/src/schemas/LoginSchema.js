import { z } from 'zod'

export const loginSchema = z.object ({
    email: z.email('Pon un email válido'),
    password: z.string().min(6, 'La contraseña debe tener almenos 6 caracteres'),
})



