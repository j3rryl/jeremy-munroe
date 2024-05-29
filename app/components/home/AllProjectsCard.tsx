import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/models/ProjectModel";

const AllProjectsCard = () => {
  return (
    <div className="mx-5 grid sm:grid-cols-2 gap-4">
      {projects?.map((project) => {
        return <ProjectCard key={project.id} project={project} />;
      })}
    </div>
  );
};

export default AllProjectsCard;
