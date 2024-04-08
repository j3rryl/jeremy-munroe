import React from "react";
import ProfileCard from "../components/home/ProfileCard";
import ProjectsCard from "../components/home/ProjectsCard";
const Page = () => {
  return (
    <>
      <ProfileCard />
      <div className="m-5 flex justify-between items-center">
        <p className="font-bold">Portfolio</p>
        <p className="text-primary">View all</p>
      </div>
      <ProjectsCard />
      <div className="m-5 flex justify-between items-center">
        <p className="font-bold">My Developer Kit</p>
        <p className="text-primary">View all</p>
      </div>
      {/* <ProjectsCard /> */}
    </>
  );
};

export default Page;
