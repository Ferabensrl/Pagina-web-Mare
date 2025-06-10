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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center font-playfair bg-fondo min-h-screen text-texto">

      {/* Menú original - NO se toca */}
      {/* Este bloque queda tal como está en tu layout, para no romper navegación */}

      {/* Video de fondo */}
      <div className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-texto text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-widest drop-shadow-md">MARÉ</h1>
          <p className="mt-2 text-xl md:text-3xl font-medium">Tu estilo en cada detalle</p>
        </div>
      </div>

      {/* Carrusel de Destacados */}
      <section className="py-12 md:py-16 px-4" id="destacados">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wide mb-10">DESTACADOS</h2>
        <div className="relative w-full max-w-6xl h-[320px] md:h-[440px] mx-auto rounded overflow-hidden shadow-md">
          <Image
            src={carruselImages[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
    </div>
  );
}
