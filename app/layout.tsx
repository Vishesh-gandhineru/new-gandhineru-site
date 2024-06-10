import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] , weight: ["400", "500","600" , "700" , "800"]});

export const metadata: Metadata = {
  title: "Gandhi and neru",
  description: "New Gandhi and neru website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>{children}</body>
    </html>
  );
}
