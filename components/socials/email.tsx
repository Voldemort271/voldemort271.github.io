import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

const EmailLink = () => {
  return (
    <Link
      className={
        "w-[40px] h-[40px] rounded-full border-2 border-slate-600/[0.3] bg-slate-100 flex justify-center items-center" +
        " text-slate-600/[0.7]"
      }
      href={"/"}
    >
      <Mail />
    </Link>
  );
};

export default EmailLink;
