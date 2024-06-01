import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative md:sticky md:top-0 md:h-screen md:hidden">
      <div
        className={`fixed md:relative top-0 flex flex-col gap-2 h-screen w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:transform-none transition-transform duration-300`}
      >
        
        <ul className=" px-1 text-base  gap-6  h-[320px] flex flex-col items-center mt-4">
            <li className="hover:bg-[#F0F0F0] hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:bg-[#F0F0F0] hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2">
              <Link to="/">Map</Link>
            </li>
            <li className="hover:bg-[#F0F0F0]  hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2">
              <Link to="/community">Community</Link>
            </li>
            <li className="hover:bg-[#F0F0F0]  hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2">
              <Link to="">About</Link>
            </li>
            <li className="hover:bg-[#F0F0F0] hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2">
              <Link to="">Contact</Link>
            </li>
        </ul>
        <div className="bg-white w-[250px] ml-1 h-1/2 flex justify-center font-semibold">
          <button className="w-[120px] h-12 border-l-2 border-t-2 border-b-2 border-zinc-300 hover:scale-105 hover:ease-out duration-100 ">
            <Link to="">Login</Link>
          </button>
          <button className="w-[120px] h-12 border-2 border-zinc-300 bg-[#F0F0F0]  hover:bg-white hover:scale-105 hover:ease-out duration-100">
            <Link to="">Signup</Link>
          </button>
        </div>
      </div>
      <button
        className="md:hidden fixed top-3 right-4 z-50 p-2 bg-[#F0F0F0] rounded-full shadow-md"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <IoMenuSharp className="h-6 w-6 text-gray-700 " />
        ) : (
          <RxCross2 className="h-6 w-6 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default Sidebar;
