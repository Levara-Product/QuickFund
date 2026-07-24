import ResponsiblePromise from "@/components/pages/ResponsiblePromise";

export const metadata = {
  title: "Responsible Business Promise \u2014 QuickFund",
  description: "Our commitments: honest advice, no irresponsible borrowing, full cost transparency, and reading every term sheet.",
  alternates: { canonical: "/responsible-business-promise" },
  openGraph: {
    title: "Responsible Business Promise \u2014 QuickFund",
    description: "Our commitments: honest advice, no irresponsible borrowing, full cost transparency, and reading every term sheet.",
    url: "/responsible-business-promise",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <ResponsiblePromise />
    </>
  );
}
