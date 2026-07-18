import PartnersPage from "@/components/pages/PartnersPage";

export const metadata = {
  title: "Referral Partners \u2014 QuickFund",
  description: "For accountants, lawyers and corporate secretaries: refer clients who need financing, we handle the rest.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Referral Partners \u2014 QuickFund",
    description: "For accountants, lawyers and corporate secretaries: refer clients who need financing, we handle the rest.",
    url: "/partners",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <PartnersPage />
    </>
  );
}
