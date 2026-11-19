# Cientocero · web

Maqueta navegable del rediseño de [cientocero.es](https://cientocero.es), tributo a Supersubmarina.

Es una sola página HTML (`index.html`) con cuatro vistas:

| Vista | Dirección |
| --- | --- |
| Home: gira 2027, setlist, la experiencia, avisos y acceso a contratación | `index.html#inicio` |
| Tú haces el setlist | `index.html#setlist` |
| Contratación | `index.html#contratacion` |
| Aviso legal | `index.html#aviso-legal` |
| Política de privacidad | `index.html#privacidad` |

## Verla en local

Abre `index.html` en el navegador, o sirve la carpeta:

```bash
python3 -m http.server 8000
```

## Añadir conciertos

Las fechas están en la lista `SHOWS` dentro de `index.html`. Cada línea es un concierto:

```js
["2027-05-22","Murcia","Sala REM","https://enlace-de-entradas", "Provincia opcional", "estado opcional"]
```

El estado puede ser `"ultimas"` (botón destacado "Últimas entradas") o `"agotado"`. Las fechas pasadas se ocultan solas, y los filtros por mes y el contador de ciudades se actualizan solos.

## Lo que es solo de maqueta

- Los formularios (avisos, contratación y registro del setlist) muestran la confirmación, pero no envían datos.
- En el setlist, cada canción suena 20 s desde YouTube, con un reproductor oculto. Los vídeos y los segundos de inicio están en la lista `SONGS` de `index.html` (son los mismos que usa hoy cientocero.es/setlist). Para mover un fragmento al estribillo, cambia el último número de su línea.
- El ranking "Lo más pedido" usa datos de ejemplo.
- El enlace "Saltar registro" del setlist es para enseñar la maqueta rápido.

Las fotos y los logos vienen de la web actual de Cientocero. Las fotos `escenario.jpg` y `voz.jpg` son © Óscar Lugo · Cooltural.
