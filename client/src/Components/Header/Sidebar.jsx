import React, { useState } from "react";
import { LuBookmark } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
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
        className={`fixed md:relative top-0  h-screen w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:transform-none transition-transform duration-300`}
      >
        <div className="p-4 border-b">
          <div className="flex-col flex space-y-4">
            <input
              type="text"
              placeholder="Search"
              className="border w-full border-gray-500 h-10 rounded-md outline-none px-2 text-zinc-700"
            />
            <button className="text-gray-500 border-gray-500 border hover:scale-105 hover:ease-out duration-75 px-4 py-2 rounded-md font-medium">
              Search
            </button>
          </div>
        </div>
        <nav className="mt-4">
          <ul>
            <h3 className="px-4 text-sm font-semibold text-gray-500 py-2">
              Following
            </h3>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
                <MdGroups className="h-5 w-5 mr-2 text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                Crime
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
                <MdGroups className="h-5 w-5 mr-2 text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                Society
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
                <MdGroups className="h-5 w-5 mr-2 text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                Police
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="px-4 text-sm font-semibold text-gray-500 py-2">
              Your Activity
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                >
                  <LuBookmark className="h-5 w-5 mr-2 text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                  Saved Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                >
                  <FaRegHeart className="h-5 w-5 mr-2 text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                  Liked Posts
                </a>
              </li>
            </ul>
          </div>
        </nav>
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
