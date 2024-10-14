import { subtitle, title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import NextLink from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Todo lo que necesitas&nbsp;</span>
        <span className={title({ color: "violet" })}>saber&nbsp;</span>
        <br />
        <span className={title()}>de programación</span>
        <div className={subtitle({ class: "mt-4" })}>
          Entérate de las últimas noticias y tutoriales de programación.
        </div>
      </div>

      <div className="flex gap-3">
        <Button as={NextLink} size="lg" color="primary" href="/articles">
          Empezar ahora
        </Button>
      </div>
    </section>
  );
}
