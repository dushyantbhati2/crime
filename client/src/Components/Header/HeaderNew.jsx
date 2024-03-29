import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";

export default function HeaderNew() {
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  return (
    <nav className="w-full fixed flex items-center shadow-sm  top-0 bg-[#ADC4CE]/10 min-h-20 px-8 py-3 ">
      <div className="flex w-full justify-between items-center ">
        <Link to="/" className="flex flex-col items-center">
          <p  className="text-3xl font-semibold">Citizens</p>
          <p className="ml-12 -mt-1 text-2xl font-semibold">Guard</p>
        </Link>

        <div className=" justify-between items-center w-full lg:flex lg:w-auto ">
          <ul className="flex items-center font-medium space-x-8  mx-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-green-100 hover:rounded-lg lg:hover:bg-transperent lg:border-0 hover:text-gray-600 lg:p-0`
                }
              >
                Community
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-green-100 hover:rounded-lg lg:hover:bg-transperent lg:border-0 hover:text-gray-600 lg:p-0`
                }
              >
                NGO
              </NavLink>
            </li>
            <li className="flex items-center">
      <div className=" flex items-center">
        <div className=" flex w-full flex-wrap items-center">
          {showInput && (
            <input
              type="text"
              className="w-64 mr-2  m-0 block flex-auto rounded border border-solid bg-transparent bg-clip-padding px-3 py-1.5 text-md font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:outline-none border-neutral-600"
              placeholder="Search"
            />
          )}

          <div onClick={toggleInput}>
            <IoSearchOutline className="h-7 w-7 cursor-pointer" />
          </div>
        </div>
      </div>
    </li>
            <li className="flex items-center">
              <button className="">
                <IoIosNotifications className="h-6 w-6" />
              </button>
            </li>
            <li>
              <Link to="#" className="rounded-full ">
                <img
                  alt=""
                  src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRTtNk8Ppt8jblf35WR1RcHLE6AucAd-7WFlV5Y2MzusCq7O95"
                  className="size-12 rounded-full object-cover"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
