import React from "react";
import { Link } from "react-router-dom";
import { RxOpenInNewWindow } from "react-icons/rx";
import History from "./History";

const Sidebar = () => {
  return (
    <div className="bg-[#96E6B3] hidden sm:w-72 fixed left-0 sm:flex sm:flex-col text-start h-screen p-4 space-y-2 overflow-hidden">
      <div className="flex items-center">
        <Link className="text-xl  font-bold block py-4 px-4 rounded hover:bg-white/15">
          New chat
        </Link>
        <span>
          <RxOpenInNewWindow className="h-6 w-6" />
        </span>
      </div>{" "}
  <History/>
      <footer className="p-2 flex items-center gap-2 absolute bottom-20">
        <div className="img">
          <img
            className="rounded-full w-12 h-12 object-cover	"
            src="https://w0.peakpx.com/wallpaper/946/869/HD-wallpaper-emoji-horror-cool-cool-dp-dp-fb-oh-yeah-whatsapp-dp.jpg"
            alt=""
          />
        </div>
        <div className="font-semibold">Lakshay Kumawat</div>
      </footer>
    </div>
  );
};

export default Sidebar;
