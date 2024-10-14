"use client";
import { articleCreateSchema } from "@/schemas/article";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Input, InputProps, Textarea } from "@nextui-org/input";
import { Post } from "@prisma/client";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
export default function CreatePostPage() {
  const { register, handleSubmit, reset, formState } = useForm<Post>({
    mode: "onChange",
    resolver: zodResolver(articleCreateSchema),
  });
  const { errors, isValid, isSubmitting } = formState;

  const getAttrs = (name: keyof Post) => {
    const attrs = register(name);
    return {
      ...attrs,
      variant: "bordered",
      className: "mb-2",
      isInvalid: !!errors[name],
      size: "sm",
      errorMessage: errors[name]?.message,
    } as InputProps;
  };

  const onSubmit = async (data: Post) => {
    try {
      const res = await fetch("/api/articles", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.status === "SUCCED") {
        toast.success("Artículo publicado correctamente");
        reset();
      } else {
        toast.error(json.message || "Ocurrió un error al publicar el artículo");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ocurrió un error al publicar el artículo");
    }
  };

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-white">¿Qué estas pensando?</h1>
      <br />
      <form className="flex flex-col  gap-2" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...getAttrs("title")}
          label="Título"
          placeholder="Escribe un título"
        />
        <Input
          {...getAttrs("slug")}
          label="Slug"
          placeholder="Escribe un slug"
        />
        <Textarea
          {...(getAttrs("summary") as any)}
          label="Resumen"
          placeholder="Escribe un resumen"
        />
        <Textarea
          {...(getAttrs("content") as any)}
          label="Contenido"
          placeholder="Escribe un artículo"
          className="textarea"
        />
        <Input
          {...getAttrs("image")}
          label="Imagen"
          placeholder="URL de la imagen"
        />
        <Input {...getAttrs("author")} label="Autor" placeholder="Tu nombre" />

        <Button
          aria-label="Publicar artículo"
          size="lg"
          color="primary"
          type="submit"
          className="btn btn-primary mt-4"
          isDisabled={!isValid || isSubmitting}
        >
          Publicar artículo
        </Button>
      </form>
    </section>
  );
}
