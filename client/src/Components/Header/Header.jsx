import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CardSection from "./CardSection";

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

  const [clickSearch, setClickSearch]= useState(false)


  return (
    <>
    <div className="flex justify-between h-16">
      <div className="bg-[#576066] w-[200px] text-white p-2 flex justify-center ">
        {/* <Link className="hover:bg-[#122932] hover:rounded-lg hover:scale-105 hover:ease-out duration-100 px-3 py-2">Crime</Link> */}
      </div>
      <div className="w-[calc(100%-500px)] h-16 flex items-center">
        <ul className=" px-1 text-base space-x-1  gap-7  flex align-center font-semibold">
          <li className="hover:bg-[#6250FE] hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2"><Link to="/">Home</Link></li>
          <li className=" hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2"><Link to="/">Map</Link></li>
          <li className=" hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2"><Link to="/allprojects">All Projects</Link></li>
          <li className=" hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2"><Link to="">About</Link></li>
          <li className="hover:rounded-lg hover:scale-105 hover:ease-out duration-100 p-2"><Link to="">Contact</Link></li>
        </ul>
      </div>
      <div className="">
        <Link to="" className="w-[100px] ">Login</Link>
        <Link to="" className="w-[100px]">Signup</Link></div>
  </div>

    </>
  );
}
