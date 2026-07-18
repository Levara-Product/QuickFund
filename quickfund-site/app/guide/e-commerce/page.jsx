import EcommerceGuide from "@/components/pages/EcommerceGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "E-commerce Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for e-commerce businesses: inventory funding, revenue-based financing, and marketplace lending.",
  alternates: { canonical: "/guide/e-commerce" },
  openGraph: {
    title: "E-commerce Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for e-commerce businesses: inventory funding, revenue-based financing, and marketplace lending.",
    url: "/guide/e-commerce",
    images: [{ url: "/og-guide-e-commerce.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "E-commerce", title: "E-commerce Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <EcommerceGuide />
    </>
  );
}
