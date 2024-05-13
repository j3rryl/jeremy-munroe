import React from "react";
import ProfileCard from "../components/home/ProfileCard";
import ProjectsCard from "../components/home/ProjectsCard";
import { Link } from "@nextui-org/link";
import DeveloperKit from "../components/home/DeveloperKit";

const Page = () => {
  return (
    <>
      <ProfileCard />
      <div className="m-5 flex justify-between items-center">
        <p className="font-bold">Portfolio</p>
        <Link color="primary" href="#">
          View all
        </Link>
      </div>
      <ProjectsCard />
      <div className="m-5 flex justify-between items-center">
        <p className="font-bold">My Developer Kit</p>
        <Link color="primary" href="#">
          View all
        </Link>
      </div>
      <DeveloperKit />
      <div className="h-12"></div>
    </>
  );
};

export default Page;
