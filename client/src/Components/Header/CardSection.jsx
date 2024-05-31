import React from "react";
import lock1 from "../../assets/icons/lock.png"
import chat1 from "../../assets/icons/chat.png"
import handshake1 from "../../assets/icons/handshake.png"
import link1 from "../../assets/icons/link.png"
import fork from "../../assets/icons/fork.png"
import zoomin1 from "../../assets/icons/zoomin.png"
import zoomout1 from "../../assets/icons/zoomout.png"
import upload1 from "../../assets/icons/upload.png"
import img1 from "../../assets/imgforhome4.jpg"
import img2 from "../../assets/imgforhome2.jpg"
import img3 from "../../assets/imgforhome3.jpg"
const CardSection = () => {
  return (
    <>
      <div className="m-4 md:m-10">
        <div className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
          <div className="w-full lg:w-[450px] lg:ml-[10vw] flex flex-col gap-2 lg:gap-10 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-bold w-full lg:w-[330px] mx-auto lg:mx-0">
              Track crime in real-time
            </h1>
          <div className="w-full lg:w-[600px] mt-6 lg:mt-0 shadow-lg">
            <img
              className="w-full h-[200px] sm:h-[300px] lg:h-[400px] object-cover"
              src="https://i.blogs.es/635f55/maps/1366_2000.jpg"
              alt=""
            />
          </div>
            <p className="text-base lg:text-lg mb-6 mt-6 text-zinc-800">
              Discover our safety features
            </p>
            <button className="p-2 w-full border border-zinc-700 text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
              Explore now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-12 text-center px-4">
          <h5 className="text-lg sm:text-xl lg:text-2xl">Trusted by communities worldwide</h5>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-12 text-lg sm:text-xl lg:text-2xl font-bold p-6 pb-10">
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-5">
            <div className="w-full md:w-[40%] mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mt-4">Intuitive and user-friendly design</h2>
            <div>
              <img className="w-full md:w-[350px] h-[200px] md:h-[250px]" src={img1} alt="" />
            </div>
              <p>
                We offer a variety of safety services, including live crime tracking, community collaboration, and emergency assistance.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse justify-evenly items-center mt-10">
            <div className="w-full md:w-[40%] mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-8">Simplicity is key</h2>
            <div>
              <img className="w-[300px] m-6 md:w-[350px] md:m-0 mb-4 h-[200px] md:h-[250px]" src={img2} alt="" />
            </div>
              <p>
                Our straightforward approach to safety ensures quick access to essential resources. We prioritize user-friendly solutions for effective crime prevention.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-10 mb-10">
            <div className="w-full md:w-[40%] mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-8">Customized solutions for all</h2>
            <div>
              <img className="w-full md:w-[350px] mb-4 h-[200px] md:h-[250px]" src={img3} alt="" />
            </div>
              <p>
                Whether you're an individual or a community organization, we have safety measures to suit your needs. We tailor our services to ensure maximum protection.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-2 flex flex-col lg:flex-row justify-evenly p-8">
            <div className="grid grid-cols-3 gap-4 w-full sm:w-[300px] md:w-[400px]">
              <div className="flex justify-center items-center ml-10 mt-5 bg-white w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full shadow-lg">
                <img src={lock1} alt="Lock Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center ml-5 bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={zoomout1} alt="Search Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-white mt-12 w-16 ml-6 h-16 sm:w-[80px] sm:h-[80px] rounded-full shadow-lg">
                <img src={chat1} alt="Chat Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center ml-3 mt-6 bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={zoomin1} alt="Zoom Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center  bg-white w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full shadow-lg">
                <img src={link1} alt="Link Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-white mt-10 w-16 h-16 rounded-full shadow-lg">
                <img src={upload1} alt="Upload Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-white mt-5 ml-10 w-16 h-16 sm:w-[80px] sm:h-[80px] rounded-full shadow-lg">
                <img src={chat1} alt="User Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center mt-3 bg-white ml-5 w-16 h-16 rounded-full shadow-lg">
                <img src={handshake1} alt="Connect Icon" className="w-8 h-8" />
              </div>
              <div className="flex justify-center items-center bg-white w-16 ml-6 mt-8 h-16 sm:w-[80px] sm:h-[80px] rounded-full shadow-lg">
                <img src={fork} alt="Share Icon" className="w-8 h-8" />
              </div>
            </div>
            <div className="text-center mt-20 mb-8 lg:mb-0">
              <h1 className="text-2xl font-semibold mb-8">Connect with other users</h1>
              <p className="text-gray-600">Explore SafeZone's integration options for seamless user experience.</p>
              <button className="p-2 mt-10 w-[200px] border border-zinc-700 text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
                Connect apps
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardSection;
