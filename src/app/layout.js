import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tipnator: Easy Tip Calculation",
  description:
    "Tipnator: Your chill sidekick for stress-free tip calculations. Easy, breezy, and as relaxed as it gets – because tipping should be as simple as a summer day. Cheers to the easiest way to calculate your tips!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
