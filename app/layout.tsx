import type { Metadata } from "next";
import "./globals.scss";
import Sidenav from "@/components/nav/nav";
import React from "react";
import EmailLink from "@/components/socials/email";
import LinkedInLink from "@/components/socials/linkedin";
import CallLink from "@/components/socials/phone";

export const metadata: Metadata = {
  title: "Portfolio site",
  description: "Because im cool",
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
            "col-start-2 col-end-3 sm:mx-10 flex flex-col justify-center"
          }
        >
          {children}
        </div>
        <div
          className={
            "fixed bottom-[20px] right-[20px] h-[40px] max-w-sm hidden sm:flex justify-end items-center gap-2.5"
          }
        >
          <EmailLink />
          <LinkedInLink />
          <CallLink />
        </div>
      </body>
    </html>
  );
}
