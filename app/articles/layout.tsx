export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="mx-auto max-w-2xl">{children}</section>;
}
