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
    <div className="text-center font-playfair bg-fondo min-h-screen text-texto">
      {/* Menú superior fijo */}
      <nav className="w-full flex justify-center gap-6 py-4 bg-fondo shadow-sm text-lg font-semibold">
        <a href="#inicio" className="hover:underline">Inicio</a>
        <a href="#nosotros" className="hover:underline">Sobre Nosotros</a>
        <a href="#productos" className="hover:underline">Productos</a>
        <a href="#tips" className="hover:underline">Tips & Estilo</a>
        <a href="#contacto" className="hover:underline">Contacto</a>
      </nav>

      {/* Video institucional */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-3xl md:text-5xl text-texto">
          <Image src="/logo-mare.png" alt="MARÉ" width={200} height={100} />
          <p className="mt-2">Tu estilo en cada detalle</p>
        </div>
      </div>

      {/* Sección de destacados */}
      <section className="py-10 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">DESTACADOS</h2>
        <div className="relative w-full max-w-6xl h-[400px] md:h-[500px] mx-auto rounded overflow-hidden shadow-md">
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
