import RetailGuide from "@/components/pages/RetailGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Retail Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for retail businesses: inventory, trade finance, renovation, expansion, and property-backed options.",
  alternates: { canonical: "/guide/retail" },
  openGraph: {
    title: "Retail Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for retail businesses: inventory, trade finance, renovation, expansion, and property-backed options.",
    url: "/guide/retail",
    images: [{ url: "/og-guide-retail.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Retail", title: "Retail Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <RetailGuide />
    </>
  );
}
