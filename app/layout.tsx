import type { Metadata } from "next";
import { Syne } from "next/font/google";
import localFont from "next/font/local";
import MainMenu from "@/components/CustomUi/Header/MainMenu";
import MainFooter from "@/components/CustomUi/Footer/MainFooter";
import PageTransition from "@/components/Animations/PageTransition";
import CursorFollower from "@/components/Animations/customCursor";

import "./globals.css";
import CurveEffect from "@/components/Animations/CurveEffect";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const Satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-satoshi",
});

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
      <body
        className={`${syne.variable} ${Satoshi.variable} bg-white container`}
      >
          <CursorFollower />
        <MainMenu />
        <CurveEffect />
       <PageTransition>{children}</PageTransition> 
        <MainFooter />
      </body>
    </html>
  );
}
