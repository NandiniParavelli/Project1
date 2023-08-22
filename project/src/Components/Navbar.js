import React, {useState} from "react";
import {HiHomeModern} from "react-icons/hi2"
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from "react-router-dom";



const Navbar = () =>{
  const [toggleMenu, setToggleMenu] = useState(false);
  

    return(
    <> 
      <nav className="bg-[#e5e7eb] bg-opacity-60 sticky top-0 scroll-smooth max-w-screen-2xl">  
      <div className="app py-3 pl-3">
        <div className="max-w-7xl">
          <div className="flex mx-5 justify-between pr-10">
            {/* Primary menu and logo */}
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 italic font-bold  items-center border-spacing-0 border-2 border-black rounded-md px-2 ml-8" 
                >
                  <HiHomeModern className="h-6 w-6 text-primary " />
                  <span className="text-xl"><span className="text-[#4338ca]">Blue</span> Fantasy Inns</span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden md:flex gap-8 font-semibold text-md">
                <Link to="/Home">Home</Link>
                <Link to="/Rooms">Rooms</Link>
                <Link to="/Contact"><button className="text-[#4338ca] font-bold ">Contact</button></Link>
              </div>
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <GiHamburgerMenu className="w-3 h-3"/>
                </button>
              </div>
            </div>
          </div>
      </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full bg-[#e5e7eb] bg-opacity-60 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-auto items-end"
          }`}
        >
          <div className="items-end px-2 h-auto">
            <div className="flex flex-col gap-3 font-semibold text-black text-right">
                 <a  href="#Home" >Home</a>
                <a href="#Rooms" >Rooms</a>
                <a href="#Contact" ><button className="text-[#4338ca] font-bold border-2 border-black rounded-lg px-2">Contact</button></a>
            </div>
          </div>
        </div>
      </nav>
    </>
        
    );
}

export default Navbar