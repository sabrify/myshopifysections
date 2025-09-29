import { Geist, Geist_Mono } from "next/font/google";
import Starfield from "@/components/custom/starfieldeffect";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Shopify Sections",
  description: "My Shopify Sections - Custom Shopify Sections for Your Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased z-10`}
      >
        <Starfield />
        {children}
      </body>
    </html>
  );
}
