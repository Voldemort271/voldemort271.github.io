import type { Metadata } from "next";
import "./globals.scss";
import Sidenav from "@/components/nav/nav";
import React from "react";
import EmailLink from "@/components/socials/email";
import LinkedInLink from "@/components/socials/linkedin";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Voldemort - Portfolio",
  description: "Amateur web dev and passionate UI/UX designer.",
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"grid grid-cols-[100px_auto] md:grid-cols-[300px_auto]"}>
        <div className={"col-start-1 col-end-2"}>
          <Sidenav />
        </div>
        <div
          className={
            "col-start-2 col-end-3 sm:mx-10 mr-5 my-28 flex flex-col justify-center"
          }
        >
          {children}
          <SpeedInsights />
        </div>
        <div
          className={
            "fixed bottom-[20px] right-[20px] h-[40px] max-w-sm hidden sm:flex justify-end items-center gap-2.5"
          }
        >
          <EmailLink />
          <LinkedInLink />
        </div>
      </body>
    </html>
  );
}
