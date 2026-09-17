import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Language = "ar" | "en";
type Copy = { ar: string; en: string };

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (copy: Copy) => string;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: (copy: Copy) => copy[language] }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export const phoneDisplay = "+971 54 446 5689";
export const phoneHref = "tel:+971544465689";
export function whatsappHref(language: Language, message?: string) {
  const fallback = language === "ar"
    ? "مرحبًا TAJ، أود طلب عرض سعر لمشروع مخصص."
    : "Hello TAJ, I would like to request a quotation for a custom project.";
  return `https://wa.me/971544465689?text=${encodeURIComponent(message || fallback)}`;
}