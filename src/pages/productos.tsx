import useSWR from 'swr';
import Image from 'next/image';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Productos() {
  const { data } = useSWR('/api/productos', fetcher);

  if (!data) return <p className="p-8">Cargando...</p>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((prod: any) => (
        <div key={prod.Código} className="border p-2 rounded">
          <Image src={prod.imagenPrincipal} alt={prod.Nombre} width={300} height={200} className="mx-auto" />
          <h3 className="text-xl mt-2">{prod.Nombre}</h3>
          <p>{prod.Descripción}</p>
          <a
            className="underline"
            href={`https://wa.me/59897998999?text=Hola,%20me%20interesa%20este%20producto:%20${prod.Código}`}
          >
            Me interesa
          </a>
        </div>
      ))}
    </div>
  );
}
