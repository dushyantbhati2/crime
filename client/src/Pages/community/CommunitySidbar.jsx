// src/App.js
import React from "react";
import { LuBookmark } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { MdGroups } from "react-icons/md";



const CommunitySidbar = () => {
  return (
    <div className="flex md:sticky md:z-0 absolute bottom-0 z-50 top-0 left-0 0 h-screen font-text mt-16 md:mt-0">
      {/* Sidebar */}
      <div className="w-64 bg-white h-screen shadow-md">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex-col flex space-y-4  ">
            <input
              type="text"
              placeholder="Search"
              className="border w-full border-gray-500 h-10 rounded-md outline-none px-2 text-zinc-700"
            />

            <button className="text-gray-500 border-gray-500 border hover:scale-105 hover:ease-out duration-75   px-4 py-2 rounded-md font-medium ">
              Search
            </button>
          </div>
        </div>
        {/* Menu */}
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
               <MdGroups className=" h-5 w-5 mr-2  text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                Crime
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
               <MdGroups className=" h-5 w-5 mr-2  text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                Society
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
              >
               <MdGroups className=" h-5 w-5 mr-2  text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
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
                  <LuBookmark className=" h-5 w-5 mr-2  text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                  Saved Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-4 text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                >
                 <FaRegHeart className=" h-5 w-5 mr-2  text-gray-500 hover:bg-gray-100 hover:text-purple-600" />
                  Liked Posts
                </a>
              </li>
            </ul>
          </div>
         
        </nav>
      </div>
    </div>
  );
};

export default CommunitySidbar;
