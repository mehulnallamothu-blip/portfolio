import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/effects/ScrollProgress";
import CursorGlow from "@/components/effects/CursorGlow";
import BackgroundFX from "@/components/effects/BackgroundFX"; // 👈 add

export const metadata: Metadata = {
  title: "Mehul Nallamothu · Data Analyst",
  description:
    "Portfolio of Mehul Nallamothu | Data Analyst | AI Engineer | Cloud Data Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative bg-black text-white overflow-x-hidden">
        <ScrollProgress />
        <CursorGlow />
        <BackgroundFX />     {/* 👈 render the client component */}
        <div className="relative z-0">
          {children}
        </div>
      </body>
    </html>
  );
}
