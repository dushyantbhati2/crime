import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import Comments from "../../Components/comments/Comments";
import { Link } from "react-router-dom";
import InfoPopup from "../../Components/comments/Popup";
import { useLikePostMutation,useDislikePostMutation } from "../../01Redux/Service/Post";
import { toast } from "react-toastify";


function CommunityPost({ post }) {
  const [like, setLike] = useState(false);
  const [commentBtn, setCommentBtn] = useState(false);
  const [mark, setMark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [files, setFiles] = useState([]);

  const [likePost] = useLikePostMutation();
  const [dislikePost]= useDislikePostMutation()

  const handleLikePost = async (id) => {
    try {
      const res = await likePost(id).unwrap();
      toast("You liked the post");
    } catch (error) {
      console.log(error);
      toast.error("Failed to like the post.");
    }
  };
  const handleDislikePost = async (id) => {
    try {
      const res = await dislikePost(id).unwrap();
      toast("You Disliked the post");
    } catch (error) {
      console.log(error);
      toast.error("Failed to Dislike the post.");
    }
  };

  useEffect(() => {
    if (post && post.files) {
      setFiles(post.files);
    }
  }, [post]);

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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <InfoPopup
        isVisible={isVisible}
        hideModal={hideModal}
        confirmPrivacy={confirmPrivacy}
      />
      <div className="mb-6">
        <Link className="bg-red-500" to={`/post/${post?.id}`}>
          <div className="flex items-center space-x-4">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">{post?.post_user?.username}</h2>
          </div>
          <p className="text-gray-400 ml-14">
            {post?.description}
          </p>
        </Link>

        <div className="h-[350px] rounded-md sm:min-h-[200px] sm:w-[500px] px-2 relative group mt-4 ">
          <div className="h-full w-full">
            <div
              className="relative w-full h-full"
            >
              <div
                style={{
                  backgroundImage: `url(http://localhost:8000${files[currentIndex]?.file})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition:'center'
                }}
                className="w-full h-full rounded-md object-contain duration-500 absolute top-0 left-0"
              >
              </div>
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
              onClick={() => handleLikePost(post?.post_id)}
              className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
            >
              {post?.likes ? (
                <IoMdHeartEmpty className="text-2xl transition-transform duration-300 transform scale-100" />
              ) : (
                <IoMdHeart className="text-rose-600 text-2xl transition-transform duration-300 transform scale-[1.1]" />
              )}
              <span className="mb-1 ml-1">{post?.likes}</span>
            </button>
            <button
              onClick={() => setCommentBtn(!commentBtn)}
              className="flex items-center text-white px-2 rounded">
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
            </button>
          </div>
          <div className="w-full py-4">{commentBtn && <Comments setCommentBtn={setCommentBtn} />}</div>
        </div>
      </div>
    </>
  );
}

export default CommunityPost;
