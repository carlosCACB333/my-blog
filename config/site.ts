export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Mis blogs",
  description: "Entérate de las últimas noticias y tutoriales de programación.",
  navItems: [
    {
      label: "Blogs",
      href: "/articles",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Blogs",
      href: "/articles",
    },
  ],
  links: {
    github: "https://github.com/carloscacb333/my-blogs",
  },
};
