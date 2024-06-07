import React, { useEffect, useRef } from 'react';
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
import "./CardSection.css"
const CardSection = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
      icon.style.animation = 'none';
      // eslint-disable-next-line no-unused-expressions
      icon.offsetHeight; /* trigger reflow */
      icon.style.animation = null;
    });
  }, []);
  return (
    <>
    
      <div className="overflow-hidden bg-community">
        <div className="flex justify-between items-center w-full gap-7 flex-wrap">
          <div className=" md:w-[450px] md:ml-[200px]  flex flex-col gap-10 justify-center ">
            <h1 className="text-5xl font-heading text-white font-bold w-[300px] md:w-[330px] leading-[125%] my-10">
              Track crime in real-time
            </h1>
            <p className="text-lg  text-white font-muli ">
              Discover our safety features
            </p>
            <div className=" w-[300px] md:w-[600px] shadow-lg lg:hidden">
              <img
                className="h-[250px] md:h-[400px]"
                src="https://i.blogs.es/635f55/maps/1366_2000.jpg"
                alt=""
              />
            </div>
            <div className="flex justify-center">
              <button className="py-2 px-2 rounded-xl w-[250px] md:w-full border border-zinc-700  text-black bg-white hover:text-black duration-100 ml-1">
                Explore now
              </button>
            </div>
          </div>
          <div className=" hidden md:block w-[300px] md:w-[600px] shadow-lg">
            <img
              className="h-[200px] md:h-[400px]"
              src="https://i.blogs.es/635f55/maps/1366_2000.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mt-12 text-white">
          <h5>Trusted by communities worldwide</h5>
          <div className="flex flex-row gap-3 md:gap-12 text-xl md:text-2xl font-bold p-6 pb-10 text-white">
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
            <h2>Safety</h2>
          </div>
        </div>
        <div className="bg-white flex flex-col gap-10 ">
          <div className="flex justify-evenly items-center mt-[20px] flex-wrap">
            <div className="hidden md:block">
              <img className="w-[350px] h-[250px] object-contain rounded-3xl" src={img1} alt="" />
            </div>
            <div className="w-[80%] lg:w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] md:w-full">Intuitive and user-friendly design</h2>
              <p className='font-muli leading-6	'>
                We offer a variety of safety services, including live crime tracking, community collaboration, and emergency assistance.              </p>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
            <div className="md:hidden">
              <img className="w-[350px] h-[250px]" src={img1} alt="" />
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px] flex-wrap">
            <div className="w-[80%] md:w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] md:w-full">Simplicity is key</h2>
              <p className='font-muli leading-6	'>
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
          <div className="flex justify-evenly items-center mt-[60px] mb-[60px] flex-wrap">
            <div className="hidden md:block">
              <img className="w-[350px] h-[250px] object-contain" src={img3} alt="" />
            </div>
            <div className="w-[80%] md:w-[40%] ">
              <h2 className="text-3xl font-semibold mt-4 mb-8 w-[200px] md:w-full">Customized solutions for all</h2>
              <p className='font-muli leading-6	'>
                Whether you're an individual or a community organization, we have safety measures to suit your needs. We tailor our services to ensure maximum protection.
              </p>
              <div className="md:hidden mt-3">
                <img className="w-[320px] md:w-[350px] h-[250px] object-contain" src={img3} alt="" />
              </div>
              {/* <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button> */}
            </div>
          </div>
        </div>
        <div>
          <div class="mt-[100px] flex flex-row justify-evenly p-8 flex-wrap ">
            <div class="text-center mb-8 ">
              <h1 class="text-3xl font-semibold mb-8">Connect with other users</h1>
              <p class="text-gray-600 ">Explore SafeZone's integration options for seamless user experience.</p>
              <button className="p-2 mt-10 rounded-sm w-[200px] border border-zinc-700  text-zinc-800 hover:bg-white hover:scale-105 hover:ease-out duration-100">
                Connect apps
              </button>
            </div>
            <div className="relative w-[400px] h-[400px] ">
              <div className="icon icon1 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={lock1} alt="Lock Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon2 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={zoomout1} alt="Search Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon3 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={chat1} alt="Chat Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon4 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={zoomin1} alt="Zoom Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon5 absolute flex justify-center items-center bg-white bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={link1} alt="Link Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon6 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={upload1} alt="Upload Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon7 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={chat1} alt="User Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon8 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={handshake1} alt="Handshake Icon" className="w-8 h-8" />
              </div>
              <div className="icon icon9 absolute flex justify-center items-center bg-white w-16 h-16 rounded-full shadow-lg">
                <img src={fork} alt="Fork Icon" className="w-8 h-8" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
