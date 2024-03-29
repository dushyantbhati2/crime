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
    subitems: [{ name: "Crime Prevention", to: "/project1" }],
  },
  {
    icon1: <FaChildReaching />,
    name: "NGO",
    to: "/",
    icon2: <FaAngleDown />,
    subitems: [{ name: "Blood", to: "/project1" }],
  },
];

const SidebarPc = () => {
  const [showSubitems, setShowSubitems] = useState(null); 

  const toggleSubitems = (index) => {
    // Accept index as parameter
    setShowSubitems(
      (prevShowSubitems) => (prevShowSubitems === index ? null : index)
    );
  };

  return (
    <>
      <div className="hidden md:block w-1/5  bg-[#ADC4CE]/40 transition-width duration-300  rounded-tr-3xl top-28 left-10 rounded-2xl h-[400px] absolute ">
        <nav className="text-slate-900 flex flex-col p-4 font-semibold h-64 gap-8 transition-display duration-500 ease-in-out">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.subitems ? (
                <div
                  onClick={() => toggleSubitems(index)} 
                  className="cursor-pointer flex items-center gap-2"
                >
                  <span className="text-2xl">{item.icon1}</span>
                  <li className="list-none text-[1rem] tracking-wide">
                    {item.name}
                  </li>
                  <span className="ml-2 ">
                    {showSubitems === index ? <FaAngleUp /> : <FaAngleDown />}{" "}
                    
                  </span>
                </div>
              ) : (
                <NavLink to={item.to} className="flex items-center gap-3 ">
                  <span className="">{item.icon1}</span>
                  <li className="list-none text-[0.5rem] tracking-wide">
                    {item.name}
                  </li>
                  <span className="-ml-1 text-sm"> {item.icon2}</span>
                </NavLink>
              )}
              <div
                className={`${
                  showSubitems === index ? "max-h-96" : "max-h-0"
                } overflow-hidden transition-max-height duration-500 ease-in-out`}
              >
                {item.subitems &&
                  item.subitems.map((subitem, subindex) => (
                    <NavLink
                      key={subindex}
                      to={subitem.to}
                      className="flex flex-col px-12 py-2"
                    >
                      <li className="list-none text-[0.9rem] tracking-wide">
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
