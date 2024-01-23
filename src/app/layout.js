import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tipnator: Easy Tip Calculation",
  description:
    "Tipnator: Your chill sidekick for stress-free tip calculations. Easy, breezy, and as relaxed as it gets – because tipping should be as simple as a summer day. Cheers to the easiest way to calculate your tips!",
  alternates: {
    canonical: "https://tipnator.com/",
  },
  openGraph: {
    title: "Tipnator: Easy Tip Calculation",
    description:
      "Tipnator: Your chill sidekick for stress-free tip calculations. Easy, breezy, and as relaxed as it gets – because tipping should be as simple as a summer day. Cheers to the easiest way to calculate your tips!",
    url: "https://tipnator.com/",
    siteName: "Next.js",
    images: [
      {
        url: "https://www.tipnator.com/icon.png",
        width: 1024,
        height: 1024,
        alt: "Tipnator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JC8Z0QDCN6"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-JC8Z0QDCN6');
        `}
        </Script>
      </body>
    </html>
  );
}
