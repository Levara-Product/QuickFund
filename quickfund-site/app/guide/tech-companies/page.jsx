import TechCompaniesGuide from "@/components/pages/TechCompaniesGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Tech Companies Financing in Singapore \u2014 QuickFund Guide",
  description: "Debt options for technology companies: revenue-based financing, working capital, and venture debt.",
  alternates: { canonical: "/guide/tech-companies" },
  openGraph: {
    title: "Tech Companies Financing in Singapore \u2014 QuickFund Guide",
    description: "Debt options for technology companies: revenue-based financing, working capital, and venture debt.",
    url: "/guide/tech-companies",
    images: [{ url: "/og-guide-tech-companies.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Tech Companies", title: "Tech Companies Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <TechCompaniesGuide />
    </>
  );
}
