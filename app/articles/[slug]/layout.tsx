import { Metadata } from "next";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

export const metadata: Metadata = {
  title: {
    absolute: "Detalles del artículo",
  },
  description: "Detalles del artículo",
};
