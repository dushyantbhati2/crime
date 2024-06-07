import React from "react";
import { Link } from "react-router-dom";
const SingleCard = ({ heading, des, link, img, classname, classnameimg }) => {
  return (
    <>
      <div
        className={`flex py-16 lg:py-0 flex-col lg:flex-row  ${classname} justify-center w-full text-white gap-8  items-center  h-auto min-h-[500px] p-4 lg:p-0`}
      >
        <div className="w-full lg:w-1/3 flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold font-heading">
            {heading}{" "}
          </h1>
          <p className="text-base lg:text-lg text-gray-100 font-text">{des} </p>
          <div className="flex justify-center lg:justify-start">
            <Link
              to={link}
              className="bg-white text-zinc-800 font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-150"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className={` w-full sm:w-1/2 ${classnameimg}   flex  `}>
          <img className="w-[350px] h-72 object-cover" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default SingleCard;
