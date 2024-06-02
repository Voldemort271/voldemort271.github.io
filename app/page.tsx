import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card/project-card";
import { supabase } from "@/lib/supabase";
import Pic from "@/public/pic.jpg";
import React from "react";
import Link from "next/link";

export const fetchCache = "force-no-store";

const Home = async () => {
  let { data } = await supabase.from("project").select().limit(3);
  let featured = data;

  return (
    <div className={"layout-animate"}>
      <div className={"w-full md:max-w-screen-sm m-10 ml-0"}>
        <div className={"font-bold text-5xl text-slate-950"}>
          Hi, this is{" "}
          <span
            className={
              "bg-gradient-to-tl font-extrabold from-pink-500 to-violet-500" +
              " inline-block text-transparent bg-clip-text"
            }
          >
            Voldemort
          </span>
        </div>
        <div
          className={
            "my-2.5 hidden sm:block font-semibold text-base leading-5 text-slate-600"
          }
        >
          and I&apos;m an aspiring web developer studying in one of the best
          institutions of the country. I have been making websites since I was
          12, and this is my portfolio site.
        </div>
        <div className={"my-2.5 sm:my-0 flex flex-row gap-5"}>
          <Link href={"/hire"}>
            <Button
              className={
                "text-base font-semibold shadow-lg shadow-slate-950/[0.2] w-fit"
              }
            >
              Hire me
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              className={"text-base font-medium bg-slate-100 border-2 w-fit"}
              variant={"outline"}
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={
          "mb-5 w-full hidden sm:flex gap-5 flex-wrap flex-col md:flex-row"
        }
      >
        {featured
          ? featured.map((project) => (
              <ProjectCard
                image={Pic}
                link={"/projects/" + project.id}
                title={project.name}
                key={project.id}
              >
                {project.small_desc}
              </ProjectCard>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Home;
