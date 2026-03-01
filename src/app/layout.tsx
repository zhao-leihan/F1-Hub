import type { Metadata } from "next";
import { Outfit, Racing_Sans_One } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const racing = Racing_Sans_One({
  variable: "--font-racing",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "F1 Hub | by Rayhan",
  description: "The ultimate cinematic experience for Formula 1 fans.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${racing.variable} dark`}>
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
