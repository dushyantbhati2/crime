import React, { useState } from 'react';
import { useGetAllCommentsQuery } from '../../01Redux/Service/Comment';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
const Comments = ({ setCommentBtn, post_id, id }) => {
  const [comment, setComment] = useState('');

  const [postComment] = useGetAllCommentsQuery();

  const submitComment = async (e, id) => {
    e.preventDefault();
    try {
      const res = await postComment({ id, content: comment });
      toast('comment sent successfully');
    } catch (error) {
      console.log(error);
      toast.error('error in comments');
    }
  };
  const res = useGetAllCommentsQuery({ id });
  console.log(id);

  return (
    <>
      <form className="space-y-4">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-gray-700 text-white flex items-center justify-center">
            L
          </div>
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
            onClick={() => setCommentBtn(false)}
          >
            Cancel
          </div>
          <button
            className={`${
              comment.length > 0
                ? 'bg-rose-600 text-white '
                : 'bg-gray-400/10 text-gray-500'
            } text-sm px-6 py-2 rounded-full cursor-pointer`}
            disabled={comment.length === 0}
            onClick={() => submitComment(post_id)}
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
