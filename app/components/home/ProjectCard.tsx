import { ProjectModel } from "@/models/ProjectModel";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { User } from "@nextui-org/user";
import React from "react";

const ProjectCard = ({ project }: { project: ProjectModel }) => {
  return (
    <Card shadow="sm" isPressable>
      <CardBody className="overflow-hidden p-2 flex justify-start flex-col items-start gap-1">
        <User
          name={project?.title}
          description={project?.company}
          avatarProps={{
            src: project?.imageUrl,
            size: "lg",
          }}
        />
      </CardBody>
      <CardFooter className="text-small flex flex-col justify-start items-start">
        <p className="font-bold">Description:</p>
        <p className="text-default-500 text-left">{project?.content}</p>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
