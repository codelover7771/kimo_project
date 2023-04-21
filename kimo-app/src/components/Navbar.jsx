import { useState } from "react";
import { useSelector } from "react-redux";
import MobileDrawer from "./MobileDrawer";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const logoSrc = "../assets/Aloha.png";

  const highlights = useSelector(state => state.highlights);

  console.log(highlights)
  return ( 
    <div className="w-full lg:absolute z-20">
      <nav className="lg:w-3/4 bg-white w-full h-[80px] flex border-2 m-auto justify-between p-[24px] lg:mt-[24px] lg:rounded-xl rounded-none items-center">
        <div className="w-3/5 flex gap-[3rem] items-center">
          <Link to='/'>
            <img className="heroImage" src={logoSrc} alt="logo" />
          </Link>
          <div className="hidden gap-[1rem] lg:flex w-full justify-between font-IBM-Plexo  text-base">
                <Link to='/'>Home</Link>
            {
                highlights.map((elem,index)=>
                    <Link to={`/activity/${elem.title}`} key={index}>
                      <p className="text-base">{elem.title}</p>
                      </Link>
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
       {isOpen && <MobileDrawer isOpen={isOpen} setOpen = {setOpen} highlights={highlights}/>}
    </div>
  );
};

export default Navbar;
