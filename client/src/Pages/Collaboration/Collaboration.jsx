import React from 'react';
import img from '../../assets/4529196 1.png';
import img2 from '../../assets/demonstration_5389914 1.png';
import img3 from '../../assets/smiling-businessman-face-portrait-wearing-suit 1.png';
import TestimonialsCard from './TestimonialsCard';
import { useGetAllCampsQuery } from '../../01Redux/Service/collab';
function Collaboration() {
  const { data: camps, loading, isError } = useGetAllCampsQuery();
  console.log(camps);
  return (
    <>
      <div className="flex-col">
        <div className=" bg-white h-[700px] w-full flex">
          <div className="w-2/3 my-36 ml-16  py-10">
            <h1 className="text-black text-5xl font-semibold">
              Collaboration and Awareness Camps
            </h1>
            <h2 className="text-black my-5 text-xl mx-1">
              Discover new Camps and communities prompting the prevention of
              crime
            </h2>
            <div className="flex my-20 mx-14 gap-32">
              <button className="bg-[#FF735C] w-[193px] h-[66.52px] border-solid rounded-full text-black text-xl font-medium shadow-lg hover:shadow-2xl">
                Start
              </button>
              <button className=" w-[193px] h-[66.52px] border-solid border-black border-2 rounded-full text-black text-xl font-medium shadow-lg hover:shadow-2xl">
                Join
              </button>
            </div>
          </div>
          <img
            src={img}
            alt="ok"
            className="h-[470px] w-[700px] justify-center justify-self-center my-20"
          />
        </div>

        {/* //-------------------------SECOND PART------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        <div className="bg-gray-900 min-h-screen p-8">
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="flex justify-center space-x-4 mb-4">
              <button className="bg-[#FF735C] text-white px-4 py-2 rounded-lg">
                ACTIVE
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                UPCOMING
              </button>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 ">
              {camps?.map((camp) => (
                <div
                  key={camp?.camp_id}
                  className="bg-white rounded-2xl w-[600px] p-4 shadow-lg flex gap-10 "
                >
                  <div>
                    <h2 className="text-3xl text-black font-faint mb-2">
                      {camp?.camp_name}
                    </h2>
                    <div className="flex items-center mb-2">
                      <span className="bg-[#FFBF9C] text-sm text-black px-4 py-2 rounded-full">
                        Camp
                      </span>
                      <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ml-2 ">
                        {camp?.camp_type}
                      </span>
                      <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ml-2 ">
                        test
                      </span>
                      <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ml-2 ">
                        test
                      </span>
                    </div>
                    <p className="text-base text-black font-bold  mb-2">
                      Theme
                    </p>

                    <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ">
                      {camp?.description}
                    </span>
                    <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ml-2 ">
                      test
                    </span>
                    <span className="bg-[#FFBF9C] text-sm  text-black px-4 py-2 rounded-full ml-2 ">
                      test
                    </span>

                    <p className="bg-[#ffe7db] text-base font-faint w-[150px]  text-black px-4 py-2 rounded-full my-5">
                      Starts {camp?.date}
                    </p>
                  </div>
                  <div className="flex-col ml-10 ">
                    <img
                      src={`http://localhost:8000${camp?.files[0]}`}
                      alt=""
                      className="my-9 ml-10"
                    />

                    <button className="bg-[#FF735C] text-black text-lg font-faint  rounded-full w-[170px] h-[50px] shadow-md hover:shadow-2xl ">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 mt-8">
            <h2 className="text-center text-white text-3xl font-bold mb-6">
              Testimonials
            </h2>
            <h3 className="text-center text-white text-xl mb-6">
              Read What Other Has To Say
            </h3>
            <div className="lg:grid grid-cols-4 justify-around ">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <TestimonialsCard />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collaboration;
