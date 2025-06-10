'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    <div className="text-center bg-fondo text-texto min-h-screen">

      {/* MENÚ SUPERIOR */}
      <nav className="w-full py-4 px-4 flex justify-center flex-wrap gap-3 md:gap-6">
        {['Inicio', 'Sobre Nosotros', 'Productos', 'Tips & Estilo', 'Contacto'].map((item) => (
          <Link
            key={item}
            href="#"
            className="text-sm md:text-lg px-3 py-1 rounded-full border border-texto hover:bg-texto hover:text-fondo transition"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* LOGO MARÉ */}
      <div className="pt-4 md:pt-10">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">MARÉ</h1>
      </div>

      {/* VIDEO */}
      <div className="relative w-full aspect-video overflow-hidden mt-6">
        <video
          className="object-cover w-full h-full"
          src="/video-institucional.mp4"
          autoPlay
          loop
          muted
        />
      </div>

      {/* FRASE */}
      <div className="mt-6 px-4">
        <p className="text-lg md:text-2xl">Tu estilo en cada detalle</p>
      </div>

      {/* DESTACADOS */}
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
