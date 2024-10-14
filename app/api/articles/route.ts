import prisma from "@/libs/prisma";
import { articleCreateSchema } from "@/schemas/article";
import { Prisma } from "@prisma/client";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { error, data } = articleCreateSchema.safeParse(body);

    if (error || !data) {
      return Response.json(
        {
          status: "FAILED",
          message: "Los datos enviados no son válidos",
          error: error.errors,
        },
        { status: 400 }
      );
    }

    const article = await prisma.post.create({
      data: data,
    });

    return Response.json({ status: "SUCCED", message: "", data: article });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return Response.json(
        {
          status: "FAILED",
          message: "Error al crear el artículo",
          error: error.message,
        },
        { status: 400 }
      );
    }
    console.error(error);
    return Response.json(
      {
        status: "FAILED",
        message: "Internal server error",
        error: null,
      },
      { status: 500 }
    );
  }
}
