import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import { Link } from "react-router-dom";
import InfoPopup from "../../Components/comments/Popup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useGetAllCommentsQuery } from "../../01Redux/Service/Comment";
import {
  useLikePostMutation,
  useDislikePostMutation,
  useSavedPostMutation,
  useUnSavedPostMutation,
  useDeletePostMutation,
} from "../../01Redux/Service/Post";
import { BsThreeDotsVertical } from "react-icons/bs";

function CommunityPost({ post }) {
  console.log(post)
  const { userInfo } = useSelector((state) => state.auth);
  const [liked, setLiked] = useState(post?.liked || false);
  const [saved, setSaved] = useState(post?.saved || false);
  const [likeNum, setLikeNum] = useState(post?.likes || 0);
  const [commentBtn, setCommentBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [popup, setPopup] = useState(false);
  const [files, setFiles] = useState(post?.files || []);
  const { data: comments } = useGetAllCommentsQuery(post?.post_id);

  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();
  const [savedPost] = useSavedPostMutation();
  const [unSavedPost] = useUnSavedPostMutation();
  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    if (post) {
      setLiked(post.liked);
      setSaved(post.bookmark);
      setLikeNum(post.likes);
      setFiles(post.files);
    }
  }, [post]);

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id).unwrap();
      toast.success("Post Deleted successfully");
      setPopup(false);
    } catch (error) {
      console.error("Failed to delete the post: ", error);
      toast.error("Post Deletion failed");
    }
  };

  const handleLikePost = async (id) => {
    if (liked) return;
    try {
      const res = await likePost(id).unwrap();
      setLikeNum(res.likes);
      setLiked(true);
      toast("You liked the post");
    } catch (error) {
      console.log(error);
      toast.error("Failed to like the post.");
    }
  };

  const handleDislikePost = async (id) => {
    if (!liked) return;
    try {
      const res = await dislikePost(id).unwrap();
      setLikeNum(res.likes);
      setLiked(false);
      toast("You disliked the post");
    } catch (error) {
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
    try {
      await savedPost(id).unwrap();
      setSaved(true);
      toast("You saved the post");
    } catch (error) {
      console.log(error);
      toast.error("Failed to save the post.");
    }
  };

  const handleUnsavedPost = async (id) => {
    if (!saved) return;
    try {
      await unSavedPost(id).unwrap();
      setSaved(false);
      toast("You unsaved the post");
    } catch (error) {
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

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const confirmPrivacy = () => {
    alert("Privacy accepted");
    hideModal();
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? files.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === files.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const togglePopup = () => {
    setPopup(!popup);
  };

  return (
    <>
      <InfoPopup
        isVisible={isVisible}
        hideModal={hideModal}
        confirmPrivacy={confirmPrivacy}
        id={post?.post_id}
      />
      <div className="mb-6">
        <div className="">
          <div className="flex justify-between relative">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <h2 className="text-lg font-semibold mb-2">
                {post?.post_user?.username}
              </h2>
            </div>
            {userInfo.user.username === post?.post_user?.username && (
              <BsThreeDotsVertical
                className="text-xl cursor-pointer"
                onClick={togglePopup}
              />
            )}
            {userInfo.user.username === post?.post_user?.username && popup && (
              <div className="absolute z-50 right-4 top-4 py-1 px-3 flex flex-col rounded-md bg-gray-800">
                <button className="flex text-white hover:bg-gray-700 p-2 rounded">
                  Edit
                </button>
                <button
                  onClick={() => handleDeletePost(post?.post_id)}
                  className="flex text-rose-600 hover:bg-gray-700 p-2 rounded"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
          <div className="ml-14">
            <Link to={`/post/${post?.post_id}`} className="text-gray-300 ">
              {post?.description}
            </Link>
          </div>
        </div>

        <div
          className={` ${
            post?.files.length === 0 ? "h-0" : "h-[350px] sm:min-h-[200px]"
          } rounded-md sm:w-[500px] px-2 relative group mt-4`}
        >
          <div className="h-full w-full">
            <div className="relative w-full h-full">
              <div
                style={{
                  backgroundImage: `url(${files[currentIndex]?.file})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-full rounded-md object-contain duration-500 absolute top-0 left-0"
              ></div>
            </div>
            {/* Left Arrow */}
            <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div>
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
              onClick={() => setCommentBtn(!commentBtn)}
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
        </div>
      </div>
    </>
  );
}

export default CommunityPost;
