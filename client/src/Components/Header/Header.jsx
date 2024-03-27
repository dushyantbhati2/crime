import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-[#ADC4CE] border-gray-700 px-4 py-2.5 opa">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://images.pexels.com/photos/17632032/pexels-photo-17632032/free-photo-of-rear-grille-with-a-logo-of-a-lamborghini-huracan-sports-car.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="mr-3 h-12 rounded-2xl ms-10"
              alt="Logo"
            />
          </Link>

          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto ">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 mx-4">
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about"
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-green-100 hover:rounded-lg lg:hover:bg-transperent lg:border-0 hover:text-gray-600 lg:p-0`
              }
                >About</NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                   className={({isActive}) =>
                   `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-green-100 hover:rounded-lg lg:hover:bg-transperent lg:border-0 hover:text-gray-600 lg:p-0`
               }
                >Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login"
                     className={({isActive}) =>
                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-green-100 hover:rounded-lg lg:hover:bg-transperent lg:border-0 hover:text-gray-600 lg:p-0`
                 }
                >login</NavLink>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white bg-black focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
