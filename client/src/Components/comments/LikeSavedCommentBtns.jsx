import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { toast } from "react-toastify";
import { useGetAllCommentsQuery } from "../../01Redux/Service/Comment";

import {
    useLikePostMutation,
    useDislikePostMutation,
    useSavedPostMutation,
    useUnSavedPostMutation,
} from "../../01Redux/Service/Post";

const LikeSavedCommentBtns = ({ post, showModal }) => {
  const [liked, setLiked] = useState(post?.liked || false);
  const [saved, setSaved] = useState(post?.saved || false);
  const [likeNum, setLikeNum] = useState(post?.likes || 0);
  const { data: comments } = useGetAllCommentsQuery(post?.post_id);

  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();
  const [savedPost] = useSavedPostMutation();
  const [unSavedPost] = useUnSavedPostMutation();

  useEffect(() => {
    if (post) {
      setLiked(post.liked);
      setSaved(post.bookmark);
      setLikeNum(post.likes);
    }
  }, [post]);

  const handleLikePost = async (id) => {
    if (liked) return;
    setLiked(true);
    setLikeNum((prev) => prev + 1);
    try {
      const res = await likePost(id).unwrap();
      setLikeNum(res.likes);
      toast("You liked the post");
    } catch (error) {
      setLiked(false);
      setLikeNum((prev) => prev - 1);
      console.log(error);
      toast.error("Failed to like the post.");
    }
  };

  const handleDislikePost = async (id) => {
    if (!liked) return;
    setLiked(false);
    setLikeNum((prev) => prev - 1);
    try {
      const res = await dislikePost(id).unwrap();
      setLikeNum(res.likes);
      toast("You disliked the post");
    } catch (error) {
      setLiked(true);
      setLikeNum((prev) => prev + 1);
      console.log(error);
      toast.error("Failed to dislike the post.");
    }
  };

  const toggleLike = (id) => {
    if (liked) {
      handleDislikePost(id);
    } else {
      handleLikePost(id);
    }
  };

  const handleSavedPost = async (id) => {
    if (saved) return;
    setSaved(true);
    try {
      await savedPost(id).unwrap();
      toast("You saved the post");
    } catch (error) {
      setSaved(false);
      console.log(error);
      toast.error("Failed to save the post.");
    }
  };

  const handleUnsavedPost = async (id) => {
    if (!saved) return;
    setSaved(false);
    try {
      await unSavedPost(id).unwrap();
      toast("You unsaved the post");
    } catch (error) {
      setSaved(true);
      console.log(error);
      toast.error("Failed to unsave the post.");
    }
  };

  const toggleSave = (id) => {
    if (saved) {
      handleUnsavedPost(id);
    } else {
      handleSavedPost(id);
    }
  };

  return (
    <div className="sm:w-[500px] flex items-center mt-2 justify-between">
      <button
        onClick={() => toggleLike(post?.post_id)}
        className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
      >
        {liked ? (
          <IoMdHeart className="text-rose-600 text-2xl transition-transform duration-300 transform scale-[1.1]" />
        ) : (
          <IoMdHeartEmpty className="text-2xl transition-transform duration-300 transform scale-100" />
        )}
        <span className="mb-1 ml-1">{likeNum}</span>
      </button>
      <Link
        to={`/post/${post?.post_id}`}
        className="flex items-center text-white px-2 rounded"
      >
        <TfiComment className="text-xl" />
        <span className="mb-1 ml-1">{comments?.length}</span>
      </Link>
      <button
        onClick={showModal}
        className="flex items-center text-white px-2 rounded"
      >
        <PiPaperPlaneTilt className="text-2xl" />
      </button>
      <button
        onClick={() => toggleSave(post?.post_id)}
        className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
      >
        {saved ? (
          <BsBookmarkFill className="text-lg transition-transform duration-300 transform scale-110" />
        ) : (
          <BsBookmark className="text-white text-lg transition-transform duration-300 transform scale-100" />
        )}
      </button>
    </div>
  );
};

export default LikeSavedCommentBtns;
