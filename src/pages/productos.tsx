'use client';

import productos from '../data/productos.json'; // ← Importa tu JSON
import Image from 'next/image';

export default function Productos() {
  return (
    <div className="p-6 text-texto bg-[#f8f4f1]">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-10">CATÁLOGO DE PRODUCTOS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {productos.map((producto, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-4 text-center">
            <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
            <p className="text-sm text-[#7c5c47] mb-4">{producto.descripcion}</p>

            {producto.imagenes.length > 0 && (
              <Image
                src={`/imagenes/${producto.imagenes[0]}`} // muestra la primera imagen como principal
                alt={producto.nombre}
                width={300}
                height={300}
                className="mx-auto object-contain rounded-xl"
              />
            )}

            <p className="mt-4 text-sm">Código: {producto.codigo}</p>
            <p className="text-sm">Categoría: {producto.categoria}</p>

            {/* Mostrar colores disponibles */}
            {producto.colores.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold mb-1">Colores disponibles:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {producto.colores.map((color, idx) => (
                    <span key={idx} className="px-2 py-1 border rounded-full text-xs bg-[#f9f4f0]">
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Mostrar variantes sin color */}
            {producto.variantes.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold mb-1">Variantes:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {producto.variantes.map((variante, idx) => (
                    <span key={idx} className="px-2 py-1 border rounded-full text-xs bg-[#f9f4f0]">
                      {variante}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
