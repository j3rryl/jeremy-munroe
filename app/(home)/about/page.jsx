"use client";
import AboutScroller from "@/app/components/about/AboutScroller";
import { aboutItems } from "@/models/AboutModel";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

const Page = () => {
  const [activeItem, setActiveItem] = React.useState(aboutItems[0]);
  const [items, setItems] = React.useState(aboutItems);
  const [sliderValue, setSliderValue] = React.useState(1);
  const handleOnNextClick = () => {
    const nextIndex = (activeItem.id % items.length) + 1;
    setActiveItem(items.find((item) => item.id === nextIndex));
    setSliderValue((activeItem.id * 100) / items.length);
  };

  const handleOnPreviousClick = () => {
    const previousIndex =
      activeItem.id === 1 ? items.length : activeItem.id - 1;
    setActiveItem(items.find((item) => item.id === previousIndex));
    setSliderValue((activeItem.id * 100) / items.length);
  };

  // Reorder items so that active item appears first
  const reorderedItems = [...items];
  const activeIndex = reorderedItems.findIndex(
    (item) => item.id === activeItem.id
  );
  const activeItemObj = reorderedItems.splice(activeIndex, 1)[0];
  reorderedItems.unshift(activeItemObj);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <>
      <AboutScroller
        handleOnNextClick={handleOnNextClick}
        handleOnPreviousClick={handleOnPreviousClick}
        activeItem={activeItem}
        sliderValue={sliderValue}
      />
      {reorderedItems.map((item) => {
        return (
          <Card key={item.id} className="m-5">
            <CardHeader className="flex-col items-start">
              <p className="text-primary font-bold">{item.title}</p>
              <p className="text-default-500 text-sm">{item.type}</p>
              <p className="text-default-500 text-sm">{`${new Date(
                item.startDate
              ).toLocaleString("en-us", options)} to ${new Date(
                item.endDate
              ).toLocaleString("en-us", options)}`}</p>
            </CardHeader>
            <CardBody className="text-stone">{item.content}</CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default Page;
