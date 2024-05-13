import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/models/ProjectModel";

const AllProjectsCard = () => {
  return (
    <>
      <div className="mx-5 grid sm:grid-cols-2 gap-4">
        {projects?.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </>
  );
};

export default AllProjectsCard;
