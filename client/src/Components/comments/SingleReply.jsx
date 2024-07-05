import React, { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

import { TfiComment } from "react-icons/tfi";
import Comments from './Comments'
const SingleReply = ({reply}) => {
    const [like, setLike] = useState(false);
  const [commentBtn, setCommentBtn] = useState(false);

  return (
    <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                    alt="User avatar"
                    className="w-10 h-10 rounded-full mr-4 object-cover"
                  />
                  <div className="">
                    <div className="bg-gray-800 rounded-lg p-3 w-full pr-10">
                      <div className="flex items-center justify-between w-full">
                        <div className="font-bold">Pavan Kumar</div>
                        <div className="text-gray-400 text-sm">Jul 3</div>
                      </div>
                      <div className="mt-1">{reply}</div>
                    </div>
                    <div className="flex flex-col justify-center space-x-1 mt-1 text-gray-400">
                      <div className="flex items-center mt-2 space-x-4">
                        <button
                          onClick={() => setLike(!like)}
                          className="bg-gray-900 flex items-center text-white  rounded transition-all duration-1000"
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
                          className=" flex items-center text-white  rounded"
                        >
                          <TfiComment className="text-xl" />
                          <span className="mb-1 ml-1">1</span>
                        </button>
                      
                      </div>
                      {commentBtn && <Comments/>}
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default SingleReply
