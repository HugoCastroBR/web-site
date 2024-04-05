import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Hugo Web",
  description: "Full stack web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
