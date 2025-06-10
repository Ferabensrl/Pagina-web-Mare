import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-fondo text-texto py-6">
      <div className="flex justify-center flex-wrap gap-4">
        <Link href="/" className="px-5 py-3 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-xl">
          Inicio
        </Link>
        <Link href="/sobre-nosotros" className="px-5 py-3 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-xl">
          Sobre Nosotros
        </Link>
        <Link href="/productos" className="px-5 py-3 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-xl">
          Productos
        </Link>
        <Link href="/tips-y-estilo" className="px-5 py-3 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-xl">
          Tips & Estilo
        </Link>
        <Link href="/contacto" className="px-5 py-3 border border-texto rounded-full hover:bg-texto hover:text-fondo transition text-xl">
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
