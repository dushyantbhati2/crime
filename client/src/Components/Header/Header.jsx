import React, { useState } from "react";

import { Link, NavLink,useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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

  const location=useLocation()
  const isActive = (path) => location.pathname === path;
  return (
    <div className="navbar fixed h-18 z-50 bg-[#576066] animate-slide-down">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base rounded-box w-52">
            <li>
              <Link to="/" className={`hover:text-white ${isActive('/') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Home</Link>
            </li>
            <li>
              <Link to="/allprojects" className={`hover:text-white ${isActive('/allprojects') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>All Projects</Link>
            </li>
            <li>
              <summary>Projects</summary>
              <ul className="p-2 text-sm">
                <li>
                  <Link to="/hospitals" className={`hover:text-white ${isActive('/hospitals') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Hospitals</Link>
                </li>
                <li>
                  <Link to="/home" className={`hover:text-white ${isActive('/home') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Home</Link>
                </li>
                <li>
                  <Link to="/industrial" className={`hover:text-white ${isActive('/industrial') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Industrial</Link>
                </li>
                <li>
                  <Link to="/farms" className={`hover:text-white ${isActive('/farms') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Farms</Link>
                </li>
                <li>
                  <Link to="/hotels" className={`hover:text-white ${isActive('/hotels') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Hotels</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className={`hover:text-white ${isActive('/about') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>About</Link>
            </li>
            <li>
              <Link to="/contact" className={`hover:text-white ${isActive('/contact') ? 'bg-[#122932] rounded-lg scale-105 text-white' : ''}`}>Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-gray-300 text-2xl hover:bg-[#122932] hover:rounded-lg hover:scale-105 hover:ease-out duration-100">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-gray-300 space-x-1 font-semibold gap-1">
          <li className={isActive('/') ? 'bg-[#122932] rounded-lg scale-105 text-white' : 'hover:bg-[#122932] hover:text-white hover:rounded-lg hover:scale-105 hover:ease-out duration-100'}>
            <Link to="/">Home</Link>
          </li>
          <li className={isActive('/map') ? 'bg-[#122932] rounded-lg scale-105 text-white' : 'hover:bg-[#122932] hover:text-white hover:rounded-lg hover:scale-105 hover:ease-out duration-100'}>
            <Link to="/map">Map</Link>
          </li>
          <li className={isActive('/allprojects') ? 'bg-[#122932] rounded-lg scale-105 text-white' : 'hover:bg-[#122932] hover:text-white hover:rounded-lg hover:scale-105 hover:ease-out duration-100'}>
            <Link to="/allprojects">All Projects</Link>
          </li>
          <li className={isActive('/about') ? 'bg-[#122932] rounded-lg scale-105 text-white' : 'hover:bg-[#122932] hover:text-white hover:rounded-lg hover:scale-105 hover:ease-out duration-100'}>
            <Link to="/about">About</Link>
          </li>
          <li className={isActive('/contact') ? 'bg-[#122932] rounded-lg scale-105 text-white' : 'hover:bg-[#122932] hover:text-white hover:rounded-lg hover:scale-105 hover:ease-out duration-100'}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {clickSearch && (
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto mr-1" />
          </div>
        )}
        <button onClick={() => setClickSearch(true)} className="btn btn-ghost btn-circle hover:bg-[#122932]/50 hover:scale-105 hover:ease-out duration-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}