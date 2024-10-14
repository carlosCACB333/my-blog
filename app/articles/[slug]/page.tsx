import { mdToHmtl } from "@/libs/markdown";
import prisma from "@/libs/prisma";
import { formatDate } from "@/utils/data";
import { Image } from "@nextui-org/image";
import clsx from "clsx";

import Link from "next/link";
import { notFound } from "next/navigation";

interface Post {
  params: {
    slug: string;
  };
}

const BlogPage = async ({ params }: Post) => {
  const slug = params.slug;
  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!post) {
    notFound();
  }
  const { title, summary, image, author, content, createdAt } = post;
  return (
    <>
      <Image
        width="full"
        height={400}
        src={image}
        alt={title}
        className="w-full object-cover rounded-lg"
      />
      <h1 className="mt-4 text-4xl font-semibold">{title}</h1>
      <div className="flex items-center space-x-2  mb-4 mt-2">
        <Image
          width={40}
          height={40}
          src="https://picsum.photos/40/40"
          alt="Author"
          className="rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-foreground-500">{author}</span>
          <span className="text-foreground-500 text-tiny ml-auto">
            {formatDate(createdAt)}
          </span>
        </div>
      </div>
      <p
        className={clsx(
          "mt-2 text-gray-500 italic p-2 rounded-lg text-balance"
        )}
      >
        {summary}
        <br />
      </p>

      <Link href="/articles" className="text-primary">
        ← Volver
      </Link>

      <br />
      <section
        className="mt-4 prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: mdToHmtl(content) }}
      />
    </>
  );
};

export default BlogPage;
