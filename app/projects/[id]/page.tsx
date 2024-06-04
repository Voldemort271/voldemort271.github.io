import React from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Pic from "@/public/test.jpg";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { month } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
export const fetchCache = "force-no-store";

const ProjectDetails = async ({ params }: { params: { id: string } }) => {
  let { data } = await supabase
    .from("projects")
    .select()
    .eq("id", params.id)
    .single();

  return (
    <div className={"relative layout-animate"}>
      <div className={"hidden sm:block absolute top-0 right-10"}>
        <Link href={"/projects"}>
          <ArrowLeft />
        </Link>
      </div>
      <div className={"w-full md:max-w-screen-md my-10 mt-5"}>
        <div className={"font-bold text-5xl text-slate-950"}>
          {data ? data.name : "Future Project"}
        </div>
        <Badge
          variant={"secondary"}
          className={"bg-slate-500 text-slate-100 hover:bg-slate-600"}
        >
          {data
            ? month(parseInt(data.created_at.split("-")[1])) +
              " " +
              data.created_at.split("-")[0]
            : "Never created"}
        </Badge>
        <div
          className={"my-2.5 font-semibold text-base leading-5 text-slate-600"}
        >
          {data
            ? data.small_desc
            : "The creator has (not) planned multiple other projects for the immediate future, like this one."}
        </div>
        <div className={"my-2.5 sm:my-0 flex flex-row gap-5"}>
          <Link href={data ? data.link : "/"} target={"_blank"}>
            <Button
              className={
                "text-base font-semibold shadow-lg shadow-slate-950/[0.2] w-fit"
              }
            >
              {data ? "Visit" : "Go back"}
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={
          "mb-5 w-full flex flex-col lg:flex-row items-center gap-5 lg:max-w-screen-lg"
        }
      >
        <Image
          alt={data ? data.name : "Future Project"}
          src={data ? `/images/${data.id}.png` : Pic}
          width={900}
          height={600}
          className={
            "aspect-square object-cover w-[250px] rounded-md shadow-xl shadow-slate-950/[0.2]"
          }
        ></Image>
        <div className={"text-base"}>{data && data.large_desc}</div>
      </div>
    </div>
  );
};

export default ProjectDetails;
