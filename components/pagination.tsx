"use client";

import { Pagination as NextUIPagination } from "@nextui-org/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface Props {
  totalPages: number;
  currentPage: number;
  className?: string;
}

export const Pagination = ({ totalPages, currentPage, className }: Props) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const router = useRouter();

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    const url = `${path}?${params.toString()}`;
    router.replace(url, { scroll: false });
  };

  return (
    <NextUIPagination
      showControls
      total={totalPages}
      showShadow
      page={currentPage}
      onChange={handleChangePage}
      className={className}
    />
  );
};
