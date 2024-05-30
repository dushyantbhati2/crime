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
      <div className="m-10">
        <div className="flex justify-between items-center ">
          <div className="w-[450px] ml-[200px]  flex flex-col gap-10">
            <h1 className="text-5xl font-bold w-[330px] ">
              Track crime in real-time
            </h1>
            <p className="text-lg  text-zinc-800 ">
              Discover our safety features
            </p>
            <button className="p-2 w-full border border-zinc-700  text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
              Explore now
            </button>
          </div>
          <div className=" w-[600px] shadow-lg">
            <img
              className="h-[400px] "
              src="https://i.blogs.es/635f55/maps/1366_2000.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-12">
          <h5>Trusted by communities worldwide</h5>
          <div className="flex flex-row gap-12 text-2xl font-bold p-6 pb-10">
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
          </div>
        </div>
        <div className="bg-white w-[99.99%] flex flex-col gap-10">
          <div className="flex justify-evenly items-center mt-[20px]">
            <div>
              <img className="w-[350px] h-[250px]" src={img1} alt="" />
            </div>
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Intuitive and user-friendly design</h2>
              <p>
                We offer a variety of safety services, including live crime tracking, community collaboration, and emergency assistance.              </p>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px]">
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Simplicity is key</h2>
              <p>
                Our straightforward approach to safety ensures quick access to essential resources. We prioritize user-friendly solutions for effective crime prevention.
              </p>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
            <div>
              <img className="w-[350px] h-[250px]" src={img2} alt="" />
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px] mb-[60px]">
            <div>
              <img className="w-[350px] h-[250px]" src={img3} alt="" />
            </div>
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Customized solutions for all</h2>
              <p>
              Whether you're an individual or a community organization, we have safety measures to suit your needs. We tailor our services to ensure maximum protection.
              </p>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
          </div>
        </div>
        <div>
          <div class="mt-[100px] flex flex-row justify-evenly p-8">
            <div class="text-center mb-8">
              <h1 class="text-2xl font-semibold mb-8">Connect with other users</h1>
              <p class="text-gray-600">Explore SafeZone's integration options for seamless user experience.</p>
              <button className="p-2 mt-10 w-[200px] border border-zinc-700  text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
                Connect apps
              </button>
            </div>
            <div class="grid grid-cols-3 w-[400px]">
              <div class="flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full ml-12 mt-5 shadow-lg">
                <img src={lock1} alt="Lock Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 ml-7 rounded-full shadow-lg">
                <img src={zoomout1} alt="Search Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-[80px] h-[80px] rounded-full mt-[60px] shadow-lg">
                <img src={chat1} alt="Chat Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white mt-7 w-16 h-16 ml-6 rounded-full shadow-lg">
                <img src={zoomin1} alt="Zoom Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-[80px] ml-5 h-[80px] rounded-full shadow-lg">
                <img src={link1} alt="Link Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 mt-12 ml-8 rounded-full shadow-lg">
                <img src={upload1} alt="Upload Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-[80px] h-[80px] mt-6 rounded-full shadow-lg">
                <img src={chat1} alt="User Icon" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white w-16 h-16 mt-[35px] rounded-full shadow-lg">
                <img src={handshake1} alt="Connect Ihandshake1con" class="w-8 h-8" />
              </div>
              <div class="flex justify-center items-center bg-white  w-[80px] h-[80px] mt-10 rounded-full shadow-lg">
                <img src={fork} alt="Share Icon" class="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
