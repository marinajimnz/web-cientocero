# Cientocero · web

Maqueta navegable del rediseño de [cientocero.es](https://cientocero.es), tributo a Supersubmarina.

Es una sola página HTML (`index.html`) con cuatro vistas:

| Vista | Dirección |
| --- | --- |
| Home: gira 2027, setlist, la experiencia, avisos y contratación | `index.html#inicio` |
| Tú haces el setlist | `index.html#setlist` |
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
- En el setlist, el fragmento de audio está simulado. En la web real se conecta con los fragmentos de YouTube del plugin actual.
- El ranking "Lo más pedido" usa datos de ejemplo.
- El enlace "Saltar registro" del setlist es para enseñar la maqueta rápido.
- Facebook y YouTube no tienen enlace todavía.

Las fotos y los logos vienen de la web actual de Cientocero. Las fotos `escenario.jpg` y `voz.jpg` son © Óscar Lugo · Cooltural.
