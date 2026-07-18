import LogisticsGuide from "@/components/pages/LogisticsGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Logistics Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for logistics companies: fleet, warehousing, invoice financing, and working capital.",
  alternates: { canonical: "/guide/logistics" },
  openGraph: {
    title: "Logistics Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for logistics companies: fleet, warehousing, invoice financing, and working capital.",
    url: "/guide/logistics",
    images: [{ url: "/og-guide-logistics.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Logistics", title: "Logistics Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <LogisticsGuide />
    </>
  );
}
