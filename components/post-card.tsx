import { formatDate } from "@/utils/data";
import { Image } from "@nextui-org/image";
import { Post } from "@prisma/client";
import clsx from "clsx";
import Link from "next/link";
interface Props {
  post: Post;
}
export const PostCard = ({ post }: Props) => {
  const { title, summary, image, author, content, createdAt } = post;
  return (
    <Link
      href={`/articles/${post.slug}`}
      className={clsx("p-4 shadow rounded-lg bg-content1", {})}
    >
      <article>
        <Image
          width="full"
          height={200}
          src={image}
          alt={title}
          className="w-full object-cover rounded-lg"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>

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
          <p className="text-foreground-500">{summary}</p>
        </div>
      </article>
    </Link>
  );
};
