import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/figtree/300.css";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";
import "@fontsource/figtree/400-italic.css";
import "./globals.css";
import Script from "next/script";
import { SITE_URL } from "@/lib/site";
import { orgSchema, JsonLd } from "@/lib/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: { type: "website", siteName: "QuickFund" },
  twitter: { card: "summary_large_image" },
};

const GA4 = process.env.NEXT_PUBLIC_GA4_ID;
const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={orgSchema} />
        {children}
        {GA4 && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4}');
            `}</Script>
          </>
        )}
        {PIXEL && (
          <Script id="meta-pixel" strategy="afterInteractive">{`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL}');
            fbq('track', 'PageView');
          `}</Script>
        )}
      </body>
    </html>
  );
}
