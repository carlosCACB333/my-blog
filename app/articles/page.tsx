import { Pagination } from "@/components/pagination";
import { PostCard } from "@/components/post-card";
import prisma from "@/libs/prisma";
import { Button } from "@nextui-org/button";
import { Metadata } from "next";
import NextLink from "next/link";

interface Props {
  searchParams: {
    page: string;
  };
}

const PAGE_SIZE = 10;

export default async function BlogPage({ searchParams }: Props) {
  const page = parseInt(searchParams.page) || 1;

  const posts = await prisma.post.findMany({
    skip: (page - 1) * PAGE_SIZE,
    take: PAGE_SIZE,
    orderBy: {
      createdAt: "desc",
    },
  });

  const totalPosts = await prisma.post.count();

  return (
    <>
      <section className="to-blue-700 from-blue-500 bg-gradient-to-r p-4 rounded-lg mb-8">
        <h1 className="text-3xl font-bold text-white">Publica un artículo</h1>
        <p className="text-lg text-white">
          ¿Tienes algo interesante que compartir? ¡Escribe un artículo y
          compártelo con la comunidad!
        </p>
        <div className="flex justify-end">
          <Button
            aria-label="Escribir un artículo"
            as={NextLink}
            size="lg"
            color="primary"
            href="/articles/new"
            className="btn btn-primary mt-4"
          >
            Escribir un artículo
          </Button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        {posts.map((post, idx) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(totalPosts / PAGE_SIZE)}
        className="my-2 flex justify-end"
      />
    </>
  );
}

export const metadata: Metadata = {
  title: {
    default: "Mis Blogs",
    template: `%s - Mis Blogs`,
  },
  description: "Blog de la comunidad",
};
