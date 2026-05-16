"use client"
import { createContext, useContext, useState } from "react"
import { pt } from "@/locales/pt"
import { en } from "@/locales/en"

type Lang = "pt" | "en"

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof pt
}

const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt")
  const t = lang === "pt" ? pt : en

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)