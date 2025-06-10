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
      {/* MENÚ SUPERIOR ÚNICO */}
      <nav className="w-full flex justify-center flex-wrap gap-6 py-5 bg-fondo shadow-sm text-lg md:text-xl font-semibold border-b border-texto/20">
        <a href="#inicio" className="px-3 hover:text-primary border-r border-texto/30">Inicio</a>
        <a href="#nosotros" className="px-3 hover:text-primary border-r border-texto/30">Sobre Nosotros</a>
        <a href="#productos" className="px-3 hover:text-primary border-r border-texto/30">Productos</a>
        <a href="#tips" className="px-3 hover:text-primary border-r border-texto/30">Tips & Estilo</a>
        <a href="#contacto" className="px-3 hover:text-primary">Contacto</a>
      </nav>

      {/* VIDEO CON LOGO */}
      <div className="relative w-full h-[45vh] md:h-[65vh] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-texto">
          <Image
            src="/logo-mare.png"
            alt="MARÉ"
            width={300}
            height={150}
            className="mb-3"
          />
          <p className="text-xl md:text-3xl">Tu estilo en cada detalle</p>
        </div>
      </div>

      {/* DESTACADOS */}
      <section className="py-14 px-4">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-wide mb-10">DESTACADOS</h2>
        <div className="relative w-full max-w-6xl h-[380px] md:h-[480px] mx-auto rounded overflow-hidden shadow-md">
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
