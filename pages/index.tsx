import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AlternateItem from "../components/AlternateItem";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PartnersSection from "../components/PartnersSection";
import { aboutUsText } from "../text";
import { alternateSectionText } from "../text";

const alternateSectionTextItem = alternateSectionText.map((item, index) => {
  return <AlternateItem key={index} item={item} count={index + 1} />;
});

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center font-poppins gap-24 relative overflow-x-hidden">
        <Navbar className="absolute top-16 bg-[#FEFEFE70] flex justify-evenly w-full items-center py-6 font-poppins font-semibold text-[#2C2C2C]" />
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="w-4/5 h-1/4 absolute">
            <div className="">
              <div className="h-2 w-[220px] bg-[#4E4E4E] absolute top-1/4"></div>
              <div className="h-[220px] w-2 bg-[#4E4E4E] absolute top-1/4"></div>
            </div>
            <div className="absolute top-[600px] right-20 flex flex-col justify-center items-end text-[#202020] text-6xl">
              <h1 className="">We will</h1>
              <h1>help you</h1>
              <h1>
                <span className="text-[#009641]">save </span>the planet
              </h1>
            </div>
            <div>
              <div className="h-[220px] w-2 bg-[#009641] absolute top-[650px] right-0"></div>
              <div className="h-2 w-[220px] bg-[#009641] absolute right-0 top-[870px]"></div>
            </div>
          </div>
          <img
            src="/assets/images/banner_image.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        {/* white background section starts */}
        <div className="w-full bg-white flex flex-col justify-center">
          <div className="w-4/5 flex flex-col items-center justify-center m-auto gap-24">
            <div className="bg-[#202020] w-full flex items-center py-16 px-6">
              <div className="w-1/3 relative left-20 text-[#FEFEFE] flex flex-col justify-between gap-10">
                <p className="text-md">
                  <span className="font-bold">{aboutUsText.firstWord}</span>
                  <span>{aboutUsText.secondWord}</span>
                </p>
                <h1 className="text-5xl text-right">About Us</h1>
              </div>
              <div className="bg-[#F4F4F4] h-[22rem] w-1/4 absolute right-[20rem]"></div>
            </div>
            <div className="w-full flex items-center justify-between gap-4">
              <h1 className="text-5xl">What we do</h1>
              <div className="h-2 w-4/5 bg-[#009641]"></div>
            </div>
            <div className="flex flex-col gap-20">
              {alternateSectionTextItem}
            </div>
          </div>
        </div>
        {/* white background section ends */}
        <PartnersSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
