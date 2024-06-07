import React from "react";
import sideImage from '../../assets/communitySide.png'
const CommunityHero = () => {
  return (
    <>
      <div className="flex py-16 lg:py-0 flex-col lg:flex-row justify-center w-full text-white gap-8 lg:gap-16 items-center bg-community h-auto min-h-[500px] p-4 lg:p-0">
        <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-heading">
            Join community, Empower Together
          </h1>
          <p className="text-base lg:text-lg text-gray-100 font-text">
          Collaborate with your community to prevent crime and create a safer environment for all.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-white text-zinc-800 font-semibold px-7 py-3 rounded-lg hover:scale-105 transition-transform duration-150">
              Explore
            </button>
          </div>
        </div>
        <div className="  w-full sm:w-1/2  flex justify-center lg:justify-end ">
        
            <img src={sideImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default CommunityHero;
