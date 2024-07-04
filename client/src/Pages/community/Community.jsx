import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import CommunityPost from "./CommunityPost";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";

import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";

import Comments from "../../Components/comments/Comments";
import { Link } from "react-router-dom";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Community = () => {
  const [like, setLike] = useState("false");
  const [commentBtn, setCommentBtn] = useState("false");
  const [mark, setMark] = useState("false");
  return (
    <div className="min-h-screen sm:px-8 bg-gray-900 text-white grid sm:grid-cols-10 pt-[50px] ">
    <LeftSection/>
      <main className=" col-span-6 my-3 p-6 overflow-y-auto no-scrollbar h-[calc(100vh-70px)]">
        <CommunityPost />
        <section>
          <Link to={'/post/1'} className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <h2 className="text-lg font-semibold mb-2">
                Parent's joyful moment
              </h2>
            </div>
            <p className="text-gray-400 ml-14">
              Parent's gratitude and love for family adventures. Travel memories
              shared.
            </p>
            {/* <div className="flex mt-4">
              <img
                src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="Travel"
                className="w-1/2 rounded-lg mr-4"
              />
              <img
                src="https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
                alt="Travel"
                className="w-1/2 rounded-lg"
              />
            </div> */}
            <div className="carousel rounded-box w-full mt-4">
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                  className="w-full object-cover"
                />
              </div>
              <div className="carousel-item w-1/2 h-[450px]">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <div>
            <div className="sm:w-2/3 flex items-center mt-2 justify-between">
                        <button
                          onClick={() => setLike(!like)}
                          className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
                        >
                          {like ? (
                            <IoMdHeartEmpty className=" text-2xl transition-transform duration-300 transform scale-100" />
                          ) : (
                            <IoMdHeart className="text-rose-600  text-2xl transition-transform duration-300 transform scale-[1.1]" />
                          )}
                          <span className="mb-1 ml-1">29</span>
                        </button>
                        <button
                          onClick={() => setCommentBtn(!commentBtn)}
                          className=" flex items-center text-white px-2 rounded"
                        >
                          <TfiComment className="text-xl" />
                          <span className="mb-1 ml-1">1</span>
                        </button>
                        <button
                          className="flex items-center text-white px-2 rounded"
                        >
                          <PiPaperPlaneTilt className="text-2xl" />
                        </button>
                        <button
                          onClick={() => setMark(!mark)}
                          className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
                        >
                          {mark ? (
                            <BsBookmarkFill className="text-lg transition-transform duration-300 transform scale-110" />
                          ) : (
                            <BsBookmark className="text-white text-lg transition-transform duration-300 transform scale-100" />
                          )}
                          <span className="mb-1 ml-1">9</span>
                        </button>
                      </div>

              <div className="w-full py-4">{!commentBtn && <Comments />}</div>
            </div>
          </Link>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold mb-2">
                Parenting Community Engagement
              </h2>{" "}
            </div>

            <p className="text-gray-400 ml-14">
              Parenting Community Discussions
            </p>
            <div className="flex  justify-between mt-4 space-x-4">
              <img
                src="https://images.unsplash.com/photo-1603201101485-e232d22ad18b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww"
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
              <img
                src="https://media.istockphoto.com/id/1687720497/photo/business-meeting-sales-team-meeting-of-a-startup-company-brainstorming-and-summarizing.webp?b=1&s=170667a&w=0&k=20&c=26bRvTbpq3QOoS8kMA55ixeR1vHWdmuVisbXKdksKB0="
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
              <img
                src="https://media.istockphoto.com/id/1977348709/photo/laughing-young-businesswoman-talking-with-colleagues-in-an-office-hallway.webp?b=1&s=170667a&w=0&k=20&c=PlA-PNKbN4j3GWuy0vbtCqD3IkbrE3mJLlQ2mHWRAjo="
                alt="Discussion"
                className="md:w-[270px] object-cover rounded-lg"
              />
            </div>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Interact
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Eng
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Share
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              <h2 className="text-lg font-semibold mb-2">Parenting Advocate</h2>
            </div>
            <p className="text-gray-400 ml-14">
              Parenting Story & Experience Sharing
            </p>
            <div className="flex mt-4 space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Interact
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Eng
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Share
              </button>
            </div>
          </div>
        </section>
      </main>
      <RightSection/>

    </div>
  );
};

export default Community;
