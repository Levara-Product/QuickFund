import QF from "@/components/pages/QF";
import { faqSchemaFromComponent, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "QuickFund \u2014 Don't Just Take The Loan. Take The Right One.",
  description: "Singapore-based business financing advisory across 8 markets. Free AI loan assessment, term sheet review, and rate benchmarking.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "QuickFund \u2014 Don't Just Take The Loan. Take The Right One.",
    description: "Singapore-based business financing advisory across 8 markets. Free AI loan assessment, term sheet review, and rate benchmarking.",
    url: "/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqSchemaFromComponent("QF.jsx")} />
      <QF />
    </>
  );
}
