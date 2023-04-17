import { useState } from "react";
import MobileDrawer from "./MobileDrawer";
import Hamburger from 'hamburger-react'
import Link from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const logoSrc = "../assets/Aloha.png";

  const menuItems = ["Home", "Surfing", "Hula", "Vulcano"];


  return ( 
    <div className="w-full lg:absolute z-20">
      <nav className="lg:w-3/4 bg-white w-full h-[80px] flex border-2 m-auto justify-between p-[24px] lg:mt-[24px] lg:rounded-xl rounded-none items-center">
        <div className="w-1/2 flex gap-[3rem] items-center">
          <div>
            <img className="lg:origin-[-33%_-75%]" src={logoSrc} alt="logo" />
          </div>
          <div className="hidden gap-[1rem] lg:flex w-full justify-between font-IBM-Plexo  text-base">
            {
                menuItems.map((elem,index)=>
                    <div key={index}>{elem}</div>
                )
            }
          </div>
        </div>

        <div className="hidden lg:block">
          <button className="button">
            Book a Trip
            </button>
        </div>
        <div className="position-absolute lg:hidden block">
            <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
      </nav>
       {isOpen && <MobileDrawer isOpen={isOpen} setOpen = {setOpen} menuItems={menuItems}/>}
    </div>
  );
};

export default Navbar;
