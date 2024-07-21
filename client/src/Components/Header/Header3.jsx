import React, { useEffect, useState } from "react";
import Logo from "../../assets/black signup1.jpeg.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../01Redux/features/authFeature";
import { postApi } from "../../01Redux/Service/Post";
import { AiOutlineMenu } from "react-icons/ai";
import LeftSection from "../../Pages/community/LeftSection";

const Header3 = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [menu, setMenu] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`md:bg-sky-500 bg-gray-900 md:border-b border-gray-600 shadow z-50 font-heading h-[70px] flex fixed top-0 w-full md:transition-transform md:duration-300 ${
        show ? "md:translate-y-0" : "md:-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex items-center gap-4 md:hidden">
          {userInfo && (
            <AiOutlineMenu
              onClick={() => setMenu(!menu)}
              className="text-white h-5 w-5"
            />
          )}{" "}
          {userInfo && menu && (
            <div onClick={()=>setMenu(false)} className="fixed text-base font-muli top-[70px] left-0 w-[280px] h-full bg-gray-800 text-white px-4 z-50">
              <LeftSection />
            </div>
          )}
          <div className="items-center border border-black overflow-hidden rounded-full h-10 w-10">
            <img
              src={Logo}
              alt="Logo"
              className="h-full w-full scale-125 rounded-full"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center border border-black overflow-hidden rounded-full h-12 w-12">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 scale-[1.12] rounded-full w-12"
          />
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-lg">
          <div className="relative group">
            <Link to="/" className="inline-flex items-center text-white">
              Home
            </Link>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">Map</button>
          </div>
          <div className="relative group">
            <Link
              to={"/community"}
              className="inline-flex items-center text-white"
            >
              Community
            </Link>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">
              About
            </button>
          </div>
          <div className="relative group">
            <button className="inline-flex items-center text-white">
              Contact
            </button>
          </div>
          <button
            className={`inline-flex ${
              userInfo==null &&
              " px-5 py-2 rounded-full text-white hover:shadow-lg bg-gray-900"
            } items-center text-base`}
          >
            {userInfo ? (
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              "Login"
            )}
          </button>
        </nav>

        <button
          className={`inline-flex md:hidden items-center text-base px-5 py-2 rounded-full text-white hover:shadow-lg bg-gray-900`}
        >
          {userInfo ? (
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            "Login"
          )}
        </button>
      </div>
    </header>
  );
};

export default Header3;
