import React, { useState } from "react";
import {Link, NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi2";
import { LuFileBox } from "react-icons/lu";
import { PiInfo } from "react-icons/pi";
import { LuMessageSquare } from "react-icons/lu";
import { FaAngleDown, FaAngleUp, FaAnglesUp } from "react-icons/fa6";



const navItems = [
  {
    icon1: <HiOutlineHome />,
    name: "Home",
    to: "/",
    icon2: "",
  },
  {
    icon1: <LuFileBox />,
    name: "Projects",
    to: "/",
    icon2: <FaAngleDown />,
    subitems: [
      { name: "Home", to: "/project1" },
      { name: "Healthcare", to: "/project2" },
      { name: "Residential", to: "/project3" },
      { name: "Industrial", to: "/project5" },
      { name: "Institutional", to: "/project6" },
      { name: "Hospitals", to: "/project7" },
      { name: "Offices", to: "/project8" },
    ],
  },
  {
    icon1: <PiInfo />,
    name: "About Us",
    to: "/About",
    icon2: "",
  },
  {
    icon1: <LuMessageSquare />,
    name: "Contact Us",
    to: "/contact",
    icon2: "",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [transitionComplete, setTransitionComplete] = useState(false);

  const isOpen = () => {
    setOpen((prevOpen) => !prevOpen);
    if (!open) {
      // Set transition complete after 300ms (duration of transition) only if opening sidebar
      setTimeout(() => {
        setTransitionComplete(!transitionComplete);
      }, 300);
    } else {
      setTransitionComplete(!transitionComplete);
    }
  };

  const [showSubitems, setShowSubitems] = useState(false);

  const toggleSubitems = () => {
    setShowSubitems((prevShowSubitems) => !prevShowSubitems);
  };

  return (
    <>
      {!open && (
        <HiOutlineMenuAlt2
          onClick={isOpen}
          className={`md:hidden w-8 h-8 m-5 fixed`}
        />
      )}

      <div
      
        className={`${
          open ? "w-full sm:w-2/3 " : "w-0"
        } fixed z-10 h-full bottom-0 left-0 top-0 bg-white shadow-lg transition-width duration-300 ease-in-out`}
        onAnimationEnd={() => {
          if (!open) {
            setTransitionComplete(false);
          }
        }}
      >
        <div className="float-end m-4 rounded-full p-2 bg-black/5">
          <RxCross2 onClick={isOpen} className="w-7 h-7 text-slate-900" />
        </div>
        <nav
          className={`${
            transitionComplete ? "" : "hidden"
          }  text-slate-900 flex flex-col px-10 py-20  font-semibold h-64 gap-8 transition-display duration-500 ease-in-out`}
        >
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subitems ? (
                <div onClick={toggleSubitems} className="cursor-pointer flex items-center gap-3">
                  <span className="text-3xl">{item.icon1}</span>
                  <li className="list-none text-[1.2rem] tracking-wide">{item.name}</li>
                  <span className=" ml-2 text-lg">
                    {showSubitems ? <FaAngleUp /> : <FaAngleDown/>}
                  </span>
                </div>
              ) : (
                <NavLink to={item.to} className="flex items-center gap-3 ">
                  <span className="text-3xl">{item.icon1}</span>
                  <li className="list-none text-[1.2rem] tracking-wide">{item.name}</li>
                  <span className="-ml-1 text-lg"> {item.icon2}</span>
                </NavLink>
              )}
            <div className={`${showSubitems? "max-h-96":"max-h-0"}  overflow-hidden transition-max-height duration-500 ease-in-out`}>
            {
                
                item.subitems &&
                item.subitems.map((subitem, subindex) => (
                  <NavLink
                    key={subindex}
                    to={subitem.to}
                    className="flex  flex-col px-12 py-2"
                  >
                    <li className="list-none text-[1.1rem]  tracking-wide">{subitem.name}</li>
                  </NavLink>
                ))}
            </div>
            </div>
          ))}


        <div className="absolute bottom-0  border-t border-gray-100">
    <Link to = "mailto: zdead0505@gmail.com" className="flex items-center  gap-4 py-4 ">
      <img
        alt=""
        src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRTtNk8Ppt8jblf35WR1RcHLE6AucAd-7WFlV5Y2MzusCq7O95"
        className="size-12 rounded-full object-cover"
      />

      <div>
        <p className="text-medium">
          <span className="block font-medium ">Lucky</span>

          <span> zdead0505@gmail.com </span>
        </p>
      </div>
    </Link>
  </div>
        </nav>

      </div>
    </>
  );
};

export default Sidebar;
