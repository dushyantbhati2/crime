import React from "react";

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

        {/* <div className="bg-white w-[96%] flex justify-evenly items-center">
            <div>
              <img className="w-[200px] h-[200px]" src="" alt="" />
            </div>
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                enim ut incidunt earum temporibus sed maxime necessitatibus
                suscipit in quos aliquam ipsum veritatis eveniet debitis
                asperiores ducimus nam, porro modi!
              </p>
              <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button>
            </div>
          </div> */}
        <div className="bg-white w-[99.99%] flex flex-col gap-10">
          <div className="flex justify-evenly items-center mt-[20px]">
            <div>
              <img className="w-[200px] h-[200px]" src="" alt="" />
            </div>
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                enim ut incidunt earum temporibus sed maxime necessitatibus
                suscipit in quos aliquam ipsum veritatis eveniet debitis
                asperiores ducimus nam, porro modi!
              </p>
              <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button>
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px]">
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                enim ut incidunt earum temporibus sed maxime necessitatibus
                suscipit in quos aliquam ipsum veritatis eveniet debitis
                asperiores ducimus nam, porro modi!
              </p>
              <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button>
            </div>
            <div>
              <img className="w-[200px] h-[200px]" src="" alt="" />
            </div>
          </div>
          <div className="flex justify-evenly items-center mt-[60px]">
            <div>
              <img className="w-[200px] h-[200px]" src="" alt="" />
            </div>
            <div className="w-[40%]">
              <h2 className="text-3xl font-semibold mt-4 mb-8">Heading</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                enim ut incidunt earum temporibus sed maxime necessitatibus
                suscipit in quos aliquam ipsum veritatis eveniet debitis
                asperiores ducimus nam, porro modi!
              </p>
              <button className="p-2 mt-6 w-[40%] border border-zinc-700  text-zinc-800 hover:scale-105 hover:ease-out duration-100 hover:bg-[#F0F0F0]">
                Explore now
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>Visit our forum</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSection;
