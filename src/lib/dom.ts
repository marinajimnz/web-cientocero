/** Atajos pequeños para el DOM y utilidades compartidas por las páginas. */
export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  root.querySelector(sel) as T | null;
export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll(sel)) as T[];

export const esc = (s: unknown) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export const okMail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/** Copia texto; si el navegador no deja, selecciona el texto para copiarlo a mano. */
export function copyText(text: string, fallbackEl?: Element | null): Promise<boolean> {
  const select = () => {
    if (!fallbackEl) return;
    const r = document.createRange();
    r.selectNodeContents(fallbackEl);
    const s = getSelection();
    s?.removeAllRanges();
    s?.addRange(r);
  };
  try {
    return navigator.clipboard.writeText(text).then(() => true, () => { select(); return false; });
  } catch {
    select();
    return Promise.resolve(false);
  }
}
