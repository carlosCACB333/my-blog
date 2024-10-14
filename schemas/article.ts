import { z } from "zod";

export const articleCreateSchema = z.object({
  title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
  slug: z.string().min(5, "El slug debe tener al menos 5 caracteres"),
  summary: z.string().min(10, "El resumen debe tener al menos 10 caracteres"),
  content: z.string().min(10, "El contenido debe tener al menos 10 caracteres"),
  image: z.string().url("La imagen debe ser una URL válida"),
  author: z.string().min(5, "El autor debe tener al menos 5 caracteres"),
});
