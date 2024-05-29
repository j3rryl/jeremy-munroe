"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Slider } from "@nextui-org/slider";
import { ShuffleIcon } from "../icons/shuffle-icon";
import { NextIcon } from "../icons/next-icon";
import { PauseCircleIcon } from "../icons/pause-icon";
import { PreviousIcon } from "../icons/previous-icon";
import { RepeatOneIcon } from "../icons/repeat-icon";
import { HeartIcon } from "../icons/heart-icon";
import { AboutModel } from "@/models/AboutModel";

interface AboutScrollerProps {
  handleOnNextClick: () => void;
  handleOnPreviousClick: () => void;
  activeItem: AboutModel;
  sliderValue: number;
}
const AboutScroller: React.FC<AboutScrollerProps> = ({
  handleOnNextClick,
  handleOnPreviousClick,
  activeItem,
  sliderValue,
}) => {
  const [liked, setLiked] = React.useState(false);
  function formatTime(sliderValue: number) {
    const totalTimeInSeconds = 4 * 60 + 23;
    const totalTime = (sliderValue / 100) * totalTimeInSeconds;

    const minutes = Math.floor(totalTime / 60);
    const seconds = Math.floor(totalTime % 60);
    return `${minutes}:${seconds < 10 ? seconds + "0" : seconds}`;
  }
  const calculateDifferenceInYears = (startDate: Date, endDate: Date) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const yearDifference = end.getFullYear() - start.getFullYear();
    const monthDifference = end.getMonth() - start.getMonth();

    if (yearDifference === 0) {
      return `${monthDifference + 1} Months`;
    } else if (monthDifference >= 0) {
      const yearLabel = yearDifference > 1 ? "Years" : "Year";
      const monthLabel = monthDifference > 1 ? "Months" : "Month";
      return `${yearDifference} ${yearLabel} ${monthDifference} ${monthLabel}`;
    } else {
      const adjustedYearDifference = yearDifference - 1;
      const adjustedMonthDifference = 12 + monthDifference;
      const yearLabel = adjustedYearDifference > 1 ? "Years" : "Year";
      const monthLabel = adjustedMonthDifference > 1 ? "Months" : "Month";
      const yearPart =
        adjustedYearDifference >= 1
          ? `${adjustedYearDifference} ${yearLabel}`
          : "";
      return `${yearPart} ${adjustedMonthDifference} ${monthLabel}`;
    }
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] mx-auto my-5"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="!w-full !h-32 object-contain"
              isBlurred
              src={activeItem.imageUrl}
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-default-500">
                  {activeItem.type}
                </h3>
                <p className="text-small text-foreground/80">
                  {calculateDifferenceInYears(
                    activeItem.startDate,
                    activeItem.endDate
                  )}
                </p>
                <h1 className="text-large font-medium mt-2">
                  {activeItem.title}
                </h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "teal" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-primary",
                }}
                color="primary"
                value={sliderValue}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">{formatTime(sliderValue)}</p>
                <p className="text-small text-foreground/50">4:23</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="primary"
              >
                <RepeatOneIcon className="text-primary" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="primary"
                onPress={handleOnPreviousClick}
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="primary"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="primary"
                onPress={handleOnNextClick}
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                color="primary"
              >
                <ShuffleIcon className="text-primary" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AboutScroller;
