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
      {/* Logo de MARÉ arriba del video */}
      <div className="pt-8">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">MARÉ</h1>
      </div>

      {/* Video de fondo */}
      <div className="relative w-full aspect-video overflow-hidden mt-6">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Frase institucional */}
      <div className="mt-6 px-4">
        <p className="text-lg md:text-2xl">Tu estilo en cada detalle</p>
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
