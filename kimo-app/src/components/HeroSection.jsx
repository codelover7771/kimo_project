import React from "react";
import Navbar from "./Navbar";
export default function HeroSection() {
  const HeroSrc = "../assets/Herorimg.png";
  return (
    <div className="flex justify-center items-center w-full md:static  position-relative h-[30rem] md:h-[35rem]">
    <div className="w-full md:static  absolute top-0 h-[30rem] md:h-[35rem]">
      <img
        src={HeroSrc}
        alt="Hero-img"
        className="w-full h-[30rem] md:h-[35rem]"
      />
    </div>

    <div className="flex flex-col justify-center items-center z-20">
      <p className="hero-text sm:text-[64px] md:text-[90px] xl:text-[140px]">Welcome</p>
      <p className="hero-text sm:text-[64px] md:text-[90px] xl:text-[140px]">to Hawaii</p>
    </div>
  </div>
  );
}
