import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MobileDrawer from "./MobileDrawer";
import Hamburger from 'hamburger-react'
import { Link } from "react-router-dom";
import { fetchHighlights } from "../redux/action";

const Navbar = () => {
  // State for mobile drawer
  const [isOpen, setOpen] = useState(false);
  // State for local highlights
  const [localHighlights,setLocalHighlights] = useState([])
  const dispatch = useDispatch();

  // Logo image source
  const logoSrc = "../assets/Aloha.png";
  
  // Fetch highlights from redux store
  const highlights = useSelector(state => state.highlights);
  useEffect(() => {
    dispatch(fetchHighlights());
  }, [dispatch]);

  // Update local highlights when highlights from redux store change
  useEffect(() => {
    if (highlights.length > 0) {
      setLocalHighlights(highlights);
    }
  }, [highlights]);

  return ( 
    <div className="w-full lg:absolute z-20">
      <nav className="lg:w-3/4 bg-white w-full h-[80px] flex border-2 m-auto justify-between p-[24px] lg:mt-[24px] lg:rounded-xl rounded-none items-center">
        <div className="w-3/5 flex gap-[3rem] items-center">
          <Link to='/'>
            {/* Logo */}
            <img className="heroImage" src={logoSrc} alt="logo" />
          </Link>
          {/* Navigation links */}
          <div className="hidden gap-[1rem] lg:flex w-full justify-between font-IBM-Plexo text-base">
            <Link to='/'>Home</Link>
            {/* Map over highlights and create a link for each */}
            {highlights.map((elem,index)=>
              <Link to={`/activity/${elem.title}`} key={index}>
                <p className="text-base">{elem.title}</p>
              </Link>
            )}
          </div>
        </div>

        {/* Button for booking a trip */}
        <div className="hidden lg:block">
          <button className="button">
            Book a Trip
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="position-absolute lg:hidden block">
          <Hamburger toggled={isOpen} toggle={setOpen}/>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && <MobileDrawer isOpen={isOpen} setOpen={setOpen} highlights={localHighlights}/>}
    </div>
  );
};

export default Navbar;
