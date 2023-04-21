import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'

export default function HeroSection() {
  const [path, setPath]=useState()
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])
  

 
  const HeroSrc = "../assets/heroImage.jpg";
  const obj = useSelector((state) => state.activity);

  console.log(obj.image)

  return (
    <div className="flex justify-center items-center w-full top-auto position-relative h-[30rem] md:h-[35rem]">
      <div className="w-full absolute h-[30rem] md:h-[35rem]">
        {path==="/" ?(
          <img
            src={HeroSrc}
            alt="heroImage"
            className="w-full h-[30rem] md:h-[35rem]"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <img
            src={obj.image}
            alt="Hero-img"
            className="w-full h-[30rem] md:h-[35rem]"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="flex flex-col justify-center items-center z-20">
        <p className="hero-text  sm:text-4 md:text-[90px] xl:text-[140px]">
          Welcome
        </p>
        <p className="hero-text  sm:text-4 md:text-[90px] xl:text-[140px]">
          to Hawaii
        </p>
      </div>
    </div>
  );
}
