import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SlLocationPin } from "react-icons/sl";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { TfiComment } from "react-icons/tfi";
import Comments from "../../Components/comments/Comments";
import { Link } from "react-router-dom";
import InfoPopup from "../../Components/comments/Popup";

function CommunityPost({post}) {
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


  const slides = [
    { url: "https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
    { url: "https://plus.unsplash.com/premium_photo-1682513184135-b7b9b76fb4eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww" },
    { url: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" },
    { url: "https://plus.unsplash.com/premium_photo-1672116453187-3aa64afe04ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww" },
    { url: "https://media.istockphoto.com/id/1419539600/photo/business-presentation-and-man-on-a-laptop-in-a-corporate-conference-or-office-collaboration.webp?b=1&s=170667a&w=0&k=20&c=uucFbLp3S3vTpwmYBtI3tiLQssKCgSbX4GTaQdQeeq4=" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
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
        <Link to={"/post/1"}>
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

        <div className="h-[350px] rounded-md sm:min-h-[200px] sm:w-[500px] py-4 px-2  relative group mt-4 md:mt-8 lg:mt-12">
          <div className="h-full w-full">
            <div
              className="relative w-full h-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                className="w-full h-full rounded-md object-contain duration-500 absolute top-0 left-0"
              ></div>
            </div>
            {/* Left Arrow */}
            <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  text-white cursor-pointer">
              <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="lg:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  text-white cursor-pointer">
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div>
          <div className="sm:w-[500px] flex items-center mt-2 justify-between">
            <button
              onClick={() => setLike(!like)}
              className="bg-gray-900 flex items-center text-white px-2 rounded transition-all duration-1000"
            >
              {like ? (
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
