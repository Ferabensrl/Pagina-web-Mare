import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';
import xlsx from 'xlsx';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const workbook = xlsx.readFile(path.join(process.cwd(), 'src/data/productos.xlsx'));
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(sheet, { defval: '' });

  const images = fs.readdirSync(path.join(process.cwd(), 'public/imagenes'));

  const productos = (data as any[]).map((row) => {
    const codigo = row['Código'];
    const imgs = images.filter((img) => img.startsWith(codigo));
    const principal = imgs.find((i) => !i.includes(' ')) || imgs[0];
    return {
      ...row,
      imagenes: imgs.map((i) => `/imagenes/${i}`),
      imagenPrincipal: principal ? `/imagenes/${principal}` : '',
    };
  });

  res.status(200).json(productos);
}
