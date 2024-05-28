import React from "react";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const LinkedInLink = () => {
  return (
    <Link
      className={
        "w-[40px] h-[40px] rounded-full border-2 border-slate-600/[0.3] bg-slate-100 flex justify-center items-center" +
        " text-slate-600/[0.7]"
      }
      href={"/"}
    >
      <Linkedin />
    </Link>
  );
};

export default LinkedInLink;
