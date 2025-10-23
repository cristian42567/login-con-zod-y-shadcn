import z from "zod";

export const loginSchema = z.object({
    username: z.string().min(1, 'El usuario es obligatorio').max(10, 'Máximo 10 carácteres'),
    password: z.string().min(1, 'La contraseña es obligatoria').max(5, 'Es muy larga la contraseña')
})

export type LoginData = z.infer<typeof loginSchema>