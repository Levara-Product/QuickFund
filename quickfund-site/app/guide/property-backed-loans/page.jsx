import PropertyGuide from "@/components/pages/PropertyGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Property-Backed Loans Financing in Singapore \u2014 QuickFund Guide",
  description: "How to unlock equity in Singapore property: LTV, TDSR, valuation, risks, and when borrowing against property makes sense.",
  alternates: { canonical: "/guide/property-backed-loans" },
  openGraph: {
    title: "Property-Backed Loans Financing in Singapore \u2014 QuickFund Guide",
    description: "How to unlock equity in Singapore property: LTV, TDSR, valuation, risks, and when borrowing against property makes sense.",
    url: "/guide/property-backed-loans",
    images: [{ url: "/og-guide-property-backed-loans.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Property-Backed Loans", title: "Property-Backed Loans Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <PropertyGuide />
    </>
  );
}
