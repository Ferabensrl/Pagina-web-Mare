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

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + carruselImages.length) % carruselImages.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % carruselImages.length);
  };

  return (
    <div className="text-center bg-[#f9f4f0]">

      {/* Logo texto MARÉ */}
      <div className="pt-6">
        <h1 className="text-6xl md:text-7xl tracking-widest font-semibold text-[#7c5c47]">MARÉ</h1>
      </div>

      {/* Video */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mt-4">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          muted
        />
      </div>

      {/* Frase institucional */}
      <div className="mt-6 text-2xl md:text-4xl text-texto">
        Tu estilo en cada detalle
      </div>

      {/* Carrusel */}
      <div className="py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">DESTACADOS</h2>
        <div className="relative w-full max-w-[1024px] mx-auto h-[300px] md:h-[500px] bg-[#f9f4f0] rounded-2xl shadow-lg overflow-hidden">

          {/* Enlace a sección productos */}
          <a href="#productos">
            <Image
              src={carruselImages[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </a>

          {/* Flechas navegación */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full shadow hover:bg-white"
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 text-gray-800 px-2 py-1 rounded-full shadow hover:bg-white"
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
