import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex gap-4 mb-4">
        <h1 className="text-4xl font-bold">404 </h1>
        <div className="border-l-2 pl-2">
          <h1 className="text-lg font-bold">No encontrado</h1>
          Página no encontrada
        </div>
      </div>
      <Link href="/" className="text-primary ml-4">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
