import React from "react";

type Props = {
  item: {
    heading: string;
    firstWord: string;
    secondWord: string;
    lastWord: string;
  };
  count: number;
};

const AlternateItem = (props: Props) => {
  return (
    <div
      className={`flex w-full items-center justify-center gap-16 ${
        props.count % 2 === 0 ? "flex-row-reverse" : "flex"
      }`}
    >
      <div className="bg-[#F4F4F4] w-[32rem] h-[28rem]"></div>
      <div className="w-[30%] flex flex-col gap-8">
        <h1 className="text-3xl font-semibold text-[#009641]">
          {props.item.heading}
        </h1>
        <p className="text-justify">
          <span>{props.item.firstWord}</span>
          <span>{props.item.secondWord}</span>
          <span>{props.item.lastWord}</span>
        </p>
      </div>
    </div>
  );
};

export default AlternateItem;
