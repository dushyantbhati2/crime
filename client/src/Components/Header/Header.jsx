import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CardSection from "./CardSection";
import logo from "../../assets/black signup1.jpeg.jpg";
import Sidebar from "./Sidebar";


export default function Header() {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      refToken: "",
      AccToken: "",
      isAuthenticated: false,
    });

    localStorage.removeItem("token");
  };

  const [clickSearch, setClickSearch] = useState(false);

  return (
    <>
      <div className="flex justify-between h-16 items-center">
        <div id="first" className="bg-[#F0F0F0] w-[200px] text-white p-2 flex justify-center ">
          {/* <div className=" lg:hidden hover:scale-105 hover:ease-out duration-100 px-3 py-2 bg-white ml-8">
            <img src={logo} className="rounded-full w-[50px] h-[50px] " />
          </div> */}
        </div>
        <div className="h-16  md:w-[150px] bg-white flex items-center font-semibold overflow-hidden">
          <div className="w-[200px] hover:scale-105 hover:ease-out duration-100 px-3 py-2 bg-white lg:ml-8">
            <img src={logo} className="rounded-full min-w-[44px] min-h-[44px] scale-110 " />
          </div>
        </div>
        <div className="w-[calc(100%-500px)] h-16  items-center hidden flex lg:block bg-white justify-center font-semibold">
          <ul className=" px-1 text-base space-x-1 gap-6  flex align-center  ">
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
        </div>
        <div className="bg-white w-[300px] h-16 flex items-center font-semibold">
          <button className="w-[120px] h-12 border-l-2 border-t-2 border-b-2 border-zinc-300 hover:scale-105 hover:ease-out duration-100 ">
            <Link to="">Login</Link>
          </button>
          <button className="w-[120px] h-12 border-2 border-zinc-300 bg-[#F0F0F0]  hover:bg-white hover:scale-105 hover:ease-out duration-100">
            <Link to="">Signup</Link>
          </button>
        </div>
        <Sidebar/>

      </div>
    </>
  );
}
