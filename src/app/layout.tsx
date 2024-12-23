import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/layout-wrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Socratica",
  description:
    "We host weekly co-working sessions for you to work on your passion projects with likeminded people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <LayoutWrapper>{children}</LayoutWrapper>
        {/* {showFooter && <Footer />} */}
      </body>
    </html>
  );
}
