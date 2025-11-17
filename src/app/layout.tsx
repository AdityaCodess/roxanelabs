import type { Metadata } from "next";
import "./globals.css";
import ChatWidget from "@/components/features/RoxyAI/ChatWidget"; // <--- Import this

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
        {children}
        <ChatWidget /> {/* <--- Add this right here */}
      </body>
    </html>
  );
}
