/** Devuelve una ruta interna con la base de la web delante (en GitHub Pages es /web-cientocero/). */
export function url(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
