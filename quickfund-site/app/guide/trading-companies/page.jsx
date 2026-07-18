import TradingCompaniesGuide from "@/components/pages/TradingCompaniesGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Trading Companies Financing in Singapore \u2014 QuickFund Guide",
  description: "Trade finance for import/export businesses: LCs, trust receipts, invoice financing, and working capital.",
  alternates: { canonical: "/guide/trading-companies" },
  openGraph: {
    title: "Trading Companies Financing in Singapore \u2014 QuickFund Guide",
    description: "Trade finance for import/export businesses: LCs, trust receipts, invoice financing, and working capital.",
    url: "/guide/trading-companies",
    images: [{ url: "/og-guide-trading-companies.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Trading Companies", title: "Trading Companies Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <TradingCompaniesGuide />
    </>
  );
}
