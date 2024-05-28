import React from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

const CallLink = () => {
  return (
    <Link
      className={
        "w-[40px] h-[40px] rounded-full border-2 border-slate-600/[0.3] bg-slate-100 flex justify-center items-center" +
        " text-slate-600/[0.7]"
      }
      href={"/"}
    >
      <Phone />
    </Link>
  );
};

export default CallLink;
