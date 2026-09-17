import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X, MessageCircle, ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import logo from "@/assets/taj-logo.png.asset.json";
import { Button } from "@/components/ui/button";
import { useLanguage, whatsappHref, phoneHref, phoneDisplay } from "@/lib/i18n";

const nav = [
  { to: "/", ar: "الرئيسية", en: "Home" },
  { to: "/services", ar: "الخدمات", en: "Services" },
  { to: "/projects", ar: "الأعمال", en: "Projects" },
  { to: "/about", ar: "من نحن", en: "About" },
  { to: "/contact", ar: "تواصل معنا", en: "Contact" },
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto grid h-20 max-w-screen-2xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:flex lg:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img src={logo.url} alt="TAJ" className="size-14 shrink-0 object-contain" />
            <div className="min-w-0 border-s border-border ps-3">
              <span className="block truncate font-display text-xl font-bold tracking-normal">TAJ</span>
              <span className="hidden text-[10px] uppercase text-muted-foreground sm:block">Engineering & Metal Fabrication</span>
            </div>
          </Link>
          <nav className="mx-auto hidden items-center gap-7 lg:flex" aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className={`text-sm transition-colors hover:text-primary ${path === item.to ? "text-primary" : "text-muted-foreground"}`}>
                {item[language]}
              </Link>
            ))}
          </nav>
          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label={language === "ar" ? "Switch to English" : "التبديل إلى العربية"}>
              <span className="text-xs font-bold">{language === "ar" ? "EN" : "ع"}</span>
            </Button>
            <Button asChild><Link to="/contact">{language === "ar" ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button>
          </div>
          <div className="flex items-center gap-1 lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "ar" ? "en" : "ar")} aria-label="Language">
              <span className="text-xs font-bold">{language === "ar" ? "EN" : "ع"}</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label={language === "ar" ? "القائمة" : "Menu"}>
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-5 lg:hidden">
            {nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg">{item[language]}</Link>)}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-surface-dark text-surface-dark-foreground">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-10">
          <div><img src={logo.url} alt="TAJ" className="size-20 object-contain" /><p className="mt-4 max-w-sm text-sm leading-7 text-surface-muted">{language === "ar" ? "تصنيع وتنفيذ حلول معدنية مخصصة للفلل والمشاريع المعمارية الراقية في الإمارات." : "Custom metal fabrication and execution for premium villas and architectural projects in the UAE."}</p></div>
          <div><p className="eyebrow">{language === "ar" ? "تواصل مباشر" : "Direct contact"}</p><a href={phoneHref} dir="ltr" className="mt-4 block font-display text-2xl text-primary">{phoneDisplay}</a><a href={whatsappHref(language)} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm"><MessageCircle className="size-4" />WhatsApp TAJ</a></div>
          <div><p className="eyebrow">{language === "ar" ? "حلول حسب المشروع" : "Built for your project"}</p><p className="mt-4 text-sm leading-7 text-surface-muted">{language === "ar" ? "القياس، التصميم، التصنيع، التشطيب والتركيب ضمن مسار تنفيذ واحد." : "Measurement, design, fabrication, finishing and installation through one execution path."}</p></div>
        </div>
        <div className="border-t border-border px-5 py-5 text-center text-xs text-surface-muted">© 2026 TAJ. {language === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}</div>
      </footer>
      <a href={whatsappHref(language)} target="_blank" rel="noreferrer" className="fixed bottom-20 end-5 z-40 grid size-14 place-items-center rounded-full bg-success text-success-foreground shadow-float md:bottom-6" aria-label="WhatsApp TAJ"><MessageCircle /></a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-background md:hidden">
        <a href={phoneHref} className="mobile-action"><Phone className="size-4" />{language === "ar" ? "اتصال" : "Call"}</a>
        <a href={whatsappHref(language)} target="_blank" rel="noreferrer" className="mobile-action border-x border-border"><MessageCircle className="size-4" />WhatsApp</a>
        <Link to="/contact" className="mobile-action text-primary">{language === "ar" ? "عرض سعر" : "Quote"}{language === "ar" ? <ArrowUpLeft className="size-4" /> : <ArrowUpRight className="size-4" />}</Link>
      </div>
    </div>
  );
}