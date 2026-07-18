import fs from "fs";
import path from "path";
import { SITE_URL, GUIDE_DATES } from "@/lib/site";

// Build-time extraction of {q, a} pairs straight from the page component
// source, per seo-head-snippets.md: "Generate from the actual FAQ content at
// build time ... Do NOT hand-maintain a duplicate copy of the answers."
// Pages are statically generated, so this fs read happens once at build.
export function faqSchemaFromComponent(componentFile) {
  const src = fs.readFileSync(
    path.join(process.cwd(), "components", "pages", componentFile), "utf8");
  const pairs = [...src.matchAll(/\{\s*q:\s*"((?:[^"\\]|\\.)*)"\s*,\s*a:\s*"((?:[^"\\]|\\.)*)"/g)]
    .map(([, q, a]) => [q, a].map((t) => t.replace(/\\(["'\\])/g, "$1")));
  if (!pairs.length) throw new Error(`no FAQ pairs found in ${componentFile}`);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pairs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "QuickFund Pte Ltd",
  url: SITE_URL,
  description:
    "Singapore-based business financing advisory. Not a lender: connects companies with licensed, exempt or otherwise permitted lenders across 8 markets.",
  parentOrganization: { "@type": "Organization", name: "Levara Advisory Group" },
  areaServed: ["SG", "MY", "HK", "US", "GB", "VN", "TH", "ID"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+65-8057-6702",
    email: "leslie@quickfund.sg",
  },
};

export function guideSchemas({ label, title }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      datePublished: GUIDE_DATES.published,
      dateModified: GUIDE_DATES.modified,
      author: { "@type": "Organization", name: "QuickFund Pte Ltd" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/#guides` },
        { "@type": "ListItem", position: 3, name: label },
      ],
    },
  ];
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
