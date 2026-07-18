import FnBGuide from "@/components/pages/FnBGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "F&B Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for restaurants, cafes and hospitality: equipment, renovation, expansion, and working capital.",
  alternates: { canonical: "/guide/f-and-b" },
  openGraph: {
    title: "F&B Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for restaurants, cafes and hospitality: equipment, renovation, expansion, and working capital.",
    url: "/guide/f-and-b",
    images: [{ url: "/og-guide-f-and-b.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "F&B", title: "F&B Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <FnBGuide />
    </>
  );
}
