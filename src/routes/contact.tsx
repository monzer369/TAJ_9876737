import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, Phone, Upload } from "lucide-react";
import { z } from "zod";
import { PageIntro } from "@/components/section";
import { Button } from "@/components/ui/button";
import { phoneDisplay, phoneHref, useLanguage, whatsappHref } from "@/lib/i18n";
import { services } from "@/lib/site-data";

const searchSchema = z.object({ project: z.string().max(40).optional() });

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => searchSchema.parse(search),
  head: () => ({ meta: [
    { title: "Request a Quote | TAJ Metal Fabrication Dubai" },
    { name: "description", content: "Contact TAJ by WhatsApp or phone to discuss custom metalwork, staircases, canopies or pool cover projects in the UAE." },
    { property: "og:title", content: "Contact TAJ — Request a Custom Quote" }, { property: "og:description", content: "Share your project requirements with TAJ by WhatsApp or phone." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/contact" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/contact" }] }), component: ContactPage,
});

function ContactPage() {
  const { language, t } = useLanguage();
  const { project } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const selected = services.find((service) => service.id === project)?.id || "";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = {
      name: String(form.get("name") || "").trim(), phone: String(form.get("phone") || "").trim(),
      email: String(form.get("email") || "").trim(), type: String(form.get("type") || "").trim(),
      location: String(form.get("location") || "").trim(), message: String(form.get("message") || "").trim(),
    };
    const schema = z.object({ name: z.string().min(2).max(100), phone: z.string().min(7).max(25), email: z.union([z.literal(""), z.string().email().max(255)]), type: z.string().min(1).max(80), location: z.string().min(2).max(150), message: z.string().min(5).max(1200) });
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = language === "ar" ? "يرجى إدخال هذا الحقل بشكل صحيح" : "Please enter this field correctly";
      setErrors(next); return;
    }
    setErrors({});
    const serviceName = services.find((service) => service.id === data.type);
    const details = language === "ar"
      ? `مرحبًا TAJ، أود طلب عرض سعر لمشروع مخصص.\n\nالاسم: ${data.name}\nالهاتف: ${data.phone}\nالبريد: ${data.email || "غير مذكور"}\nنوع المشروع: ${serviceName ? serviceName.name.ar : data.type}\nالموقع: ${data.location}\nالتفاصيل: ${data.message}`
      : `Hello TAJ, I would like to request a quotation for a custom project.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "Not provided"}\nProject: ${serviceName ? serviceName.name.en : data.type}\nLocation: ${data.location}\nDetails: ${data.message}`;
    window.open(whatsappHref(language, details), "_blank", "noopener,noreferrer");
  }

  const labels = language === "ar" ? { name: "الاسم", phone: "رقم الهاتف", email: "البريد الإلكتروني (اختياري)", type: "نوع المشروع", location: "الموقع", message: "تفاصيل المشروع", files: "صور المشروع", submit: "إرسال الطلب عبر واتساب" } : { name: "Name", phone: "Phone", email: "Email (optional)", type: "Project Type", location: "Location", message: "Project Details", files: "Project Photos", submit: "Send Request via WhatsApp" };
  return <><PageIntro eyebrow={{ ar: "تواصل معنا", en: "Contact" }} title={{ ar: "لنبدأ من متطلبات مشروعك", en: "Let’s start with your project requirements" }} text={{ ar: "شاركنا نوع العمل والموقع والتفاصيل المتاحة. سنجهز البيانات في رسالة واتساب مباشرة لتبدأ المحادثة مع TAJ.", en: "Share the work type, location and available details. We’ll prepare them in a direct WhatsApp message to start your conversation with TAJ." }} />
  <section className="section-shell"><div className="grid gap-12 lg:grid-cols-[0.65fr_1fr]">
    <aside><p className="eyebrow">{language === "ar" ? "تواصل مباشر" : "Direct Contact"}</p><a href={phoneHref} dir="ltr" className="mt-5 block font-display text-3xl font-semibold text-primary">{phoneDisplay}</a><div className="mt-7 grid gap-3"><Button asChild><a href={phoneHref}><Phone className="size-4" />{language === "ar" ? "اتصل الآن" : "Call Now"}</a></Button><Button variant="whatsapp" asChild><a href={whatsappHref(language)} target="_blank" rel="noreferrer"><MessageCircle className="size-4" />WhatsApp TAJ</a></Button></div><div className="mt-10 border-s-2 border-primary ps-5"><h2 className="font-semibold">{language === "ar" ? "زيارة الموقع" : "Site Visit"}</h2><p className="mt-2 text-sm leading-7 text-muted-foreground">{language === "ar" ? "يمكن ترتيب زيارة لتقييم الموقع وأخذ القياسات. زيارة الموقع لها رسوم منفصلة، ويتم توضيحها عند التواصل." : "A site visit can be arranged for assessment and measurements. It carries a separate fee, confirmed during contact."}</p></div></aside>
    <form onSubmit={submit} className="border border-border bg-muted p-6 md:p-10" noValidate><div className="grid gap-5 sm:grid-cols-2">
      <Field name="name" label={labels.name} error={errors["name"]} required />
      <Field name="phone" label={labels.phone} error={errors["phone"]} required inputMode="tel" />
      <Field name="email" label={labels.email} error={errors["email"]} inputMode="email" />
      <label className="field-label"><span>{labels.type}</span><select name="type" defaultValue={selected} required className="field-input"><option value="" disabled>{language === "ar" ? "اختر الخدمة" : "Choose a service"}</option>{services.map((service) => <option key={service.id} value={service.id}>{t(service.name)}</option>)}</select>{errors["type"] && <small className="field-error">{errors["type"]}</small>}</label>
      <Field name="location" label={labels.location} error={errors["location"]} required className="sm:col-span-2" />
      <label className="field-label sm:col-span-2"><span>{labels.message}</span><textarea name="message" required maxLength={1200} rows={5} className="field-input resize-y" />{errors["message"] && <small className="field-error">{errors["message"]}</small>}</label>
      <label className="field-label sm:col-span-2"><span>{labels.files}</span><span className="flex min-h-24 cursor-pointer items-center justify-center gap-3 border border-dashed border-border bg-background px-4 text-sm text-muted-foreground"><Upload className="size-5 text-primary" />{language === "ar" ? "اختر صورًا لإرفاقها لاحقًا في المحادثة" : "Choose photos to attach later in the conversation"}</span><input type="file" accept="image/*" multiple className="sr-only" /><small className="text-muted-foreground">{language === "ar" ? "لا تُرفع الصور من هذا النموذج؛ أرسلها في محادثة واتساب بعد فتحها." : "Photos are not uploaded by this form; send them in WhatsApp after it opens."}</small></label>
    </div><Button type="submit" size="lg" className="mt-7 w-full"><MessageCircle className="size-4" />{labels.submit}</Button></form>
  </div></section></>;
}

function Field({ name, label, error, required, inputMode, className = "" }: { name: string; label: string; error: string | undefined; required?: boolean; inputMode?: "tel" | "email"; className?: string }) {
  return <label className={`field-label ${className}`}><span>{label}</span><input name={name} required={required} inputMode={inputMode} maxLength={name === "email" ? 255 : 150} className="field-input" />{error && <small className="field-error">{error}</small>}</label>;
}