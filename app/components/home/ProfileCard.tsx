"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";

export default function ProfileCard() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card className="max-w-[500px] mx-auto my-5">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            color="primary"
            radius="full"
            size="md"
            src="https://media.licdn.com/dms/image/C4E03AQHatm-utj-cFA/profile-displayphoto-shrink_200_200/0/1638098803049?e=1718236800&v=beta&t=N7_GItPPgcCb9gGkteEsqbI8yq0fxdTM_FOZXfTbDSQ"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              Jeremy Munroe
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @jeremymunroe
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? "bg-transparent text-foreground border-default-200"
              : ""
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-3 text-small text-default-500">
        <p>
          A Codaholic very much in love with anything which has 1s and 0s. This
          culminated in an adventure to learn every possible language.
        </p>
        <span className="pt-2">
          #Multilingual Programmer
          <span className="py-2">💻</span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-500 text-small">78</p>
          <p className=" text-default-500 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-500 text-small">18.9K</p>
          <p className="text-default-500 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
