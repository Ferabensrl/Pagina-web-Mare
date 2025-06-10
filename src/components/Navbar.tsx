import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-fondo text-texto py-6">
      <div className="flex justify-center flex-wrap gap-4">
        <Link href="/" className="px-4 py-2 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-lg">
          Inicio
        </Link>
        <Link href="/sobre-nosotros" className="px-4 py-2 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-lg">
          Sobre Nosotros
        </Link>
        <Link href="/productos" className="px-4 py-2 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-lg">
          Productos
        </Link>
        <Link href="/tips-y-estilo" className="px-4 py-2 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-lg">
          Tips & Estilo
        </Link>
        <Link href="/contacto" className="px-4 py-2 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-lg">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
