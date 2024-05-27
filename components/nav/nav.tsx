"use client";

import React from "react";
import Image from "next/image";
import Pic from "@/public/pic.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileCode2, Home, Phone, User } from "lucide-react";

const links = [
  {
    link: "/",
    text: "Home",
    icon: <Home />,
  },
  {
    link: "/about",
    text: "About",
    icon: <User />,
  },
  {
    link: "/services",
    text: "Services",
    icon: <FileCode2 />,
  },
  {
    link: "/contact",
    text: "Contact",
    icon: <Phone />,
  },
];

const Sidenav = () => {
  const pathname = usePathname();

  return (
    <div
      className={
        "w-[60px] md:w-[260px] pr-5 md:p-5 h-[calc(100vh-40px)] m-5 flex flex-col fixed z-50 border-r-2" +
        " border-r-slate-600/[0.3]"
      }
    >
      <div className={"h-[60px] mb-10 w-full flex items-center justify-start"}>
        <Image
          alt={"Logo"}
          src={Pic}
          width={60}
          height={60}
          className={
            "aspect-square object-cover rounded-full border-[3px] md:border-4 border-slate-600 md:mr-2.5 select-none"
          }
        />
        <div className={"hidden md:block"}>
          <div className={"font-bold text-lg text-slate-950"}>
            Portfolio Title
          </div>
          <div className={"font-semibold text-xs text-slate-600 mt-[-5px]"}>
            Buy Premium
          </div>
        </div>
      </div>
      <div
        className={
          "w-full flex flex-col items-center md:items-start gap-5 md:gap-2.5 font-semibold md:pr-5"
        }
      >
        {links.map((link) => (
          <Link href={link.link} key={link.link} className={"w-full"}>
            <div
              className={
                pathname === link.link
                  ? "w-full flex justify-center md:justify-between text-slate-600 font-bold"
                  : "w-full flex justify-center md:justify-between text-slate-950"
              }
            >
              <span className={"hidden md:block"}>{link.text}</span>
              {link.icon}
            </div>
          </Link>
        ))}
      </div>
      <hr className={"my-5"} />
      <div
        className={"hidden md:flex w-full flex-col gap-2.5 font-semibold pr-5"}
      >
        <div className={"text-[14px]"}>Section title</div>
        <div className={"text-[12px] text-slate-600"}>Link 1</div>
        <div className={"text-[12px] text-slate-600"}>Link 2</div>
        <div className={"text-[12px] text-slate-600"}>Link 3</div>
      </div>
      <div
        className={
          "hidden md:block absolute bottom-5 font-semibold text-xs text-slate-600"
        }
      >
        Copyright &copy; Voldemort <br /> 2024 - 2029.
      </div>
    </div>
  );
};

export default Sidenav;
