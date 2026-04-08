import type { Metadata } from "next";
import { Anton, Condiment } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const condiment = Condiment({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-condiment",
});

export const metadata: Metadata = {
  title: "Orbis.Nft",
  description: "A digital object fixed beyond time and place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${condiment.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-cream selection:bg-neon selection:text-background overflow-x-hidden">
        {/* Texture Overlay */}
        <div className="fixed inset-0 z-50 pointer-events-none mix-blend-lighten opacity-60 bg-[url('/texture.png')] bg-cover" />
        {children}
      </body>
    </html>
  );
}
