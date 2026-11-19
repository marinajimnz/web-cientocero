# Cientocero · web

Rediseño de [cientocero.es](https://cientocero.es), tributo a Supersubmarina, hecho con [Astro](https://astro.build).

Publicada en **https://marinajimnz.github.io/web-cientocero/**

| Página | Dirección | Archivo |
| --- | --- | --- |
| Inicio: gira, setlist, la experiencia, cifras, avisos | `/` | `src/pages/index.astro` |
| Tú haces el setlist | `/setlist` | `src/pages/setlist.astro` |
| Contratación | `/contratacion` | `src/pages/contratacion.astro` |
| Aviso legal | `/aviso-legal` | `src/pages/aviso-legal.astro` |
| Política de privacidad | `/privacidad` | `src/pages/privacidad.astro` |

## Cambiar contenido sin tocar el diseño

- **Conciertos:** `src/data/conciertos.json`. Cada concierto es un bloque como este:

  ```json
  {
    "fecha": "2027-05-22",
    "ciudad": "Murcia",
    "sala": "Sala REM",
    "entradas": "https://enlace-de-entradas",
    "provincia": "",
    "estado": ""
  }
  ```

  `estado` puede ser `"ultimas"` (botón destacado "Últimas entradas") o `"agotado"`. Las fechas pasadas se ocultan solas; el contador de ciudades, los meses del filtro, el próximo concierto y la cinta de ciudades se actualizan solos.

- **Canciones del setlist:** `src/data/canciones.json`. `youtube` es el código del vídeo y `inicio` el segundo donde empiezan los 20 s que suenan (para que caiga en el estribillo).
- **Textos legales:** `src/data/legal/aviso-legal.html` y `src/data/legal/privacidad.html`. El índice lateral se genera solo con cada `<h2>`.
- **Fotos:** `src/assets/img/`. Astro las convierte a WebP y genera varios tamaños al publicar.
- **Estilos:** `src/styles/global.css`. Los colores están arriba del todo como variables (`--tungsten` es el rojo).

## Trabajar en local

Necesita Node 22.23 o superior (probado con Node 26).

```bash
npm install
npm run dev
```

Abre http://localhost:4321/web-cientocero/

## Publicar

Cada cambio que se sube a la rama `main` se publica solo en GitHub Pages (`.github/workflows/deploy.yml`), en uno o dos minutos.

Si la web pasa a su propio dominio (por ejemplo `cientocero.es`), en `astro.config.mjs` cambia `site` por ese dominio y quita `base`.

## Lo que todavía es de maqueta

- Los formularios (avisos, contratación y registro del setlist) muestran la confirmación pero no envían datos. Para la web real hay que conectarlos a un servicio (el WordPress actual, Mailchimp, un servicio de formularios…).
- Los votos del setlist no se guardan y el ranking "Lo más pedido" usa datos de ejemplo.
- El enlace "Saltar registro" del setlist es para enseñar la maqueta rápido.

Fotos y logos: web actual de Cientocero. `escenario.jpg` y `voz.jpg` © Óscar Lugo · Cooltural.
