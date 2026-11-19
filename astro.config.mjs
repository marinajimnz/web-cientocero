// @ts-check
import { defineConfig } from 'astro/config';

// La web se publica en GitHub Pages: https://marinajimnz.github.io/web-cientocero/
// Si algún día pasa a cientocero.es, cambia `site` por 'https://cientocero.es' y quita `base`.
export default defineConfig({
  site: 'https://marinajimnz.github.io',
  base: '/web-cientocero',
  trailingSlash: 'ignore',
});
