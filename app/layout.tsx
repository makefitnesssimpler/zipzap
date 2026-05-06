import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "ZipZap Marketplace",
  description: "Buy and sell safely on ZipZap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
