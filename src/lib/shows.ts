/**
 * Conciertos: lectura de src/data/conciertos.json y el HTML de cada fecha.
 * Se usa al construir la web (para que la lista salga ya en el HTML) y en el navegador
 * (para ocultar fechas pasadas, filtrar por mes y buscar).
 */
import data from '../data/conciertos.json';
import { esc } from './dom';

export interface Show {
  d: Date;
  city: string;
  venue: string;
  url: string;
  prov: string;
  /** "" | "ultimas" | "agotado" */
  state: string;
}

export const MES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export const MESL = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export const DIA = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];

export const monthKey = (s: Show) => `${s.d.getFullYear()}-${s.d.getMonth()}`;

/** Fechas desde hoy en adelante, ordenadas. */
export function upcoming(today = new Date()): Show[] {
  const t = new Date(today); t.setHours(0, 0, 0, 0);
  return data
    .map((s) => ({ d: new Date(`${s.fecha}T12:00:00`), city: s.ciudad, venue: s.sala, url: s.entradas, prov: s.provincia || '', state: s.estado || '' }))
    .filter((s) => s.d >= t)
    .sort((a, b) => +a.d - +b.d);
}

export function showsHTML(list: Show[], next?: Show): string {
  if (!list.length) return '<li class="empty">No hay fechas que coincidan. Apúntate a los avisos y te contamos cuando vayamos cerca.</li>';
  let h = '', last = '';
  for (const s of list) {
    const k = monthKey(s);
    if (k !== last) { h += `<li class="month">${MESL[s.d.getMonth()]} ${s.d.getFullYear()}</li>`; last = k; }
    const isNext = !!next && +s.d === +next.d && s.city === next.city;
    const buy = s.state === 'agotado'
      ? '<span class="badge-tag muted">Agotado</span>'
      : `<a class="btn ${isNext || s.state === 'ultimas' ? 'btn-lamp' : 'btn-ghost'} buy" href="${esc(s.url)}" target="_blank" rel="noopener">${s.state === 'ultimas' ? 'Últimas entradas' : 'Entradas'} <span class="arrow">↗</span></a>`;
    h += `<li class="show${isNext ? ' next' : ''}">`
      + `<div class="date"><b>${String(s.d.getDate()).padStart(2, '0')}</b><span>${DIA[s.d.getDay()]}<br>${MES[s.d.getMonth()]}</span></div>`
      + `<div class="city">${esc(s.city)}${s.prov ? `<small>${esc(s.prov)}</small>` : ''}</div>`
      + `<div class="venue"><small>Sala</small>${esc(s.venue)}</div>`
      + buy + '</li>';
  }
  return h;
}

export function nextShowHTML(s: Show): string {
  return `<div class="d"><small>${DIA[s.d.getDay()]}</small><b>${s.d.getDate()}</b><small>${MES[s.d.getMonth()]}</small></div>`
    + `<div class="i"><span class="eyebrow">Próximo concierto</span><strong>${esc(s.city)}</strong><span class="muted" style="font-size:14px">${esc(s.venue)}</span></div>`
    + '<div class="go">Entradas ↗</div>';
}

export function tickerHTML(list: Show[]): string {
  const one = list.map((s, i) => `<span${i === 0 ? ' class="s"' : ''}>${esc(s.city)}</span><span>·</span>`).join('');
  return one + one;
}
