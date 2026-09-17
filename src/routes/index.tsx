import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Hammer, MessageCircle, Ruler, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section";
import { images, projects, services } from "@/lib/site-data";
import { useLanguage, whatsappHref } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TAJ | Custom Metal Fabrication Dubai" },
      { name: "description", content: "TAJ designs, fabricates and installs custom metalwork, staircases, railings, canopies and pool covers for premium UAE projects." },
      { property: "og:title", content: "TAJ — Engineered for Strength. Crafted for Luxury." },
      { property: "og:description", content: "Custom metal fabrication and engineered solutions for premium villas and architectural projects in the UAE." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const { language, t } = useLanguage();
  const Arrow = language === "ar" ? ArrowLeft : ArrowRight;
  const why = [
    [{ ar: "تصنيع داخل الورشة", en: "In-house fabrication" }, Hammer],
    [{ ar: "قياسات دقيقة", en: "Accurate measurements" }, Ruler],
    [{ ar: "تركيب متخصص", en: "Specialized installation" }, Wrench],
    [{ ar: "حلول تركز على الأمان", en: "Safety-focused solutions" }, ShieldCheck],
  ] as const;
  return (
    <>
      <section className="relative min-h-[78svh] overflow-hidden bg-surface-dark text-surface-dark-foreground">
        <img src={images.poolHero} alt={language === "ar" ? "نظام تغطية مسبح معدني مخصص من TAJ" : "Custom TAJ metal pool enclosure"} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-screen-2xl items-end px-5 pb-16 pt-28 lg:px-10 lg:pb-24">
          <div className="max-w-4xl">
            <p className="eyebrow">Luxury Engineering · Custom Metal Fabrication</p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.12] md:text-7xl lg:text-8xl">{language === "ar" ? "هندسة للقوة. تنفيذ للفخامة." : "Engineered for Strength. Crafted for Luxury."}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-surface-muted md:text-lg">{language === "ar" ? "حلول هندسية وتصنيع معدني مخصص للفلل الراقية والمشاريع المعمارية في الإمارات." : "Custom metal fabrication and engineered solutions for premium villas and architectural projects in the UAE."}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" asChild><Link to="/contact">{language === "ar" ? "اطلب عرض سعر" : "Request a Quote"}<Arrow className="size-4" /></Link></Button>
              <Button size="lg" variant="outline" asChild><a href={whatsappHref(language)} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />WhatsApp TAJ</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow={{ ar: "خدماتنا", en: "Services" }} title={{ ar: "نصنع الحل للمشروع، لا نبيع منتجًا جاهزًا", en: "Built for the project, never off the shelf" }} text={{ ar: "يبدأ كل تنفيذ من متطلبات المساحة والتصميم، ثم ينتقل إلى التصنيع والتشطيب والتركيب.", en: "Every execution starts with the space and design requirements, then moves through fabrication, finishing and installation." }} link={{ to: "/services", ar: "استكشف جميع الخدمات", en: "Explore all services" }} />
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => <article key={service.id} className="group bg-background p-7 md:min-h-72"><span className="text-xs text-primary">0{index + 1}</span><h3 className="mt-12 font-display text-2xl font-semibold">{t(service.name)}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{t(service.description)}</p><p className="mt-6 text-xs uppercase text-primary">{service.materials}</p></article>)}
        </div>
      </section>

      <section className="bg-surface-dark text-surface-dark-foreground"><div className="section-shell">
        <SectionHeading eyebrow={{ ar: "لماذا TAJ", en: "Why TAJ" }} title={{ ar: "التخصيص والتصنيع والتنفيذ ضمن حل واحد", en: "Customization, fabrication and execution in one solution" }} text={{ ar: "قرارات واضحة، مواد مناسبة للمشروع، وفريق يتولى الرحلة من القياس إلى التسليم.", en: "Clear decisions, project-appropriate materials, and one team from measurement to handover." }} />
        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{why.map(([label, Icon]) => <div key={label.en} className="bg-surface-dark p-7"><Icon className="size-7 text-primary" /><h3 className="mt-8 text-lg font-semibold">{t(label)}</h3></div>)}</div>
      </div></section>

      <section className="section-shell"><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div className="overflow-hidden"><img src={images.carCanopy} alt={language === "ar" ? "مظلة سيارات معدنية مخصصة" : "Custom metal car canopy"} className="aspect-[4/3] h-full w-full object-cover" loading="lazy" /></div><div><p className="eyebrow">{language === "ar" ? "يُصنع داخل ورشتنا" : "Built in Our Workshop"}</p><h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">{language === "ar" ? "تحكّم أكبر في كل تفصيل" : "Control over every detail"}</h2><p className="mt-6 leading-8 text-muted-foreground">{language === "ar" ? "من تجهيز الحديد والقص والتجميع واللحام، إلى التشطيب والدهان وتجهيز القطع للتركيب النهائي. TAJ جهة تصنيع وتنفيذ وليست مجرد وسيط." : "From iron preparation, cutting, assembly and welding to finishing, coating and final installation. TAJ fabricates and executes—not merely intermediates."}</p><ul className="mt-7 grid gap-3 text-sm">{[language === "ar" ? "تصنيع حسب القياسات" : "Fabricated to measurement", language === "ar" ? "تشطيبات حسب الطلب" : "Custom finishes", language === "ar" ? "تجهيز وتركيب متخصص" : "Specialist preparation and installation"].map(x => <li key={x} className="flex items-center gap-3"><Check className="size-4 text-primary" />{x}</li>)}</ul></div></div></section>

      <section className="bg-muted"><div className="section-shell"><SectionHeading eyebrow={{ ar: "مشاريع مختارة", en: "Featured Projects" }} title={{ ar: "حلول حقيقية نفذتها TAJ", en: "Real solutions delivered by TAJ" }} text={{ ar: "صور من الأعمال المتاحة للشركة، مصنفة بحسب نوع الحل والمواد المستخدمة.", en: "Available company work, categorized by solution type and materials used." }} link={{ to: "/projects", ar: "شاهد معرض الأعمال", en: "View project gallery" }} /><div className="grid gap-4 md:grid-cols-3">{projects.slice(0, 3).map((project, index) => <figure key={project.image} className={index === 0 ? "md:col-span-2" : ""}><img src={project.image} alt={t(project.category)} className="aspect-[4/3] w-full object-cover" loading="lazy" /><figcaption className="mt-4"><h3 className="font-semibold">{t(project.category)}</h3><p className="mt-1 text-sm text-muted-foreground">{t(project.note)}</p></figcaption></figure>)}</div></div></section>

      <section className="section-shell"><SectionHeading eyebrow={{ ar: "المواد والتشطيبات", en: "Materials & Finishes" }} title={{ ar: "اختيارات واضحة تخدم التصميم والاستخدام", en: "Clear choices for design and use" }} /><div className="grid gap-px border border-border bg-border md:grid-cols-3">{[{ ar: "حديد ومعدن", en: "Iron & Metal", dAr: "الأساس الإنشائي لأعمالنا المخصصة.", dEn: "The structural basis of our custom work." }, { ar: "WPC وخشب", en: "WPC & Wood", dAr: "خيارات للدرجات والأسطح حسب المشروع.", dEn: "Options for treads and surfaces by project." }, { ar: "تشطيبات مخصصة", en: "Custom Finishes", dAr: "أسود مطفي أو لامع، Powder Coating، وألوان حسب الطلب.", dEn: "Matte or gloss black, powder coating, and custom colours." }].map((m) => <div key={m.en} className="bg-background p-8"><h3 className="font-display text-2xl font-semibold">{language === "ar" ? m.ar : m.en}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{language === "ar" ? m.dAr : m.dEn}</p></div>)}</div></section>

      <section className="relative overflow-hidden bg-surface-dark text-surface-dark-foreground"><div className="grid lg:grid-cols-2"><img src={images.poolCourtyard} alt={language === "ar" ? "غطاء مسبح منزلق من الحديد وWPC" : "Sliding iron and WPC pool cover"} className="h-full min-h-96 w-full object-cover" loading="lazy" /><div className="flex items-center px-5 py-16 lg:px-16"><div><p className="eyebrow">{language === "ar" ? "حلول المسابح" : "Pool Solutions"}</p><h2 className="mt-4 font-display text-4xl font-semibold md:text-6xl">{language === "ar" ? "تغطية هندسية قابلة للحركة" : "Engineered movable coverage"}</h2><p className="mt-6 leading-8 text-surface-muted">{language === "ar" ? "أنظمة يدوية أو متحركة أو منزلقة، تشمل الهياكل المعدنية والأسطح من WPC والتغطية الكاملة ببليكسي جلاس كبديل آمن للزجاج." : "Manual, movable or sliding systems with metal structures, WPC surfaces, and full Plexiglass enclosures as a safer glass alternative."}</p><Button asChild className="mt-8"><Link to="/services">{language === "ar" ? "استكشف حلول المسابح" : "Explore pool solutions"}<Arrow className="size-4" /></Link></Button></div></div></div></section>

      <section className="section-shell"><SectionHeading eyebrow={{ ar: "طريقة العمل", en: "Our Process" }} title={{ ar: "من أول اتصال إلى التسليم النهائي", en: "From first contact to final handover" }} /><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{[["01", "WhatsApp / Call", "واتساب / اتصال"], ["02", "Site Visit", "زيارة الموقع برسوم منفصلة"], ["03", "Measurement & Assessment", "القياس وتقييم المشروع"], ["04", "Quotation", "عرض السعر"], ["05", "Scheduling", "تحديد المواعيد"], ["06", "Fabrication", "التصنيع"], ["07", "Installation", "التركيب"], ["08", "Final Handover", "التسليم النهائي"]].map(([n,en,ar]) => <div key={n} className="bg-background p-6"><span className="text-xs text-primary">{n}</span><h3 className="mt-8 font-semibold">{language === "ar" ? ar : en}</h3></div>)}</div></section>

      <section className="bg-primary text-primary-foreground"><div className="mx-auto grid max-w-screen-2xl gap-8 px-5 py-14 md:grid-cols-[auto_1fr] md:items-center lg:px-10"><div className="font-display text-7xl font-bold">10</div><div><p className="text-sm uppercase">{language === "ar" ? "سنوات ضمان" : "Year Warranty"}</p><h2 className="mt-2 text-2xl font-semibold">{language === "ar" ? "ضمان لمدة 10 سنوات على الأعمال — الدهان غير مشمول بالضمان." : "10-year warranty on our work — paint excluded."}</h2></div></div></section>

      <section className="section-shell text-center"><p className="eyebrow">{language === "ar" ? "ابدأ مشروعك" : "Start your project"}</p><h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-semibold md:text-6xl">{language === "ar" ? "شاركنا الفكرة والمساحة، ولنحدد مسار التنفيذ المناسب." : "Share the idea and space. We’ll define the right execution path."}</h2><div className="mt-8 flex justify-center gap-3"><Button size="lg" asChild><Link to="/contact">{language === "ar" ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button><Button size="lg" variant="outline" asChild><a href={whatsappHref(language)} target="_blank" rel="noreferrer">WhatsApp TAJ</a></Button></div></section>
    </>
  );
}
