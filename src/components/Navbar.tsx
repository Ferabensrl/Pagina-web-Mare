import Link from 'next/link';

const Navbar = () => (
  <nav className="flex space-x-4 p-4 bg-fondo text-texto">
    <Link href="/">Inicio</Link>
    <Link href="/sobre-nosotros">Sobre Nosotros</Link>
    <Link href="/productos">Productos</Link>
    <Link href="/tips-y-estilo">Tips & Estilo</Link>
    <Link href="/contacto">Contacto</Link>
  </nav>
);

export default Navbar;
