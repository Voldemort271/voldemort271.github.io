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
    link: "/projects",
    text: "Projects",
    icon: <FileCode2 />,
  },
  {
    link: "/contact",
    text: "Contact",
    icon: <Phone />,
  },
];

const projects = [
  {
    link: "/projects/1",
    name: "Link 1",
  },
  {
    link: "/projects/2",
    name: "Link 2",
  },
  {
    link: "/projects/3",
    name: "Link 3",
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
        <div
          className={
            "rounded-full p-1 bg-gradient-to-tl from-pink-500 to-violet-500 md:mr-2.5 "
          }
        >
          <Image
            alt={"Logo"}
            src={Pic}
            width={54}
            height={54}
            className={"aspect-square object-cover rounded-full select-none"}
          />
        </div>
        <div className={"hidden md:block"}>
          <div className={"font-bold text-lg text-slate-950"}>Voldemort</div>
          <div className={"font-semibold text-xs text-slate-600 mt-[-5px]"}>
            Portfolio v2.0
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
        {projects.map((project) => (
          <Link href={project.link} key={project.link}>
            <div className={"text-[12px] text-slate-600"}>{project.name}</div>
          </Link>
        ))}
      </div>
      <div
        className={
          "hidden md:block absolute bottom-5 font-semibold text-xs text-slate-600"
        }
      >
        Copyright &copy; &lt;3 <br /> 2024 - 2029.
      </div>
    </div>
  );
};

export default Sidenav;
