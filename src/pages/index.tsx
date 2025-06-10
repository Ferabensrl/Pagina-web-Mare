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
    <div className="text-center">

      {/* Nombre de la marca con estilo */}
      <h1 className="text-[42px] md:text-[64px] tracking-[0.25em] text-[#7c5c47] font-semibold mt-6 mb-2">
        MARÉ
      </h1>

      {/* Video institucional */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mt-2">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Frase institucional debajo del video */}
      <div className="mt-6 text-2xl md:text-4xl text-texto">
        Tu estilo en cada detalle
      </div>

      {/* Carrusel de Destacados */}
      <div className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">DESTACADOS</h2>
        <div className="relative w-full max-w-[1024px] mx-auto h-[300px] md:h-[500px] rounded overflow-hidden">
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
