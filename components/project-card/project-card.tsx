import React, { ReactNode } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Pic from "@/public/pic.jpg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

interface Props {
  title: string;
  children: ReactNode;
  link?: string;
  image?: StaticImport;
}

const ProjectCard = ({ title, children, link, image }: Props) => {
  return (
    <Card
      className={
        "w-full lg:w-[calc(33.33%-30px)] lg:max-w-[300px] bg-slate-100 p-2.5"
      }
    >
      <Image alt={title} src={image || Pic} className={"w-full rounded-sm"} />
      <CardHeader className={"px-0 pt-5 pb-2.5"}>
        <Link href={link || "/"} target={"_blank"}>
          <CardTitle className={"text-lg font-bold leading-4"}>
            {title}
          </CardTitle>
        </Link>
        <CardDescription className={"text-sm"}>{children}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
