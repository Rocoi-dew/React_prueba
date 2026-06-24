import { z } from "zod";

export const registroSchema = z
  .object({
    nombre: z
      .string()
      .min(3, "El nombre debe tener al menos 3 letras"),

    email: z
      .string()
      .email("Email no válido"),

    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),

    confirmar: z
      .string()
      .min(6, "Debes confirmar la contraseña"),
  })
  .refine((datos) => datos.password === datos.confirmar, {
    message: "Las contraseñas no coinciden",
    path: ["confirmar"],
  });