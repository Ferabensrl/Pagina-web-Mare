import Link from 'next/link'; // Asegurate que esté arriba con los otros imports

...

{/* Carrusel de Destacados */}
<div className="py-12">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6">DESTACADOS</h2>

  <div className="relative w-full max-w-[1024px] mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg bg-[#f9f4f0]">

    {/* Flecha izquierda */}
    <button
      onClick={() =>
        setCurrentImage((prev) => (prev - 1 + carruselImages.length) % carruselImages.length)
      }
      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
    >
      ◀
    </button>

    {/* Imagen clickeable */}
    <Link href="/productos">
      <div className="w-full h-full cursor-pointer relative">
        <Image
          src={carruselImages[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </Link>

    {/* Flecha derecha */}
    <button
      onClick={() =>
        setCurrentImage((prev) => (prev + 1) % carruselImages.length)
      }
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
    >
      ▶
    </button>

  </div>
</div>
