import "./globals.css";
import Script from "next/script";
import { GA_TRACKING_ID } from "../lib/gtag";

export const metadata = {
  title: "Sirjanjeet Singh — SDE & Full Stack Developer",
  description:
    "Portfolio of Sirjanjeet Singh — B.Tech IT at BPIT, GGSIPU Delhi. Building full-stack products, targeting SDE & frontend internships.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* GA Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
