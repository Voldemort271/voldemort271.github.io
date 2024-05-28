import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Pic from "@/public/pic.jpg";

const ProjectCard = () => {
  return (
    <Card
      className={
        "w-full lg:w-[calc(33.33%-30px)] lg:max-w-[300px] bg-slate-100 p-2.5"
      }
    >
      <Image alt={"Hi"} src={Pic} className={"w-full rounded-sm"} />
      <CardHeader className={"px-0 pt-5 pb-2.5"}>
        <CardTitle className={"text-lg font-bold leading-4"}>
          Project #1
        </CardTitle>
        <CardDescription className={"text-sm"}>
          This is a short description of the project, created with the following
          information.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
