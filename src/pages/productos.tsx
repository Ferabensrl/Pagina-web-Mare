'use client';

import { useEffect, useState } from 'react';
import productosData from '../data/productos.json';
import Image from 'next/image';

export default function Productos() {
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    // Cargar productos desde JSON
    setProductos(productosData);
  }, []);

  return (
    <div className="p-6 bg-[#f9f4f0] min-h-screen">
      <h1 className="text-3xl md:text-5xl font-semibold text-center mb-10 text-[#7c5c47]">
        Todos los productos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4"
          >
            {/* Imagen principal (solo la primera) */}
            {producto.imagenes && producto.imagenes[0] ? (
              <Image
                src={`/${producto.imagenes[0]}`}
                alt={producto.nombre}
                width={300}
                height={300}
                className="object-contain rounded mb-4"
              />
            ) : (
              <div className="w-[300px] h-[300px] bg-gray-200 flex items-center justify-center mb-4 text-gray-500">
                Sin imagen
              </div>
            )}

            {/* Código y descripción */}
            <div className="text-center">
              <p className="text-lg font-bold">{producto.codigo}</p>
              <p className="text-sm text-gray-600">{producto.descripcion}</p>
            </div>

            {/* Botón WhatsApp */}
            <a
              href={`https://wa.me/59897998999?text=Hola! Me interesa este producto ${producto.codigo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-4 py-2 bg-[#7c5c47] text-white rounded hover:bg-[#5f4433] transition"
            >
              Me interesa
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
