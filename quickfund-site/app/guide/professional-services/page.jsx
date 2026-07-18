import ProfessionalServicesGuide from "@/components/pages/ProfessionalServicesGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Professional Services Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for law, accounting, consulting and agency businesses: working capital and expansion.",
  alternates: { canonical: "/guide/professional-services" },
  openGraph: {
    title: "Professional Services Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for law, accounting, consulting and agency businesses: working capital and expansion.",
    url: "/guide/professional-services",
    images: [{ url: "/og-guide-professional-services.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Professional Services", title: "Professional Services Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <ProfessionalServicesGuide />
    </>
  );
}
