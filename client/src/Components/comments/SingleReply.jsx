import React, { useState, useRef, useEffect } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { TfiComment } from 'react-icons/tfi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Comments from './Comments';
import { useDeleteCommentMutation } from '../../01Redux/Service/Comment';

const SingleReply = ({ reply, post }) => {
  const [like, setLike] = useState(false);
  const [commentBtn, setCommentBtn] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const [popup, setPopup] = useState(false);
  const popupRef = useRef();

  const togglePopup = () => {
    setPopup(!popup);
  };

  const [deleteComment] = useDeleteCommentMutation();
  const handleDeleteComment = async (id) => {
    try {
      await deleteComment(id).unwrap();
      toast.success('Post Deleted successfully');
      setPopup(false);
    } catch (error) {
      console.error('Failed to delete the post: ', error);
      toast.error('Post Deletion failed');
    }
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setPopup(false);
    }
  };

  useEffect(() => {
    if (popup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popup]);

  return (
    <div className="space-y-4 relative">
      <div className="flex items-start space-x-3">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
          alt="User avatar"
          className="w-10 h-10 rounded-full mr-4 object-cover"
        />
        <div className="flex-1">
          <div className="bg-gray-800 rounded-lg p-3 pr-5 max-w-max">
            <div className="flex items-center justify-between">
              <div className="font-bold">{reply?.comment_user.username}</div>
              <div className="text-gray-400 text-sm ml-4">Jul 3</div>
            </div>
            <div className="mt-1">{reply.content}</div>
          </div>
          <div className="flex flex-col justify-center space-x-1 mt-1 text-gray-400">
            <div className="flex items-center mt-2 space-x-4">
              <button
                onClick={() => setLike(!like)}
                className="bg-gray-900 flex items-center text-white rounded transition-all duration-1000"
              >
                {like ? (
                  <IoMdHeartEmpty className="text-2xl transition-transform duration-300 transform scale-100" />
                ) : (
                  <IoMdHeart className="text-rose-600 text-2xl transition-transform duration-300 transform scale-[1.1]" />
                )}
                <span className="mb-1 ml-1">29</span>
              </button>
              <button
                onClick={() => setCommentBtn(!commentBtn)}
                className="flex items-center text-white rounded"
              >
                <TfiComment className="text-xl" />
                <span className="mb-1 ml-1">1</span>
              </button>
            </div>
            {commentBtn && <Comments reply={reply} />}
          </div>
        </div>
        {userInfo.user.username === reply?.comment_user?.username && (
          <div className="relative z-50">
            <BsThreeDotsVertical
              className="text-xl cursor-pointer"
              onClick={togglePopup}
            />
            {popup && (
              <div
                ref={popupRef}
                className="absolute z-50 right-0 mt-2 py-1 px-3 flex flex-col rounded-md bg-gray-800"
              >
                <button className="flex text-white hover:bg-gray-700 p-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteComment(reply?.id)}
                  className="flex text-rose-600 hover:bg-gray-700 p-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleReply;
