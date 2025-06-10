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

      {/* Botonera funcional centrada */}
      <div className="flex justify-center gap-4 py-4 flex-wrap">
        <a href="#inicio" className="border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[#e0d0bd] transition">Inicio</a>
        <a href="#sobre-nosotros" className="border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[#e0d0bd] transition">Sobre Nosotros</a>
        <a href="#productos" className="border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[#e0d0bd] transition">Productos</a>
        <a href="#tips" className="border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[#e0d0bd] transition">Tips & Estilo</a>
        <a href="#contacto" className="border px-4 py-2 rounded-full text-sm md:text-base hover:bg-[#e0d0bd] transition">Contacto</a>
      </div>

      {/* Logo destacado */}
      <h1 className="text-5xl md:text-6xl font-semibold mt-2 text-[#7c5c47]">MARÉ</h1>

      {/* Video de fondo */}
      <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden mt-4">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl text-texto">
          Tu estilo en cada detalle
        </div>
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
