import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-zinc-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-200 dark:text-white"
        >
          Deterministic fellow
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Crafting engaging pixels and frames! Leveraging my content obssessed brain for creation.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src="/Thumbnail.jpg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex gap-3 justify-end items-center mt-20">
          {/* <CardItem
            translateZ={20}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-neutral-200"
          >
            Try now →
          </CardItem> */}
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Photo
          </CardItem>
          <CardItem
            translateZ={20}
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Video
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
