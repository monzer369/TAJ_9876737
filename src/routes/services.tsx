import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageIntro } from "@/components/section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Custom Metal Fabrication Services Dubai | TAJ" },
    { name: "description", content: "Custom iron staircases, railings, gates, fences, canopies, villa metalwork and sliding pool covers fabricated in Dubai." },
    { property: "og:title", content: "TAJ Custom Metalwork Services" },
    { property: "og:description", content: "Explore custom fabrication and installation services for villas and premium UAE projects." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/services" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/services" }] }),
  component: ServicesPage,
});

function ServicesPage() {
  const { language, t } = useLanguage();
  return <>
    <PageIntro eyebrow={{ ar: "الخدمات", en: "Services" }} title={{ ar: "حلول معدنية مصممة حول مشروعك", en: "Metal solutions designed around your project" }} text={{ ar: "لكل مساحة قياساتها واستخدامها ولغتها المعمارية. لذلك نطور كل حل حسب المتطلبات، ثم نصنعه ونشطيبه ونركبه.", en: "Every space has its own measurements, use and architectural language. We tailor, fabricate, finish and install accordingly." }} />
    <section className="section-shell"><div className="grid gap-5 md:grid-cols-2">{services.map((service, index) => <article key={service.id} className="border border-border bg-background">
      {service.image && <img src={service.image} alt={t(service.name)} className="aspect-[16/9] w-full object-cover" loading="lazy" />}
      <div className="p-7 md:p-9"><span className="text-xs text-primary">{String(index + 1).padStart(2, "0")}</span><h2 className="mt-5 font-display text-3xl font-semibold">{t(service.name)}</h2><p className="mt-4 leading-8 text-muted-foreground">{t(service.description)}</p><p className="mt-5 text-xs uppercase text-primary">{service.materials}</p><ul className="mt-6 grid gap-2 text-sm"><li className="flex items-center gap-2"><Check className="size-4 text-primary" />{language === "ar" ? "تصميم وقياسات حسب الموقع" : "Site-specific design and measurements"}</li><li className="flex items-center gap-2"><Check className="size-4 text-primary" />{language === "ar" ? "تشطيبات وخيارات مخصصة" : "Custom finish options"}</li><li className="flex items-center gap-2"><Check className="size-4 text-primary" />{language === "ar" ? "تصنيع وتركيب متخصص" : "Specialist fabrication and installation"}</li></ul><Button asChild className="mt-7"><Link to="/contact" search={{ project: service.id }}>{language === "ar" ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button></div>
    </article>)}</div></section>
    <section className="bg-muted"><div className="section-shell"><p className="eyebrow">{language === "ar" ? "نظام الدفع" : "Payment Structure"}</p><h2 className="mt-4 font-display text-4xl font-semibold">{language === "ar" ? "دفعات مرتبطة بمراحل التنفيذ" : "Payments aligned with progress"}</h2><div className="mt-10 grid gap-px border border-border bg-border md:grid-cols-3">{[["50%", "Initial Payment", "دفعة أولى عند بدء المشروع"], ["25%", "Progress Payment", "دفعة أثناء التنفيذ وفق مراحل المشروع"], ["25%", "Final Payment", "دفعة عند التسليم النهائي"]].map(([p,en,ar]) => <div key={en} className="bg-background p-8"><strong className="font-display text-5xl text-primary">{p}</strong><h3 className="mt-5 font-semibold">{language === "ar" ? ar : en}</h3></div>)}</div></div></section>
  </>;
}