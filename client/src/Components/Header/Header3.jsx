import React, { useEffect, useState } from 'react';
import Logo from "../../assets/black signup1.jpeg.jpg";
import {Link} from "react-router-dom"

const Header3 = () => {
  const [show, setShow] = useState(true);
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    lastScrollY = window.scrollY;
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-sky-500 border-b  border-gray-600 shadow z-50   font-heading h-[70px] flex fixed top-0 w-full transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4 ">
        <div className="flex items-center border border-black overflow-hidden rounded-full h-12 w-12">
          <img src={Logo} alt="Logo" className="h-12 scale-[1.12] rounded-full w-12" />
        </div>
        <nav className="flex items-center space-x-10 text-lg">
          <div className="relative group">
            <Link to="/" className="inline-flex items-center text-white">
              Home
            </Link>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">
              Map
            </button>
          </div>
          <div className="relative group">
            <Link to={'/community'} className="inline-flex items-center text-white">
              Community
            </Link>
            <div className="absolute left-0 hidden mt-1 w-48 bg-white shadow-lg rounded group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">
              About
            </button>
            <div className="absolute left-0 hidden mt-1 w-48 bg-white shadow-lg rounded group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">
              Contact
            </button>
          </div>
          <Link to="/login" className="inline-flex items-center text-base px-5 py-2 rounded-full text-white hover:shadow-lg bg-gray-900">
            Log In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header3;
