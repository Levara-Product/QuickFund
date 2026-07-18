import DoctorsDentistsGuide from "@/components/pages/DoctorsDentistsGuide";
import { guideSchemas, JsonLd } from "@/lib/schema";

export const metadata = {
  title: "Doctors and Dentists Financing in Singapore \u2014 QuickFund Guide",
  description: "Financing for medical and dental practices: clinic expansion, equipment, buyouts, and working capital.",
  alternates: { canonical: "/guide/doctors-and-dentists" },
  openGraph: {
    title: "Doctors and Dentists Financing in Singapore \u2014 QuickFund Guide",
    description: "Financing for medical and dental practices: clinic expansion, equipment, buyouts, and working capital.",
    url: "/guide/doctors-and-dentists",
    images: [{ url: "/og-guide-doctors-and-dentists.jpg", width: 1200, height: 630 }],
  },
};

const schemas = guideSchemas({ label: "Doctors and Dentists", title: "Doctors and Dentists Financing in Singapore \u2014 QuickFund Guide" });

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (<JsonLd key={i} data={s} />))}
      <DoctorsDentistsGuide />
    </>
  );
}
