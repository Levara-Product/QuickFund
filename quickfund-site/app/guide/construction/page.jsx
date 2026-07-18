import ConstructionGuide from "@/components/pages/ConstructionGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Construction Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for construction firms: project financing, performance bonds, equipment, and progress-payment gaps.",
  alternates: { canonical: "/guide/construction" },
  openGraph: {
    title: "Construction Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for construction firms: project financing, performance bonds, equipment, and progress-payment gaps.",
    url: "/guide/construction",
    images: [{ url: "/og-guide-construction.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Construction", title: "Construction Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <ConstructionGuide />
    </>
  );
}
