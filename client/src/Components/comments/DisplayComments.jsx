import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import LeftSection from "../../Pages/community/LeftSection";
import RightSection from "../../Pages/community/RightSection";
import Comments from "./Comments";
import InfoPopup from "./Popup";

const PostSection = () => {
  const [like, setLike] = useState(false);
  const [commentBtn, setCommentBtn] = useState(false);
  const [mark, setMark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const confirmPrivacy = () => {
    alert("Privacy accepted");
    hideModal();
  };

  return (
    <>
      <InfoPopup
        isVisible={isVisible}
        hideModal={hideModal}
        confirmPrivacy={confirmPrivacy}
      />
      <div className="min-h-screen sm:px-8 bg-gray-900 text-white grid sm:grid-cols-10 pt-[50px]">
        <LeftSection />
        <div className="w-full sm:col-span-6 justify-center my-3 p-6 overflow-y-auto no-scrollbar h-[calc(100vh-70px)]">
          <div className="w-full max-w-2xl bg-gray-900 text-white rounded-lg p-6">
            <div className="mb-4">
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-bold">Dushyant</div>
                  <div className="text-gray-400">@deekshant24</div>
                </div>
              </div>
              <div className="mt-2 text-lg">
                "Hi! I'm planning to start{" "}
                <span className="text-blue-400">#Leetcode</span> sql challenge.
                If you're interested, let's{" "}
                <span className="text-blue-400">#connect</span>!"
              </div>
              <div className="text-blue-400 mt-2">#buildinginpublic</div>
              <div className="flex mt-2 text-gray-400">
                <div>10:56 PM · Jul 2, 2024 · 57.2K Views</div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-4">
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Post your reply"
                  className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 mr-2"
                />
                <button className="bg-rose-600 text-white rounded-lg py-2 px-4 hover:bg-rose-800">
                  Reply
                </button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-bold">Pavan Kumar</div>
                        <div className="text-gray-400 text-sm">Jul 3</div>
                      </div>
                      <div className="mt-1">How can I be part of these ?</div>
                    </div>
                    <div className="flex flex-col justify-center space-x-1 mt-1 text-gray-400">
                      <div className="flex items-center mt-2 space-x-4">
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
                          onClick={showModal}
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
                      {commentBtn && <Comments />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSection />
      </div>
    </>
  );
};

export default PostSection;
