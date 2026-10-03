import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import ar from './ar.json'
import fr from './fr.json'

export type Lang = 'ar' | 'fr'
type Dict = Record<string, string>
const DICTS: Record<Lang, Dict> = { ar, fr }
const KEY = 'labora.lang'

interface Ctx { lang: Lang; dir: 'rtl' | 'ltr'; setLang: (l: Lang) => void; t: (k: string) => string }
const LangCtx = createContext<Ctx | null>(null)

function initial(): Lang {
  try { const v = localStorage.getItem(KEY); if (v === 'ar' || v === 'fr') return v } catch { /* storage blocked */ }
  return 'ar'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])
  const value = useMemo<Ctx>(() => ({
    lang, dir,
    setLang: l => { setLangState(l); try { localStorage.setItem(KEY, l) } catch { /* ignore */ } },
    // Missing key falls back to the other language, then to the key itself (visible, never a crash).
    t: k => DICTS[lang][k] ?? DICTS[lang === 'ar' ? 'fr' : 'ar'][k] ?? k,
  }), [lang, dir])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}
export function useI18n() {
  const c = useContext(LangCtx)
  if (!c) throw new Error('useI18n outside LangProvider')
  return c
}
