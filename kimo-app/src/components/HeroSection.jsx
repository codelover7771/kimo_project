import React from "react";
import Navbar from "./Navbar";
export default function HeroSection() {
  const HeroSrc = "../assets/heroImage.jpg";
  return (
    <div className="flex justify-center items-center w-full top-auto position-relative h-[30rem] md:h-[35rem]">
    <div className="w-full absolute h-[30rem] md:h-[35rem]">
      <img
        src={HeroSrc}
        alt="Hero-img"
        className="w-full h-[30rem] md:h-[35rem] object-cover"
      />
    </div>

    <div className="flex flex-col justify-center items-center z-20">
      <p className="hero-text  sm:text-4 md:text-[90px] xl:text-[140px]">Welcome</p>
      <p className="hero-text  sm:text-4 md:text-[90px] xl:text-[140px]">to Hawaii</p>
    </div>
  </div>
  );
}
