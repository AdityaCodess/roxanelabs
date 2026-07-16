import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalChatWidget from "@/components/features/RoxyAI/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roxane Laboratories | WHO-GMP Certified Pharma Manufacturer",
  description:
    "A modern, high-performance web platform for a pharmaceutical manufacturing unit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        {/* 
          ONLY render global children and floating widgets here! 
          NO TopBar, NO Navbar, NO Footer — this keeps /login and /dashboard 100% clean and isolated!
        */}
        {children}
        <LocalChatWidget />
      </body>
    </html>
  );
}
