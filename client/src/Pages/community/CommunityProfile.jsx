import React from "react";
import { RiGroupLine } from "react-icons/ri";

const CommunityProfile = () => {
  return (
    <div className="font-heading w-full  border-b border-zinc-300">
      <figure className="w-full">
        <img
          className="w-full  object-cover min-h-48 md:h-72"
          src="https://www.shutterstock.com/image-vector/international-day-elimination-violence-against-260nw-2229429571.jpg"
          alt="Community Image"
        />
      </figure>
      <div className="card-body p-4 sm:p-4 bg-white ">
        <div className="flex items-center justify-between">
          <h2 className="card-title text-xl pb-2 font-semibold w-3/4 sm:text-3xl">
            Crime-Free Together
          </h2>
          <div className="flex font-Poppins justify-end">
            <button className="bg-zinc-800 text-white font-normal tracking-wide px-7 py-2 sm:px-10 sm:py-3 lg:px-8 lg:py-2 rounded-full hover:scale-105 transition-transform duration-150">
              Join
            </button>
          </div>
        </div>
        <p className="text-gray-900 py-2 sm:text-lg">
          Connect, share, and collaborate with neighbors to prevent crime and enhance safety... <span className="text-blue-800">more</span>
        </p>
        <div className="card-actions font-medium flex items-center gap-2 sm:text-lg py-2">
          <RiGroupLine className="h-6 w-6" />
          <span>1029 members</span>
        </div>
      </div>
    </div>
  );
};

export default CommunityProfile;
