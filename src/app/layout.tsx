import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EUL",
  description: "EUL - United Nation's Sustainable DEvelopment Goals (SDG) Classifier",
  keywords: "EUL, SDG, Research, KNN Classifier, Cosine Similarity, TFIDF, NLP, Machine Learning",
  authors: { name: "PAUL JOSHUA PREMACIO" },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
   
        <link rel="icon" href="/images/login-logo.png" type="image/png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
