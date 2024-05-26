import type { Metadata } from "next";
import "./globals.scss";
import Sidenav from "@/components/nav/nav";
import React from "react";

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
      <body>
      <div className={"col-start-1 col-end-2"}>
        <Sidenav />
      </div>
      <div className={"col-start-2 col-end-3"}>
        {children}
      </div>
      </body>
    </html>
  );
}
