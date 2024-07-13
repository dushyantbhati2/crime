import React, { useState, useEffect } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsX,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import InfoPopup from "../../Components/comments/Popup";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useDeletePostMutation } from "../../01Redux/Service/Post";
import { BsThreeDotsVertical } from "react-icons/bs";
import LikeSavedCommentBtns from "../../Components/comments/LikeSavedCommentBtns";

function CommunityPost({ post }) {
  const { userInfo } = useSelector((state) => state.auth);

  const [isVisible, setIsVisible] = useState(false);
  const [popup, setPopup] = useState(false);
  const [files, setFiles] = useState([]);

  const [deletePost] = useDeletePostMutation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    // Update files state when post changes
    setFiles(post?.files || []);
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

  const showModal = () => setIsVisible(true);
  const hideModal = () => setIsVisible(false);
  const confirmPrivacy = () => {
    alert("Privacy accepted");
    hideModal();
  };

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

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setCarouselVisible(true);
  };

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
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

        {files.length !==0 && <div className="flex w-[90%] h-96 flex-wrap gap-1 mt-4">
          {files.slice(0, 4).map((file, index) =>
            (() => {
              if (files.length === 3 ||files.length === 4) {
                return (
                  <div
                    key={index}
                    className="w-[35%]  bg-cover bg-center rounded-md cursor-pointer"
                    style={{ backgroundImage: `url(${file.file})` }}
                    onClick={() => handleImageClick(index)}
                  ></div>
                );
              } 
              else if (files.length == 1) {
                return (
                  <div
                    key={index}
                    className="w-[50%] h-full  rounded-md cursor-pointer"
                    style={{
                      backgroundImage: `url(${file.file})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => handleImageClick(index)}
                  ></div>
                );
              } 
              else if (files.length == 1) {
                return (
                  <div
                    key={index}
                    className="w-[50%] h-full  rounded-md cursor-pointer"
                    style={{
                      backgroundImage: `url(${file.file})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => handleImageClick(index)}
                  ></div>
                );
              } 
              else if (files.length == 2) {
                return (
                  <div
                    key={index}
                    className="w-[35%] h-full  rounded-md cursor-pointer"
                    style={{
                      backgroundImage: `url(${file.file})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => handleImageClick(index)}
                  ></div>
                );
              } 
              
              else {
                return null;
              }
            })()
          )}
        </div>}

        {carouselVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full max-w-3xl">
              <div
                style={{
                  backgroundImage: `url(${files[currentIndex]?.file})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="w-full h-[500px] rounded-md object-contain duration-500"
              ></div>
              <div
                className="absolute top-4 right-4 text-white cursor-pointer"
                onClick={handleCloseCarousel}
              >
                <BsX size={30} />
              </div>
              <div className="absolute top-[50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              <div className="absolute top-[50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
        )}

        <div>
          <LikeSavedCommentBtns showModal={showModal} post={post} />
        </div>
      </div>
    </>
  );
}

export default CommunityPost;
