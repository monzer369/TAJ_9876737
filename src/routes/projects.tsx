import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "@/components/section";
import { projects } from "@/lib/site-data";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "TAJ Projects | Pool Covers & Custom Metalwork Dubai" },
    { name: "description", content: "View real TAJ pool cover, pool enclosure and custom canopy solutions for residential projects." },
    { property: "og:title", content: "Selected TAJ Projects" }, { property: "og:description", content: "Real custom metal solutions delivered by TAJ." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/projects" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/projects" }] }), component: ProjectsPage,
});
function ProjectsPage() {
  const { language, t } = useLanguage();
  return <><PageIntro eyebrow={{ ar: "معرض الأعمال", en: "Portfolio" }} title={{ ar: "تنفيذ حقيقي. تفاصيل يمكن رؤيتها.", en: "Real execution. Visible detail." }} text={{ ar: "يعرض هذا المعرض الصور المتاحة من حلول TAJ الفعلية فقط. نضيف فئات أخرى عندما تتوفر صور مشاريع موثقة.", en: "This gallery contains available imagery of actual TAJ solutions only. Other categories will be added when verified project photography is available." }} /><section className="section-shell"><div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <figure key={p.image} className={i === 0 || i === 4 ? "sm:col-span-2" : ""}><img src={p.image} alt={t(p.category)} className="aspect-[4/3] w-full object-cover" loading={i > 2 ? "lazy" : "eager"} /><figcaption className="mt-4 border-s-2 border-primary ps-4"><h2 className="font-semibold">{t(p.category)}</h2><p className="mt-1 text-sm text-muted-foreground">{t(p.note)}</p></figcaption></figure>)}</div><p className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">{language === "ar" ? "ملاحظة: الأنظمة والمواد النهائية تُحدد وفق متطلبات كل موقع ومشروع." : "Note: final systems and materials are determined by each site and project requirement."}</p></section></>;
}