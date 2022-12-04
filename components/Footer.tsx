import React from "react";
import { footerData } from "../text";
import ContactForm from "./ContactForm";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full bg-[#202020] flex justify-center items-center py-8">
        <div className="w-4/5 flex justify-center">
          <div className="flex flex-col relative w-1/4">
            <img
              src="/assets/images/project_prakriti_logo_white.svg"
              alt=""
              className="aspect-square w-56"
            />
            <div className="flex flex-col text-[#FEFEFE] justify-center text-left gap-10 font-thin relative">
              <h1>{footerData.number}</h1>
              <h1>{footerData.email}</h1>
              <p>{footerData.address}</p>
            </div>
          </div>
          <div className="flex flex-col w-3/4 relative left-24 items-center justify-center pt-10 gap-6">
            <h1 className="text-4xl text-[#FEFEFE] w-4/5 m-auto">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
