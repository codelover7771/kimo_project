import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom'

export default function HeroSection() {
  // Set up state for current path
  const [path, setPath] = useState()
  // Get the current location using useLocation hook from react-router-dom
  const location = useLocation();

  // Use useEffect hook to update path state when location changes
  useEffect(() => {
    setPath(location.pathname)
  }, [location.pathname])

  // Define the source of the hero image
  const HeroSrc = "../assets/heroImage.jpg";
  // Get the activity object from the redux store
  const obj = useSelector((state) => state.activity);

  return (
    <div className="flex justify-center items-center w-full top-auto position-relative h-[30rem] md:h-[35rem]">
      <div className="w-full absolute h-[30rem] md:h-[35rem]">
        {/* If the path is the homepage, display the default hero image. Otherwise, display the activity image */}
        {path === "/" ? (
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
        {/* Display the welcome text */}
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
