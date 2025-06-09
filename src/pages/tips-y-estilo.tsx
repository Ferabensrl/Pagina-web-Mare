import contenido from '../data/contenido_web.json';
import Image from 'next/image';

export default function Tips() {
  const tips = contenido as any[];
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl">Tips & Estilo</h1>
      {tips.map((tip, i) => (
        <div key={i} className="flex flex-col md:flex-row md:space-x-4 border p-4 rounded">
          <Image src={`/${tip.imagen}`} alt={tip.titulo} width={300} height={200} />
          <div>
            <h2 className="text-xl">{tip.titulo}</h2>
            <p>{tip.texto}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
