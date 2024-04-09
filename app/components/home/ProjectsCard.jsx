"use client";
import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function ProjectsCard() {
  return (
    <div className="mx-5 gap-2 grid grid-cols-12 grid-rows-2 px-8">
      <Card className="col-span-12 sm:col-span-4 h-[300px]" isPressable>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Alvocatfresh
          </p>
          <h4 className="text-white font-medium text-large">
            The Avocado Emporium
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          isBlurred
          alt="Card background"
          className="z-0 w-full h-full object-cover brightness-50"
          src="https://media.istockphoto.com/id/1359819435/photo/halves-of-fresh-avocado-on-a-cutting-board.jpg?b=1&s=170667a&w=0&k=20&c=VMrEYk9r0UT6pVSqWpRjkMdSSRg-KsDaKvh2c2n_G-Y="
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]" isPressable>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">SAMS</p>
          <h4 className="text-white font-medium text-large">
            Transforming the lives of a generation
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          isBlurred
          alt="Card background"
          className="z-0 w-full h-full object-cover brightness-50"
          src="https://girlseducationsouthsudan.org/wp-content/uploads/2019/11/Capitation-Grants-Slide_1000-268_v1.jpg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]" isPressable>
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">ALiVE</p>
          <h4 className="text-white font-medium text-large">
            The ALiVE Open Source Platform
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          isZoomed
          isBlurred
          alt="Card background"
          className="z-0 w-full h-full object-cover brightness-50"
          src="https://alive.michaelgichure.com/_next/static/media/children1.7db2764f.jpg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            360 Beauty Scents
          </p>
          <h4 className="text-white font-medium text-2xl">
            Discover your signature scent
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover brightness-50"
          isBlurred
          src="https://360beautyscents.co.ke/wp-content/uploads/2023/11/darryl-low-IihqitOqdjE-unsplash.jpg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Upesy</p>
          <h4 className="text-white/90 font-medium text-xl">A Safer World</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover brightness-50"
          src="https://pbs.twimg.com/media/EvOH7hLXAAcdFHx?format=jpg&name=small"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://pbs.twimg.com/profile_images/1145333180779651073/D0A7O5fZ_400x400.png"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Security App</p>
              <p className="text-tiny text-white/60">
                Get a good night's sleep.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Get App
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
