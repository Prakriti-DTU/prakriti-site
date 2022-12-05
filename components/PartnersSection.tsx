import React from "react";

type Props = {};

const PartnersSection = (props: Props) => {
  return (
    <div className="w-full flex flex-col bg-[#F7F1F0] py-24 gap-12">
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-gray-500">Meet our</h1>
        <h1 className="text-3xl font-medium">Partners</h1>
      </div>
      <div className="w-full flex items-center justify-evenly gap-[8rem]">
        <a href="https://www.ewb-india.org/" target='_blank'>
          <img src="/assets/images/testemonial_1.svg" alt="partner-1" />
        </a>
        <a href="https://mcnpartners.org/" target='_blanl=k'>
          <img src="/assets/images/testemonial_2.svg" alt="partner-2" />
        </a>
        <a href="http://www.dtu.ac.in/" target='_blank'>
          <img src="/assets/images/dtu_logo.png" alt="dtu logo" />
        </a>
      </div>
    </div>
  );
};

export default PartnersSection;
