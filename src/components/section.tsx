import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";

export function SectionHeading({ eyebrow, title, text, link }: { eyebrow: { ar: string; en: string }; title: { ar: string; en: string }; text?: { ar: string; en: string }; link?: { to: "/services" | "/projects" | "/contact"; ar: string; en: string } }) {
  const { language, t } = useLanguage();
  return <div className="mb-10 grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] md:items-end">
    <div><p className="eyebrow">{t(eyebrow)}</p><h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight md:text-5xl">{t(title)}</h2></div>
    <div>{text && <p className="max-w-xl text-base leading-8 text-muted-foreground">{t(text)}</p>}{link && <Link to={link.to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">{t(link)}{language === "ar" ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}</Link>}</div>
  </div>;
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: { ar: string; en: string }; title: { ar: string; en: string }; text: { ar: string; en: string } }) {
  const { t } = useLanguage();
  return <section className="bg-surface-dark text-surface-dark-foreground"><div className="mx-auto max-w-screen-2xl px-5 py-20 md:py-28 lg:px-10"><p className="eyebrow">{t(eyebrow)}</p><h1 className="mt-5 max-w-5xl font-display text-4xl font-semibold leading-tight md:text-7xl">{t(title)}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-surface-muted">{t(text)}</p></div></section>;
}