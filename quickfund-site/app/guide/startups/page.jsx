import StartupsGuide from "@/components/pages/StartupsGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Startups Financing in Singapore \u2014 QuickFund Guide",
  description: "Non-dilutive financing for startups: venture debt, working capital, and what lenders need to see.",
  alternates: { canonical: "/guide/startups" },
  openGraph: {
    title: "Startups Financing in Singapore \u2014 QuickFund Guide",
    description: "Non-dilutive financing for startups: venture debt, working capital, and what lenders need to see.",
    url: "/guide/startups",
    images: [{ url: "/og-guide-startups.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Startups", title: "Startups Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <StartupsGuide />
    </>
  );
}
