import React from "react";
import { supabase } from "@/lib/supabase";
import ProjectCard from "@/components/project-card/project-card";
import Pic from "@/public/pic.jpg";

export const fetchCache = "force-no-store";

const Projects = async () => {
  let { data } = await supabase.from("project").select().limit(9);
  let allProjects = data;

  return (
    <div className={"layout-animate"}>
      <div className={"w-full md:max-w-screen-sm m-10 ml-0"}>
        <div
          className={
            "font-bold text-5xl text-slate-950 bg-gradient-to-tl from-pink-500" +
            " to-violet-500" +
            " inline-block text-transparent bg-clip-text"
          }
        >
          My projects
        </div>
        <div
          className={
            "my-2.5 hidden sm:block font-semibold text-base leading-5 text-slate-600"
          }
        >
          This is a small list of my projects and stuff. It’s small, not because
          of my humbleness, but because I simply don’t have enough to show.
        </div>
      </div>
      <div
        className={
          "mb-5 w-full hidden sm:flex gap-5 flex-wrap flex-col md:flex-row"
        }
      >
        {allProjects
          ? allProjects.map((project) => (
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

export default Projects;
