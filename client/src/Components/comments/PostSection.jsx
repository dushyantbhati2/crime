import React, { useState } from "react";
import { useGetAllCommentsQuery, useCreateCommentMutation, useDeleteCommentMutation } from "../../01Redux/Service/Comment";
import LeftSection from "../../Pages/community/LeftSection";
import RightSection from "../../Pages/community/RightSection";
import SingleReply from "./SingleReply";

const PostSection = ({setCommentBtn,p_id}) => {
  const { data: comments = [], refetch } = useGetAllCommentsQuery(p_id);
  const [createComment] = useCreateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [newReply, setNewReply] = useState("");

  console.log(p_id);
  
  const handleReply = async () => {
    if (newReply.trim()) { 
      await createComment({ p_id, content: newReply });
      setNewReply("");
      refetch(); 
    }
  };
  
  const handleDelete = async (commentId) => {
    await deleteComment(commentId);
    refetch();
  };

  return (
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
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
              />
              <button
                className="bg-rose-600 text-white rounded-lg py-2 px-4 hover:bg-rose-800"
                onClick={handleReply}
              >
                Reply
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {comments.map((reply) => (
                <SingleReply
                  key={reply.id}
                  reply={reply.content}
                  onDelete={() => handleDelete(reply.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <RightSection />
    </div>
  );
};

export default PostSection;