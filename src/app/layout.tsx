import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/features/RoxyAI/ChatWidget"; // <--- Import this
import Footer from "@/components/layout/Footer";
import TopBar from "@/components/layout/TopBar";

export const metadata: Metadata = {
  title: "Roxane Laboratories",
  description: "Reliable Pharmaceutical Formulations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
