import React, { useState } from "react";

const Comments = () => {
  const [comment, setComment] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-700 text-white flex items-center justify-center">L</div>
          <div className="flex-1">
            <input
              value={comment}
              type="text"
              placeholder="Add a comment..."
              className="w-full bg-transparent border-b border-gray-400 text-white focus:border-white outline-none"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-2">
          <div
            className="bg-transparent text-white text-sm px-6 py-2 flex items-center justify-center cursor-pointer hover:bg-gray-700 rounded-full"
            onClick={() => setComment("")}
          >
            Cancel
          </div>
          <button
            className={`${
              comment.length > 0
                ? "bg-blue-400 text-black"
                : "bg-gray-400/10 text-gray-500"
            } text-sm px-6 py-2 rounded-full cursor-pointer`}
            disabled={comment.length === 0}
          >
            Reply
          </button>
        </div>
      </form>
      <div className="mt-4"></div>
    </>
  );
};

export default Comments;
