import React from "react";
import { footerData } from "../text";
import ContactForm from "./ContactForm";

type Props = {};

const Footer = (props: Props) => {
  return (
    <>
      <div className="w-full bg-[#202020] flex flex-col md:flex-row justify-center items-center py-8">
        <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-center">
          <div className="flex flex-col relative md:w-1/4 items-center">
            <img
              src="/assets/images/project_prakriti_logo_white.svg"
              alt=""
              className="aspect-square w-56"
            />
            <div className="flex flex-col text-[#FEFEFE] justify-center text-left gap-10 font-thin relative px-4 md:px-0">
              <h1>{footerData.number}</h1>
              <h1>{footerData.email}</h1>
              <p>{footerData.address}</p>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-3/4 relative md:left-24 items-start md:items-center justify-center pt-10 gap-6">
            <h1 className="text-4xl text-[#FEFEFE] md:w-4/5 m-auto">Contact Us</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
