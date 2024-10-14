"use client";

import { title } from "@/components/primitives";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg text-center">
      <h2 className={title({ size: "sm", class: "mb-8" })}>
        Ocurrió un error inesperado!!
      </h2>
      <br />

      <button
        aria-label="Intentar de nuevo"
        className="bg-primary text-white px-4 py-2 rounded-lg"
        onClick={() => reset()}
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
