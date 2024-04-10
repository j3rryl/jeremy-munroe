import React from "react";
import ProfileCard from "../components/home/ProfileCard";
import ProjectsCard from "../components/home/ProjectsCard";
import { Link } from "@nextui-org/link";

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
      {/* <ProjectsCard /> */}
    </>
  );
};

export default Page;
