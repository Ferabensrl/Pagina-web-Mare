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
    <div className="text-center bg-fondo text-texto">
      {/* Video de fondo */}
      <div className="relative w-full aspect-video overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold">MARÉ</h1>
          <p className="text-lg md:text-2xl mt-2">Tu estilo en cada detalle</p>
        </div>
      </div>

      {/* Carrusel de Destacados */}
      <div className="px-4 pt-16 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">DESTACADOS</h2>
        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded overflow-hidden">
          <Image
            src={carruselImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
