'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import contenido from '../data/contenido_web.json';

export default function Home() {
  const destacados = (contenido as any[]).filter(c => c.destacado);

  const carruselImages = ['/carrusel/1.jpg', '/carrusel/2.jpg', '/carrusel/3.jpg'];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carruselImages.length);
    }, 5000); // cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      {/* Video de fondo */}
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

      {/* Carrusel de Destacados */}
      <div className="p-4">
        <h2 className="text-2xl mb-4">Destacados</h2>
        <div className="relative w-full flex justify-center items-center h-[500px]">
          <Image
            src={carruselImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            width={800}
            height={500}
            className="rounded shadow-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}
