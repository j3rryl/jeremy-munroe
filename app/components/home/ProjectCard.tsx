import { ProjectModel } from "@/models/ProjectModel";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { User } from "@nextui-org/user";
import React from "react";
import NextLink from "next/link";
type RandomColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

const ProjectCard = ({ project }: { project: ProjectModel }) => {
  function getRandomColor(): RandomColor {
    const randomColor: RandomColor[] = [
      "primary",
      "secondary",
      "success",
      "warning",
      "danger",
    ];
    const randomIndex: number = Math.floor(Math.random() * randomColor.length);
    return randomColor[randomIndex];
  }
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
      <div className="flex justify-start items-start gap-1 ml-3">
        {project?.tags?.map((tag, index) => {
          return (
            <Chip
              key={index}
              color={getRandomColor()}
              size="sm"
              className="text-white"
            >
              {tag}
            </Chip>
          );
        })}
      </div>
      <CardFooter className="text-small flex flex-col justify-start items-start">
        <p className="font-bold">Description:</p>
        <p className="text-default-500 text-left">{project?.content}</p>
        <Button
          color="primary"
          as={NextLink}
          href={project?.url}
          target="_blank"
          className="w-full my-3"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
