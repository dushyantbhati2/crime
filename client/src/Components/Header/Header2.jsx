import React from 'react';
import Logo from "../../assets/black signup1.jpeg.jpg";

const Header2 = () => {
  return (
    <header className="bg-white shadow font-heading sticky top-0">
      <div className="container mx-auto flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center border border-black overflow-hidden rounded-full h-12 w-12">
          <img src={Logo} alt="Logo" className="h-12 scale-[1.12] rounded-full  w-12 " />
        </div>
        <nav className="flex items-center space-x-10 text-lg">
          <div className="relative group ">
            <button className="inline-flex items-center">
              Home  
            </button>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center">
              Map
            </button>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center">
              Community
              
            </button>
            <div className="absolute left-0 hidden mt-1 w-48 bg-white shadow-lg rounded group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center">
             About
            </button>
            <div className="absolute left-0 hidden mt-1 w-48 bg-white shadow-lg rounded group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center">
              Contact
            </button>
          </div>
          <a href="#" className="inline-flex items-center text-base px-5 py-2 border border-gray-500 rounded-full text-white bg-zinc-900">
            Log In
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header2;
