import poolHero from "@/assets/pool-enclosure-hero.jpg.asset.json";
import poolCourtyard from "@/assets/sliding-pool-cover-courtyard.jpg.asset.json";
import poolMechanism from "@/assets/sliding-pool-cover-mechanism.jpg.asset.json";
import poolDeck from "@/assets/sliding-pool-cover-deck.jpg.asset.json";
import lowVilla from "@/assets/low-pool-cover-villa.jpg.asset.json";
import lowModern from "@/assets/low-pool-cover-modern.jpg.asset.json";
import enclosureVilla from "@/assets/pool-enclosure-villa.jpg.asset.json";
import carCanopy from "@/assets/car-canopy.jpg.asset.json";
import gardenCanopy from "@/assets/garden-canopy.jpeg.asset.json";

export type Localized = { ar: string; en: string };

export const images = {
  poolHero: poolHero.url,
  poolCourtyard: poolCourtyard.url,
  poolMechanism: poolMechanism.url,
  poolDeck: poolDeck.url,
  lowVilla: lowVilla.url,
  lowModern: lowModern.url,
  enclosureVilla: enclosureVilla.url,
  carCanopy: carCanopy.url,
  gardenCanopy: gardenCanopy.url,
};

export const services: Array<{
  id: string;
  name: Localized;
  description: Localized;
  materials: string;
  image?: string;
}> = [
  { id: "spiral", name: { ar: "الأدراج الحلزونية", en: "Spiral Staircases" }, description: { ar: "تصميم مخصص للمساحة بهيكل حديد ودرجات WPC أو خشب حسب المشروع، للاستخدام الداخلي أو الخارجي.", en: "Space-specific iron structures with WPC or timber treads, tailored for indoor or outdoor use." }, materials: "Iron · WPC · Wood" },
  { id: "straight", name: { ar: "الأدراج المستقيمة", en: "Straight Staircases" }, description: { ar: "أدراج حديثة أو صناعية تُصنع وفق قياسات المشروع وتشطيباته المطلوبة.", en: "Modern or industrial staircases fabricated to project measurements and finish requirements." }, materials: "Iron · WPC · Wood" },
  { id: "indoor", name: { ar: "الأدراج الداخلية", en: "Indoor Staircases" }, description: { ar: "حلول دقيقة تستثمر المساحة وتدمج الحديد مع WPC أو الخشب وفق التصميم.", en: "Precise, space-conscious solutions combining iron with WPC or timber as specified." }, materials: "Iron · WPC · Wood" },
  { id: "outdoor", name: { ar: "الأدراج الخارجية", en: "Outdoor Staircases" }, description: { ar: "هياكل حديدية مخصصة مع خيارات Powder Coating وWPC وتركيب متخصص.", en: "Custom iron structures with powder-coating and WPC options, professionally installed." }, materials: "Iron · WPC · Powder Coating" },
  { id: "railings", name: { ar: "الدرابزين الحديدي", en: "Iron Railings" }, description: { ar: "تصميم وتصنيع وتركيب درابزين حديث، صناعي أو بسيط بتشطيبات مخصصة.", en: "Design, fabrication and installation of modern, industrial or minimal custom railings." }, materials: "Iron · Matte · Gloss · Powder Coating" },
  { id: "balcony", name: { ar: "درابزين الشرفات", en: "Balcony Railings" }, description: { ar: "درابزين آمن ودقيق يتكامل بصريًا مع تصميم الفيلا أو الواجهة.", en: "Safety-focused, precise railings designed to integrate with the villa or façade." }, materials: "Iron · Custom Finishes" },
  { id: "villa", name: { ar: "أعمال الحديد للفلل", en: "Villa Metalwork" }, description: { ar: "بوابات وأسوار ودرابزين وشرفات ومظلات وهياكل وأبواب وأعمال معدنية حسب المشروع.", en: "Gates, fences, railings, balconies, canopies, structures, doors and bespoke metalwork." }, materials: "Iron · Metal · WPC · Wood", image: carCanopy.url },
  { id: "gates", name: { ar: "البوابات", en: "Gates" }, description: { ar: "بوابات حديدية مخصصة تُصنع داخل الورشة بتصاميم وألوان حسب الطلب.", en: "Custom iron gates, workshop-fabricated with project-specific designs and colours." }, materials: "Iron · Custom Colours" },
  { id: "fences", name: { ar: "الأسوار", en: "Fences" }, description: { ar: "أسوار معدنية مخصصة تتناغم مع لغة الفيلا أو المشروع المعمارية.", en: "Custom metal fences aligned with the architectural language of each property." }, materials: "Iron · Powder Coating" },
  { id: "canopies", name: { ar: "المظلات", en: "Canopies" }, description: { ar: "مظلات وهياكل حديدية مصممة للموقع، مصنعة في الورشة ومركبة باحتراف.", en: "Site-specific iron canopies, fabricated in our workshop and professionally installed." }, materials: "Iron · Custom Finishes", image: gardenCanopy.url },
  { id: "pools", name: { ar: "حلول تغطية المسابح", en: "Pool Cover Solutions" }, description: { ar: "أنظمة يدوية ومتحركة ومنزلقة وهياكل معدنية وتغطية كاملة باستخدام بليكسي جلاس كبديل آمن للزجاج.", en: "Manual, movable and sliding systems, metal structures, and full enclosures using Plexiglass as a safer glass alternative." }, materials: "Iron · WPC · Plexiglass", image: poolHero.url },
];

export const projects = [
  { image: poolCourtyard.url, category: { ar: "غطاء مسبح منزلق", en: "Sliding Pool Cover" }, note: { ar: "هيكل حديد وسطح WPC", en: "Iron structure with WPC deck" } },
  { image: poolMechanism.url, category: { ar: "نظام تغطية متحرك", en: "Movable Cover System" }, note: { ar: "تنفيذ جانبي مخصص", en: "Custom side-sliding execution" } },
  { image: poolDeck.url, category: { ar: "منصة تغطية للمسبح", en: "Pool Deck Cover" }, note: { ar: "حل عملي متعدد الاستخدام", en: "Practical multi-use solution" } },
  { image: lowModern.url, category: { ar: "غطاء منخفض", en: "Low Pool Cover" }, note: { ar: "حديد وبليكسي جلاس", en: "Iron and Plexiglass" } },
  { image: enclosureVilla.url, category: { ar: "تغطية كاملة للمسبح", en: "Full Pool Enclosure" }, note: { ar: "نظام قابل للانزلاق", en: "Sliding enclosure system" } },
  { image: carCanopy.url, category: { ar: "مظلة سيارات", en: "Car Canopy" }, note: { ar: "هيكل معدني مخصص", en: "Custom metal structure" } },
  { image: gardenCanopy.url, category: { ar: "مظلة حديقة", en: "Garden Canopy" }, note: { ar: "تصميم هندسي مفتوح", en: "Open architectural design" } },
  { image: lowVilla.url, category: { ar: "تغطية مسبح منخفضة", en: "Low-profile Pool Cover" }, note: { ar: "نظام يدوي أو آلي", en: "Manual or automated system" } },
];