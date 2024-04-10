"use client";
import AboutScroller from "@/app/components/about/AboutScroller";
import { aboutItems } from "@/models/AboutModel";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import React from "react";

const Page = () => {
  const [activeItem, setActiveItem] = React.useState(aboutItems[0]);
  const [items, setItems] = React.useState(aboutItems);
  React.useEffect(() => {
    console.log(activeItem);
  }, [activeItem]);

  const handleOnNextClick = () => {
    const nextIndex = (activeItem.id % items.length) + 1;
    setActiveItem(items.find((item) => item.id === nextIndex));
  };

  const handleOnPreviousClick = () => {
    const previousIndex =
      activeItem.id === 1 ? items.length : activeItem.id - 1;
    setActiveItem(items.find((item) => item.id === previousIndex));
  };

  // Reorder items so that active item appears first
  const reorderedItems = [...items];
  const activeIndex = reorderedItems.findIndex(
    (item) => item.id === activeItem.id
  );
  const activeItemObj = reorderedItems.splice(activeIndex, 1)[0];
  reorderedItems.unshift(activeItemObj);

  return (
    <>
      <AboutScroller
        handleOnNextClick={handleOnNextClick}
        handleOnPreviousClick={handleOnPreviousClick}
        activeItem={activeItem}
      />
      {reorderedItems.map((item) => {
        return (
          <Card key={item.id} className="m-5">
            <CardHeader>{item.title}</CardHeader>
            <CardBody>{item.content}</CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default Page;
