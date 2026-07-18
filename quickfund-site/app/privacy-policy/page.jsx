import PrivacyPolicy from "@/components/pages/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy \u2014 QuickFund",
  description: "How QuickFund collects, uses and protects your data under Singapore's PDPA.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy \u2014 QuickFund",
    description: "How QuickFund collects, uses and protects your data under Singapore's PDPA.",
    url: "/privacy-policy",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <PrivacyPolicy />
    </>
  );
}
