import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import CoverVideo from "@/app/components/CoverVideo";
import Footer from "@/app/components/Footer";
import { profileImageUrl } from "@/app/lib/data";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rasab Junior - Top Rated Shopify Expert & Digital Marketing Specialist",
  description:
    "Rasab Junior is a top-rated Shopify expert and digital marketing specialist with 5+ years experience. 942+ satisfied clients, 5.0 rating. Expert in e-commerce, Facebook Ads, Google Ads, and store optimization.",
  authors: [{ name: "Rasab Junior" }],
  openGraph: {
    title:
      "Rasab Junior - Top Rated Shopify Expert & Digital Marketing Specialist",
    description:
      "Top-rated Shopify expert with 942+ satisfied clients and 5.0 rating. Expert in e-commerce, digital marketing, and store optimization.",
    images: [profileImageUrl],
    url: "https://rasabjunior.pro",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: profileImageUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <CoverVideo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
