import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { FaUsers } from "react-icons/fa";
import { FaChildReaching } from "react-icons/fa6";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const navItems = [
  {
    icon1: <FaUsers />,
    name: "Community",
    to: "/",
    icon2: "",
    icon2: <FaAngleDown />,
    subitems: [
      { name: "Crime Prevention", to: "/project1" },
      
    ],
  },
  {
    icon1: <FaChildReaching />,
    name: "NGO",
    to: "/",
    icon2: <FaAngleDown />,
    subitems: [
      { name: "Blood", to: "/project1" },
    
    ],
  },
  
];

const SidebarPc = () => {
  const [showSubitems, setShowSubitems] = useState(false);

  const toggleSubitems = () => {
    setShowSubitems((prevShowSubitems) => !prevShowSubitems);
  };

  return (
    <>
      <div className=" hidden md:block w-1/6  fixed left-0   h-screen   bg-[#ADC4CE]/10 shadow-lg transition-width duration-300">
        <nav className=" text-slate-900 flex flex-col px-10 py-20  font-semibold h-64 gap-8 transition-display duration-500 ease-in-out">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subitems ? (
                <div
                  onClick={toggleSubitems}
                  className="cursor-pointer flex items-center gap-3"
                >
                  <span className="text-3xl">{item.icon1}</span>
                  <li className="list-none text-[1.2rem] tracking-wide">
                    {item.name}
                  </li>
                  <span className=" ml-2 text-lg">
                    {showSubitems ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              ) : (
                <NavLink to={item.to} className="flex items-center gap-3 ">
                  <span className="text-3xl">{item.icon1}</span>
                  <li className="list-none text-[1.2rem] tracking-wide">
                    {item.name}
                  </li>
                  <span className="-ml-1 text-lg"> {item.icon2}</span>
                </NavLink>
              )}
              <div
                className={`${
                  showSubitems ? "max-h-96" : "max-h-0"
                }  overflow-hidden transition-max-height duration-500 ease-in-out`}
              >
                {item.subitems &&
                  item.subitems.map((subitem, subindex) => (
                    <NavLink
                      key={subindex}
                      to={subitem.to}
                      className="flex  flex-col px-12 py-2"
                    >
                      <li className="list-none text-[1.1rem]  tracking-wide">
                        {subitem.name}
                      </li>
                    </NavLink>
                  ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SidebarPc;
