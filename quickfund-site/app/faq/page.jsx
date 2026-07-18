import FAQPage from "@/components/pages/FAQPage";
import { faqSchemaFromComponent, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Business Financing FAQ \u2014 QuickFund",
  description: "Fees, process, personal guarantees, share charges, and how QuickFund works with international clients.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Business Financing FAQ \u2014 QuickFund",
    description: "Fees, process, personal guarantees, share charges, and how QuickFund works with international clients.",
    url: "/faq",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchemaFromComponent("FAQPage.jsx")} />
      <FAQPage />
    </>
  );
}
