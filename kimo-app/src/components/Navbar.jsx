import { useState } from "react";
import MobileNavbar from "./MobileNavbar";
import Hamburger from 'hamburger-react'
//import Link from "next/link";

const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const logoSrc = "../assets/Aloha.png";

  const menuItems = ["Home", "Surfing", "Hula", "Vulcano"];


  return (
    <div className="w-full">
      <nav className="lg:w-3/4 w-full h-[80px] flex border-2 border-rose-600 m-auto justify-between p-[24px] mt-[24px] lg:rounded-xl rounded-none items-center">
        <div className="w-3/5 flex gap-[80px] items-center">
          <div>
            <img src={logoSrc} alt="logo" />
          </div>
          <div className="hidden lg:flex w-full justify-between font-IBM-Plexo  text-base">
            {
                menuItems.map((elem,index)=>
                    <div key={index}>{elem}</div>
                )
            }
          </div>
        </div>

        <div className="hidden lg:block">
          <button className="w-[128px] text-align: center text-white bg-[#008080] p-2 rounded-md">Book a Trip</button>
        </div>
        <div className="lg:hidden block">
            <Hamburger/>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
