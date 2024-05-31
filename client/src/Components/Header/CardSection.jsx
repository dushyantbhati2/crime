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
      <div className="m-10 overflow-hidden">
        <div className="flex justify-between items-center w-full gap-7 flex-wrap">
          <div className=" lg:w-[450px] lg:ml-[200px]  flex flex-col gap-10 justify-center ">
            <h1 className="text-5xl font-bold w-[300px] lg:w-[330px] ml-2 ">
              Track crime in real-time
            </h1>
            <p className="text-lg  text-zinc-800 ml-2 ">
              Discover our safety features
            </p>
            <div className=" w-[300px] lg:w-[600px] shadow-lg lg:hidden">
            <img
              className="h-[200px] lg:h-[400px]"
              src="https://i.blogs.es/635f55/maps/1366_2000.jpg"
              alt=""
            />
          </div>
          <div className="flex justify-center">
            <button className="py-2 px-2 rounded-sm w-[250px] lg:w-full border border-zinc-700  text-zinc-800 hover:bg-white duration-100 ml-1">
              Explore now 
            </button>
          </div>
          </div>
          <div className=" hidden lg:block w-[300px] lg:w-[600px] shadow-lg">
            <img
              className="h-[200px] lg:h-[400px]"
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
        <div className="flex items-center justify-center flex-col mt-12">
          <h5>Trusted by communities worldwide</h5>
          <div className="flex flex-row gap-3 lg:gap-12 text-xl lg:text-2xl font-bold p-6 pb-10">
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
          </div>
        </div>
        <div className="bg-white w-[99.99%] flex flex-col gap-10">
          <div className="flex justify-evenly items-center mt-[20px] flex-wrap">
            <div className="hidden lg:block">
              <img className="w-[350px] h-[250px] object-contain" src={img1} alt="" />
            </div>
            <div className="w-[80%] lg:w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] lg:w-full">Intuitive and user-friendly design</h2>
              <p>
                We offer a variety of safety services, including live crime tracking, community collaboration, and emergency assistance.
              </p>
            </div>
            <div className="lg:hidden">
              <img className="w-[350px] h-[250px]" src={img1} alt="" />
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px] flex-wrap">
            <div className="w-[80%] lg:w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] lg:w-full">Simplicity is key</h2>
              <p>
                Our straightforward approach to safety ensures quick access to essential resources. We prioritize user-friendly solutions for effective crime prevention.
              </p>
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px] mb-[60px] flex-wrap">
            <div className="hidden lg:block">
              <img className="w-[350px] h-[250px] object-contain" src={img3} alt="" />
            </div>
            <div className="w-[80%] lg:w-[40%] ">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] lg:w-full">Customized solutions for all</h2>
              <p>
                Whether you're an individual or a community organization, we have safety measures to suit your needs. We tailor our services to ensure maximum protection.
              </p>
              <div className="lg:hidden mt-3">
              <img className="w-[320px] lg:w-[350px] h-[250px] object-contain" src={img3} alt="" />
              </div>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
          </div>
        </div>
        <div>
          <div class="mt-[100px] flex flex-row justify-evenly p-8 flex-wrap">
            <div class="text-center mb-8">
              <h1 class="text-3xl font-semibold mb-8">Connect with other users</h1>
              <p class="text-gray-600 ">Explore SafeZone's integration options for seamless user experience.</p>
              <button className="p-2 mt-10 rounded-sm w-[200px] border border-zinc-700  text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
                Connect apps
              </button>
            </div>
        <div className="relative w-[400px] h-[400px]">
          <div className="absolute flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow-lg" style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <img src={lock1} alt="Lock Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg" style={{ top: '20%', left: '20%', transform: 'translate(-50%, -50%)' }}>
          <img src={zoomout1} alt="Search Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow-lg" style={{ top: '70%', left: '20%', transform: 'translate(-50%, -50%)' }}>
          <img src={chat1} alt="Chat Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg" style={{ top: '85%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src={zoomin1} alt="Zoom Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow-lg" style={{ top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <img src={link1} alt="Link Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg" style={{ top: '20%', left: '80%', transform: 'translate(-50%, -50%)' }}>
            <img src={upload1} alt="Upload Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow-lg" style={{ top: '70%', left: '80%', transform: 'translate(-50%, -50%)' }}>
            <img src={chat1} alt="User Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg" style={{ top: '45%', left: '10%', transform: 'translate(-50%, -50%)' }}>
            <img src={handshake1} alt="Handshake Icon" className="w-8 h-8" />
          </div>
          <div className="absolute flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full shadow-lg" style={{ top: '45%', left: '90%', transform: 'translate(-50%, -50%)' }}>
            <img src={fork} alt="Fork Icon" className="w-8 h-8" />
          </div>
          </div>
          </div>
        </div>
    </>
  );
};
export default CardSection;
