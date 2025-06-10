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

      {/* Logo PNG de MARÉ */}
      <div className="w-full flex justify-center my-2">
        <Image
          src="/logo-mare.png"
          alt="MARÉ Logo"
          width={320}
          height={100}
        />
      </div>

      {/* Video de fondo */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* Frase institucional */}
      <div className="text-xl md:text-3xl text-texto mt-4 mb-8">
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
