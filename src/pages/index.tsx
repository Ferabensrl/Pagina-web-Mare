import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import contenido from '../data/contenido_web.json';

export default function Home() {
  const destacados = (contenido as any[]).filter(c => c.destacado);
  return (
    <div className="text-center">
      <div className="relative w-full h-96 overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-4xl text-texto">
          <Image src="/logo-mare.png" alt="MARÉ" width={200} height={100} />
          <p>Tu estilo en cada detalle</p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destacados.map((d, i) => (
            <div key={i} className="border p-2 rounded">
              <Image src={`/${d.imagen}`} alt={d.titulo} width={300} height={200} className="mx-auto" />
              <h3 className="mt-2">{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
