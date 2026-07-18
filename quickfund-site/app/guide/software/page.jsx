import SoftwareGuide from "@/components/pages/SoftwareGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Software Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for software and SaaS companies: ARR-based lending, working capital, and growth debt.",
  alternates: { canonical: "/guide/software" },
  openGraph: {
    title: "Software Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for software and SaaS companies: ARR-based lending, working capital, and growth debt.",
    url: "/guide/software",
    images: [{ url: "/og-guide-software.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Software", title: "Software Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <SoftwareGuide />
    </>
  );
}
